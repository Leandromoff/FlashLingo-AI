import React, { useState, useCallback, useEffect } from 'react';
import { generateFlashcards } from './services/geminiService';
import { AppState, StudySession, FlashcardData, PREDEFINED_TOPICS, SupportedLanguage } from './types';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import { BrainCircuit, Sparkles, Check, X, RotateCcw, BookOpen, Trophy, Lock, ArrowRight, Music2, Mic, Star, Moon, Sun, TrendingUp, Languages, ChevronLeft, ChevronRight, FastForward, Gauge, Trash2 } from 'lucide-react';

const MAX_LEVEL = 6;

const TOPIC_POOL = [
  // Tecnologia & Futuro
  "Inteligência Artificial", "Realidade Virtual", "Carros Elétricos", "Segurança Digital", "Robótica", 
  "Programação Python", "Viagens Espaciais", "Blockchain", "Casa Inteligente", "Startups",
  
  // Cultura Pop & Entretenimento
  "Mundo Gamer", "Séries de TV", "Filmes da Marvel", "Harry Potter", "K-Pop", 
  "Animes Clássicos", "Jogos de RPG", "Música Pop", "Cinema Anos 80", "Super-Heróis",
  "Mundo Disney", "Star Wars", "Senhor dos Anéis", "Streaming", "Podcasts",

  // Estilo de Vida & Saúde
  "Yoga e Meditação", "Culinária Vegana", "Treino em Casa", "Minimalismo", "Saúde Mental",
  "Skincare", "Moda Sustentável", "Café Especial", "Vinho e Queijos", "Jardinagem",
  "Crossfit", "Corrida de Rua", "Nutrição Esportiva", "Sono de Qualidade", "Chá da Tarde",

  // Negócios & Carreira
  "Marketing Digital", "Liderança", "Empreendedorismo", "Finanças Pessoais", "Investimentos",
  "Trabalho Remoto", "Produtividade", "Falar em Público", "Gestão de Tempo", "Design Gráfico",
  "Negociação", "Vendas B2B", "Criatividade", "Redes Sociais", "Marca Pessoal",

  // Hobbies & Criatividade
  "Fotografia", "Pintura em Tela", "Tocar Violão", "Xadrez", "Escrita Criativa",
  "Dança de Salão", "Tricô e Crochê", "Leitura Dinâmica", "Origami", "Mágica",
  "Cerâmica", "Desenho Digital", "Scrapbook", "Observar Pássaros", "Colecionismo",

  // Viagens & Lugares
  "Praias do Brasil", "Paris e França", "Cultura Japonesa", "Mochilão Europa", "Nova York",
  "Parques Nacionais", "Cruzeiros", "Museus Famosos", "Gastronomia Italiana", "Aurora Boreal",
  "Ilhas Gregas", "Safari na África", "Road Trip", "Acampamento", "Hotéis de Luxo",

  // Natureza & Animais
  "Raças de Cães", "Comportamento Felino", "Dinossauros", "Vida Marinha", "Floresta Amazônica",
  "Mudanças Climáticas", "Astronomia", "Vulcões", "Insetos", "Plantas Medicinais",
  "Sustentabilidade", "Energia Solar", "Reciclagem", "Animais Silvestres", "Geologia",

  // Esportes
  "Futebol Brasileiro", "Fórmula 1", "Basquete NBA", "Tênis", "Surf",
  "Skate", "Vôlei", "Natação", "Artes Marciais", "Ciclismo",

  // Conhecimentos Gerais
  "Mitologia Grega", "História da Arte", "Invenções Famosas", "Filosofia Básica", "Psicologia",
  "Arquitetura Moderna", "Curiosidades Históricas", "Império Romano", "Segunda Guerra", "Egito Antigo"
];

// --- SVG COMPONENTS FOR FLAGS ---
const FlagUS = () => (
  <svg className="w-8 h-6 rounded shadow-sm object-cover ring-1 ring-slate-900/10" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#B22234" d="M0 0h32v24H0z"/>
    <path fill="#FFF" d="M0 3h32M0 8h32M0 13h32M0 18h32M0 23h32" stroke="#FFF" strokeWidth="2"/>
    <path fill="#3C3B6E" d="M0 0h14v13H0z"/>
    <g fill="#FFF">
       <circle cx="2" cy="2" r="0.7"/>
       <circle cx="5" cy="2" r="0.7"/>
       <circle cx="8" cy="2" r="0.7"/>
       <circle cx="11" cy="2" r="0.7"/>
       <circle cx="3.5" cy="4.5" r="0.7"/>
       <circle cx="6.5" cy="4.5" r="0.7"/>
       <circle cx="9.5" cy="4.5" r="0.7"/>
       <circle cx="2" cy="7" r="0.7"/>
       <circle cx="5" cy="7" r="0.7"/>
       <circle cx="8" cy="7" r="0.7"/>
       <circle cx="11" cy="7" r="0.7"/>
       <circle cx="3.5" cy="9.5" r="0.7"/>
       <circle cx="6.5" cy="9.5" r="0.7"/>
       <circle cx="9.5" cy="9.5" r="0.7"/>
    </g>
  </svg>
);

const FlagES = () => (
  <svg className="w-8 h-6 rounded shadow-sm object-cover ring-1 ring-slate-900/10" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#AA151B" d="M0 0h32v24H0z"/>
    <path fill="#F1BF00" d="M0 6h32v12H0z"/>
    <circle cx="8" cy="12" r="2.5" fill="#AA151B" opacity="0.8"/>
  </svg>
);

const FlagFR = () => (
  <svg className="w-8 h-6 rounded shadow-sm object-cover ring-1 ring-slate-900/10" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" d="M0 0h32v24H0z"/>
    <path fill="#002395" d="M0 0h11v24H0z"/>
    <path fill="#ED2939" d="M21 0h11v24H21z"/>
  </svg>
);

const FlagIT = () => (
  <svg className="w-8 h-6 rounded shadow-sm object-cover ring-1 ring-slate-900/10" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#fff" d="M0 0h32v24H0z"/>
    <path fill="#009246" d="M0 0h11v24H0z"/>
    <path fill="#CE2B37" d="M21 0h11v24H21z"/>
  </svg>
);

const FlagDE = () => (
  <svg className="w-8 h-6 rounded shadow-sm object-cover ring-1 ring-slate-900/10" viewBox="0 0 32 24" xmlns="http://www.w3.org/2000/svg">
    <path fill="#FFCE00" d="M0 0h32v24H0z"/>
    <path fill="#000" d="M0 0h32v8H0z"/>
    <path fill="#DD0000" d="M0 8h32v8H0z"/>
  </svg>
);

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.HOME);
  const [customTopic, setCustomTopic] = useState('');
  const [session, setSession] = useState<StudySession | null>(null);
  const [loadingContext, setLoadingContext] = useState<{ level: number; label: string } | null>(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDevMode, setIsDevMode] = useState(false);
  // manualLevel is replaced by selectedLevels array. Empty array means 'Auto' (default).
  const [selectedLevels, setSelectedLevels] = useState<number[]>([]);
  
  // Trending Topics Carousel State
  const [trendingPool] = useState(() => {
    return [...TOPIC_POOL].sort(() => 0.5 - Math.random());
  });
  const [trendingIndex, setTrendingIndex] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const ITEMS_PER_VIEW = 4;
  
  // Persistent State for Target Language
  const [targetLanguage, setTargetLanguage] = useState<SupportedLanguage>(() => {
    const saved = localStorage.getItem('flashlingo_target_language');
    // Validation to ensure saved value is a supported type
    if (saved === 'en' || saved === 'es' || saved === 'fr' || saved === 'it' || saved === 'de') return saved;
    return 'en';
  });

  // Persistent state for levels (decks) - Keyed by language to separate progress
  const [topicLevels, setTopicLevels] = useState<Record<string, number>>(() => {
    const saved = localStorage.getItem('flashlingo_levels');
    return saved ? JSON.parse(saved) : {};
  });

  // Persistent state for Learned Words per Topic (prevent duplicates)
  const [topicWords, setTopicWords] = useState<Record<string, string[]>>(() => {
    const saved = localStorage.getItem('flashlingo_words');
    return saved ? JSON.parse(saved) : {};
  });

  // Persistent state for REVIEW QUEUE (Bonus Deck words)
  const [topicReviews, setTopicReviews] = useState<Record<string, FlashcardData[]>>(() => {
    const saved = localStorage.getItem('flashlingo_reviews');
    return saved ? JSON.parse(saved) : {};
  });

  // Preferences
  const [enableKaraoke, setEnableKaraoke] = useState<boolean>(() => {
    const saved = localStorage.getItem('flashlingo_enable_karaoke');
    return saved !== null ? saved === 'true' : true;
  });

  const [enablePronunciation, setEnablePronunciation] = useState<boolean>(() => {
    const saved = localStorage.getItem('flashlingo_enable_pronunciation');
    return saved !== null ? saved === 'true' : false;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('flashlingo_dark_mode');
    return saved !== null ? saved === 'true' : false;
  });

  // Persistence Effects
  useEffect(() => { localStorage.setItem('flashlingo_levels', JSON.stringify(topicLevels)); }, [topicLevels]);
  useEffect(() => { localStorage.setItem('flashlingo_words', JSON.stringify(topicWords)); }, [topicWords]);
  useEffect(() => { localStorage.setItem('flashlingo_reviews', JSON.stringify(topicReviews)); }, [topicReviews]);
  useEffect(() => { localStorage.setItem('flashlingo_enable_karaoke', String(enableKaraoke)); }, [enableKaraoke]);
  useEffect(() => { localStorage.setItem('flashlingo_enable_pronunciation', String(enablePronunciation)); }, [enablePronunciation]);
  useEffect(() => { localStorage.setItem('flashlingo_target_language', targetLanguage); }, [targetLanguage]);
  
  // Dark Mode Effect
  useEffect(() => {
    localStorage.setItem('flashlingo_dark_mode', String(isDarkMode));
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Helper to get unique key per language (e.g., 'travel_en' vs 'travel_es')
  const getTopicKey = (topicId: string) => `${topicId}_${targetLanguage}`;

  const getLevel = (topicId: string) => topicLevels[getTopicKey(topicId)] || 1;

  const resetProgress = (topicId: string, e?: React.MouseEvent, force: boolean = false) => {
    // Aggressively stop propagation
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }

    // Force reset without confirmation for immediate UI feedback
    const key = getTopicKey(topicId);
    setTopicLevels(prev => { const n = { ...prev }; delete n[key]; return n; });
    setTopicWords(prev => { const n = { ...prev }; delete n[key]; return n; });
    setTopicReviews(prev => { const n = { ...prev }; delete n[key]; return n; });
    
    // Also disable dev mode when resetting
    setIsDevMode(false);
  };

  // Carousel Navigation
  const nextTrending = useCallback(() => {
    setTrendingIndex((prev) => (prev + ITEMS_PER_VIEW) % trendingPool.length);
  }, [trendingPool.length]);

  const prevTrending = useCallback(() => {
    setTrendingIndex((prev) => (prev - ITEMS_PER_VIEW + trendingPool.length) % trendingPool.length);
  }, [trendingPool.length]);

  // Auto-rotate Carousel
  useEffect(() => {
    if (isCarouselPaused) return;
    const interval = setInterval(nextTrending, 4000);
    return () => clearInterval(interval);
  }, [isCarouselPaused, nextTrending]);

  const currentTrendingTopics = trendingPool.slice(trendingIndex, trendingIndex + ITEMS_PER_VIEW);
  const displayTopics = currentTrendingTopics.length < ITEMS_PER_VIEW 
      ? [...currentTrendingTopics, ...trendingPool.slice(0, ITEMS_PER_VIEW - currentTrendingTopics.length)]
      : currentTrendingTopics;

  // Level Definitions for UI
  const LEVEL_OPTIONS = [
    { value: null, label: 'Auto' },
    { value: 1, label: 'A1' },
    { value: 2, label: 'A2' },
    { value: 3, label: 'B1' },
    { value: 4, label: 'B1+' },
    { value: 5, label: 'B2' },
    { value: 6, label: 'C1' },
  ];

  const handleLevelToggle = (val: number | null) => {
    if (val === null) {
      // If Auto is clicked, clear all selections
      setSelectedLevels([]);
      return;
    }

    setSelectedLevels(prev => {
      // If the level is already selected, remove it
      if (prev.includes(val)) {
        return prev.filter(v => v !== val);
      }
      // Otherwise add it and sort
      return [...prev, val].sort((a, b) => a - b);
    });
  };

  const startSession = async (topicLabel: string, topicId: string, isBonusRound = false) => {
    const key = getTopicKey(topicId);
    
    // VISUAL LEVEL: Controls the progress bar "Deck X / 6"
    let visualLevel = getLevel(topicId);
    if (isDevMode) {
      visualLevel = MAX_LEVEL;
    }

    // DIFFICULTY LEVEL: Controls the content complexity (A1-C1)
    // Default: Match visual level (Auto behavior)
    let difficultyLevel = visualLevel;

    // Custom Mode: Distribute selected levels across the 6 visual decks
    // Example: User selected [A1 (1), B2 (5)]. 
    // Deck 1 -> A1 (Index 0)
    // Deck 2 -> B2 (Index 1)
    // Deck 3 -> A1 (Index 0) ...
    if (selectedLevels.length > 0) {
      const index = (visualLevel - 1) % selectedLevels.length;
      difficultyLevel = selectedLevels[index];
    }

    setLoadingContext({ level: isBonusRound ? 99 : visualLevel, label: topicLabel }); 
    setAppState(AppState.LOADING);
    setErrorMsg('');
    
    try {
      let cards: FlashcardData[];

      if (isBonusRound) {
        // BONUS ROUND: Load from review list instead of API
        const reviewCards = topicReviews[key] || [];
        if (reviewCards.length === 0) {
          throw new Error("Lista de revisão vazia.");
        }
        cards = [...reviewCards].sort(() => Math.random() - 0.5);
      } else {
        // NORMAL ROUND: Generate via API
        // CRITICAL FIX: Always pass previously learned words to exclusion list to prevent repetition,
        // regardless of level or custom mode.
        const excludedWords = topicWords[key] || [];
        cards = await generateFlashcards(topicLabel, difficultyLevel, excludedWords, targetLanguage);
      }

      setSession({
        topicId,
        topicLabel,
        level: visualLevel, // We keep the visual level for progress tracking
        isBonus: isBonusRound,
        language: targetLanguage,
        cards,
        currentIndex: 0,
        knownCount: 0,
        unknownCount: 0,
        unknownCards: []
      });
      setAppState(AppState.STUDY);
      setIsCardFlipped(false);
    } catch (error) {
      console.error(error);
      setErrorMsg('Falha ao carregar baralho. Tente novamente.');
      setAppState(AppState.ERROR);
    }
  };

  const handleCardResult = useCallback((known: boolean) => {
    if (!session) return;

    setIsCardFlipped(false);
    
    setTimeout(() => {
      setSession(prev => {
        if (!prev) return null;
        
        const newKnownCount = known ? prev.knownCount + 1 : prev.knownCount;
        const newUnknownCount = known ? prev.unknownCount : prev.unknownCount + 1;
        const currentCard = prev.cards[prev.currentIndex];
        const isLastCard = prev.currentIndex >= prev.cards.length - 1;

        const newUnknownCards = known ? prev.unknownCards : [...prev.unknownCards, currentCard];

        // If session finished
        if (isLastCard) {
          const key = `${prev.topicId}_${prev.language}`;

          // 1. Advance Level logic
          // Only advance if: NOT bonus, and NOT max level.
          // Note: Even in custom mode, we advance the "Visual Level" from 1 to 6.
          if (!prev.isBonus && prev.level < MAX_LEVEL) {
            setTopicLevels(levels => ({
              ...levels,
              [key]: prev.level + 1
            }));
          }

          // 2. SAVE ALL WORDS (Prevent Repetition in future decks)
          if (!prev.isBonus) {
             const allSessionWords = prev.cards.map(c => c.word);
             setTopicWords(words => {
               const currentHistory = words[key] || [];
               const updatedHistory = Array.from(new Set([...currentHistory, ...allSessionWords]));
               return {
                 ...words,
                 [key]: updatedHistory
               };
             });
          }

          // 3. Accumulate "Unknown" (Add to Bonus Deck)
          if (!known) {
             setTopicReviews(reviews => {
                const existing = reviews[key] || [];
                // Check if card is already in review to avoid duplicate objects
                const isAlreadyInReview = existing.some(c => c.word === currentCard.word);
                if (!isAlreadyInReview) {
                    return { ...reviews, [key]: [...existing, currentCard] };
                }
                return reviews;
             });
          } 
          
          // 4. Remove "Known" from Bonus Deck
          if (prev.isBonus && known) {
             setTopicReviews(reviews => {
                const existing = reviews[key] || [];
                return { ...reviews, [key]: existing.filter(c => c.word !== currentCard.word) };
             });
          }
          
          // 5. Batch Add Unknowns (for intermediate saves if needed, but mainly covered above)
          if (!prev.isBonus && newUnknownCards.length > 0) {
             setTopicReviews(reviews => {
                const existing = reviews[key] || [];
                const uniqueNew = newUnknownCards.filter(nc => !existing.some(ec => ec.word === nc.word));
                return { ...reviews, [key]: [...existing, ...uniqueNew] };
             });
          }

          setAppState(AppState.SUMMARY);
          return {
            ...prev,
            knownCount: newKnownCount,
            unknownCount: newUnknownCount,
            unknownCards: newUnknownCards
          };
        }

        // Continue session
        return {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          knownCount: newKnownCount,
          unknownCount: newUnknownCount,
          unknownCards: newUnknownCards
        };
      });
    }, 100);
  }, [session, selectedLevels]); // Added selectedLevels to deps

  const resetApp = () => {
    setAppState(AppState.HOME);
    setSession(null);
    setLoadingContext(null);
    setCustomTopic('');
  };

  // --- VIEWS ---

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center relative">
      
      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full mb-6 mt-4">
        <BrainCircuit size={48} className="text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 text-center">FlashLingo AI</h1>
      
      {/* Configuration Controls */}
      <div className="flex flex-col items-center gap-4 mb-8 w-full">
         
         {/* Row 1: Language & Main Settings */}
         <div className="flex flex-wrap justify-center gap-3 w-full">
            {/* Multi-Language Selector */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <button
                onClick={() => setTargetLanguage('en')}
                className={`p-1.5 rounded-full transition-all ${targetLanguage === 'en' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`}
                title="Inglês"
                >
                <FlagUS />
                </button>
                <button
                onClick={() => setTargetLanguage('es')}
                className={`p-1.5 rounded-full transition-all ${targetLanguage === 'es' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`}
                title="Espanhol"
                >
                <FlagES />
                </button>
                <button
                onClick={() => setTargetLanguage('fr')}
                className={`p-1.5 rounded-full transition-all ${targetLanguage === 'fr' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`}
                title="Francês"
                >
                <FlagFR />
                </button>
                <button
                onClick={() => setTargetLanguage('it')}
                className={`p-1.5 rounded-full transition-all ${targetLanguage === 'it' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`}
                title="Italiano"
                >
                <FlagIT />
                </button>
                <button
                onClick={() => setTargetLanguage('de')}
                className={`p-1.5 rounded-full transition-all ${targetLanguage === 'de' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`}
                title="Alemão"
                >
                <FlagDE />
                </button>
            </div>

            <div className="flex gap-3">
                <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
                className={`flex items-center justify-center p-2 w-10 h-10 rounded-full transition-all border ${
                    isDarkMode 
                    ? 'bg-slate-800 text-yellow-400 border-slate-700 hover:bg-slate-700' 
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
                >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
                </button>

                <button
                onClick={() => setEnableKaraoke(!enableKaraoke)}
                title="Modo Karaokê"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    enableKaraoke 
                    ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' 
                    : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'
                }`}
                >
                <Music2 size={16} />
                </button>

                <button
                onClick={() => setEnablePronunciation(!enablePronunciation)}
                title="Avaliação de Pronúncia"
                className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                    enablePronunciation 
                    ? 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-300 border-indigo-200 dark:border-indigo-800' 
                    : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'
                }`}
                >
                <Mic size={16} />
                </button>
                
                 <button
                    onClick={() => setIsDevMode(!isDevMode)}
                    title={`Modo Teste (Forçar Nível ${MAX_LEVEL})`}
                    className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${
                        isDevMode 
                        ? 'bg-purple-600 text-white border-purple-700 shadow-md' 
                        : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'
                    }`}
                >
                <FastForward size={16} />
                </button>
            </div>
         </div>

         {/* Row 2: Level Selection (Multi-select) */}
         <div className="flex flex-col items-center gap-2 w-full">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1">
                <Gauge size={12} /> Nível de Dificuldade
            </span>
            <div className="flex flex-wrap justify-center gap-1 p-1 bg-slate-100 dark:bg-slate-900 rounded-lg w-full max-w-md border border-slate-200 dark:border-slate-800">
                {LEVEL_OPTIONS.map((opt) => {
                    // Logic to determine if button is active
                    const isActive = opt.value === null 
                        ? selectedLevels.length === 0 // Auto is active if list is empty
                        : selectedLevels.includes(opt.value);

                    return (
                        <button
                            key={opt.label}
                            onClick={() => handleLevelToggle(opt.value)}
                            className={`flex-1 min-w-[3rem] py-1.5 px-2 rounded-md text-xs font-bold transition-all ${
                                isActive
                                    ? 'bg-white dark:bg-indigo-600 text-indigo-600 dark:text-white shadow-sm ring-1 ring-black/5 dark:ring-white/10'
                                    : 'text-slate-500 dark:text-slate-400 hover:bg-white/50 dark:hover:bg-slate-800'
                            }`}
                        >
                            {opt.label}
                            {opt.value !== null && isActive && (
                              <span className="ml-1 text-[8px] align-top bg-indigo-100 dark:bg-indigo-500/50 px-1 rounded-full">✓</span>
                            )}
                        </button>
                    );
                })}
            </div>
            {selectedLevels.length > 0 && (
              <span className="text-[10px] text-slate-400 dark:text-slate-600">
                Os {MAX_LEVEL} baralhos serão adaptados aos níveis selecionados.
              </span>
            )}
         </div>
      </div>

      <div className="w-full grid grid-cols-1 gap-4 mb-8">
        {PREDEFINED_TOPICS.map((topic) => {
          const key = getTopicKey(topic.id);
          const level = getLevel(topic.id);
          
          const visualDisplayLevel = isDevMode ? MAX_LEVEL : level;
          
          const progressPercent = ((visualDisplayLevel - 1) / MAX_LEVEL) * 100;
          const reviewCount = (topicReviews[key] || []).length;
          
          // Determine if we should show the reset button (if there is any progress)
          const hasProgress = level > 1 || reviewCount > 0;

          return (
            <div
              key={topic.id}
              className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl shadow-sm hover:shadow-md transition-all group overflow-hidden flex"
            >
               {/* Progress Bar (Visual) - Positioned Absolute at Bottom */}
               <div className="absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full z-10 pointer-events-none">
                 <div 
                   className="h-full bg-indigo-500 transition-all duration-1000" 
                   style={{ width: `${progressPercent}%` }} 
                 />
               </div>

               {/* LEFT SIDE: Main Click Area (Starts Session) */}
               <div 
                 onClick={() => startSession(topic.label, topic.id)}
                 className="flex-1 p-5 flex items-center relative z-20 cursor-pointer hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors"
               >
                  <div className="text-3xl mr-4 group-hover:scale-110 transition-transform">{topic.icon}</div>
                  <div className="flex-1">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-slate-800 dark:text-white text-lg group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{topic.label}</span>
                      <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 px-2 py-1 rounded-lg mr-2 whitespace-nowrap">
                        BARALHO {visualDisplayLevel} / {MAX_LEVEL}
                      </span>
                    </div>
                    <div className="flex gap-3 text-sm min-h-[1.25rem]">
                      {reviewCount > 0 && (
                        <span className="text-amber-500 dark:text-amber-400 font-bold flex items-center gap-1 text-xs animate-pulse">
                          <Star size={12} className="fill-current" />
                          {reviewCount} para revisar
                        </span>
                      )}
                    </div>
                  </div>
               </div>
               
               {/* RIGHT SIDE: Action Buttons (Reset & Start) */}
               <div className="flex items-center gap-1 border-l border-slate-100 dark:border-slate-700 bg-slate-50 dark:bg-slate-900/50 px-2 z-50">
                   
                   {/* Reset Button */}
                   {hasProgress && (
                     <button
                       type="button"
                       onClick={(e) => resetProgress(topic.id, e)}
                       className="p-3 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-full transition-colors"
                       title="Reiniciar Progresso"
                     >
                       <RotateCcw size={20} />
                     </button>
                   )}

                   {/* Start Arrow Button */}
                   <button
                     type="button"
                     onClick={() => startSession(topic.label, topic.id)}
                     className="p-3 text-slate-300 hover:text-indigo-500 hover:bg-indigo-50 dark:hover:bg-indigo-900/20 rounded-full transition-colors"
                     title="Iniciar"
                   >
                     <ArrowRight size={20} />
                   </button>
               </div>
            </div>
          );
        })}
      </div>

      <div className="w-full relative">
        <div className="absolute inset-0 flex items-center"><div className="w-full border-t border-slate-300 dark:border-slate-700"></div></div>
        <div className="relative flex justify-center text-sm"><span className="px-2 bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400">Ou crie um tema personalizado</span></div>
      </div>

      <div className="w-full mt-6 bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={customTopic}
            onChange={(e) => setCustomTopic(e.target.value)}
            placeholder="Ex: Culinária, Viagens, Star Wars..."
            className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400"
          />
          <button
            onClick={() => customTopic && startSession(customTopic, customTopic)}
            disabled={!customTopic}
            className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 sm:px-6 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center gap-2"
          >
            <Sparkles size={18} />
            <span className="hidden sm:inline">Gerar</span>
          </button>
        </div>
        
        <div className="flex flex-col gap-2 w-full mt-4">
            <span className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase flex items-center gap-1 shrink-0 mb-1">
                <TrendingUp size={12} /> Em alta:
            </span>
           
           {/* Carousel Container */}
           <div 
             className="relative w-full flex items-center justify-center min-h-[40px]"
             onMouseEnter={() => setIsCarouselPaused(true)}
             onMouseLeave={() => setIsCarouselPaused(false)}
           >
               {/* Fixed Left Arrow */}
               <button 
                onClick={prevTrending}
                className="absolute left-0 z-10 p-1 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300 transition-colors bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                title="Anterior"
               >
                   <ChevronLeft size={20} />
               </button>

               <div className="flex gap-2 overflow-hidden justify-center transition-all duration-500 w-full px-8">
                {displayTopics.map((tag, idx) => (
                    <button
                    key={`${tag}-${idx}`}
                    onClick={() => setCustomTopic(tag)}
                    className="px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-700 hover:bg-indigo-100 dark:hover:bg-indigo-900/30 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 text-xs font-bold transition-colors border border-slate-200 dark:border-slate-600 whitespace-nowrap"
                    >
                    {tag}
                    </button>
                ))}
               </div>

               {/* Fixed Right Arrow */}
               <button 
                onClick={nextTrending}
                className="absolute right-0 z-10 p-1 rounded-full text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-700 hover:text-slate-600 dark:hover:text-slate-300 transition-colors bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm"
                title="Próximo"
               >
                   <ChevronRight size={20} />
               </button>
           </div>
        </div>
      </div>
    </div>
  );

  const renderLoading = () => {
     const isBonus = loadingContext?.level === 99;
     let langLabel = 'Inglês';
     if (targetLanguage === 'es') langLabel = 'Espanhol';
     if (targetLanguage === 'fr') langLabel = 'Francês';
     if (targetLanguage === 'it') langLabel = 'Italiano';
     if (targetLanguage === 'de') langLabel = 'Alemão';
     
     // Determine what label to show during loading
     let levelDisplay = `Baralho ${loadingContext?.level || 1}`;
     
     // If user selected levels, we can be more specific, but "Baralho X" keeps consistency of the visual progress
     if (selectedLevels.length > 0) {
        // Calculate the actual difficulty being loaded
        const index = ((loadingContext?.level || 1) - 1) % selectedLevels.length;
        const difficulty = selectedLevels[index];
        const cefrLabel = LEVEL_OPTIONS.find(l => l.value === difficulty)?.label;
        levelDisplay = `Baralho ${loadingContext?.level} (${cefrLabel})`;
     }

     return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative">
            <div className={`w-16 h-16 border-4 rounded-full animate-spin ${isBonus ? 'border-amber-200 border-t-amber-600 dark:border-amber-900 dark:border-t-amber-500' : 'border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-500'}`}></div>
            <div className="absolute inset-0 flex items-center justify-center">
              {isBonus ? <Star size={20} className="text-amber-600 dark:text-amber-500 animate-pulse fill-current" /> : <Sparkles size={20} className="text-indigo-600 dark:text-indigo-500 animate-pulse" />}
            </div>
          </div>
          <h2 className="mt-6 text-xl font-bold text-slate-800 dark:text-white">
            {isBonus ? 'Gerando Baralho Bônus...' : `Gerando ${levelDisplay}...`}
          </h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">Criando desafio de {langLabel} para "{loadingContext?.label || customTopic}"</p>
        </div>
      );
  };

  const renderError = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-4 text-red-600 dark:text-red-400"><X size={32} /></div>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Ops, algo deu errado</h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">{errorMsg}</p>
      <button onClick={resetApp} className="bg-slate-900 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-600">Tentar Novamente</button>
    </div>
  );

  const renderStudy = () => {
    if (!session || !session.cards[session.currentIndex]) return null;
    const currentCard = session.cards[session.currentIndex];
    
    const badgeClass = session.isBonus 
        ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400' 
        : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400';
    
    // Determine label for header
    let headerLabel = `BARALHO ${session.level}`;
    
    // If using custom selected levels, show which CEFR level this deck represents
    if (!session.isBonus && selectedLevels.length > 0) {
        const index = (session.level - 1) % selectedLevels.length;
        const difficulty = selectedLevels[index];
        const cefrLabel = LEVEL_OPTIONS.find(l => l.value === difficulty)?.label;
        headerLabel = `BARALHO ${session.level} (${cefrLabel})`;
    }

    return (
      <div className="max-w-xl mx-auto px-6 py-8 flex flex-col items-center min-h-screen justify-center">
        <div className="w-full flex justify-between items-center mb-8">
           <button onClick={resetApp} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2"><X size={24} /></button>
           <div className="flex flex-col items-center">
             <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-1 border-0 ${badgeClass}`}>
               {session.topicLabel}
             </div>
             <div className="text-slate-400 dark:text-slate-500 text-xs font-bold">
               {session.isBonus ? 'BARALHO BÔNUS' : headerLabel}
             </div>
           </div>
           <div className="w-8"></div>
        </div>

        <ProgressBar current={session.currentIndex} total={session.cards.length} />

        <div className="w-full mb-10">
          <Card 
            data={currentCard} 
            isFlipped={isCardFlipped} 
            onFlip={() => setIsCardFlipped(!isCardFlipped)}
            enableKaraoke={enableKaraoke}
            enablePronunciation={enablePronunciation}
            targetLanguage={session.language}
            onStudy={() => handleCardResult(false)}
            onKnow={() => handleCardResult(true)}
          />
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!session) return null;
    const score = Math.round((session.knownCount / session.cards.length) * 100);
    
    // Logic for final progression
    // If Auto Mode, we check max level.
    // If Custom Mode, we still treat "MAX_LEVEL" as the visual end of the topic.
    const isManualMode = selectedLevels.length > 0;
    const isMaxLevel = session.level >= MAX_LEVEL && !session.isBonus;
    const key = `${session.topicId}_${session.language}`;
    const reviewList = topicReviews[key] || [];
    const hasReviewItems = reviewList.length > 0;
    
    // Course completion logic
    // Even in manual mode, finishing deck MAX_LEVEL clears the topic visually.
    const isCourseComplete = !hasReviewItems && (session.isBonus || isMaxLevel);
    
    const nextLevel = session.level + 1;
    // Calculate the label for the NEXT button
    let nextLevelLabel = `Baralho ${nextLevel}`;
    if (isManualMode && nextLevel <= MAX_LEVEL) {
        const index = (nextLevel - 1) % selectedLevels.length;
        const difficulty = selectedLevels[index];
        const cefrLabel = LEVEL_OPTIONS.find(l => l.value === difficulty)?.label;
        nextLevelLabel = `Baralho ${nextLevel} (${cefrLabel})`;
    }

    return (
      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className={`p-4 rounded-full mb-6 ${isCourseComplete ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'}`}>
          {isCourseComplete ? <Trophy size={48} /> : <BookOpen size={48} />}
        </div>
        
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2 text-center">
          {isCourseComplete ? 'Curso Finalizado!' : session.isBonus ? 'Revisão Concluída' : 'Baralho Completo!'}
        </h2>
        
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center">
          {isCourseComplete 
            ? `Você dominou o tópico ${session.topicLabel}.` 
            : session.isBonus
              ? 'Continue praticando para zerar a lista de revisão.'
              : 'Ótimo trabalho! Vamos avançar.'}
        </p>

        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 w-full mb-8 text-center">
          <div className="text-sm text-slate-400 uppercase font-bold tracking-widest mb-2">Aproveitamento</div>
          <div className="text-6xl font-black mb-2 text-slate-800 dark:text-white">{score}%</div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">
            {session.unknownCount > 0 
              ? `${session.unknownCount} palavras adicionadas à revisão.` 
              : 'Nenhum erro novo nesta sessão!'}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-3 w-full">
          
          {/* Scenario 1: Standard Progression (Not Max Level) */}
          {!isMaxLevel && !session.isBonus && (
             <button
              onClick={() => startSession(session.topicLabel, session.topicId)}
              className="w-full bg-indigo-600 dark:bg-indigo-500 text-white py-4 rounded-xl font-bold hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-all shadow-lg shadow-indigo-200 dark:shadow-none flex justify-center items-center gap-2"
            >
              <Sparkles size={20} />
              Jogar {nextLevelLabel}
            </button>
          )}

          {/* Scenario 2: Reached Max Level OR Bonus Round with Remaining Items -> Offer Bonus Deck */}
          {/* CHANGED: Added condition (session.isBonus || isMaxLevel) so it doesn't show on intermediate levels */}
          {hasReviewItems && (session.isBonus || isMaxLevel) && (
             <button
              onClick={() => startSession(session.topicLabel, session.topicId, true)}
              className="w-full bg-amber-500 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-200 dark:shadow-none flex justify-center items-center gap-2 animate-pulse"
            >
              {session.isBonus ? <RotateCcw size={20} /> : <Star size={20} className="fill-current" />}
              {session.isBonus ? 'Tentar Revisão Novamente' : `Desafiar Baralho Bônus`}
            </button>
          )}

          {/* Scenario 3: Course Complete (Bonus Done or Max Level w/o errors) */}
          {isCourseComplete && (
            <div className="w-full flex flex-col gap-3">
                <div className="w-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 py-4 rounded-xl font-bold flex justify-center items-center gap-2 border border-green-200 dark:border-green-800/50">
                  <Trophy size={20} />
                  Parabéns! Você zerou este tópico.
                </div>
                <button
                  onClick={(e) => resetProgress(session.topicId, e)}
                  className="w-full bg-white dark:bg-slate-800 border-2 border-red-100 dark:border-red-900/30 text-red-400 py-3 rounded-xl font-bold hover:border-red-300 hover:text-red-600 transition-colors flex justify-center items-center gap-2"
                >
                  <RotateCcw size={16} />
                  Reiniciar Baralho
                </button>
            </div>
          )}

          <button
            onClick={() => {
                // If the course is fully complete OR if we are exiting a Bonus session (regardless of score),
                // we reset progress (to level 1) and disable dev mode to ensure a clean slate.
                if (isCourseComplete || session.isBonus) {
                   resetProgress(session.topicId, undefined, true);
                }
                resetApp();
            }}
            className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-bold hover:border-slate-300 dark:hover:border-slate-600 transition-colors"
          >
            {isCourseComplete || session.isBonus ? 'Concluir e Reiniciar' : 'Voltar ao Início'}
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 dark:bg-slate-950 dark:text-slate-50 font-sans transition-colors duration-300">
      {appState === AppState.HOME && renderHome()}
      {appState === AppState.LOADING && renderLoading()}
      {appState === AppState.ERROR && renderError()}
      {appState === AppState.STUDY && renderStudy()}
      {appState === AppState.SUMMARY && renderSummary()}
    </div>
  );
};

export default App;