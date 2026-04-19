const fs = require('fs');

const typesContent = fs.readFileSync('types.ts', 'utf8');
if (!typesContent.includes("id: 'drink_eat_want'")) {
    const re = /{\s*id: 'post_follow',\s*label: '77 Postar & Seguir',\s*isStatic: true\s*}/;
    if (re.test(typesContent)) {
       const replaceStr = "{\n    id: 'post_follow',\n    label: '77 Postar & Seguir',\n    isStatic: true\n  },\n  {\n    id: 'drink_eat_want',\n    label: '79 Comer, Beber & Querer',\n    isStatic: true\n  }";
       fs.writeFileSync('types.ts', typesContent.replace(re, replaceStr));
    }
}

const flashcards = `
export const DRINK_EAT_WANT_DECK: FlashcardData[] = [
  {
    id: 'dew_1',
    word: 'to drink | drank',
    translation: 'beber | bebeu',
    pronunciation: '/drɪŋk/ | /dræŋk/',
    portuguesePhonetic: 'drink | drénk',
    syllables: ['drink', 'drank'],
    exampleSentence: 'She drank because she wasn\\'t driving.',
    exampleTranslation: 'Ela bebeu porque não estava dirigindo.'
  },
  {
    id: 'dew_2',
    word: 'to eat | ate',
    translation: 'comer | comeu',
    pronunciation: '/iːt/ | /et/ ou /eɪt/',
    portuguesePhonetic: 'it | eit',
    syllables: ['eat', 'ate'],
    exampleSentence: 'The first time he ate there was in 2008.',
    exampleTranslation: 'A primeira vez que ele comeu lá foi em 2008.'
  },
  {
    id: 'dew_3',
    word: 'to want | wanted',
    translation: 'querer | queria, quis',
    pronunciation: '/wɒnt/ | /ˈwɒn.tɪd/',
    portuguesePhonetic: 'uónt | uón tid',
    syllables: ['want', 'wan', 'ted'],
    exampleSentence: 'I wanted to eat everything. It was delicious.',
    exampleTranslation: 'Eu queria comer tudo. Estava delicioso.'
  },
  {
    id: 'dew_4',
    word: 'wine',
    translation: 'vinho',
    pronunciation: '/waɪn/',
    portuguesePhonetic: 'uain',
    syllables: ['wine'],
    exampleSentence: 'She wanted to drink wine, but there wasn\\'t any in that place.',
    exampleTranslation: 'Ela queria beber vinho, mas não tinha nenhum naquele lugar.'
  },
  {
    id: 'dew_5',
    word: 'beer',
    translation: 'cerveja',
    pronunciation: '/bɪər/',
    portuguesePhonetic: 'bir',
    syllables: ['beer'],
    exampleSentence: 'Can I have a beer, please?',
    exampleTranslation: 'Você pode me dar uma cerveja, por favor?'
  },
  {
    id: 'dew_6',
    word: 'cocktail',
    translation: 'coquetel',
    pronunciation: '/ˈkɒk.teɪl/',
    portuguesePhonetic: 'cók teil',
    syllables: ['cock', 'tail'],
    exampleSentence: 'We ate seafood and drank cocktails at the hotel last week.',
    exampleTranslation: 'Nós comemos frutos do mar e bebemos coquetéis no hotel semana passada.'
  },
  {
    id: 'dew_7',
    word: 'coconut water',
    translation: 'água de coco',
    pronunciation: '/ˈkəʊ.kə.nʌt ˈwɔː.tər/',
    portuguesePhonetic: 'côu cô nât uó târ',
    syllables: ['co', 'co', 'nut', 'wa', 'ter'],
    exampleSentence: 'I drank a lot of coconut water at the beach.',
    exampleTranslation: 'Eu bebi muita água de coco na praia.'
  },
  {
    id: 'dew_8',
    word: 'soda water',
    translation: 'água com gás',
    pronunciation: '/ˈsəʊ.də ˈwɔː.tər/',
    portuguesePhonetic: 'sôu dâ uó târ',
    syllables: ['so', 'da', 'wa', 'ter'],
    exampleSentence: 'I would like some soda water, please.',
    exampleTranslation: 'Eu gostaria de um pouco de água com gás, por favor.'
  },
  {
    id: 'dew_9',
    word: 'steak',
    translation: 'bife',
    pronunciation: '/steɪk/',
    portuguesePhonetic: 'steik',
    syllables: ['steak'],
    exampleSentence: 'I wanted to eat a steak for dinner.',
    exampleTranslation: 'Eu queria comer um bife no jantar.'
  },
  {
    id: 'dew_10',
    word: 'ribs',
    translation: 'costela',
    pronunciation: '/rɪbz/',
    portuguesePhonetic: 'ribz',
    syllables: ['ribs'],
    exampleSentence: 'I ate an incredible dish with shrimp and ribs.',
    exampleTranslation: 'Eu comi um prato incrível com camarão e costela.'
  },
  {
    id: 'dew_11',
    word: 'stew',
    translation: 'ensopado',
    pronunciation: '/stjuː/',
    portuguesePhonetic: 'stiu',
    syllables: ['stew'],
    exampleSentence: 'They make a very good stew here.',
    exampleTranslation: 'Eles fazem um ensopado muito bom aqui.'
  },
  {
    id: 'dew_12',
    word: 'omelet',
    translation: 'omelete',
    pronunciation: '/ˈɒm.lət/',
    portuguesePhonetic: 'óm lêt',
    syllables: ['om', 'e', 'let'],
    exampleSentence: 'I ate an omelet for breakfast.',
    exampleTranslation: 'Eu comi uma omelete no café da manhã.'
  },
  {
    id: 'dew_13',
    word: 'shrimp',
    translation: 'camarão',
    pronunciation: '/ʃrɪmp/',
    portuguesePhonetic: 'shrimp',
    syllables: ['shrimp'],
    exampleSentence: 'Robert ate shrimp at the local cuisine restaurant.',
    exampleTranslation: 'Robert comeu camarão no restaurante de culinária local.'
  },
  {
    id: 'dew_14',
    word: 'meatloaf',
    translation: 'bolo de carne',
    pronunciation: '/ˈmiːt.ləʊf/',
    portuguesePhonetic: 'mit lôuf',
    syllables: ['meat', 'loaf'],
    exampleSentence: 'We ate meatloaf for lunch.',
    exampleTranslation: 'Nós comemos bolo de carne no almoço.'
  },
  {
    id: 'dew_15',
    word: 'seafood',
    translation: 'frutos do mar',
    pronunciation: '/ˈsiː.fuːd/',
    portuguesePhonetic: 'si fud',
    syllables: ['sea', 'food'],
    exampleSentence: 'We loved the seafood at that restaurant.',
    exampleTranslation: 'Nós adoramos os frutos do mar naquele restaurante.'
  },
  {
    id: 'dew_16',
    word: 'street food',
    translation: 'comida de rua',
    pronunciation: '/striːt fuːd/',
    portuguesePhonetic: 'strit fud',
    syllables: ['street', 'food'],
    exampleSentence: 'We ate a lot of street food in Thailand.',
    exampleTranslation: 'Nós comemos muita comida de rua na Tailândia.'
  },
  {
    id: 'dew_17',
    word: 'local cuisine',
    translation: 'culinária local',
    pronunciation: '/ˈləʊ.kəl kwɪˈziːn/',
    portuguesePhonetic: 'lôu cẩu cui zin',
    syllables: ['lo', 'cal', 'cui', 'sine'],
    exampleSentence: 'She wanted to go to a local cuisine restaurant.',
    exampleTranslation: 'Ela queria ir a um restaurante de culinária local.'
  },
  {
    id: 'dew_18',
    word: 'special dish',
    translation: 'prato especial',
    pronunciation: '/ˈspeʃ.əl dɪʃ/',
    portuguesePhonetic: 'spé shâl dish',
    syllables: ['spe', 'cial', 'dish'],
    exampleSentence: 'They make special dishes at that restaurant.',
    exampleTranslation: 'Eles fazem pratos especiais naquele restaurante.'
  },
  {
    id: 'dew_19',
    word: 'make a toast',
    translation: 'fazer um brinde',
    pronunciation: '/meɪk ə təʊst/',
    portuguesePhonetic: 'meik a tôust',
    syllables: ['make', 'a', 'toast'],
    exampleSentence: 'Let\\'s make a toast to our vacations. Cheers!',
    exampleTranslation: 'Vamos fazer um brinde às nossas férias. Saúde!'
  },
  {
    id: 'dew_20',
    word: 'all-you-can-eat',
    translation: 'coma à vontade / rodízio',
    pronunciation: '/ˌɔːl.jə.kənˈiːt/',
    portuguesePhonetic: 'ól iu cen it',
    syllables: ['all', 'you', 'can', 'eat'],
    exampleSentence: 'We ate in an all-you-can-eat restaurant.',
    exampleTranslation: 'Nós comemos em um restaurante rodízio.'
  },
  {
    id: 'dew_21',
    word: 'tap water',
    translation: 'água da torneira',
    pronunciation: '/tæp ˈwɔː.tər/',
    portuguesePhonetic: 'tép uó târ',
    syllables: ['tap', 'wa', 'ter'],
    exampleSentence: 'Can I have some tap water, please?',
    exampleTranslation: 'Você pode me dar um pouco de água da torneira, por favor?'
  },
  {
    id: 'dew_22',
    word: 'bottled water',
    translation: 'água engarrafada',
    pronunciation: '/ˈbɒt.əld ˈwɔː.tər/',
    portuguesePhonetic: 'bó tậud uó târ',
    syllables: ['bot', 'tled', 'wa', 'ter'],
    exampleSentence: 'They always drink bottled water when they are traveling.',
    exampleTranslation: 'Eles sempre bebem água engarrafada quando estão viajando.'
  },
  {
    id: 'dew_23',
    word: 'scrambled eggs',
    translation: 'ovos mexidos',
    pronunciation: '/ˈskræm.bəld eɡz/',
    portuguesePhonetic: 'skrém bâud égz',
    syllables: ['scram', 'bled', 'eggs'],
    exampleSentence: 'He ate scrambled eggs and baked beans for breakfast.',
    exampleTranslation: 'Ele comeu ovos mexidos e feijão assado no café da manhã.'
  },
  {
    id: 'dew_24',
    word: 'baked beans',
    translation: 'feijão assado',
    pronunciation: '/ˌbeɪkt ˈbiːnz/',
    portuguesePhonetic: 'beikt binz',
    syllables: ['baked', 'beans'],
    exampleSentence: 'He ate scrambled eggs and baked beans for breakfast.',
    exampleTranslation: 'Ele comeu ovos mexidos e feijão assado no café da manhã.'
  },
  {
    id: 'dew_25',
    word: 'roasted, baked, or fried',
    translation: 'assado (carne), assado (forno) ou frito',
    pronunciation: '/ˈrəʊ.stɪd, beɪkt, ɔːr fraɪd/',
    portuguesePhonetic: 'rôus tid, beikt, or fraid',
    syllables: ['roast', 'ed', 'baked', 'or', 'fried'],
    exampleSentence: 'How do you prefer your chicken? Roasted, baked, or fried?',
    exampleTranslation: 'Como você prefere seu frango? Assado, assado no forno ou frito?'
  },
  {
    id: 'dew_26',
    word: 'vacation',
    translation: 'férias',
    pronunciation: '/veɪˈkeɪ.ʃən/',
    portuguesePhonetic: 'vei kei shân',
    syllables: ['va', 'ca', 'tion'],
    exampleSentence: 'He wanted to spend his vacation in the countryside, not on the beach.',
    exampleTranslation: 'Ele queria passar as férias no interior, não na praia.'
  },
  {
    id: 'dew_27',
    word: 'glass of wine',
    translation: 'taça de vinho',
    pronunciation: '/ɡlɑːs əv waɪn/',
    portuguesePhonetic: 'glés âv uain',
    syllables: ['glass', 'of', 'wine'],
    exampleSentence: 'What would you like to drink? I would like to drink a glass of wine, please.',
    exampleTranslation: 'O que você gostaria de beber? Eu gostaria de beber uma taça de vinho, por favor.'
  }
];
`;

let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');
if (!decksData.includes("DRINK_EAT_WANT_DECK")) {
    decksData = flashcards + "\n" + decksData;
    decksData = decksData.replace(
        "  post_follow: {\n    en: POST_FOLLOW_DECK\n  }",
        "  post_follow: {\n    en: POST_FOLLOW_DECK\n  },\n  drink_eat_want: {\n    en: DRINK_EAT_WANT_DECK\n  }"
    );
    fs.writeFileSync('data/staticDecks.ts', decksData);
}
