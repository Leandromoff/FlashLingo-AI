const fs = require('fs');
let content = fs.readFileSync('App.tsx', 'utf8');

content = content.replace('            onStudy={() => handleCardResult(false)}\n', '');

fs.writeFileSync('App.tsx', content);
console.log('App.tsx fixed');
