const fs = require('fs');

const rawDeck = [
  {w: "to start", t: "começar", p: "/tə stɑrt/", pp: "tchu start", s: ["to", " start"]},
  {w: "to finish", t: "terminar", p: "/tə ˈfɪnɪʃ/", pp: "tchu fí-nix", s: ["to", " fi", "nish"]},
  {w: "project", t: "projeto", p: "/ˈprɑdʒɛkt/", pp: "pró-dject", s: ["pro", "ject"]},
  {w: "college", t: "faculdade", p: "/ˈkɑlɪdʒ/", pp: "có-ledj", s: ["col", "lege"]},
  {w: "high school", t: "ensino médio", p: "/haɪ skul/", pp: "rai scul", s: ["high", " school"]},
  {w: "course", t: "curso", p: "/kɔrs/", pp: "córs", s: ["course"]},
  {w: "task", t: "tarefa", p: "/tæsk/", pp: "tésk", s: ["task"]},
  {w: "meeting", t: "reunião", p: "/ˈmitɪŋ/", pp: "mí-tin", s: ["meet", "ing"]},
  {w: "exam", t: "exame, prova", p: "/ɪɡˈzæm/", pp: "ig-zém", s: ["ex", "am"]},
  {w: "business", t: "negócios", p: "/ˈbɪznɪs/", pp: "bíz-nes", s: ["bu", "si", "ness"]},
  {w: "semester", t: "semestre", p: "/səˈmɛstər/", pp: "se-més-ter", s: ["se", "mes", "ter"]},
  {w: "hour", t: "hora", p: "/ˈaʊər/", pp: "áu-er", s: ["hour"]},
  {w: "minute", t: "minuto", p: "/ˈmɪnɪt/", pp: "mí-net", s: ["mi", "nute"]},
  {w: "deadline", t: "prazo", p: "/ˈdɛdˌlaɪn/", pp: "déd-lain", s: ["dead", "line"]},
  {w: "next", t: "próximo, seguinte", p: "/nɛkst/", pp: "nékst", s: ["next"]},
  {w: "everything", t: "tudo", p: "/ˈɛvriˌθɪŋ/", pp: "é-vri-thin", s: ["e", "ve", "ry", "thing"]},
  {w: "great", t: "ótimo(a)", p: "/ɡreɪt/", pp: "greit", s: ["great"]},
  {w: "I start a new course this morning.", t: "Eu começo um curso novo esta manhã.", p: "/aɪ stɑrt ə nu kɔrs ðɪs ˈmɔrnɪŋ/", pp: "ai start a niu cors díz mór-nin", s: ["I", " start", " a", " new", " course", " this", " mor", "ning."]},
  {w: "I do my homework on weekends.", t: "Eu faço minha lição de casa nos fins de semana.", p: "/aɪ du maɪ ˈhoʊmˌwɜrk ɑn ˈwikˌɛndz/", pp: "ai du mai rôum-uãrk on uí-kends", s: ["I", " do", " my", " home", "work", " on", " week", "ends."]},
  {w: "Let's start!", t: "Vamos começar!", p: "/lɛts stɑrt/", pp: "léts start", s: ["Let's", " start!"]},
  {w: "I start college this year.", t: "Eu começo a faculdade este ano.", p: "/aɪ stɑrt ˈkɑlɪdʒ ðɪs jɪr/", pp: "ai start có-ledj díz ír", s: ["I", " start", " col", "lege", " this", " year."]},
  {w: "We have to start the meeting now.", t: "Nós temos que começar a reunião agora.", p: "/wi hæv tə stɑrt ðə ˈmitɪŋ naʊ/", pp: "uí rév tchu start dâ mí-tin náu", s: ["We", " have", " to", " start", " the", " meet", "ing", " now."]},
  {w: "They want to start the course next semester.", t: "Eles querem começar o curso no próximo semestre.", p: "/ðeɪ wɑnt tə stɑrt ðə kɔrs nɛkst səˈmɛstər/", pp: "dêi uánt tchu start dâ cors nékst se-més-ter", s: ["They", " want", " to", " start", " the", " course", " next", " se", "mes", "ter."]},
  {w: "I don't want to study business in college.", t: "Eu não quero estudar negócios na faculdade.", p: "/aɪ doʊnt wɑnt tə ˈstʌdi ˈbɪznɪs ɪn ˈkɑlɪdʒ/", pp: "ai dôunt uánt tchu stâ-di bíz-nes in có-ledj", s: ["I", " don't", " want", " to", " stu", "dy", " bu", "si", "ness", " in", " col", "lege."]},
  {w: "They don't need to start the project this week.", t: "Eles não precisam começar o projeto esta semana.", p: "/ðeɪ doʊnt nid tə stɑrt ðə ˈprɑdʒɛkt ðɪs wik/", pp: "dêi dôunt nid tchu start dâ pró-dject díz uík", s: ["They", " don't", " need", " to", " start", " the", " pro", "ject", " this", " week."]},
  {w: "Do you have a minute?", t: "Você tem um minuto?", p: "/du ju hæv ə ˈmɪnɪt/", pp: "du iu rév a mí-net", s: ["Do", " you", " have", " a", " mi", "nute?"]},
  {w: "Do we have a deadline for the project?", t: "Nós temos um prazo para o projeto?", p: "/du wi hæv ə ˈdɛdˌlaɪn fɔr ðə ˈprɑdʒɛkt/", pp: "du uí rév a déd-lain for dâ pró-dject", s: ["Do", " we", " have", " a", " dead", "line", " for", " the", " pro", "ject?"]},
  {w: "Do they have a deadline for the project?", t: "Eles têm um prazo para terminar essa tarefa aqui?", p: "/du ðeɪ hæv ə ˈdɛdˌlaɪn fɔr ðə ˈprɑdʒɛkt/", pp: "du dêi rév a déd-lain for dâ pró-dject", s: ["Do", " they", " have", " a", " dead", "line", " for", " the", " pro", "ject?"]},
  {w: "They start college tomorrow.", t: "Eles começam a faculdade amanhã.", p: "/ðeɪ stɑrt ˈkɑlɪdʒ təˈmɑroʊ/", pp: "dêi start có-ledj tu-mó-rou", s: ["They", " start", " col", "lege", " to", "mor", "row."]},
  {w: "We start college together tomorrow.", t: "Nós começamos a faculdade juntos amanhã.", p: "/wi stɑrt ˈkɑlɪdʒ təˈɡɛðər təˈmɑroʊ/", pp: "uí start có-ledj tu-gué-der tu-mó-rou", s: ["We", " start", " col", "lege", " to", "ge", "ther", " to", "mor", "row."]},
  {w: "They have two hours to finish the task.", t: "Eles têm duas horas para terminar a tarefa.", p: "/ðeɪ hæv tu ˈaʊərz tə ˈfɪnɪʃ ðə tæsk/", pp: "dêi rév tchu áu-erz tchu fí-nix dâ tésk", s: ["They", " have", " two", " hours", " to", " fi", "nish", " the", " task."]},
  {w: "We have to start the meeting in five minutes.", t: "Nós temos que começar a reunião em cinco minutos.", p: "/wi hæv tə stɑrt ðə ˈmitɪŋ ɪn faɪv ˈmɪnɪts/", pp: "uí rév tchu start dâ mí-tin in fáiv mí-nets", s: ["We", " have", " to", " start", " the", " meet", "ing", " in", " five", " mi", "nutes."]},
  {w: "They have a lot of projects for next year.", t: "Eles têm muitos projetos para o próximo ano.", p: "/ðeɪ hæv ə lɑt ʌv ˈprɑdʒɛkts fɔr nɛkst jɪr/", pp: "dêi rév a lót ov pró-djects for nékst ír", s: ["They", " have", " a", " lot", " of", " pro", "jects", " for", " next", " year."]},
  {w: "I finish college next semester.", t: "Eu termino a faculdade no próximo semestre.", p: "/aɪ ˈfɪnɪʃ ˈkɑlɪdʒ nɛkst səˈmɛstər/", pp: "ai fí-nix có-ledj nékst se-més-ter", s: ["I", " fi", "nish", " col", "lege", " next", " se", "mes", "ter."]},
  {w: "We don't have business class in college.", t: "Nós não temos aula de negócios na faculdade.", p: "/wi doʊnt hæv ˈbɪznɪs klæs ɪn ˈkɑlɪdʒ/", pp: "uí dôunt rév bíz-nes clés in có-ledj", s: ["We", " don't", " have", " bu", "si", "ness", " class", " in", " col", "lege."]},
  {w: "I don't need to finish my homework this afternoon.", t: "Eu não preciso terminar minha lição de casa esta tarde.", p: "/aɪ doʊnt nid tə ˈfɪnɪʃ maɪ ˈhoʊmˌwɜrk ðɪs ˌæftərˈnun/", pp: "ai dôunt nid tchu fí-nix mai rôum-uãrk díz áf-ter-nun", s: ["I", " don't", " need", " to", " fi", "nish", " my", " home", "work", " this", " af", "ter", "noon."]},
  {w: "Do you have an English exam tomorrow?", t: "Você tem uma prova de inglês amanhã?", p: "/du ju hæv ən ˈɪŋɡlɪʃ ɪɡˈzæm təˈmɑroʊ/", pp: "du iu rév én ín-glix ig-zém tu-mó-rou", s: ["Do", " you", " have", " an", " En", "glish", " ex", "am", " to", "mor", "row?"]},
  {w: "Do we need more money to finish the project?", t: "Nós precisamos de mais dinheiro para terminar o projeto?", p: "/du wi nid mɔr ˈmʌni tə ˈfɪnɪʃ ðə ˈprɑdʒɛkt/", pp: "du uí nid mór mâ-ni tchu fí-nix dâ pró-dject", s: ["Do", " we", " need", " more", " mo", "ney", " to", " fi", "nish", " the", " pro", "ject?"]},
  {w: "Do they know everything about that subject?", t: "Eles sabem tudo sobre esse assunto?", p: "/du ðeɪ noʊ ˈɛvriˌθɪŋ əˈbaʊt ðæt ˈsʌbdʒɪkt/", pp: "du dêi nôu é-vri-thin a-báut dét sâb-dject", s: ["Do", " they", " know", " e", "ve", "ry", "thing", " a", "bout", " that", " sub", "ject?"]},
  {w: "What task do you need to start?", t: "Qual tarefa você precisa começar?", p: "/wʌt tæsk du ju nid tə stɑrt/", pp: "uát tésk du iu nid tchu start", s: ["What", " task", " do", " you", " need", " to", " start?"]},
  {w: "in a minute", t: "em um minuto", p: "/ɪn ə ˈmɪnɪt/", pp: "in a mí-net", s: ["in", " a", " mi", "nute"]},
  {w: "in an hour", t: "em uma hora", p: "/ɪn ən ˈaʊər/", pp: "in én áu-er", s: ["in", " an", " hour"]},
  {w: "in five minutes", t: "em cinco minutos", p: "/ɪn faɪv ˈmɪnɪts/", pp: "in fáiv mí-nets", s: ["in", " five", " mi", "nutes"]},
  {w: "in two hours", t: "em duas horas", p: "/ɪn tu ˈaʊərz/", pp: "in tchu áu-erz", s: ["in", " two", " hours"]},
  {w: "What do you...?", t: "O que você...?", p: "/wʌt du ju/", pp: "uát du iu", s: ["What", " do", " you...?"]},
  {w: "Where do they...?", t: "Onde eles...?", p: "/wɛr du ðeɪ/", pp: "uér du dêi", s: ["Where", " do", " they...?"]},
  {w: "What time do you...?", t: "Que horas você...?", p: "/wʌt taɪm du ju/", pp: "uát táim du iu", s: ["What", " time", " do", " you...?"]},
  {w: "to go to the meeting", t: "ir para a reunião", p: "/tə ɡoʊ tə ðə ˈmitɪŋ/", pp: "tchu gôu tchu dâ mí-tin", s: ["to", " go", " to", " the", " meet", "ing"]},
  {w: "Where do they go to the meeting?", t: "Onde eles vão para a reunião?", p: "/wɛr du ðeɪ ɡoʊ tə ðə ˈmitɪŋ/", pp: "uér du dêi gôu tchu dâ mí-tin", s: ["Where", " do", " they", " go", " to", " the", " meet", "ing?"]},
  {w: "What time do you go to the meeting?", t: "A que horas você vai para a reunião?", p: "/wʌt taɪm du ju ɡoʊ tə ðə ˈmitɪŋ/", pp: "uát táim du iu gôu tchu dâ mí-tin", s: ["What", " time", " do", " you", " go", " to", " the", " meet", "ing?"]},
  {w: "to speak at the meeting", t: "falar na reunião", p: "/tə spik æt ðə ˈmitɪŋ/", pp: "tchu spik ét dâ mí-tin", s: ["to", " speak", " at", " the", " meet", "ing"]},
  {w: "Excuse me! May I come in?", t: "Com licença! Posso entrar?", p: "/ɪkˈkjuz mi | meɪ aɪ kʌm ɪn/", pp: "iks-kiúz mí, mêi ai câm in", s: ["Ex", "cuse", " me!", " May", " I", " come", " in?"]},
  {w: "Sure! Come in!", t: "Claro! Entre!", p: "/ʃʊr | kʌm ɪn/", pp: "xur, câm in", s: ["Sure!", " Come", " in!"]},
  {w: "I need to study for an exam.", t: "Eu preciso estudar para uma prova.", p: "/aɪ nid tə ˈstʌdi fɔr ən ɪɡˈzæm/", pp: "ai nid tchu stâ-di for én ig-zém", s: ["I", " need", " to", " stu", "dy", " for", " an", " ex", "am."]}
];

let typesData = fs.readFileSync('types.ts', 'utf8');

// Only add if it doesn't exist
if (!typesData.includes("'start_finish'")) {
    typesData = typesData.replace(/export type TopicId =([^;]+);/, function(match, group1) {
        return "export type TopicId =" + group1 + "  | 'start_finish';";
    });
    
    typesData = typesData.replace(/];/, "  {\n    id: 'start_finish',\n    label: '31 Começar & Terminar',\n    isStatic: true\n  }\n];");
    fs.writeFileSync('types.ts', typesData);
}

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

if (!staticDecksData.includes('export const START_FINISH_DECK')) {
    let newDeckStr = "\n\nexport const START_FINISH_DECK: FlashcardData[] = [\n";
    rawDeck.forEach(function(c, i) {
      newDeckStr += "  {\n";
      newDeckStr += "    id: 'start_finish_" + (i + 1) + "',\n";
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
    
    // Inject at the end but register it properly in STATIC_DECKS dictionary
    staticDecksData = staticDecksData.replace(/export const STATIC_DECKS: Record<string, any> = \{/, "export const STATIC_DECKS: Record<string, any> = {\n  start_finish: { en: START_FINISH_DECK },");
    
    staticDecksData = staticDecksData + newDeckStr;
    fs.writeFileSync('data/staticDecks.ts', staticDecksData);
    console.log('Deck rebuilt successfully with specific phonetics and syllables!');
} else {
    console.log('Deck already exists.');
}
