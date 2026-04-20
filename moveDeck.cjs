const fs = require('fs');
let data = fs.readFileSync('data/staticDecks.ts', 'utf8');

const regex = /export const START_FINISH_DECK: FlashcardData\[\] = \[\s*\{[\s\S]*?\}\s*\];/;
const match = data.match(regex);

if (match) {
  data = data.replace(regex, '');
  data = data.replace('export const STATIC_DECKS', match[0] + '\n\nexport const STATIC_DECKS');
  fs.writeFileSync('data/staticDecks.ts', data);
  console.log('Moved successfully!');
} else {
  console.log('Not found!');
}
