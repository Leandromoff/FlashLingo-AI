const fs = require('fs');

const rawDeck = [
  {w: "I am not", t: "eu não sou, não estou", p: "/aɪ æm nɑt/", pp: "ai ém nat", s: ["I", " am", " not"]},
  {w: "you are not", t: "você não é, não está", p: "/ju ɑr nɑt/", pp: "iu ar nat", s: ["you", " are", " not"]},
  {w: "he is not", t: "ele não é, não está", p: "/hi ɪz nɑt/", pp: "ri iz nat", s: ["he", " is", " not"]},
  {w: "she is not", t: "ela não é, não está", p: "/ʃi ɪz nɑt/", pp: "xi iz nat", s: ["she", " is", " not"]},
  {w: "it is not", t: "não é, não está", p: "/ɪt ɪz nɑt/", pp: "it iz nat", s: ["it", " is", " not"]},
  {w: "we are not", t: "nós não somos, não estamos", p: "/wi ɑr nɑt/", pp: "uí ar nat", s: ["we", " are", " not"]},
  {w: "they are not", t: "eles(as) não são, não estão", p: "/ðeɪ ɑr nɑt/", pp: "dêi ar nat", s: ["they", " are", " not"]},

  {w: "student", t: "aluno(a), estudante", p: "/ˈstudənt/", pp: "stú-dent", s: ["stu", "dent"]},
  {w: "manager", t: "gerente", p: "/ˈmænɪdʒər/", pp: "mé-ne-djer", s: ["ma", "na", "ger"]},
  {w: "sales clerk", t: "vendedor(a)", p: "/seɪlz klɜrk/", pp: "sêils clãrk", s: ["sales", " clerk"]},
  {w: "lawyer", t: "advogado(a)", p: "/ˈlɔɪər/", pp: "ló-iãr", s: ["law", "yer"]},
  {w: "engineer", t: "engenheiro(a)", p: "/ˌɛndʒəˈnɪr/", pp: "en-dji-nir", s: ["en", "gi", "neer"]},
  {w: "designer", t: "projetista", p: "/dɪˈzaɪnər/", pp: "di-zai-ner", s: ["de", "sign", "er"]},
  {w: "hungry", t: "com fome", p: "/ˈhʌŋɡri/", pp: "rân-gri", s: ["hun", "gry"]},
  {w: "thirsty", t: "com sede", p: "/ˈθɜrsti/", pp: "thãrs-ti", s: ["thirs", "ty"]},
  {w: "tired", t: "cansado(a)", p: "/ˈtaɪərd/", pp: "tai-erd", s: ["tired"]},
  {w: "sad", t: "triste", p: "/sæd/", pp: "séd", s: ["sad"]},
  {w: "upset", t: "chateado(a), aborrecido(a)", p: "/əpˈsɛt/", pp: "ãp-sét", s: ["up", "set"]},
  {w: "worried", t: "preocupado(a)", p: "/ˈwɜrid/", pp: "uô-rid", s: ["wor", "ried"]},
  {w: "happy", t: "feliz", p: "/ˈhæpi/", pp: "ré-pi", s: ["hap", "py"]},
  {w: "smart", t: "esperto(a), inteligente", p: "/smɑrt/", pp: "smárt", s: ["smart"]},
  {w: "pretty", t: "bonito(a)", p: "/ˈprɪti/", pp: "prí-ti", s: ["pret", "ty"]},
  {w: "healthy", t: "saudável", p: "/ˈhɛlθi/", pp: "rél-thi", s: ["heal", "thy"]},
  {w: "busy", t: "ocupado(a)", p: "/ˈbɪzi/", pp: "bí-zi", s: ["bu", "sy"]},
  {w: "very", t: "muito", p: "/ˈvɛri/", pp: "vé-ri", s: ["ve", "ry"]},

  {w: "What do you do?", t: "O que você faz?", p: "/wɑt du ju du?/", pp: "uát du iu du?", s: ["What", " do", " you", " do?"]},
  {w: "I'm sure!", t: "Eu tenho certeza!", p: "/aɪm ʃʊr!/", pp: "aim xûr!", s: ["I'm", " sure!"]},
  {w: "I'm worried about the exam.", t: "Eu estou preocupado com a prova.", p: "/aɪm ˈwɜrid əˈbaʊt ði ɪɡˈzæm./", pp: "aim uô-rid a-báut di ig-zém.", s: ["I'm", " wor", "ried", " a", "bout", " the", " ex", "am."]},
  
  {w: "I'm not hungry now.", t: "Eu não estou com fome agora.", p: "/aɪm nɑt ˈhʌŋɡri naʊ./", pp: "aim nat rân-gri náu.", s: ["I'm", " not", " hun", "gry", " now."]},
  {w: "You are not very far from here.", t: "Você não está muito longe daqui.", p: "/ju ɑr nɑt ˈvɛri fɑr frʌm hɪr./", pp: "iu ar nat vé-ri far from rir.", s: ["You", " are", " not", " ve", "ry", " far", " from", " here."]},
  {w: "He is not busy this week.", t: "Ele não está ocupado esta semana.", p: "/hi ɪz nɑt ˈbɪzi ðɪs wik./", pp: "ri iz nat bí-zi diz uic.", s: ["He", " is", " not", " bu", "sy", " this", " week."]},
  {w: "She is not tired today.", t: "Ela não está cansada hoje.", p: "/ʃi ɪz nɑt ˈtaɪərd təˈdeɪ./", pp: "xi iz nat tai-erd tchu-dêi.", s: ["She", " is", " not", " tired", " to", "day."]},
  {w: "It is not late to go there.", t: "Não está tarde para ir lá.", p: "/ɪt ɪz nɑt leɪt tə ɡoʊ ðɛr./", pp: "it iz nat lêit tchu gôu dér.", s: ["It", " is", " not", " late", " to", " go", " there."]},
  {w: "We are not lawyers, we're managers.", t: "Nós não somos advogados, nós somos gerentes.", p: "/wi ɑr nɑt ˈlɔɪərz, wɪr ˈmænɪdʒərz./", pp: "uí ar nat ló-iãrs, uíar mé-ne-djers.", s: ["We", " are", " not", " law", "yers,", " we're", " ma", "na", "gers."]},
  {w: "They are not upset.", t: "Eles não estão chateados.", p: "/ðeɪ ɑr nɑt əpˈsɛt./", pp: "dêi ar nat ãp-sét.", s: ["They", " are", " not", " up", "set."]},

  {w: "I'm not", t: "I am not (contração)", p: "/aɪm nɑt/", pp: "aim nat", s: ["I'm", " not"]},
  {w: "You're not", t: "You are not (contração)", p: "/jʊr nɑt/", pp: "iór nat", s: ["You're", " not"]},
  {w: "He's not", t: "He is not (contração)", p: "/hiz nɑt/", pp: "riz nat", s: ["He's", " not"]},
  {w: "She's not", t: "She is not (contração)", p: "/ʃiz nɑt/", pp: "xíz nat", s: ["She's", " not"]},
  {w: "It's not", t: "It is not (contração)", p: "/ɪts nɑt/", pp: "its nat", s: ["It's", " not"]},
  {w: "We're not", t: "We are not (contração)", p: "/wɪr nɑt/", pp: "uíar nat", s: ["We're", " not"]},
  {w: "They're not", t: "They are not (contração)", p: "/ðɛr nɑt/", pp: "dér nat", s: ["They're", " not"]},

  {w: "I am not a designer.", t: "Eu não sou projetista.", p: "/aɪ æm nɑt ə dɪˈzaɪnər./", pp: "ai ém nat a di-zai-ner.", s: ["I", " am", " not", " a", " de", "sign", "er."]},
  {w: "They are not at school now.", t: "Eles não estão na escola agora.", p: "/ðeɪ ɑr nɑt æt skul naʊ./", pp: "dêi ar nat ét scul náu.", s: ["They", " are", " not", " at", " school", " now."]},
  {w: "You are not late for class.", t: "Você não está atrasado para a aula.", p: "/ju ɑr nɑt leɪt fɔr klæs./", pp: "iu ar nat lêit for clés.", s: ["You", " are", " not", " late", " for", " class."]},
  {w: "She is not at home.", t: "Ela não está em casa.", p: "/ʃi ɪz nɑt æt hoʊm./", pp: "xi iz nat ét rôum.", s: ["She", " is", " not", " at", " home."]},
  {w: "We are not very tired.", t: "Nós não estamos muito cansados.", p: "/wi ɑr nɑt ˈvɛri ˈtaɪərd./", pp: "uí ar nat vé-ri tai-erd.", s: ["We", " are", " not", " ve", "ry", " tired."]},
  {w: "We are not engineers.", t: "Nós não somos engenheiros.", p: "/wi ɑr nɑt ˌɛndʒəˈnɪrz./", pp: "uí ar nat en-dji-nirs.", s: ["We", " are", " not", " en", "gi", "neers."]},
  {w: "They are not sad, they're happy.", t: "Eles não estão tristes, eles estão felizes.", p: "/ðeɪ ɑr nɑt sæd, ðɛr ˈhæpi./", pp: "dêi ar nat séd, dér ré-pi.", s: ["They", " are", " not", " sad,", " they're", " hap", "py."]},
  {w: "I think French fries are not healthy.", t: "Eu acho que batata frita não é saudável.", p: "/aɪ θɪŋk frɛntʃ fraɪz ɑr nɑt ˈhɛlθi./", pp: "ai thínk frentch frais ar nat rél-thi.", s: ["I", " think", " French", " fries", " are", " not", " heal", "thy."]},
  {w: "These are not her shoes.", t: "Estes não são os sapatos dela.", p: "/ðiz ɑr nɑt hɜr ʃuz./", pp: "díz ar nat rãr xuz.", s: ["These", " are", " not", " her", " shoes."]},
  {w: "It is not an interesting story.", t: "Não é uma história interessante.", p: "/ɪt ɪz nɑt ən ˈɪntrəstɪŋ ˈstɔri./", pp: "it iz nat én in-tres-tin stó-ri.", s: ["It", " is", " not", " an", " in", "te", "res", "ting", " sto", "ry."]},
  {w: "We are not busy at the park now.", t: "Nós não estamos ocupados no parque agora.", p: "/wi ɑr nɑt ˈbɪzi æt ðə pɑrk naʊ./", pp: "uí ar nat bí-zi ét dâ parc náu.", s: ["We", " are", " not", " bu", "sy", " at", " the", " park", " now."]},
  {w: "The exam is not very hard.", t: "A prova não está muito difícil.", p: "/ði ɪɡˈzæm ɪz nɑt ˈvɛri hɑrd./", pp: "di ig-zém iz nat vé-ri rard.", s: ["The", " ex", "am", " is", " not", " ve", "ry", " hard."]},

  {w: "first", t: "1st — primeiro", p: "/fɜrst/", pp: "fãrst", s: ["first"]},
  {w: "second", t: "2nd — segundo", p: "/ˈsɛkənd/", pp: "sé-cond", s: ["se", "cond"]},
  {w: "third", t: "3rd — terceiro", p: "/θɜrd/", pp: "thãrd", s: ["third"]},
  {w: "fourth", t: "4th — quarto", p: "/fɔrθ/", pp: "fórth", s: ["fourth"]},
  {w: "fifth", t: "5th — quinto", p: "/fɪfθ/", pp: "fif-th", s: ["fifth"]},
  {w: "sixth", t: "6th — sexto", p: "/sɪksθ/", pp: "sics-th", s: ["sixth"]},
  {w: "seventh", t: "7th — sétimo", p: "/ˈsɛvənθ/", pp: "sé-ven-th", s: ["se", "venth"]},
  {w: "eighth", t: "8th — oitavo", p: "/eɪtθ/", pp: "êit-th", s: ["eighth"]},
  {w: "ninth", t: "9th — nono", p: "/naɪnθ/", pp: "nain-th", s: ["ninth"]},
  {w: "tenth", t: "10th — décimo", p: "/tɛnθ/", pp: "ten-th", s: ["tenth"]},
  {w: "eleventh", t: "11th — décimo primeiro", p: "/ɪˈlɛvənθ/", pp: "i-lé-ven-th", s: ["e", "le", "venth"]},
  {w: "twelfth", t: "12th — décimo segundo", p: "/twɛlfθ/", pp: "tu-élf-th", s: ["twelfth"]},
  {w: "thirteenth", t: "13th — décimo terceiro", p: "/ˈθɜrˈtinθ/", pp: "thãr-tinth", s: ["thir", "teenth"]},
  {w: "fourteenth", t: "14th — décimo quarto", p: "/ˈfɔrˈtinθ/", pp: "fór-tinth", s: ["four", "teenth"]},
  {w: "fifteenth", t: "15th — décimo quinto", p: "/ˈfɪfˈtinθ/", pp: "fif-tinth", s: ["fif", "teenth"]},

  {w: "How are you today?", t: "Como você está hoje?", p: "/haʊ ɑr ju təˈdeɪ?/", pp: "ráu ar iu tchu-dêi?", s: ["How", " are", " you", " to", "day?"]},
  {w: "I'm fine! How about you?", t: "Eu estou bem! E você?", p: "/aɪm faɪn! haʊ əˈbaʊt ju?/", pp: "aim fain! ráu a-báut iu?", s: ["I'm", " fine!", " How", " a", "bout", " you?"]},
  {w: "I'm great, thanks.", t: "Eu estou ótimo, obrigado.", p: "/aɪm ɡreɪt, θæŋks./", pp: "aim grêit, thénks.", s: ["I'm", " great,", " thanks."]}

];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_BE_NEGATIVE_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_be_negative_" + (i + 1) + "',\n";
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
  'to_be_intro: {',
  'to_be_negative: {\n    en: TO_BE_NEGATIVE_DECK\n  },\n  to_be_intro: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck appended successfully');
