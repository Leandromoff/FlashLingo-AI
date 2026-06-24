const fs = require('fs');

const rawText = `feliz — feliz (invariável no gênero)
IPA: /feˈliθ/ · PT: [felíth]
triste — triste (invariável)
IPA: /ˈtɾiste/ · PT: [tríste]
alto / alta — alto / alta
IPA: /ˈalto · ˈalta/ · PT: [álto · álta]
bajo / baja — baixo / baixa
IPA: /ˈbaxo · ˈbaxa/ · PT: [bárro · bárra]
joven — jovem (invariável)
IPA: /ˈxoβen/ · PT: [rróben]
viejo / vieja — velho / velha (pessoas: mejor "mayor")
IPA: /ˈbjexo · ˈbjexa/ · PT: [biérro · biérra]
fuerte — forte (invariável)
IPA: /ˈfweɾte/ · PT: [fuérte]
débil — fraco (invariável)
IPA: /ˈdeβil/ · PT: [débil]
gordo / gorda — gordo / gorda
IPA: /ˈɡoɾðo · ˈɡoɾða/ · PT: [górdo · górda]
delgado / delgada — magro / magra
IPA: /delˈɣaðo · delˈɣaða/ · PT: [delgádo · delgáda]
guapo / guapa — bonito / bonita (Espanha)
IPA: /ˈɡwapo · ˈɡwapa/ · PT: [guápo · guápa]
feo / fea — feio / feia
IPA: /ˈfeo · ˈfea/ · PT: [féo · féa]

Outros adjetivos para descrever pessoas
13. amable — gentil / bondoso (invariável)
IPA: /aˈmaβle/ · PT: [amáble]
14. simpático / simpática — simpático
IPA: /simˈpatiko · simˈpatika/ · PT: [simpátiko · simpátika]
15. tímido / tímida — tímido
IPA: /ˈtimiðo · ˈtimiða/ · PT: [tímido · tímida]
16. inteligente — inteligente (invariável)
IPA: /inteliˈxente/ · PT: [intelirrénte]
17. gracioso / graciosa — engraçado
IPA: /ɡɾaˈθjoso · ɡɾaˈθjosa/ · PT: [grathióso · grathiósa]
18. cansado / cansada — cansado
IPA: /kanˈsaðo · kanˈsaða/ · PT: [kansádo · kansáda]
19. majo / maja — legal / bacana (Espanha)
IPA: /ˈmaxo · ˈmaxa/ · PT: [márro · márra]
20. atractivo / atractiva — atraente
IPA: /atɾakˈtiβo · atɾakˈtiβa/ · PT: [atraktíbo · atraktíba]
21. bonito / bonita — bonito / bonita
IPA: /boˈnito · boˈnita/ · PT: [boníto · boníta]
22. esbelto / esbelta — esbelto
IPA: /ezˈβelto · ezˈβelta/ · PT: [esbélto · esbélta]
23. grande — grande (invariável)
IPA: /ˈɡɾande/ · PT: [gránde]
24. pequeño / pequeña — pequeno
IPA: /peˈkeɲo · peˈkeɲa/ · PT: [pekénho · pekénha]
25. sano / sana — saudável
IPA: /ˈsano · ˈsana/ · PT: [sáno · sána]

26. Mi hermano es alto. — Meu irmão é alto.
IPA: /mi eɾˈmano es ˈalto/ · PT: [mi ermáno és álto]
27. Mi hermana es baja. — Minha irmã é baixa.
IPA: /mi eɾˈmana es ˈbaxa/ · PT: [mi ermána és bárra]
28. Mi abuelo es mayor. — Meu avô é idoso.
IPA: /mi aˈβwelo es maˈʝoɾ/ · PT: [mi abuélo és maiór]
29. Mi primo es joven. — Meu primo é joven.
IPA: /mi ˈpɾimo es ˈxoβen/ · PT: [mi prímo és rróben]
30. Mi madre es guapa. — Minha mãe é linda.
IPA: /mi ˈmaðɾe es ˈɡwapa/ · PT: [mi mádre és guápa]

Na academia / saúde
31. Él es muy fuerte. — Ele é muito forte.
IPA: /el es mui ˈfweɾte/ · PT: [él és múi fuérte]
32. Hoy me siento débil. — Hoje me sinto fraco.
IPA: /oi me ˈsjento ˈdeβil/ · PT: [ôi me siénto débil]
33. Ella es delgada y sana. — Ela é magra e saudável.
IPA: /ˈeʎa es delˈɣaða i ˈsana/ · PT: [élha és delgáda i sána]
34. Él quiere ser fuerte. — Ele quer ser forte.
IPA: /el ˈkjeɾe seɾ ˈfweɾte/ · PT: [él kiére sér fuérte]

Saindo com amigos
35. Mi amigo es gracioso. — Meu amigo é engraçado.
IPA: /mi aˈmiɣo es ɡɾaˈθjoso/ · PT: [mi amígo és grathióso]
36. Ella es muy simpática. — Ela é muito simpática.
IPA: /ˈeʎa es mui simˈpatika/ · PT: [élha és múi simpátika]
37. Él es tímido en las fiestas. — Ele é tímido nas festas.
IPA: /el es ˈtimiðo en las ˈfjestas/ · PT: [él és tímido en las fiéstas]
38. Están felices juntos. — Eles estão felizes juntos.
IPA: /esˈtan feˈliθes ˈxuntos/ · PT: [están felíthes rrúntos]

No trabalho / pessoas
39. Mi jefe es amable. — Meu chefe é gentil.
IPA: /mi ˈxefe es aˈmaβle/ · PT: [mi rréfe és amáble]
40. El chico nuevo es inteligente. — O cara novo é inteligente.
IPA: /el ˈtʃiko ˈnweβo es inteliˈxente/ · PT: [el tchíko nuébo és intelirrénte]
41. Ella es una persona maja. — Ela é uma pessoa legal.
IPA: /ˈeʎa es una peɾˈsona ˈmaxa/ · PT: [élha és úna persóna márra]

Descrevendo aparência
42. Él es guapo. — Ele é bonito.
IPA: /el es ˈɡwapo/ · PT: [él és guápo]
43. Ella es guapa. — Ela é bonita.
IPA: /ˈeʎa es ˈɡwapa/ · PT: [élha és guápa]
44. El bebé es pequeño. — O bebê é pequeno.
IPA: /el beˈβe es peˈkeɲo/ · PT: [el bebé és pekénho]
45. El hombre es grande. — O homem é grande.
IPA: /el ˈombɾe es ˈɡɾande/ · PT: [el ómbre és gránde]

Estados e sentimentos
46. Esta noche estoy cansado. — Esta noite estou cansado.
IPA: /ˈesta ˈnotʃe esˈtoi kanˈsaðo/ · PT: [ésta nótche estôi kansádo]
47. Ella parece triste. — Ela parece triste.
IPA: /ˈeʎa paˈɾeθe ˈtɾiste/ · PT: [élha paréthe tríste]
48. Él parece feliz. — Ele parece feliz.
IPA: /el paˈɾeθe feˈliθ/ · PT: [él paréthe felíth]

Comparando
49. Mi perro es pequeño pero fuerte. — Meu cachorro é pequeno mas forte.
IPA: /mi ˈpero es peˈkeɲo ˈpeɾo ˈfweɾte/ · PT: [mi pérro és pekénho péro fuérte]
50. Él es mayor pero está sano. — Ele é idoso mas saudável.
IPA: /el es maˈʝoɾ ˈpeɾo esˈta ˈsano/ · PT: [él és maiór péro está sáno]

51. Ella está contenta. — Ela está feliz.
IPA: /ˈeʎa esˈta konˈtenta/ · PT: [élha está konténta]
52. Él es alto. — Ele é alto.
IPA: /el es ˈalto/ · PT: [él és álto]
53. Ellos son jóvenes. — Eles são jovens.
IPA: /ˈeʎos son ˈxoβenes/ · PT: [élhos son rróbenes]
54. El hombre es fuerte. — O homem é forte.
IPA: /el ˈombɾe es ˈfweɾte/ · PT: [el ómbre és fuérte]

Comparativos
55. Mi hermano es más alto que yo. — Meu irmão é mais alto que eu.
IPA: /mi eɾˈmano es mas ˈalto ke ʝo/ · PT: [mi ermáno és mas álto ke iô]
56. Ella es más joven que su hermana. — Ela é mais nova que a irmã.
IPA: /ˈeʎa es mas ˈxoβen ke su eɾˈmana/ · PT: [élha és mas rróben ke su ermána]
57. ¿Es más fuerte que tú? — Ele é mais forte que você?
IPA: /es mas ˈfweɾte ke tu/ · PT: [és mas fuérte ke tu]
58. No soy tan alto como él. — Eu não sou tão alto quanto ele.
IPA: /no soi tan ˈalto ˈkomo el/ · PT: [no sôi tan álto kómo él]

Perguntas e negações
59. ¿Por qué está triste? — Por que ela está triste?
IPA: /poɾ ke esˈta ˈtɾiste/ · PT: [por ké está tríste]
60. ¿Estás cansado? — Você está cansado?
IPA: /esˈtas kanˈsaðo/ · PT: [estás kansádo]
61. Él no es débil; es fuerte. — Ele não é fraco; é forte.
IPA: /el no es ˈdeβil es ˈfweɾte/ · PT: [él no és débil és fuérte]
62. ¿Cómo es tu amigo? — Como é seu amigo?
IPA: /ˈkomo es tu aˈmiɣo/ · PT: [kómo és tu amígo]

Conectores e tempos verbais
63. Ella es guapa y muy amable. — Ela é linda e muito gentil.
IPA: /ˈeʎa es ˈɡwapa i mui aˈmaβle/ · PT: [élha és guápa i múi amáble]
64. Parece joven, pero tiene cincuenta. — Ele parece jovem, mas tem cinquenta.
IPA: /paˈɾeθe ˈxoβen ˈpeɾo ˈtjene θiŋˈkwenta/ · PT: [paréthe rróben péro tiéne thinkuénta]
65. Ayer estaba triste, pero ahora estoy feliz. — Ontem estava triste, mas agora estou feliz.
IPA: /aˈʝeɾ esˈtaβa ˈtɾiste ˈpeɾo aˈoɾa esˈtoi feˈliθ/ · PT: [aiér estába tríste péro aóra estôi felíth]
66. Mi abuelo era fuerte cuando era joven. — Meu avô era forte cuando era joven.
IPA: /mi aˈβwelo ˈeɾa ˈfweɾte ˈkwando ˈeɾa ˈxoβen/ · PT: [mi abuélo éra fuérte kuándo éra rróben]
67. Se hizo famosa porque tiene talento. — Ela ficou famosa porque tem talento.
IPA: /se ˈiθo faˈmosa ˈpoɾke ˈtjene taˈlento/ · PT: [se ítho famósa pórke tiéne talénto]

As mais ricas
68. Aunque es mayor, todavía es muy fuerte. — Embora seja idoso, ainda é muito forte.
IPA: /ˈawŋke es maˈʝoɾ toðaˈβia es mui ˈfweɾte/ · PT: [áunke és maiór todabía és múi fuérte]
69. Es la persona más guapa que conozco. — Ela é a pessoa mais linda que conheço.
IPA: /es la peɾˈsona mas ˈɡwapa ke koˈnoθko/ · PT: [és la persóna mas guápa ke konóthko]
70. Antes era delgado, pero ahora está más gordo. — Ele costumava ser magro, mas agora está mais gordo.
IPA: /ˈantes ˈeɾa delˈɣaðo ˈpeɾo aˈoɾa esˈta mas ˈɡoɾðo/ · PT: [ántes éra delgádo péro aóra está mas górdo]
71. Dicen que me parezco a mi madre cuando era joven. — Dizem que eu pareço minha mãe quando ela era jovem.
IPA: /ˈdiθen ke me paˈɾeθko a mi ˈmaðɾe ˈkwando ˈeɾa ˈxoβen/ · PT: [díthen ke me paréthko a mi mádre kuándo éra rróben]
72. No es alto, pero es un gran jugador de baloncesto. — Ele não é alto, mas é um ótimo jogador de basquete.
IPA: /no es ˈalto ˈpeɾo es un ɡɾan xuɣaˈðoɾ de balonˈθesto/ · PT: [no és álto péro és un gran rrugadór de balonthésto]
73. Mi hermana es tímida, así que no le gustan las fiestas grandes. — Minha irmã é tímida, então não gosta de festas grandes.
IPA: /mi eɾˈmana es ˈtimiða aˈsi ke no le ˈɡustan las ˈfjestas ˈɡɾandes/ · PT: [mi ermána és tímida así ke no le gústan las fiéstas grándes]
74. ¿Te has fijado en lo feliz que parece hoy? — Você reparou como ela parece feliz hoje?
IPA: /te as fiˈxaðo en lo feˈliθ ke paˈɾeθe oi/ · PT: [te as firrádo en lo felíth ke paréthe ôi]
75. Está fuerte y sano porque hace ejercicio cada día. — Ele é forte e saudável porque se exercita todo dia.
IPA: /esˈta ˈfweɾte i ˈsano ˈpoɾke ˈaθe exeɾˈθiθjo ˈkaða ˈdia/ · PT: [está fuérte i sáno pórke áthe errerthíthio káda día]

«¿Es alto tu hermano?» / «Sí, muy alto.» — "Seu irmão é alto?" / "Sim, muito alto."
IPA: /es ˈalto tu eɾˈmano · si mui ˈalto/ · PT: [és álto tu ermáno · sí múi álto]
«¿Por qué estás triste?» / «He perdido las llaves.» — "Por que você está triste?" / "Perdi as chaves."
IPA: /poɾ ke esˈtas ˈtɾiste · e peɾˈðiðo las ˈʎaβes/ · PT: [por ké estás tríste · e perdído las lhábes]
«¿Es joven?» / «No, es bastante mayor.» — "Ela é jovem?" / "Não, é bem idosa."
IPA: /es ˈxoβen · no es basˈtante maˈʝoɾ/ · PT: [és rróben · no és bastánte maiór]
«¿Estás contento?» / «Sí, muy contento.» — "Você está feliz?" / "Sim, muito feliz."
IPA: /esˈtas konˈtento · si mui konˈtento/ · PT: [estás konténto · sí múi konténto]
«¿Es fuerte?» / «Sí, entrena mucho.» — "Ele é forte?" / "Sim, treina muito."
IPA: /es ˈfweɾte · si enˈtɾena ˈmutʃo/ · PT: [és fuérte · sí entréna mútcho]
«¿Te sientes débil?» / «Un poco, sí.» — "Você se sente fraco?" / "Um pouco, sim."
IPA: /te ˈsjentes ˈdeβil · un ˈpoko si/ · PT: [te siéntes débil · un póko sí]
«¿Cómo es ella?» / «Es alta y delgada.» — "Como ela é?" / "Ela é alta e magra."
IPA: /ˈkomo es ˈeʎa · es ˈalta i delˈɣaða/ · PT: [kómo és élha · és álta i delgáda]
«¿Es guapo?» / «Sí, eso creo.» — "Ele é bonito?" / "Sim, acho que sim."
IPA: /es ˈɡwapo · si ˈeso ˈkɾeo/ · PT: [és guápo · sí éso kréo]
«¿Son simpáticos?» / «Sí, mucho.» — "Eles são simpáticos?" / "Sim, muito."
IPA: /son simˈpatikos · si ˈmutʃo/ · PT: [son simpátikos · sí mútcho]
«¿Es grande tu perro?» / «No, es pequeño.» — "Seu cachorro é grande?" / "Não, é pequeno."
IPA: /es ˈɡɾande tu ˈpero · no es peˈkeɲo/ · PT: [és gránde tu pérro · no és pekénho]
«¿Es guapa?» / «Sí, muchísimo.» — "Ela é linda?" / "Sim, muitíssimo."
IPA: /es ˈɡwapa · si muˈtʃisimo/ · PT: [és guápa · sí mutchísimo]
«¿Estás cansado?» / «Sí, necesito dormir.» — "Você está cansado?" / "Sim, preciso dormir."
IPA: /esˈtas kanˈsaðo · si neθeˈsito doɾˈmiɾ/ · PT: [estás kansádo · sí nethesíto dormír]
«¿Tu profesora es amable?» / «Sí, lo es.» — "Sua professora é gentil?" / "Sim, é."
IPA: /tu pɾofeˈsoɾa es aˈmaβle · si lo es/ · PT: [tu profesóra és amáble · sí lo és]
«¿Es tímido?» / «Un poco, con gente nueva.» — "Ele é tímido?" / "Um pouco, com gente nova."
IPA: /es ˈtimiðo · un ˈpoko kon ˈxente ˈnweβa/ · PT: [és tímido · un póko kon rrénte nuéba]
«¿Quién es más alto, tú o tu hermano?» / «Mi hermano.» — "Quem é mais alto, você ou seu irmão?" / "Meu irmão."
IPA: /kjen es mas ˈalto tu o tu eɾˈmano · mi eɾˈmano/ · PT: [kién és mas álto tu o tu ermáno · mi ermáno]
«¿Tu abuela es mayor?» / «Sí, tiene ochenta.» — "Sua avó é idosa?" / "Sim, tem oitenta."
IPA: /tu aˈβwela es maˈʝoɾ · si ˈtjene oˈtʃenta/ · PT: [tu abuéla és maiór · sí tiéne otchénta]
«¿Estás sano?» / «Sí, hago ejercicio a diario.» — "Você é saudável?" / "Sim, me exercito todo dia."
IPA: /esˈtas ˈsano · si ˈaɣo exeɾˈθiθjo a ˈðjaɾjo/ · PT: [estás sáno · sí águo errerthíthio a diário]
«¿Es gracioso?» / «Sí, me hace reír.» — "Ele é engraçado?" / "Sim, ele me faz rir."
IPA: /es ɡɾaˈθjoso · si me ˈaθe reˈiɾ/ · PT: [és grathióso · sí me áthe reír]
«¿Es inteligente?» / «Sí, muy inteligente.» — "Ela é inteligente?" / "Sim, muito inteligente."
IPA: /es inteliˈxente · si mui inteliˈxente/ · PT: [és intelirrénte · sí múi intelirrénte]
«¿Eres lo bastante fuerte?» / «Creo que sí.» — "Você é forte o suficiente?" / "Acho que sim."
IPA: /ˈeɾes lo basˈtante ˈfweɾte · ˈkɾeo ke si/ · PT: [éres lo bastánte fuérte · kréo ke sí]
«¿Parece joven?» / «Sí, más joven de lo que es.» — "Ele parece jovem?" / "Sim, mais jovem do que é."
IPA: /paˈɾeθe ˈxoβen · si mas ˈxoβen de lo ke es/ · PT: [paréthe rróben · sí mas rróben de lo ke és]
«¿Es pequeño el bebé?» / «Sí, tiene dos meses.» — "O bebê é pequeno?" / "Sim, tem dois meses."
IPA: /es peˈkeɲo el beˈβe · si ˈtjene dos ˈmeses/ · PT: [és pekénho el bebé · sí tiéne dos méses]
«¿Tu amigo es majo?» / «Sí, muy majo.» — "Seu amigo é legal?" / "Sim, muito legal."
IPA: /tu aˈmiɣo es ˈmaxo · si mui ˈmaxo/ · PT: [tu amígo és márro · sí múi márro]
«¿Estás delgado o gordo?» / «Estoy bastante delgado.» — "Você é magro ou gordo?" / "Sou bem magro."
IPA: /esˈtas delˈɣaðo o ˈɡoɾðo · esˈtoi basˈtante delˈɣaðo/ · PT: [estás delgádo o górdo · estôi bastánte delgádo]
«¿Es más guapa que su hermana?» / «Las dos son guapas.» — "Ela é mais bonita que a irmã?" / "As duas são bonitas."
IPA: /es mas ˈɡwapa ke su eɾˈmana · las dos son ˈɡwapas/ · PT: [és mas guápa ke su ermána · las dos son guápas]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;
let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (!line.startsWith('IPA:') && line.includes('—')) {
    let originalLine = line.replace(/^\d+\.\s*/, '');
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `leccion_4_vocabulario_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_4_vocabulario_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_4_vocabulario_a1_s'] = meta['leccion_4_vocabulario_a1_s'] || {};
meta['leccion_4_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
