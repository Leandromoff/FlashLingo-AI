const fs = require('fs');

const rawText = `Yo soy — Eu sou
IPA: /ʝo soi/ · PT: [iô sôi]
Yo estoy — Eu estou
IPA: /ʝo esˈtoi/ · PT: [iô estôi]
Tú eres — Tu és / Você é
IPA: /tu ˈeɾes/ · PT: [tu éres]
Tú estás — Tu estás / Você está
IPA: /tu esˈtas/ · PT: [tu estás]
Él es — Ele é
IPA: /el es/ · PT: [él és]
Él está — Ele está
IPA: /el esˈta/ · PT: [él está]
Ella es — Ela é
IPA: /ˈeʎa es/ · PT: [élha és]
Ella está — Ela está
IPA: /ˈeʎa esˈta/ · PT: [élha está]
Es — É (coisas)
IPA: /es/ · PT: [és]
Está — Está (coisas)
IPA: /esˈta/ · PT: [está]
Nosotros somos — Nós somos
IPA: /noˈsotɾos ˈsomos/ · PT: [nosótros sômos]
Nosotros estamos — Nós estamos
IPA: /noˈsotɾos esˈtamos/ · PT: [nosótros estámos]
Vosotros sois — Vós sois / Vocês são
IPA: /boˈsotɾos sois/ · PT: [bosótros sôis]
Vosotros estáis — Vós estais / Vocês estão
IPA: /boˈsotɾos esˈtais/ · PT: [bosótros estáis]
Ellos son — Eles são
IPA: /ˈeʎos son/ · PT: [élhos són]
Ellos están — Eles estão
IPA: /ˈeʎos esˈtan/ · PT: [élhos están]
No soy — Não sou
IPA: /no soi/ · PT: [nô sôi]
No estoy — Não estou
IPA: /no esˈtoi/ · PT: [nô estôi]
No es — Não é
IPA: /no es/ · PT: [nô és]
No está — Não está
IPA: /no esˈta/ · PT: [nô está]
No somos / No estamos — Não somos / não estamos
IPA: /no ˈsomos · no esˈtamos/ · PT: [nô sômos · nô estámos]
¿Soy yo? — Sou eu?
IPA: /soi ʝo/ · PT: [sôi iô]
¿Eres tú? — És tu? / Você é?
IPA: /ˈeɾes tu/ · PT: [éres tu]
¿Es él? — É ele?
IPA: /es el/ · PT: [és él]
¿Está ella? / ¿Están ellos? — Ela está? / Eles estão?
IPA: /esˈta ˈeʎa · esˈtan ˈeʎos/ · PT: [está élha · están élhos]

Saindo de casa
26. Estoy listo. — Estou pronto.
IPA: /esˈtoi ˈlisto/ · PT: [estôi lísto]
27. ¿Dónde están mis llaves? — Onde estão minhas chaves?
IPA: /ˈdonde esˈtan mis ˈʎaβes/ · PT: [dônde están mis lhábes]
28. Están en la mesa. — Estão na mesa.
IPA: /esˈtan en la ˈmesa/ · PT: [están en la mésa]
29. La puerta está abierta. — A porta está aberta.
IPA: /la ˈpweɾta esˈta aˈβjeɾta/ · PT: [la puérta está abiérta]
30. ¡Llegamos tarde! — Estamos atrasados!
IPA: /ʎeˈɣamos ˈtaɾðe/ · PT: [lhegámos tárde]

No mercado
31. ¿Cuánto es? — Quanto é?
IPA: /ˈkwanto es/ · PT: [kuánto és]
32. Son cinco euros. — São cinco euros.
IPA: /son ˈθinko ˈewɾos/ · PT: [són thínko éuros]
33. Las manzanas están frescas. — As maçãs estão frescas.
IPA: /las manˈθanas esˈtan ˈfɾeskas/ · PT: [las manthánas están fréskas]
34. ¿Dónde está la leche? — Onde está o leite?
IPA: /ˈdonde esˈta la ˈletʃe/ · PT: [dônde está la létche]
35. Está en el pasillo tres. — Está no corredor três.
IPA: /esˈta en el paˈsiʎo tɾes/ · PT: [está en el pasílho trés]

No transporte e no trabalho
36. El autobús está retrasado. — O ônibus está atrasado.
IPA: /el awtoˈβus esˈta retɾaˈsaðo/ · PT: [el autobús está retrasádo]
37. Estoy en el trabajo. — Estou no trabalho.
IPA: /esˈtoi en el tɾaˈβaxo/ · PT: [estôi en el trabárro]
38. Mi jefe está ocupado. — Meu chefe está ocupado.
IPA: /mi ˈxefe esˈta okuˈpaðo/ · PT: [mi rréfe está okupádo]
39. La reunión es a las diez. — A reunião é às dez.
IPA: /la reuˈnjon es a las djeθ/ · PT: [la reunión és a las diéth]
40. Tenemos prisa. — Estamos com pressa.
IPA: /teˈnemos ˈpɾisa/ · PT: [tenémos prísa]

No restaurante
41. La comida está deliciosa. — A comida está deliciosa.
IPA: /la koˈmiða esˈta deliˈθjosa/ · PT: [la komída está delithiósa]
42. ¿Tienes hambre? — Você está com fome?
IPA: /ˈtjenes ˈambɾe/ · PT: [tiénes âmbre]
43. El camarero es simpático. — O garçom é simpático.
IPA: /el kamaˈɾeɾo es simˈpatiko/ · PT: [el kamaréro és simpátiko]
44. La cuenta está lista. — A conta está pronta.
IPA: /la ˈkwenta esˈta ˈlista/ · PT: [la kuénta está lísta]

Tempo e clima
45. Hoy hace sol. — Está ensolarado hoje.
IPA: /oi ˈaθe sol/ · PT: [ôi áthe sól]
46. El tiempo es agradable. — O tempo está agradável.
IPA: /el ˈtjempo es aɣɾaˈðaβle/ · PT: [el tiémpo és agradáble]
47. Hace frío fuera. — Está frio lá fora.
IPA: /ˈaθe ˈfɾio ˈfweɾa/ · PT: [áthe frío fuéra]

Em casa com amigos
48. Mis amigos están aquí. — Meus amigos estão aqui.
IPA: /mis aˈmiɣos esˈtan aˈki/ · PT: [mis amígos están akí]
49. La película es genial. — O filme está ótimo.
IPA: /la peˈlikula es xeˈnjal/ · PT: [la pelíkula és rrenniál]
50. Estamos contentos. — Estamos felizes.
IPA: /esˈtamos konˈtentos/ · PT: [estámos konténtos]

Curtas e simples
51. Estoy cansado. — Estou cansado.
IPA: /esˈtoi kanˈsaðo/ · PT: [estôi kansádo]
52. Ella es mi amiga. — Ela é minha amiga.
IPA: /ˈeʎa es mi aˈmiɣa/ · PT: [élha és mi amíga]
53. Están en el colegio. — Eles estão na escola.
IPA: /esˈtan en el koˈlexjo/ · PT: [están en el kolérrio]
54. La habitación está limpia. — O quarto está limpo.
IPA: /la aβitaˈθjon esˈta ˈlimpja/ · PT: [la abitathión está límpia]

Negativas e perguntas
55. Todavía no estamos listos. — Ainda não estamos prontos.
IPA: /toðaˈβia no esˈtamos ˈlistos/ · PT: [todabía no estámos lístos]
56. Él no está en casa. — Ele não está em casa.
IPA: /el no esˈta en ˈkasa/ · PT: [él no está en kása]
57. ¿Eres estudiante? — Você é estudante?
IPA: /ˈeɾes estuˈðjante/ · PT: [éres estudiánte]
58. ¿Por qué estás triste? — Por que você está triste?
IPA: /poɾ ke esˈtas ˈtɾiste/ · PT: [por ké estás tríste]

Com conectores (porque, pero, cuando)
59. Los niños están felices porque es su cumpleaños. — As crianças estão felizes porque é aniversário delas.
IPA: /los ˈniɲos esˈtan feˈliθes ˈpoɾke es su kumpleˈaɲos/ · PT: [los nínhos están felíthes pórke és su kumpleánhos]
60. Estoy cansado pero estoy feliz. — Estou cansado, mas estou feliz.
IPA: /esˈtoi kanˈsaðo ˈpeɾo esˈtoi feˈliθ/ · PT: [estôi kansádo péro estôi felíth]
61. Ella está en el trabajo cuando yo estoy en casa. — Ela está no trabalho quando eu estou em casa.
IPA: /ˈeʎa esˈta en el tɾaˈβaxo ˈkwando ʝo esˈtoi en ˈkasa/ · PT: [élha está en el trabárro kuándo iô estôi en kása]

Tempos verbais variados
62. Está lloviendo ahora. — Está chovendo agora.
IPA: /esˈta ʎoˈβjendo aˈoɾa/ · PT: [está lhobiéndo aóra]
63. Estamos viendo una película. — Estamos assistindo a um filme.
IPA: /esˈtamos ˈbjendo una peˈlikula/ · PT: [estámos biéndo una pelíkula]
64. ¿Vienen a la fiesta? — Eles vêm para a festa?
IPA: /ˈbjenen a la ˈfjesta/ · PT: [biénen a la fiésta]
65. Estuve en el gimnasio ayer. — Estive na academia ontem.
IPA: /esˈtuβe en el ximˈnasjo aˈʝeɾ/ · PT: [estúbe en el rrimnásio aiér]
66. Estaban muy cansados anoche. — Eles estavam muito cansados ontem à noite.
IPA: /esˈtaβan mui kanˈsaðos aˈnotʃe/ · PT: [estában múi kansádos anótche]
67. ¿Dónde estabas esta mañana? — Onde você estava esta manhã?
IPA: /ˈdonde esˈtaβas ˈesta maˈɲana/ · PT: [dônde estábas ésta manhána]

As mais ricas
68. No estaba en la oficina porque estaba enfermo. — Ele não estava no escritório porque estava doente.
IPA: /no esˈtaβa en la ofiˈθina ˈpoɾke esˈtaβa emˈfeɾmo/ · PT: [no estába en la ofithína pórke estába emférmo]
69. Estábamos contentos cuando brillaba el sol. — Estávamos felizes quando o sol estava brilhando.
IPA: /esˈtaβamos konˈtentos ˈkwando bɾiˈʎaβa el sol/ · PT: [estábamos konténtos kuándo brilhába el sól]
70. ¿Va a estar lista pronto? — Ela vai estar pronta logo?
IPA: /ba a esˈtaɾ ˈlista ˈpɾonto/ · PT: [ba a estár lísta prónto]
71. Estaré allí a las ocho. — Estarei lá às oito.
IPA: /estaˈɾe aˈʎi a las ˈotʃo/ · PT: [estaré alhí a las ótcho]
72. Van a llegar tarde, pero no pasa nada. — Eles vão se atrasar, mas tudo bem.
IPA: /ban a ʎeˈɣaɾ ˈtaɾðe ˈpeɾo no ˈpasa ˈnaða/ · PT: [ban a lhegár tárde péro no pása náda]
73. ¿Estás seguro de que tienes razón? — Você tem certeza de que está certo?
IPA: /esˈtas seˈɣuɾo de ke ˈtjenes raˈθon/ · PT: [estás segúro de ke tiénes rrathón]
74. No sé si está en casa o en el trabajo. — Não sei se ele está em casa ou no trabalho.
IPA: /no se si esˈta en ˈkasa o en el tɾaˈβaxo/ · PT: [no sé si está en kása o en el trabárro]
75. Ella no está contenta porque hace mal tiempo y sus amigos están ocupados. — Ela não está feliz porque o tempo está ruim e seus amigos estão ocupados.
IPA: /ˈeʎa no esˈta konˈtenta ˈpoɾke ˈaθe mal ˈtjempo i sus aˈmiɣos esˈtan okuˈpaðos/ · PT: [élha no está konténta pórke áthe mal tiémpo i sus amígos están okupádos]

«¿Estás listo?» / «Sí, lo estoy.» — "Você está pronto?" / "Sim, estou."
IPA: /esˈtas ˈlisto · si lo esˈtoi/ · PT: [estás lísto · sí lo estôi]
«¿Es tu hermano?» / «No, no lo es.» — "Ele é seu irmão?" / "Não, não é."
IPA: /es tu eɾˈmano · no no lo es/ · PT: [és tu ermáno · no no lo és]
«¿Dónde están mis llaves?» / «Están en la mesa.» — "Onde estão minhas chaves?" / "Estão na mesa."
IPA: /ˈdonde esˈtan mis ˈʎaβes · esˈtan en la ˈmesa/ · PT: [dônde están mis lhábes · están en la mésa]
«¿Están en casa?» / «Sí, lo están.» — "Eles estão em casa?" / "Sim, estão."
IPA: /esˈtan en ˈkasa · si lo esˈtan/ · PT: [están en kása · sí lo están]
«¿Es profesora?» / «Sí, lo es.» — "Ela é professora?" / "Sim, é."
IPA: /es pɾofeˈsoɾa · si lo es/ · PT: [és profesóra · sí lo és]
«¿Llego tarde?» / «No, no llegas tarde.» — "Estou atrasado?" / "Não, não está."
IPA: /ˈʎeɣo ˈtaɾðe · no no ˈʎeɣas ˈtaɾðe/ · PT: [lhégo tárde · no no lhégas tárde]
«¿Ya hemos llegado?» / «No, todavía no.» — "Já chegamos?" / "Não, ainda não."
IPA: /ʝa ˈemos ʎeˈɣaðo · no toðaˈβia no/ · PT: [ia émos lhegádo · no todabía no]
«¿Hace frío fuera?» / «Sí, hace frío.» — "Está frio lá fora?" / "Sim, está."
IPA: /ˈaθe ˈfɾio ˈfweɾa · si ˈaθe ˈfɾio/ · PT: [áthe frío fuéra · sí áthe frío]
«¿Tienes hambre?» / «Sí, tengo hambre.» — "Você está com fome?" / "Sim, estou."
IPA: /ˈtjenes ˈambɾe · si ˈteŋɡo ˈambɾe/ · PT: [tiénes âmbre · sí téngo âmbre]
«¿Está abierta la tienda?» / «No, no lo está.» — "A loja está aberta?" / "Não, não está."
IPA: /esˈta aˈβjeɾta la ˈtjenda · no no lo esˈta/ · PT: [está abiérta la tiénda · no no lo está]
«¿Están aquí tus amigos?» / «Sí, lo están.» — "Seus amigos estão aqui?" / "Sim, estão."
IPA: /esˈtan aˈki tus aˈmiɣos · si lo esˈtan/ · PT: [están akí tus amígos · sí lo estão]
«¿Llega tarde el autobús?» / «Sí, llega tarde.» — "O ônibus está atrasado?" / "Sim, está."
IPA: /ˈʎeɣa ˈtaɾðe el awtoˈβus · si ˈʎeɣa ˈtaɾðe/ · PT: [lhéga tárde el autobús · sí lhéga tárde]
«¿Eres estudiante?» / «No, no lo soy.» — "Você é estudante?" / "Não, não sou."
IPA: /ˈeɾes estuˈðjante · no no lo soi/ · PT: [éres estudiánte · no no lo sôi]
«¿Está lista la cena?» / «Sí, lo está.» — "O jantar está pronto?" / "Sim, está."
IPA: /esˈta ˈlista la ˈθena · si lo esˈta/ · PT: [está lísta la théna · sí lo está]
«¿Estás bien?» / «No, no estoy bien.» — "Você está bem?" / "Não, não estou."
IPA: /esˈtas bjen · no no esˈtoi bjen/ · PT: [estás bién · no no estôi bién]
«¿Es tuya esta bolsa?» / «Sí, lo es.» — "Esta bolsa é sua?" / "Sim, é."
IPA: /es ˈtuʝa ˈesta ˈbolsa · si lo es/ · PT: [és túia ésta bólsa · sí lo és]
«¿Están dormidos los niños?» / «Sí, lo están.» — "As crianças estão dormindo?" / "Sim, estão."
IPA: /esˈtan doɾˈmiðos los ˈniɲos · si lo esˈtan/ · PT: [están dormídos los nínhos · sí lo estão]
«¿Está en el trabajo?» / «No, no lo está.» — "Ele está no trabalho?" / "Não, não está."
IPA: /esˈta en el tɾaˈβaxo · no no lo esˈta/ · PT: [está en el trabárro · no no lo está]
«¿Eres de Brasil?» / «Sí, lo soy.» — "Você é do Brasil?" / "Sim, sou."
IPA: /ˈeɾes de bɾaˈsil · si lo soi/ · PT: [éres de brasíl · sí lo sôi]
«¿Está contenta?» / «Sí, lo está.» — "Ela está feliz?" / "Sim, está."
IPA: /esˈta konˈtenta · si lo esˈta/ · PT: [está konténta · sí lo está]
«¿Llegamos pronto?» / «No, no llegamos pronto.» — "Estamos adiantados?" / "Não, não estamos."
IPA: /ʎeˈɣamos ˈpɾonto · no no ʎeˈɣamos ˈpɾonto/ · PT: [lhegámos prónto · no no lhegámos prónto]
«¿Está lloviendo?» / «No, no llueve.» — "Está chovendo?" / "Não, não está."
IPA: /esˈta ʎoˈβjendo · no no ˈʎweβe/ · PT: [está lhobiéndo · no no lhuébe]
«¿Estás cansado?» / «Sí, lo estoy.» — "Você está cansado?" / "Sim, estou."
IPA: /esˈtas kanˈsaðo · si lo esˈtoi/ · PT: [estás kansádo · sí lo estôi]
«¿Está caliente el café?» / «Sí, lo está.» — "O café está quente?" / "Sim, está."
IPA: /esˈta kaˈljente el kaˈfe · si lo esˈta/ · PT: [está kaliénte el kafé · sí lo está]
«¿Vienen?» / «No, no vienen.» — "Eles estão vindo?" / "Não, não estão."
IPA: /ˈbjenen · no no ˈbjenen/ · PT: [biénen · no no biénen]`;

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
      id: `leccion_1_gramatica_a1_s_es_card_${index++}`,
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

const outputFile = 'public/decks/leccion_1_gramatica_a1_s_es.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['leccion_1_gramatica_a1_s'] = decksMeta['leccion_1_gramatica_a1_s'] || {};
decksMeta['leccion_1_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);

