const fs = require('fs');

const typesContent = fs.readFileSync('types.ts', 'utf8');
if (!typesContent.includes("id: 'post_follow'")) {
    const updatedTypes = typesContent.replace(
        "  { id: 'listen_watch', label: '75 Ouvir & Assistir' }",
        "  { id: 'listen_watch', label: '75 Ouvir & Assistir' },\n  { id: 'post_follow', label: '77 Postar & Seguir' }"
    );
    fs.writeFileSync('types.ts', updatedTypes);
}

const flashcards = `
export const POST_FOLLOW_DECK: FlashcardData[] = [
  {
    id: 'post_follow_1',
    word: 'post',
    translation: 'postar, postagem',
    pronunciation: '/pəʊst/',
    portuguesePhonetic: 'pôust',
    syllables: ['post'],
    exampleSentence: 'She only posts pictures of her trips on her timeline.',
    exampleTranslation: 'Ela só posta fotos de viagens na linha do tempo dela.'
  },
  {
    id: 'post_follow_2',
    word: 'follow',
    translation: 'seguir',
    pronunciation: '/ˈfɒl.əʊ/',
    portuguesePhonetic: 'fó lôu',
    syllables: ['fol', 'low'],
    exampleSentence: 'Were you following that digital influencer?',
    exampleTranslation: 'Você estava seguindo aquele influenciador digital?'
  },
  {
    id: 'post_follow_3',
    word: 'social media',
    translation: 'mídia social',
    pronunciation: '/ˌsəʊ.ʃəl ˈmiː.di.ə/',
    portuguesePhonetic: 'sôu xal mi di a',
    syllables: ['so', 'cial', 'me', 'di', 'a'],
    exampleSentence: 'I wasn\\'t following that media influencer.',
    exampleTranslation: 'Eu não estava seguindo aquele influenciador de mídia.'
  },
  {
    id: 'post_follow_4',
    word: 'profile',
    translation: 'perfil',
    pronunciation: '/ˈprəʊ.faɪl/',
    portuguesePhonetic: 'prôu faiu',
    syllables: ['pro', 'file'],
    exampleSentence: 'I need to change the profile pictures of my channel.',
    exampleTranslation: 'Eu preciso mudar as fotos de perfil do meu canal.'
  },
  {
    id: 'post_follow_5',
    word: 'picture',
    translation: 'foto',
    pronunciation: '/ˈpɪk.tʃər/',
    portuguesePhonetic: 'pík tchar',
    syllables: ['pic', 'ture'],
    exampleSentence: 'Was he sharing his pictures on her post?',
    exampleTranslation: 'Ele estava compartilhando suas fotos na postagem dela?'
  },
  {
    id: 'post_follow_6',
    word: 'follower',
    translation: 'seguidor',
    pronunciation: '/ˈfɒl.əʊ.ər/',
    portuguesePhonetic: 'fó lô war',
    syllables: ['fol', 'low', 'er'],
    exampleSentence: 'Some followers were making really bad comments about that digital influencer.',
    exampleTranslation: 'Alguns seguidores estavam fazendo comentários muito ruins sobre aquele influenciador digital.'
  },
  {
    id: 'post_follow_7',
    word: 'view',
    translation: 'visualização',
    pronunciation: '/vjuː/',
    portuguesePhonetic: 'viu',
    syllables: ['view'],
    exampleSentence: 'Their channel was having more than 1k views a day.',
    exampleTranslation: 'O canal deles estava tendo mais de mil visualizações por dia.'
  },
  {
    id: 'post_follow_8',
    word: 'timeline',
    translation: 'linha do tempo',
    pronunciation: '/ˈtaɪm.laɪn/',
    portuguesePhonetic: 'taim lain',
    syllables: ['time', 'line'],
    exampleSentence: 'He is so young, but there are amazing pictures on this timeline.',
    exampleTranslation: 'Ele é tão jovem, mas tem fotos incríveis nesta linha do tempo.'
  },
  {
    id: 'post_follow_9',
    word: 'comment',
    translation: 'comentário',
    pronunciation: '/ˈkɒm.ent/',
    portuguesePhonetic: 'kó ment',
    syllables: ['com', 'ment'],
    exampleSentence: 'Were many followers posting comments?',
    exampleTranslation: 'Tinham muitos seguidores postando comentários?'
  },
  {
    id: 'post_follow_10',
    word: 'news feed',
    translation: 'feed de notícias',
    pronunciation: '/ˈnjuːz ˌfiːd/',
    portuguesePhonetic: 'niuz fid',
    syllables: ['news', 'feed'],
    exampleSentence: 'I saw his post on my news feed.',
    exampleTranslation: 'Eu vi a postagem dele no meu feed de notícias.'
  },
  {
    id: 'post_follow_11',
    word: 'notification',
    translation: 'notificação',
    pronunciation: '/ˌnəʊ.tɪ.fɪˈkeɪ.ʃən/',
    portuguesePhonetic: 'nou ti fi kei xân',
    syllables: ['no', 'ti', 'fi', 'ca', 'tion'],
    exampleSentence: 'They weren\\'t sending notifications about the end of the channel.',
    exampleTranslation: 'Eles não estavam enviando notificações sobre o fim do canal.'
  },
  {
    id: 'post_follow_12',
    word: 'digital influencer',
    translation: 'influenciador digital',
    pronunciation: '/ˈdɪdʒ.ɪ.təl ˈɪn.flu.ən.sər/',
    portuguesePhonetic: 'dí ji tâu in flu ên sâr',
    syllables: ['dig', 'i', 'tal', 'in', 'flu', 'en', 'cer'],
    exampleSentence: 'Everyone is following that digital influencer.',
    exampleTranslation: 'Todo mundo está seguindo aquele influenciador digital.'
  },
  {
    id: 'post_follow_13',
    word: 'channel',
    translation: 'canal',
    pronunciation: '/ˈtʃæn.əl/',
    portuguesePhonetic: 'tché nôu',
    syllables: ['chan', 'nel'],
    exampleSentence: 'I\\'m subscribing to ten channels at the moment.',
    exampleTranslation: 'Estou inscrito em dez canais no momento.'
  },
  {
    id: 'post_follow_14',
    word: 'setting',
    translation: 'configuração',
    pronunciation: '/ˈset.ɪŋ/',
    portuguesePhonetic: 'sé ting',
    syllables: ['set', 'ting'],
    exampleSentence: 'Why were you changing the settings of your channel?',
    exampleTranslation: 'Por que você estava mudando as configurações do seu canal?'
  },
  {
    id: 'post_follow_15',
    word: 'virus',
    translation: 'vírus',
    pronunciation: '/ˈvaɪ.rəs/',
    portuguesePhonetic: 'vai râs',
    syllables: ['vi', 'rus'],
    exampleSentence: 'Because a follower was trying to send me a virus.',
    exampleTranslation: 'Porque um seguidor estava tentando me enviar um vírus.'
  },
  {
    id: 'post_follow_16',
    word: 'unfriend',
    translation: 'desfazer amizade',
    pronunciation: '/ʌnˈfrend/',
    portuguesePhonetic: 'ân frénd',
    syllables: ['un', 'friend'],
    exampleSentence: 'I don\\'t usually unfriend followers.',
    exampleTranslation: 'Eu normalmente não desfaço amizade com seguidores.'
  },
  {
    id: 'post_follow_17',
    word: 'go viral',
    translation: 'viralizar',
    pronunciation: '/ɡəʊ ˈvaɪ.rəl/',
    portuguesePhonetic: 'gôu vai râu',
    syllables: ['go', 'vi', 'ral'],
    exampleSentence: 'My posts never go viral.',
    exampleTranslation: 'Minhas postagens nunca viralizam.'
  },
  {
    id: 'post_follow_18',
    word: 'subscribe',
    translation: 'inscrever-se',
    pronunciation: '/səbˈskraɪb/',
    portuguesePhonetic: 'sâb skraib',
    syllables: ['sub', 'scribe'],
    exampleSentence: 'Nobody is subscribing to my channel because he is famous on TV.',
    exampleTranslation: 'Ninguém está se inscrevendo no meu canal porque ele é famoso na TV.'
  },
  {
    id: 'post_follow_19',
    word: 'share',
    translation: 'compartilhar',
    pronunciation: '/ʃeər/',
    portuguesePhonetic: 'chér',
    syllables: ['share'],
    exampleSentence: 'Was he sharing his pictures on her post?',
    exampleTranslation: 'Ele estava compartilhando suas fotos na postagem dela?'
  },
  {
    id: 'post_follow_20',
    word: 'Youtuber',
    translation: 'Youtuber',
    pronunciation: '/ˈjuːˌtjuː.bər/',
    portuguesePhonetic: 'yu tu bâr',
    syllables: ['You', 'tu', 'ber'],
    exampleSentence: 'Everyone is following that Youtuber.',
    exampleTranslation: 'Todo mundo está seguindo aquele Youtuber.'
  },
  {
    id: 'post_follow_21',
    word: 'listen to a song',
    translation: 'escutar canção',
    pronunciation: '/ˈlɪs.ən tʊ eɪ sɒŋ/',
    portuguesePhonetic: 'li sân tu a sóng',
    syllables: ['lis', 'ten', 'to', 'a', 'song'],
    exampleSentence: 'Were they listening to the song from your post?',
    exampleTranslation: 'Eles estavam ouvindo a canção da sua postagem?'
  },
  {
    id: 'post_follow_22',
    word: 'post pictures',
    translation: 'postar fotos',
    pronunciation: '/pəʊst ˈpɪk.tʃərz/',
    portuguesePhonetic: 'pôust pík tcharz',
    syllables: ['post', 'pic', 'tures'],
    exampleSentence: 'Was Jane posting pictures of the hostel?',
    exampleTranslation: 'Jane estava postando fotos do albergue?'
  },
  {
    id: 'post_follow_23',
    word: 'unfriend someone',
    translation: 'desfazer amizade',
    pronunciation: '/ʌnˈfrend ˈsʌm.wʌn/',
    portuguesePhonetic: 'ân frénd sâm uân',
    syllables: ['un', 'friend', 'some', 'one'],
    exampleSentence: 'Why don\\'t you unfriend her?',
    exampleTranslation: 'Por que você não desfaz amizade com ela?'
  },
  {
    id: 'post_follow_24',
    word: 'Not only interesting posts',
    translation: 'Nem apenas postagens interessantes',
    pronunciation: '/nɒt ˈəʊn.li ˈɪn.trə.stɪŋ pəʊsts/',
    portuguesePhonetic: 'nót ôun li in trâ stin pôusts',
    syllables: ['Not', 'on', 'ly', 'in', 'ter', 'est', 'ing', 'posts'],
    exampleSentence: 'Not only interesting posts go viral.',
    exampleTranslation: 'Nem apenas postagens interessantes viralizam.'
  }
];
`;

const decksContent = fs.readFileSync('data/staticDecks.ts', 'utf8');
if (!decksContent.includes("POST_FOLLOW_DECK")) {
    const contentWithDeck = decksContent.replace(
        "export const STATIC_DECKS: Record<string, Record<string, FlashcardData[]>> = {",
        flashcards + "\nexport const STATIC_DECKS: Record<string, Record<string, FlashcardData[]>> = {"
    );
    
    // Add to STATIC_DECKS object
    const finalContent = contentWithDeck.replace(
        "  listen_watch: {\n    en: LISTEN_WATCH_DECK\n  }",
        "  listen_watch: {\n    en: LISTEN_WATCH_DECK\n  },\n  post_follow: {\n    en: POST_FOLLOW_DECK\n  }"
    );
    fs.writeFileSync('data/staticDecks.ts', finalContent);
}
