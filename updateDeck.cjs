const fs = require('fs');
let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

const additionalCards = `,
  {
    id: 'kwl_23',
    word: 'on time',
    translation: 'na hora, no prazo',
    pronunciation: '/ɒn taɪm/',
    portuguesePhonetic: 'ón táim',
    syllables: ['on', 'time'],
    exampleSentence: 'She really wanted that job, but didn\\'t send her resume on time.',
    exampleTranslation: 'Ela realmente queria aquele emprego, mas não enviou seu currículo na hora.'
  },
  {
    id: 'kwl_24',
    word: 'close to',
    translation: 'perto de',
    pronunciation: '/kləʊs tʊ/',
    portuguesePhonetic: 'clôus tchu',
    syllables: ['close', 'to'],
    exampleSentence: 'Louise didn\\'t live close to her work.',
    exampleTranslation: 'Louise não morava perto do seu trabalho.'
  },
  {
    id: 'kwl_25',
    word: 'to work for',
    translation: 'trabalhar para',
    pronunciation: '/tʊ wɜːk fɔːr/',
    portuguesePhonetic: 'tchu uârk fór',
    syllables: ['to', 'work', 'for'],
    exampleSentence: 'Louis needed a new job. He didn\\'t want to work for her.',
    exampleTranslation: 'Louis precisava de um emprego novo. Ele não queria trabalhar para ela.'
  },
  {
    id: 'kwl_26',
    word: 'sales manager',
    translation: 'gerente de vendas',
    pronunciation: '/seɪlz ˈmæn.ɪ.dʒər/',
    portuguesePhonetic: 'sêilz mé nâ djâr',
    syllables: ['sales', 'man', 'ag', 'er'],
    exampleSentence: 'He worked as a sales manager.',
    exampleTranslation: 'Ele trabalhava como gerente de vendas.'
  },
  {
    id: 'kwl_27',
    word: 'position',
    translation: 'cargo, posição',
    pronunciation: '/pəˈzɪʃ.ən/',
    portuguesePhonetic: 'pô zí shân',
    syllables: ['po', 'si', 'tion'],
    exampleSentence: 'What position are you looking for?',
    exampleTranslation: 'Qual cargo você está procurando?'
  },
  {
    id: 'kwl_28',
    word: 'in common',
    translation: 'em comum',
    pronunciation: '/ɪn ˈkɒm.ən/',
    portuguesePhonetic: 'in có mân',
    syllables: ['in', 'com', 'mon'],
    exampleSentence: 'They had a career in common.',
    exampleTranslation: 'Eles tinham uma carreira em comum.'
  },
  {
    id: 'kwl_29',
    word: 'to miss',
    translation: 'perder (oportunidade)',
    pronunciation: '/tʊ mɪs/',
    portuguesePhonetic: 'tchu mis',
    syllables: ['to', 'miss'],
    exampleSentence: 'You didn\\'t miss that promotion opportunity because your career is international.',
    exampleTranslation: 'Você não perdeu aquela oportunidade de promoção porque sua carreira é internacional.'
  }
];`;

if (!decksData.includes("id: 'kwl_23'")) {
    decksData = decksData.replace(/exampleTranslation: 'Eu estou procurando um emprego no negócio da música.'\n  \}\n\];/g, "exampleTranslation: 'Eu estou procurando um emprego no negócio da música.'\n  }" + additionalCards);
    fs.writeFileSync('data/staticDecks.ts', decksData);
}
