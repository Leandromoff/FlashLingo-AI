const fs = require('fs');

const rawDeck = [
  {w: "to be", t: "ser, estar", p: "/tə bi/", pp: "tchu bi", s: ["to", " be"]},
  {w: "I am", t: "eu sou, estou", p: "/aɪ æm/", pp: "ai ém", s: ["I", " am"]},
  {w: "you are", t: "você é, está", p: "/ju ɑr/", pp: "iu ar", s: ["you", " are"]},
  {w: "he is", t: "ele é, está", p: "/hi ɪz/", pp: "ri iz", s: ["he", " is"]},
  {w: "she is", t: "ela é, está", p: "/ʃi ɪz/", pp: "xi iz", s: ["she", " is"]},
  {w: "it is", t: "é, está", p: "/ɪt ɪz/", pp: "it iz", s: ["it", " is"]},
  {w: "we are", t: "nós somos, estamos", p: "/wi ɑr/", pp: "uí ar", s: ["we", " are"]},
  {w: "you are ", t: "vocês são, estão", p: "/ju ɑr/", pp: "iu ar", s: ["you", " are"]},
  {w: "they are", t: "eles(as) são, estão", p: "/ðeɪ ɑr/", pp: "dêi ar", s: ["they", " are"]},
  
  {w: "nurse", t: "enfermeiro(a)", p: "/nɜrs/", pp: "nãrs", s: ["nurse"]},
  {w: "doctor", t: "médico(a)", p: "/ˈdɑktər/", pp: "dóc-tor", s: ["doc", "tor"]},
  {w: "dentist", t: "dentista", p: "/ˈdɛntɪst/", pp: "dén-tist", s: ["den", "tist"]},
  {w: "sick", t: "doente", p: "/sɪk/", pp: "sic", s: ["sick"]},
  {w: "headache", t: "dor de cabeça", p: "/ˈhɛdˌeɪk/", pp: "réd-eic", s: ["head", "ache"]},
  {w: "stomachache", t: "dor de estômago", p: "/ˈstʌməkˌeɪk/", pp: "stó-mac-eic", s: ["sto", "mach", "ache"]},
  {w: "sore throat", t: "dor de garganta", p: "/sɔr θroʊt/", pp: "sór thrôut", s: ["sore", " throat"]},
  {w: "toothache", t: "dor de dente", p: "/ˈtuθˌeɪk/", pp: "tuth-eic", s: ["tooth", "ache"]},
  {w: "cold", t: "resfriado", p: "/koʊld/", pp: "côuld", s: ["cold"]},
  {w: "fever", t: "febre", p: "/ˈfivər/", pp: "fí-ver", s: ["fe", "ver"]},
  {w: "appointment", t: "compromisso, consulta", p: "/əˈpɔɪntmənt/", pp: "a-póint-ment", s: ["ap", "point", "ment"]},
  {w: "painkiller", t: "analgésico", p: "/ˈpeɪnˌkɪlər/", pp: "pêin-ki-ler", s: ["pain", "kil", "ler"]},
  {w: "pill", t: "comprimido", p: "/pɪl/", pp: "pil", s: ["pill"]},
  {w: "health", t: "saúde", p: "/hɛlθ/", pp: "relth", s: ["health"]},
  {w: "kind", t: "gentil", p: "/kaɪnd/", pp: "caind", s: ["kind"]},
  {w: "these", t: "esses(as), estes(as)", p: "/ðiz/", pp: "díz", s: ["these"]},
  {w: "those", t: "aqueles(as)", p: "/ðoʊz/", pp: "dôuz", s: ["those"]},

  {w: "Take this medicine for your toothache.", t: "Tome este remédio para sua dor de dente.", p: "/teɪk ðɪs ˈmɛdəsɪn fɔr jʊr ˈtuθˌeɪk/", pp: "têik díz mé-di-sin for iór tuth-eic", s: ["Take", " this", " me", "di", "cine", " for", " your", " tooth", "ache."]},
  {w: "I feel better now.", t: "Eu me sinto melhor agora.", p: "/aɪ fil ˈbɛtər naʊ/", pp: "ai fil bé-ter náu", s: ["I", " feel", " bet", "ter", " now."]},
  {w: "I still have to go to the dentist.", t: "Eu ainda tenho que ir ao dentista.", p: "/aɪ stɪl hæv tə ɡoʊ tə ðə ˈdɛntɪst/", pp: "ai stil rév tchu gôu tchu dâ dén-tist", s: ["I", " still", " have", " to", " go", " to", " the", " den", "tist."]},
  {w: "I'm in pain.", t: "Eu estou com dor.", p: "/aɪm ɪn peɪn/", pp: "aim in pêin", s: ["I'm", " in", " pain."]},

  {w: "I'm a teacher. You're a nurse.", t: "Eu sou professor. Você é enfermeira.", p: "/aɪm ə ˈtitʃər. jʊr ə nɜrs/", pp: "aim a tí-tcher. iór a nãrs", s: ["I'm", " a", " tea", "cher.", " You're", " a", " nurse."]},
  {w: "She's late for her appointment.", t: "Ela está atrasada para o compromisso dela.", p: "/ʃiz leɪt fɔr hɜr əˈpɔɪntmənt/", pp: "xiz lêit for rãr a-póint-ment", s: ["She's", " late", " for", " her", " ap", "point", "ment."]},
  {w: "He's still in pain.", t: "Ele ainda está com dor.", p: "/hiz stɪl ɪn peɪn/", pp: "riz stil in pêin", s: ["He's", " still", " in", " pain."]},
  {w: "It's early, let's watch a movie.", t: "É cedo, vamos assistir um filme.", p: "/ɪts ˈɜrli, lɛts wɑtʃ ə ˈmuvi/", pp: "its ãr-li, lets uátch a mú-vi", s: ["It's", " ear", "ly,", " let's", " watch", " a", " mo", "vie."]},
  {w: "We're friends.", t: "Nós somos amigos.", p: "/wɪr frɛndz/", pp: "uíar frends", s: ["We're", " friends."]},
  {w: "You're great doctors.", t: "Vocês são ótimos médicos.", p: "/jʊr ɡreɪt ˈdɑktərz/", pp: "iór grêit dóc-tors", s: ["You're", " great", " doc", "tors."]},
  {w: "They're at the hospital now.", t: "Eles estão no hospital agora.", p: "/ðɛr æt ðə ˈhɑspɪtəl naʊ/", pp: "dér ét dâ rós-pi-tal náu", s: ["They're", " at", " the", " hos", "pi", "tal", " now."]},
  
  {w: "this is", t: "este/essa é", p: "/ðɪs ɪz/", pp: "díz iz", s: ["this", " is"]},
  {w: "these are", t: "estes/essas são", p: "/ðiz ɑr/", pp: "díz ar", s: ["these", " are"]},
  {w: "that is", t: "aquele/aquela é", p: "/ðæt ɪz/", pp: "dét iz", s: ["that", " is"]},
  {w: "those are", t: "aqueles/aquelas são", p: "/ðoʊz ɑr/", pp: "dôuz ar", s: ["those", " are"]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_BE_INTRO_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_be_intro_" + (i + 1) + "',\n";
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

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck TO_BE_INTRO appended before map!');
