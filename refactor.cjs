const fs = require('fs');
let code = fs.readFileSync('App.tsx', 'utf8');

// Add ChevronDown, ChevronUp to imports if not present
if (!code.includes('ChevronDown')) {
    code = code.replace(', Trash2', ', ChevronDown, ChevronUp, Folder, Trash2');
}

// Add state for expanded groups
if (!code.includes('expandedGroups')) {
    code = code.replace("const [targetLanguage, setTargetLanguage] = useLocalStorage<SupportedLanguage>('flashlingo_target_language', 'en');",
    `const [targetLanguage, setTargetLanguage] = useLocalStorage<SupportedLanguage>('flashlingo_target_language', 'en');
  const [expandedGroups, setExpandedGroups] = useLocalStorage<Record<string, boolean>>('flashlingo_expanded_groups', { 'Maço W2': true, 'Maço W4': true, 'Outros': false });
  const toggleGroup = (group: string) => setExpandedGroups(prev => ({ ...prev, [group]: !prev[group] }));`);
}

// Check how topics are rendered
const topicMapStart = code.indexOf('{PREDEFINED_TOPICS.map((topic) => {');
const topicMapEndStr = `                   </div>
                </div>
              );
            })}`;
const topicMapEnd = code.indexOf(topicMapEndStr, topicMapStart) + topicMapEndStr.length;

if (topicMapStart !== -1 && topicMapEnd !== -1) {
    const replacement = `
            {Object.entries(
              PREDEFINED_TOPICS.reduce((acc, topic) => {
                const g = topic.group || 'Outros';
                if (!acc[g]) acc[g] = [];
                acc[g].push(topic);
                return acc;
              }, {} as Record<string, typeof PREDEFINED_TOPICS>)
            ).map(([groupName, topics]) => {
              const isExpanded = expandedGroups[groupName] ?? true;
              return (
                <div key={groupName} className="mb-6 w-full">
                  <button 
                    onClick={() => toggleGroup(groupName)}
                    className="w-full flex items-center justify-between p-4 bg-slate-100 dark:bg-slate-800/50 hover:bg-slate-200 dark:hover:bg-slate-800 rounded-xl mb-4 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <Folder size={20} className="text-indigo-500 dark:text-indigo-400" />
                      <h3 className="font-bold text-slate-800 dark:text-white text-lg">{groupName}</h3>
                      <span className="bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold px-2 py-0.5 rounded-full">
                        {topics.length} baralhos
                      </span>
                    </div>
                    {isExpanded ? <ChevronUp size={20} className="text-slate-400" /> : <ChevronDown size={20} className="text-slate-400" />}
                  </button>
                  
                  {isExpanded && (
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
                                    className="p-4 h-full flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors w-full sm:w-20"
                                    title="Zerar progresso deste tópico"
                                >
                                    <Trash2 size={16} />
                                    <span className="text-[10px] font-bold uppercase">Zerar</span>
                                </button>
                                <button 
                                    onClick={() => resumeSession(topic.id)}
                                    className="p-4 h-full flex flex-col items-center justify-center gap-1 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition-colors w-full sm:w-24 font-bold border-l border-slate-100 dark:border-slate-700"
                                >
                                    <RotateCcw size={18} />
                                    <span className="text-xs">Retomar</span>
                                </button>
                            </>
                        ) : isComplete ? (
                          <div className="px-6 py-4 flex items-center justify-center gap-2 text-indigo-500 dark:text-indigo-400 w-full font-bold">
                             <Check size={20} /> Concluído
                          </div>
                        ) : (
                          <button 
                              onClick={() => reviewCount > 0 ? startSession(topic.label, topic.id, true) : startSession(topic.label, topic.id)}
                              className="p-5 h-full flex items-center justify-center text-indigo-600 dark:text-indigo-400 hover:bg-indigo-50 dark:hover:bg-indigo-900/40 transition-colors w-full sm:w-24 group-hover:bg-indigo-50 dark:group-hover:bg-indigo-900/20"
                          >
                              <ArrowRight size={24} className="transform group-hover:translate-x-1 transition-transform" />
                          </button>
                        )}
                   </div>
                </div>
              );
            })}
                    </div>
                  )}
                </div>
              );
            })}`;

    code = code.substring(0, topicMapStart) + replacement + code.substring(topicMapEnd);
    fs.writeFileSync('App.tsx', code);
    console.log('App.tsx updated.');
} else {
    console.log('Could not find topic map string.', topicMapStart, topicMapEnd);
}
