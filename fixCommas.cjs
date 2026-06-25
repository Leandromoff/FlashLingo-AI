const fs = require('fs');
let code = fs.readFileSync('types.ts', 'utf8');

code = code.replace(/,\n\s*, description:/g, ',\n    description:');
code = code.replace(/,\s*, description:/g, ', description:');

fs.writeFileSync('types.ts', code);
console.log('Fixed commas');
