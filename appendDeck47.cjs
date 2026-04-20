const fs = require('fs');

const rawDeck = [
  {w: "to call", t: "chamar, ligar", p: "/tə kɔl/", pp: "tchu col", s: ["to", " call"]},
  {w: "to wait", t: "esperar", p: "/tə weɪt/", pp: "tchu uêit", s: ["to", " wait"]},

  {w: "beverage", t: "bebida", p: "/ˈbɛvərɪdʒ/", pp: "bé-ve-ridj", s: ["be", "ve", "rage"]},
  {w: "bar", t: "bar", p: "/bɑr/", pp: "bar", s: ["bar"]},
  {w: "barbecue", t: "churrasco", p: "/ˈbɑrbɪˌkju/", pp: "bar-bi-kiú", s: ["bar", "be", "cue"]},
  {w: "chef", t: "chefe de cozinha", p: "/ʃɛf/", pp: "xéf", s: ["chef"]},
  {w: "vegetarian", t: "vegetariano(a)", p: "/ˌvɛdʒəˈtɛriən/", pp: "ve-dji-té-ri-an", s: ["ve", "ge", "ta", "ri", "an"]},
  {w: "vegan", t: "vegano(a)", p: "/ˈviɡən/", pp: "ví-gan", s: ["ve", "gan"]},
  {w: "comfortable", t: "confortável", p: "/ˈkʌmfərtəbəl/", pp: "câm-fãr-ta-bou", s: ["com", "for", "ta", "ble"]},
  {w: "almost", t: "quase", p: "/ˈɔlˌmoʊst/", pp: "ól-môust", s: ["al", "most"]},
  {w: "often", t: "frequentemente", p: "/ˈɔfən/", pp: "ó-fen", s: ["of", "ten"]},
  {w: "always", t: "sempre", p: "/ˈɔlˌweɪz/", pp: "ól-uêiz", s: ["al", "ways"]},
  {w: "never", t: "nunca", p: "/ˈnɛvər/", pp: "né-vãr", s: ["ne", "ver"]},
  {w: "somebody", t: "alguém", p: "/ˈsʌmbədi/", pp: "sâm-bó-di", s: ["some", "bo", "dy"]},
  {w: "anybody", t: "alguém, ninguém, qualquer um", p: "/ˈɛnibədi/", pp: "é-ni-bó-di", s: ["a", "ny", "bo", "dy"]},
  {w: "so", t: "então, daí, depois", p: "/soʊ/", pp: "sôu", s: ["so"]},
  {w: "how often", t: "com que frequência", p: "/haʊ ˈɔfən/", pp: "ráu ó-fen", s: ["how", " of", "ten"]},

  {w: "I'm in a hurry.", t: "Estou com pressa.", p: "/aɪm ɪn ə ˈhɜri./", pp: "aim in a rã-ri.", s: ["I'm", " in", " a", " hur", "ry."]},
  {w: "Hurry up! We're late.", t: "Apresse-se! Nós estamos atrasados.", p: "/ˈhɜri ʌp! wɪr leɪt./", pp: "rã-ri âp! uíar lêit.", s: ["Hur", "ry", " up!", " We're", " late."]},
  {w: "He's always on time.", t: "Ele está sempre no horário.", p: "/hiz ˈɔlˌweɪz ɑn taɪm./", pp: "riz ól-uêiz an taim.", s: ["He's", " al", "ways", " on", " time."]},

  {w: "Somebody is upset about this problem.", t: "Alguém está chateado com esse problema.", p: "/ˈsʌmbədi ɪz əpˈsɛt əˈbaʊt ðɪs ˈprɑbləm./", pp: "sâm-bó-di iz ãp-sét a-báut díz pró-blam.", s: ["Some", "bo", "dy", " is", " up", "set", " a", "bout", " this", " pro", "blem."]},
  {w: "We need somebody to make their dinner.", t: "Nós precisamos de alguém para fazer o jantar deles.", p: "/wi nid ˈsʌmbədi tə meɪk ðɛr ˈdɪnər./", pp: "uí nid sâm-bó-di tchu mêic dér dí-nãr.", s: ["We", " need", " some", "bo", "dy", " to", " make", " their", " din", "ner."]},
  {w: "I don't know anybody here.", t: "Eu não conheço ninguém aqui.", p: "/aɪ doʊnt noʊ ˈɛnibədi hɪr./", pp: "ai dôunt nôu é-ni-bó-di rir.", s: ["I", " don't", " know", " a", "ny", "bo", "dy", " here."]},
  {w: "He doesn't want to talk to anybody.", t: "Ele não quer falar com ninguém.", p: "/hi ˈdʌzənt wɑnt tə tɔk tu ˈɛnibədi./", pp: "ri dâ-zônt uónt tchu tóc tchu é-ni-bó-di.", s: ["He", " doe", "sn't", " want", " to", " talk", " to", " a", "ny", "bo", "dy."]},
  {w: "Does anybody speak English here?", t: "Alguém fala inglês aqui?", p: "/dʌz ˈɛnibədi spik ˈɪŋɡlɪʃ hɪr?/", pp: "dâz é-ni-bó-di spíc in-glix rir?", s: ["Does", " a", "ny", "bo", "dy", " speak", " En", "glish", " here?"]},

  {w: "I need to call my mother now.", t: "Eu preciso ligar para a minha mãe agora.", p: "/aɪ nid tə kɔl maɪ ˈmʌðər naʊ./", pp: "ai nid tchu col mai mâ-dãr náu.", s: ["I", " need", " to", " call", " my", " mo", "ther", " now."]},
  {w: "She always calls me on my birthday.", t: "Ela sempre me liga no meu aniversário.", p: "/ʃi ˈɔlˌweɪz kɔlz mi ɑn maɪ ˈbɜrθˌdeɪ./", pp: "xi ól-uêiz cols mi an mai bãrth-dêi.", s: ["She", " al", "ways", " calls", " me", " on", " my", " birth", "day."]},
  {w: "Call your father. He's worried.", t: "Ligue para o seu pai. Ele está preocupado.", p: "/kɔl jʊr ˈfɑðər. hiz ˈwɜrid./", pp: "col iór fá-dãr. riz uô-rid.", s: ["Call", " your", " fa", "ther.", " He's", " wor", "ried."]},
  {w: "I have to wait for my brother here.", t: "Eu tenho que esperar pelo meu irmão aqui.", p: "/aɪ hæv tə weɪt fɔr maɪ ˈbrʌðər hɪr./", pp: "ai rév tchu uêit fór mai brâ-dãr rir.", s: ["I", " have", " to", " wait", " for", " my", " bro", "ther", " here."]},
  {w: "I'm late, so don't wait for me.", t: "Eu estou atrasado, então não me espere.", p: "/aɪm leɪt, soʊ doʊnt weɪt fɔr mi./", pp: "aim lêit, sôu dôunt uêit fór mi.", s: ["I'm", " late,", " so", " don't", " wait", " for", " me."]},
  {w: "Dinner is almost ready.", t: "O jantar está quase pronto.", p: "/ˈdɪnər ɪz ˈɔlˌmoʊst ˈrɛdi./", pp: "dí-nãr iz ól-môust ré-di.", s: ["Din", "ner", " is", " al", "most", " rea", "dy."]},
  {w: "Do you know anybody in Germany?", t: "Você conhece alguém na Alemanha?", p: "/du ju noʊ ˈɛnibədi ɪn ˈdʒɜrməni?/", pp: "du iu nôu é-ni-bó-di in djãr-ma-ni?", s: ["Do", " you", " know", " a", "ny", "bo", "dy", " in", " Ger", "ma", "ny?"]},
  {w: "She doesn't want to see anybody.", t: "Ela não quer ver ninguém.", p: "/ʃi ˈdʌzənt wɑnt tə si ˈɛnibədi./", pp: "xi dâ-zônt uónt tchu si é-ni-bó-di.", s: ["She", " doe", "sn't", " want", " to", " see", " a", "ny", "bo", "dy."]},
  {w: "Somebody wants to speak with you.", t: "Alguém quer falar com você.", p: "/ˈsʌmbədi wɑnts tə spik wɪθ ju./", pp: "sâm-bó-di uónts tchu spíc uith iu.", s: ["Some", "bo", "dy", " wants", " to", " speak", " with", " you."]},
  {w: "How often do you see your cousins?", t: "Com que frequência você vê seus primos?", p: "/haʊ ˈɔfən du ju si jʊr ˈkʌzənz?/", pp: "ráu ó-fen du iu si iór cã-zins?", s: ["How", " of", "ten", " do", " you", " see", " your", " cou", "sins?"]},
  {w: "He is never in a hurry.", t: "Ele nunca está com pressa.", p: "/hi ɪz ˈnɛvər ɪn ə ˈhɜri./", pp: "ri iz né-vãr in a rã-ri.", s: ["He", " is", " ne", "ver", " in", " a", " hur", "ry."]},
  {w: "I often read books in English.", t: "Eu frequentemente leio livros em inglês.", p: "/aɪ ˈɔfən rid bʊks ɪn ˈɪŋɡlɪʃ./", pp: "ai ó-fen rid bucs in in-glix.", s: ["I", " of", "ten", " read", " books", " in", " En", "glish."]},

  {w: "usually", t: "geralmente", p: "/ˈjuʒuəli/", pp: "iú-ju-a-li", s: ["u", "sual", "ly"]},
  {w: "sometimes", t: "às vezes", p: "/ˈsʌmˌtaɪmz/", pp: "sâm-taims", s: ["some", "times"]},
  {w: "almost never", t: "quase nunca", p: "/ˈɔlˌmoʊst ˈnɛvər/", pp: "ól-môust né-vãr", s: ["al", "most", " ne", "ver"]},

  {w: "once a week", t: "uma vez por semana", p: "/wʌns ə wik/", pp: "uâns a uic", s: ["once", " a", " week"]},
  {w: "twice a week", t: "duas vezes por semana", p: "/twaɪs ə wik/", pp: "tu-ais a uic", s: ["twice", " a", " week"]},
  {w: "three times a week", t: "três vezes por semana", p: "/θri taɪmz ə wik/", pp: "thrí taims a uic", s: ["three", " times", " a", " week"]},
  {w: "every day", t: "todo dia", p: "/ˈɛvri deɪ/", pp: "é-vri dêi", s: ["e", "very", " day"]},
  
  {w: "I sometimes see my grandmother.", t: "Eu às vezes vejo a minha avó.", p: "/aɪ ˈsʌmˌtaɪmz si maɪ ˈɡrændˌmʌðər./", pp: "ai sâm-taims si mai grénd-mâ-dãr.", s: ["I", " some", "times", " see", " my", " grand", "mo", "ther."]},
  {w: "She is sometimes at home.", t: "Ela às vezes está em casa.", p: "/ʃi ɪz ˈsʌmˌtaɪmz æt hoʊm./", pp: "xi iz sâm-taims ét rôum.", s: ["She", " is", " some", "times", " at", " home."]},
  {w: "See you later / soon / tomorrow.", t: "Vejo você mais tarde / em breve / amanhã.", p: "/si ju ˈleɪtər / sun / təˈmɑroʊ./", pp: "si iu lêi-tãr / sun / tchu-mó-rou.", s: ["See", " you", " la", "ter /", " soon /", " to", "mor", "row."]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_CALL_WAIT_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_call_wait_' + " + (i + 1) + ",\n";
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
  'to_open_close: {',
  'to_call_wait: {\n    en: TO_CALL_WAIT_DECK\n  },\n  to_open_close: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck appended successfully');
