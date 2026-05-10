const fs = require('fs');

const rawDeck = [
  {w: "call a friend", t: "ligar para um amigo", p: "/kɔl ə frɛnd/", pp: "cól a frend", s: ["call", " a", " friend"]},
  {w: "cook dinner", t: "cozinhar o jantar", p: "/kʊk ˈdɪnər/", pp: "cuc di-ner", s: ["cook", " din", "ner"]},
  {w: "do exercise", t: "fazer exercício", p: "/du ˈɛksərˌsaɪz/", pp: "du éc-ser-saiz", s: ["do", " ex", "er", "cise"]},
  {w: "go on holiday", t: "tirar férias", p: "/ɡoʊ ɑn ˈhɑlɪˌdeɪ/", pp: "gôu an ró-li-dei", s: ["go", " on", " ho", "li", "day"]},
  {w: "go to bed", t: "ir para a cama", p: "/ɡoʊ tə bɛd/", pp: "gôu tchu béd", s: ["go", " to", " bed"]},
  {w: "go to work", t: "ir para o trabalho", p: "/ɡoʊ tə wɜrk/", pp: "gôu tchu uãrc", s: ["go", " to", " work"]},
  {w: "have some coffee", t: "tomar um café", p: "/hæv sʌm ˈkɔfi/", pp: "rév sâm có-fi", s: ["have", " some", " cof", "fee"]},
  {w: "have dinner", t: "jantar", p: "/hæv ˈdɪnər/", pp: "rév di-ner", s: ["have", " din", "ner"]},
  {w: "listen to music", t: "ouvir música", p: "/ˈlɪsən tə ˈmjuzɪk/", pp: "li-sen tchu miú-zic", s: ["lis", "ten", " to", " mu", "sic"]},
  {w: "play football", t: "jogar futebol", p: "/pleɪ ˈfʊtˌbɔl/", pp: "plêi fut-ból", s: ["play", " foot", "ball"]},
  {w: "play the guitar", t: "tocar violão/guitarra", p: "/pleɪ ðə ɡɪˈtɑr/", pp: "plêi dâ gi-tár", s: ["play", " the", " gui", "tar"]},
  {w: "play video games", t: "jogar videogame", p: "/pleɪ ˈvɪdioʊ ɡeɪmz/", pp: "plêi ví-di-ou guêims", s: ["play", " vi", "de", "o", " games"]},
  {w: "read a book", t: "ler um livro", p: "/rid ə bʊk/", pp: "rid a buc", s: ["read", " a", " book"]},
  {w: "send a text", t: "enviar uma mensagem de texto", p: "/sɛnd ə tɛkst/", pp: "send a tésct", s: ["send", " a", " text"]},
  {w: "study English", t: "estudar inglês", p: "/ˈstʌdi ˈɪŋɡlɪʃ/", pp: "stâ-di in-glix", s: ["stu", "dy", " Eng", "lish"]},
  {w: "take a photo", t: "tirar uma foto", p: "/teɪk ə ˈfoʊtoʊ/", pp: "têic a fôu-tou", s: ["take", " a", " pho", "to"]},
  {w: "visit a museum", t: "visitar um museu", p: "/ˈvɪzɪt ə mjuˈziəm/", pp: "ví-zit a miú-zí-am", s: ["vi", "sit", " a", " mu", "se", "um"]},
  {w: "watch TV", t: "assistir televisão", p: "/wɑtʃ ˌtiˈvi/", pp: "uótch ti-ví", s: ["watch", " TV"]},
  {w: "wear glasses", t: "usar óculos", p: "/wɛr ˈɡlæsɪz/", pp: "uér glé-siz", s: ["wear", " glas", "ses"]},
  {w: "send an email", t: "enviar um e-mail", p: "/sɛnd ən ˈiˌmeɪl/", pp: "send an í-meil", s: ["send", " an", " e", "mail"]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\nexport const COMMON_VERBS_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'common_verbs_' + " + (i + 1) + ",\n";
  newDeckStr += "    word: " + JSON.stringify(c.w) + ",\n";
  newDeckStr += "    translation: " + JSON.stringify(c.t) + ",\n";
  newDeckStr += "    pronunciation: " + JSON.stringify(c.p) + ",\n";
  newDeckStr += "    portuguesePhonetic: " + JSON.stringify(c.pp) + ",\n";
  newDeckStr += "    syllables: " + JSON.stringify(c.s) + ",\n";
  newDeckStr += "    exampleSentence: " + JSON.stringify(c.w) + ",\n";
  newDeckStr += "    exampleTranslation: " + JSON.stringify(c.t) + "\n";
  newDeckStr += "  }" + (i < rawDeck.length - 1 ? "," : "") + "\n";
});
newDeckStr += "];\n";

staticDecksData = staticDecksData.replace('export const STATIC_DECKS', newDeckStr + '\nexport const STATIC_DECKS');

staticDecksData = staticDecksData.replace(
  'connectors: {',
  'common_verbs: {\n    en: COMMON_VERBS_DECK\n  },\n  connectors: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);

console.log("Deck appended successfully");
