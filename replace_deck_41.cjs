const fs = require('fs');

const rawDeck = [
  {w: "Am I?", t: "Eu sou, estou?", p: "/æm aɪ?/", pp: "ém ai?", s: ["Am", " I?"]},
  {w: "Are you?", t: "Você é, está?", p: "/ɑr ju?/", pp: "ar iu?", s: ["Are", " you?"]},
  {w: "Is he?", t: "Ele é, está?", p: "/ɪz hi?/", pp: "iz ri?", s: ["Is", " he?"]},
  {w: "Is she?", t: "Ela é, está?", p: "/ɪz ʃi?/", pp: "iz xi?", s: ["Is", " she?"]},
  {w: "Is it?", t: "É, está?", p: "/ɪz ɪt?/", pp: "iz it?", s: ["Is", " it?"]},
  {w: "Are we?", t: "Nós somos, estamos?", p: "/ɑr wi?/", pp: "ar uí?", s: ["Are", " we?"]},
  {w: "Are you? (plural)", t: "Vocês são, estão?", p: "/ɑr ju?/", pp: "ar iu?", s: ["Are", " you?"]},
  {w: "Are they?", t: "Eles(as) são, estão?", p: "/ɑr ðeɪ?/", pp: "ar dêi?", s: ["Are", " they?"]},

  {w: "January", t: "janeiro", p: "/ˈdʒænjuˌɛri/", pp: "djé-niú-e-ri", s: ["Ja", "nu", "a", "ry"]},
  {w: "February", t: "fevereiro", p: "/ˈfɛbruˌɛri/", pp: "fé-bru-e-ri", s: ["Fe", "bru", "a", "ry"]},
  {w: "March", t: "março", p: "/mɑrtʃ/", pp: "mártch", s: ["March"]},
  {w: "April", t: "abril", p: "/ˈeɪprəl/", pp: "êi-prou", s: ["A", "pril"]},
  {w: "May", t: "maio", p: "/meɪ/", pp: "mêi", s: ["May"]},
  {w: "June", t: "junho", p: "/dʒun/", pp: "djun", s: ["June"]},
  {w: "July", t: "julho", p: "/dʒuˈlaɪ/", pp: "dju-lai", s: ["Ju", "ly"]},
  {w: "August", t: "agosto", p: "/ˈɔɡəst/", pp: "ó-gãst", s: ["Au", "gust"]},
  {w: "September", t: "setembro", p: "/sɛpˈtɛmbər/", pp: "sep-tém-ber", s: ["Sep", "tem", "ber"]},
  {w: "October", t: "outubro", p: "/ɑkˈtoʊbər/", pp: "oc-tôu-ber", s: ["Oc", "to", "ber"]},
  {w: "November", t: "novembro", p: "/noʊˈvɛmbər/", pp: "nôu-vém-ber", s: ["No", "vem", "ber"]},
  {w: "December", t: "dezembro", p: "/dɪˈsɛmbər/", pp: "di-sém-ber", s: ["De", "cem", "ber"]},

  {w: "birthday", t: "aniversário", p: "/ˈbɜrθˌdeɪ/", pp: "bãrth-dei", s: ["birth", "day"]},
  {w: "young", t: "jovem", p: "/jʌŋ/", pp: "iâng", s: ["young"]},
  {w: "ready", t: "pronto(a)", p: "/ˈrɛdi/", pp: "ré-di", s: ["rea", "dy"]},
  {w: "who", t: "quem", p: "/hu/", pp: "rú", s: ["who"]},

  {w: "How old are you?", t: "Quantos anos você tem?", p: "/haʊ oʊld ɑr ju?/", pp: "ráu ôuld ar iu?", s: ["How", " old", " are", " you?"]},
  {w: "I'm 20 years old.", t: "Eu tenho 20 anos.", p: "/aɪm ˈtwɛnti jɪrz oʊld./", pp: "aim tu-én-ti iers ôuld.", s: ["I'm", " 20", " years", " old."]},
  {w: "When is your birthday?", t: "Quando é o seu aniversário?", p: "/wɛn ɪz jʊr ˈbɜrθˌdeɪ?/", pp: "uen iz iór bãrth-dei?", s: ["When", " is", " your", " birth", "day?"]},
  {w: "It's on May 2nd.", t: "É em 2 de maio.", p: "/ɪts ɑn meɪ ˈsɛkənd./", pp: "its an mêi sé-cond.", s: ["It's", " on", " May", " 2nd."]},

  {w: "Are you ready?", t: "Você está pronto?", p: "/ɑr ju ˈrɛdi?/", pp: "ar iu ré-di?", s: ["Are", " you", " rea", "dy?"]},
  {w: "Is she Brazilian?", t: "Ela é brasileira?", p: "/ɪz ʃi brəˈzɪljən?/", pp: "iz xi bra-zi-li-an?", s: ["Is", " she", " Bra", "zil", "ian?"]},
  {w: "Are they at the office?", t: "Eles estão no escritório?", p: "/ɑr ðeɪ æt ði ˈɔfɪs?/", pp: "ar dêi ét di ó-fis?", s: ["Are", " they", " at", " the", " of", "fice?"]},
  {w: "Is your father a manager?", t: "Seu pai é gerente?", p: "/ɪz jʊr ˈfɑðər ə ˈmænɪdʒər?/", pp: "iz iór fá-der a mé-ne-djer?", s: ["Is", " your", " fa", "ther", " a", " ma", "na", "ger?"]},
  {w: "Is the movie bad?", t: "O filme é ruim?", p: "/ɪz ðə ˈmuvi bæd?/", pp: "iz dâ mú-vi béd?", s: ["Is", " the", " mo", "vie", " bad?"]},
  {w: "Is the boss a referee?", t: "O chefe é árbitro?", p: "/ɪz ðə bɔs ə ˌrɛfəˈri?/", pp: "iz dâ bós a ré-fe-ri?", s: ["Is", " the", " boss", " a", " re", "fe", "ree?"]},
  {w: "Are the students there?", t: "Os alunos estão lá?", p: "/ɑr ðə ˈstudənts ðɛr?/", pp: "ar dâ stú-dents dér?", s: ["Are", " the", " stu", "dents", " there?"]},
  {w: "Who is he?", t: "Quem é ele?", p: "/hu ɪz hi?/", pp: "rú iz ri?", s: ["Who", " is", " he?"]},

  {w: "Am I late?", t: "Eu estou atrasado?", p: "/æm aɪ leɪt?/", pp: "ém ai lêit?", s: ["Am", " I", " late?"]},
  {w: "Are you Brazilian?", t: "Você é brasileiro?", p: "/ɑr ju brəˈzɪljən?/", pp: "ar iu bra-zi-li-an?", s: ["Are", " you", " Bra", "zil", "ian?"]},
  {w: "Is she a student?", t: "Ela é estudante?", p: "/ɪz ʃi ə ˈstudənt?/", pp: "iz xi a stú-dent?", s: ["Is", " she", " a", " stu", "dent?"]},
  {w: "Is he a sales clerk?", t: "Ele é vendedor?", p: "/ɪz hi ə seɪlz klɜrk?/", pp: "iz ri a sêils clãrk?", s: ["Is", " he", " a", " sales", " clerk?"]},
  {w: "Is it a good book?", t: "É um bom livro?", p: "/ɪz ɪt ə ɡʊd bʊk?/", pp: "iz it a gud buc?", s: ["Is", " it", " a", " good", " book?"]},
  {w: "Are we ready to start?", t: "Nós estamos prontos para começar?", p: "/ɑr wi ˈrɛdi tə stɑrt?/", pp: "ar uí ré-di tchu start?", s: ["Are", " we", " rea", "dy", " to", " start?"]},
  {w: "Are they with you?", t: "Eles estão com você?", p: "/ɑr ðeɪ wɪθ ju?/", pp: "ar dêi uith iu?", s: ["Are", " they", " with", " you?"]},
  {w: "Who are you?", t: "Quem é você?", p: "/hu ɑr ju?/", pp: "rú ar iu?", s: ["Who", " are", " you?"]},
  {w: "Who are those people?", t: "Quem são aquelas pessoas?", p: "/hu ɑr ðoʊz ˈpipəl?/", pp: "rú ar dôuz pí-pol?", s: ["Who", " are", " those", " peo", "ple?"]},
  {w: "How old is she?", t: "Quantos anos ela tem?", p: "/haʊ oʊld ɪz ʃi?/", pp: "ráu ôuld iz xi?", s: ["How", " old", " is", " she?"]},
  {w: "She's ten years old.", t: "Ela tem dez anos.", p: "/ʃiz tɛn jɪrz oʊld./", pp: "xíz ten iers ôuld.", s: ["She's", " ten", " years", " old."]},
  
  // Notice we removed the duplicate 'When is your birthday?' here (or let's change it)
  {w: "When is her birthday?", t: "Quando é o aniversário dela?", p: "/wɛn ɪz hɜr ˈbɜrθˌdeɪ?/", pp: "uen iz rãr bãrth-dei?", s: ["When", " is", " her", " birth", "day?"]},
  
  {w: "It's in April.", t: "É em abril.", p: "/ɪts ɪn ˈeɪprəl./", pp: "its in êi-prou.", s: ["It's", " in", " A", "pril."]},

  {w: "sixteenth", t: "16th — décimo sexto", p: "/sɪkˈstinθ/", pp: "sics-tinth", s: ["six", "teenth"]},
  {w: "seventeenth", t: "17th — décimo sétimo", p: "/ˌsɛvənˈtinθ/", pp: "se-ven-tinth", s: ["se", "ven", "teenth"]},
  {w: "eighteenth", t: "18th — décimo oitavo", p: "/eɪˈtinθ/", pp: "ei-tinth", s: ["eigh", "teenth"]},
  {w: "nineteenth", t: "19th — décimo nono", p: "/naɪnˈtinθ/", pp: "nain-tinth", s: ["nine", "teenth"]},
  {w: "twentieth", t: "20th — vigésimo", p: "/ˈtwɛntiəθ/", pp: "tu-én-ti-eth", s: ["twen", "ti", "eth"]},
  {w: "twenty-first", t: "21st — vigésimo primeiro", p: "/ˈtwɛnti-fɜrst/", pp: "tu-én-ti-fãrst", s: ["twen", "ty-", "first"]},
  {w: "twenty-second", t: "22nd — vigésimo segundo", p: "/ˈtwɛnti-ˈsɛkənd/", pp: "tu-én-ti-sé-cond", s: ["twen", "ty-", "se", "cond"]},
  {w: "twenty-third", t: "23rd — vigésimo terceiro", p: "/ˈtwɛnti-θɜrd/", pp: "tu-én-ti-thãrd", s: ["twen", "ty-", "third"]},
  {w: "twenty-fourth", t: "24th — vigésimo quarto", p: "/ˈtwɛnti-fɔrθ/", pp: "tu-én-ti-fórth", s: ["twen", "ty-", "fourth"]},
  {w: "twenty-fifth", t: "25th — vigésimo quinto", p: "/ˈtwɛnti-fɪfθ/", pp: "tu-én-ti-fif-th", s: ["twen", "ty-", "fifth"]},
  {w: "twenty-ninth", t: "29th — vigésimo nono", p: "/ˈtwɛnti-naɪnθ/", pp: "tu-én-ti-nain-th", s: ["twen", "ty-", "ninth"]},
  {w: "thirtieth", t: "30th — trigésimo", p: "/ˈθɜrtiəθ/", pp: "thãr-ti-eth", s: ["thir", "ti", "eth"]},
  {w: "thirty-first", t: "31st — trigésimo primeiro", p: "/ˈθɜrti-fɜrst/", pp: "thãr-ti-fãrst", s: ["thir", "ty-", "first"]},

  {w: "in October", t: "em outubro", p: "/ɪn ɑkˈtoʊbər/", pp: "in oc-tôu-ber", s: ["in", " Oc", "to", "ber"]},
  {w: "in April", t: "em abril", p: "/ɪn ˈeɪprəl/", pp: "in êi-prou", s: ["in", " A", "pril"]},
  {w: "on October 29th", t: "em 29 de outubro", p: "/ɑn ɑkˈtoʊbər ˈtwɛnti-naɪnθ/", pp: "an oc-tôu-ber tu-én-ti-nain-th", s: ["on", " Oc", "to", "ber", " 29th"]},
  {w: "My birthday is in October.", t: "Meu aniversário é em outubro.", p: "/maɪ ˈbɜrθˌdeɪ ɪz ɪn ɑkˈtoʊbər./", pp: "mai bãrth-dei iz in oc-tôu-ber.", s: ["My", " birth", "day", " is", " in", " Oc", "to", "ber."]},
  {w: "My birthday is on October 29th.", t: "Meu aniversário é em 29 de outubro.", p: "/maɪ ˈbɜrθˌdeɪ ɪz ɑn ɑkˈtoʊbər ˈtwɛnti-naɪnθ./", pp: "mai bãrth-dei iz an oc-tôu-ber tu-én-ti-nain-th.", s: ["My", " birth", "day", " is", " on", " Oc", "to", "ber", " 29th."]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\nexport const TO_BE_INTERROGATIVE_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_be_interrogative_" + (i + 1) + "',\n";
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
const startIdx = staticDecksData.indexOf('export const TO_BE_INTERROGATIVE_DECK: FlashcardData[] = [');
if (startIdx === -1) {
  console.log("Could not find the deck");
  process.exit(1);
}

const endStr = `];\n\nexport const `;
let endIdx = staticDecksData.indexOf(endStr, startIdx);
if(endIdx === -1) {
   endIdx = staticDecksData.indexOf(`];\n\n\nexport const TO_MAKE_GIVE_DECK`, startIdx);
}
if(endIdx === -1) {
   endIdx = staticDecksData.indexOf(`];`, startIdx);
}

if (endIdx === -1) {
    console.log("Could not find end of deck");
    process.exit(1);
}

const finalFileBuffer = staticDecksData.substring(0, startIdx) + newDeckStr + staticDecksData.substring(endIdx + 3);

fs.writeFileSync('data/staticDecks.ts', finalFileBuffer);
console.log("Deck replaced successfully. Total cards:", rawDeck.length);
