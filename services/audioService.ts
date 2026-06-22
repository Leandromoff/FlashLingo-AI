import { SupportedLanguage } from "../types";

// Helper: Remove parens and specific markdown for local TTS stability
const cleanTextForSpeech = (text: string): string => {
  return text.replace(/\s*\(.*?\)\s*/g, ' ').replace(/\*\*/g, '').trim();
};

// --- LOCAL AUDIO (BROWSER) ---

// GLOBAL VARIABLE TO PREVENT GARBAGE COLLECTION
// This is critical for Chrome/Safari compatibility. If the utterance is not stored globally,
// the garbage collector might delete it while speaking, causing audio stutter or stop.
let activeUtterance: SpeechSynthesisUtterance | null = null;

export const playLocalAudio = (
  text: string, 
  language: SupportedLanguage = 'en', 
  onPlayStart?: (duration: number) => void,
  onBoundary?: (charIndex: number) => void,
  playbackRate: number = 1.0
): Promise<void> => {
  return new Promise((resolve) => {
    if (!('speechSynthesis' in window)) {
      console.warn("Browser does not support speech synthesis");
      resolve();
      return;
    }

    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    // Force clear reference
    activeUtterance = null;

    const cleanedText = cleanTextForSpeech(text);
    const utterance = new SpeechSynthesisUtterance(cleanedText);
    
    // Keep reference alive
    activeUtterance = utterance;

    // Wait until voices are loaded
    let voices = window.speechSynthesis.getVoices();
    
    const setVoiceAndSpeak = () => {
      let langCode = 'en-US';
      if (language === 'es') langCode = 'es-ES'; // Default ES

      utterance.lang = langCode;

      // Prioritize natural voices based on language
      const preferredVoices = voices.filter(v => 
        v.lang.startsWith(langCode.substring(0, 2)) && 
        (v.name.includes('Google') || v.name.includes('Premium') || v.name.includes('Enhanced'))
      );

      if (preferredVoices.length > 0) {
        utterance.voice = preferredVoices[0];
      } else {
        // Fallback to first available language voice
        const fallback = voices.find(v => v.lang.startsWith(langCode.substring(0, 2)));
        if (fallback) utterance.voice = fallback;
      }

      utterance.rate = playbackRate;

      utterance.onstart = () => {
        // Estimated duration (very rough estimate: ~100ms per character at normal speed)
        if (onPlayStart) {
          const estimatedDurationSecs = (cleanedText.length * 0.1) / playbackRate;
          onPlayStart(estimatedDurationSecs);
        }
      };

      if (onBoundary) {
        utterance.onboundary = (event) => {
          if (event.name === 'word') {
            onBoundary(event.charIndex);
          }
        };
      }

      utterance.onend = () => {
        activeUtterance = null;
        resolve();
      };
      
      utterance.onerror = (e) => {
        console.error("Local SpeechSynthesis error:", e);
        activeUtterance = null;
        resolve(); // resolve anyway to unblock UI
      };

      window.speechSynthesis.speak(utterance);
    };

    if (voices.length > 0) {
      setVoiceAndSpeak();
    } else {
      // Chrome specific quirk where voices might load asynchronously
      window.speechSynthesis.onvoiceschanged = () => {
        voices = window.speechSynthesis.getVoices();
        setVoiceAndSpeak();
        window.speechSynthesis.onvoiceschanged = null; // Remove listener
      };
      
      // Fallback timeout in case onvoiceschanged never fires
      setTimeout(() => {
        if (activeUtterance === utterance && voices.length === 0) {
          console.warn("Voices did not load in time, using default browser voice.");
          setVoiceAndSpeak();
        }
      }, 1000);
    }
  });
};
