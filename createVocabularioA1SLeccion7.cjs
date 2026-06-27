const fs = require('fs');

const rawText = `las comidas — refeições
IPA: /las koˈmiðas/ · PT: [las komídas]
el desayuno — café da manhã
IPA: /el desaˈʝuno/ · PT: [el desaiúno]
la comida / el almuerzo — almoço
IPA: /la koˈmiða · el alˈmweɾθo/ · PT: [la komída · el almuérzo]
la cena — jantar
IPA: /la ˈθena/ · PT: [la théna]
la merienda — lanche (da tarde)
IPA: /la meˈɾjenda/ · PT: [la meriénda]

Os alimentos
6. los cereales — cereal
IPA: /los θeɾeˈales/ · PT: [los thereáles]
7. el pan — pão
IPA: /el pan/ · PT: [el pan]
8. el queso — queijo
IPA: /el ˈkeso/ · PT: [el késo]
9. el jamón — presunto
IPA: /el xaˈmon/ · PT: [el rramón]
10. los huevos — ovos
IPA: /los ˈweβos/ · PT: [los uébos]
11. la tostada — torrada
IPA: /la tosˈtaða/ · PT: [la tostáda]
12. la mantequilla — manteiga
IPA: /la manteˈkiʎa/ · PT: [la mantekílha]
13. la mermelada — geleia
IPA: /la meɾmeˈlaða/ · PT: [la mermeláda]
14. el yogur — iogurte
IPA: /el ʝoˈɣuɾ/ · PT: [el iogúr]
15. la fruta — fruta
IPA: /la ˈfɾuta/ · PT: [la frúta]
16. las patatas fritas — batata frita (de pacote) (Espanha)
IPA: /las paˈtatas ˈfɾitas/ · PT: [las patátas frítas]
17. las galletas — biscoitos
IPA: /las ɡaˈʎetas/ · PT: [las galhétas]
18. el bocadillo — sanduíche (Espanha: no pão tipo baguete)
IPA: /el bokaˈðiʎo/ · PT: [el bokadílho]
19. la tarta — bolo
IPA: /la ˈtaɾta/ · PT: [la tárta]
20. la chocolatina — barra de chocolate
IPA: /la tʃokolaˈtina/ · PT: [la tchokolatína]

Bebidas e extras úteis
21. el café — café
IPA: /el kaˈfe/ · PT: [el kafé]
22. la leche — leite
IPA: /la ˈletʃe/ · PT: [la létche]
23. el zumo — suco (Espanha; não "jugo")
IPA: /el ˈθumo/ · PT: [el thúmo]
24. el té — chá
IPA: /el te/ · PT: [el té]
25. la miel — mel
IPA: /la mjel/ · PT: [la miél]

26. Desayuno cereales. — Eu como cereal no café da manhã.
IPA: /desaˈʝuno θeɾeˈales/ · PT: [desaiúno thereáles]
27. Tomo café con leche. — Eu tomo café com leite.
IPA: /ˈtomo kaˈfe kon ˈletʃe/ · PT: [tómo kafé kon létche]
28. Como tostadas con mantequilla. — Eu como torrada com manteiga.
IPA: /ˈkomo tosˈtaðas kon manteˈkiʎa/ · PT: [kómo tostádas kon mantekílha]
29. Pongo mermelada en el pan. — Eu passo geleia no pão.
IPA: /ˈpoŋɡo meɾmeˈlaða en el pan/ · PT: [póngo mermeláda en el pan]
30. También como un yogur. — Eu como um iogurte também.
IPA: /tamˈbjen ˈkomo un ʝoˈɣuɾ/ · PT: [también kómo un iogúr]

No almoço
31. Como un bocadillo a mediodía. — Eu como um sanduíche no almoço.
IPA: /ˈkomo un bokaˈðiʎo a meðjoˈðia/ · PT: [kómo un bokadílho a mediodía]
32. El bocadillo es de jamón y queso. — O sanduíche é de presunto e queijo.
IPA: /el bokaˈðiʎo es de xaˈmon i ˈkeso/ · PT: [el bokadílho és de rramón i késo]
33. Como un poco de fruta. — Eu como uma fruta.
IPA: /ˈkomo un ˈpoko de ˈfɾuta/ · PT: [kómo un póko de frúta]
34. Bebo zumo. — Eu tomo suco.
IPA: /ˈbeβo ˈθumo/ · PT: [bébo thúmo]

Lanche da tarde
35. Quiero merendar algo. — Eu quiero lanchar algo.
IPA: /ˈkjeɾo meɾenˈdaɾ ˈalɣo/ · PT: [kiéro merendár álgo]
36. Como unas galletas. — Eu como uns biscoitos.
IPA: /ˈkomo ˈunas ɡaˈʎetas/ · PT: [kómo únas galhétas]
37. Abro una bolsa de patatas fritas. — Eu abro um pacote de batata frita.
IPA: /ˈaβɾo una ˈbolsa de paˈtatas ˈfɾitas/ · PT: [ábro úna bólsa de patátas frítas]
38. Como una chocolatina. — Eu como uma barra de chocolate.
IPA: /ˈkomo una tʃokolaˈtina/ · PT: [kómo úna tchokolatína]

No jantar
39. Cenamos a las ocho. — Nós jantamos às oito.
IPA: /θeˈnamos a las ˈotʃo/ · PT: [thenámos a las ótcho]
40. Hago huevos para cenar. — Eu faço ovos no jantar.
IPA: /ˈaɣo ˈweβos ˈpaɾa θeˈnaɾ/ · PT: [águo uébos pára thenár]
41. Comemos pan con queso. — Nós comemos pão com queijo.
IPA: /koˈmemos pan kon ˈkeso/ · PT: [komémos pan kon késo]
42. Hay tarta de postre. — Tem bolo de sobremesa.
IPA: /ai ˈtaɾta de ˈpostɾe/ · PT: [ái tárta de póstre]

No mercado
43. Compro pan y leche. — Eu compro pão e leite.
IPA: /ˈkompɾo pan i ˈletʃe/ · PT: [kómpro pan i létche]
44. Necesitamos huevos y mantequilla. — Precisamos de ovos e manteiga.
IPA: /neθesiˈtamos ˈweβos i manteˈkiʎa/ · PT: [nethesitámos uébos i mantekílha]
45. El queso está fresco. — O queijo está fresco.
IPA: /el ˈkeso esˈta ˈfɾesko/ · PT: [el késo está frésko]

Café com amigos
46. ¿Quieres té? — Você quer um chá?
IPA: /ˈkjeɾes te/ · PT: [kiéres té]
47. Yo tomaré un café, por favor. — Vou querer um café, por favor.
IPA: /ʝo tomaˈɾe un kaˈfe poɾ faˈβoɾ/ · PT: [io tomaré un kafé por fabór]
48. Esta tarta está deliciosa. — Este bolo está delicioso.
IPA: /ˈesta ˈtaɾta esˈta deliˈθjosa/ · PT: [ésta tárta está delithiósa]
49. Toma una galleta. — Pega um biscoito.
IPA: /ˈtoma una ɡaˈʎeta/ · PT: [tóma úna galhéta]
50. La fruta está muy dulce. — A fruta está bem doce.
IPA: /la ˈfɾuta esˈta mui ˈdulθe/ · PT: [la frúta está múi dúlthe]

51. Me gusta el queso. — Eu gosto de queijo.
IPA: /me ˈɡusta el ˈkeso/ · PT: [me gústa el késo]
52. Ella come fruta. — Ela come fruta.
IPA: /ˈeʎa ˈkome ˈfɾuta/ · PT: [élha kóme frúta]
53. Bebemos café. — Nós tomamos café.
IPA: /beˈβemos kaˈfe/ · PT: [bebémos kafé]
54. Él quiere un bocadillo. — Ele quer um sanduíche.
IPA: /el ˈkjeɾe un bokaˈðiʎo/ · PT: [él kiére un bokadílho]

Um pouco mais
55. Normalmente desayuno huevos. — Eu geralmente como ovos no café da manhã.
IPA: /noɾˈmalmente desaˈʝuno ˈweβos/ · PT: [normalménte desaiúno uébos]
56. Ella no come pan. — Ela não come pão.
IPA: /ˈeʎa no ˈkome pan/ · PT: [élha no kóme pan]
57. ¿Te gusta el yogur? — Você gosta de iogurte?
IPA: /te ˈɡusta el ʝoˈɣuɾ/ · PT: [te gústa el iogúr]
58. No hay mantequilla. — Não tem manteiga.
IPA: /no ai manteˈkiʎa/ · PT: [no ái mantekílha]

Perguntas e negações
59. ¿Qué comes a mediodía? — O que você come no almoço?
IPA: /ke ˈkomes a meðjoˈðia/ · PT: [ke kómes a mediodía]
60. ¿Cuántos huevos quieres? — Quantos ovos você quer?
IPA: /ˈkwantos ˈweβos ˈkjeɾes/ · PT: [kuántos uébos kiéres]
61. No me gusta mucho el jamón. — Eu não gosto muito de presunto.
IPA: /no me ˈɡusta ˈmutʃo el xaˈmon/ · PT: [no me gústa mútcho el rramón]
62. ¿Queda algo de tarta? — Sobrou bolo?
IPA: /ˈkeða ˈalɣo de ˈtaɾta/ · PT: [kéda álgo de tárta]

Conectores e tempos verbais
63. Como tostadas porque me encanta la mantequilla. — Eu como torrada porque adoro manteiga.
IPA: /ˈkomo tosˈtaðas ˈpoɾke me eŋˈkanta la manteˈkiʎa/ · PT: [kómo tostádas pórke me enkánta la mantekílha]
64. Está haciendo un bocadillo ahora. — Ela está fazendo um sanduíche agora.
IPA: /esˈta aˈθjendo un bokaˈðiʎo aˈoɾa/ · PT: [está athiéndo un bokadílho aóra]
65. Ayer comimos tarta en la fiesta. — Nós comemos bolo na festa ontem.
IPA: /aˈʝeɾ koˈmimos ˈtaɾta en la ˈfjesta/ · PT: [aiér komímos tárta en la fiésta]
66. Estaba comiendo cereales cuando llamaste. — Eu estava comendo cereal quando você ligou.
IPA: /esˈtaβa koˈmjendo θeɾeˈales ˈkwando ʎaˈmaste/ · PT: [estába komiéndo thereáles kuándo lhamáste]
67. Compró pan, queso y jamón. — Ele comprou pão, queijo e presunto.
IPA: /komˈpɾo pan ˈkeso i xaˈmon/ · PT: [kompró pan késo i rramón]

As mais ricas
68. Siempre desayuno mucho, pero ceno poco. — Eu sempre tomo um café da manhã reforçado, mas janto pouco.
IPA: /ˈsjempɾe desaˈʝuno ˈmutʃo ˈpeɾo ˈθeno ˈpoko/ · PT: [siémpre desaiúno mútcho péro théno póko]
69. No come chocolatinas porque son demasiado dulces. — Ela não come barras de chocolate porque são muito doces.
IPA: /no ˈkome tʃokolaˈtinas ˈpoɾke son demaˈsjaðo ˈdulθes/ · PT: [no kóme tchokolatínas pórke son demasiádo dúlthes]
70. Si tienes hambre, come fruta o un yogur. — Se você está com fome, coma uma fruta ou um iogurte.
IPA: /si ˈtjenes ˈambɾe ˈkome ˈfɾuta o un ʝoˈɣuɾ/ · PT: [si tiénes âmbre kóme frúta o un iogúr]
71. ¿Quieres café o té con la tarta? — Você quer café ou chá com o bolo?
IPA: /ˈkjeɾes kaˈfe o te kon la ˈtaɾta/ · PT: [kiéres kafé o té kon la tárta]
72. Normalmente comemos huevos y tostadas, pero hoy comimos cereales. — Geralmente comemos ovos e torrada, mas hoje comemos cereal.
IPA: /noɾˈmalmente koˈmemos ˈweβos i tosˈtaðas ˈpeɾo oi koˈmimos θeɾeˈales/ · PT: [normalménte komémos uébos i tostádas péro ôi komímos thereáles]
73. Después de comer, me gusta tomar algo dulce, como una galleta. — Depois do almoço, gosto de comer algo doce, como um biscoito.
IPA: /desˈpwes de koˈmeɾ me ˈɡusta toˈmaɾ ˈalɣo ˈdulθe ˈkomo una ɡaˈʎeta/ · PT: [después de komér me gústa tomár álgo dúlthe kómo úna galhéta]
74. ¿Prefieres un bocadillo de jamón o de queso? — Você prefere um sanduíche de presunto ou de queijo?
IPA: /pɾeˈfjeɾes un bokaˈðiʎo de xaˈmon o de ˈkeso/ · PT: [prefiéres un bokadílho de rramón o de késo]
75. No había leche, así que comí los cereales con yogur. — Não tinha leite, então comi o cereal com iogurte.
IPA: /no aˈβia ˈletʃe aˈsi ke koˈmi los θeɾeˈales kon ʝoˈɣuɾ/ · PT: [no abía létche así ke komí los thereáles kon iogúr]

«¿Qué quieres para desayunar?» / «Cereales, por favor.» — "O que você quer no café?" / "Cereal, por favor."
IPA: /ke ˈkjeɾes ˈpaɾa desaʝuˈnaɾ · θeɾeˈales poɾ faˈβoɾ/ · PT: [ke kiéres pára desaiunár · thereáles por fabór]
«¿Te gusta el queso?» / «Sí, me encanta.» — "Você gosta de queijo?" / "Sim, eu adoro."
IPA: /te ˈɡusta el ˈkeso · si me eŋˈkanta/ · PT: [te gústa el késo · sí me enkánta]
«¿Hay pan?» / «Sí, en la mesa.» — "Tem pão?" / "Sim, na mesa."
IPA: /ai pan · si en la ˈmesa/ · PT: [ái pan · sí en la mésa]
«¿Qué lleva el bocadillo?» / «Jamón y queso.» — "O que tem no sanduíche?" / "Presunto e queijo."
IPA: /ke ˈʎeβa el bokaˈðiʎo · xaˈmon i ˈkeso/ · PT: [ke lhéba el bokadílho · rramón i késo]
«¿Quieres merendar algo?» / «Sí, un poco de fruta.» — "Você quer lanchar algo?" / "Sim, uma fruta."
IPA: /ˈkjeɾes meɾenˈdaɾ ˈalɣo · si un ˈpoko de ˈfɾuta/ · PT: [kiéres merendár álgo · sí un póko de frúta]
«¿Café o té?» / «Café, por favor.» — "Café ou chá?" / "Café, por favor."
IPA: /kaˈfe o te · kaˈfe poɾ faˈβoɾ/ · PT: [kafé o té · kafé por fabór]
«¿Cuántos huevos?» / «Dos, por favor.» — "Quantos ovos?" / "Dois, por favor."
IPA: /ˈkwantos ˈweβos · dos poɾ faˈβoɾ/ · PT: [kuántos uébos · dos por fabór]
«¿Cenáis tarde?» / «Sí, sobre las nueve.» — "Vocês jantam tarde?" / "Sim, por volta das nove."
IPA: /θeˈnais ˈtaɾðe · si ˈsoβɾe las ˈnweβe/ · PT: [thenáis tárde · sí sóbre las nuébe]
«¿Está buena la tarta?» / «Sí, deliciosa.» — "O bolo está bom?" / "Sim, delicioso."
IPA: /esˈta ˈbwena la ˈtaɾta · si deliˈθjosa/ · PT: [está buéna la tárta · sí delithiósa]
«¿Quieres mantequilla en la tostada?» / «Sí, por favor.» — "Você quer manteiga na torrada?" / "Sim, por favor."
IPA: /ˈkjeɾes manteˈkiʎa en la tosˈtaða · si poɾ faˈβoɾ/ · PT: [kiéres mantekílha en la tostáda · sí por fabór]
«¿Qué hay para comer?» / «Un bocadillo.» — "O que tem pro almoço?" / "Um sanduíche."
IPA: /ke ai ˈpaɾa koˈmeɾ · un bokaˈðiʎo/ · PT: [ke ái pára komér · un bokadílho]
«¿Te gusta el yogur?» / «No mucho.» — "Você gosta de iogurte?" / "Nem tanto."
IPA: /te ˈɡusta el ʝoˈɣuɾ · no ˈmutʃo/ · PT: [te gústa el iogúr · no mútcho]
«¿Puedo coger una galleta?» / «Claro, coge una.» — "Posso pegar um biscoito?" / "Claro, pega um."
IPA: /ˈpweðo koˈxeɾ una ɡaˈʎeta · ˈklaɾo ˈkoxe una/ · PT: [puédo korrér úna galhéta · kláro kórre úna]
«¿Hay mermelada?» / «Sí, de fresa.» — "Tem geleia?" / "Sim, de morango."
IPA: /ai meɾmeˈlaða · si de ˈfɾesa/ · PT: [ái mermeláda · sí de frésa]
«¿Qué bebes por la mañana?» / «Zumo.» — "O que você bebe de manhã?" / "Suco."
IPA: /ke ˈbeβes poɾ la maˈɲana · ˈθumo/ · PT: [ke bébes por la manhána · thúmo]
«¿Quieres patatas fritas?» / «Sí, tengo hambre.» — "Você quer batata frita?" / "Sim, estou com fome."
IPA: /ˈkjeɾes paˈtatas ˈfɾitas · si ˈteŋɡo ˈambɾe/ · PT: [kiéres patátas frítas · sí téngo âmbre]
«¿Dónde está el queso?» / «En la nevera.» — "Onde está o queijo?" / "Na geladeira."
IPA: /ˈdonde esˈta el ˈkeso · en la neˈβeɾa/ · PT: [dônde está el késo · en la nebéra]
«¿Desayunas cada día?» / «Sí, siempre.» — "Você toma café todo dia?" / "Sim, sempre."
IPA: /desaˈʝunas ˈkaða ˈdia · si ˈsjempɾe/ · PT: [desaiúnas káda día · sí siémpre]
«¿Cuál es tu merienda favorita?» / «Una chocolatina.» — "Qual é seu lanche favorito?" / "Uma barra de chocolate."
IPA: /kwal es tu meˈɾjenda faβoˈɾita · una tʃokolaˈtina/ · PT: [kuál és tu meriénda faboríta · úna tchokolatína]
«¿Está fresca la fruta?» / «Sí, muy fresca.» — "A fruta está fresca?" / "Sim, bem fresca."
IPA: /esˈta ˈfɾeska la ˈfɾuta · si mui ˈfɾeska/ · PT: [está fréska la frúta · sí múi fréska]
«¿Quieres leche en el café?» / «No, solo, por favor.» — "Você quer leite no café?" / "Não, puro, por favor."
IPA: /ˈkjeɾes ˈletʃe en el kaˈfe · no ˈsolo poɾ faˈβoɾ/ · PT: [kiéres létche en el kafé · no sólo por fabór]
«¿A qué hora es la cena?» / «A las ocho.» — "A que horas é o jantar?" / "Às oito."
IPA: /a ke ˈoɾa es la ˈθena · a las ˈotʃo/ · PT: [a ke óra és la théna · a las ótcho]
«¿Prefieres algo dulce o salado?» / «Dulce.» — "Você prefere algo doce ou salgado?" / "Doce."
IPA: /pɾeˈfjeɾes ˈalɣo ˈdulθe o saˈlaðo · ˈdulθe/ · PT: [prefiéres álgo dúlthe o saládo · dúlthe]
«¿Hay jamón en la nevera?» / «No, se ha acabado.» — "Tem presunto na geladeira?" / "Não, acabou."
IPA: /ai xaˈmon en la neˈβeɾa · no se a akaˈβaðo/ · PT: [ái rramón en la nebéra · no se a akabádo]
«¿Quieres un poco de tarta?» / «Sí, un trozo pequeño.» — "Você quer um pouco de bolo?" / "Sim, um pedaço pequeno."
IPA: /ˈkjeɾes un ˈpoko de ˈtaɾta · si un ˈtɾoθo peˈkeɲo/ · PT: [kiéres un póko de tárta · sí un trótho pekénho]
`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;
let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (!line.startsWith('IPA:') && line.includes('—')) {
    let originalLine = line.replace(/^«/, '').replace(/»$/, '');
    originalLine = originalLine.replace(/^\d+\.\s*/, '');
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `leccion_7_vocabulario_a1_s_es_card_${index++}`,
      word,
      translation,
      pronunciation: '',
      portuguesePhonetic: ''
    };
    cards.push(currentCard);
  } else if (line.startsWith('IPA:')) {
    const parts = line.split('· PT:');
    let ipaPart = parts[0].replace('IPA:', '').trim();
    let ptPart = parts[1] ? parts[1].trim() : '';
    if (currentCard) {
      currentCard.pronunciation = ipaPart;
      currentCard.portuguesePhonetic = ptPart;
    }
  }
}

const fileDest = 'public/decks/leccion_7_vocabulario_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_7_vocabulario_a1_s'] = meta['leccion_7_vocabulario_a1_s'] || {};
meta['leccion_7_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
