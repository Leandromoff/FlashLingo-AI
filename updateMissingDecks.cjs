const fs = require('fs');
let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

const missingDeck81 = `,
  {
    id: 'ghv_26',
    word: 'downtown',
    translation: 'centro da cidade',
    pronunciation: '/ˌdaʊnˈtaʊn/',
    portuguesePhonetic: 'dáun táun',
    syllables: ['down', 'town'],
    exampleSentence: 'There were many places to visit downtown.',
    exampleTranslation: 'Havia muitos lugares para visitar no centro.'
  },
  {
    id: 'ghv_27',
    word: 'ten blocks away',
    translation: 'a dez quarteirões de distância',
    pronunciation: '/ten blɒks əˈweɪ/',
    portuguesePhonetic: 'tén blóks a uêi',
    syllables: ['ten', 'blocks', 'a', 'way'],
    exampleSentence: 'The cathedral was ten blocks away from the hotel.',
    exampleTranslation: 'A catedral ficava a dez quarteirões do hotel.'
  },
  {
    id: 'ghv_28',
    word: 'last year',
    translation: 'ano passado',
    pronunciation: '/lɑːst jɪər/',
    portuguesePhonetic: 'lást yír',
    syllables: ['last', 'year'],
    exampleSentence: 'We visited the opera house in Sydney last year.',
    exampleTranslation: 'Nós visitamos a casa de ópera em Sydney no ano passado.'
  },
  {
    id: 'ghv_29',
    word: 'for dinner',
    translation: 'para o jantar',
    pronunciation: '/fɔːr ˈdɪn.ər/',
    portuguesePhonetic: 'fór dí nâr',
    syllables: ['for', 'din', 'ner'],
    exampleSentence: 'They had chicken stew for dinner.',
    exampleTranslation: 'Eles comeram ensopado de frango no jantar.'
  },
  {
    id: 'ghv_30',
    word: 'amazing bar',
    translation: 'bar incrível',
    pronunciation: '/əˈmeɪ.zɪŋ bɑːr/',
    portuguesePhonetic: 'a mêi zin bár',
    syllables: ['a', 'maz', 'ing', 'bar'],
    exampleSentence: 'Julie and I went to an amazing bar in Cuzco.',
    exampleTranslation: 'Julie e eu fomos a um bar incrível em Cuzco.'
  },
  {
    id: 'ghv_31',
    word: 'after the meeting',
    translation: 'depois da reunião',
    pronunciation: '/ˈɑːf.tər ðə ˈmiː.tɪŋ/',
    portuguesePhonetic: 'áf târ dâ mí tin',
    syllables: ['af', 'ter', 'the', 'meet', 'ing'],
    exampleSentence: 'We went to the bar after the meeting and had some beer.',
    exampleTranslation: 'Nós fomos ao bar depois da reunião e tomamos cerveja.'
  }
];`;

const missingDeck83 = `,
  {
    id: 'tsn_21',
    word: 'hostel',
    translation: 'hostel, albergue',
    pronunciation: '/ˈhɒs.təl/',
    portuguesePhonetic: 'rós têu',
    syllables: ['hos', 'tel'],
    exampleSentence: 'They stayed in a great hostel in Amsterdam.',
    exampleTranslation: 'Eles ficaram em um ótimo hostel em Amsterdã.'
  },
  {
    id: 'tsn_22',
    word: 'cancel a reservation',
    translation: 'cancelar uma reserva',
    pronunciation: '/ˈkæn.səl ə ˌrez.əˈveɪ.ʃən/',
    portuguesePhonetic: 'cán sêu a ré zâr vei shân',
    syllables: ['can', 'cel', 'a', 'res', 'er', 'va', 'tion'],
    exampleSentence: 'We cancelled our reservations one day before the flight.',
    exampleTranslation: 'Nós cancelamos nossas reservas um dia antes do voo.'
  },
  {
    id: 'tsn_23',
    word: 'wait for',
    translation: 'esperar por',
    pronunciation: '/weɪt fɔːr/',
    portuguesePhonetic: 'uêit fór',
    syllables: ['wait', 'for'],
    exampleSentence: 'They were waiting for him while he was going through customs.',
    exampleTranslation: 'Eles estavam esperando por ele enquanto ele passava pela alfândega.'
  },
  {
    id: 'tsn_24',
    word: 'luggage',
    translation: 'bagagem',
    pronunciation: '/ˈlʌɡ.ɪdʒ/',
    portuguesePhonetic: 'lâ gédj',
    syllables: ['lug', 'gage'],
    exampleSentence: 'He had to leave his luggage at the baggage drop.',
    exampleTranslation: 'Ele teve que deixar sua bagagem no despacho de bagagem.'
  },
  {
    id: 'tsn_25',
    word: 'passport',
    translation: 'passaporte',
    pronunciation: '/ˈpɑːs.pɔːt/',
    portuguesePhonetic: 'pás pórt',
    syllables: ['pass', 'port'],
    exampleSentence: 'Paul had his passport, but not the boarding pass.',
    exampleTranslation: 'Paul tinha seu passaporte, mas não o cartão de embarque.'
  },
  {
    id: 'tsn_26',
    word: 'different countries',
    translation: 'países diferentes',
    pronunciation: '/ˈdɪf.ər.ənt ˈkʌn.triz/',
    portuguesePhonetic: 'dí frênt cân triz',
    syllables: ['dif', 'fer', 'ent', 'coun', 'tries'],
    exampleSentence: 'He needed a visa for three different countries.',
    exampleTranslation: 'Ele precisava de um visto para três países diferentes.'
  },
  {
    id: 'tsn_27',
    word: 'have problems with',
    translation: 'ter problemas com',
    pronunciation: '/hæv ˈprɒb.ləmz wɪð/',
    portuguesePhonetic: 'rév pró blâmz uíd',
    syllables: ['have', 'prob', 'lems', 'with'],
    exampleSentence: 'Sue had problems with her itinerary.',
    exampleTranslation: 'Sue teve problemas com seu itinerário.'
  }
];`;

if (!decksData.includes("id: 'ghv_26'")) {
    decksData = decksData.replace(/exampleTranslation: 'Nós tivemos um ótimo tempo durante a viagem.'\n  \}\n\];/g, "exampleTranslation: 'Nós tivemos um ótimo tempo durante a viagem.'\n  }" + missingDeck81);
}

if (!decksData.includes("id: 'tsn_21'")) {
    decksData = decksData.replace(/exampleTranslation: 'Deixa eu tirar uma foto de vocês dois.'\n  \}\n\];/g, "exampleTranslation: 'Deixa eu tirar uma foto de vocês dois.'\n  }" + missingDeck83);
}

fs.writeFileSync('data/staticDecks.ts', decksData);
