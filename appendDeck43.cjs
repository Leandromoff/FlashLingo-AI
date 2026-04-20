const fs = require('fs');

const rawDeck = [
  {w: "to make", t: "fazer", p: "/tə meɪk/", pp: "tchu mêik", s: ["to", " make"]},
  {w: "to give", t: "dar", p: "/tə ɡɪv/", pp: "tchu giv", s: ["to", " give"]},

  {w: "dish", t: "prato", p: "/dɪʃ/", pp: "díx", s: ["dish"]},
  {w: "hamburger", t: "hambúrguer", p: "/ˈhæmbɜrɡər/", pp: "rém-bãr-guer", s: ["ham", "bur", "ger"]},
  {w: "pizza", t: "pizza", p: "/ˈpitsə/", pp: "pít-tsa", s: ["piz", "za"]},
  {w: "popcorn", t: "pipoca", p: "/ˈpɑpkɔrn/", pp: "páp-corn", s: ["pop", "corn"]},
  {w: "cake", t: "bolo", p: "/keɪk/", pp: "cêic", s: ["cake"]},
  {w: "ice cream", t: "sorvete", p: "/aɪs krim/", pp: "ais crim", s: ["ice", " cream"]},
  {w: "fast food", t: "comida rápida", p: "/fæst fud/", pp: "fást fud", s: ["fast", " food"]},
  {w: "tip", t: "gorjeta, dica", p: "/tɪp/", pp: "tip", s: ["tip"]},
  {w: "waiter", t: "garçom", p: "/ˈweɪtər/", pp: "uêi-tãr", s: ["wai", "ter"]},
  {w: "waitress", t: "garçonete", p: "/ˈweɪtrəs/", pp: "uêi-trés", s: ["wai", "tress"]},
  {w: "favorite", t: "favorito(a)", p: "/ˈfeɪvərɪt/", pp: "fêi-vo-rit", s: ["fa", "vo", "rite"]},
  {w: "hot", t: "quente, calor", p: "/hɑt/", pp: "rát", s: ["hot"]},
  {w: "cold", t: "frio(a)", p: "/koʊld/", pp: "côuld", s: ["cold"]},
  {w: "our", t: "nosso(s), nossa(s)", p: "/aʊər/", pp: "áur", s: ["our"]},
  {w: "their", t: "deles, delas", p: "/ðɛr/", pp: "dér", s: ["their"]},
  {w: "any", t: "algum(ns), alguma(s), nenhum(a), qualquer", p: "/ˈɛni/", pp: "é-ni", s: ["a", "ny"]},

  {w: "This is the best restaurant in the city.", t: "Este é o melhor restaurante da cidade.", p: "/ðɪs ɪz ðə bɛst ˈrɛstərɑnt ɪn ðə ˈsɪti./", pp: "díz iz dâ bést rés-tã-rãnt in dâ sí-ti.", s: ["This", " is", " the", " best", " res", "tau", "rant", " in", " the", " ci", "ty."]},
  {w: "I want a slice of pie for dessert.", t: "Eu quero uma fatia de torta de sobremesa.", p: "/aɪ wɑnt ə slaɪs əv paɪ fɔr dɪˈzɜrt./", pp: "ai uónt a slais óv pai for di-zãrt.", s: ["I", " want", " a", " slice", " of", " pie", " for", " des", "sert."]},

  {w: "I have some friends in Germany.", t: "Eu tenho alguns amigos na Alemanha.", p: "/aɪ hæv sʌm frɛndz ɪn ˈdʒɜrməni./", pp: "ai rév sâm frends in djãr-ma-ni.", s: ["I", " have", " some", " friends", " in", " Ger", "ma", "ny."]},
  {w: "Some people don't like to eat fast food.", t: "Algumas pessoas não gostam de comer comida rápida.", p: "/sʌm ˈpipəl doʊnt laɪk tə it fæst fud./", pp: "sâm pí-pol dôunt laic tchu it fást fud.", s: ["Some", " peo", "ple", " don't", " like", " to", " eat", " fast", " food."]},
  {w: "I don't have any money here.", t: "Eu não tenho nenhum dinheiro aqui.", p: "/aɪ doʊnt hæv ˈɛni ˈmʌni hɪr./", pp: "ai dôunt rév é-ni mâ-ni rir.", s: ["I", " don't", " have", " a", "ny", " mo", "ney", " here."]},
  {w: "He still doesn't have any children.", t: "Ele ainda não tem nenhum filho.", p: "/hi stɪl ˈdʌzənt hæv ˈɛni ˈtʃɪldrən./", pp: "ri stil dâ-zont rév é-ni tchil-dren.", s: ["He", " still", " doe", "sn't", " have", " a", "ny", " chil", "dren."]},
  {w: "Do you have any tips?", t: "Você tem alguma dica?", p: "/du ju hæv ˈɛni tɪps?/", pp: "du iu rév é-ni tips?", s: ["Do", " you", " have", " a", "ny", " tips?"]},
  {w: "Do you know any good TV series?", t: "Você conhece alguma série de TV boa?", p: "/du ju noʊ ˈɛni ɡʊd tiˈvi ˈsɪriz?/", pp: "du iu nôu é-ni gud ti-vi si-ris?", s: ["Do", " you", " know", " a", "ny", " good", " TV", " se", "ries?"]},
  {w: "Do you want some popcorn?", t: "Você quer um pouco de pipoca?", p: "/du ju wɑnt sʌm ˈpɑpkɔrn?/", pp: "du iu uónt sâm páp-corn?", s: ["Do", " you", " want", " some", " pop", "corn?"]},

  {w: "Do you know how to make chocolate popcorn?", t: "Você sabe como fazer pipoca de chocolate?", p: "/du ju noʊ haʊ tə meɪk ˈtʃɔklət ˈpɑpkɔrn?/", pp: "du iu nôu ráu tchu mêic tchók-lot páp-corn?", s: ["Do", " you", " know", " how", " to", " make", " cho", "co", "late", " pop", "corn?"]},
  {w: "I want to make your favorite dish tonight.", t: "Eu quero fazer o seu prato favorito esta noite.", p: "/aɪ wɑnt tə meɪk jʊr ˈfeɪvərɪt dɪʃ təˈnaɪt./", pp: "ai uónt tchu mêic iór fêi-vo-rit díx tchu-nait.", s: ["I", " want", " to", " make", " your", " fa", "vo", "rite", " dish", " to", "night."]},
  {w: "I want to give you this book.", t: "Eu quero te dar este livro.", p: "/aɪ wɑnt tə ɡɪv ju ðɪs bʊk./", pp: "ai uónt tchu giv iu díz buc.", s: ["I", " want", " to", " give", " you", " this", " book."]},
  {w: "I want to give a gift to my mother.", t: "Eu quero dar um presente para minha mãe.", p: "/aɪ wɑnt tə ɡɪv ə ɡɪft tə maɪ ˈmʌðər./", pp: "ai uónt tchu giv a gift tchu mai mâ-der.", s: ["I", " want", " to", " give", " a", " gift", " to", " my", " mo", "ther."]},
  {w: "Do you usually give tips to the waiters?", t: "Você costuma dar gorjetas aos garçons?", p: "/du ju ˈjuʒuəli ɡɪv tɪps tə ðə ˈweɪtərz?/", pp: "du iu iú-ju-a-li giv tips tchu dâ uêi-tãrs?", s: ["Do", " you", " u", "sual", "ly", " give", " tips", " to", " the", " wai", "ters?"]},
  {w: "I want some tomato sauce please.", t: "Eu quero um pouco de molho de tomate por favor.", p: "/aɪ wɑnt sʌm təˈmeɪtoʊ sɔs pliz./", pp: "ai uónt sâm tchu-mêi-tôu sós plis.", s: ["I", " want", " some", " to", "ma", "to", " sauce", " please."]},
  {w: "We don't have any food. Let's go to the grocery store.", t: "Nós não temos nenhuma comida. Vamos ao supermercado.", p: "/wi doʊnt hæv ˈɛni fud. lɛts ɡoʊ tə ðə ˈɡroʊsəri stɔr./", pp: "uí dôunt rév é-ni fud. léts gôu tchu dâ grôu-sã-ri stór.", s: ["We", " don't", " have", " a", "ny", " food.", " Let's", " go", " to", " the", " gro", "ce", "ry", " store."]},
  {w: "Do you have any salad?", t: "Você tem alguma salada?", p: "/du ju hæv ˈɛni ˈsæləd?/", pp: "du iu rév é-ni sé-lad?", s: ["Do", " you", " have", " a", "ny", " sa", "lad?"]},
  {w: "Do you want some coffee?", t: "Você quer um pouco de café?", p: "/du ju wɑnt sʌm ˈkɔfi?/", pp: "du iu uónt sâm có-fi?", s: ["Do", " you", " want", " some", " cof", "fee?"]},
  {w: "We clean our house every Friday.", t: "Nós limpamos nossa casa toda sexta-feira.", p: "/wi klin aʊər haʊs ˈɛvri ˈfraɪdeɪ./", pp: "uí clin áur ráus é-vri frai-dêi.", s: ["We", " clean", " our", " house", " e", "very", " Fri", "day."]},
  {w: "I love that place! Their food is very good.", t: "Eu amo aquele lugar! A comida deles é muito boa.", p: "/aɪ lʌv ðæt pleɪs! ðɛr fud ɪz ˈvɛri ɡʊd./", pp: "ai lâv dát plêis! dér fud iz vé-ri gud.", s: ["I", " love", " that", " place!", " Their", " food", " is", " ve", "ry", " good."]},

  {w: "to make a cake", t: "fazer um bolo", p: "/tə meɪk ə keɪk/", pp: "tchu mêic a cêic", s: ["to", " make", " a", " cake"]},
  {w: "to make popcorn", t: "fazer pipoca", p: "/tə meɪk ˈpɑpkɔrn/", pp: "tchu mêic páp-corn", s: ["to", " make", " pop", "corn"]},
  {w: "to make a dessert", t: "fazer uma sobremesa", p: "/tə meɪk ə dɪˈzɜrt/", pp: "tchu mêic a di-zãrt", s: ["to", " make", " a", " des", "sert"]},
  {w: "to make some coffee", t: "fazer (um pouco de) café", p: "/tə meɪk sʌm ˈkɔfi/", pp: "tchu mêic sâm có-fi", s: ["to", " make", " some", " cof", "fee"]},
  {w: "to make cookies", t: "fazer biscoitos", p: "/tə meɪk ˈkʊkiz/", pp: "tchu mêic cu-quis", s: ["to", " make", " coo", "kies"]},
  {w: "to make soup", t: "fazer sopa", p: "/tə meɪk sup/", pp: "tchu mêic sup", s: ["to", " make", " soup"]},
  {w: "to make friends", t: "fazer amigos", p: "/tə meɪk frɛndz/", pp: "tchu mêic frends", s: ["to", " make", " friends"]},

  {w: "May I see the menu, please?", t: "Posso ver o cardápio, por favor?", p: "/meɪ aɪ si ðə ˈmɛnju, pliz?/", pp: "mêi ai si dâ mé-niu, plis?", s: ["May", " I", " see", " the", " me", "nu,", " please?"]},
  {w: "Sure, here you are.", t: "Claro, aqui está.", p: "/ʃʊr, hɪr ju ɑr./", pp: "xûr, rir iu ar.", s: ["Sure,", " here", " you", " are."]},
  {w: "Let's go to a pizza place!", t: "Vamos a uma pizzaria!", p: "/lɛts ɡoʊ tə ə ˈpitsə pleɪs!/", pp: "léts gôu tchu a pít-tsa plêis!", s: ["Let's", " go", " to", " a", " piz", "za", " place!"]}
];

let staticDecksData = fs.readFileSync('data/staticDecks.ts', 'utf8');

let newDeckStr = "\n\nexport const TO_MAKE_GIVE_DECK: FlashcardData[] = [\n";
rawDeck.forEach(function(c, i) {
  newDeckStr += "  {\n";
  newDeckStr += "    id: 'to_make_give_' + " + (i + 1) + ",\n";
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
  'to_be_interrogative: {',
  'to_make_give: {\n    en: TO_MAKE_GIVE_DECK\n  },\n  to_be_interrogative: {'
);

fs.writeFileSync('data/staticDecks.ts', staticDecksData);
console.log('Deck appended successfully');
