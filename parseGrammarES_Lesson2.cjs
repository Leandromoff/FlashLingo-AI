const fs = require('fs');

const rawText = `este / esta — este / esta (perto de mim)
IPA: /ˈeste · ˈesta/ · PT: [éste · ésta]
ese / esa — esse / essa (perto de você)
IPA: /ˈese · ˈesa/ · PT: [ése · ésa]
estos / estas — estes / estas
IPA: /ˈestos · ˈestas/ · PT: [éstos · éstas]
esos / esas — esses / essas
IPA: /ˈesos · ˈesas/ · PT: [ésos · ésas]
aquí — aqui
IPA: /aˈki/ · PT: [akí]
allí — ali / lá
IPA: /aˈʎi/ · PT: [alhí]
un monstruo — um monstro
IPA: /un ˈmonstɾwo/ · PT: [un mónstruo]
monstruos — monstros
IPA: /ˈmonstɾwos/ · PT: [mónstruos]
Esto es un monstruo. — Isto é um monstro.
IPA: /ˈesto es un ˈmonstɾwo/ · PT: [ésto és un mónstruo]
Eso es un monstruo. — Isso é um monstro.
IPA: /ˈeso es un ˈmonstɾwo/ · PT: [éso és un mónstruo]
Estos son monstruos. — Estes são monstros.
IPA: /ˈestos son ˈmonstɾwos/ · PT: [éstos son mónstruos]
Esos son monstruos. — Esses são monstros.
IPA: /ˈesos son ˈmonstɾwos/ · PT: [ésos son mónstruos]
Esto está aquí. — Isto está aqui.
IPA: /ˈesto esˈta aˈki/ · PT: [ésto está akí]
Eso está allí. — Isso está lá.
IPA: /ˈeso esˈta aˈʎi/ · PT: [éso está alhí]
este monstruo — este monstro
IPA: /ˈeste ˈmonstɾwo/ · PT: [éste mónstruo]
ese monstruo — esse monstro
IPA: /ˈese ˈmonstɾwo/ · PT: [ése mónstruo]
¿Es esto un monstruo? — Isto é um monstro?
IPA: /es ˈesto un ˈmonstɾwo/ · PT: [és ésto un mónstruo]
¿Es eso un monstruo? — Isso é um monstro?
IPA: /es ˈeso un ˈmonstɾwo/ · PT: [és éso un mónstruo]
¿Son estos monstruos? — Estes são monstros?
IPA: /son ˈestos ˈmonstɾwos/ · PT: [son éstos mónstruos]
¿Son esos monstruos? — Esses são monstros?
IPA: /son ˈesos ˈmonstɾwos/ · PT: [son ésos mónstruos]
Esto no es un monstruo. — Isto não é um monstro.
IPA: /ˈesto no es un ˈmonstɾwo/ · PT: [ésto no és un mónstruo]
Eso no es un monstruo. — Isso não é um monstro.
IPA: /ˈeso no es un ˈmonstɾwo/ · PT: [éso no és un mónstruo]
Estos no son monstruos. — Estes não são monstros.
IPA: /ˈestos no son ˈmonstɾwos/ · PT: [éstos no son mónstruos]
Esos no son monstruos. — Esses não são monstros.
IPA: /ˈesos no son ˈmonstɾwos/ · PT: [ésos no son mónstruos]
¿Qué es esto? — O que é isto?
IPA: /ke es ˈesto/ · PT: [ke és ésto]

No mercado
26. Esta manzana está fresca. — Esta maçã está fresca.
IPA: /ˈesta manˈθana esˈta ˈfɾeska/ · PT: [ésta manthána está fréska]
27. Esa manzana está vieja. — Essa maçã está velha.
IPA: /ˈesa manˈθana esˈta ˈbjexa/ · PT: [ésa manthána está biérra]
28. Estos tomates están rojos. — Estes tomates estão vermelhos.
IPA: /ˈestos toˈmates esˈtan ˈroxos/ · PT: [éstos tomátes están rórros]
29. Esos plátanos están verdes. — Aquelas bananas estão verdes.
IPA: /ˈesos ˈplatanos esˈtan ˈbeɾðes/ · PT: [ésos plátanos están bérdes]
30. ¿Cuánto cuesta esto? — Quanto custa isto?
IPA: /ˈkwanto ˈkwesta ˈesto/ · PT: [kuánto kuésta ésto]

Comprando roupas
31. Me gusta esta camisa. — Eu gosto desta camisa.
IPA: /me ˈɡusta ˈesta kaˈmisa/ · PT: [me gústa ésta kamísa]
32. No me gusta esa chaqueta. — Eu não gosto dessa jaqueta.
IPA: /no me ˈɡusta ˈesa tʃaˈketa/ · PT: [no me gústa ésa tchakéta]
33. Estos zapatos son bonitos. — Estes sapatos são bonitos.
IPA: /ˈestos θaˈpatos son boˈnitos/ · PT: [éstos thapátos son bonítos]
34. Esos pantalones son demasiado grandes. — Aquelas calças são grandes demais.
IPA: /ˈesos pantaˈlones son demaˈsjaðo ˈɡɾandes/ · PT: [ésos pantalónes son demasiádo grándes]
35. ¿Puedo probarme esto? — Posso experimentar isto?
IPA: /ˈpweðo pɾoˈβaɾme ˈesto/ · PT: [puédo probárme ésto]

No restaurante
36. Esta sopa está caliente. — Esta sopa está quente.
IPA: /ˈesta ˈsopa esˈta kaˈljente/ · PT: [ésta sópa está kaliénte]
37. Esa mesa está libre. — Aquela mesa está livre.
IPA: /ˈesa ˈmesa esˈta ˈliβɾe/ · PT: [ésa mésa está líbre]
38. Estos tenedores están sucios. — Estes garfos estão sujos.
IPA: /ˈestos teneˈðoɾes esˈtan ˈsuθjos/ · PT: [éstos tenedóres están súthios]
39. Esas bebidas son mías. — Aquelas bebidas são minhas.
IPA: /ˈesas beˈβiðas son ˈmias/ · PT: [ésas bebídas son mías]
40. Quiero esto, por favor. — Eu quiero isto, por favor.
IPA: /ˈkjeɾo ˈesto poɾ faˈβoɾ/ · PT: [kiéro ésto por fabór]

Em casa / tarefas domésticas
41. Esta habitación está limpia. — Este quarto está limpo.
IPA: /ˈesta aβitaˈθjon esˈta ˈlimpja/ · PT: [ésta abitathión está límpia]
42. Esa ventana está abierta. — Aquela janela está abierta.
IPA: /ˈesa benˈtana esˈta aˈβjeɾta/ · PT: [ésa bentána está abiérta]
43. Estas toallas están mojadas. — Estas toalhas estão molhadas.
IPA: /ˈestas toˈaʎas esˈtan moˈxaðas/ · PT: [éstas toálhas están morrádas]
44. Esos platos están limpios. — Aqueles pratos estão limpos.
IPA: /ˈesos ˈplatos esˈtan ˈlimpjos/ · PT: [ésos plátos están límpios]

Na escola / estudando
45. Este libro es interesante. — Este livro é interessante.
IPA: /ˈeste ˈliβɾo es inteɾeˈsante/ · PT: [éste líbro és interesánte]
46. Esa respuesta es correcta. — Aquela resposta está correta.
IPA: /ˈesa resˈpwesta es koˈrekta/ · PT: [ésa respuésta és korrékta]
47. Estos apuntes son útiles. — Estas anotações são úteis.
IPA: /ˈestos aˈpuntes son ˈutiles/ · PT: [éstos apúntes son útiles]

Saindo com amigos
48. Este sitio es agradable. — Este lugar é legal.
IPA: /ˈeste ˈsitjo es aɣɾaˈðaβle/ · PT: [éste sítio és agradáble]
49. Esa canción es genial. — Aquela música é ótima.
IPA: /ˈesa kanˈθjon es xeˈnjal/ · PT: [ésa kanthión és rrenniál]
50. Esas personas son mis amigos. — Aquelas pessoas são meus amigos.
IPA: /ˈesas peɾˈsonas son mis aˈmiɣos/ · PT: [ésas persónas son mis amígos]

Curtas e simples
51. Esta es mi casa. — Esta é minha casa.
IPA: /ˈesta es mi ˈkasa/ · PT: [ésta és mi kása]
52. Ese es tu coche. — Esse é seu carro.
IPA: /ˈese es tu ˈkotʃe/ · PT: [ése és tu kótche]
53. Estas son mis llaves. — Estas são minhas chaves.
IPA: /ˈestas son mis ˈʎaβes/ · PT: [éstas son mis lhábes]
54. Esos son sus libros. — Aqueles são os livros dela.
IPA: /ˈesos son sus ˈliβɾos/ · PT: [ésos son sus líbros]

Um poco mais
55. Esta bolsa pesa mucho. — Esta bolsa está pesada.
IPA: /ˈesta ˈbolsa ˈpesa ˈmutʃo/ · PT: [ésta bólsa pésa mútcho]
56. Esa película fue aburrida. — Aquele filme foi chato.
IPA: /ˈesa peˈlikula fwe aβuˈriða/ · PT: [ésa pelíkula fué aburrída]
57. ¿De quién es este móvil? — De quem é este celular?
IPA: /de kjen es ˈeste ˈmoβil/ · PT: [de kién és éste móbil]
58. No quiero esos. — Eu não quero aqueles.
IPA: /no ˈkjeɾo ˈesos/ · PT: [no kiéro ésos]

Perguntas e negações
59. ¿Está ocupado este asiento? — Este assento está ocupado?
IPA: /esˈta okuˈpaðo ˈeste aˈsjento/ · PT: [está okupádo éste asiénto]
60. ¿Son tuyos estos zapatos? — Estes sapatos são seus?
IPA: /son ˈtuʝos ˈestos θaˈpatos/ · PT: [son túios éstos thapátos]
61. Ese no es mi abrigo. — Aquele não é meu casaco.
IPA: /ˈese no es mi aˈβɾiɣo/ · PT: [ése no és mi abrígo]
62. ¿Por qué están aquí esas cajas? — Por que aquelas caixas estão aqui?
IPA: /poɾ ke esˈtan aˈki ˈesas ˈkaxas/ · PT: [por ké están akí ésas kárras]

Conectores e tempos verbais
63. Me gusta este porque es más barato. — Gosto deste porque é mais barato.
IPA: /me ˈɡusta ˈeste ˈpoɾke es mas baˈɾato/ · PT: [me gústa éste pórke és mas baráto]
64. Ese fue el mejor día de mi vida. — Aquele foi o melhor dia da minha vida.
IPA: /ˈese fwe el meˈxoɾ ˈdia de mi ˈβiða/ · PT: [ése fué el merrór día de mi bída]
65. Estas son las fotos que hice ayer. — Estas são as fotos que tirei ontem.
IPA: /ˈestas son las ˈfotos ke ˈiθe aˈʝeɾ/ · PT: [éstas son las fótos ke íthe aiér]
66. Esas eran las reglas cuando era niño. — Aquelas eram as regras quando eu era criança.
IPA: /ˈesas ˈeɾan las ˈreɣlas ˈkwando ˈeɾa ˈniɲo/ · PT: [ésas éran las réglas kuándo éra nínho]
67. Me llevo este, pero ese no. — Vou levar este, mas aquele não.
IPA: /me ˈʎeβo ˈeste ˈpeɾo ˈese no/ · PT: [me lhébo éste péro ése no]

As mais ricas
68. Esta es la casa donde crecí. — Esta é a casa onde cresci.
IPA: /ˈesta es la ˈkasa ˈdonde kɾeˈθi/ · PT: [ésta és la kása dônde krethí]
69. Ese es el hombre que me ayudó. — Aquele é o homem que me ajudou.
IPA: /ˈese es el ˈombɾe ke me aʝuˈðo/ · PT: [ése és el ômbre ke me aiudó]
70. Estos son los libros que estoy leyendo ahora. — Estes são os livros que estou lendo agora.
IPA: /ˈestos son los ˈliβɾos ke esˈtoi leˈʝendo aˈoɾa/ · PT: [éstos son los líbros ke estôi leiéndo aóra]
71. Esas son las personas que conocimos cuando viajamos. — Aquelas são as pessoas que conhecemos quando viajamos.
IPA: /ˈesas son las peɾˈsonas ke konoˈθimos ˈkwando bjaˈxamos/ · PT: [ésas son las persónas ke konothímos kuándo biarrámos]
72. Prefiero este color porque es más vivo que ese. — Prefiro esta cor porque é mais viva que aquela.
IPA: /pɾeˈfjeɾo ˈeste koˈloɾ ˈpoɾke es mas ˈbiβo ke ˈese/ · PT: [prefiéro éste kolór pórke és mas bíbo ke ése]
73. Esto no es lo que pedí, pero no pasa nada. — Isto não é o que pedi, mas tudo bem.
IPA: /ˈesto no es lo ke peˈði ˈpeɾo no ˈpasa ˈnaða/ · PT: [ésto no és lo ke pedí péro no pása náda]
74. ¿Son estas las llaves que buscabas? — Estas são as chaves que você procurava?
IPA: /son ˈestas las ˈʎaβes ke busˈkaβas/ · PT: [son éstas las lhábes ke buskábas]
75. Aunque esos son más baratos, creo que estos son mejores. — Embora aqueles sejam mais baratos, acho que estes são melhores.
IPA: /ˈawŋke ˈesos son mas baˈɾatos ˈkɾeo ke ˈestos son meˈxoɾes/ · PT: [áunke ésos son mas barátos kréo ke éstos son merróres]

«¿Qué es esto?» / «Es un monstruo.» — "O que é isto?" / "É um monstro."
IPA: /ke es ˈesto · es un ˈmonstɾwo/ · PT: [ke és ésto · és un mónstruo]
«¿Es ese tu coche?» / «Sí, lo es.» — "Aquele é seu carro?" / "Sim, é."
IPA: /es ˈese tu ˈkotʃe · si lo es/ · PT: [és ése tu kótche · sí lo és]
«¿Son estas tus llaves?» / «No, no lo son.» — "Estas são suas chaves?" / "Não, não são."
IPA: /son ˈestas tus ˈʎaβes · no no lo son/ · PT: [son éstas tus lhábes · no no lo son]
«¿De quién son esos libros?» / «Son míos.» — "De quem são aqueles livros?" / "São meus."
IPA: /de kjen son ˈesos ˈliβɾos · son ˈmios/ · PT: [de kién son ésos líbros · son míos]
«¿Te gusta esto?» / «Sí, me encanta.» — "Você gosta disto?" / "Sim, eu adoro."
IPA: /te ˈɡusta ˈesto · si me eŋˈkanta/ · PT: [te gústa ésto · sí me enkánta]
«¿Está libre este asiento?» / «No, está ocupado.» — "Este assento está livre?" / "Não, está ocupado."
IPA: /esˈta ˈliβɾe ˈeste aˈsjento · no esˈta okuˈpaðo/ · PT: [está líbre éste asiénto · no está okupádo]
«¿Cuánto cuesta eso?» / «Cuesta diez euros.» — "Quanto custa aquilo?" / "Custa dez euros."
IPA: /ˈkwanto ˈkwesta ˈeso · ˈkwesta djeθ ˈewɾos/ · PT: [kuánto kuésta éso · kuésta diéth éuros]
«¿Puedo llevarme estos?» / «Claro, llévatelos.» — "Posso ficar com estes?" / "Claro, pode levar."
IPA: /ˈpweðo ʎeˈβaɾme ˈestos · ˈklaɾo ˈʎeβatelos/ · PT: [puédo lhebárme éstos · kláro lhébatelos]
«¿Son esos tus amigos?» / «Sí, lo son.» — "Aqueles são seus amigos?" / "Sim, são."
IPA: /son ˈesos tus aˈmiɣos · si lo son/ · PT: [son ésos tus amígos · sí lo son]
«¿Qué es ese ruido?» / «No lo sé.» — "Que barulho é esse?" / "Não sei."
IPA: /ke es ˈese ˈrwiðo · no lo se/ · PT: [ke és ése ruído · no lo sé]
«¿Es este el camino correcto?» / «No, es por ahí.» — "É por aqui?" / "Não, é por ali."
IPA: /es ˈeste el kaˈmino koˈrekto · no es poɾ aˈi/ · PT: [és éste el kamíno korrékto · no és por aí]
«¿Quieres este o ese?» / «Este, por favor.» — "Você quer este ou esse?" / "Este, por favor."
IPA: /ˈkjeɾes ˈeste o ˈese · ˈeste poɾ faˈβoɾ/ · PT: [kiéres éste o ése · éste por fabór]
«¿Están de oferta estos?» / «Sí, lo están.» — "Estes estão em promoção?" / "Sim, estão."
IPA: /esˈtan de oˈfeɾta ˈestos · si lo esˈtan/ · PT: [están de oférta éstos · sí lo están]
«¿De quién es este móvil?» / «No es mío.» — "De quem é este celular?" / "Não é meu."
IPA: /de kjen es ˈeste ˈmoβil · no es ˈmio/ · PT: [de kién és éste móbil · no és mío]
«¿Está ocupado ese asiento?» / «No, está libre.» — "Aquele assento está ocupado?" / "Não, está livre."
IPA: /esˈta okuˈpaðo ˈese aˈsjento · no esˈta ˈliβɾe/ · PT: [está okupádo ése asiénto · no está líbre]
«¿Vienen estos en azul?» / «Sí, sí vienen.» — "Estes têm na cor azul?" / "Sim, têm."
IPA: /ˈbjenen ˈestos en aˈθul · si si ˈbjenen/ · PT: [biénen éstos en athúl · sí sí biénen]
«¿Es esta tu primera vez aquí?» / «Sí, lo es.» — "Esta é sua primeira vez aqui?" / "Sim, é."
IPA: /es ˈesta tu pɾiˈmeɾa beθ aˈki · si lo es/ · PT: [és ésta tu priméra béth akí · sí lo és]
«¿Son esas nubes?» / «Sí, puede que llueva.» — "Aquilo são nuvens?" / "Sim, pode chover."
IPA: /son ˈesas ˈnuβes · si ˈpweðe ke ˈʎweβa/ · PT: [son ésas núbes · sí puéde ke lhuéba]
«¿Qué son estos?» / «Son mis apuntes.» — "O que são estes?" / "São minhas anotações."
IPA: /ke son ˈestos · son mis aˈpuntes/ · PT: [ke son éstos · son mis apúntes]
«¿Es esto demasiado caro?» / «Un poco, sí.» — "Isto é caro demais?" / "Um pouco, sim."
IPA: /es ˈesto demaˈsjaðo ˈkaɾo · un ˈpoko si/ · PT: [és ésto demasiádo káro · un póko sí]
«¿Son nuestros estos asientos?» / «No, son esos.» — "Estes assentos são nossos?" / "Não, são aqueles."
IPA: /son ˈnwestɾos ˈestos aˈsjentos · no son ˈesos/ · PT: [son nuéstros éstos asiéntos · no son ésos]
«¿Hiciste esto?» / «Sí, lo hice.» — "Você fez isto?" / "Sim, fiz."
IPA: /iˈθiste ˈesto · si lo ˈiθe/ · PT: [ithíste ésto · sí lo íthe]
«¿Es ese el autobús?» / «No, ese es un camión.» — "Aquele é o ônibus?" / "Não, aquilo é um caminhão."
IPA: /es ˈese el awtoˈβus · no ˈese es un kaˈmjon/ · PT: [és ése el autobús · no ése és un kamión]
«¿Son estas las fotos?» / «Sí, esas son.» — "São estas as fotos?" / "Sim, são aquelas."
IPA: /son ˈestas las ˈfotos · si ˈesas son/ · PT: [son éstas las fótos · sí ésas son]
«¿Estaba esto aquí ayer?» / «No, no estaba.» — "Isto estava aqui ontem?" / "Não, não estava."
IPA: /esˈtaβa ˈesto aˈki aˈʝeɾ · no no esˈtaβa/ · PT: [estába ésto akí aiér · no no estába]`;

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
      id: `leccion_2_gramatica_a1_s_es_card_${index++}`,
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

const outputFile = 'public/decks/leccion_2_gramatica_a1_s_es.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['leccion_2_gramatica_a1_s'] = decksMeta['leccion_2_gramatica_a1_s'] || {};
decksMeta['leccion_2_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
