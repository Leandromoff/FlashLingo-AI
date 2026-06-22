const fs = require('fs');

const rawText = `this — este / isto (aqui, perto)
IPA: /ðɪs/ · PT: [dhís]
that — esse / aquele (lá, longe)
IPA: /ðæt/ · PT: [dhét]
these — estes (aqui, perto, plural)
IPA: /ðiːz/ · PT: [dhíz]
those — esses / aqueles (lá, longe, plural)
IPA: /ðoʊz/ · PT: [dhôuz]
here — aqui
IPA: /hɪr/ · PT: [rrír]
there — ali / lá
IPA: /ðɛr/ · PT: [dhér]
a monster — um monstro
IPA: /ə ˈmɑːnstər/ · PT: [a mánster]
monsters — monstros
IPA: /ˈmɑːnstərz/ · PT: [mánsterz]
This is a monster. — Este é um monstro.
IPA: /ðɪs ɪz ə ˈmɑːnstər/ · PT: [dhís iz a mánster]
That is a monster. — Aquele é um monstro.
IPA: /ðæt ɪz ə ˈmɑːnstər/ · PT: [dhét iz a mánster]
These are monsters. — Estes são monstros.
IPA: /ðiːz ɑːr ˈmɑːnstərz/ · PT: [dhíz ár mánsterz]
Those are monsters. — Aqueles são monstros.
IPA: /ðoʊz ɑːr ˈmɑːnstərz/ · PT: [dhôuz ár mánsterz]
This is here. — Isto está aqui.
IPA: /ðɪs ɪz hɪr/ · PT: [dhís iz rrír]
That is there. — Aquilo está lá.
IPA: /ðæt ɪz ðɛr/ · PT: [dhét iz dhér]
this one — este aqui
IPA: /ðɪs wʌn/ · PT: [dhís uân]
that one — aquele ali
IPA: /ðæt wʌn/ · PT: [dhét uân]
Is this a monster? — Este é um monstro?
IPA: /ɪz ðɪs ə ˈmɑːnstər/ · PT: [iz dhís a mánster]
Is that a monster? — Aquele é um monstro?
IPA: /ɪz ðæt ə ˈmɑːnstər/ · PT: [iz dhét a mánster]
Are these monsters? — Estes são monstros?
IPA: /ɑːr ðiːz ˈmɑːnstərz/ · PT: [ár dhíz mánsterz]
Are those monsters? — Aqueles são monstros?
IPA: /ɑːr ðoʊz ˈmɑːnstərz/ · PT: [ár dhôuz mánsterz]
This isn't a monster. — Este não é um monstro.
IPA: /ðɪs ˈɪznt ə ˈmɑːnstər/ · PT: [dhís íznt a mánster]
That isn't a monster. — Aquele não é um monstro.
IPA: /ðæt ˈɪznt ə ˈmɑːnstər/ · PT: [dhét íznt a mánster]
These aren't monsters. — Estes não são monstros.
IPA: /ðiːz ˈɑːrnt ˈmɑːnstərz/ · PT: [dhíz árent mánsterz]
Those aren't monsters. — Aqueles não são monstros.
IPA: /ðoʊz ˈɑːrnt ˈmɑːnstərz/ · PT: [dhôuz árent mánsterz]
What is this? — O que é isto?
IPA: /wʌt ɪz ðɪs/ · PT: [uât iz dhís]

No mercado
26. This apple is fresh. — Esta maçã está fresca.
IPA: /ðɪs ˈæpl̩ ɪz frɛʃ/ · PT: [dhís épou iz fréch]
27. That apple is old. — Aquela maçã está velha.
IPA: /ðæt ˈæpl̩ ɪz oʊld/ · PT: [dhét épou iz ôuld]
28. These tomatoes are red. — Estes tomates estão vermelhos.
IPA: /ðiːz təˈmeɪtoʊz ɑːr rɛd/ · PT: [dhíz tomêitouz ár réd]
29. Those bananas are green. — Aquelas bananas estão verdes.
IPA: /ðoʊz bəˈnænəz ɑːr ɡriːn/ · PT: [dhôuz banénaz ár grín]
30. How much is this? — Quanto custa isto?
IPA: /haʊ mʌtʃ ɪz ðɪs/ · PT: [rráu mâtch iz dhís]

Comprando roupas
31. I like this shirt. — Eu gosto desta camisa.
IPA: /aɪ laɪk ðɪs ʃɜːrt/ · PT: [ái láik dhís chârt]
32. I don't like that jacket. — Eu não gosto daquela jaqueta.
IPA: /aɪ doʊnt laɪk ðæt ˈdʒækɪt/ · PT: [ái dôunt láik dhét djéket]
33. These shoes are nice. — Estes sapatos são bonitos.
IPA: /ðiːz ʃuːz ɑːr naɪs/ · PT: [dhíz chúz ár náis]
34. Those pants are too big. — Aquelas calças são grandes demais.
IPA: /ðoʊz pænts ɑːr tuː bɪɡ/ · PT: [dhôuz pénts ár tú bíg]
35. Can I try this on? — Posso experimentar isto?
IPA: /kæn aɪ traɪ ðɪs ɑːn/ · PT: [kén ái trái dhís ón]

No restaurante
36. This soup is hot. — Esta sopa está quente.
IPA: /ðɪs suːp ɪz hɑːt/ · PT: [dhís súp iz rrót]
37. That table is free. — Aquela mesa está livre.
IPA: /ðæt ˈteɪbl̩ ɪz friː/ · PT: [dhét têibou iz frí]
38. These forks are dirty. — Estes garfos estão sujos.
IPA: /ðiːz fɔːrks ɑːr ˈdɜːrti/ · PT: [dhíz fórks ár dârti]
39. Those drinks are mine. — Aquelas bebidas são minhas.
IPA: /ðoʊz drɪŋks ɑːr maɪn/ · PT: [dhôuz drínks ár máin]
40. I want this, please. — Eu quero isto, por favor.
IPA: /aɪ wɑːnt ðɪs pliːz/ · PT: [ái uánt dhís plíz]

Em casa / tarefas domésticas
41. This room is clean. — Este quarto está limpo.
IPA: /ðɪs ruːm ɪz kliːn/ · PT: [dhís rúm iz klín]
42. That window is open. — Aquela janela está aberta.
IPA: /ðæt ˈwɪndoʊ ɪz ˈoʊpən/ · PT: [dhét uíndou iz ôupan]
43. These towels are wet. — Estas toalhas estão molhadas.
IPA: /ðiːz ˈtaʊəlz ɑːr wɛt/ · PT: [dhíz táuelz ár uét]
44. Those dishes are clean. — Aqueles pratos estão limpos.
IPA: /ðoʊz ˈdɪʃɪz ɑːr kliːn/ · PT: [dhôuz díchiz ár klín]

Na escola / estudando
45. This book is interesting. — Este livro é interessante.
IPA: /ðɪs bʊk ɪz ˈɪntrəstɪŋ/ · PT: [dhís búk iz íntrestin]
46. That answer is correct. — Aquela resposta está correta.
IPA: /ðæt ˈænsər ɪz kəˈrɛkt/ · PT: [dhét énser iz korréct]
47. These notes are useful. — Estas anotações são úteis.
IPA: /ðiːz noʊts ɑːr ˈjuːsfl̩/ · PT: [dhíz nôuts ár iúsfou]

Saindo com amigos
48. This place is nice. — Este lugar é legal.
IPA: /ðɪs pleɪs ɪz naɪs/ · PT: [dhís plêis iz náis]
49. That song is great. — Aquela música é ótima.
IPA: /ðæt sɔːŋ ɪz ɡreɪt/ · PT: [dhét sóN iz grêit]
50. Those people are my friends. — Aquelas pessoas são meus amigos.
IPA: /ðoʊz ˈpiːpl̩ ɑːr maɪ frɛndz/ · PT: [dhôuz pípou ár mái fréndz]

Curtas e simples
51. This is my house. — Esta é minha casa.
IPA: /ðɪs ɪz maɪ haʊs/ · PT: [dhís iz mái ráus]
52. That is your car. — Aquele é seu carro.
IPA: /ðæt ɪz jɔːr kɑːr/ · PT: [dhét iz iór kár]
53. These are my keys. — Estas são minhas chaves.
IPA: /ðiːz ɑːr maɪ kiːz/ · PT: [dhíz ár mái kíz]
54. Those are her books. — Aqueles são os livros dela.
IPA: /ðoʊz ɑːr hɜːr bʊks/ · PT: [dhôuz ár rrâr búks]

Um pouco mais
55. This bag is heavy. — Esta bolsa está pesada.
IPA: /ðɪs bæɡ ɪz ˈhɛvi/ · PT: [dhís bég iz rrévi]
56. That movie was boring. — Aquele filme foi chato.
IPA: /ðæt ˈmuːvi wəz ˈbɔːrɪŋ/ · PT: [dhét múvi uâz bórin]
57. Whose phone is this? — De quem é este celular?
IPA: /huːz foʊn ɪz ðɪs/ · PT: [rrúz fôun iz dhís]
58. I don't want those. — Eu não quero aqueles.
IPA: /aɪ doʊnt wɑːnt ðoʊz/ · PT: [ái dôunt uánt dhôuz]

Perguntas e negações
59. Is this seat taken? — Este assento está ocupado?
IPA: /ɪz ðɪs siːt ˈteɪkən/ · PT: [iz dhís sít têikan]
60. Are these your shoes? — Estes sapatos são seus?
IPA: /ɑːr ðiːz jɔːr ʃuːz/ · PT: [ár dhíz iór chúz]
61. That isn't my coat. — Aquele não é meu casaco.
IPA: /ðæt ˈɪznt maɪ koʊt/ · PT: [dhét íznt mái kôut]
62. Why are those boxes here? — Por que aquelas caixas estão aqui?
IPA: /waɪ ɑːr ðoʊz ˈbɑːksɪz hɪr/ · PT: [uái ár dhôuz báksiz rrír]

Conectores e tempos verbais
63. I like this one because it's cheaper. — Eu gosto deste porque é mais barato.
IPA: /aɪ laɪk ðɪs wʌn bɪˈkɔːz ɪts ˈtʃiːpər/ · PT: [ái láik dhís uân bikóz íts tchíper]
64. That was the best day of my life. — Aquele foi o melhor dia da minha vida.
IPA: /ðæt wəz ðə bɛst deɪ əv maɪ laɪf/ · PT: [dhét uâz dha bést dêi ov mái láif]
65. These are the photos I took yesterday. — Estas são as fotos que tirei ontem.
IPA: /ðiːz ɑːr ðə ˈfoʊtoʊz aɪ tʊk ˈjɛstərdeɪ/ · PT: [dhíz ár dha fôutouz ái túk iéster dei]
66. Those were the rules when I was a child. — Aquelas eram as regras quando eu era criança.
IPA: /ðoʊz wɜːr ðə ruːlz wɛn aɪ wəz ə tʃaɪld/ · PT: [dhôuz uâr dha rúlz uén ái uâz a tcháild]
67. I'll take this, but not that. — Vou levar este, mas não aquele.
IPA: /aɪl teɪk ðɪs bʌt nɑːt ðæt/ · PT: [áiou têik dhís bât nót dhét]

As mais ricas
68. This is the house where I grew up. — Esta é a casa onde eu cresci.
IPA: /ðɪs ɪz ðə haʊs wɛr aɪ ɡruː ʌp/ · PT: [dhís iz dha ráus uér ái grú âp]
69. That is the man who helped me. — Aquele é o homem que me ajudou.
IPA: /ðæt ɪz ðə mæn huː hɛlpt miː/ · PT: [dhét iz dha mén rrú rrélpt mí]
70. These are the books that I'm reading now. — Estes são os livros que estou lendo agora.
IPA: /ðiːz ɑːr ðə bʊks ðæt aɪm ˈriːdɪŋ naʊ/ · PT: [dhíz ár dha búks dhét áim rídin náu]
71. Those are the people we met when we traveled. — Aquelas são as pessoas que conhecemos quando viajamos.
IPA: /ðoʊz ɑːr ðə ˈpiːpl̩ wiː mɛt wɛn wiː ˈtrævl̩d/ · PT: [dhôuz ár dha pípou uí mét uén uí trévold]
72. I prefer this color because it's brighter than that one. — Prefiro esta cor porque é mais viva que aquela.
IPA: /aɪ prɪˈfɜːr ðɪs ˈkʌlər bɪˈkɔːz ɪts ˈbraɪtər ðæn ðæt wʌn/ · PT: [ái priférr dhís kâler bikóz íts bráiter dhén dhét uân]
73. This isn't what I ordered, but that's okay. — Isto não é o que pedi, mas tudo bem.
IPA: /ðɪs ˈɪznt wʌt aɪ ˈɔːrdərd bʌt ðæts oʊˈkeɪ/ · PT: [dhís íznt uât ái órderd bât dhéts ôukêi]
74. Are these the keys you were looking for? — Estas são as chaves que você procurava?
IPA: /ɑːr ðiːz ðə kiːz juː wɜːr ˈlʊkɪŋ fɔːr/ · PT: [ár dhíz dha kíz iú uâr lúkin fór]
75. Although those are cheaper, I think these are better. — Embora aqueles sejam mais baratos, acho que estes são melhores.
IPA: /ɔːlˈðoʊ ðoʊz ɑːr ˈtʃiːpər aɪ θɪŋk ðiːz ɑːr ˈbɛtər/ · PT: [oldhôu dhôuz ár tchíper ái thínk dhíz ár béter]

"What is this?" / "It's a monster." — "O que é isto?" / "É um monstro."
IPA: /wʌt ɪz ðɪs · ɪts ə ˈmɑːnstər/ · PT: [uât iz dhís · íts a mánster]
"Is that your car?" / "Yes, it is." — "Aquele é seu carro?" / "Sim, é."
IPA: /ɪz ðæt jɔːr kɑːr · jɛs ɪt ɪz/ · PT: [iz dhét iór kár · iés ít iz]
"Are these your keys?" / "No, they aren't." — "Estas são suas chaves?" / "Não, não são."
IPA: /ɑːr ðiːz jɔːr kiːz · noʊ ðeɪ ˈɑːrnt/ · PT: [ár dhíz iór kíz · nôu dhêi árent]
"Whose books are those?" / "They're mine." — "De quem são aqueles livros?" / "São meus."
IPA: /huːz bʊks ɑːr ðoʊz · ðer maɪn/ · PT: [rrúz búks ár dhôuz · dhér máin]
"Do you like this?" / "Yes, I love it." — "Você gosta disto?" / "Sim, eu adoro."
IPA: /duː juː laɪk ðɪs · jɛs aɪ lʌv ɪt/ · PT: [dú iú láik dhís · iés ái lâv ít]
"Is this seat free?" / "No, it's taken." — "Este assento está livre?" / "Não, está ocupado."
IPA: /ɪz ðɪs siːt friː · noʊ ɪts ˈteɪkən/ · PT: [iz dhís sít frí · nôu íts têikan]
"How much is that?" / "It's ten dollars." — "Quanto custa aquilo?" / "Custa dez dólares."
IPA: /haʊ mʌtʃ ɪz ðæt · ɪts tɛn ˈdɑːlərz/ · PT: [rráu mâtch iz dhét · íts tén dálars]
"Can I have these?" / "Sure, take them." — "Posso ficar com estes?" / "Claro, pode levar."
IPA: /kæn aɪ hæv ðiːz · ʃʊr teɪk ðɛm/ · PT: [kén ái rrév dhíz · chúr têik dhém]
"Are those your friends?" / "Yes, they are." — "Aqueles são seus amigos?" / "Sim, são."
IPA: /ɑːr ðoʊz jɔːr frɛndz · jɛs ðeɪ ɑːr/ · PT: [ár dhôuz iór fréndz · iés dhêi ár]
"What's that noise?" / "I don't know." — "Que barulho é aquele?" / "Não sei."
IPA: /wʌts ðæt nɔɪz · aɪ doʊnt noʊ/ · PT: [uâts dhét nóiz · ái dôunt nôu]
"Is this the right way?" / "No, it's that way." — "É por aqui?" / "Não, é por ali."
IPA: /ɪz ðɪs ðə raɪt weɪ · noʊ ɪts ðæt weɪ/ · PT: [iz dhís dha ráit uêi · nôu íts dhét uêi]
"Do you want this one or that one?" / "This one, please." — "Você quer este ou aquele?" / "Este, por favor."
IPA: /duː juː wɑːnt ðɪs wʌn ɔːr ðæt wʌn · ðɪs wʌn pliːz/ · PT: [dú iú uánt dhís uân ór dhét uân · dhís uân plíz]
"Are these on sale?" / "Yes, they are." — "Estes estão em promoção?" / "Sim, estão."
IPA: /ɑːr ðiːz ɑːn seɪl · jɛs ðeɪ ɑːr/ · PT: [ár dhíz ón sêiou · iés dhêi ár]
"Whose phone is this?" / "It's not mine." — "De quem é este celular?" / "Não é meu."
IPA: /huːz foʊn ɪz ðɪs · ɪts nɑːt maɪn/ · PT: [rrúz fôun iz dhís · íts nót máin]
"Is that seat taken?" / "No, it's free." — "Aquele assento está ocupado?" / "Não, está livre."
IPA: /ɪz ðæt siːt ˈteɪkən · noʊ ɪts friː/ · PT: [iz dhét sít têikan · nôu íts frí]
"Do these come in blue?" / "Yes, they do." — "Estes têm na cor azul?" / "Sim, têm."
IPA: /duː ðiːz kʌm ɪn bluː · jɛs ðeɪ duː/ · PT: [dú dhíz kâm in blú · iés dhêi dú]
"Is this your first time here?" / "Yes, it is." — "Esta é sua primeira vez aqui?" / "Sim, é."
IPA: /ɪz ðɪs jɔːr fɜːrst taɪm hɪr · jɛs ɪt ɪz/ · PT: [iz dhís iór fârst táim rrír · iés ít iz]
"Are those clouds?" / "Yes, it might rain." — "Aquilo são nuvens?" / "Sim, pode chover."
IPA: /ɑːr ðoʊz klaʊdz · jɛs ɪt maɪt reɪn/ · PT: [ár dhôuz kláudz · iés ít máit rêin]
"What are these?" / "They're my notes." — "O que são estes?" / "São minhas anotações."
IPA: /wʌt ɑːr ðiːz · ðer maɪ noʊts/ · PT: [uât ár dhíz · dhér mái nôuts]
"Is this too expensive?" / "A little, yes." — "Isto é caro demais?" / "Um pouco, sim."
IPA: /ɪz ðɪs tuː ɪkˈspɛnsɪv · ə ˈlɪtl̩ jɛs/ · PT: [iz dhís tú ikspénsiv · a lítou iés]
"Are these seats ours?" / "No, those are." — "Estes assentos são nossos?" / "Não, são aqueles."
IPA: /ɑːr ðiːz siːts ˈaʊərz · noʊ ðoʊz ɑːr/ · PT: [ár dhíz síts áuerz · nôu dhôuz ár]
"Did you make this?" / "Yes, I did." — "Você fez isto?" / "Sim, fiz."
IPA: /dɪd juː meɪk ðɪs · jɛs aɪ dɪd/ · PT: [díd iú mêik dhís · iés ái díd]
"Is that the bus?" / "No, that's a truck." — "Aquele é o ônibus?" / "Não, aquilo é um caminhão."
IPA: /ɪz ðæt ðə bʌs · noʊ ðæts ə trʌk/ · PT: [iz dhét dha bâs · nôu dhéts a trâk]
"Are these the photos?" / "Yes, those are the ones." — "São estas as fotos?" / "Sim, aquelas são."
IPA: /ɑːr ðiːz ðə ˈfoʊtoʊz · jɛs ðoʊz ɑːr ðə wʌnz/ · PT: [ár dhíz dha fôutouz · iés dhôuz ár dha uânz]
"Was this here yesterday?" / "No, it wasn't." — "Isto estava aqui ontem?" / "Não, não estava."
IPA: /wəz ðɪs hɪr ˈjɛstərdeɪ · noʊ ɪt ˈwʌznt/ · PT: [uâz dhís rrír iéster dei · nôu ít uâznt]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;

let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short like headers
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (line.includes('—')) {
    // New card
    let originalLine = line;
    // remove number prefix like "26. "
    originalLine = originalLine.replace(/^\d+\.\s*/, '');
    
    // Sometimes the sentence has quotes «...» let's keep them as is 
    
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `lesson_2_grammar_a1_en_card_${index++}`,
      word,
      translation,
      pronunciation: '',
      portuguesePhonetic: ''
    };
    cards.push(currentCard);
  } else if (line.startsWith('IPA:')) {
    // IPA: /ʝo soi/ · PT: [iô sôi]
    const parts = line.split('· PT:');
    let ipaPart = parts[0].replace('IPA:', '').trim();
    let ptPart = parts[1] ? parts[1].trim() : '';

    if (currentCard) {
      currentCard.pronunciation = ipaPart;
      currentCard.portuguesePhonetic = ptPart;
    }
  }
}

const outputFile = 'public/decks/lesson_2_grammar_a1_en.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['lesson_2_grammar_a1'] = decksMeta['lesson_2_grammar_a1'] || {};
decksMeta['lesson_2_grammar_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
