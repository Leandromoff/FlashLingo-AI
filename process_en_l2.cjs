const fs = require('fs');

const rawText = fs.readFileSync('data_en_l2.txt', 'utf8');

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const items = [];
let cardCounter = 1;

for (let line of lines) {
    if (!line.includes('—')) continue;
    
    const parts = line.split('|');
    if (parts.length >= 3) {
         const wordTrans = parts[0].trim();
         const ipaPart = parts[1].trim();
         const ptPart = parts[2].trim();

         const wtParts = wordTrans.split('—');
         if (wtParts.length >= 2) {
              const word = wtParts[0].trim();
              const trans = wtParts.slice(1).join('—').trim();
              let ipa = ipaPart.replace(/^IPA:\s*/, '').trim();
              let pt = ptPart.replace(/^PT:\s*/, '').trim();
              
              items.push({
                  id: 'lesson_2_grammar_a2_en_card_' + (cardCounter++),
                  word: word,
                  translation: trans,
                  pronunciation: ipa,
                  portuguesePhonetic: pt
              });
         }
    }
}

fs.writeFileSync('public/decks/lesson_2_grammar_a2_en.json', JSON.stringify(items, null, 2));
console.log('Created lesson_2_grammar_a2_en.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['lesson_2_grammar_a2']) {
  meta['lesson_2_grammar_a2'] = {};
}
meta['lesson_2_grammar_a2'].en = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
