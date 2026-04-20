const fs = require('fs');

const rawDeck = [
  {w: "to wear", t: "vestir, usar", p: "/tə wɛr/", pp: "tchu uér", s: ["to", " wear"]},
  {w: "to change", t: "trocar, mudar", p: "/tə tʃeɪndʒ/", pp: "tchu tchêindj", s: ["to", " change"]},

  {w: "shirt", t: "blusa, camisa", p: "/ʃɜrt/", pp: "xãrt", s: ["shirt"]},
  {w: "T-shirt", t: "camiseta", p: "/ˈtiˌʃɜrt/", pp: "ti-xãrt", s: ["T-", "shirt"]},
  {w: "pants", t: "calça", p: "/pænts/", pp: "pénts", s: ["pants"]},
  {w: "jeans", t: "calça jeans", p: "/dʒinz/", pp: "djins", s: ["jeans"]},
  {w: "skirt", t: "saia", p: "/skɜrt/", pp: "scãrt", s: ["skirt"]},
  {w: "dress", t: "vestido", p: "/drɛs/", pp: "drés", s: ["dress"]},
  {w: "jacket", t: "jaqueta", p: "/ˈdʒækɪt/", pp: "djé-kit", s: ["ja", "cket"]},
  {w: "coat", t: "casaco", p: "/koʊt/", pp: "côut", s: ["coat"]},
  {w: "sneakers", t: "tênis", p: "/ˈsnikərz/", pp: "sní-kãrs", s: ["snea", "kers"]},
  {w: "suit", t: "terno", p: "/sut/", pp: "sut", s: ["suit"]},
  {w: "shorts", t: "bermuda", p: "/ʃɔrts/", pp: "xórts", s: ["shorts"]},
  {w: "glasses", t: "óculos", p: "/ˈɡlæsɪz/", pp: "glé-siz", s: ["glas", "ses"]},
  {w: "watch", t: "relógio", p: "/wɑtʃ/", pp: "uótch", s: ["watch"]},
  {w: "outfit", t: "roupa, conjunto", p: "/ˈaʊtˌfɪt/", pp: "aút-fit", s: ["out", "fit"]},
  {w: "style", t: "estilo", p: "/staɪl/", pp: "stail", s: ["style"]},
  {w: "special", t: "especial", p: "/ˈspɛʃəl/", pp: "spé-xou", s: ["spe", "cial"]},

  {w: "I want to buy a pair of shoes.", t: "Eu quero comprar um par de sapatos.", p: "/aɪ wɑnt tə baɪ ə pɛr əv ʃuz./", pp: "ai uónt tchu bai a pér óv xuz.", s: ["I", " want", " to", " buy", " a", " pair", " of", " shoes."]},
  {w: "I want to try that dress on.", t: "Eu quero provar aquele vestido.", p: "/aɪ wɑnt tə traɪ ðæt drɛs ɑn./", pp: "ai uónt tchu trai dát drés an.", s: ["I", " want", " to", " try", " that", " dress", " on."]},
  {w: "What size are you?", t: "Que tamanho você usa?", p: "/wɑt saɪz ɑr ju?/", pp: "uát saiz ar iu?", s: ["What", " size", " are", " you?"]},

  {w: "I am waiting for the doctor.", t: "Eu estou esperando pelo médico.", p: "/aɪ æm ˈweɪtɪŋ fɔr ðə ˈdɑktər./", pp: "ai ém uêi-tin fór dâ dóc-tãr.", s: ["I", " am", " wai", "ting", " for", " the", " doc", "tor."]},
  {w: "You are wearing a beautiful coat.", t: "Você está usando um casaco bonito.", p: "/ju ɑr ˈwɛrɪŋ ə ˈbjutəfəl koʊt./", pp: "iu ar ué-rin a biú-ti-fou côut.", s: ["You", " are", " wea", "ring", " a", " beau", "ti", "ful", " coat."]},
  {w: "She is changing her outfit.", t: "Ela está mudando a roupa dela.", p: "/ʃi ɪz ˈtʃeɪndʒɪŋ hɜr ˈaʊtˌfɪt./", pp: "xi iz tchêin-djin rãr aút-fit.", s: ["She", " is", " chan", "ging", " her", " out", "fit."]},
  {w: "He is making a delicious cake.", t: "Ele está fazendo um bolo delicioso.", p: "/hi ɪz ˈmeɪkɪŋ ə dɪˈlɪʃəs keɪk./", pp: "ri iz mêi-kin a di-lí-xãs cêic.", s: ["He", " is", " ma", "king", " a", " de", "li", "cious", " cake."]},
  {w: "The class is starting now.", t: "A aula está começando agora.", p: "/ðə klæs ɪz ˈstɑrtɪŋ naʊ./", pp: "dâ clés iz star-tin náu.", s: ["The", " class", " is", " star", "ting", " now."]},
  {w: "They are watching a movie now.", t: "Eles estão assistindo um filme agora.", p: "/ðeɪ ɑr ˈwɑtʃɪŋ ə ˈmuvi naʊ./", pp: "dêi ar uó-tchin a mú-vi náu.", s: ["They", " are", " wat", "ching", " a", " mo", "vie", " now."]},
  {w: "We are reading a funny story.", t: "Nós estamos lendo uma história engraçada.", p: "/wi ɑr ˈridɪŋ ə ˈfʌni ˈstɔri./", pp: "uí ar rí-din a fâ-ni stó-ri.", s: ["We", " are", " rea", "ding", " a", " fun", "ny", " sto", "ry."]},
  {w: "The children are studying in the living room.", t: "As crianças estão estudando na sala.", p: "/ðə ˈtʃɪldrən ɑr ˈstʌdiɪŋ ɪn ðə ˈlɪvɪŋ rum./", pp: "dâ tchil-dren ar stâ-di-in in dâ lí-vin rum.", s: ["The", " chil", "dren", " are", " stu", "dy", "ing", " in", " the", " li", "ving", " room."]},

  {w: "I want to try this shirt on.", t: "Eu quero provar esta camisa.", p: "/aɪ wɑnt tə traɪ ðɪs ʃɜrt ɑn./", pp: "ai uónt tchu trai díz xãrt an.", s: ["I", " want", " to", " try", " this", " shirt", " on."]},
  {w: "You're wearing funny socks!", t: "Você está usando meias engraçadas!", p: "/jʊr ˈwɛrɪŋ ˈfʌni sɑks!/", pp: "iuar ué-rin fâ-ni sócs!", s: ["You're", " wea", "ring", " fun", "ny", " socks!"]},
  {w: "I need to change my clothes before we go.", t: "Eu preciso trocar minhas roupas antes de irmos.", p: "/aɪ nid tə tʃeɪndʒ maɪ kloʊðz bɪˈfɔr wi ɡoʊ./", pp: "ai nid tchu tchêindj mai clôudz bi-fór uí gôu.", s: ["I", " need", " to", " change", " my", " clothes", " be", "fore", " we", " go."]},
  {w: "Do you want to try the blue pants on?", t: "Você quer provar a calça azul?", p: "/du ju wɑnt tə traɪ ðə blu pænts ɑn?/", pp: "du iu uónt tchu trai dâ blu pénts an?", s: ["Do", " you", " want", " to", " try", " the", " blue", " pants", " on?"]},
  {w: "I prefer to wear comfortable clothes to work.", t: "Eu prefiro usar roupas confortáveis para o trabalho.", p: "/aɪ prɪˈfɜr tə wɛr ˈkʌmfərtəbəl kloʊðz tə wɜrk./", pp: "ai pri-fãr tchu uér câm-fãr-ta-bou clôudz tchu uãrk.", s: ["I", " pre", "fer", " to", " wear", " com", "for", "ta", "ble", " clothes", " to", " work."]},
  {w: "He is always wearing sunglasses.", t: "Ele está sempre usando óculos de sol.", p: "/hi ɪz ˈɔlˌweɪz ˈwɛrɪŋ ˈsʌnˌɡlæsɪz./", pp: "ri iz ól-uêiz ué-rin sân-glé-siz.", s: ["He", " is", " al", "ways", " wea", "ring", " sun", "glas", "ses."]},
  {w: "I really like the suit you're wearing today.", t: "Eu gosto muito do terno que você está usando hoje.", p: "/aɪ ˈrɪli laɪk ðə sut jʊr ˈwɛrɪŋ təˈdeɪ./", pp: "ai rí-li laic dâ sut iuar ué-rin tchu-dêi.", s: ["I", " real", "ly", " like", " the", " suit", " you're", " wea", "ring", " to", "day."]},
  {w: "She is talking to the sales clerk now.", t: "Ela está falando com a vendedora agora.", p: "/ʃi ɪz ˈtɔkɪŋ tə ðə seɪlz klɜrk naʊ./", pp: "xi iz tó-kin tchu dâ sêils clãrc náu.", s: ["She", " is", " tal", "king", " to", " the", " sales", " clerk", " now."]},
  {w: "We're changing our outfit to go to the bar.", t: "Nós estamos mudando nossa roupa para ir ao bar.", p: "/wɪr ˈtʃeɪndʒɪŋ aʊər ˈaʊtˌfɪt tə ɡoʊ tə ðə bɑr./", pp: "uíar tchêin-djin áur aút-fit tchu gôu tchu dâ bar.", s: ["We're", " chan", "ging", " our", " out", "fit", " to", " go", " to", " the", " bar."]},
  {w: "They're waiting for you at the mall.", t: "Eles estão esperando por você no shopping.", p: "/ðɛr ˈweɪtɪŋ fɔr ju æt ðə mɔl./", pp: "dér uêi-tin fór iu ét dâ mól.", s: ["They're", " wai", "ting", " for", " you", " at", " the", " mall."]},
  {w: "I'm buying a new pair of pants for my husband.", t: "Eu estou comprando um par de calças novo para meu marido.", p: "/aɪm ˈbaɪɪŋ ə nu pɛr əv pænts fɔr maɪ ˈhʌzbənd./", pp: "aim bái-in a nu pér óv pénts fór mai râz-bãnd.", s: ["I'm", " buy", "ing", " a", " new", " pair", " of", " pants", " for", " my", " hus", "band."]},

  {w: "small", t: "pequeno / P", p: "/smɔl/", pp: "smól", s: ["small"]},
  {w: "medium", t: "médio / M", p: "/ˈmidiəm/", pp: "mí-di-ãm", s: ["me", "di", "um"]},
  {w: "large", t: "grande / G", p: "/lɑrdʒ/", pp: "lardj", s: ["large"]},

  {w: "a pair of shoes", t: "um par de sapatos", p: "/ə pɛr əv ʃuz/", pp: "a pér óv xuz", s: ["a", " pair", " of", " shoes"]},
  {w: "a pair of sneakers", t: "um par de tênis", p: "/ə pɛr əv ˈsnikərz/", pp: "a pér óv sní-kãrs", s: ["a", " pair", " of", " snea", "kers"]},
  {w: "a pair of pants", t: "um (par de) calça", p: "/ə pɛr əv pænts/", pp: "a pér óv pénts", s: ["a", " pair", " of", " pants"]},
  {w: "a pair of shorts", t: "um (par de) bermuda", p: "/ə pɛr əv ʃɔrts/", pp: "a pér óv xórts", s: ["a", " pair", " of", " shorts"]},
  {w: "a pair of jeans", t: "um (par de) calça jeans", p: "/ə pɛr əv dʒinz/", pp: "a pér óv djins", s: ["a", " pair", " of", " jeans"]},

  {w: "blue", t: "azul", p: "/blu/", pp: "blu", s: ["blue"]},
  {w: "black", t: "preto", p: "/blæk/", pp: "bléc", s: ["black"]},
  {w: "pink", t: "rosa", p: "/pɪŋk/", pp: "pinc", s: ["pink"]},
  {w: "purple", t: "roxo", p: "/ˈpɜrpəl/", pp: "pãr-pou", s: ["pur", "ple"]},
  {w: "red", t: "vermelho", p: "/rɛd/", pp: "réd", s: ["red"]},
  {w: "orange", t: "laranja", p: "/ˈɔrɪndʒ/", pp: "ó-rindj", s: ["o", "range"]},
  {w: "brown", t: "marrom", p: "/braʊn/", pp: "bráun", s: ["brown"]},
  {w: "gray", t: "cinza", p: "/ɡreɪ/", pp: "grêi", s: ["gray"]},
  {w: "yellow", t: "amarelo", p: "/ˈjɛloʊ/", pp: "ié-lou", s: ["yel", "low"]},
  {w: "green", t: "verde", p: "/ɡrin/", pp: "grin", s: ["green"]},

  {w: "How much is this skirt?", t: "Quanto custa esta saia?", p: "/haʊ mʌtʃ ɪz ðɪs skɜrt?/", pp: "ráu mâtch iz díz scãrt?", s: ["How", " much", " is", " this", " skirt?"]},
  {w: "It's US$30.", t: "Custa 30 dólares.", p: "/ɪts ˈθɜrti ˈdɑlərz./", pp: "its thãr-ti dó-lars.", s: ["It's", " US$30."]},
  {w: "How much are these sunglasses?", t: "Quanto custam estes óculos de sol?", p: "/haʊ mʌtʃ ɑr ðiz ˈsʌnˌɡlæsɪz?/", pp: "ráu mâtch ar díz sân-glé-siz?", s: ["How", " much", " are", " these", " sun", "glas", "ses?"]},
  {w: "They're US$100.", t: "Custam 100 dólares.", p: "/ðɛr wʌn ˈhʌndrəd ˈdɑlərz./", pp: "dér uân rân-dred dó-lars.", s: ["They're", " US$100."]},
  {w: "I'm a medium.", t: "Eu sou (tamanho) médio.", p: "/aɪm ə ˈmidiəm./", pp: "aim a mí-di-ãm.", s: ["I'm", " a", " me", "di", "um."]},
  {w: "I wear medium.", t: "Eu uso (tamanho) médio.", p: "/aɪ wɛr ˈmidiəm./", pp: "ai uér mí-di-ãm.", s: ["I", " wear", " me", "di", "um."]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_WEAR_CHANGE_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_wear_change_' + " + (i + 1) + ",\n";
  newDeckStr += "    word: " + JSON.stringify(c.w) + ",\n";
  newDeckStr += "    translation: " + JSON.stringify(c.t) + ",\n";
  newDeckStr += "    pronunciation: " + JSON.stringify(c.p) + ",\n";
  newDeckStr += "    portuguesePhonetic: " + JSON.stringify(c.pp) + ",\n";
  newDeckStr += "    syllables: " + JSON.stringify(c.s) + ",\n";
  newDeckStr += "    exampleSentence: " + JSON.stringify(c.w) + ",\n";
  newDeckStr += "    exampleTranslation: " + JSON.stringify(c.t) + "\n";
  newDeckStr += "  },\n";
});
newDeckStr += "];\n";

const mapIndex = staticDecksData.indexOf('export const STATIC_DECKS: Record<');
staticDecksData = staticDecksData.slice(0, mapIndex) + newDeckStr + '\n' + staticDecksData.slice(mapIndex);

staticDecksData = staticDecksData.replace(
  'to_call_wait: {',
  'to_wear_change: {\n    en: TO_WEAR_CHANGE_DECK\n  },\n  to_call_wait: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck appended successfully');
