const fs = require('fs');

const typesContent = fs.readFileSync('types.ts', 'utf8');
if (!typesContent.includes("id: 'go_have_visit'")) {
    const updatedTypes = typesContent.replace(
        "label: '79 Comer, Beber & Querer',\n    isStatic: true\n  }",
        "label: '79 Comer, Beber & Querer',\n    isStatic: true\n  },\n  {\n    id: 'go_have_visit',\n    label: '81 Ir, Ter & Visitar',\n    isStatic: true\n  }"
    );
    fs.writeFileSync('types.ts', updatedTypes);
}

const flashcards = `
export const GO_HAVE_VISIT_DECK: FlashcardData[] = [
  {
    id: 'ghv_1',
    word: 'to go',
    translation: 'ir',
    pronunciation: '/tʊ ɡəʊ/',
    portuguesePhonetic: 'tchu gôu',
    syllables: ['to', 'go'],
    exampleSentence: 'Do you want to go to medical school?',
    exampleTranslation: 'Você quer ir para a faculdade de medicina?'
  },
  {
    id: 'ghv_2',
    word: 'went',
    translation: 'foi, foram, fomos',
    pronunciation: '/went/',
    portuguesePhonetic: 'uént',
    syllables: ['went'],
    exampleSentence: 'They went to Italy last year.',
    exampleTranslation: 'Eles foram para a Itália no ano passado.'
  },
  {
    id: 'ghv_3',
    word: 'to have',
    translation: 'ter, tomar, comer',
    pronunciation: '/tʊ hæv/',
    portuguesePhonetic: 'tchu ráv',
    syllables: ['to', 'have'],
    exampleSentence: 'I want to have a beer.',
    exampleTranslation: 'Eu quero tomar uma cerveja.'
  },
  {
    id: 'ghv_4',
    word: 'had',
    translation: 'teve, tomou, comeu',
    pronunciation: '/hæd/',
    portuguesePhonetic: 'réd',
    syllables: ['had'],
    exampleSentence: 'They had chicken stew for dinner.',
    exampleTranslation: 'Eles comeram ensopado de frango no jantar.'
  },
  {
    id: 'ghv_5',
    word: 'to visit',
    translation: 'visitar',
    pronunciation: '/tʊ ˈvɪz.ɪt/',
    portuguesePhonetic: 'tchu ví zĩt',
    syllables: ['to', 'vis', 'it'],
    exampleSentence: 'He wanted to visit Central Park, but the weather was bad.',
    exampleTranslation: 'Ele queria visitar o Central Park, mas o tempo estava ruim.'
  },
  {
    id: 'ghv_6',
    word: 'visited',
    translation: 'visitou, visitamos',
    pronunciation: '/ˈvɪz.ɪ.tɪd/',
    portuguesePhonetic: 'ví zi têd',
    syllables: ['vis', 'it', 'ed'],
    exampleSentence: 'We visited the opera house in Sydney last year.',
    exampleTranslation: 'Nós visitamos a casa de ópera em Sydney no ano passado.'
  },
  {
    id: 'ghv_7',
    word: 'food truck',
    translation: 'food truck',
    pronunciation: '/fuːd trʌk/',
    portuguesePhonetic: 'fud trâk',
    syllables: ['food', 'truck'],
    exampleSentence: 'There was a food truck in front of the concert hall.',
    exampleTranslation: 'Havia um food truck na frente da sala de concertos.'
  },
  {
    id: 'ghv_8',
    word: 'bakery',
    translation: 'padaria',
    pronunciation: '/ˈbeɪ.kər.i/',
    portuguesePhonetic: 'béi kâ ri',
    syllables: ['bak', 'er', 'y'],
    exampleSentence: 'We had breakfast at the bakery this morning.',
    exampleTranslation: 'Nós tomamos café da manhã na padaria esta manhã.'
  },
  {
    id: 'ghv_9',
    word: 'café',
    translation: 'café, cafeteria',
    pronunciation: '/ˈkæf.eɪ/',
    portuguesePhonetic: 'ké fei',
    syllables: ['ca', 'fé'],
    exampleSentence: 'He wanted to go to the café.',
    exampleTranslation: 'Ele queria ir à cafeteria.'
  },
  {
    id: 'ghv_10',
    word: 'art gallery',
    translation: 'galeria de arte',
    pronunciation: '/ɑːt ˈɡæl.ər.i/',
    portuguesePhonetic: 'árt gé lâ ri',
    syllables: ['art', 'gal', 'ler', 'y'],
    exampleSentence: 'They went to an art gallery.',
    exampleTranslation: 'Eles foram a uma galeria de arte.'
  },
  {
    id: 'ghv_11',
    word: 'concert hall',
    translation: 'sala de concertos',
    pronunciation: '/ˈkɒn.sət hɔːl/',
    portuguesePhonetic: 'cón sârt ról',
    syllables: ['con', 'cert', 'hall'],
    exampleSentence: 'There was a food truck in front of the concert hall.',
    exampleTranslation: 'Havia um food truck na frente da sala de concertos.'
  },
  {
    id: 'ghv_12',
    word: 'opera house',
    translation: 'casa de ópera',
    pronunciation: '/ˈɒp.ər.ə haʊs/',
    portuguesePhonetic: 'óp rá rauz',
    syllables: ['op', 'er', 'a', 'house'],
    exampleSentence: 'Billy was so excited about the opera house.',
    exampleTranslation: 'Billy estava tão empolgado com a casa de ópera.'
  },
  {
    id: 'ghv_13',
    word: 'library',
    translation: 'biblioteca',
    pronunciation: '/ˈlaɪ.brər.i/',
    portuguesePhonetic: 'lái bré ri',
    syllables: ['li', 'brar', 'y'],
    exampleSentence: 'We went to the library to study.',
    exampleTranslation: 'Nós fomos à biblioteca para estudar.'
  },
  {
    id: 'ghv_14',
    word: 'cathedral',
    translation: 'catedral',
    pronunciation: '/kəˈθiː.drəl/',
    portuguesePhonetic: 'câ thi drâu',
    syllables: ['ca', 'the', 'dral'],
    exampleSentence: 'The cathedral was ten blocks away from the hotel.',
    exampleTranslation: 'A catedral ficava a dez quarteirões do hotel.'
  },
  {
    id: 'ghv_15',
    word: 'zoo',
    translation: 'zoológico',
    pronunciation: '/zuː/',
    portuguesePhonetic: 'zu',
    syllables: ['zoo'],
    exampleSentence: 'The weather was really good yesterday, so we went to the zoo.',
    exampleTranslation: 'O tempo estava muito bom ontem, então nós fomos ao zoológico.'
  },
  {
    id: 'ghv_16',
    word: 'go for it',
    translation: 'vai em frente',
    pronunciation: '/ɡəʊ fɔːr ɪt/',
    portuguesePhonetic: 'gôu fór it',
    syllables: ['go', 'for', 'it'],
    exampleSentence: 'He really wanted to work in Berlin, and he went for it.',
    exampleTranslation: 'Ele realmente queria trabalhar em Berlim, e ele foi em frente.'
  },
  {
    id: 'ghv_17',
    word: 'medical school',
    translation: 'faculdade de medicina',
    pronunciation: '/ˈmed.ɪ.kəl skuːl/',
    portuguesePhonetic: 'mé di câl skul',
    syllables: ['med', 'i', 'cal', 'school'],
    exampleSentence: 'We had to go to medical school.',
    exampleTranslation: 'Nós tivemos que ir para a faculdade de medicina.'
  },
  {
    id: 'ghv_18',
    word: 'excited about',
    translation: 'empolgado com',
    pronunciation: '/ɪkˈsaɪ.tɪd əˈbaʊt/',
    portuguesePhonetic: 'ik sái têd a baut',
    syllables: ['ex', 'cit', 'ed', 'a', 'bout'],
    exampleSentence: 'They were really excited about the night at the opera house.',
    exampleTranslation: 'Eles estavam muito empolgados com a noite na casa de ópera.'
  },
  {
    id: 'ghv_19',
    word: 'have fun',
    translation: 'divertir-se',
    pronunciation: '/hæv fʌn/',
    portuguesePhonetic: 'rév fân',
    syllables: ['have', 'fun'],
    exampleSentence: 'Julie and I went to an amazing bar in Cuzco. We had a lot of fun!',
    exampleTranslation: 'Julie e eu fomos a um bar incrível em Cuzco. Nos divertimos muito!'
  },
  {
    id: 'ghv_20',
    word: 'have breakfast',
    translation: 'tomar café da manhã',
    pronunciation: '/hæv ˈbrek.fəst/',
    portuguesePhonetic: 'rév brék fâst',
    syllables: ['have', 'break', 'fast'],
    exampleSentence: 'We had breakfast at the bakery this morning.',
    exampleTranslation: 'Nós tomamos café da manhã na padaria esta manhã.'
  },
  {
    id: 'ghv_21',
    word: 'places to visit',
    translation: 'lugares para visitar',
    pronunciation: '/ˈpleɪ.sɪz tʊ ˈvɪz.ɪt/',
    portuguesePhonetic: 'pléi sêz tchu ví zĩt',
    syllables: ['pla', 'ces', 'to', 'vis', 'it'],
    exampleSentence: 'There were many places to visit downtown.',
    exampleTranslation: 'Havia muitos lugares para visitar no centro.'
  },
  {
    id: 'ghv_22',
    word: 'have pizza',
    translation: 'comer pizza',
    pronunciation: '/hæv ˈpiːt.sə/',
    portuguesePhonetic: 'rév pít sâ',
    syllables: ['have', 'piz', 'za'],
    exampleSentence: 'We had some pizza at an old pizza place downtown.',
    exampleTranslation: 'Nós comemos pizza em uma antiga pizzaria no centro.'
  },
  {
    id: 'ghv_23',
    word: 'have beer',
    translation: 'tomar cerveja',
    pronunciation: '/hæv bɪər/',
    portuguesePhonetic: 'rév bír',
    syllables: ['have', 'beer'],
    exampleSentence: 'We went to the bar after the meeting and had some beer.',
    exampleTranslation: 'Nós fomos ao bar depois da reunião e tomamos cerveja.'
  },
  {
    id: 'ghv_24',
    word: 'have wine',
    translation: 'tomar vinho',
    pronunciation: '/hæv waɪn/',
    portuguesePhonetic: 'rév uáin',
    syllables: ['have', 'wine'],
    exampleSentence: 'They had wine with the steak.',
    exampleTranslation: 'Eles tomaram vinho com o bife.'
  },
  {
    id: 'ghv_25',
    word: 'weather',
    translation: 'clima, tempo',
    pronunciation: '/ˈweð.ər/',
    portuguesePhonetic: 'ué thâr',
    syllables: ['weath', 'er'],
    exampleSentence: 'We had great weather during the trip.',
    exampleTranslation: 'Nós tivemos um ótimo tempo durante a viagem.'
  }
];
`;

let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');
if (!decksData.includes("GO_HAVE_VISIT_DECK")) {
    decksData = flashcards + "\n" + decksData;
    decksData = decksData.replace(
        "  drink_eat_want: {\n    en: DRINK_EAT_WANT_DECK\n  }",
        "  drink_eat_want: {\n    en: DRINK_EAT_WANT_DECK\n  },\n  go_have_visit: {\n    en: GO_HAVE_VISIT_DECK\n  }"
    );
    fs.writeFileSync('data/staticDecks.ts', decksData);
}
