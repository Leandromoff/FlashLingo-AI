const fs = require('fs');
let data = fs.readFileSync('data/staticDecks.ts', 'utf8');

data += `

export const STATIC_DECKS: Record<string, Record<string, FlashcardData[]>> = {
  write_think: {
    en: WRITE_THINK_DECK
  },
  to_be_intro: {
    en: TO_BE_INTRO_DECK
  },
  start_finish: {
    en: START_FINISH_DECK
  },
  move_put: {
    en: MOVE_PUT_DECK
  }
};
`;

fs.writeFileSync('data/staticDecks.ts', data);
console.log('Done');
