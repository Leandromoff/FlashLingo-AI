const fs = require('fs');

const rawDeck = [
  {w: "a house", t: "uma casa", p: "/ə haʊs/", pp: "a ráus", s: ["a", " house"]},
  {w: "a car", t: "um carro", p: "/ə kɑr/", pp: "a car", s: ["a", " car"]},
  {w: "a bicycle", t: "uma bicicleta", p: "/ə ˈbaɪsɪkəl/", pp: "a baí-si-col", s: ["a", " bi", "cy", "cle"]},
  {w: "a book", t: "um livro", p: "/ə bʊk/", pp: "a buc", s: ["a", " book"]},
  {w: "a pen", t: "uma caneta", p: "/ə pɛn/", pp: "a pen", s: ["a", " pen"]},
  {w: "a notebook", t: "um caderno", p: "/ə ˈnoʊtˌbʊk/", pp: "a nôut-buc", s: ["a", " note", "book"]},
  {w: "a backpack", t: "uma mochila", p: "/ə ˈbækˌpæk/", pp: "a béc-péc", s: ["a", " back", "pack"]},
  {w: "a watch", t: "um relógio (de pulso)", p: "/ə wɑtʃ/", pp: "a uótch", s: ["a", " watch"]},
  {w: "a computer", t: "um computador", p: "/ə kəmˈpjutər/", pp: "a com-piú-ter", s: ["a", " com", "pu", "ter"]},
  {w: "a TV", t: "uma televisão", p: "/ə ˌtiˈvi/", pp: "a ti-ví", s: ["a", " TV"]},
  {w: "glasses", t: "óculos", p: "/ˈɡlæsɪz/", pp: "glé-siz", s: ["glas", "ses"]},
  {w: "shoes", t: "sapatos", p: "/ʃuz/", pp: "xuz", s: ["shoes"]},
  {w: "a wallet", t: "uma carteira", p: "/ə ˈwɑlət/", pp: "a uó-let", s: ["a", " wal", "let"]},
  {w: "a key", t: "uma chave", p: "/ə ki/", pp: "a qui", s: ["a", " key"]},
  {w: "a mobile phone", t: "um celular", p: "/ə ˈmoʊbəl foʊn/", pp: "a môu-bou fôun", s: ["a", " mo", "bile", " phone"]},
  {w: "headphones", t: "fones de ouvido", p: "/ˈhɛdˌfoʊnz/", pp: "réd-fôunz", s: ["head", "phones"]},
  {w: "an umbrella", t: "um guarda-chuva", p: "/ən ʌmˈbrɛlə/", pp: "an am-bré-la", s: ["an", " um", "brel", "la"]},
  {w: "a passport", t: "um passaporte", p: "/ə ˈpæsˌpɔrt/", pp: "a pés-port", s: ["a", " pass", "port"]},
  {w: "a hat", t: "um chapéu", p: "/ə hæt/", pp: "a rét", s: ["a", " hat"]},
  {w: "a bottle of water", t: "uma garrafa de água", p: "/ə ˈbɑtəl əv ˈwɔtər/", pp: "a bó-tou on uó-ter", s: ["a", " bot", "tle", " of", " wa", "ter"]}
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

// Find current deck
const startIdx = staticDecksData.indexOf('export const COMMON_THINGS_DECK: FlashcardData[] = [');
if (startIdx === -1) {
  console.log("Could not find the deck");
  process.exit(1);
}

const endStr = `];\n\nexport const STATIC_DECKS`;
let endIdx = staticDecksData.indexOf(endStr, startIdx);
if (endIdx === -1) {
    endIdx = staticDecksData.indexOf(`];\nexport const STATIC_DECKS`, startIdx);
    if(endIdx === -1) {
      console.log("Could not find end of deck");
      process.exit(1);
    }
}

const finalFileBuffer = staticDecksData.substring(0, startIdx) + newDeckStr + staticDecksData.substring(endIdx + 3);

fs.writeFileSync('data/staticDecks.ts', finalFileBuffer);
console.log("Deck replaced successfully.");
