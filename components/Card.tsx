import React, { useState, useEffect, useRef } from 'react';
import { FlashcardData, SupportedLanguage } from '../types';
import { RefreshCw, Loader2, Sparkles, Zap, Check, X, Eye, EyeOff, Snail, ArrowLeft } from 'lucide-react';
import { playLocalAudio } from '../services/audioService';

interface CardProps {
  data: FlashcardData;
  isFlipped: boolean;
  onFlip: () => void;
  targetLanguage: SupportedLanguage;
  onStudy: () => void;
  onKnow: () => void;
  onPrevious: () => void;
  isPreviousDisabled: boolean;
}

type AudioSource = 'local' | 'slow' | null;

const Card: React.FC<CardProps> = ({ 
  data, 
  isFlipped, 
  onFlip, 
  targetLanguage,
  onStudy,
  onKnow,
  onPrevious,
  isPreviousDisabled
}) => {
  const [playingSource, setPlayingSource] = useState<AudioSource>(null);
  const [showGrammar, setShowGrammar] = useState<boolean>(false);
  const [isWakeLockActive, setIsWakeLockActive] = useState<boolean>(false);
  const [showIpaPhonetics, setShowIpaPhonetics] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_show_ipa_phonetics');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [showPtPhonetics, setShowPtPhonetics] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_show_pt_phonetics');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  const [showTranslation, setShowTranslation] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_show_translation');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  useEffect(() => {
    localStorage.setItem('flashlingo_show_ipa_phonetics', JSON.stringify(showIpaPhonetics));
  }, [showIpaPhonetics]);

  useEffect(() => {
    localStorage.setItem('flashlingo_show_pt_phonetics', JSON.stringify(showPtPhonetics));
  }, [showPtPhonetics]);

  useEffect(() => {
    localStorage.setItem('flashlingo_show_translation', JSON.stringify(showTranslation));
  }, [showTranslation]);

  const handleToggleIpa = () => {
    const nextIpa = !showIpaPhonetics;
    setShowIpaPhonetics(nextIpa);
    if (nextIpa) {
      setShowPtPhonetics(false);
      setShowTranslation(false);
    }
  };

  const handleTogglePt = () => {
    const nextPt = !showPtPhonetics;
    setShowPtPhonetics(nextPt);
    if (nextPt) {
      setShowIpaPhonetics(false);
      setShowTranslation(false);
    }
  };

  const handleToggleTranslation = () => {
    const nextTrad = !showTranslation;
    setShowTranslation(nextTrad);
    if (nextTrad) {
      setShowIpaPhonetics(false);
      setShowPtPhonetics(false);
    }
  };

  // Autoplay preference states loaded from and saved to localStorage
  const [autoplayLocal, setAutoplayLocal] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_autoplay_local');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });
  const [autoplaySlow, setAutoplaySlow] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_autoplay_slow');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });
  const [autoplayKnow, setAutoplayKnow] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_autoplay_know');
      return saved ? JSON.parse(saved) : false;
    } catch {
      return false;
    }
  });

  // Keep track of which specific plays have been executed for the current card ID to prevent duplicate plays.
  // This allows us to trigger them immediately when the user toggles a checkbox from false to true on the current card
  // OR automatically when moving to a new card.
  const autoplayTrackRef = useRef<{ id: string | null; local: boolean; slow: boolean; know: boolean }>({
    id: null,
    local: false,
    slow: false,
    know: false,
  });

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_local', JSON.stringify(autoplayLocal));
  }, [autoplayLocal]);

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_slow', JSON.stringify(autoplaySlow));
  }, [autoplaySlow]);

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_know', JSON.stringify(autoplayKnow));
  }, [autoplayKnow]);

  // Enforce invariant: autoplayKnow requires at least one audio/reading option to be active
  useEffect(() => {
    if (autoplayKnow && !autoplayLocal && !autoplaySlow) {
      setAutoplayKnow(false);
    }
  }, [autoplayLocal, autoplaySlow, autoplayKnow]);

  // Autoplay sequence effect running programmatically in the requested sequence:
  // Fast Audio ('local') -> Slow Audio ('slow') -> Auto Advance
  useEffect(() => {
    if (isFlipped) return;

    // Is it a new card? Reset our execution tracking
    if (autoplayTrackRef.current.id !== data.id) {
      autoplayTrackRef.current = {
        id: data.id,
        local: false,
        slow: false,
        know: false,
      };
    }

    // Determine what needs to run: enabled items that have not played yet for this card
    const shouldPlayLocal = autoplayLocal && !autoplayTrackRef.current.local;
    const shouldPlaySlow = autoplaySlow && !autoplayTrackRef.current.slow;
    const shouldAutoKnow = autoplayKnow && !autoplayTrackRef.current.know;

    if (!shouldPlayLocal && !shouldPlaySlow && !shouldAutoKnow) {
      return;
    }

    let isCancelled = false;

    const playAutoplaySequence = async () => {
      // 500ms delay to let sliding transitions finish smoothly
      await new Promise(resolve => setTimeout(resolve, 500));
      if (isCancelled || !isMounted.current) return;

      // 1. Local Autoplay (Áudio Rápido)
      if (shouldPlayLocal && !isCancelled && isMounted.current) {
        if (playingSource === null) {
          setPlayingSource('local');
          autoplayTrackRef.current.local = true;
          try {
            await playLocalAudio(data.word, targetLanguage, undefined);
          } catch (e) {
            console.error("Autoplay local error:", e);
          } finally {
            if (!isCancelled && isMounted.current) {
              setPlayingSource(null);
            }
          }
          await new Promise(resolve => setTimeout(resolve, 600));
        }
      }

      // 2. Slow Autoplay (Modo Tartaruga)
      if (shouldPlaySlow && !isCancelled && isMounted.current) {
        if (playingSource === null) {
          setPlayingSource('slow');
          autoplayTrackRef.current.slow = true;
          try {
            await playLocalAudio(data.word, targetLanguage, undefined, undefined, 0.5);
          } catch (e) {
            console.error("Autoplay slow error:", e);
          } finally {
            if (!isCancelled && isMounted.current) {
              setPlayingSource(null);
            }
          }
          await new Promise(resolve => setTimeout(resolve, 600));
        }
      }

      // 4. Auto Advance (Já sei) if enabled
      if (shouldAutoKnow && !isCancelled && isMounted.current) {
        autoplayTrackRef.current.know = true;
        // Wait another 800ms for a natural pause before advancing
        await new Promise(resolve => setTimeout(resolve, 800));
        if (!isCancelled && isMounted.current) {
          onKnow();
        }
      }
    };

    playAutoplaySequence();

    return () => {
      isCancelled = true;
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, [data.id, isFlipped, autoplayLocal, autoplaySlow, autoplayKnow, targetLanguage]);

  // Prevent screen sleep (Wake Lock) when autoplay/auto-advance is enabled
  useEffect(() => {
    let wakeLock: any = null;
    const isAutoplayActive = autoplayLocal || autoplaySlow || autoplayKnow;

    const requestWakeLock = async () => {
      if (!isAutoplayActive) {
        setIsWakeLockActive(false);
        return;
      }
      if ('wakeLock' in navigator) {
        try {
          if (wakeLock) {
            await wakeLock.release().catch(() => {});
          }
          wakeLock = await (navigator as any).wakeLock.request('screen');
          setIsWakeLockActive(true);
          
          wakeLock.addEventListener('release', () => {
            setIsWakeLockActive(false);
          });
        } catch (err) {
          console.warn('Wake Lock request failed:', err);
          setIsWakeLockActive(false);
        }
      }
    };

    const handleVisibilityChange = async () => {
      if (document.visibilityState === 'visible') {
        await requestWakeLock();
      } else {
        setIsWakeLockActive(false);
      }
    };

    if (isAutoplayActive) {
      requestWakeLock();
      document.addEventListener('visibilitychange', handleVisibilityChange);
    } else {
      setIsWakeLockActive(false);
    }

    return () => {
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (wakeLock) {
        wakeLock.release().catch((err: any) => console.warn('Wake Lock release failed:', err));
      }
    };
  }, [autoplayLocal, autoplaySlow, autoplayKnow]);

  const isMounted = useRef<boolean>(true);

  // Track component mount status
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      // Stop any playing audio when the component unmounts
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  useEffect(() => {
    setShowGrammar(false);
    setPlayingSource(null);

    // Cancel speech synthesis immediately to stop current audio on card/language/flip changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }, [data.id, data.word, data.exampleSentence, targetLanguage, isFlipped]);

  const handleSlowPlay = async (text: string, isMainWord: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingSource) return;

    if (isMounted.current) setPlayingSource('slow');
    try {
      await playLocalAudio(text, targetLanguage, undefined, undefined, 0.5);
    } finally {
      if (isMounted.current) {
        setPlayingSource(null);
      }
    }
  };

  const handleLocalPlay = async (text: string, isMainWord: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingSource) return;
    
    if (isMounted.current) setPlayingSource('local');
    try {
      await playLocalAudio(text, targetLanguage, undefined);
    } finally {
      if (isMounted.current) {
        setPlayingSource(null);
      }
    }
  };

  const renderSentence = () => {
    return (
      <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2 text-center">
        {data.exampleSentence}
      </p>
    );
  };

  const renderWord = () => {
    let fontSizeClass = "text-2xl md:text-3xl font-extrabold";
    if (data.word.length > 80) {
      fontSizeClass = "text-base md:text-lg font-bold";
    } else if (data.word.length > 40) {
      fontSizeClass = "text-xl md:text-2xl font-extrabold";
    }

    return (
      <div className={`w-full text-center ${fontSizeClass} text-slate-800 dark:text-white leading-tight`}>
        {data.word}
      </div>
    );
  };

  const renderPhoneticChunk = (text: string, className: string) => {
    return (
      <span className={`inline-block ${className}`}>
        {text.trim()}
      </span>
    );
  };

  const getLanguageLabel = () => {
    switch (targetLanguage) {
      case 'es': return 'Espanhol';
      default: return 'Inglês';
    }
  };

  return (
    <div 
      className="group w-full h-[600px] cursor-pointer perspective-1000"
      onClick={onFlip}
    >
      <div className={`relative w-full h-full transition-all duration-500 transform-style-3d shadow-xl dark:shadow-2xl dark:shadow-indigo-900/20 rounded-3xl ${isFlipped ? 'rotate-y-180' : ''}`}>
        
        {/* FRONT OF CARD */}
        <div className="absolute inset-0 w-full h-full bg-white dark:bg-slate-800 rounded-3xl backface-hidden flex flex-col items-center justify-between p-6 border-2 border-slate-100 dark:border-slate-700 overflow-hidden">
          <span className="absolute top-6 left-6 text-xs font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest z-10">
            {getLanguageLabel()}
          </span>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-slate-50/90 dark:bg-slate-800/90 p-1 rounded-full border border-slate-150 dark:border-slate-700 shadow-sm"
          >
            <button
              onClick={() => handleToggleIpa()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showIpaPhonetics
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showIpaPhonetics ? 'Ocultar IPA' : 'Mostrar IPA'}
            >
              <span>IPA</span>
              {showIpaPhonetics ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
            <span className="text-slate-300 dark:text-slate-600 font-extralight text-xs select-none">|</span>
            <button
              onClick={() => handleTogglePt()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showPtPhonetics
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showPtPhonetics ? 'Ocultar Fonética PT' : 'Mostrar Fonética PT'}
            >
              <span>PT</span>
              {showPtPhonetics ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
            <span className="text-slate-300 dark:text-slate-600 font-extralight text-xs select-none">|</span>
            <button
              onClick={() => handleToggleTranslation()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showTranslation
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showTranslation ? 'Ocultar Tradução' : 'Mostrar Tradução'}
            >
              <span>TD</span>
              {showTranslation ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
          </div>
          
          {/* Content Container */}
          <div className="flex flex-col items-center text-center w-full flex-grow justify-center mt-6">
            
            {/* Word Section */}
            <div className="flex flex-col items-center gap-2 w-full mt-8">
              {renderWord()}
              
              {/* Combined Pill based on selections */}
              {(showIpaPhonetics || showPtPhonetics || showTranslation) ? (
                <div 
                  className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-2xl border border-slate-100 dark:border-slate-700 text-center cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-900/40 active:scale-[0.98] transition-all animate-in fade-in zoom-in-95 duration-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setShowIpaPhonetics(false);
                    setShowPtPhonetics(false);
                    setShowTranslation(false);
                  }}
                  title="Clique para ocultar"
                >
                  {/* Standard IPA */}
                  {showIpaPhonetics && data.pronunciation && renderPhoneticChunk(
                      data.pronunciation.replace(/[\/\[\]]/g, ''), 
                      "text-indigo-400/75 dark:text-indigo-400 font-medium text-lg tracking-wide"
                  )}

                  {/* Portuguese Phonetic */}
                  {showPtPhonetics && data.portuguesePhonetic && renderPhoneticChunk(
                      data.portuguesePhonetic.replace(/[\[\]]/g, ''),
                      "text-indigo-400/75 dark:text-indigo-400 font-medium text-lg tracking-wide"
                  )}

                  {/* Translation */}
                  {showTranslation && (
                    <span className="text-indigo-400/75 dark:text-indigo-400 font-medium text-lg tracking-wide">
                      {data.translation}
                    </span>
                  )}
                </div>
              ) : (
                <div 
                  className="flex items-center gap-2 mt-1"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => handleToggleIpa()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50/50 border border-dashed border-slate-200 dark:border-slate-700 dark:bg-slate-900/30 dark:hover:bg-indigo-950/20 text-slate-400 dark:text-slate-500 hover:text-indigo-500 hover:border-indigo-200 dark:hover:text-indigo-450 rounded-xl text-xs font-semibold transition-all shadow-sm"
                    title="Mostrar IPA"
                  >
                    <span>IPA</span>
                    <EyeOff size={11} />
                  </button>
                  <button
                    onClick={() => handleTogglePt()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50/50 border border-dashed border-slate-200 dark:border-slate-700 dark:bg-slate-900/30 dark:hover:bg-indigo-950/20 text-slate-400 dark:text-slate-500 hover:text-indigo-500 hover:border-indigo-200 dark:hover:text-indigo-450 rounded-xl text-xs font-semibold transition-all shadow-sm"
                    title="Mostrar Fonética PT"
                  >
                    <span>PT</span>
                    <EyeOff size={11} />
                  </button>
                  <button
                    onClick={() => handleToggleTranslation()}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-50 hover:bg-indigo-50/50 border border-dashed border-slate-200 dark:border-slate-700 dark:bg-slate-900/30 dark:hover:bg-indigo-950/20 text-slate-400 dark:text-slate-500 hover:text-indigo-500 hover:border-indigo-200 dark:hover:text-indigo-450 rounded-xl text-xs font-semibold transition-all shadow-sm"
                    title="Mostrar Tradução"
                  >
                    <span>TD</span>
                    <EyeOff size={11} />
                  </button>
                </div>
              )}
            </div>
            
            {/* Controls Container */}
            <div className="flex flex-col items-center mb-2 mt-8">
              <div className="flex items-center gap-6 md:gap-8 justify-center">
                
                {/* Local Audio (Áudio Rápido) Column */}
                <div className="flex flex-col items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={(e) => handleLocalPlay(data.word, true, e)}
                    disabled={playingSource !== null}
                    className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors border ${
                      playingSource === 'local'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800/50 shadow-inner'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                    }`}
                    title="Áudio Rápido"
                  >
                    <Zap size={18} className={playingSource === 'local' ? "fill-current" : ""} />
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAutoplayLocal(!autoplayLocal);
                    }}
                    className={`relative inline-flex h-3 w-6.5 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                      autoplayLocal 
                        ? 'bg-green-500' 
                        : 'bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-650'
                    }`}
                    title={autoplayLocal ? "Auto Play Ativado" : "Auto Play Desativado"}
                  >
                    <span
                      className={`inline-block h-2 w-2 transform rounded-full bg-white transition-all duration-200 ${
                        autoplayLocal ? 'translate-x-[14px]' : 'translate-x-[2px]'
                      }`}
                    />
                  </button>
                </div>

                {/* Slow Audio (Modo Tartaruga) Column */}
                <div className="flex flex-col items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={(e) => handleSlowPlay(data.word, true, e)}
                    disabled={playingSource !== null}
                    className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors border ${
                      playingSource === 'slow'
                        ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800/50 shadow-inner' 
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                    }`}
                    title="Áudio Lento (Modo Tartaruga)"
                  >
                    <Snail size={18} className={playingSource === 'slow' ? "fill-current" : ""} />
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAutoplaySlow(!autoplaySlow);
                    }}
                    className={`relative inline-flex h-3 w-6.5 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                      autoplaySlow 
                        ? 'bg-green-500' 
                        : 'bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-650'
                    }`}
                    title={autoplaySlow ? "Auto Play Ativado" : "Auto Play Desativado"}
                  >
                    <span
                      className={`inline-block h-2 w-2 transform rounded-full bg-white transition-all duration-200 ${
                        autoplaySlow ? 'translate-x-[14px]' : 'translate-x-[2px]'
                      }`}
                    />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Actions Container (FRONT) */}
          <div className="w-full px-4 flex items-center justify-between gap-4 mt-auto pt-4">
             {/* Voltar Button */}
             <button 
               onClick={(e) => { e.stopPropagation(); if (!isPreviousDisabled) onPrevious(); }}
               disabled={isPreviousDisabled}
               className={`flex flex-col items-center gap-1 transition-transform p-2 group/btn ${isPreviousDisabled ? 'opacity-30 cursor-not-allowed' : 'text-slate-500 hover:scale-105 active:scale-95'}`}
               title="Voltar"
             >
               <div className="p-3 bg-slate-50 dark:bg-slate-900/30 rounded-full border border-slate-150 dark:border-slate-700/50 group-hover/btn:bg-slate-100 dark:group-hover/btn:bg-slate-900/50 transition-colors">
                  <ArrowLeft size={24} strokeWidth={3} />
               </div>
             </button>

             {/* Flip Button - Central and Large */}
             <button 
                 onClick={(e) => { e.stopPropagation(); onFlip(); }} 
                 className="p-4 bg-slate-100 dark:bg-slate-700 text-indigo-500 dark:text-indigo-400 rounded-full shadow-sm ring-1 ring-slate-200 dark:ring-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all hover:scale-110 active:scale-95"
                 title="Virar Carta"
             >
                <RefreshCw size={32} />
             </button>

             {/* Known Button with Autoplay Toggle */}
             <div className="flex flex-col items-center gap-1.5" onClick={(e) => e.stopPropagation()}>
               <button 
                 onClick={(e) => { e.stopPropagation(); onKnow(); }}
                 className="flex flex-col items-center gap-1 text-green-600 dark:text-green-400 hover:scale-105 transition-transform p-2 group/btn"
                 title="Já sei"
               >
                 <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-100 dark:border-green-900/50 group-hover/btn:bg-green-100 dark:group-hover/btn:bg-green-900/50 transition-colors">
                    <Check size={24} strokeWidth={3} />
                 </div>
               </button>
               <button 
                 type="button"
                 onClick={(e) => {
                   e.stopPropagation();
                   const nextVal = !autoplayKnow;
                   if (nextVal && !autoplayLocal && !autoplaySlow) {
                     setAutoplayLocal(true);
                   }
                   setAutoplayKnow(nextVal);
                 }}
                 className={`relative inline-flex h-3 w-6.5 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                   autoplayKnow 
                     ? 'bg-green-500' 
                     : 'bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-650'
                 }`}
                 title={autoplayKnow ? "Avanço Automático Ativado" : "Avanço Automático Desativado"}
               >
                 <span
                   className={`inline-block h-2 w-2 transform rounded-full bg-white transition-all duration-200 ${
                     autoplayKnow ? 'translate-x-[14px]' : 'translate-x-[2px]'
                   }`}
                 />
               </button>
             </div>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div className="absolute inset-0 w-full h-full bg-slate-50 dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 rounded-3xl rotate-y-180 backface-hidden flex flex-col items-center justify-center p-8 text-slate-800 dark:text-white overflow-y-auto">
          <span className="absolute top-6 left-6 text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest">
            Português
          </span>

          <div 
            onClick={(e) => e.stopPropagation()} 
            className="absolute top-4 right-4 z-20 flex items-center gap-1 bg-slate-150/90 dark:bg-slate-800/90 p-1 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm"
          >
            <button
              onClick={() => handleToggleIpa()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showIpaPhonetics
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showIpaPhonetics ? 'Ocultar IPA' : 'Mostrar IPA'}
            >
              <span>IPA</span>
              {showIpaPhonetics ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
            <span className="text-slate-350 dark:text-slate-600 font-extralight text-xs select-none">|</span>
            <button
              onClick={() => handleTogglePt()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showPtPhonetics
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showPtPhonetics ? 'Ocultar Fonética PT' : 'Mostrar Fonética PT'}
            >
              <span>PT</span>
              {showPtPhonetics ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
            <span className="text-slate-350 dark:text-slate-600 font-extralight text-xs select-none">|</span>
            <button
              onClick={() => handleToggleTranslation()}
              className={`flex items-center gap-1 px-2 py-1 rounded-full text-[10px] sm:text-[11px] font-bold transition-all ${
                showTranslation
                  ? 'bg-indigo-500 text-white shadow-sm'
                  : 'bg-transparent text-slate-500 hover:bg-slate-200 dark:text-slate-400 dark:hover:bg-slate-700'
              }`}
              title={showTranslation ? 'Ocultar Tradução' : 'Mostrar Tradução'}
            >
              <span>TD</span>
              {showTranslation ? <Eye size={11} /> : <EyeOff size={11} />}
            </button>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 w-full h-full justify-center">
            
            <div className="shrink-0 w-full px-4">
               <p className="text-slate-400 dark:text-slate-500 text-xs uppercase font-bold mb-2">Palavra</p>
               <h3 className={`font-bold leading-tight ${data.translation.length > 60 ? 'text-xl' : data.translation.length > 30 ? 'text-2xl' : 'text-3xl'}`}>
                {data.translation}
              </h3>
            </div>
            
            <div className="w-full border-t border-slate-200 dark:border-slate-700/50"></div>
            
            {data.exampleSentence && data.exampleTranslation && (
              <div className="w-full bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl shrink-0">
                <div className="flex justify-between items-center mb-2">
                  <p className="text-slate-400 dark:text-slate-400 text-xs uppercase font-bold">Exemplo traduzido</p>
                  <div className="flex gap-2">
                    <button 
                      onClick={(e) => handleSlowPlay(data.exampleSentence, false, e)}
                      disabled={playingSource !== null}
                      className={`p-1.5 rounded-full transition-all border ${
                        playingSource === 'slow'
                          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800/50'
                          : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                      }`}
                      title="Áudio Lento"
                    >
                      <Snail size={12} className={playingSource === 'slow' ? "fill-current" : ""} />
                    </button>
                    <button 
                      onClick={(e) => handleLocalPlay(data.exampleSentence, false, e)}
                      disabled={playingSource !== null}
                      className={`p-1.5 rounded-full transition-all border ${
                        playingSource === 'local'
                          ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800/50'
                          : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                      }`}
                    >
                      <Zap size={12} className={playingSource === 'local' ? "fill-current" : ""} />
                    </button>
                  </div>
                </div>
                {renderSentence()}
                <p className="text-slate-700 dark:text-slate-300 text-lg font-bold italic leading-relaxed">
                  "{data.exampleTranslation}"
                </p>
              </div>
            )}

            {/* Grammar Explanation Block */}
            {data.grammarExplanation && (
              <div className="w-full flex flex-col items-center gap-2 shrink-0">
                {!showGrammar ? (
                  <button 
                    onClick={(e) => { e.stopPropagation(); setShowGrammar(true); }}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-100 hover:bg-slate-200 border border-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 dark:border-slate-700 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 transition-all"
                  >
                    <Sparkles size={14} className="text-indigo-500 dark:text-indigo-400" /> Ver Gramática
                  </button>
                ) : (
                  <div className="w-full bg-slate-100 dark:bg-slate-800/80 p-4 rounded-2xl border border-slate-200 dark:border-slate-700 animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <p className="text-slate-400 dark:text-slate-400 text-xs uppercase font-bold mb-2 flex items-center justify-center gap-1">
                      <Sparkles size={12} className="text-indigo-500 dark:text-indigo-400" /> Gramática
                    </p>
                    <p className="text-slate-700 dark:text-slate-300 text-sm leading-relaxed font-light">
                      {data.grammarExplanation}
                    </p>
                  </div>
                )}
              </div>
            )}
            
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-2 animate-pulse shrink-0">Toque para virar</p>
          </div>

          {/* Bottom Actions Container (BACK) */}
          <div className="w-full px-4 flex items-center justify-between gap-4 mt-auto pt-4" onClick={(e) => e.stopPropagation()}>
             {/* Não sei / Estudar Button */}
             <button 
               onClick={(e) => { e.stopPropagation(); onStudy(); }}
               className="flex flex-col items-center gap-1 text-red-500 dark:text-red-400 hover:scale-105 active:scale-95 transition-transform p-2 group/btn"
               title="Estudar"
             >
               <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-full border border-red-100 dark:border-red-900/50 group-hover/btn:bg-red-100 dark:group-hover/btn:bg-red-900/50 transition-colors">
                  <X size={24} strokeWidth={3} />
               </div>
             </button>

             {/* Flip Button - Central and Large */}
             <button 
                 onClick={(e) => { e.stopPropagation(); onFlip(); }} 
                 className="p-4 bg-slate-100 dark:bg-slate-700 text-indigo-500 dark:text-indigo-400 rounded-full shadow-sm ring-1 ring-slate-200 dark:ring-slate-600 hover:bg-slate-200 dark:hover:bg-slate-600 transition-all hover:scale-110 active:scale-95"
                 title="Virar Carta"
             >
                <RefreshCw size={32} />
             </button>

             {/* Já sei Button */}
             <button 
               onClick={(e) => { e.stopPropagation(); onKnow(); }}
               className="flex flex-col items-center gap-1 text-green-600 dark:text-green-400 hover:scale-105 active:scale-95 transition-transform p-2 group/btn"
               title="Já sei"
             >
               <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-100 dark:border-green-900/50 group-hover/btn:bg-green-100 dark:group-hover/btn:bg-green-900/50 transition-colors">
                  <Check size={24} strokeWidth={3} />
               </div>
             </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
