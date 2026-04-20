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
  },
  share_rent: {
    en: SHARE_RENT_DECK
  },
  to_be_1: {
    en: TO_BE_1_DECK
  },
  to_be_2: {
    en: TO_BE_2_DECK
  },
  to_be: {
    en: TO_BE_DECK
  },
  begin_choose: {
    en: BEGIN_CHOOSE_DECK
  },
  listen_watch: {
    en: LISTEN_WATCH_DECK
  },
  post_follow: {
    en: POST_FOLLOW_DECK
  },
  drink_eat_want: {
    en: DRINK_EAT_WANT_DECK
  },
  go_have_visit: {
    en: GO_HAVE_VISIT_DECK
  },
  travel_stay_need: {
    en: TRAVEL_STAY_NEED_DECK
  },
  know_work_live: {
    en: KNOW_WORK_LIVE_DECK
  }
};
`;

fs.writeFileSync('data/staticDecks.ts', data);
console.log('Done');
