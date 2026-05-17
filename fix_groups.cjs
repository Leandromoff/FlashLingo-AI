const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

const targetIndex = code.indexOf("{['W2', 'W4'].map(groupName => {");
if (targetIndex === -1) {
  console.log("Could not find the target block.");
  process.exit(1);
}

const endPart = "          <div className=\"w-full mt-6 bg-white dark:bg-slate-800 p-5 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm\">";
const endIndex = code.indexOf(endPart, targetIndex);

if (endIndex === -1) {
  console.log("Could not find the end block.");
  process.exit(1);
}

const newJsx = `          {(() => {
            const getLessonNumber = (label) => {
              const match = label.match(/Lesson (\\d+)/);
              return match ? parseInt(match[1], 10) : 0;
            };

            const macoW2Topics = PREDEFINED_TOPICS.filter(t => {
              const num = getLessonNumber(t.label);
              return num >= 31 && num <= 59;
            });

            const macoW4Topics = PREDEFINED_TOPICS.filter(t => {
              const num = getLessonNumber(t.label);
              return num >= 61 && num <= 85;
            });
            
            const renderMacoGroup = (groupId, title, topics, isExpanded, setExpanded) => {
              if (topics.length === 0) return null;
              
              let totalMacoCards = 0;
              let totalLearnedCards = 0;
              topics.forEach(t => {
                const key = getTopicKey(t.id);
                const learnedCount = (topicWords[key] || []).length;
                const totalCards = (t.isStatic && STATIC_DECKS[t.id] && STATIC_DECKS[t.id][targetLanguage]) 
                  ? STATIC_DECKS[t.id][targetLanguage].length 
                  : CARDS_PER_DECK;
                totalMacoCards += totalCards;
                totalLearnedCards += Math.min(learnedCount, totalCards);
              });

              return (
                <div key={groupId} className="w-full mb-8">
                  <button 
                    className="w-full flex items-center justify-between cursor-pointer py-4 px-6 bg-indigo-50 dark:bg-indigo-900/30 border-2 border-indigo-100 dark:border-indigo-800/60 rounded-2xl shadow-sm mb-4 transition-all hover:bg-indigo-100 dark:hover:bg-indigo-900/50"
                    onClick={() => setExpanded(!isExpanded)}
                    aria-expanded={isExpanded}
                  >
                    <div className="flex items-center gap-4">
                      <div className="bg-indigo-100 dark:bg-indigo-800/50 p-2 rounded-xl">
                        <BookOpenText size={24} className="text-indigo-600 dark:text-indigo-400" />
                      </div>
                      <div className="flex flex-col items-start gap-0.5">
                        <h3 className="text-xl font-black text-slate-800 dark:text-white">{title}</h3>
                        <span className="text-sm font-bold text-slate-500 dark:text-slate-400 bg-white dark:bg-slate-800/50 px-3 py-1 rounded-full border border-slate-200 dark:border-slate-700">
                          {topics.length} baralhos • {totalLearnedCards}/{totalMacoCards}
                        </span>
                      </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-transform">
                      {isExpanded ? <ChevronUp size={20} className="text-indigo-500 dark:text-indigo-400" /> : <ChevronDown size={20} className="text-indigo-500 dark:text-indigo-400" />}
                    </div>
                  </button>
                  
                  <div className={\`transition-all duration-300 overflow-hidden \${isExpanded ? 'opacity-100 mt-2' : 'max-h-0 opacity-0'}\`} style={isExpanded ? { maxHeight: \`\${topics.length * 200 + 500}px\` } : {}}>
                    <div className="w-full grid grid-cols-1 gap-4">
                      {topics.map((topic) => {
              const key = getTopicKey(topic.id);
              const learnedCount = (topicWords[key] || []).length;
              const totalCards = (topic.isStatic && STATIC_DECKS[topic.id] && STATIC_DECKS[topic.id][targetLanguage]) 
                ? STATIC_DECKS[topic.id][targetLanguage].length 
                : CARDS_PER_DECK;
              
              const displayLearnedCount = learnedCount;
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
                       <div className="absolute bottom-0 left-0 h-1 bg-slate-100 dark:bg-slate-700 w-full"><div className="h-full bg-indigo-500 transition-all duration-1000" style={{ width: \`\${progressPercent}%\` }} /></div>
                       <div className="flex items-center w-full">
                        <div className="w-full">
                            <div className="flex items-center mb-1">
                            <span className="font-bold text-slate-800 dark:text-white text-lg mr-2 group-hover:text-indigo-700 dark:group-hover:text-indigo-400">{topic.label}</span>
                            <span className="text-xs font-bold bg-indigo-50 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 border border-indigo-100 dark:border-indigo-800 px-2 py-1 rounded-lg">
                              {isComplete ? '100% CONCLUÍDO' : \`\${displayLearnedCount} / \${totalCards}\`}
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
                  </div>
                </div>
              );
            };

            return (
              <>
                {renderMacoGroup('w2', 'Maço W2', macoW2Topics, expandedMacoW2, setExpandedMacoW2)}
                {renderMacoGroup('w4', 'Maço W4', macoW4Topics, expandedMacoW4, setExpandedMacoW4)}
              </>
            );
          })()}
`;

code = code.substring(0, targetIndex) + newJsx + code.substring(endIndex);
fs.writeFileSync('App.tsx', code);
console.log('App.tsx updated!');
