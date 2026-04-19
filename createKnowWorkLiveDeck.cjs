const fs = require('fs');

const typesContent = fs.readFileSync('types.ts', 'utf8');
if (!typesContent.includes("id: 'know_work_live'")) {
    const updatedTypes = typesContent.replace(
        "{\n    id: 'travel_stay_need',\n    label: '83 Viajar, Ficar & Precisar',\n    isStatic: true\n  }",
        "{\n    id: 'travel_stay_need',\n    label: '83 Viajar, Ficar & Precisar',\n    isStatic: true\n  },\n  {\n    id: 'know_work_live',\n    label: '85 Saber, Trabalhar & Morar',\n    isStatic: true\n  }"
    );
    fs.writeFileSync('types.ts', updatedTypes);
}

const flashcards = `
export const KNOW_WORK_LIVE_DECK: FlashcardData[] = [
  {
    id: 'kwl_1',
    word: 'to know',
    translation: 'saber, conhecer',
    pronunciation: '/tʊ nəʊ/',
    portuguesePhonetic: 'tchu nôu',
    syllables: ['to', 'know'],
    exampleSentence: 'I didn\\'t know it was a great opportunity.',
    exampleTranslation: 'Eu não sabia que era uma ótima oportunidade.'
  },
  {
    id: 'kwl_2',
    word: 'knew',
    translation: 'sabia, conhecia',
    pronunciation: '/njuː/',
    portuguesePhonetic: 'niu',
    syllables: ['knew'],
    exampleSentence: 'When we knew who our new boss was, we all wanted to change jobs.',
    exampleTranslation: 'Quando nós soubemos quem era o nosso novo chefe, todos nós quisemos mudar de emprego.'
  },
  {
    id: 'kwl_3',
    word: 'to work',
    translation: 'trabalhar',
    pronunciation: '/tʊ wɜːk/',
    portuguesePhonetic: 'tchu uârk',
    syllables: ['to', 'work'],
    exampleSentence: 'They didn\\'t work together. They had the same employer.',
    exampleTranslation: 'Eles não trabalhavam juntos. Eles tinham o mesmo empregador.'
  },
  {
    id: 'kwl_4',
    word: 'worked',
    translation: 'trabalhou, trabalhava',
    pronunciation: '/wɜːkt/',
    portuguesePhonetic: 'uârkêd',
    syllables: ['worked'],
    exampleSentence: 'I worked for IBM some years ago.',
    exampleTranslation: 'Eu trabalhei para a IBM alguns anos atrás.'
  },
  {
    id: 'kwl_5',
    word: 'to live',
    translation: 'morar, viver',
    pronunciation: '/tʊ lɪv/',
    portuguesePhonetic: 'tchu liv',
    syllables: ['to', 'live'],
    exampleSentence: 'I didn\\'t live near our workplace.',
    exampleTranslation: 'Eu não morava perto do nosso local de trabalho.'
  },
  {
    id: 'kwl_6',
    word: 'lived',
    translation: 'morou, morava',
    pronunciation: '/lɪvd/',
    portuguesePhonetic: 'livd',
    syllables: ['lived'],
    exampleSentence: 'The job was near the place I lived, but they didn\\'t pay well.',
    exampleTranslation: 'O emprego era perto do lugar que eu morava, mas eles não pagavam bem.'
  },
  {
    id: 'kwl_7',
    word: 'profession',
    translation: 'profissão',
    pronunciation: '/prəˈfeʃ.ən/',
    portuguesePhonetic: 'prô fê shân',
    syllables: ['pro', 'fes', 'sion'],
    exampleSentence: 'His profession is a sales manager.',
    exampleTranslation: 'A profissão dele é gerente de vendas.'
  },
  {
    id: 'kwl_8',
    word: 'career',
    translation: 'carreira',
    pronunciation: '/kəˈrɪər/',
    portuguesePhonetic: 'câ rir',
    syllables: ['ca', 'reer'],
    exampleSentence: 'I didn\\'t have a career at that time.',
    exampleTranslation: 'Eu não tinha uma carreira naquela época.'
  },
  {
    id: 'kwl_9',
    word: 'resume',
    translation: 'currículo',
    pronunciation: '/ˈrez.jʊ.meɪ/',
    portuguesePhonetic: 'ré zu mei',
    syllables: ['res', 'u', 'me'],
    exampleSentence: 'His resume wasn\\'t so good, but he got the job.',
    exampleTranslation: 'O currículo dele não era tão bom, mas ele conseguiu o emprego.'
  },
  {
    id: 'kwl_10',
    word: 'chance',
    translation: 'chance',
    pronunciation: '/tʃɑːns/',
    portuguesePhonetic: 'tchéns',
    syllables: ['chance'],
    exampleSentence: 'I didn\\'t know there was a chance of a salary raise.',
    exampleTranslation: 'Eu não sabia que havia chance de aumento de salário.'
  },
  {
    id: 'kwl_11',
    word: 'choice',
    translation: 'escolha',
    pronunciation: '/tʃɔɪs/',
    portuguesePhonetic: 'tchois',
    syllables: ['choice'],
    exampleSentence: 'That career opportunity was a very good choice.',
    exampleTranslation: 'Aquela oportunidade de carreira foi uma escolha muito boa.'
  },
  {
    id: 'kwl_12',
    word: 'opportunity',
    translation: 'oportunidade',
    pronunciation: '/ˌɒp.əˈtʃuː.nə.ti/',
    portuguesePhonetic: 'ó pâr tchu nâ ti',
    syllables: ['op', 'por', 'tu', 'ni', 'ty'],
    exampleSentence: 'We didn\\'t know it was a great opportunity.',
    exampleTranslation: 'Nós não sabíamos que era uma ótima oportunidade.'
  },
  {
    id: 'kwl_13',
    word: 'employee',
    translation: 'funcionário',
    pronunciation: '/ɪmˈplɔɪ.iː/',
    portuguesePhonetic: 'im ploi i',
    syllables: ['em', 'ploy', 'ee'],
    exampleSentence: 'He didn\\'t know his employees very well.',
    exampleTranslation: 'Ele não conhecia bem seus funcionários.'
  },
  {
    id: 'kwl_14',
    word: 'employer',
    translation: 'empregador',
    pronunciation: '/ɪmˈplɔɪ.ər/',
    portuguesePhonetic: 'im plói âr',
    syllables: ['em', 'ploy', 'er'],
    exampleSentence: 'They didn\\'t work together. They had the same employer.',
    exampleTranslation: 'Eles não trabalhavam juntos. Eles tinham o mesmo empregador.'
  },
  {
    id: 'kwl_15',
    word: 'benefit',
    translation: 'benefício',
    pronunciation: '/ˈben.ɪ.fɪt/',
    portuguesePhonetic: 'bé ni fĩt',
    syllables: ['ben', 'e', 'fit'],
    exampleSentence: 'You didn\\'t work only for salary or benefits.',
    exampleTranslation: 'Você não trabalhava só pelo salário ou benefícios.'
  },
  {
    id: 'kwl_16',
    word: 'salary',
    translation: 'salário',
    pronunciation: '/ˈsæl.ər.i/',
    portuguesePhonetic: 'sé lâ ri',
    syllables: ['sal', 'ar', 'y'],
    exampleSentence: 'The opportunity wasn\\'t so good, but the salary was high.',
    exampleTranslation: 'A oportunidade não era tão boa, mas o salário era alto.'
  },
  {
    id: 'kwl_17',
    word: 'raise',
    translation: 'aumento',
    pronunciation: '/reɪz/',
    portuguesePhonetic: 'reiz',
    syllables: ['raise'],
    exampleSentence: 'I\\'m so happy! I got the promotion and a raise.',
    exampleTranslation: 'Eu estou tão feliz! Eu consegui a promoção e um aumento.'
  },
  {
    id: 'kwl_18',
    word: 'spreadsheet',
    translation: 'planilha',
    pronunciation: '/ˈspred.ʃiːt/',
    portuguesePhonetic: 'spréd shit',
    syllables: ['spread', 'sheet'],
    exampleSentence: 'He didn\\'t send me the spreadsheets on time.',
    exampleTranslation: 'Ele não me enviou as planilhas a tempo.'
  },
  {
    id: 'kwl_19',
    word: 'minimum wage',
    translation: 'salário mínimo',
    pronunciation: '/ˌmɪn.ɪ.məm ˈweɪdʒ/',
    portuguesePhonetic: 'mí ni mâm ueidj',
    syllables: ['min', 'i', 'mum', 'wage'],
    exampleSentence: 'She didn\\'t know she was working for minimum wage.',
    exampleTranslation: 'Ela não sabia que estava trabalhando por salário mínimo.'
  },
  {
    id: 'kwl_20',
    word: 'do for a living',
    translation: 'fazer para viver',
    pronunciation: '/duː fɔːr ə ˈlɪv.ɪŋ/',
    portuguesePhonetic: 'du fór a lí vin',
    syllables: ['do', 'for', 'a', 'liv', 'ing'],
    exampleSentence: 'What do you do for a living?',
    exampleTranslation: 'O que você faz para viver?'
  },
  {
    id: 'kwl_21',
    word: 'get a promotion',
    translation: 'conseguir uma promoção',
    pronunciation: '/ɡet ə prəˈməʊ.ʃən/',
    portuguesePhonetic: 'gét a prô môu shân',
    syllables: ['get', 'a', 'pro', 'mo', 'tion'],
    exampleSentence: 'I want to get that promotion.',
    exampleTranslation: 'Eu quero conseguir aquela promoção.'
  },
  {
    id: 'kwl_22',
    word: 'look for a job',
    translation: 'procurar emprego',
    pronunciation: '/lʊk fɔːr ə dʒɒb/',
    portuguesePhonetic: 'luk fór a djób',
    syllables: ['look', 'for', 'a', 'job'],
    exampleSentence: 'I\\'m looking for a job in the music business.',
    exampleTranslation: 'Eu estou procurando um emprego no negócio da música.'
  }
];
`;

let decksData = fs.readFileSync('data/staticDecks.ts', 'utf8');
if (!decksData.includes("KNOW_WORK_LIVE_DECK")) {
    decksData = flashcards + "\n" + decksData;
    decksData = decksData.replace(
        "  travel_stay_need: {\n    en: TRAVEL_STAY_NEED_DECK\n  }",
        "  travel_stay_need: {\n    en: TRAVEL_STAY_NEED_DECK\n  },\n  know_work_live: {\n    en: KNOW_WORK_LIVE_DECK\n  }"
    );
    fs.writeFileSync('data/staticDecks.ts', decksData);
}
