import React, { useState, useEffect, useRef } from 'react';
import { FlashcardData, SupportedLanguage } from '../types';
import { RefreshCw, Loader2, Sparkles, Zap, Check, X, Eye, Snail } from 'lucide-react';
import { playLocalAudio } from '../services/geminiService';

interface CardProps {
  data: FlashcardData;
  isFlipped: boolean;
  onFlip: () => void;
  targetLanguage: SupportedLanguage;
  onStudy: () => void;
  onKnow: () => void;
}

type AudioSource = 'local' | 'visual' | 'slow' | null;

const Card: React.FC<CardProps> = ({ 
  data, 
  isFlipped, 
  onFlip, 
  targetLanguage,
  onStudy,
  onKnow
}) => {
  const [playingSource, setPlayingSource] = useState<AudioSource>(null);
  const [activeSyllableIndex, setActiveSyllableIndex] = useState<number>(-1);
  const [activeWordIndex, setActiveWordIndex] = useState<number>(-1);
  const [showGrammar, setShowGrammar] = useState<boolean>(false);

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
  const [autoplayVisual, setAutoplayVisual] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('flashlingo_autoplay_visual');
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
  const autoplayTrackRef = useRef<{ id: string | null; local: boolean; slow: boolean; visual: boolean; know: boolean }>({
    id: null,
    local: false,
    slow: false,
    visual: false,
    know: false,
  });

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_local', JSON.stringify(autoplayLocal));
  }, [autoplayLocal]);

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_slow', JSON.stringify(autoplaySlow));
  }, [autoplaySlow]);

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_visual', JSON.stringify(autoplayVisual));
  }, [autoplayVisual]);

  useEffect(() => {
    localStorage.setItem('flashlingo_autoplay_know', JSON.stringify(autoplayKnow));
  }, [autoplayKnow]);

  // Enforce invariant: autoplayKnow requires at least one audio/reading option to be active
  useEffect(() => {
    if (autoplayKnow && !autoplayLocal && !autoplaySlow && !autoplayVisual) {
      setAutoplayKnow(false);
    }
  }, [autoplayLocal, autoplaySlow, autoplayVisual, autoplayKnow]);

  // Autoplay sequence effect running programmatically in the requested sequence:
  // Fast Audio ('local') -> Slow Audio ('slow') -> Visual Reading ('visual') -> Auto Advance
  useEffect(() => {
    if (isFlipped) return;

    // Is it a new card? Reset our execution tracking
    if (autoplayTrackRef.current.id !== data.id) {
      autoplayTrackRef.current = {
        id: data.id,
        local: false,
        slow: false,
        visual: false,
        know: false,
      };
    }

    // Determine what needs to run: enabled items that have not played yet for this card
    const shouldPlayLocal = autoplayLocal && !autoplayTrackRef.current.local;
    const shouldPlaySlow = autoplaySlow && !autoplayTrackRef.current.slow;
    const shouldPlayVisual = autoplayVisual && !autoplayTrackRef.current.visual;
    const shouldAutoKnow = autoplayKnow && !autoplayTrackRef.current.know;

    if (!shouldPlayLocal && !shouldPlaySlow && !shouldPlayVisual && !shouldAutoKnow) {
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

      // 3. Visual Karaoke Autoplay (Leitura Guiada)
      if (shouldPlayVisual && !isCancelled && isMounted.current) {
        if (playingSource === null) {
          setPlayingSource('visual');
          autoplayTrackRef.current.visual = true;
          try {
            const syllables = data.syllables && data.syllables.length > 0 ? data.syllables : [data.word];
            const estimatedDuration = Math.max(1.0, syllables.length * 0.4);
            
            if (!isCancelled && isMounted.current) {
              startKaraoke(estimatedDuration, 'word');
            }
            await new Promise(resolve => setTimeout(resolve, estimatedDuration * 1000));
          } catch (e) {
            console.error("Autoplay visual error:", e);
          } finally {
            if (!isCancelled && isMounted.current) {
              setPlayingSource(null);
              setActiveSyllableIndex(-1);
            }
          }
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
  }, [data.id, isFlipped, autoplayLocal, autoplaySlow, autoplayVisual, autoplayKnow, targetLanguage]);

  // Refs for animation and mounting status
  const startTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);
  const isMounted = useRef<boolean>(true);
  const currentTextType = useRef<'word' | 'sentence'>('word');

  // Track component mount status
  useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
      // Stop any playing audio when the component unmounts
      if ('speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  // Function to handle frame updates for karaoke effect
  const animateKaraoke = () => {
    if (!isMounted.current) return;
    const now = performance.now();
    const elapsed = (now - startTimeRef.current) / 1000; // in seconds
    const progress = Math.min(1, elapsed / durationRef.current);
    
    if (currentTextType.current === 'word') {
      const syllables = data.syllables && data.syllables.length > 0 ? data.syllables : [data.word];
      const totalSyllables = syllables.length;
      
      if (progress < 1) {
        const currentIndex = Math.floor(progress * totalSyllables);
        setActiveSyllableIndex(currentIndex);
        animationFrameRef.current = requestAnimationFrame(animateKaraoke);
      } else {
        setActiveSyllableIndex(-1);
      }
    } else {
      const words = data.exampleSentence.split(/\s+/);
      const totalWords = words.length;
      
      if (progress < 1) {
        const currentIndex = Math.floor(progress * totalWords);
        setActiveWordIndex(currentIndex);
        animationFrameRef.current = requestAnimationFrame(animateKaraoke);
      } else {
        setActiveWordIndex(-1);
      }
    }
  };

  const startKaraoke = (duration: number, type: 'word' | 'sentence' = 'word') => {
    if (!isMounted.current) return;

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    
    currentTextType.current = type;
    startTimeRef.current = performance.now();
    durationRef.current = duration;
    
    animateKaraoke();
  };

  useEffect(() => {
    setActiveSyllableIndex(-1);
    setActiveWordIndex(-1);
    setShowGrammar(false);
    setPlayingSource(null);

    // Cancel speech synthesis immediately to stop current audio on card/language/flip changes
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
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

  const handleVisualKaraoke = async (text: string, isMainWord: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingSource) return;
    
    if (isMounted.current) setPlayingSource('visual');
    try {
      // Estimate duration based on word count
      const wordCount = text.split(/\s+/).length;
      const estimatedDuration = Math.max(1.0, wordCount * 0.5);
      
      if (isMounted.current) {
          startKaraoke(estimatedDuration, isMainWord ? 'word' : 'sentence');
      }
      
      // Wait for the estimated duration
      await new Promise(resolve => setTimeout(resolve, estimatedDuration * 1000));
    } finally {
      if (isMounted.current) {
        setPlayingSource(null);
        setActiveSyllableIndex(-1);
        setActiveWordIndex(-1);
      }
    }
  };

  const renderSentence = () => {
    const words = data.exampleSentence.split(/\s+/);
    return (
      <p className="text-slate-600 dark:text-slate-400 text-sm font-medium mb-2 flex flex-wrap justify-center gap-x-1">
        {words.map((word, i) => (
          <span 
            key={i} 
            className={`transition-colors duration-75 px-1 rounded ${
              activeWordIndex === i 
              ? 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/50 dark:text-indigo-300 font-bold' 
              : ''
            }`}
          >
            {word}
          </span>
        ))}
      </p>
    );
  };

  const renderWord = () => {
    const syllables = data.syllables && data.syllables.length > 0 ? data.syllables : [data.word];
    const fullWordLower = data.word.toLowerCase().replace(/’/g, "'");
    
    // Group syllables into words to prevent breaking inside a word
    const words: { syllables: { text: string; index: number }[] }[] = [];
    let currentWord: { text: string; index: number }[] = [];
    let cursor = 0;

    syllables.forEach((syllable, index) => {
        const syllableLower = syllable.toLowerCase().replace(/’/g, "'");
        // Look for the syllable in the text starting from cursor
        const matchIndex = fullWordLower.indexOf(syllableLower, cursor);
        let hasSpaceAfter = false;

        if (syllable.endsWith(' ')) {
            hasSpaceAfter = true;
        }

        if (index < syllables.length - 1) {
            const nextSyllable = syllables[index + 1];
            if (nextSyllable.startsWith(' ')) {
                hasSpaceAfter = true;
            }
        }

        if (matchIndex !== -1) {
            const endOfSyllable = matchIndex + syllable.length;
            
            // Check if there is a space before the next syllable starts
            if (index < syllables.length - 1) {
                const nextSyllable = syllables[index + 1].toLowerCase().replace(/’/g, "'");
                const nextMatchIndex = fullWordLower.indexOf(nextSyllable, endOfSyllable);
                
                if (nextMatchIndex !== -1) {
                    const gap = fullWordLower.slice(endOfSyllable, nextMatchIndex);
                    if (gap.includes(' ') || nextSyllable.startsWith(' ')) {
                        hasSpaceAfter = true;
                    }
                }
            }
            cursor = endOfSyllable;
        }

        // Force finalization of the previous word group if the current syllable starts with a space
        if (syllable.startsWith(' ') && currentWord.length > 0) {
            words.push({ syllables: currentWord });
            currentWord = [];
        }

        currentWord.push({ text: syllable, index });

        // If space detected or it's the last syllable, finalize the word group
        if (hasSpaceAfter || index === syllables.length - 1) {
            words.push({ syllables: currentWord });
            currentWord = [];
        }
    });

    return (
      <div className="flex flex-wrap justify-center items-end gap-x-3 gap-y-2 w-full text-center text-2xl md:text-3xl font-extrabold">
        {words.map((wordGroup, i) => (
          <span key={i} className="whitespace-nowrap inline-flex">
            {wordGroup.syllables.map((syl) => (
                <span 
                key={syl.index}
                className={`transition-colors duration-75 leading-none ${
                    activeSyllableIndex === syl.index 
                    ? 'bg-yellow-200 dark:bg-amber-600 text-slate-900 dark:text-white rounded-lg'
                    : ''
                }`}
                >
                {syl.text.trim()}
                </span>
            ))}
          </span>
        ))}
      </div>
    );
  };

  const renderPhoneticChunk = (text: string, className: string) => {
    // Split text by spaces and wrap each part in whitespace-nowrap to prevent breaking at hyphens
    const parts = text.trim().split(/\s+/);
    return (
      <span className={`inline-flex flex-wrap justify-center gap-x-2 ${className}`}>
        {parts.map((part, i) => (
          <span key={i} className="whitespace-nowrap">{part}</span>
        ))}
      </span>
    );
  };

  const getLanguageLabel = () => {
    switch (targetLanguage) {
      case 'es': return 'Espanhol';
      case 'fr': return 'Francês';
      case 'it': return 'Italiano';
      case 'de': return 'Alemão';
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
          
          {/* Content Container */}
          <div className="flex flex-col items-center text-center w-full flex-grow justify-center mt-6">
            
            {/* Word Section */}
            <div className="flex flex-col items-center gap-2 w-full mt-8">
              {renderWord()}
              
              {/* Combined Phonetic Pill */}
              <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-2 bg-slate-50 dark:bg-slate-900/50 px-4 py-2 rounded-2xl border border-slate-100 dark:border-slate-700 text-center">
                {/* Standard IPA */}
                {renderPhoneticChunk(
                    data.pronunciation.replace(/[\/\[\]]/g, ''), 
                    "text-slate-500 dark:text-slate-400 font-mono text-lg"
                )}

                {/* Visual Divider - Hidden on very small screens if it wraps */}
                <span className="hidden sm:inline-block w-px h-4 bg-slate-300/50 dark:bg-slate-600/50"></span>

                {/* Portuguese Phonetic */}
                {renderPhoneticChunk(
                    data.portuguesePhonetic,
                    "text-indigo-400/75 dark:text-indigo-400 font-medium text-lg tracking-wide"
                )}
              </div>
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

                {/* Visual Karaoke (Leitura Guiada) Column */}
                <div className="flex flex-col items-center gap-2" onClick={(e) => e.stopPropagation()}>
                  <button 
                    onClick={(e) => handleVisualKaraoke(data.word, true, e)}
                    disabled={playingSource !== null}
                    className={`flex items-center justify-center w-11 h-11 rounded-full transition-colors border ${
                      playingSource === 'visual'
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-500 border-emerald-200 dark:border-emerald-800/50 shadow-inner'
                        : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                    }`}
                    title="Leitura Guiada (Sem Áudio)"
                  >
                    <Eye size={18} className={playingSource === 'visual' ? "fill-current" : ""} />
                  </button>
                  <button 
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      setAutoplayVisual(!autoplayVisual);
                    }}
                    className={`relative inline-flex h-3 w-6.5 items-center rounded-full transition-colors duration-200 focus:outline-none ${
                      autoplayVisual 
                        ? 'bg-green-500' 
                        : 'bg-slate-200 dark:bg-slate-700 border border-slate-300 dark:border-slate-650'
                    }`}
                    title={autoplayVisual ? "Auto Play Ativado" : "Auto Play Desativado"}
                  >
                    <span
                      className={`inline-block h-2 w-2 transform rounded-full bg-white transition-all duration-200 ${
                        autoplayVisual ? 'translate-x-[14px]' : 'translate-x-[2px]'
                      }`}
                    />
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Actions Container (FRONT) */}
          <div className="w-full px-4 flex items-center justify-between gap-4 mt-auto pt-4">
             {/* Estudar Button */}
             <button 
               onClick={(e) => { e.stopPropagation(); onStudy(); }}
               className="flex flex-col items-center gap-1 text-red-500 dark:text-red-400 hover:scale-105 transition-transform p-2 group/btn"
               title="Estudar"
             >
               <div className="p-3 bg-red-50 dark:bg-red-900/30 rounded-full border border-red-100 dark:border-red-900/50 group-hover/btn:bg-red-100 dark:group-hover/btn:bg-red-900/50 transition-colors">
                  <X size={24} strokeWidth={3} />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 group-hover/btn:opacity-100">Estudar</span>
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
                   if (nextVal && !autoplayLocal && !autoplaySlow && !autoplayVisual) {
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

          <div className="flex flex-col items-center text-center space-y-4 w-full h-full justify-center">
            
            <div className="shrink-0">
               <p className="text-slate-400 dark:text-slate-500 text-xs uppercase font-bold mb-2">Palavra</p>
               <h3 className="text-3xl font-bold leading-tight">
                {data.translation}
              </h3>
            </div>
            
            <div className="w-full border-t border-slate-200 dark:border-slate-700/50"></div>
            
            <div className="w-full bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 p-4 rounded-2xl shrink-0">
              <div className="flex justify-between items-center mb-2">
                <p className="text-slate-400 dark:text-slate-400 text-xs uppercase font-bold">Exemplo traduzido</p>
                <div className="flex gap-2">
                  <button 
                    onClick={(e) => handleVisualKaraoke(data.exampleSentence, false, e)}
                    disabled={playingSource !== null}
                    className={`p-1.5 rounded-full transition-all border ${
                      playingSource === 'visual' 
                        ? 'bg-emerald-100 text-emerald-600 border-emerald-200 dark:bg-emerald-900/30 dark:text-emerald-400 dark:border-emerald-800' 
                        : 'bg-indigo-50 hover:bg-indigo-100 border-indigo-100 text-indigo-600 dark:bg-indigo-500/10 dark:hover:bg-indigo-500/20 dark:border-indigo-500/20 dark:text-indigo-400'
                    }`}
                    title="Leitura Guiada"
                  >
                    <Eye size={12} className={playingSource === 'visual' ? "fill-current" : ""} />
                  </button>
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
            
            <p className="text-slate-400 dark:text-slate-500 text-sm mt-2 animate-pulse shrink-0">Toque para voltar</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
