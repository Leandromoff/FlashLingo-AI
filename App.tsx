import React, { useState, useCallback, useEffect, useRef } from "react";
import { playLocalAudio } from "./services/audioService";
import {
  AppState,
  StudySession,
  FlashcardData,
  PREDEFINED_TOPICS,
  SupportedLanguage,
} from "./types";
import decksMetadataRaw from "./data/decksMetadata.json";
const decksMetadata = decksMetadataRaw as Record<
  string,
  Record<string, number>
>;

import Card from "./components/Card";
import ProgressBar from "./components/ProgressBar";
import { FlagUS, FlagES } from "./components/Flags";
import { useLocalStorage } from "./hooks/useLocalStorage";
import {
  BrainCircuit,
  Sparkles,
  Check,
  X,
  RotateCcw,
  BookOpen,
  Trophy,
  ArrowRight,
  Music2,
  Star,
  Moon,
  Sun,
  TrendingUp,
  Languages,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Folder,
  Gauge,
  Trash2,
  BookOpenText,
  Volume2,
  Loader2,
  ArrowLeft,
  Eye,
  EyeOff,
  GaugeCircle,
  GraduationCap,
  Wrench,
  Info,
  Snail,
  Zap,
  RefreshCw,
  ToggleRight,
} from "lucide-react";

const CARDS_PER_DECK = 10;
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours in milliseconds

const TOPIC_POOL = [
  // Tecnologia & Futuro
  "Inteligência Artificial",
  "Realidade Virtual",
  "Carros Elétricos",
  "Segurança Digital",
  "Robótica",
  "Programação Python",
  "Viagens Espaciais",
  "Blockchain",
  "Casa Inteligente",
  "Startups",

  // Cultura Pop & Entretenimento
  "Mundo Gamer",
  "Séries de TV",
  "Filmes da Marvel",
  "Harry Potter",
  "K-Pop",
  "Animes Clássicos",
  "Jogos de RPG",
  "Música Pop",
  "Cinema Anos 80",
  "Super-Heróis",
  "Mundo Disney",
  "Star Wars",
  "Senhor dos Anéis",
  "Streaming",
  "Podcasts",

  // Estilo de Vida & Saúde
  "Yoga e Meditação",
  "Culinária Vegana",
  "Treino em Casa",
  "Minimalismo",
  "Saúde Mental",
  "Skincare",
  "Moda Sustentável",
  "Café Especial",
  "Vinho e Queijos",
  "Jardinagem",
  "Crossfit",
  "Corrida de Rua",
  "Nutrição Esportiva",
  "Sono de Qualidade",
  "Chá da Tarde",

  // Negócios & Carreira
  "Marketing Digital",
  "Liderança",
  "Empreendedorismo",
  "Finanças Pessoais",
  "Investimentos",
  "Trabalho Remoto",
  "Produtividade",
  "Falar em Público",
  "Gestão de Tempo",
  "Design Gráfico",
  "Negociação",
  "Vendas B2B",
  "Criatividade",
  "Redes Sociais",
  "Marca Pessoal",

  // Hobbies & Criatividade
  "Fotografia",
  "Pintura em Tela",
  "Tocar Violão",
  "Xadrez",
  "Escrita Criativa",
  "Dança de Salão",
  "Tricô e Crochê",
  "Origami",
  "Mágica",
  "Cerâmica",
  "Desenho Digital",
  "Scrapbook",
  "Observar Pássaros",
  "Colecionismo",

  // Viagens & Lugares
  "Praias do Brasil",
  "Paris e França",
  "Cultura Japonesa",
  "Mochilão Europa",
  "Nova York",
  "Parques Nacionais",
  "Cruzeiros",
  "Museus Famosos",
  "Gastronomia Italiana",
  "Aurora Boreal",
  "Ilhas Gregas",
  "Safari na África",
  "Road Trip",
  "Acampamento",
  "Hotéis de Luxo",

  // Natureza & Animais
  "Raças de Cães",
  "Comportamento Felino",
  "Dinossauros",
  "Vida Marinha",
  "Floresta Amazônica",
  "Mudanças Climáticas",
  "Astronomia",
  "Vulcões",
  "Insetos",
  "Plantas Medicinais",
  "Sustentabilidade",
  "Energia Solar",
  "Reciclagem",
  "Animais Silvestres",
  "Geologia",

  // Esportes
  "Futebol Brasileiro",
  "Fórmula 1",
  "Basquete NBA",
  "Tênis",
  "Surf",
  "Skate",
  "Vôlei",
  "Natação",
  "Artes Marciais",
  "Ciclismo",

  // Conhecimentos Gerais
  "Mitologia Grega",
  "História da Arte",
  "Invenções Famosas",
  "Filosofia Básica",
  "Psicologia",
  "Arquitetura Moderna",
  "Curiosidades Históricas",
  "Império Romano",
  "Segunda Guerra",
  "Egito Antigo",
];

import { useSettings } from "./context/SettingsContext";
import { useProgress } from "./context/ProgressContext";
import { useStudySession } from "./hooks/useStudySession";

const App: React.FC = () => {
  const [authTimestamp, setAuthTimestamp] = useLocalStorage<number | null>(
    "flashlingo_auth_timestamp",
    null,
  );

  // Helper to check if session is still valid
  const checkIsAuthenticated = useCallback(() => {
    if (!authTimestamp) return false;
    return Date.now() - authTimestamp < SESSION_DURATION;
  }, [authTimestamp]);

  const [isAuthenticated, setIsAuthenticated] = useState(
    checkIsAuthenticated(),
  );

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

  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  const {
    targetLanguage,
    setTargetLanguage,
    isDarkMode,
    setIsDarkMode,
    expandedGroups,
    setExpandedGroups,
  } = useSettings();
  const { topicWords, activeSessions, resetTopicProgress } = useProgress();
  const {
    appState,
    session,
    isCardFlipped,
    setIsCardFlipped,
    errorMsg,
    startSession,
    resumeSession,
    handleCardResult,
    handlePreviousCard,
    resetApp,
    getTopicKey,
  } = useStudySession();

  const [showAbout, setShowAbout] = useState(false);

  const toggleGroup = (groupKey: string) => {
    setExpandedGroups((prev) => {
      if (groupKey.startsWith("super_")) {
        const hasExplicitToggle = Object.keys(prev).some(k => k.startsWith("super_"));
        let wasOpen = false;

        // Determine if it was currently open
        if (!hasExplicitToggle) {
          // If no state exists, the first one is implicitly open
          const isFirstItem = groupKey === "super_Grammar" || groupKey === "super_Gramática";
          wasOpen = isFirstItem;
        } else {
          wasOpen = prev[groupKey] === true;
        }

        const nextState = { ...prev };
        
        // Close all super_ keys
        Object.keys(nextState).forEach(k => {
          if (k.startsWith("super_")) {
            nextState[k] = false;
          }
        });

        // If it wasn't open, open it. (If it was open, it stays closed)
        if (!wasOpen) {
          nextState[groupKey] = true;
        } else {
          // To ensure we remember the user explicitly closed everything, add a dummy key
          nextState["super_dummy"] = true; 
        }

        return nextState;
      }

      return { ...prev, [groupKey]: !prev[groupKey] };
    });
  };

  const resetProgress = (
    topicId: string,
    e?: React.MouseEvent,
    force: boolean = false,
  ) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    resetTopicProgress(topicId, getTopicKey, targetLanguage);
  };

  // --- STANDARD VIEWS ---

  const renderHome = () => (
    <div className="max-w-2xl mx-auto px-6 py-8 flex flex-col items-center relative">
      <div className="bg-indigo-100 dark:bg-indigo-900/50 p-4 rounded-full mb-6">
        <BrainCircuit
          size={48}
          className="text-indigo-600 dark:text-indigo-400"
        />
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
            <button
              onClick={() => setTargetLanguage("en")}
              className={`p-1.5 rounded-full transition-all ${targetLanguage === "en" ? "bg-indigo-100 ring-2 ring-indigo-500" : "opacity-70 hover:opacity-100"}`}
              title="Inglês"
            >
              <FlagUS />
            </button>
            <button
              onClick={() => setTargetLanguage("es")}
              className={`p-1.5 rounded-full transition-all ${targetLanguage === "es" ? "bg-indigo-100 ring-2 ring-indigo-500" : "opacity-70 hover:opacity-100"}`}
              title="Espanhol"
            >
              <FlagES />
            </button>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              title={isDarkMode ? "Modo Claro" : "Modo Escuro"}
              className={`flex items-center justify-center p-2 w-10 h-10 rounded-full transition-all border ${isDarkMode ? "bg-slate-800 text-yellow-400 border-slate-700 hover:bg-slate-700" : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"}`}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button
              onClick={() => setShowAbout(true)}
              title="Sobre o FlashLingo"
              className={`flex items-center justify-center p-2 w-10 h-10 rounded-full transition-all border ${isDarkMode ? "bg-slate-800 text-indigo-400 border-slate-700 hover:bg-slate-700" : "bg-white text-indigo-600 border-slate-200 hover:bg-slate-50"}`}
            >
              <Info size={20} />
            </button>
          </div>
        </div>
      </div>

      {targetLanguage !== "en" && targetLanguage !== "es" ? (
        <div className="w-full bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-3xl p-10 flex flex-col items-center justify-center text-center mt-4">
          <div className="bg-amber-100 dark:bg-amber-900/30 p-5 rounded-full mb-5">
            <Wrench className="text-amber-600 dark:text-amber-400" size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-3">
            Em Construção
          </h2>
          <p className="text-slate-500 dark:text-slate-400 max-w-md">
            O aprendizado para este idioma estará disponível em breve! Estamos
            trabalhando a todo vapor para trazer os melhores conteúdos e cards
            adaptados.
          </p>
          <button
            onClick={() => setTargetLanguage("en")}
            className="mt-8 px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-colors shadow-sm"
          >
            Voltar para o Inglês
          </button>
        </div>
      ) : (
        <>
          {(targetLanguage === "es"
            ? [
                { title: "Gramática", groups: ["Gramática A1-S"] },
                { title: "Vocabulario", groups: ["Vocabulario A1-S"] },
              ]
            : [
                { title: "Grammar", groups: ["Grammar A1"] },
                { title: "Vocabulary", groups: ["Vocabulary A1"] },
                { title: "W", groups: ["W2", "W4"] },
              ]
          ).map((superCategory, index) => {
            const superKey = `super_${superCategory.title}`;
            const hasAnyExplicit = Object.keys(expandedGroups).some((k) => k.startsWith("super_"));
            const isSuperExpanded = hasAnyExplicit ? expandedGroups[superKey] === true : index === 0;

            let superTotalLearned = 0;
            let superTotalCards = 0;
            let superTotalDecks = 0;

            superCategory.groups.forEach((groupName) => {
              const groupTopics = PREDEFINED_TOPICS.filter(
                (t: any) => t.group === groupName,
              );
              superTotalDecks += groupTopics.length;
              groupTopics.forEach((topic) => {
                const key = getTopicKey(topic.id);
                superTotalLearned += (topicWords[key] || []).length;
                let topicTotalCards = CARDS_PER_DECK;
                if (
                  topic.isStatic &&
                  decksMetadata[topic.id] &&
                  decksMetadata[topic.id][targetLanguage]
                ) {
                  topicTotalCards = decksMetadata[topic.id][targetLanguage];
                }
                superTotalCards += topicTotalCards;
              });
            });

            if (superTotalDecks === 0) return null;

            return (
              <div key={superCategory.title} className="mb-10 w-full relative">
                <button
                  onClick={() => toggleGroup(superKey)}
                  className="w-full flex items-center justify-between cursor-pointer py-4 px-5 bg-indigo-600 dark:bg-indigo-900 border border-indigo-700 dark:border-indigo-800 rounded-xl shadow-md mb-4 transition-colors hover:bg-indigo-700 dark:hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-300 dark:focus:ring-indigo-500 text-left"
                  aria-expanded={isSuperExpanded}
                >
                  <div className="flex items-center gap-4">
                    <BookOpenText
                      size={24}
                      className="text-white bg-indigo-500/50 p-1.5 rounded-lg"
                    />
                    <h2 className="text-xl font-bold text-white tracking-wide">
                      {superCategory.title}
                    </h2>
                    <span className="bg-indigo-800/80 text-indigo-100 font-medium px-3 py-1 rounded-full text-sm shadow-inner hidden sm:inline-flex">
                      {superTotalDecks} decks • {superTotalLearned}/
                      {superTotalCards}
                    </span>
                  </div>
                  <div>
                    {isSuperExpanded ? (
                      <ChevronDown
                        size={24}
                        className="text-white transition-transform"
                      />
                    ) : (
                      <ChevronLeft
                        size={24}
                        className="text-white transition-transform"
                      />
                    )}
                  </div>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${isSuperExpanded ? "max-h-[10000px] opacity-100" : "max-h-0 opacity-0"}`}
                >
                  {superCategory.groups.map((groupName) => {
                    const groupTopics = PREDEFINED_TOPICS.filter(
                      (t: any) => t.group === groupName,
                    );
                    if (groupTopics.length === 0) return null;
                    const isExpanded = expandedGroups[groupName] === true; // default false

                    const sortedGroupTopics = [...groupTopics].sort((a, b) => {
                      const keyA = getTopicKey(a.id);
                      const learnedCountA = (topicWords[keyA] || []).length;
                      let totalCardsA = CARDS_PER_DECK;
                      if (
                        a.isStatic &&
                        decksMetadata[a.id] &&
                        decksMetadata[a.id][targetLanguage]
                      ) {
                        totalCardsA = decksMetadata[a.id][targetLanguage];
                      }
                      const isCompleteA = learnedCountA >= totalCardsA;

                      const keyB = getTopicKey(b.id);
                      const learnedCountB = (topicWords[keyB] || []).length;
                      let totalCardsB = CARDS_PER_DECK;
                      if (
                        b.isStatic &&
                        decksMetadata[b.id] &&
                        decksMetadata[b.id][targetLanguage]
                      ) {
                        totalCardsB = decksMetadata[b.id][targetLanguage];
                      }
                      const isCompleteB = learnedCountB >= totalCardsB;

                      if (isCompleteA && !isCompleteB) return 1;
                      if (!isCompleteA && isCompleteB) return -1;
                      return groupTopics.indexOf(a) - groupTopics.indexOf(b);
                    });

                    return (
                      <div key={groupName} className="w-full mb-6 mt-4">
                        <button
                          className="flex items-center gap-2 mb-3 px-2 w-full text-left group cursor-pointer focus:outline-none"
                          onClick={() => toggleGroup(groupName)}
                          aria-expanded={isExpanded}
                        >
                          <h3 className="text-lg font-bold text-slate-700 dark:text-slate-300">
                            {groupName}
                          </h3>
                          {isExpanded ? (
                            <ChevronDown
                              size={18}
                              className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors"
                            />
                          ) : (
                            <ChevronRight
                              size={18}
                              className="text-slate-400 group-hover:text-slate-600 dark:group-hover:text-slate-200 transition-colors"
                            />
                          )}
                        </button>

                        <div
                          className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-[5000px] opacity-100" : "max-h-0 opacity-0"}`}
                        >
                          <div className="w-full grid grid-cols-1 gap-4">
                            {sortedGroupTopics.map((topic) => {
                              const key = getTopicKey(topic.id);
                              const learnedCount = (topicWords[key] || [])
                                .length;
                              let totalCards = CARDS_PER_DECK;
                              if (
                                topic.isStatic &&
                                decksMetadata[topic.id] &&
                                decksMetadata[topic.id][targetLanguage]
                              ) {
                                totalCards =
                                  decksMetadata[topic.id][targetLanguage];
                              }

                              const displayLearnedCount = learnedCount;
                              const progressPercent = Math.min(
                                100,
                                (displayLearnedCount / totalCards) * 100,
                              );
                              const activeSession = activeSessions[key];
                              const isComplete =
                                displayLearnedCount >= totalCards;

                              return (
                                <div
                                  key={topic.id}
                                  className="relative bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl p-0 cursor-pointer shadow-sm hover:shadow-md transition-all hover:scale-[1.02] group overflow-hidden flex flex-col sm:flex-row"
                                >
                                  {/* Left Side - Main Info */}
                                  <div
                                    onClick={() =>
                                      activeSession
                                        ? resumeSession(topic.id)
                                        : isComplete
                                          ? null
                                          : startSession(topic.label, topic.id)
                                    }
                                    className="flex-1 p-5 flex items-center justify-between"
                                  >
                                    <div className="absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full">
                                      <div
                                        className="h-full bg-indigo-500 transition-all duration-1000"
                                        style={{ width: `${progressPercent}%` }}
                                      />
                                    </div>
                                    <div className="flex items-center w-full min-w-0">
                                      <div className="w-full min-w-0">
                                        <div className="flex items-center mb-1">
                                          <span className="font-bold text-slate-800 dark:text-white text-lg mr-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">
                                            {topic.label}
                                          </span>
                                          <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 px-2 py-1 rounded-lg">
                                            {isComplete
                                              ? "100% CONCLUÍDO"
                                              : `${displayLearnedCount} / ${totalCards}`}
                                          </span>
                                        </div>
                                        <div className="flex gap-3 text-sm min-h-[1.25rem] text-slate-500 dark:text-slate-400">
                                          {topic.description && <span className="truncate">{topic.description}</span>}
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  {/* Right Side - Actions */}
                                  <div className="flex items-center border-t sm:border-t-0 sm:border-l border-slate-100 dark:border-slate-700 bg-slate-50/50 dark:bg-slate-900/20">
                                    {activeSession ? (
                                      <>
                                        <button
                                          onClick={(e) =>
                                            resetProgress(topic.id, e)
                                          }
                                          className="h-full px-4 py-3 sm:py-0 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center border-r border-slate-100 dark:border-slate-700"
                                          title="Reiniciar Progresso"
                                        >
                                          <RotateCcw size={18} />
                                        </button>
                                        <button
                                          onClick={(e) => {
                                            e.stopPropagation();
                                            resumeSession(topic.id);
                                          }}
                                          className="h-full w-full sm:w-auto px-6 py-3 sm:py-0 bg-amber-500 hover:bg-amber-600 text-white font-bold transition-colors flex items-center justify-center gap-2"
                                        >
                                          Continuar (
                                          {activeSession.currentIndex}/
                                          {activeSession.cards.length})
                                        </button>
                                      </>
                                    ) : isComplete ? (
                                      <button
                                        onClick={(e) =>
                                          resetProgress(topic.id, e)
                                        }
                                        className="h-full px-6 py-3 sm:py-0 text-green-600 hover:text-green-700 bg-green-50 hover:bg-green-100 dark:bg-green-900/20 dark:hover:bg-green-900/40 transition-colors flex items-center justify-center gap-2 font-bold"
                                        title="Reiniciar Progresso"
                                      >
                                        <Trophy size={18} /> Concluído
                                      </button>
                                    ) : (
                                      <>
                                        {displayLearnedCount > 0 && (
                                          <button
                                            onClick={(e) =>
                                              resetProgress(topic.id, e)
                                            }
                                            className="h-full px-4 py-3 sm:py-0 text-slate-300 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors flex items-center justify-center"
                                            title="Reiniciar Progresso"
                                          >
                                            <RotateCcw size={18} />
                                          </button>
                                        )}
                                        <div
                                          onClick={() =>
                                            startSession(topic.label, topic.id)
                                          }
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
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );

  const renderLoading = () => {
    let langLabel = "Inglês";
    if (targetLanguage === "es") langLabel = "Espanhol";

    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className="relative">
          <div
            className={`w-16 h-16 border-4 rounded-full animate-spin border-indigo-200 border-t-indigo-600 dark:border-indigo-900 dark:border-t-indigo-500`}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Sparkles
              size={20}
              className="text-indigo-600 dark:text-indigo-500 animate-pulse"
            />
          </div>
        </div>
        <h2 className="mt-6 text-xl font-bold text-slate-800 dark:text-white">
          Carregando Deck...
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mt-2">{`Preparando desafio de ${langLabel}`}</p>
      </div>
    );
  };

  const renderError = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6 text-center">
      <div className="bg-red-100 dark:bg-red-900/30 p-4 rounded-full mb-4 text-red-600 dark:text-red-400">
        <X size={32} />
      </div>
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">
        Ops, algo deu errado
      </h2>
      <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-md">
        {errorMsg}
      </p>
      <button
        onClick={resetApp}
        className="bg-slate-900 dark:bg-slate-700 text-white px-6 py-3 rounded-xl font-bold hover:bg-slate-800 dark:hover:bg-slate-600"
      >
        Tentar Novamente
      </button>
    </div>
  );

  const renderStudy = () => {
    if (!session || !session.cards[session.currentIndex]) return null;
    const currentCard = session.cards[session.currentIndex];
    return (
      <div className="max-w-xl mx-auto px-6 py-8 flex flex-col items-center min-h-screen justify-center">
        <div className="w-full flex justify-between items-center mb-8">
          <button
            onClick={resetApp}
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 p-2"
          >
            <X size={24} />
          </button>
          <div className="flex flex-col items-center">
            <div className="px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide border-0 bg-indigo-100 dark:bg-indigo-900/50 text-indigo-700 dark:text-indigo-400">
              {session.topicLabel}
            </div>
          </div>
          <div className="w-8"></div>
        </div>
        <ProgressBar
          current={session.currentIndex}
          total={session.cards.length}
        />
        <div className="w-full mb-10">
          <Card
            key={currentCard.id}
            data={currentCard}
            isFlipped={isCardFlipped}
            onFlip={() => setIsCardFlipped(!isCardFlipped)}
            targetLanguage={session.language}
            onStudy={() => handleCardResult(false)}
            onKnow={() => handleCardResult(true)}
            onPrevious={handlePreviousCard}
            isPreviousDisabled={session.currentIndex === 0}
          />
        </div>
      </div>
    );
  };

  const renderSummary = () => {
    if (!session) return null;

    return (
      <div className="max-w-md mx-auto px-6 py-16 flex flex-col items-center justify-center text-center">
        <div className="p-5 rounded-full mb-6 bg-yellow-100 dark:bg-yellow-900/40 text-yellow-600 dark:text-yellow-400 border border-yellow-200 dark:border-yellow-800">
          <Trophy size={48} className="animate-bounce" />
        </div>
        <h2 className="text-3xl font-extrabold text-slate-800 dark:text-white mb-3">
          Você zerou este tópico!
        </h2>
        <p className="text-slate-500 dark:text-slate-400 mb-10 max-w-sm">
          Parabéns! Você completou todos os cards e dominou o tópico{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            {session.topicLabel}
          </span>
          .
        </p>

        <div className="flex flex-col gap-3.5 w-full">
          <button
            onClick={(e) => {
              resetProgress(session.topicId, e);
              startSession(session.topicLabel, session.topicId);
            }}
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-4 rounded-2xl font-bold transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] flex justify-center items-center gap-2"
          >
            <RotateCcw size={20} />
            Reiniciar Deck
          </button>

          <button
            onClick={() => resetApp()}
            className="w-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 py-3.5 rounded-2xl font-bold hover:border-slate-300 dark:hover:border-slate-600 hover:bg-slate-50 dark:hover:bg-slate-750 transition-all hover:scale-[1.01] active:scale-[0.99]"
          >
            Voltar ao Menu Principal
          </button>
        </div>
      </div>
    );
  };

  const renderAboutModal = () => {
    return (
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 transition-all duration-300 animate-fadeIn"
        onClick={() => setShowAbout(false)}
        id="about-modal-backdrop"
      >
        <div
          className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-lg w-full max-h-[85vh] overflow-y-auto shadow-2xl p-6 sm:p-8 flex flex-col relative transition-all duration-300"
          onClick={(e) => e.stopPropagation()}
          id="about-modal-box"
        >
          {/* Close button top right */}
          <button
            onClick={() => setShowAbout(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <X size={20} />
          </button>

          {/* Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-indigo-100 dark:bg-indigo-950 p-3 rounded-2xl text-indigo-600 dark:text-indigo-400 shadow-sm">
              <BrainCircuit size={32} />
            </div>
            <div className="text-left">
              <div className="flex items-center">
                <h2 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight">
                  FlashLingo AI
                </h2>
                <span className="text-[10px] font-bold bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-900 px-2 py-0.5 rounded-md ml-2 tracking-wide">
                  V1.5.0
                </span>
              </div>
              <p className="text-xs font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-widest mt-0.5">
                Estudo Inteligente de Idiomas
              </p>
            </div>
          </div>

          <div className="space-y-6 text-sm text-slate-600 dark:text-slate-300">
            {/* Description */}
            <div className="bg-slate-100/70 dark:bg-slate-800/40 p-4 rounded-2xl border border-slate-200/65 dark:border-slate-800/60 text-left">
              <p className="leading-relaxed font-medium text-slate-700 dark:text-slate-200">
                O <strong>FlashLingo AI</strong> é um aplicativo inteligente de
                flashcards projetado para acelerar e solidificar a aquisição de
                novos idiomas. Unindo o poder de revisões estruturadas por
                lição, guias de pronúncia fonética e sotaques adaptados, a
                ferramenta facilita o desenvolvimento do seu vocabulário de
                forma estimulante e guiada.
              </p>
            </div>

            {/* Core Pillars */}
            <div className="text-left">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles size={14} className="text-indigo-500" /> Principais
                Recursos
              </h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="mt-0.5 p-1 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-500 shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block">
                      Pronúncia Fonética Intuitiva
                    </span>
                    <span className="text-xs block text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">
                      Transcrição silábica fonética adaptada para falantes de
                      português. Você lê com nossa fonética simplificada e o som
                      sai perfeito!
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 p-1 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-500 shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block font-sans">
                      Lições de Gramática e Vocabulário (A1 ao C1)
                    </span>
                    <span className="text-xs block text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">
                      Cards distribuídos didaticamente em lições focadas em
                      estruturas gramaticais e expansão de vocabulário,
                      do nível A1 (iniciante) ao C1 (avançado).
                    </span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="mt-0.5 p-1 bg-indigo-50 dark:bg-indigo-950/50 rounded-lg text-indigo-500 shrink-0">
                    <Check size={14} />
                  </div>
                  <div>
                    <span className="font-bold text-slate-800 dark:text-white block">
                      Sessões Híbridas & Persistentes
                    </span>
                    <span className="text-xs block text-slate-500 dark:text-slate-400 mt-0.5 font-medium leading-relaxed">
                      Acompanhamento de progresso instantâneo. Caso precise
                      fechar o aplicativo, o progresso ativo é gravado de forma
                      segura em seu dispositivo para retornar exatamente de onde
                      parou.
                    </span>
                  </div>
                </li>
              </ul>
            </div>

            {/* How to study */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 text-left">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5">
                Como Estudar
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mb-4">
                Navegue pelas listas de lições expandidas, selecione um baralho
                e clique para iniciar. A navegação entre os cartões é fluida e
                simples:
              </p>
              <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-indigo-500 dark:text-indigo-400 border border-slate-200 dark:border-slate-700/60 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <RefreshCw size={14} className="shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Girar Carta:</strong> Toque no botão redondo central
                    para virar o cartão e visualizar a tradução, pronúncia,
                    exemplos práticos e o texto em português.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <Check size={14} strokeWidth={3} className="shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Marcar como Aprendido:</strong> Pressione o check
                    verde da direita para confirmar o domínio da palavra e
                    avançar no baralho.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-350 border border-slate-200 dark:border-slate-700/60 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <ArrowLeft size={14} strokeWidth={3} className="shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Revisar Anterior:</strong> Toque na seta à esquerda
                    para voltar ao cartão anterior caso precise rever a palavra
                    rapidamente.
                  </span>
                </li>
              </ul>
            </div>

            {/* Auto Play System */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 text-left animate-fadeIn">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <Sparkles size={14} className="text-indigo-500" /> Sons e
                Leituras
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mb-4">
                No topo do cartão, você tem acesso a recursos interativos
                individuais para treinar seus ouvidos e ritmo:
              </p>
              <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-amber-50 dark:bg-amber-950/15 text-amber-600 dark:text-amber-500 border border-amber-100 dark:border-amber-900/20 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <Zap size={14} className="fill-current shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Áudio Standard:</strong> Reproduz a pronúncia em tom
                    e velocidade natural de conversação real de forma limpa.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-amber-50 dark:bg-amber-950/15 text-amber-600 dark:text-amber-500 border border-amber-100 dark:border-amber-900/20 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <Snail size={14} className="fill-current shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Áudio Lento:</strong> Modo tartaruga de pronúncia
                    silabada, ideal para você captar cada fonema nos mínimos
                    detalhes.
                  </span>
                </li>
              </ul>
            </div>

            {/* Explaining Auto Play controls separately */}
            <div className="border-t border-slate-200 dark:border-slate-800 pt-5 text-left animate-fadeIn">
              <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                <ToggleRight size={15} className="text-emerald-500" /> Chaves de
                Automatização (Auto Play)
              </h3>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-semibold mb-4">
                Logo abaixo de cada um desses símbolos há uma pequena chave
                (switch) verde. Veja como ela funciona:
              </p>
              <ul className="space-y-4 text-xs text-slate-500 dark:text-slate-400 font-medium font-sans">
                <li className="flex items-start gap-3">
                  <div className="flex items-center justify-center bg-slate-100 dark:bg-slate-800 text-emerald-500 border border-slate-200 dark:border-slate-700 w-8 h-8 rounded-full shrink-0 shadow-sm">
                    <ToggleRight size={16} className="shrink-0" />
                  </div>
                  <span className="mt-1 leading-relaxed">
                    <strong>Auto Play de Recurso:</strong> Se a chave estiver
                    ativada (verde), esse recurso de áudio iniciará{" "}
                    <strong>automaticamente</strong> assim que você passar para
                    o próximo cartão.
                  </span>
                </li>
                <li className="flex items-start gap-3 border-t border-slate-100 dark:border-slate-850/40 pt-2.5">
                  <div className="flex flex-col items-center gap-1 shrink-0 w-8">
                    <div className="flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-900/30 w-8 h-8 rounded-full shadow-sm">
                      <Check size={14} strokeWidth={3} />
                    </div>
                    <ToggleRight
                      size={10}
                      className="text-emerald-500 shrink-0"
                    />
                  </div>
                  <span className="mt-1.5 leading-relaxed">
                    <strong>Avanço Automático (Hands-Free):</strong> Ativando a
                    chave verde sob o botão do check verde, o aplicativo irá{" "}
                    <strong>avançar sozinho</strong> para a próxima palavra
                    assim que a reprodução das mídias selecionadas terminar.
                    Estude sem precisar digitar ou clicar!
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Action button */}
          <div className="mt-8">
            <button
              onClick={() => setShowAbout(false)}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-4 rounded-2xl transition-all shadow-md hover:scale-[1.01] active:scale-[0.99] text-center flex items-center justify-center gap-2"
            >
              Começar a Estudar
            </button>
          </div>
        </div>
      </div>
    );
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    const pw = password.trim().toLowerCase();
    if (pw === "europa" || pw === "amarula") {
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
              <BrainCircuit
                className="text-indigo-600 dark:text-indigo-400"
                size={48}
              />
            </div>
          </div>
          <h1 className="text-2xl font-black text-center mb-2 dark:text-slate-50">
            Acesso Restrito
          </h1>
          <p className="text-slate-500 dark:text-slate-400 text-center mb-8">
            Digite a palavra-chave para entrar.
          </p>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setLoginError(false);
                }}
                className={`w-full px-4 py-3 rounded-xl border-2 ${loginError ? "border-red-400 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100" : "border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-slate-900 dark:text-slate-50"} focus:border-indigo-400 focus:outline-none focus:ring-4 focus:ring-indigo-100 dark:focus:ring-indigo-900/30 transition-all font-medium`}
                placeholder="Palavra-chave"
                autoFocus
              />
              {loginError && (
                <p className="text-red-500 text-sm mt-2 font-medium">
                  Palavra-chave incorreta.
                </p>
              )}
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
      {showAbout && renderAboutModal()}
    </div>
  );
};

export default App;
