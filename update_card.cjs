const fs = require('fs');
let content = fs.readFileSync('components/Card.tsx', 'utf8');

const target = `{/* Bottom Actions Container (BACK) */}
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

             {/* Flip Button - Central and Large */}`;

const replacement = `{/* Bottom Actions Container (BACK) */}
          <div className="w-full px-4 flex items-center justify-center gap-8 mt-auto pt-4" onClick={(e) => e.stopPropagation()}>
             {/* Flip Button - Central and Large */}`;

if (content.includes(target)) {
  content = content.replace(target, replacement);
  
  // also remove onStudy prop
  content = content.replace('onStudy: () => void;\n', '');
  content = content.replace('  onStudy,\n', '');

  fs.writeFileSync('components/Card.tsx', content);
  console.log('updated Card.tsx');
} else {
  console.log('target not found in Card.tsx');
}
