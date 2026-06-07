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
  to_sell_pay: {
    en: TO_SELL_PAY_DECK
  },
  to_put_do: {
    en: TO_PUT_DO_DECK
  },
  to_play_run: {
    en: TO_PLAY_RUN_DECK
  },
  to_spend_travel: {
    en: TO_SPEND_TRAVEL_DECK
  },
  to_arrive_leave: {
    en: TO_ARRIVE_LEAVE_DECK
  }
};
`;

fs.writeFileSync('data/staticDecks.ts', data);
console.log('Done');
