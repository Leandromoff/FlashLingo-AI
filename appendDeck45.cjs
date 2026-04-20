const fs = require('fs');

const rawDeck = [
  {w: "to open", t: "abrir", p: "/tu ˈoʊpən/", pp: "tchu ôu-pen", s: ["to", " o", "pen"]},
  {w: "to close", t: "fechar", p: "/tu kloʊz/", pp: "tchu clôuz", s: ["to", " close"]},

  {w: "bottle", t: "garrafa", p: "/ˈbɑtəl/", pp: "bá-tou", s: ["bot", "tle"]},
  {w: "can", t: "lata", p: "/kæn/", pp: "kén", s: ["can"]},
  {w: "spoon", t: "colher", p: "/spun/", pp: "spun", s: ["spoon"]},
  {w: "fork", t: "garfo", p: "/fɔrk/", pp: "fórc", s: ["fork"]},
  {w: "knife", t: "faca", p: "/naɪf/", pp: "naif", s: ["knife"]},
  {w: "napkin", t: "guardanapo", p: "/ˈnæpkɪn/", pp: "nép-kin", s: ["nap", "kin"]},
  {w: "straw", t: "canudo, canudinho", p: "/strɔ/", pp: "stró", s: ["straw"]},
  {w: "milkshake", t: "milk-shake", p: "/ˈmɪlkˌʃeɪk/", pp: "milc-xêic", s: ["milk", "shake"]},
  {w: "snack", t: "lanche", p: "/snæk/", pp: "snéc", s: ["snack"]},
  {w: "snack bar", t: "lanchonete", p: "/ˈsnæk bɑr/", pp: "snéc bar", s: ["snack", " bar"]},
  {w: "ice cream parlor", t: "sorveteria", p: "/aɪs krim ˈpɑrlər/", pp: "ais crim par-lãr", s: ["ice", " cream", " par", "lor"]},
  {w: "different", t: "diferente", p: "/ˈdɪfərənt/", pp: "dí-frent", s: ["dif", "fe", "rent"]},
  {w: "delicious", t: "delicioso", p: "/dɪˈlɪʃəs/", pp: "di-lí-xãs", s: ["de", "li", "cious"]},
  {w: "something", t: "algo, alguma coisa", p: "/ˈsʌmθɪŋ/", pp: "sâm-thin", s: ["some", "thing"]},
  {w: "anything", t: "algo, alguma coisa, nada", p: "/ˈɛniˌθɪŋ/", pp: "é-ni-thin", s: ["a", "ny", "thing"]},

  {w: "I want to go out tonight.", t: "Eu quero sair hoje à noite.", p: "/aɪ wɑnt tə ɡoʊ aʊt təˈnaɪt./", pp: "ai uónt tchu gôu aút tchu-nait.", s: ["I", " want", " to", " go", " out", " to", "night."]},
  {w: "We work out every other day.", t: "Nós fazemos exercícios dia sim, dia não.", p: "/wi wɜrk aʊt ˈɛvri ˈʌðər deɪ./", pp: "uí uãrk aút é-vri â-der dêi.", s: ["We", " work", " out", " e", "very", " o", "ther", " day."]},
  {w: "What do you want to order?", t: "O que você quer pedir?", p: "/wɑt du ju wɑnt tu ˈɔrdər?/", pp: "uát du iu uónt tchu ór-der?", s: ["What", " do", " you", " want", " to", " or", "der?"]},
  
  {w: "I need to eat something.", t: "Eu preciso comer alguma coisa.", p: "/aɪ nid tə it ˈsʌmθɪŋ./", pp: "ai nid tchu it sâm-thin.", s: ["I", " need", " to", " eat", " some", "thing."]},
  {w: "We want to give you something for your birthday.", t: "Nós queremos te dar algo pelo seu aniversário.", p: "/wi wɑnt tə ɡɪv ju ˈsʌmθɪŋ fɔr jʊr ˈbɜrθˌdeɪ./", pp: "uí uónt tchu giv iu sâm-thin fór iór bãrth-dêi.", s: ["We", " want", " to", " give", " you", " some", "thing", " for", " your", " birth", "day."]},
  {w: "I don't want anything to drink, thanks.", t: "Eu não quero nada para beber, obrigado.", p: "/aɪ doʊnt wɑnt ˈɛniˌθɪŋ tə drɪŋk, θæŋks./", pp: "ai dôunt uónt é-ni-thin tchu drinc, théncs.", s: ["I", " don't", " want", " a", "ny", "thing", " to", " drink,", " thanks."]},
  {w: "She doesn't want to buy anything.", t: "Ela não quer comprar nada.", p: "/ʃi ˈdʌzənt wɑnt tə baɪ ˈɛniˌθɪŋ./", pp: "xi dâ-zont uónt tchu bai é-ni-thin.", s: ["She", " doe", "sn't", " want", " to", " buy", " a", "ny", "thing."]},
  {w: "Do you have anything to study today?", t: "Você tem alguma coisa para estudar hoje?", p: "/du ju hæv ˈɛniˌθɪŋ tə ˈstʌdi təˈdeɪ?/", pp: "du iu rév é-ni-thin tchu stâ-di tchu-dêi?", s: ["Do", " you", " have", " a", "ny", "thing", " to", " stu", "dy", " to", "day?"]},
  {w: "Do they want anything for dessert?", t: "Eles querem alguma coisa de sobremesa?", p: "/du ðeɪ wɑnt ˈɛniˌθɪŋ fɔr dɪˈzɜrt?/", pp: "du dêi uónt é-ni-thin for di-zãrt?", s: ["Do", " they", " want", " a", "ny", "thing", " for", " des", "sert?"]},

  {w: "The snack bar opens at noon.", t: "A lanchonete abre ao meio-dia.", p: "/ðə snæk bɑr ˈoʊpənz æt nun./", pp: "dâ snéc bar ôu-pens ét nun.", s: ["The", " snack", " bar", " o", "pens", " at", " noon."]},
  {w: "Does it open on weekends too?", t: "Ele abre aos finais de semana também?", p: "/dʌz ɪt ˈoʊpən ɑn ˈwikɛndz tu?/", pp: "dâs it ôu-pen an ui-kends tu?", s: ["Does", " it", " o", "pen", " on", " week", "ends", " too?"]},
  {w: "The school opens at 9:00 AM.", t: "A escola abre às 9h da manhã.", p: "/ðə skul ˈoʊpənz æt naɪn eɪ-ɛm./", pp: "dâ scul ôu-pens ét nain êi-ém.", s: ["The", " school", " o", "pens", " at", " 9:00", " AM."]},
  {w: "The snack bar opens at 9:00 AM.", t: "A lanchonete abre às 9h da manhã.", p: "/ðə snæk bɑr ˈoʊpənz æt naɪn eɪ-ɛm./", pp: "dâ snéc bar ôu-pens ét nain êi-ém.", s: ["The", " snack", " bar", " o", "pens", " at", " 9:00", " AM."]},
  {w: "The gym doesn't close on Sundays.", t: "A academia não fecha aos domingos.", p: "/ðə dʒɪm ˈdʌzənt kloʊz ɑn ˈsʌndeɪz./", pp: "dâ djin dâ-zônt clôuz an sân-dêis.", s: ["The", " gym", " doe", "sn't", " close", " on", " Sun", "days."]},
  {w: "Do they close the museum early on Tuesdays?", t: "Eles fecham o museu cedo às terças-feiras?", p: "/du ðeɪ kloʊz ðə mjuˈziəm ˈɜrli ɑn ˈtuzdeɪz?/", pp: "du dêi clôuz dâ miu-zí-em ãr-li an tús-dêis?", s: ["Do", " they", " close", " the", " mu", "se", "um", " ear", "ly", " on", " Tues", "days?"]},
  {w: "What time does it open?", t: "A que horas abre?", p: "/wɑt taɪm dʌz ɪt ˈoʊpən?/", pp: "uát taim dâs it ôu-pen?", s: ["What", " time", " does", " it", " o", "pen?"]},
  {w: "Do you need anything?", t: "Você precisa de alguma coisa?", p: "/du ju nid ˈɛniˌθɪŋ?/", pp: "du iu nid é-ni-thin?", s: ["Do", " you", " need", " a", "ny", "thing?"]},
  {w: "I don't need anything, thanks.", t: "Eu não preciso de nada, obrigado.", p: "/aɪ doʊnt nid ˈɛniˌθɪŋ, θæŋks./", pp: "ai dôunt nid é-ni-thin, théncs.", s: ["I", " don't", " need", " a", "ny", "thing,", " thanks."]},
  {w: "Are you thirsty? Do you want something to drink?", t: "Você está com sede? Quer alguma coisa para beber?", p: "/ɑr ju ˈθɜrsti? du ju wɑnt ˈsʌmθɪŋ tə drɪŋk?/", pp: "ar iu thãrs-ti? du iu uónt sâm-thin tchu drinc?", s: ["Are", " you", " thirs", "ty?", " Do", " you", " want", " some", "thing", " to", " drink?"]},
  {w: "I'm hungry. I want something to eat.", t: "Estou com fome. Eu quero algo para comer.", p: "/aɪm ˈhʌŋɡri. aɪ wɑnt ˈsʌmθɪŋ tu it./", pp: "aim rân-gri. ai uónt sâm-thin tchu it.", s: ["I'm", " hun", "gry.", " I", " want", " some", "thing", " to", " eat."]},
  {w: "Open this bottle for me, please.", t: "Abra esta garrafa para mim, por favor.", p: "/ˈoʊpən ðɪs ˈbɑtəl fɔr mi, pliz./", pp: "ôu-pen díz bá-tou fór mi, plis.", s: ["O", "pen", " this", " bot", "tle", " for", " me,", " please."]},
  {w: "I need a fork to eat my cake.", t: "Eu preciso de um garfo para comer meu bolo.", p: "/aɪ nid ə fɔrk tu it maɪ keɪk./", pp: "ai nid a fórc tchu it mai cêic.", s: ["I", " need", " a", " fork", " to", " eat", " my", " cake."]},
  
  {w: "to have breakfast", t: "tomar café da manhã", p: "/tə hæv ˈbrɛkfəst/", pp: "tchu rév bréc-fast", s: ["to", " have", " break", "fast"]},
  {w: "to have lunch", t: "almoçar", p: "/tə hæv lʌntʃ/", pp: "tchu rév lântch", s: ["to", " have", " lunch"]},
  {w: "to have a snack", t: "fazer um lanche", p: "/tə hæv ə snæk/", pp: "tchu rév a snéc", s: ["to", " have", " a", " snack"]},
  {w: "to have dinner", t: "jantar", p: "/tə hæv ˈdɪnər/", pp: "tchu rév dí-ner", s: ["to", " have", " din", "ner"]},
  {w: "to have dessert", t: "comer sobremesa", p: "/tə hæv dɪˈzɜrt/", pp: "tchu rév di-zãrt", s: ["to", " have", " des", "sert"]},
  {w: "to have some soup", t: "tomar um pouco de sopa", p: "/tə hæv sʌm sup/", pp: "tchu rév sâm sup", s: ["to", " have", " some", " soup"]},
  {w: "to have milkshake", t: "tomar milkshake", p: "/tə hæv ˈmɪlkˌʃeɪk/", pp: "tchu rév milc-xêic", s: ["to", " have", " milk", "shake"]},
  {w: "to have ice cream", t: "tomar sorvete", p: "/tə hæv aɪs krim/", pp: "tchu rév aís crim", s: ["to", " have", " ice", " cream"]},
  
  {w: "Are you ready to order?", t: "Você está pronto para pedir?", p: "/ɑr ju ˈrɛdi tu ˈɔrdər?/", pp: "ar iu ré-di tchu ór-der?", s: ["Are", " you", " rea", "dy", " to", " or", "der?"]},
  {w: "Yes, I'll have a cheeseburger and fries.", t: "Sim, eu vou querer um cheeseburger e batatas fritas.", p: "/jɛs, aɪl hæv ə ˈtʃizˌbɜrɡər ænd fraɪz./", pp: "iés, ail rév a tchis-bãr-guer énd frais.", s: ["Yes,", " I'", "ll", " have", " a", " cheese", "bur", "ger", " and", " fries."]},
  {w: "knife → knives", t: "faca → facas (plural irregular)", p: "/naɪf → naɪvz/", pp: "naif → naivz", s: ["knife", " →", " knives"]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_OPEN_CLOSE_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_open_close_' + " + (i + 1) + ",\n";
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
  'to_make_give: {',
  'to_open_close: {\n    en: TO_OPEN_CLOSE_DECK\n  },\n  to_make_give: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck appended successfully');
