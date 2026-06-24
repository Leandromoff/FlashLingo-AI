const fs = require('fs');

const rawText = `la familia — a família
IPA: /la faˈmilja/ · PT: [la famílha]
el abuelo — o avô
IPA: /el aˈβwelo/ · PT: [el abuélo]
la abuela — a avó
IPA: /la aˈβwela/ · PT: [la abuéla]
el tío — o tio
IPA: /el ˈtio/ · PT: [el tío]
la tía — a tia
IPA: /la ˈtia/ · PT: [la tía]
el padre — o pai
IPA: /el ˈpaðɾe/ · PT: [el pádre]
la madre — a mãe
IPA: /la ˈmaðɾe/ · PT: [la mádre]
el primo / la prima — o primo / a prima
IPA: /el ˈpɾimo · la ˈpɾima/ · PT: [el prímo · la príma]
el hermano — o irmão
IPA: /el eɾˈmano/ · PT: [el ermáno]
la hermana — a irmã
IPA: /la eɾˈmana/ · PT: [la ermána]
el cuñado — o cunhado
IPA: /el kuˈɲaðo/ · PT: [el kunhádo]
el marido — o marido
IPA: /el maˈɾiðo/ · PT: [el marído]
la mujer — a esposa (lit. "a mulher")
IPA: /la muˈxeɾ/ · PT: [la murrér]
el sobrino — o sobrinho
IPA: /el soˈβɾino/ · PT: [el sobríno]
la sobrina — a sobrinha
IPA: /la soˈβɾina/ · PT: [la sobrína]
el hijo — o filho
IPA: /el ˈixo/ · PT: [el írro]
la hija — a filha
IPA: /la ˈixa/ · PT: [la írra]
los padres — os pais
IPA: /los ˈpaðɾes/ · PT: [los pádres]
los abuelos — os avós
IPA: /los aˈβwelos/ · PT: [los abuélos]
los hijos — os filhos
IPA: /los ˈixos/ · PT: [los írros]
el nieto — o neto
IPA: /el ˈnjeto/ · PT: [el niéto]
la nieta — a neta
IPA: /la ˈnjeta/ · PT: [la niéta]
la cuñada — a cunhada
IPA: /la kuˈɲaða/ · PT: [la kunháda]
el bebé — o bebê
IPA: /el beˈβe/ · PT: [el bebé]
los parientes — os parentes
IPA: /los paˈɾjentes/ · PT: [los pariéntes]

26. Esta es mi familia. — Esta é minha família.
IPA: /ˈesta es mi faˈmilja/ · PT: [ésta és mi famílha]
27. Mi padre es médico. — Meu pai é médico.
IPA: /mi ˈpaðɾe es ˈmeðiko/ · PT: [mi pádre és médiko]
28. Mi madre es profesora. — Minha mãe é professora.
IPA: /mi ˈmaðɾe es pɾofeˈsoɾa/ · PT: [mi mádre és profesóra]
29. Tengo un hermano. — Eu tenho um irmão.
IPA: /ˈteŋɡo un eɾˈmano/ · PT: [téngo un ermáno]
30. Mi hermana es menor que yo. — Minha irmã é mais nova que eu.
IPA: /mi eɾˈmana es meˈnoɾ ke ʝo/ · PT: [mi ermána és menór ke iô]

Visitando os avós
31. Mis abuelos viven cerca. — Meus avós moram perto.
IPA: /mis aˈβwelos ˈbiβen ˈθeɾka/ · PT: [mis abuélos bíben thérka]
32. Mi abuelo es muy amable. — Meu avô é muito gentil.
IPA: /mi aˈβwelo es mui aˈmaβle/ · PT: [mi abuélo és múi amáble]
33. Mi abuela cocina muy bien. — Minha avó cozinha muito bem.
IPA: /mi aˈβwela koˈθina mui bjen/ · PT: [mi abuéla kothína múi bién]
34. Los visitamos los fines de semana. — Nós os visitamos nos fins de semana.
IPA: /los bisiˈtamos los ˈfines de seˈmana/ · PT: [los bisitámos los fínes de semána]

Tios e primos
35. Mi tío tiene dos hijos. — Meu tio tem dois hijos.
IPA: /mi ˈtio ˈtjene dos ˈixos/ · PT: [mi tío tiéne dos írros]
36. Mi tía vive en Madrid. — Minha tia mora em Madri.
IPA: /mi ˈtia ˈbiβe en maˈðɾið/ · PT: [mi tía bíbe en madríd]
37. Mis primos son mis mejores amigos. — Meus primos são meus melhores amigos.
IPA: /mis ˈpɾimos son mis meˈxoɾes aˈmiɣos/ · PT: [mis prímos son mis merróres amígos]

Marido e esposa
38. Esta es mi mujer, Sarah. — Esta é minha esposa, Sarah.
IPA: /ˈesta es mi muˈxeɾ ˈsaɾa/ · PT: [ésta és mi murrér sára]
39. Mi marido trabaja mucho. — Meu marido trabalha muito.
IPA: /mi maˈɾiðo tɾaˈβaxa ˈmutʃo/ · PT: [mi marído trabárra mútcho]
40. Tenemos dos hijos. — Nós temos dois filhos.
IPA: /teˈnemos dos ˈixos/ · PT: [tenémos dos írros]

Os filhos
41. Mi hijo tiene seis años. — Meu filho tem seis anos.
IPA: /mi ˈixo ˈtjene seis ˈaɲos/ · PT: [mi írro tiéne séis ánhos]
42. A mi hija le encanta dibujar. — Minha filha adora desenhar.
IPA: /a mi ˈixa le eŋˈkanta diβuˈxaɾ/ · PT: [a mi írra le enkánta diburrár]
43. El bebé está durmiendo. — O bebê está dormindo.
IPA: /el beˈβe esˈta duɾˈmjendo/ · PT: [el bebé está durmiéndo]

Cunhados e sobrinhos
44. El marido de mi hermana es mi cuñado. — O marido da minha irmã é meu cunhado.
IPA: /el maˈɾiðo de mi eɾˈmana es mi kuˈɲaðo/ · PT: [el marído de mi ermána és mi kunhádo]
45. Mi sobrino es muy gracioso. — Meu sobrinho é muito engraçado.
IPA: /mi soˈβɾino es mui ɡɾaˈθjoso/ · PT: [mi sobríno és múi grathióso]
46. Mi sobrina está aprendiendo a andar. — Minha sobrinha está aprendendo a andar.
IPA: /mi soˈβɾina esˈta apɾenˈdjendo a anˈdaɾ/ · PT: [mi sobrína está aprendiéndo a andár]

Fotos e momentos
47. Aquí hay una foto de mis padres. — Aqui está uma foto dos meus pais.
IPA: /aˈki ai una ˈfoto de mis ˈpaðɾes/ · PT: [akí ái úna fóto de mis pádres]
48. Somos una familia grande. — Nós somos uma família grande.
IPA: /ˈsomos una faˈmilja ˈɡɾande/ · PT: [sómos úna famílha gránde]
49. Quiero a mis parientes. — Eu amo meus parentes.
IPA: /ˈkjeɾo a mis paˈɾjentes/ · PT: [kiéro a mis pariéntes]
50. La familia es importante para mí. — A família é importante para mim.
IPA: /la faˈmilja es impoɾˈtante ˈpaɾa mi/ · PT: [la famílha és importánte pára mi]

Curtas e simples
51. Tengo una hermana. — Eu tenho uma irmã.
IPA: /ˈteŋɡo una eɾˈmana/ · PT: [téngo úna ermána]
52. Mi padre es alto. — Meu pai é alto.
IPA: /mi ˈpaðɾe es ˈalto/ · PT: [mi pádre és álto]
53. Ella es mi prima. — Ela é minha prima.
IPA: /ˈeʎa es mi ˈpɾima/ · PT: [élha és mi príma]
54. Queremos a nuestros abuelos. — Nós amamos nossos avós.
IPA: /keˈɾemos a ˈnwestɾos aˈβwelos/ · PT: [kerémos a nuéstros abuélos]

Um pouco mais
55. Mi hermano tiene un perro. — Meu irmão tem um cachorro.
IPA: /mi eɾˈmano ˈtjene un ˈpero/ · PT: [mi ermáno tiéne un pérro]
56. Su hija es enfermera. — A filha dela é enfermeira.
IPA: /su ˈixa es emfeɾˈmeɾa/ · PT: [su írra és emferméra]
57. ¿Es tu tío? — Ele é seu tio?
IPA: /es tu ˈtio/ · PT: [és tu tío]
58. No tengo primos. — Eu não tenho primos.
IPA: /no ˈteŋɡo ˈpɾimos/ · PT: [no téngo prímos]

Perguntas e negações
59. ¿Cuántos hermanos tienes? — Quantos irmãos você tem?
IPA: /ˈkwantos eɾˈmanos ˈtjenes/ · PT: [kuántos ermános tiénes]
60. ¿Dónde viven tus padres? — Onde seus pais moram?
IPA: /ˈdonde ˈbiβen tus ˈpaðɾes/ · PT: [dônde bíben tus pádres]
61. Mi abuelo no está aquí hoy. — Meu avô não está aqui hoje.
IPA: /mi aˈβwelo no esˈta aˈki oi/ · PT: [mi abuélo no está akí ôi]
62. ¿Por qué está triste tu hermana? — Por que sua irmã está triste?
IPA: /poɾ ke esˈta ˈtɾiste tu eɾˈmana/ · PT: [por ké está tríste tu ermána]

Conectores e tempos verbais
63. Llamo a mi madre porque la echo de menos. — Eu ligo para minha mãe porque sinto falta dela.
IPA: /ˈʎamo a mi ˈmaðɾe ˈpoɾke la ˈetʃo de ˈmenos/ · PT: [lhámo a mi mádre pórke la étcho de ménos]
64. Mi tía nos visita esta semana. — Minha tia está nos visitando esta semana.
IPA: /mi ˈtia nos biˈsita ˈesta seˈmana/ · PT: [mi tía nos bisíta ésta semána]
65. Ayer celebramos el cumpleaños de mi abuela. — Nós comemoramos o aniversário da minha avó ontem.
IPA: /aˈʝeɾ θeleˈβɾamos el kumpleˈaɲos de mi aˈβwela/ · PT: [aiér thelebrámos el kumpleánhos de mi abuéla]
66. Mi hermano estaba estudiando cuando llegué. — Meu irmão estava estudando quando eu cheguei.
IPA: /mi eɾˈmano esˈtaβa estuˈðjando ˈkwando ʎeˈɣe/ · PT: [mi ermáno estába estudiándo kuándo lhegué]
67. Mis padres se conocieron cuando eran jóvenes. — Meus pais se conheceram quando eram jovens.
IPA: /mis ˈpaðɾes se konoˈθjeɾon ˈkwando ˈeɾan ˈxoβenes/ · PT: [mis pádres se konothiéron kuándo éran rróbenes]

As mais ricas
68. Mi hermana está casada, pero mi hermano está soltero. — Minha irmã é casada, mas meu irmão é solteiro.
IPA: /mi eɾˈmana esˈta kaˈsaða ˈpeɾo mi eɾˈmano esˈta solˈteɾo/ · PT: [mi ermána está kasáda péro mi ermáno está soltéro]
69. Te presentaré a mi familia cuando vengas. — Vou te apresentar à minha família quando você vier.
IPA: /te pɾesentaˈɾe a mi faˈmilja ˈkwando ˈbeŋɡas/ · PT: [te presentaré a mi famílha kuándo béngas]
70. Mis abuelos llevan cincuenta años casados. — Meus avós são casados há cinquenta anos.
IPA: /mis aˈβwelos ˈʎeβan θiŋˈkwenta ˈaɲos kaˈsaðos/ · PT: [mis abuélos lhéban thinkuénta ánhos kasádos]
71. Aunque mi primo vive lejos, hablamos cada día. — Embora meu primo more longe, conversamos todo dia.
IPA: /ˈawŋke mi ˈpɾimo ˈbiβe ˈlexos aˈβlamos ˈkaða ˈdia/ · PT: [áunke mi prímo bíbe lérros ablámos káda día]
72. Mi tío no vino porque estaba enfermo. — Meu tio não veio porque estava doente.
IPA: /mi ˈtio no ˈbino ˈpoɾke esˈtaβa emˈfeɾmo/ · PT: [mi tío no bíno pórke estába emférmo]
73. Mi hija se parece a su madre, pero actúa como yo. — Minha filha se parece com a mãe, mas age como eu.
IPA: /mi ˈixa se paˈɾeθe a su ˈmaðɾe ˈpeɾo akˈtua ˈkomo ʝo/ · PT: [mi írra se paréthe a su mádre péro aktúa kómo iô]
74. ¿Has conocido a mi cuñado y a su mujer? — Você já conheceu meu cunhado e a esposa dele?
IPA: /as konoˈθiðo a mi kuˈɲaðo i a su muˈxeɾ/ · PT: [as konothído a mi kunhádo i a su murrér]
75. Mi sobrino y mi sobrina vienen, así que la casa estará llena. — Meu sobrinho e minha sobrinha estão vindo, então a casa vai ficar cheia.
IPA: /mi soˈβɾino i mi soˈβɾina ˈbjenen aˈsi ke la ˈkasa estaˈɾa ˈʎena/ · PT: [mi sobríno i mi sobrína biénen así ke la kása estará lhéna]

«¿Es esta tu familia?» / «Sí, lo es.» — "Esta é sua família?" / "Sim, é."
IPA: /es ˈesta tu faˈmilja · si lo es/ · PT: [és ésta tu famílha · sí lo és]
«¿Quién es él?» / «Es mi padre.» — "Quem é ele?" / "É meu pai."
IPA: /kjen es el · es mi ˈpaðɾe/ · PT: [kién és él · és mi pádre]
«¿Tienes hermanos?» / «Sí, un hermano.» — "Você tem irmãos?" / "Sim, um irmão."
IPA: /ˈtjenes eɾˈmanos · si un eɾˈmano/ · PT: [tiénes ermános · sí un ermáno]
«¿Es tu hermana?» / «No, es mi prima.» — "Ela é sua irmã?" / "Não, é minha prima."
IPA: /es tu eɾˈmana · no es mi ˈpɾima/ · PT: [és tu ermána · no és mi príma]
«¿Cuántos años tiene tu hijo?» / «Tiene seis.» — "Quantos anos tem seu filho?" / "Tem seis."
IPA: /ˈkwantos ˈaɲos ˈtjene tu ˈixo · ˈtjene seis/ · PT: [kuántos ánhos tiéne tu írro · tiéne séis]
«¿Dónde viven tus abuelos?» / «En España.» — "Onde seus avós moram?" / "Na Espanha."
IPA: /ˈdonde ˈbiβen tus aˈβwelos · en esˈpaɲa/ · PT: [dônde bíben tus abuélos · en espánha]
«¿Estás casado?» / «Sí, esta es mi mujer.» — "Você é casado?" / "Sim, esta é minha esposa."
IPA: /esˈtas kaˈsaðo · si ˈesta es mi muˈxeɾ/ · PT: [estás kasádo · sí ésta és mi murrér]
«¿Quién es el bebé?» / «Es mi sobrina.» — "Quem é o bebê?" / "É minha sobrinha."
IPA: /kjen es el beˈβe · es mi soˈβɾina/ · PT: [kién és el bebé · és mi sobrína]
«¿Es ese tu tío?» / «Sí, se llama Michael.» — "Aquele é seu tio?" / "Sim, ele se chama Michael."
IPA: /es ˈese tu ˈtio · si se ˈʎama ˈmaikel/ · PT: [és ése tu tío · sí se lháma máikel]
«¿Tienes hijos?» / «Sí, un hijo y una hija.» — "Você tem filhos?" / "Sim, um filho e uma filha."
IPA: /ˈtjenes ˈixos · si un ˈixo i una ˈixa/ · PT: [tiénes írros · sí un írro i úna írra]
«¿Cómo se llama tu madre?» / «Se llama Linda.» — "Qual é o nome da sua mãe?" / "Ela se chama Linda."
IPA: /ˈkomo se ˈʎama tu ˈmaðɾe · se ˈʎama ˈlinda/ · PT: [kómo se lháma tu mádre · se lháma línda]
«¿Tu hermana es mayor que tú?» / «No, es menor.» — "Sua irmã é mais velha que você?" / "Não, é mais nova."
IPA: /tu eɾˈmana es maˈʝoɾ ke tu · no es meˈnoɾ/ · PT: [tu ermána és maiór ke tu · no és menór]
«¿Quién cocina en tu familia?» / «Mi abuela.» — "Quem cozinha na sua família?" / "Minha avó."
IPA: /kjen koˈθina en tu faˈmilja · mi aˈβwela/ · PT: [kién kothína en tu famílha · mi abuéla]
«¿Son estos tus primos?» / «Sí, lo son.» — "Estes são seus primos?" / "Sim, são."
IPA: /son ˈestos tus ˈpɾimos · si lo son/ · PT: [son éstos tus prímos · sí lo son]
«¿Está casado tu hermano?» / «No, está soltero.» — "Seu irmão é casado?" / "Não, é solteiro."
IPA: /esˈta kaˈsaðo tu eɾˈmano · no esˈta solˈteɾo/ · PT: [está kasádo tu ermáno · no está soltéro]
«¿Quién es John?» / «Es mi cuñado.» — "Quem é o John?" / "É meu cunhado."
IPA: /kjen es ʝon · es mi kuˈɲaðo/ · PT: [kién és ión · és mi kunhádo]
«¿Cuántos primos tienes?» / «Cuatro.» — "Quantos primos você tem?" / "Quatro."
IPA: /ˈkwantos ˈpɾimos ˈtjenes · ˈkwatɾo/ · PT: [kuántos prímos tiénes · kuátro]
«¿Tu padre está jubilado?» / «Sí, lo está.» — "Seu pai é aposentado?" / "Sim, é."
IPA: /tu ˈpaðɾe esˈta xuβiˈlaðo · si lo esˈta/ · PT: [tu pádre está rrubiládo · sí lo está]
«¿Quién es tu pariente favorito?» / «Mi abuelo.» — "Quem é seu parente favorito?" / "Meu avô."
IPA: /kjen es tu paˈɾjente faβoˈɾito · mi aˈβwelo/ · PT: [kién és tu pariénte faboríto · mi abuélo]
«¿Tu tía vive cerca de ti?» / «No, vive lejos.» — "Sua tia mora perto de você?" / "Não, mora longe."
IPA: /tu ˈtia ˈbiβe ˈθeɾka de ti · no ˈbiβe ˈlexos/ · PT: [tu tía bíbe thérka de ti · no bíbe lérros]
«¿Tu mujer es de aquí?» / «No, es de Italia.» — "Sua esposa é daqui?" / "Não, é da Itália."
IPA: /tu muˈxeɾ es de aˈki · no es de iˈtalja/ · PT: [tu murrér és de akí · no és de itálha]
«¿Quién es mayor, tu madre o tu padre?» / «Mi padre.» — "Quem é mais velho, sua mãe ou seu pai?" / "Meu pai."
IPA: /kjen es maˈʝoɾ tu ˈmaðɾe o tu ˈpaðɾe · mi ˈpaðɾe/ · PT: [kién és maiór tu mádre o tu pádre · mi pádre]
«¿Vienen tus padres?» / «Sí, vienen.» — "Seus pais estão vindo?" / "Sim, estão."
IPA: /ˈbjenen tus ˈpaðɾes · si ˈbjenen/ · PT: [biénen tus pádres · sí biénen]
«¿La niña pequeña es tu hija?» / «Sí, se llama Olivia.» — "A menininha é sua filha?" / "Sim, ela se chama Olivia."
IPA: /la ˈniɲa peˈkeɲa es tu ˈixa · si se ˈʎama oˈliβja/ · PT: [la nínha pekénha és tu írra · sí se lháma olíbia]
«¿Ves a tu familia a menudo?» / «Sí, cada fin de semana.» — "Você vê sua família com frequência?" / "Sim, todo fim de semana."
IPA: /bes a tu faˈmilja a meˈnuðo · si ˈkaða fin de seˈmana/ · PT: [bés a tu famílha a menúdo · sí káda fín de semána]`;

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
      id: `leccion_3_vocabulario_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_3_vocabulario_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_3_vocabulario_a1_s'] = meta['leccion_3_vocabulario_a1_s'] || {};
meta['leccion_3_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
