const fs = require('fs');

const rawDeck = [
  {w: "book", t: "livro", p: "/bʊk/", pp: "buc", s: ["book"]},
  {w: "pen", t: "caneta", p: "/pɛn/", pp: "pen", s: ["pen"]},
  {w: "pencil", t: "lápis", p: "/ˈpɛnsəl/", pp: "pén-sou", s: ["pen", "cil"]},
  {w: "paper", t: "papel", p: "/ˈpeɪpər/", pp: "pêi-per", s: ["pa", "per"]},
  {w: "bag", t: "bolsa, mochila", p: "/bæɡ/", pp: "bég", s: ["bag"]},
  {w: "desk", t: "escrivaninha, carteira", p: "/dɛsk/", pp: "desc", s: ["desk"]},
  {w: "chair", t: "cadeira", p: "/tʃɛr/", pp: "tchér", s: ["chair"]},
  {w: "table", t: "mesa", p: "/ˈteɪbəl/", pp: "têi-bou", s: ["ta", "ble"]},
  {w: "door", t: "porta", p: "/dɔr/", pp: "dór", s: ["door"]},
  {w: "window", t: "janela", p: "/ˈwɪndoʊ/", pp: "uín-dou", s: ["win", "dow"]},
  {w: "room", t: "quarto, sala", p: "/rum/", pp: "rum", s: ["room"]},
  {w: "house", t: "casa", p: "/haʊs/", pp: "ráus", s: ["house"]},
  {w: "car", t: "carro", p: "/kɑr/", pp: "car", s: ["car"]},
  {w: "bus", t: "ônibus", p: "/bʌs/", pp: "bâs", s: ["bus"]},
  {w: "bike", t: "bicicleta", p: "/baɪk/", pp: "baic", s: ["bike"]},
  {w: "phone", t: "telefone, celular", p: "/foʊn/", pp: "fôun", s: ["phone"]},
  {w: "computer", t: "computador", p: "/kəmˈpjutər/", pp: "com-piú-ter", s: ["com", "pu", "ter"]},
  {w: "television", t: "televisão", p: "/ˈtɛləˌvɪʒən/", pp: "té-le-vi-jan", s: ["te", "le", "vi", "sion"]},
  {w: "watch", t: "relógio (de pulso)", p: "/wɑtʃ/", pp: "uótch", s: ["watch"]},
  {w: "clock", t: "relógio (parede/mesa)", p: "/klɑk/", pp: "clóc", s: ["clock"]},
  {w: "money", t: "dinheiro", p: "/ˈmʌni/", pp: "mâ-ni", s: ["mon", "ey"]},
  {w: "key", t: "chave", p: "/ki/", pp: "qui", s: ["key"]},
  {w: "wallet", t: "carteira (de dinheiro)", p: "/ˈwɑlət/", pp: "uó-let", s: ["wal", "let"]},
  {w: "bed", t: "cama", p: "/bɛd/", pp: "béd", s: ["bed"]},
  {w: "cup", t: "xícara, copo", p: "/kʌp/", pp: "câp", s: ["cup"]},
  {w: "glass", t: "copo (de vidro), vidro", p: "/ɡlæs/", pp: "glés", s: ["glass"]},
  {w: "plate", t: "prato", p: "/pleɪt/", pp: "plêit", s: ["plate"]},
  {w: "water", t: "água", p: "/ˈwɔtər/", pp: "uó-ter", s: ["wa", "ter"]},
  {w: "food", t: "comida", p: "/fud/", pp: "fud", s: ["food"]},
  {w: "coffee", t: "café", p: "/ˈkɔfi/", pp: "có-fi", s: ["cof", "fee"]},
  {w: "tea", t: "chá", p: "/ti/", pp: "txi", s: ["tea"]},
  {w: "milk", t: "leite", p: "/mɪlk/", pp: "milc", s: ["milk"]},
  {w: "apple", t: "maçã", p: "/ˈæpəl/", pp: "é-pou", s: ["ap", "ple"]},
  {w: "bread", t: "pão", p: "/brɛd/", pp: "bréd", s: ["bread"]},
  {w: "shoe", t: "sapato", p: "/ʃu/", pp: "xu", s: ["shoe"]},
  {w: "shirt", t: "camisa", p: "/ʃɜrt/", pp: "xãrt", s: ["shirt"]},
  {w: "pants", t: "calças", p: "/pænts/", pp: "pénts", s: ["pants"]},
  {w: "dress", t: "vestido", p: "/drɛs/", pp: "drés", s: ["dress"]},
  {w: "dog", t: "cachorro", p: "/dɔɡ/", pp: "dóg", s: ["dog"]},
  {w: "cat", t: "gato", p: "/kæt/", pp: "cét", s: ["cat"]},
  {w: "sun", t: "sol", p: "/sʌn/", pp: "sân", s: ["sun"]},
  {w: "moon", t: "lua", p: "/mun/", pp: "mun", s: ["moon"]},
  {w: "tree", t: "árvore", p: "/tri/", pp: "tri", s: ["tree"]},
  {w: "flower", t: "flor", p: "/ˈflaʊər/", pp: "fláu-er", s: ["flow", "er"]},
  {w: "picture", t: "foto, quadro", p: "/ˈpɪktʃər/", pp: "píc-tcher", s: ["pic", "ture"]},
  {w: "mirror", t: "espelho", p: "/ˈmɪrər/", pp: "mí-rer", s: ["mir", "ror"]},
  {w: "comb", t: "pente", p: "/koʊm/", pp: "côum", s: ["comb"]},
  {w: "brush", t: "escova", p: "/brʌʃ/", pp: "brâsh", s: ["brush"]},
  {w: "soap", t: "sabonete", p: "/soʊp/", pp: "sôup", s: ["soap"]},
  {w: "towel", t: "toalha", p: "/ˈtaʊəl/", pp: "táu-el", s: ["tow", "el"]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\nexport const COMMON_THINGS_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'common_things_' + " + (i + 1) + ",\n";
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
  'common_things: {\n    en: COMMON_THINGS_DECK\n  },\n  connectors: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);

console.log("Deck appended successfully");
