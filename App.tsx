import React, { useState, useCallback, useEffect, useRef } from 'react';
import { generateFlashcards, playLocalAudio, playCloudAudio } from './services/geminiService';
import { AppState, StudySession, FlashcardData, PREDEFINED_TOPICS, SupportedLanguage } from './types';
import { STATIC_DECKS } from './data/staticDecks';
import Card from './components/Card';
import ProgressBar from './components/ProgressBar';
import { FlagUS, FlagES, FlagFR, FlagIT, FlagDE } from './components/Flags';
import { useLocalStorage } from './hooks/useLocalStorage';
import { BrainCircuit, Sparkles, Check, X, RotateCcw, BookOpen, Trophy, ArrowRight, Music2, Star, Moon, Sun, TrendingUp, Languages, ChevronLeft, ChevronRight, FastForward, Gauge, Trash2, BookOpenText, Volume2, Loader2, ArrowLeft, Eye, EyeOff, GaugeCircle, GraduationCap, Wrench } from 'lucide-react';

const CARDS_PER_DECK = 10;
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

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

const App: React.FC = () => {
  const [authTimestamp, setAuthTimestamp] = useLocalStorage<number | null>('flashlingo_auth_timestamp', null);
  
  // Helper to check if session is still valid
  const checkIsAuthenticated = useCallback(() => {
    if (!authTimestamp) return false;
    return Date.now() - authTimestamp < SESSION_DURATION;
  }, [authTimestamp]);

  const [isAuthenticated, setIsAuthenticated] = useState(checkIsAuthenticated());

  // Update authentication status when timestamp changes
  useEffect(() => {
    setIsAuthenticated(checkIsAuthenticated());
  }, [authTimestamp, checkIsAuthenticated]);

  // Periodic check to auto-logout if session expires while app is open
  useEffect(() => {
    if (!isAuthenticated) return;
    const interval = setInterval(() => {
      if (!checkIsAuthenticated()) {
        setIsAuthenticated(false);
      }
    }, 60000); // Check every minute
    return () => clearInterval(interval);
  }, [isAuthenticated, checkIsAuthenticated]);

  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState(false);

  const [appState, setAppState] = useState<AppState>(AppState.HOME);

  const [customTopic, setCustomTopic] = useState('');
  const [session, setSession] = useState<StudySession | null>(null);
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [isDevMode, setIsDevMode] = useState(false);
  
  // Persistent State for Target Language
  const [targetLanguage, setTargetLanguage] = useLocalStorage<SupportedLanguage>('flashlingo_target_language', 'en');

  // Persistent state for Learned Words per Topic (prevent duplicates)
  const [topicWords, setTopicWords] = useLocalStorage<Record<string, string[]>>('flashlingo_words', {});

  // Persistent state for REVIEW QUEUE (Bonus Deck words)
  const [topicReviews, setTopicReviews] = useLocalStorage<Record<string, FlashcardData[]>>('flashlingo_reviews', {});

  // Persistent state for Active Sessions (Hybrid Approach)
  const [activeSessions, setActiveSessions] = useLocalStorage<Record<string, StudySession>>('flashlingo_active_sessions', {});

  // Preferences
  const [isDarkMode, setIsDarkMode] = useLocalStorage<boolean>('flashlingo_dark_mode', true);

  // Dark Mode Effect
  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Helper to get unique key per language (e.g., 'travel_en' vs 'travel_es')
  const getTopicKey = (topicId: string) => `${topicId}_${targetLanguage}`;

  const resetProgress = (topicId: string, e?: React.MouseEvent, force: boolean = false) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    const key = getTopicKey(topicId);
    setTopicWords(prev => { const n = { ...prev }; delete n[key]; return n; });
    setTopicReviews(prev => { const n = { ...prev }; delete n[key]; return n; });
    setActiveSessions(prev => { const n = { ...prev }; delete n[key]; return n; });
    setIsDevMode(false);
  };

  const startSession = async (topicLabel: string, topicId: string, isBonusRound = false) => {
    const key = getTopicKey(topicId);
    
    // Clear any existing active session when starting a fresh one
    setActiveSessions(prev => { const n = { ...prev }; delete n[key]; return n; });

    setAppState(AppState.LOADING);
    setErrorMsg('');
    
    try {
      let cards: FlashcardData[];
      if (isBonusRound) {
        const reviewCards = topicReviews[key] || [];
        if (reviewCards.length === 0) throw new Error("Lista de revisão vazia.");
        cards = [...reviewCards].sort(() => Math.random() - 0.5);
      } else {
        const staticTopic = PREDEFINED_TOPICS.find(t => t.id === topicId);
        if (staticTopic?.isStatic && STATIC_DECKS[topicId] && STATIC_DECKS[topicId][targetLanguage]) {
            cards = STATIC_DECKS[topicId][targetLanguage].map((card, index) => ({
                id: `static-${topicId}-${index}`,
                word: card.word || '',
                translation: card.translation || '',
                pronunciation: '',
                portuguesePhonetic: '',
                syllables: [],
                exampleSentence: card.exampleSentence || '',
                exampleTranslation: card.exampleTranslation || '',
                ...card
            }));
        } else {
          const excludedWords = topicWords[key] || [];
          cards = await generateFlashcards(topicLabel, excludedWords, targetLanguage);
        }
      }

      setSession({
        topicId,
        topicLabel,
        isBonus: isBonusRound,
        language: targetLanguage,
        cards,
        currentIndex: isDevMode && cards.length > 0 ? cards.length - 1 : 0,
        knownCount: isDevMode && cards.length > 0 ? cards.length - 1 : 0,
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

  const resumeSession = (topicId: string) => {
    const key = getTopicKey(topicId);
    const savedSession = activeSessions[key];
    if (savedSession) {
      setSession(savedSession);
      setAppState(AppState.STUDY);
      setIsCardFlipped(false);
    }
  };

  // Safe ref to track if we should process card updates
  const sessionRef = useRef(session);
  useEffect(() => { sessionRef.current = session; }, [session]);

  const handleCardResult = useCallback((known: boolean) => {
    if (!sessionRef.current) return;

    setIsCardFlipped(false);
    
    // Safety timeout to allow flip animation
    setTimeout(() => {
      setSession(prev => {
        // Critical safety check: Ensure we are still in the same session
        // This prevents updates if the user exited quickly
        if (!prev) return null;
        
        const currentCard = prev.cards[prev.currentIndex];
        const isLastCard = prev.currentIndex >= prev.cards.length - 1;
        const key = `${prev.topicId}_${prev.language}`;

        // --- REAL-TIME SAVING (Hybrid Approach) ---
        if (known) {
          setTopicWords(words => {
            const currentHistory = words[key] || [];
            if (!currentHistory.includes(currentCard.word)) {
              return { ...words, [key]: [...currentHistory, currentCard.word] };
            }
            return words;
          });
        }

        if (!known) {
          setTopicReviews(reviews => {
            const existing = reviews[key] || [];
            if (!existing.some(c => c.word === currentCard.word)) {
              return { ...reviews, [key]: [...existing, currentCard] };
            }
            return reviews;
          });
        } 
        
        if (prev.isBonus && known) {
          setTopicReviews(reviews => {
            const existing = reviews[key] || [];
            return { ...reviews, [key]: existing.filter(c => c.word !== currentCard.word) };
          });
        }
        // ------------------------------------------

        const newKnownCount = known ? prev.knownCount + 1 : prev.knownCount;
        const newUnknownCount = known ? prev.unknownCount : prev.unknownCount + 1;
        const newUnknownCards = known ? prev.unknownCards : [...prev.unknownCards, currentCard];

        const nextSessionState = {
          ...prev,
          currentIndex: prev.currentIndex + 1,
          knownCount: newKnownCount,
          unknownCount: newUnknownCount,
          unknownCards: newUnknownCards
        };

        if (isLastCard) {
          // Clear active session since it's finished
          setActiveSessions(sessions => {
            const newSessions = { ...sessions };
            delete newSessions[key];
            return newSessions;
          });

          setAppState(AppState.SUMMARY);
          return nextSessionState;
        }

        // Save active session progress
        setActiveSessions(sessions => ({
          ...sessions,
          [key]: nextSessionState
        }));

        return nextSessionState;
      });
    }, 150); // Increased slightly to match animation better
  }, []); // Removed 'session' from dependency array to prevent race condition, using ref instead

  const resetApp = () => {
    setAppState(AppState.HOME);
    setSession(null);
    setCustomTopic('');
  };

  // --- STANDARD VIEWS ---

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col items-center relative">
      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full mb-6">
        <BrainCircuit size={48} className="text-indigo-600 dark:text-indigo-400" />
      </div>
      
      <h1 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 text-center">
        FlashLingo AI
      </h1>
      
      {/* Configuration Controls */}
      <div className="flex flex-col items-center gap-4 mb-8 w-full">
         
         {/* Row 1: Language & Main Settings */}
         <div className="flex flex-wrap justify-center gap-3 w-full">
            {/* Multi-Language Selector */}
            <div className="flex items-center gap-2 bg-white dark:bg-slate-800 p-1.5 rounded-full border border-slate-200 dark:border-slate-700 shadow-sm">
                <button onClick={() => setTargetLanguage('en')} className={`p-1.5 rounded-full transition-all ${targetLanguage === 'en' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`} title="Inglês"><FlagUS /></button>
                <button onClick={() => setTargetLanguage('es')} className={`p-1.5 rounded-full transition-all ${targetLanguage === 'es' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`} title="Espanhol"><FlagES /></button>
                <button onClick={() => setTargetLanguage('fr')} className={`p-1.5 rounded-full transition-all ${targetLanguage === 'fr' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`} title="Francês"><FlagFR /></button>
                <button onClick={() => setTargetLanguage('it')} className={`p-1.5 rounded-full transition-all ${targetLanguage === 'it' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`} title="Italiano"><FlagIT /></button>
                <button onClick={() => setTargetLanguage('de')} className={`p-1.5 rounded-full transition-all ${targetLanguage === 'de' ? 'bg-indigo-100 ring-2 ring-indigo-500' : 'opacity-70 hover:opacity-100'}`} title="Alemão"><FlagDE /></button>
            </div>

            <div className="flex gap-3">
                <button onClick={() => setIsDarkMode(!isDarkMode)} title={isDarkMode ? 'Modo Claro' : 'Modo Escuro'} className={`flex items-center justify-center p-2 w-10 h-10 rounded-full transition-all border ${isDarkMode ? 'bg-slate-800 text-yellow-400 border-slate-700 hover:bg-slate-700' : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'}`}>{isDarkMode ? <Sun size={20} /> : <Moon size={20} />}</button>
                <button onClick={() => setIsDevMode(!isDevMode)} title={`Modo Teste`} className={`flex items-center justify-center gap-2 px-4 py-2 rounded-full text-xs font-bold transition-all border ${isDevMode ? 'bg-purple-600 text-white border-purple-700 shadow-md' : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border-slate-200 dark:border-slate-700'}`}><FastForward size={16} /></button>
            </div>
          </div>
      </div>

      {targetLanguage !== 'en' ? (
        <div className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-10 flex flex-col items-center justify-center text-center mt-4">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-5 rounded-full mb-5">
            <Wrench className="text-amber-600 dark:text-amber-400" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">Em Construção</h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            O aprendizado para este idioma estará disponível em breve! Estamos trabalhando a todo vapor para trazer os melhores conteúdos e cards adaptados.
          </p>
          <button 
            onClick={() => setTargetLanguage('en')}
            className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm"
          >
            Voltar para o Inglês
          </button>
        </div>
      ) : (
        <>
          <div className="w-full grid grid-cols-1 gap-4 mb-8">
            {PREDEFINED_TOPICS.map((topic) => {
              const key = getTopicKey(topic.id);
              const learnedCount = (topicWords[key] || []).length;
              const totalCards = (topic.isStatic && STATIC_DECKS[topic.id] && STATIC_DECKS[topic.id][targetLanguage]) 
                ? STATIC_DECKS[topic.id][targetLanguage].length 
                : CARDS_PER_DECK;
              
              const displayLearnedCount = isDevMode ? totalCards : learnedCount;
              const progressPercent = Math.min(100, (displayLearnedCount / totalCards) * 100);
              const reviewCount = (topicReviews[key] || []).length;
              const activeSession = activeSessions[key];
              const isComplete = displayLearnedCount >= totalCards && reviewCount === 0;
              
              return (
                <div key={topic.id} className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-0 cursor-pointer shadow-sm hover:shadow-md transition-all hover:scale-[1.02] group overflow-hidden flex flex-col sm:flex-row">
                   {/* Left Side - Main Info */}
                   <div 
                     onClick={() => activeSession ? resumeSession(topic.id) : (isComplete ? null : (reviewCount > 0 ? startSession(topic.label, topic.id, true) : startSession(topic.label, topic.id)))}
                     className="flex-1 p-5 flex items-center justify-between"
                   >
                       <div className="absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full"><div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: `${progressPercent}%` }} /></div>
                       <div className="flex items-center w-full">
                        <div className="w-full">
                            <div className="flex items-center mb-1">
                            <span className="font-bold text-slate-800 dark:text-white text-lg mr-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{topic.label}</span>
                            <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 px-2 py-1 rounded-lg">
                              {isComplete ? '100% CONCLUÍDO' : `${displayLearnedCount} / ${totalCards}`}
                            </span>
                            </div>
                            <div className="flex gap-3 text-sm min-h-[1.25rem]">{reviewCount > 0 && (<span className="text-amber-500 dark:text-amber-400 font-bold flex items-center gap-1 text-xs animate-pulse"><Star size={12} className="fill-current" />{reviewCount} para revisar</span>)}</div>
                        </div>
                        </div>
                   </div>

                   {/* Right Side - Actions */}
                   <div className="flex items-center border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20">
                        {activeSession ? (
                            <>
                                <button 
                                    onClick={(e) => resetProgress(topic.id, e)} 
                                    className="h-full px-4 py-3 sm:py-0 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center border-r border-slate-100 dark:border-slate-700" 
                                    title="Reiniciar Progresso"
                                >
                                    <RotateCcw size={18} />
                                </button>
                                <button 
                                    onClick={(e) => { e.stopPropagation(); resumeSession(topic.id); }}
                                    className="h-full w-full sm:w-auto px-6 py-3 sm:py-0 bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors flex items-center justify-center gap-2"
                                >
                                    Continuar ({activeSession.currentIndex}/{activeSession.cards.length})
                                </button>
                            </>
                        ) : isComplete ? (
                            <button 
                                onClick={(e) => resetProgress(topic.id, e)} 
                                className="h-full px-6 py-3 sm:py-0 text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 transition-colors flex items-center justify-center gap-2 font-bold" 
                                title="Reiniciar Progresso"
                            >
                                <Trophy size={18} /> Concluído
                            </button>
                        ) : (
                            <>
                                {(displayLearnedCount > 0 || reviewCount > 0) && (
                                    <button 
                                        onClick={(e) => resetProgress(topic.id, e)} 
                                        className="h-full px-4 py-3 sm:py-0 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center" 
                                        title="Reiniciar Progresso"
                                    >
                                        <RotateCcw size={18} />
                                    </button>
                                )}
                                <div 
                                    onClick={() => reviewCount > 0 ? startSession(topic.label, topic.id, true) : startSession(topic.label, topic.id)}
                                    className="h-full px-4 py-3 sm:py-0 flex items-center justify-center text-slate-300 dark:text-slate-600 group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors"
                                >
                                    <ArrowRight size={24} />
                                </div>
                            </>
                        )}
                   </div>
                </div>
              );
            })}
          </div>

          <div className="w-full mt-6 bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm">
              <div className="flex gap-2 mb-4">
              <input type="text" value={customTopic} onChange={(e) => setCustomTopic(e.target.value)} placeholder="Ex: Culinária, Viagens, Star Wars..." className="flex-1 px-4 py-3 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-indigo-500 placeholder-slate-400" />
              <button onClick={() => customTopic && startSession(customTopic, customTopic)} disabled={!customTopic} className="bg-indigo-600 dark:bg-indigo-500 text-white px-4 sm:px-6 py-3 rounded-xl font-bold disabled:opacity-50 hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors flex items-center gap-2"><Sparkles size={18} /><span className="hidden sm:inline">Gerar</span></button>
              </div>
          </div>
        </>
      )}
    </div>
  );

  const renderLoading = () => {
     const isBonus = false;
     let langLabel = 'Inglês';
     if (targetLanguage === 'es') langLabel = 'Espanhol';
     if (targetLanguage === 'fr') langLabel = 'Francês';
     if (targetLanguage === 'it') langLabel = 'Italiano';
     if (targetLanguage === 'de') langLabel = 'Alemão';
     return (
        <div className="flex flex-col items-center justify-center min-h-[60vh]">
          <div className="relative">
            <div className={`w-16 h-16 border-4 rounded-full animate-spin ${isBonus ? 'border-amber-200 border-t-amber-600 dark:border-amber-900 dark:border-t-amber-500' : 'border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-500'}`}></div>
            <div className="absolute inset-0 flex items-center justify-center">{isBonus ? <Star size={20} className="text-amber-600 dark:text-amber-500 animate-pulse fill-current" /> : <Sparkles size={20} className="text-indigo-600 dark:text-indigo-500 animate-pulse" />}</div>
          </div>
          <h2 className="mt-6 text-xl font-bold text-slate-800 dark:text-white">{isBonus ? 'Gerando Baralho Bônus...' : `Gerando Baralho...`}</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2">{`Criando desafio de ${langLabel} para "${customTopic}"`}</p>
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
    const badgeClass = session.isBonus ? 'bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-400' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400';
    return (
      <div className="max-w-xl mx-auto px-6 py-8 flex flex-col items-center min-h-screen justify-center">
        <div className="w-full flex justify-between items-center mb-8">
           <button onClick={resetApp} className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2"><X size={24} /></button>
           <div className="flex flex-col items-center">
             <div className={`px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-1 border-0 ${badgeClass}`}>{session.topicLabel}</div>
             <div className="text-slate-400 dark:text-slate-500 text-xs font-bold">{session.isBonus ? 'REVISÃO' : 'APRENDIZADO'}</div>
           </div>
           <div className="w-8"></div>
        </div>
        <ProgressBar current={session.currentIndex} total={session.cards.length} />
        <div className="w-full mb-10"><Card data={currentCard} isFlipped={isCardFlipped} onFlip={() => setIsCardFlipped(!isCardFlipped)} targetLanguage={session.language} onStudy={() => handleCardResult(false)} onKnow={() => handleCardResult(true)} /></div>
      </div>
    );
  };
  
  const renderSummary = () => {
    if (!session) return null;
    const score = Math.round((session.knownCount / session.cards.length) * 100);
    const key = `${session.topicId}_${session.language}`;
    const reviewList = topicReviews[key] || [];
    const hasReviewItems = reviewList.length > 0;
    
    // Check total learned words to see if the deck is complete
    const learnedCount = (topicWords[key] || []).length;
    const staticTopic = PREDEFINED_TOPICS.find(t => t.id === session.topicId);
    const totalCards = staticTopic?.isStatic && STATIC_DECKS[session.topicId] && STATIC_DECKS[session.topicId][session.language]
      ? STATIC_DECKS[session.topicId][session.language].length 
      : CARDS_PER_DECK;
      
    const isCourseComplete = !hasReviewItems && (learnedCount >= totalCards);
    
    return (
      <div className="max-w-2xl mx-auto px-6 py-12 flex flex-col items-center">
        <div className={`p-4 rounded-full mb-6 ${isCourseComplete ? 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400' : 'bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400'}`}>{isCourseComplete ? <Trophy size={48} /> : <BookOpen size={48} />}</div>
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-2 text-center">{isCourseComplete ? 'Tópico Concluído!' : session.isBonus ? 'Revisão Concluída' : 'Sessão Finalizada!'}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 text-center">
          {isCourseComplete 
            ? `Você dominou o tópico ${session.topicLabel}.` 
            : session.isBonus 
              ? (hasReviewItems ? 'Continue praticando para zerar a lista de revisão.' : 'Revisão zerada! Tópico concluído.') 
              : (hasReviewItems ? 'Você tem algumas palavras para revisar.' : 'Ótimo trabalho!')}
        </p>
        <div className="bg-white dark:bg-slate-800 p-8 rounded-3xl shadow-lg border border-slate-100 dark:border-slate-700 w-full mb-8 text-center">
          <div className="text-sm text-slate-400 uppercase font-bold tracking-widest mb-2">Aproveitamento</div>
          <div className="text-6xl font-black mb-2 text-slate-800 dark:text-white">{score}%</div>
          <p className="text-slate-500 dark:text-slate-400 font-medium">{session.unknownCount > 0 ? `${session.unknownCount} palavras adicionadas à revisão.` : 'Nenhum erro novo nesta sessão!'}</p>
        </div>
        <div className="flex flex-col gap-3 w-full">
          {hasReviewItems && (
            <button onClick={() => startSession(session.topicLabel, session.topicId, true)} className="w-full bg-amber-500 text-white py-4 rounded-xl font-bold hover:bg-amber-600 transition-all shadow-lg shadow-amber-200 dark:shadow-none flex justify-center items-center gap-2 animate-pulse">
              {session.isBonus ? <RotateCcw size={20} /> : <Star size={20} className="fill-current" />}
              {session.isBonus ? 'Tentar Revisão Novamente' : 'Revisar Erros'}
            </button>
          )}
          {isCourseComplete && (
            <div className="w-full flex flex-col gap-3">
              <div className="w-full bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 py-4 rounded-xl font-bold flex justify-center items-center gap-2 border border-green-200 dark:border-green-800/50">
                <Trophy size={20} /> Parabéns! Você zerou este tópico.
              </div>
              <button onClick={(e) => resetProgress(session.topicId, e)} className="w-full bg-white dark:bg-slate-800 border-2 border-red-100 dark:border-red-900/30 text-red-400 py-3 rounded-xl font-bold hover:border-red-300 hover:text-red-600 transition-colors flex justify-center items-center gap-2">
                <RotateCcw size={16} /> Reiniciar Baralho
              </button>
            </div>
          )}
          <button onClick={() => resetApp()} className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 py-3 rounded-xl font-bold hover:border-slate-300 dark:hover:border-slate-600 transition-colors">
            Voltar ao Menu Principal
          </button>
        </div>
      </div>
    );
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const pw = password.trim().toLowerCase();
    if (pw === 'europa' || pw === 'amarula') {
      setAuthTimestamp(Date.now());
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-slate-950 flex flex-col items-center justify-center p-4 transition-colors duration-300">
        <div className="bg-white dark:bg-slate-900 shadow-xl rounded-3xl p-8 max-w-sm w-full mx-auto border border-slate-100 dark:border-slate-800">
          <div className="flex justify-center mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-900/40 p-4 rounded-2xl">
              <BrainCircuit className="text-indigo-600 dark:text-indigo-400" size={48} />
            </div>
          </div>
          <h1 className="text-2xl font-black text-center mb-2 dark:text-slate-50">Acesso Restrito</h1>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-8">Digite a palavra-chave para entrar.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError(false);
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 ${loginError ? 'border-red-400 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100' : 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-50'} focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all font-medium`}
                placeholder="Palavra-chave"
                autoFocus
              />
              {loginError && <p className="text-red-500 text-sm mt-2 font-medium">Palavra-chave incorreta.</p>}
            </div>
            <button
              type="submit"
              className="w-full bg-indigo-500 hover:bg-indigo-600 active:bg-indigo-700 text-white font-bold py-3 px-6 rounded-xl transition-colors"
            >
              Entrar
            </button>
          </form>
        </div>
      </div>
    );
  }

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