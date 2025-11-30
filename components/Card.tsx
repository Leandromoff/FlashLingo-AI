import React, { useState, useEffect, useRef } from 'react';
import { FlashcardData, PronunciationResult, SupportedLanguage } from '../types';
import { RefreshCw, Loader2, Sparkles, Zap, Mic, Check, X } from 'lucide-react';
import { playCloudAudio, playLocalAudio, preloadCloudAudio, evaluatePronunciation } from '../services/geminiService';

interface CardProps {
  data: FlashcardData;
  isFlipped: boolean;
  onFlip: () => void;
  enableKaraoke: boolean;
  enablePronunciation: boolean;
  targetLanguage: SupportedLanguage;
  onStudy: () => void;
  onKnow: () => void;
}

type AudioSource = 'cloud' | 'local' | null;

const Card: React.FC<CardProps> = ({ 
  data, 
  isFlipped, 
  onFlip, 
  enableKaraoke, 
  enablePronunciation, 
  targetLanguage,
  onStudy,
  onKnow
}) => {
  const [playingSource, setPlayingSource] = useState<AudioSource>(null);
  const [activeSyllableIndex, setActiveSyllableIndex] = useState<number>(-1);
  
  // Recording States
  const [isRecording, setIsRecording] = useState(false);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [evalResult, setEvalResult] = useState<PronunciationResult | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  // Use ReturnType<typeof setTimeout> to handle both browser (number) and Node (Timeout object) environments
  const recordingTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Refs for animation
  const startTimeRef = useRef<number>(0);
  const durationRef = useRef<number>(0);
  const animationFrameRef = useRef<number>(0);

  // Reset states when card changes
  useEffect(() => {
    setEvalResult(null);
    stopRecordingInternal(); // Ensure recording stops if user flips fast
    setIsAnalyzing(false);
  }, [data.id]);
  
  // Cleanup animation on unmount or data change
  useEffect(() => {
    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      if (recordingTimeoutRef.current) {
        clearTimeout(recordingTimeoutRef.current);
      }
    };
  }, [data.id]);

  // Function to handle frame updates for karaoke effect
  const animateSyllables = () => {
    const now = performance.now();
    const elapsed = (now - startTimeRef.current) / 1000; // in seconds
    const progress = Math.min(1, elapsed / durationRef.current);
    
    // Calculate which syllable should be active based on linear time distribution
    const syllables = data.syllables && data.syllables.length > 0 ? data.syllables : [data.word];
    const totalSyllables = syllables.length;
    
    if (progress < 1) {
      const currentIndex = Math.floor(progress * totalSyllables);
      setActiveSyllableIndex(currentIndex);
      animationFrameRef.current = requestAnimationFrame(animateSyllables);
    } else {
      setActiveSyllableIndex(-1);
    }
  };

  const startKaraoke = (duration: number) => {
    if (!enableKaraoke) return;

    if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    
    startTimeRef.current = performance.now();
    durationRef.current = duration;
    
    if (data.syllables && data.syllables.length > 0) {
        animateSyllables();
    }
  };

  // Auto-play local audio when card changes AND pre-load cloud audio
  useEffect(() => {
    let mounted = true;
    setActiveSyllableIndex(-1);

    const autoPlayAndPreload = async () => {
      if (isFlipped) return;

      preloadCloudAudio(data.word);
      preloadCloudAudio(data.exampleSentence);

      try {
        setPlayingSource('local');
        await new Promise(resolve => setTimeout(resolve, 150));
        
        if (mounted) {
          await playLocalAudio(data.word, targetLanguage, (duration) => {
             if (mounted) startKaraoke(duration);
          });
        }
      } catch (error) {
        console.error("Auto-play failed:", error);
      } finally {
        if (mounted) {
          setPlayingSource(null);
          setActiveSyllableIndex(-1);
        }
      }
    };

    autoPlayAndPreload();

    return () => {
      mounted = false;
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [data.id, data.word, data.exampleSentence, targetLanguage]); 

  const handleCloudPlay = async (text: string, isMainWord: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingSource) return;

    setPlayingSource('cloud');
    try {
      await playCloudAudio(text, (duration) => {
        if (isMainWord) {
            startKaraoke(duration);
        }
      });
    } catch (error) {
      console.error("Cloud speech failed", error);
    } finally {
      setPlayingSource(null);
      setActiveSyllableIndex(-1);
    }
  };

  const handleLocalPlay = async (text: string, isMainWord: boolean, e: React.MouseEvent) => {
    e.stopPropagation();
    if (playingSource) return;
    
    setPlayingSource('local');
    try {
      await playLocalAudio(text, targetLanguage, (duration) => {
        if (isMainWord) {
            startKaraoke(duration);
        }
      });
    } finally {
      setPlayingSource(null);
      setActiveSyllableIndex(-1);
    }
  };

  // --- RECORDING LOGIC ---
  
  const stopRecordingInternal = () => {
    if (recordingTimeoutRef.current) {
      clearTimeout(recordingTimeoutRef.current);
      recordingTimeoutRef.current = null;
    }
    
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const startRecording = async (e: React.MouseEvent) => {
    e.stopPropagation();
    
    if (isAnalyzing) return;
    if (isRecording) {
        // Allow manual stop if desired, though it auto-stops
        stopRecordingInternal();
        return;
    }

    try {
      setEvalResult(null);
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      chunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunksRef.current, { type: 'audio/webm' });
        setIsAnalyzing(true);
        
        const result = await evaluatePronunciation(audioBlob, data.word, targetLanguage);
        
        setEvalResult(result);
        setIsAnalyzing(false);
        
        stream.getTracks().forEach(track => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);

      // Auto stop after 3.5 seconds
      recordingTimeoutRef.current = setTimeout(() => {
        stopRecordingInternal();
      }, 3500);

    } catch (err) {
      console.error("Microphone access denied:", err);
      alert("Permita o acesso ao microfone para usar este recurso.");
    }
  };

  const renderWord = () => {
    const syllables = data.syllables && data.syllables.length > 0 ? data.syllables : [data.word];
    const fullWordLower = data.word.toLowerCase();
    
    // Group syllables into words to prevent breaking inside a word
    const words: { syllables: { text: string; index: number }[] }[] = [];
    let currentWord: { text: string; index: number }[] = [];
    let cursor = 0;

    syllables.forEach((syllable, index) => {
        const syllableLower = syllable.toLowerCase();
        // Look for the syllable in the text starting from cursor
        const matchIndex = fullWordLower.indexOf(syllableLower, cursor);
        let hasSpaceAfter = false;

        if (matchIndex !== -1) {
            const endOfSyllable = matchIndex + syllable.length;
            
            // Check if there is a space before the next syllable starts
            if (index < syllables.length - 1) {
                const nextSyllable = syllables[index + 1].toLowerCase();
                const nextMatchIndex = fullWordLower.indexOf(nextSyllable, endOfSyllable);
                
                if (nextMatchIndex !== -1) {
                    const gap = fullWordLower.slice(endOfSyllable, nextMatchIndex);
                    if (gap.includes(' ')) {
                        hasSpaceAfter = true;
                    }
                }
            }
            cursor = endOfSyllable;
        }

        currentWord.push({ text: syllable, index });

        // If space detected or it's the last syllable, finalize the word group
        if (hasSpaceAfter || index === syllables.length - 1) {
            words.push({ syllables: currentWord });
            currentWord = [];
        }
    });

    return (
      <div className="flex flex-wrap justify-center items-end gap-x-3 gap-y-2 w-full text-4xl md:text-5xl font-extrabold text-center">
        {words.map((wordGroup, i) => (
          <span key={i} className="whitespace-nowrap inline-flex">
            {wordGroup.syllables.map((syl) => (
                <span 
                key={syl.index}
                className={`transition-colors duration-75 leading-none ${
                    activeSyllableIndex === syl.index 
                    ? 'bg-yellow-200 dark:bg-amber-600 text-slate-900 dark:text-white rounded-lg' 
                    : 'text-slate-800 dark:text-slate-100'
                }`}
                >
                {syl.text}
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

  const renderFeedbackBars = () => {
    if (!evalResult) return null;
    const { score } = evalResult;

    return (
      <div className="flex flex-col items-center mt-3 animate-in fade-in slide-in-from-top-2">
        <div className="flex gap-1.5">
          {/* Bar 1: Red (Always active if result exists - base level) */}
          <div className={`h-1.5 w-8 rounded-full transition-colors ${
            score >= 0 ? 'bg-red-500' : 'bg-slate-200 dark:bg-slate-700'
          }`} />
          
          {/* Bar 2: Yellow (Active if score >= 40) */}
          <div className={`h-1.5 w-8 rounded-full transition-colors ${
            score >= 40 ? 'bg-yellow-400' : 'bg-slate-200 dark:bg-slate-700'
          }`} />
          
          {/* Bar 3: Green (Active if score >= 70) */}
          <div className={`h-1.5 w-8 rounded-full transition-colors ${
            score >= 70 ? 'bg-green-500' : 'bg-slate-200 dark:bg-slate-700'
          }`} />
        </div>
      </div>
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
              <div className="flex items-center gap-3">
                {/* Local Audio */}
                <button 
                  onClick={(e) => handleLocalPlay(data.word, true, e)}
                  disabled={playingSource !== null || isRecording}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors border ${
                    playingSource === 'local'
                      ? 'bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 border-amber-200 dark:border-amber-800/50 shadow-inner'
                      : 'bg-white dark:bg-slate-700 border-slate-200 dark:border-slate-600 text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-600'
                  }`}
                  title="Áudio Rápido"
                >
                  <Zap size={18} className={playingSource === 'local' ? "fill-current" : ""} />
                </button>

                {/* Cloud Audio */}
                <button 
                  onClick={(e) => handleCloudPlay(data.word, true, e)}
                  disabled={playingSource !== null || isRecording}
                  className={`flex items-center justify-center w-10 h-10 rounded-full transition-colors border ${
                    playingSource === 'cloud'
                      ? 'bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border-indigo-200 dark:border-indigo-800/50 cursor-wait' 
                      : 'bg-indigo-50 dark:bg-slate-700 text-indigo-700 dark:text-indigo-400 border-indigo-100 dark:border-slate-600 hover:bg-indigo-100 dark:hover:bg-slate-600 shadow-sm'
                  }`}
                  title="Áudio Natural"
                >
                  {playingSource === 'cloud' ? (
                    <Loader2 size={18} className="animate-spin" />
                  ) : (
                    <Sparkles size={18} />
                  )}
                </button>

                {/* Microphone Button with Auto-Stop Viz (CONDITIONAL) */}
                {enablePronunciation && (
                  <div className="relative">
                    <button 
                      onClick={startRecording}
                      disabled={playingSource !== null || isAnalyzing}
                      className={`flex items-center justify-center w-10 h-10 rounded-full transition-all border relative z-10 ${
                        isRecording
                          ? 'bg-red-500 text-white border-red-600 shadow-md' 
                          : isAnalyzing
                          ? 'bg-slate-100 dark:bg-slate-700 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-600'
                          : 'bg-white dark:bg-slate-700 text-slate-500 dark:text-slate-300 border-slate-200 dark:border-slate-600 hover:border-red-200 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20'
                      }`}
                      title={isRecording ? "Gravando..." : "Avaliar Pronúncia"}
                    >
                      {isAnalyzing ? (
                        <Loader2 size={18} className="animate-spin" />
                      ) : isRecording ? (
                        <Mic size={18} className="animate-pulse" />
                      ) : (
                        <Mic size={18} />
                      )}
                    </button>
                    {/* Simple ring animation for recording timer */}
                    {isRecording && (
                      <span className="absolute inset-0 rounded-full border-2 border-red-200 animate-ping"></span>
                    )}
                  </div>
                )}
              </div>

              {/* Pronunciation Feedback (CONDITIONAL) */}
              {enablePronunciation && renderFeedbackBars()}
            </div>

            {/* Divider */}
            <div className="w-16 h-1 bg-slate-100 dark:bg-slate-700 rounded-full my-1"></div>

            {/* Sentence Section */}
            <div className="w-full bg-slate-50 dark:bg-slate-900/50 p-3 rounded-2xl border border-slate-100 dark:border-slate-700 mt-1">
              <p className="text-slate-600 dark:text-slate-300 text-base italic font-medium mb-2 line-clamp-3">
                "{data.exampleSentence}"
              </p>
              
              <div className="flex justify-center gap-3">
                 <button 
                  onClick={(e) => handleLocalPlay(data.exampleSentence, false, e)}
                  disabled={playingSource !== null || isRecording}
                  className="p-1.5 rounded-full bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-600 text-slate-400 dark:text-slate-500 hover:text-amber-500 hover:border-amber-200 transition-all"
                >
                  <Zap size={14} className={playingSource === 'local' ? "fill-current text-amber-500" : ""} />
                </button>

                <button 
                  onClick={(e) => handleCloudPlay(data.exampleSentence, false, e)}
                  disabled={playingSource !== null || isRecording}
                  className="p-1.5 rounded-full bg-white dark:bg-slate-800 border border-indigo-100 dark:border-slate-600 text-indigo-400 dark:text-indigo-500 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-slate-700 transition-all shadow-sm"
                >
                  {playingSource === 'cloud' ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
                </button>
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

             {/* Known Button */}
             <button 
               onClick={(e) => { e.stopPropagation(); onKnow(); }}
               className="flex flex-col items-center gap-1 text-green-600 dark:text-green-400 hover:scale-105 transition-transform p-2 group/btn"
               title="Já sei"
             >
               <div className="p-3 bg-green-50 dark:bg-green-900/30 rounded-full border border-green-100 dark:border-green-900/50 group-hover/btn:bg-green-100 dark:group-hover/btn:bg-green-900/50 transition-colors">
                  <Check size={24} strokeWidth={3} />
               </div>
               <span className="text-[10px] font-bold uppercase tracking-wider opacity-70 group-hover/btn:opacity-100">Já sei</span>
             </button>
          </div>
        </div>

        {/* BACK OF CARD */}
        <div className="absolute inset-0 w-full h-full bg-indigo-600 dark:bg-indigo-700 rounded-3xl rotate-y-180 backface-hidden flex flex-col items-center justify-center p-8 text-white">
          <span className="absolute top-6 left-6 text-xs font-bold text-indigo-200 uppercase tracking-widest">
            Português
          </span>

          <div className="flex flex-col items-center text-center space-y-6 w-full">
            
            <div>
               <p className="text-indigo-200 text-xs uppercase font-bold mb-2">Palavra</p>
               <h3 className="text-4xl font-bold leading-tight">
                {data.translation}
              </h3>
            </div>
            
            <div className="w-full border-t border-indigo-500/50"></div>
            
            <div className="w-full bg-indigo-800/30 dark:bg-slate-900/20 p-4 rounded-2xl">
              <p className="text-indigo-300 text-xs uppercase font-bold mb-2">Exemplo traduzido</p>
              <p className="text-white text-lg font-medium italic leading-relaxed">
                "{data.exampleTranslation}"
              </p>
            </div>
            
            <p className="text-indigo-300 text-sm mt-4 animate-pulse">Toque para voltar</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;