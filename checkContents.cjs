const fs = require('fs');
const files = fs.readdirSync('./public/decks/').filter(f => f.includes('grammar') || f.includes('gramatica') || f.includes('vocabulary') || f.includes('vocabulario'));

for (let file of files) {
    const data = JSON.parse(fs.readFileSync('./public/decks/' + file, 'utf8'));
    const words = data.slice(0, 5).map(d => d.word).join(', ');
    console.log(file, '->', words);
}
