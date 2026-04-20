const fs = require('fs');

const rawDeck = [
  {w: "to write", t: "escrever", p: "/tə raɪt/", pp: "tchu rait", s: ["to", " write"]},
  {w: "to think", t: "pensar, achar", p: "/tə θɪŋk/", pp: "tchu thinc", s: ["to", " think"]},
  {w: "report", t: "relatório", p: "/rɪˈpɔrt/", pp: "ri-pórt", s: ["re", "port"]},
  {w: "composition", t: "redação", p: "/ˌkɑmpəˈzɪʃən/", pp: "com-po-zí-xan", s: ["com", "po", "si", "tion"]},
  {w: "person", t: "pessoa", p: "/ˈpɜrsən/", pp: "pâr-san", s: ["per", "son"]},
  {w: "boring", t: "chato(a), entediante", p: "/ˈbɔrɪŋ/", pp: "bó-rin", s: ["bor", "ing"]},
  {w: "beautiful", t: "lindo(a), bonito(a)", p: "/ˈbjutəfəl/", pp: "biu-ti-ful", s: ["beau", "ti", "ful"]},
  {w: "easy", t: "fácil", p: "/ˈizi/", pp: "í-zi", s: ["ea", "sy"]},
  {w: "hard", t: "difícil", p: "/hɑrd/", pp: "rard", s: ["hard"]},
  {w: "interesting", t: "interessante", p: "/ˈɪntrəstɪŋ/", pp: "ín-tres-tin", s: ["in", "te", "res", "ting"]},
  {w: "important", t: "importante", p: "/ɪmˈpɔrtənt/", pp: "im-pór-tant", s: ["im", "por", "tant"]},
  {w: "funny", t: "engraçado(a)", p: "/ˈfʌni/", pp: "fâ-ni", s: ["fun", "ny"]},
  {w: "together", t: "juntos(as)", p: "/təˈɡɛðər/", pp: "tu-gué-der", s: ["to", "ge", "ther"]},
  {w: "everybody", t: "todos, todo mundo", p: "/ˈɛvriˌbɑdi/", pp: "é-vri-ba-di", s: ["e", "very", "bo", "dy"]},
  {w: "why", t: "por que", p: "/waɪ/", pp: "uái", s: ["why"]},
  {w: "because", t: "porque", p: "/bɪˈkɔz/", pp: "bi-cóz", s: ["be", "cause"]},
  {w: "How do you say \"chato\" in English?", t: "Como se diz \"chato\" em inglês?", p: "/haʊ du ju seɪ \"chato\" ɪn ˈɪŋɡlɪʃ/", pp: "ráu du iu sêi \"tchá-tu\" in ín-glix", s: ["How", " do", " you", " say", " \"cha", "to\"", " in", " En", "glish?"]},
  {w: "What's the meaning of \"boring\"?", t: "O que significa \"boring\"?", p: "/wʌts ðə ˈminɪŋ ʌv \"ˈbɔrɪŋ\"/", pp: "uáts dâ mí-nin ov bó-rin", s: ["What's", " the", " mean", "ing", " of", " \"bo", "ring\"?"]},
  {w: "I think so.", t: "Eu acho que sim.", p: "/aɪ θɪŋk soʊ/", pp: "ai thinc sôu", s: ["I", " think", " so."]},
  {w: "I don't think so.", t: "Eu acho que não.", p: "/aɪ doʊnt θɪŋk soʊ/", pp: "ai dôunt thinc sôu", s: ["I", " don't", " think", " so."]},
  {w: "Why do you want to watch this movie?", t: "Por que você quer assistir este filme?", p: "/waɪ du ju wɑnt tə wɑtʃ ðɪs ˈmuvi/", pp: "uái du iu uánt tchu uátch díz mú-vi", s: ["Why", " do", " you", " want", " to", " watch", " this", " mo", "vie?"]},
  {w: "Because it's funny.", t: "Porque ele é engraçado.", p: "/bɪˈkɔz ɪts ˈfʌni/", pp: "bi-cóz its fâ-ni", s: ["Be", "cause", " it's", " fun", "ny."]},
  {w: "I want to watch this movie because it's funny.", t: "Eu quero assistir este filme porque ele é engraçado.", p: "/aɪ wɑnt tə wɑtʃ ðɪs ˈmuvi bɪˈkɔz ɪts ˈfʌni/", pp: "ai uánt tchu uátch díz mú-vi bi-cóz its fâ-ni", s: ["I", " want", " to", " watch", " this", " mo", "vie", " be", "cause", " it's", " fun", "ny."]},
  {w: "Why do they need to work until late today?", t: "Por que eles precisam trabalhar até tarde hoje?", p: "/waɪ du ðeɪ nid tə wɜrk ənˈtɪl leɪt təˈdeɪ/", pp: "uái du dêi nid tchu uârk ân-til lêit tu-dêi", s: ["Why", " do", " they", " need", " to", " work", " un", "til", " late", " to", "day?"]},
  {w: "Because they have an important deadline.", t: "Porque eles têm um prazo importante.", p: "/bɪˈkɔz ðeɪ hæv ən ɪmˈpɔrtənt ˈdɛdˌlaɪn/", pp: "bi-cóz dêi rév én im-pór-tant déd-lain", s: ["Be", "cause", " they", " have", " an", " im", "por", "tant", " dead", "line."]},
  {w: "Why does she want to start college only next year?", t: "Por que ela quer começar a faculdade apenas no próximo ano?", p: "/waɪ dʌz ʃi wɑnt tə stɑrt ˈkɑlɪdʒ ˈoʊnli nɛkst jɪr/", pp: "uái dâz xi uánt tchu start có-ledj ôun-li nékst ír", s: ["Why", " does", " she", " want", " to", " start", " col", "lege", " on", "ly", " next", " year?"]},
  {w: "Because she doesn't have money this year.", t: "Porque ela não tem dinheiro este ano.", p: "/bɪˈkɔz ʃi ˈdʌzənt hæv ˈmʌni ðɪs jɪr/", pp: "bi-cóz xi dâ-zent rév mâ-ni díz ír", s: ["Be", "cause", " she", " does", "n't", " have", " mo", "ney", " this", " year."]},
  {w: "I think it's a great idea.", t: "Eu acho que é uma ótima ideia.", p: "/aɪ θɪŋk ɪts ə ɡreɪt aɪˈdiə/", pp: "ai thinc its a grêit ai-dí-a", s: ["I", " think", " it's", " a", " great", " i", "dea."]},
  {w: "He wants to write a book about his city.", t: "Ele quer escrever um livro sobre sua cidade.", p: "/hi wɑnts tə raɪt ə bʊk əˈbaʊt hɪz ˈsɪti/", pp: "ri uánts tchu rait a buk a-báut ríz sí-ti", s: ["He", " wants", " to", " write", " a", " book", " a", "bout", " his", " ci", "ty."]},
  {w: "They think it's hard to learn Italian.", t: "Eles acham que é difícil aprender italiano.", p: "/ðeɪ θɪŋk ɪts hɑrd tə lɜrn ɪˈtæljən/", pp: "dêi thinc its rard tchu lãrn i-té-lian", s: ["They", " think", " it's", " hard", " to", " learn", " I", "ta", "lian."]},
  {w: "I need to write an important report.", t: "Eu preciso escrever um relatório importante.", p: "/aɪ nid tə raɪt ən ɪmˈpɔrtənt rɪˈpɔrt/", pp: "ai nid tchu rait én im-pór-tant ri-pórt", s: ["I", " need", " to", " write", " an", " im", "por", "tant", " re", "port."]},
  {w: "Does he think it's boring?", t: "Ele acha que é entediante?", p: "/dʌz hi θɪŋk ɪts ˈbɔrɪŋ/", pp: "dâz ri thinc its bó-rin", s: ["Does", " he", " think", " it's", " bo", "ring?"]},
  {w: "What does she think about it?", t: "O que ela acha disso?", p: "/wʌt dʌz ʃi θɪŋk əˈbaʊt ɪt/", pp: "uát dâz xi thinc a-báut it", s: ["What", " does", " she", " think", " a", "bout", " it?"]},
  {w: "Everybody likes chocolate.", t: "Todo mundo gosta de chocolate.", p: "/ˈɛvriˌbɑdi laɪks ˈtʃɔklət/", pp: "é-vri-ba-di laiks tchó-clet", s: ["E", "very", "bo", "dy", " likes", " cho", "co", "late."]},
  {w: "Does everybody speak English here?", t: "Todo mundo fala inglês aqui?", p: "/dʌz ˈɛvriˌbɑdi spik ˈɪŋɡlɪʃ hɪr/", pp: "dâz é-vri-ba-di spik ín-glix rir", s: ["Does", " e", "very", "bo", "dy", " speak", " En", "glish", " here?"]},
  {w: "Why do you want to learn French?", t: "Por que você quer aprender francês?", p: "/waɪ du ju wɑnt tə lɜrn frɛntʃ/", pp: "uái du iu uánt tchu lãrn frentch", s: ["Why", " do", " you", " want", " to", " learn", " French?"]},
  {w: "Because I want to go to college in France.", t: "Porque eu quero ir para a faculdade na França.", p: "/bɪˈkɔz aɪ wɑnt tə ɡoʊ tə ˈkɑlɪdʒ ɪn fræns/", pp: "bi-cóz ai uánt tchu gôu tchu có-ledj in fréns", s: ["Be", "cause", " I", " want", " to", " go", " to", " col", "lege", " in", " France."]},
  {w: "Why does he want to read books in German?", t: "Por que ele quer ler livros em alemão?", p: "/waɪ dʌz hi wɑnt tə rid bʊks ɪn ˈdʒɜrmən/", pp: "uái dâz ri uánt tchu rid buks in djãr-man", s: ["Why", " does", " he", " want", " to", " read", " books", " in", " Ger", "man?"]},
  {w: "Because he wants to understand the language.", t: "Porque ele quer entender o idioma.", p: "/bɪˈkɔz hi wɑnts tə ˌʌndərˈstænd ðə ˈlæŋɡwədʒ/", pp: "bi-cóz ri uánts tchu ân-der-sténd dâ lén-guedj", s: ["Be", "cause", " he", " wants", " to", " un", "der", "stand", " the", " lan", "guage."]},
  {w: "I write messages to my friends.", t: "Eu escrevo mensagens para meus amigos.", p: "/aɪ raɪt ˈmɛsɪdʒɪz tə maɪ frɛndz/", pp: "ai rait mé-sa-djiz tchu mai frends", s: ["I", " write", " mes", "sa", "ges", " to", " my", " friends."]},
  {w: "What's the meaning of \"easy\"?", t: "Qual o significado de \"easy\"?", p: "/wʌts ðə ˈminɪŋ ʌv \"ˈizi\"/", pp: "uáts dâ mí-nin ov í-zi", s: ["What's", " the", " mean", "ing", " of", " \"ea", "sy\"?"]},
  {w: "It's \"fácil\".", t: "É \"fácil\".", p: "/ɪts \"fácil\"/", pp: "its fá-cil", s: ["It's", " \"fá", "cil\"."]},
  {w: "Sorry, I don't know.", t: "Desculpe, eu não sei.", p: "/ˈsɑri aɪ doʊnt noʊ/", pp: "só-ri ai dôunt nôu", s: ["Sor", "ry,", " I", " don't", " know."]},
  {w: "I think it's boring.", t: "Eu acho chato.", p: "/aɪ θɪŋk ɪts ˈbɔrɪŋ/", pp: "ai thinc its bó-rin", s: ["I", " think", " it's", " bo", "ring."]},
  {w: "I think it's interesting!", t: "Eu acho interessante!", p: "/aɪ θɪŋk ɪts ˈɪntrəstɪŋ/", pp: "ai thinc its ín-tres-tin", s: ["I", " think", " it's", " in", "te", "res", "ting!"]},
  {w: "I don't think it's funny.", t: "Eu não acho graça.", p: "/aɪ doʊnt θɪŋk ɪts ˈfʌni/", pp: "ai dôunt thinc its fâ-ni", s: ["I", " don't", " think", " it's", " fun", "ny."]},
  {w: "people", t: "pessoas", p: "/ˈpipəl/", pp: "pí-pl", s: ["peo", "ple"]}
];

let typesData = fs.readFileSync('types.ts', 'utf8');

if (!typesData.includes("'write_think'")) {
    // Insert into PREDEFINED_TOPICS just after start_finish
    typesData = typesData.replace(
        /label:\s*'31 Começar & Terminar',\n\s*isStatic:\s*true\n\s*\}/, 
        "label: '31 Começar & Terminar',\n    isStatic: true\n  },\n  {\n    id: 'write_think',\n    label: '35 Escrever, Pensar & Achar',\n    isStatic: true\n  }"
    );
    fs.writeFileSync('types.ts', typesData);
}

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

if (!staticDecksData.includes('export const WRITE_THINK_DECK')) {
    let newDeckStr = "\n\nexport const WRITE_THINK_DECK: FlashcardData[] = [\n";
    rawDeck.forEach(function(c, i) {
      newDeckStr += "  {\n";
      newDeckStr += "    id: 'write_think_" + (i + 1) + "',\n";
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
    
    staticDecksData = staticDecksData.replace(/export const STATIC_DECKS: Record<string, Record<string, FlashcardData\[\]>> = \{/, 
    "export const STATIC_DECKS: Record<string, Record<string, FlashcardData[]>> = {\n  write_think: {\n    en: WRITE_THINK_DECK\n  },");
    
    staticDecksData = staticDecksData + newDeckStr;
    fs.writeFileSync('data/staticDecks.ts', staticDecksData);
    console.log('Deck WRITE_THINK rebuilt successfully!');
} else {
    console.log('Deck already exists.');
}
