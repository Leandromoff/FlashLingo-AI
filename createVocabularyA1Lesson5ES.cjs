const fs = require('fs');

const rawText = `despertarse — acordar
IPA: /despeɾˈtaɾse/ · PT: [despertárse]
levantarse — levantar (da cama)
IPA: /leβanˈtaɾse/ · PT: [lebantárse]
lavarse los dientes — escovar os dentes
IPA: /laˈβaɾse los ˈdjentes/ · PT: [labárse los diéntes]
desayunar — tomar café da manhã
IPA: /desaʝuˈnaɾ/ · PT: [desaiunár]
ducharse — tomar banho
IPA: /duˈtʃaɾse/ · PT: [dutchárse]
vestirse — vestir-se
IPA: /besˈtiɾse/ · PT: [bestírse]
ir al trabajo — ir para o trabalho
IPA: /iɾ al tɾaˈβaxo/ · PT: [ir al trabárro]
empezar a trabajar — começar a trabalhar
IPA: /empeˈθaɾ a tɾaβaˈxaɾ/ · PT: [empethár a trabarrár]
revisar el correo — verificar os e-mails
IPA: /reβiˈsaɾ el koˈreo/ · PT: [rebisár el korréo]
comer — almoçar (refeição do meio-dia na Espanha)
IPA: /koˈmeɾ/ · PT: [komér]
terminar de trabajar — terminar o trabalho
IPA: /teɾmiˈnaɾ de tɾaβaˈxaɾ/ · PT: [terminár de trabarrár]
volver a casa — voltar para casa
IPA: /bolˈβeɾ a ˈkasa/ · PT: [bolbér a kása]
hacer los deberes — fazer a lição de casa
IPA: /aˈθeɾ los deˈβeɾes/ · PT: [athér los debéres]
salir a correr — ir correr
IPA: /saˈliɾ a koˈreɾ/ · PT: [salír a korrér]
ir al gimnasio — ir à academia
IPA: /iɾ al ximˈnasjo/ · PT: [ir al rrimnásio]
ir de compras — fazer compras
IPA: /iɾ de ˈkompɾas/ · PT: [ir de kómpras]
cocinar la cena — cozinhar o jantar
IPA: /koθiˈnaɾ la ˈθena/ · PT: [kothinár la théna]
cenar — jantar
IPA: /θeˈnaɾ/ · PT: [thenár]
ver la tele — assistir TV
IPA: /beɾ la ˈtele/ · PT: [bér la téle]
acostarse — ir dormir / deitar-se
IPA: /akosˈtaɾse/ · PT: [akostárse]

Outras ações da rotina
21. arreglarse — se aprontar
IPA: /areˈɣlaɾse/ · PT: [arreglárse]
22. hacer la cama — arrumar a cama
IPA: /aˈθeɾ la ˈkama/ · PT: [athér la káma]
23. peinarse — pentear o cabelo
IPA: /peiˈnaɾse/ · PT: [peinárse]
24. echarse una siesta — tirar uma soneca
IPA: /eˈtʃaɾse una ˈsjesta/ · PT: [etchárse úna siésta]
25. relajarse — relaxar
IPA: /relaˈxaɾse/ · PT: [relarrárse]

26. Me despierto a las siete. — Eu acordo às sete.
IPA: /me desˈpjeɾto a las ˈsjete/ · PT: [me despiérto a las siéte]
27. Me levanto y me estiro. — Eu levanto e me espreguiço.
IPA: /me leˈβanto i me esˈtiɾo/ · PT: [me lebánto i me estíro]
28. Hago la cama. — Eu arrumo a cama.
IPA: /ˈaɣo la ˈkama/ · PT: [águo la káma]
29. Me lavo los dientes. — Eu escovo os dentes.
IPA: /me ˈlaβo los ˈdjentes/ · PT: [me lábo los diéntes]
30. Me ducho rápido. — Eu tomo um banho rápido.
IPA: /me ˈdutʃo ˈrapiðo/ · PT: [me dútcho rrápido]

31. Me visto. — Eu me visto.
IPA: /me ˈbisto/ · PT: [me bísto]
32. Desayuno. — Eu tomo café da manhã.
IPA: /desaˈʝuno/ · PT: [desaiúno]
33. Tomo una taza de café. — Eu tomo uma xícara de café.
IPA: /ˈtomo una ˈtaθa de kaˈfe/ · PT: [tómo úna tátha de kafé]
34. Miro el móvil. — Eu olho o celular.
IPA: /ˈmiɾo el ˈmoβil/ · PT: [míro el móbil]
35. Salgo de casa. — Eu saio de casa.
IPA: /ˈsalɣo de ˈkasa/ · PT: [sálgo de kása]

36. Voy al trabajo en autobús. — Eu vou para o trabalho de ônibus.
IPA: /boi al tɾaˈβaxo en awtoˈβus/ · PT: [bôi al trabárro en autobús]
37. Empiezo a trabajar a las nueve. — Eu começo a trabalhar às nove.
IPA: /emˈpjeθo a tɾaβaˈxaɾ a las ˈnweβe/ · PT: [empiétho a trabarrár a las nuébe]
38. Reviso el correo. — Eu verifico os e-mails.
IPA: /reˈβiso el koˈreo/ · PT: [rebíso el korréo]
39. Como al mediodía. — Eu almoço ao meio-dia.
IPA: /ˈkomo al meðjoˈðia/ · PT: [kómo al mediodía]
40. Termino de trabajar a las cinco. — Eu termino o trabalho às cinco.
IPA: /teɾˈmino de tɾaβaˈxaɾ a las ˈθiŋko/ · PT: [termíno de trabarrár a las thínko]

41. Vuelvo a casa. — Eu volto para casa.
IPA: /ˈbwelβo a ˈkasa/ · PT: [buélbo a kása]
42. Hago los deberes. — Eu faço a lição de casa.
IPA: /ˈaɣo los deˈβeɾes/ · PT: [águo los debéres]
43. Salgo a correr. — Eu vou correr.
IPA: /ˈsalɣo a koˈreɾ/ · PT: [sálgo a korrér]
44. Voy al gimnasio. — Eu vou à academia.
IPA: /boi al ximˈnasjo/ · PT: [bôi al rrimnásio]

À noite
45. Voy de compras. — Eu faço compras.
IPA: /boi de ˈkompɾas/ · PT: [bôi de kómpras]
46. Cocino la cena. — Eu cozinho o jantar.
IPA: /koˈθino la ˈθena/ · PT: [kothíno la théna]
47. Ceno con mi familia. — Eu janto com minha família.
IPA: /ˈθeno kon mi faˈmilja/ · PT: [théno kon mi famílha]
48. Veo la tele. — Eu assisto TV.
IPA: /ˈbeo la ˈtele/ · PT: [béo la téle]
49. Me relajo en el sofá. — Eu relaxo no sofá.
IPA: /me reˈlaxo en el soˈfa/ · PT: [me relárro en el sofá]
50. Me acuesto a las once. — Eu vou dormir às onze.
IPA: /me aˈkwesto a las ˈonθe/ · PT: [me akuésto a las ónthe]

51. Me despierto temprano. — Eu acordo cedo.
IPA: /me desˈpjeɾto temˈpɾano/ · PT: [me despiérto tempráno]
52. Ella desayuna. — Ela toma café da manhã.
IPA: /ˈeʎa desaˈʝuna/ · PT: [élha desaiúna]
53. Él va al trabajo. — Ele vai para o trabalho.
IPA: /el ba al tɾaˈβaxo/ · PT: [él ba al trabárro]
54. Vemos la tele. — Nós assistimos TV.
IPA: /ˈbemos la ˈtele/ · PT: [bémos la téle]

55. Siempre me lavo los dientes. — Eu sempre escovo os dentes.
IPA: /ˈsjempɾe me ˈlaβo los ˈdjentes/ · PT: [siémpre me lábo los diéntes]
56. Ella suele levantarse a las seis. — Ela geralmente levanta às seis.
IPA: /ˈeʎa ˈswele leβanˈtaɾse a las seis/ · PT: [élha suéle lebantárse a las séis]
57. Él nunca desayuna. — Ele nunca toma café da manhã.
IPA: /el ˈnuŋka desaˈʝuna/ · PT: [él núnka desaiúna]
58. Van al gimnasio a menudo. — Eles vão à academia com frequência.
IPA: /ban al ximˈnasjo a meˈnuðo/ · PT: [ban al rrimnásio a menúdo]

59. ¿A qué hora te despiertas? — A que horas você acorda?
IPA: /a ke ˈoɾa te desˈpjeɾtas/ · PT: [a ké óra te despiértas]
60. ¿Cocina la cena cada día? — Ela cozinha o jantar todo dia?
IPA: /koˈθina la ˈθena ˈkaða ˈdia/ · PT: [kothína la théna káda día]
61. No veo la tele por la noche. — Eu não assisto TV à noite.
IPA: /no ˈbeo la ˈtele poɾ la ˈnotʃe/ · PT: [no béo la téle por la nótche]
62. ¿Por qué te acuestas tan tarde? — Por que você vai dormir tão tarde?
IPA: /poɾ ke te aˈkwestas tan ˈtaɾðe/ · PT: [por ké te akuéstas tan tárde]

63. Reviso el correo cuando empiezo a trabajar. — Eu verifico os e-mails quando começo a trabalhar.
IPA: /reˈβiso el koˈreo ˈkwando emˈpjeθo a tɾaβaˈxaɾ/ · PT: [rebíso el korréo kuándo empiétho a trabarrár]
64. Está cocinando la cena ahora. — Ela está cozinhando o jantar agora.
IPA: /esˈta koθiˈnando la ˈθena aˈoɾa/ · PT: [está kothinándo la théna aóra]
65. Ayer salí a correr por la mañana. — Eu fui correr ontem de manhã.
IPA: /aˈʝeɾ saˈli a koˈreɾ poɾ la maˈɲana/ · PT: [aiér salí a korrér por la manhána]
66. Estaba durmiendo cuando llamé. — Ele estava dormindo quando liguei.
IPA: /esˈtaβa duɾˈmjendo ˈkwando ʎaˈme/ · PT: [estába durmiéndo kuándo lhamé]
67. Vimos la tele después de cenar. — Nós assistimos TV depois de jantar.
IPA: /ˈbimos la ˈtele desˈpwes de θeˈnaɾ/ · PT: [bímos la téle después de thenár]

68. Me ducho antes de ir al trabajo. — Eu tomo banho antes de ir para o trabalho.
IPA: /me ˈdutʃo ˈantes de iɾ al tɾaˈβaxo/ · PT: [me dútcho ántes de ir al trabárro]
69. Va al gimnasio porque quiere estar sana. — Ela vai à academia porque quer ser saudável.
IPA: /ba al ximˈnasjo ˈpoɾke ˈkjeɾe esˈtaɾ ˈsana/ · PT: [ba al rrimnásio pórke kiére estár sána]
70. Normalmente cocino la cena, pero esta noche pediremos pizza. — Eu geralmente cozinho o jantar, mas hoje vamos pedir pizza.
IPA: /noɾˈmalmente koˈθino la ˈθena ˈpeɾo ˈesta ˈnotʃe peðiˈɾemos ˈpitsa/ · PT: [normalménte kothíno la théna péro ésta nótche pedirémos pítsa]
71. Después de terminar de trabajar, vuelve a casa y se relaja. — Depois que ele termina o trabalho, ele volta para casa e relaxa.
IPA: /desˈpwes de teɾmiˈnaɾ de tɾaβaˈxaɾ ˈbwelβe a ˈkasa i se reˈlaxa/ · PT: [después de terminár de trabarrár buélbe a kása i se relárra]
72. No hice los deberes porque estaba muy cansado. — Eu não fiz a lição porque estaba muito cansado.
IPA: /no ˈiθe los deˈβeɾes ˈpoɾke esˈtaβa mui kanˈsaðo/ · PT: [no íthe los debéres pórke estába múi kansádo]
73. Se despierta temprano, así que siempre desayuna. — Ela acorda cedo, então sempre toma café da manhã.
IPA: /se desˈpjeɾta temˈpɾano aˈsi ke ˈsjempɾe desaˈʝuna/ · PT: [se despiérta tempráno así ke siémpre desaiúna]
74. ¿Vas de compras los fines de semana o después del trabajo? — Você faz compras nos fins de semana ou depois do trabalho?
IPA: /bas de ˈkompɾas los ˈfines de seˈmana o desˈpwes del tɾaˈβaxo/ · PT: [bas de kómpras los fínes de semána o después del trabárro]
75. Cuando llego a casa, me quito los zapatos y descanso. — Quando chego em casa, tiro os sapatos e descanso.
IPA: /ˈkwando ˈʎeɣo a ˈkasa me ˈkito los θaˈpatos i desˈkanso/ · PT: [kuándo lhégo a kása me kíto los thapátos i deskánso]

«¿A qué hora te despiertas?» / «A las siete.» — "A que horas você acorda?" / "Às sete."
IPA: /a ke ˈoɾa te desˈpjeɾtas · a las ˈsjete/ · PT: [a ké óra te despiértas · a las siéte]
«¿Desayunas?» / «Sí, cada día.» — "Você toma café da manhã?" / "Sim, todo dia."
IPA: /desaˈʝunas · si ˈkaða ˈdia/ · PT: [desaiúnas · sí káda día]
«¿A qué hora empiezas a trabajar?» / «A las nueve.» — "A que horas você começa a trabalhar?" / "Às nove."
IPA: /a ke ˈoɾa emˈpjeθas a tɾaβaˈxaɾ · a las ˈnweβe/ · PT: [a ké óra empiéthas a trabarrár · a las nuébe]
«¿Vas al gimnasio?» / «Sí, tres veces por semana.» — "Você vai à academia?" / "Sim, três vezes por semana."
IPA: /bas al ximˈnasjo · si tɾes ˈbeθes poɾ seˈmana/ · PT: [bas al rrimnásio · sí trés béthes por semána]
«¿Qué haces después del trabajo?» / «Cocino la cena.» — "O que você faz depois do trabalho?" / "Eu cozinho o jantar."
IPA: /ke ˈaθes desˈpwes del tɾaˈβaxo · koˈθino la ˈθena/ · PT: [ke áthes después del trabárro · kothíno la théna]
«¿Ves la tele por la noche?» / «A veces.» — "Você assiste TV à noite?" / "Às vezes."
IPA: /bes la ˈtele poɾ la ˈnotʃe · a ˈbeθes/ · PT: [bes la téle por la nótche · a béthes]
«¿Cuándo haces los deberes?» / «Después de cenar.» — "Quando você faz a lição?" / "Depois de jantar."
IPA: /ˈkwando ˈaθes los deˈβeɾes · desˈpwes de θeˈnaɾ/ · PT: [kuándo áthes los debéres · después de thenár]
«¿Te duchas por la mañana?» / «Sí, siempre.» — "Você toma banho de manhã?" / "Sim, sempre."
IPA: /te ˈdutʃas poɾ la maˈɲana · si ˈsjempɾe/ · PT: [te dútchas por la manhána · sí siémpre]
«¿A qué hora te acuestas?» / «Sobre las once.» — "A que horas você vai dormir?" / "Por volta das onze."
IPA: /a ke ˈoɾa te aˈkwestas · ˈsoβɾe las ˈonθe/ · PT: [a ké óra te akuéstas · sóbre las ónthe]
«¿Sales a correr?» / «Sí, cada mañana.» — "Você vai correr?" / "Sim, toda manhã."
IPA: /ˈsales a koˈreɾ · si ˈkaða maˈɲana/ · PT: [sáles a korrér · sí káda manhána]
«¿Cuándo revisas el correo?» / «Nada más llegar al trabajo.» — "Quando você verifica os e-mails?" / "Assim que chego ao trabalho."
IPA: /ˈkwando reˈβisas el koˈreo · ˈnaða mas ʎeˈɣaɾ al tɾaˈβaxo/ · PT: [kuándo rebísas el korréo · náda mas lhegár al trabárro]
«¿Cocinas cada día?» / «No, a veces pido comida.» — "Você cozinha todo dia?" / "Não, às vezes peço comida."
IPA: /koˈθinas ˈkaða ˈdia · no a ˈbeθes ˈpiðo koˈmiða/ · PT: [kothínas káda día · no a béthes pído komída]
«¿A qué hora terminas de trabajar?» / «A las cinco.» — "A que horas você termina o trabalho?" / "Às cinco."
IPA: /a ke ˈoɾa teɾˈminas de tɾaβaˈxaɾ · a las ˈθiŋko/ · PT: [a ké óra termínas de trabarrár · a las thínko]
«¿Vas de compras a menudo?» / «Una vez por semana.» — "Você faz compras com frequência?" / "Uma vez por semana."
IPA: /bas de ˈkompɾas a meˈnuðo · una beθ poɾ seˈmana/ · PT: [bas de kómpras a menúdo · úna béth por semána]
«¿Comes en el trabajo?» / «Sí, como allí.» — "Você almoça no trabalho?" / "Sim, almoço lá."
IPA: /ˈkomes en el tɾaˈβaxo · si ˈkomo aˈʎi/ · PT: [kómes en el trabárro · sí kómo alhí]
«¿Cuándo te levantas?» / «Justo después de despertarme.» — "Quando você levanta?" / "Logo depois de acordar."
IPA: /ˈkwando te leˈβantas · ˈxusto desˈpwes de despeɾˈtaɾme/ · PT: [kuándo te lebántas · rrústo después de despertárme]
«¿Te lavas los dientes después de desayunar?» / «Sí, claro.» — "Você escova os dentes depois do café?" / "Sim, claro."
IPA: /te ˈlaβas los ˈdjentes desˈpwes de desaʝuˈnaɾ · si ˈklaɾo/ · PT: [te lábas los diéntes después de desaiunár · sí kláro]
«¿Cómo vas al trabajo?» / «En autobús.» — "Como você vai para o trabalho?" / "De ônibus."
IPA: /ˈkomo bas al tɾaˈβaxo · en awtoˈβus/ · PT: [kómo bas al trabárro · en autobús]
«¿Te relajas por la noche?» / «Sí, veo la tele.» — "Você relaxa à noite?" / "Sim, assisto TV."
IPA: /te reˈlaxas poɾ la ˈnotʃe · si ˈbeo la ˈtele/ · PT: [te relárras por la nótche · sí béo la téle]
«¿Cuál es tu rutina de mañana?» / «Me ducho y desayuno.» — "Qual é sua rotina de manhã?" / "Tomo banho e tomo café."
IPA: /kwal es tu ruˈtina de maˈɲana · me ˈdutʃo i desaˈʝuno/ · PT: [kuál és tu rutína de manhána · me dútcho i desaiúno]
«¿Te acuestas pronto?» / «No, bastante tarde.» — "Você dorme cedo?" / "Não, bem tarde."
IPA: /te aˈkwestas ˈpɾonto · no basˈtante ˈtaɾðe/ · PT: [te akuéstas prónto · no bastánte tárde]
«¿Cuándo cenas?» / «Sobre las nueve.» — "Quando você janta?" / "Por volta das nove."
IPA: /ˈkwando ˈθenas · ˈsoβɾe las ˈnweβe/ · PT: [kuándo thénas · sóbre las nuébe]
«¿Haces la cama?» / «Sí, cada mañana.» — "Você arruma a cama?" / "Sim, toda manhã."
IPA: /ˈaθes la ˈkama · si ˈkaða maˈɲana/ · PT: [áthes la káma · sí káda manhána]
«¿Qué haces los fines de semana?» / «Duermo hasta tarde.» — "O que você faz nos fins de semana?" / "Durmo até tarde."
IPA: /ke ˈaθes los ˈfines de seˈmana · ˈdweɾmo ˈasta ˈtaɾðe/ · PT: [ke áthes los fínes de semána · duérmo ásta tárde]
«¿Tienes una rutina ajetreada?» / «Sí, muy ajetreada.» — "Você tem uma rotina corrida?" / "Sim, bem corrida."
IPA: /ˈtjenes una ruˈtina axeˈtɾeaða · si mui axeˈtɾeaða/ · PT: [tiénes úna rutína arretreáda · sí múi arretreáda]`;

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
      id: `leccion_5_vocabulario_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_5_vocabulario_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_5_vocabulario_a1_s'] = meta['leccion_5_vocabulario_a1_s'] || {};
meta['leccion_5_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
