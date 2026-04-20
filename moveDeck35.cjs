const fs = require('fs');
let data = fs.readFileSync('data/staticDecks.ts', 'utf8');

const startIndex = data.indexOf('export const WRITE_THINK_DECK');
if (startIndex !== -1) {
  const blockToMove = data.slice(startIndex);
  data = data.slice(0, startIndex);
  data = data.replace('export const STATIC_DECKS', blockToMove + '\nexport const STATIC_DECKS');
  fs.writeFileSync('data/staticDecks.ts', data);
  console.log('Moved successfully!');
} else {
  console.log('Not found!');
}
