const fs = require('fs');

const typesContent = fs.readFileSync('types.ts', 'utf8');
if (!typesContent.includes("id: 'travel_stay_need'")) {
    const updatedTypes = typesContent.replace(
        "{\n    id: 'go_have_visit',\n    label: '81 Ir, Ter & Visitar',\n    isStatic: true\n  }",
        "{\n    id: 'go_have_visit',\n    label: '81 Ir, Ter & Visitar',\n    isStatic: true\n  },\n  {\n    id: 'travel_stay_need',\n    label: '83 Viajar, Ficar & Precisar',\n    isStatic: true\n  }"
    );
    fs.writeFileSync('types.ts', updatedTypes);
}

const flashcards = `
export const TRAVEL_STAY_NEED_DECK: FlashcardData[] = [
  {
    id: 'tsn_1',
    word: 'to travel',
    translation: 'viajar',
    pronunciation: '/tʊ ˈtræv.əl/',
    portuguesePhonetic: 'tchu tré vâu',
    syllables: ['to', 'trav', 'el'],
    exampleSentence: 'They needed to travel to Europe.',
    exampleTranslation: 'Eles precisavam viajar para a Europa.'
  },
  {
    id: 'tsn_2',
    word: 'traveled',
    translation: 'viajou, viajamos',
    pronunciation: '/ˈtræv.əld/',
    portuguesePhonetic: 'tré vậud',
    syllables: ['trav', 'eled'],
    exampleSentence: 'She always traveled first class, but this time she went economy.',
    exampleTranslation: 'Ela sempre viajou na primeira classe, mas desta vez foi na econômica.'
  },
  {
    id: 'tsn_3',
    word: 'to stay',
    translation: 'ficar, hospedar-se',
    pronunciation: '/tʊ steɪ/',
    portuguesePhonetic: 'tchu stei',
    syllables: ['to', 'stay'],
    exampleSentence: 'He wanted to stay at a hotel.',
    exampleTranslation: 'Ele queria ficar em um hotel.'
  },
  {
    id: 'tsn_4',
    word: 'stayed',
    translation: 'ficou, ficamos',
    pronunciation: '/steɪd/',
    portuguesePhonetic: 'steid',
    syllables: ['stayed'],
    exampleSentence: 'They stayed in a great hostel in Amsterdam.',
    exampleTranslation: 'Eles ficaram em um ótimo hostel em Amsterdã.'
  },
  {
    id: 'tsn_5',
    word: 'to need',
    translation: 'precisar',
    pronunciation: '/tʊ niːd/',
    portuguesePhonetic: 'tchu nid',
    syllables: ['to', 'need'],
    exampleSentence: 'First, you need to cancel my reservation.',
    exampleTranslation: 'Primeiro, você precisa cancelar minha reserva.'
  },
  {
    id: 'tsn_6',
    word: 'needed',
    translation: 'precisou, precisava',
    pronunciation: '/ˈniː.dɪd/',
    portuguesePhonetic: 'ní dêd',
    syllables: ['need', 'ed'],
    exampleSentence: 'I needed a flight reservation for that night.',
    exampleTranslation: 'Eu precisava de uma reserva de voo para aquela noite.'
  },
  {
    id: 'tsn_7',
    word: 'flight',
    translation: 'voo',
    pronunciation: '/flaɪt/',
    portuguesePhonetic: 'flait',
    syllables: ['flight'],
    exampleSentence: 'We cancelled our reservations one day before the flight.',
    exampleTranslation: 'Nós cancelamos nossas reservas um dia antes do voo.'
  },
  {
    id: 'tsn_8',
    word: 'reservation',
    translation: 'reserva',
    pronunciation: '/ˌrez.əˈveɪ.ʃən/',
    portuguesePhonetic: 'ré zâr vei shân',
    syllables: ['res', 'er', 'va', 'tion'],
    exampleSentence: 'First, you need to cancel my reservation.',
    exampleTranslation: 'Primeiro, você precisa cancelar minha reserva.'
  },
  {
    id: 'tsn_9',
    word: 'itinerary',
    translation: 'itinerário',
    pronunciation: '/aɪˈtɪn.ər.ər.i/',
    portuguesePhonetic: 'ai ti nê ré ri',
    syllables: ['i', 'tin', 'er', 'ar', 'y'],
    exampleSentence: 'Sue had problems with her itinerary.',
    exampleTranslation: 'Sue teve problemas com seu itinerário.'
  },
  {
    id: 'tsn_10',
    word: 'boarding pass',
    translation: 'cartão de embarque',
    pronunciation: '/ˈbɔː.dɪŋ pɑːs/',
    portuguesePhonetic: 'bór din pás',
    syllables: ['board', 'ing', 'pass'],
    exampleSentence: 'Paul had his passport, but not the boarding pass.',
    exampleTranslation: 'Paul tinha seu passaporte, mas não o cartão de embarque.'
  },
  {
    id: 'tsn_11',
    word: 'economy',
    translation: 'econômico, classe econômica',
    pronunciation: '/ɪˈkɒn.ə.mi/',
    portuguesePhonetic: 'i có nâ mi',
    syllables: ['e', 'con', 'o', 'my'],
    exampleSentence: 'She always traveled first class, but this time she went economy.',
    exampleTranslation: 'Ela sempre viajou na primeira classe, mas desta vez foi na econômica.'
  },
  {
    id: 'tsn_12',
    word: 'first class',
    translation: 'primeira classe',
    pronunciation: '/ˌfɜːst ˈklɑːs/',
    portuguesePhonetic: 'fârst clés',
    syllables: ['first', 'class'],
    exampleSentence: 'She always traveled first class, but this time she went economy.',
    exampleTranslation: 'Ela sempre viajou na primeira classe, mas desta vez foi na econômica.'
  },
  {
    id: 'tsn_13',
    word: 'baggage drop',
    translation: 'despacho de bagagem',
    pronunciation: '/ˈbæɡ.ɪdʒ drɒp/',
    portuguesePhonetic: 'bé gédj dróp',
    syllables: ['bag', 'gage', 'drop'],
    exampleSentence: 'He had to leave his luggage at the baggage drop.',
    exampleTranslation: 'Ele teve que deixar sua bagagem no despacho de bagagem.'
  },
  {
    id: 'tsn_14',
    word: 'visa',
    translation: 'visto',
    pronunciation: '/ˈviː.zə/',
    portuguesePhonetic: 'ví zâ',
    syllables: ['vi', 'sa'],
    exampleSentence: 'Alejandro was Argentinian and he needed a visa and a hotel reservation to go to the U.S.',
    exampleTranslation: 'Alejandro era argentino e precisava de um visto e uma reserva de hotel para ir aos EUA.'
  },
  {
    id: 'tsn_15',
    word: 'accommodation',
    translation: 'acomodação',
    pronunciation: '/əˌkɒm.əˈdeɪ.ʃən/',
    portuguesePhonetic: 'a có mâ dei shân',
    syllables: ['ac', 'com', 'mo', 'da', 'tion'],
    exampleSentence: 'We had accommodation in Lisbon and Barcelona.',
    exampleTranslation: 'Nós tínhamos acomodação em Lisboa e Barcelona.'
  },
  {
    id: 'tsn_16',
    word: 'inn',
    translation: 'pousada',
    pronunciation: '/ɪn/',
    portuguesePhonetic: 'in',
    syllables: ['inn'],
    exampleSentence: 'We stayed in an amazing inn in Chicago.',
    exampleTranslation: 'Nós ficamos em uma pousada incrível em Chicago.'
  },
  {
    id: 'tsn_17',
    word: 'bed and breakfast',
    translation: 'cama e café / pousada com café da manhã',
    pronunciation: '/ˌbed ən ˈbrek.fəst/',
    portuguesePhonetic: 'béd ân brék fâst',
    syllables: ['bed', 'and', 'break', 'fast'],
    exampleSentence: 'The bed and breakfast we stayed in was really expensive.',
    exampleTranslation: 'A pousada com café da manhã em que ficamos era muito cara.'
  },
  {
    id: 'tsn_18',
    word: 'go through customs',
    translation: 'passar pela alfândega',
    pronunciation: '/ɡəʊ θruː ˈkʌs.təmz/',
    portuguesePhonetic: 'gôu thru câs tậmz',
    syllables: ['go', 'through', 'cus', 'toms'],
    exampleSentence: 'Excuse me, I need to go through customs.',
    exampleTranslation: 'Com licença, preciso passar pela alfândega.'
  },
  {
    id: 'tsn_19',
    word: 'book a flight',
    translation: 'reservar um voo',
    pronunciation: '/bʊk ə flaɪt/',
    portuguesePhonetic: 'buk a fláit',
    syllables: ['book', 'a', 'flight'],
    exampleSentence: 'I\\'d like to book a flight to next Friday.',
    exampleTranslation: 'Gostaria de reservar um voo para a próxima sexta-feira.'
  },
  {
    id: 'tsn_20',
    word: 'get a shot',
    translation: 'tirar uma foto',
    pronunciation: '/ɡet ə ʃɒt/',
    portuguesePhonetic: 'gét a shót',
    syllables: ['get', 'a', 'shot'],
    exampleSentence: 'Let me get a shot of you two.',
    exampleTranslation: 'Deixa eu tirar uma foto de vocês dois.'
  }
];
`;

let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');
if (!decksData.includes("TRAVEL_STAY_NEED_DECK")) {
    decksData = flashcards + "\n" + decksData;
    decksData = decksData.replace(
        "  go_have_visit: {\n    en: GO_HAVE_VISIT_DECK\n  }",
        "  go_have_visit: {\n    en: GO_HAVE_VISIT_DECK\n  },\n  travel_stay_need: {\n    en: TRAVEL_STAY_NEED_DECK\n  }"
    );
    fs.writeFileSync('data/staticDecks.ts', decksData);
}
