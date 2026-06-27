const fs = require('fs');

const rawText = `qué — o que / qual
IPA: /ke/ · PT: [ke]
dónde — onde
IPA: /ˈdonde/ · PT: [dônde]
cuándo — quando
IPA: /ˈkwando/ · PT: [kuándo]
cómo — como
IPA: /ˈkomo/ · PT: [kómo]
cuántos años — quantos anos
IPA: /ˈkwantos ˈaɲos/ · PT: [kuántos ánhos]
a qué hora — a que horas
IPA: /a ke ˈoɾa/ · PT: [a ke óra]
con qué frecuencia — com que frequência
IPA: /kon ke fɾeˈkwenθja/ · PT: [kon ke frekuénthia]
por qué — por que
IPA: /poɾ ke/ · PT: [por ke]
quién — quem
IPA: /kjen/ · PT: [kién]

Perguntas com SER/ESTAR (= "be")
10. ¿Es Sharon de Estados Unidos? — A Sharon é dos EUA?
IPA: /es ˈʃaɾon de esˈtaðos uˈniðos/ · PT: [és cháron de estádos unídos]
11. ¿Cuántos años tienes? — Quantos anos você tem?
IPA: /ˈkwantos ˈaɲos ˈtjenes/ · PT: [kuántos ánhos tiénes]
12. ¿Qué es esto? — O que é isto?
IPA: /ke es ˈesto/ · PT: [ke és ésto]
13. ¿De dónde eres? — De onde você é?
IPA: /de ˈdonde ˈeɾes/ · PT: [de dônde éres]

Perguntas com verbo de ação (sem auxiliar)
14. ¿Te gusta la pizza? — Você gosta de pizza?
IPA: /te ˈɡusta la ˈpitsa/ · PT: [te gústa la pítsa]
15. ¿Dónde trabajas? — Onde você trabalha?
IPA: /ˈdonde tɾaˈβaxas/ · PT: [dônde trabárras]
16. ¿A qué hora se levanta? — A que horas ele levanta?
IPA: /a ke ˈoɾa se leˈβanta/ · PT: [a ke óra se lebánta]
17. ¿Con qué frecuencia salen? — Com que frequência eles saem?
IPA: /kon ke fɾeˈkwenθja ˈsalen/ · PT: [kon ke frekuénthia sálen]
18. ¿A qué te dedicas? — O que você faz (da vida)?
IPA: /a ke te deˈðikas/ · PT: [a ke te dedíkas]

Os padrões (sem "do/does")
19. ¿Trabajas? — Você trabalha?
IPA: /tɾaˈβaxas/ · PT: [trabárras]
20. ¿Vives aquí? — Você mora aqui?
IPA: /ˈbiβes aˈki/ · PT: [bíbes akí]
21. ¿Hablas inglés? — Você fala inglês?
IPA: /ˈaβlas iŋˈɡles/ · PT: [áblas inglés]
22. ¿Le gusta...? — Ele/ela gosta...?
IPA: /le ˈɡusta/ · PT: [le gústa]
23. ¿Quién es...? — Quem é...?
IPA: /kjen es/ · PT: [kién és]
24. ¿Dónde está...? — Onde está...?
IPA: /ˈdonde esˈta/ · PT: [dônde está]
25. En español no hay "do/does". — Em espanhol não existe "do/does".
IPA: /en espaˈɲol no ai/ · PT: [en espánhol no ái]

26. ¿Cómo te llamas? — Qual é o seu nome?
IPA: /ˈkomo te ˈʎamas/ · PT: [kómo te lhámas]
27. ¿De dónde eres? — De onde você é?
IPA: /de ˈdonde ˈeɾes/ · PT: [de dônde éres]
28. ¿Cuántos años tienes? — Quantos anos você tem?
IPA: /ˈkwantos ˈaɲos ˈtjenes/ · PT: [kuántos ánhos tiénes]
29. ¿A qué te dedicas? — O que você faz (da vida)?
IPA: /a ke te deˈðikas/ · PT: [a ke te dedíkas]
30. ¿Vives aquí? — Você mora aqui?
IPA: /ˈbiβes aˈki/ · PT: [bíbes akí]

No trabalho / rotina
31. ¿Dónde trabajas? — Onde você trabalha?
IPA: /ˈdonde tɾaˈβaxas/ · PT: [dônde trabárras]
32. ¿A qué hora empiezas? — A que horas você começa?
IPA: /a ke ˈoɾa emˈpjeθas/ · PT: [a ke óra empiéthas]
33. ¿Te gusta tu trabajo? — Você gosta do seu trabalho?
IPA: /te ˈɡusta tu tɾaˈβaxo/ · PT: [te gústa tu trabárro]
34. ¿Cómo vas al trabajo? — Como você vai para o trabalho?
IPA: /ˈkomo bas al tɾaˈβaxo/ · PT: [kómo bas al trabárro]

Saindo / convidando
35. ¿Quieres salir? — Você quer salir?
IPA: /ˈkjeɾes saˈliɾ/ · PT: [kiéres salír]
36. ¿A qué hora empieza la película? — A que horas o filme começa?
IPA: /a ke ˈoɾa emˈpjeθa la peˈlikula/ · PT: [a ke óra empiétha la pelíkula]
37. ¿Dónde quieres comer? — Onde você quer comer?
IPA: /ˈdonde ˈkjeɾes koˈmeɾ/ · PT: [dônde kiéres komér]
38. ¿Te gusta la comida italiana? — Você gosta de comida italiana?
IPA: /te ˈɡusta la koˈmiða itaˈljana/ · PT: [te gústa la komída italiána]

Hobbies / interesses
39. ¿Qué haces los fines de semana? — O que você faz nos fins de semana?
IPA: /ke ˈaθes los ˈfines de seˈmana/ · PT: [ke áthes los fínes de semána]
40. ¿Con qué frecuencia haces ejercicio? — Com que frequência você se exercita?
IPA: /kon ke fɾeˈkwenθja ˈaθes exeɾˈθiθjo/ · PT: [kon ke frekuénthia áthes errerthíthio]
41. ¿Practicas algún deporte? — Você pratica algum esporte?
IPA: /pɾakˈtikas alˈɣun deˈpoɾte/ · PT: [praktíkas algún depórte]
42. ¿Qué música te gusta? — De que música você gosta?
IPA: /ke ˈmusika te ˈɡusta/ · PT: [ke músika te gústa]

Ao telefone / marcando
43. ¿Estás libre mañana? — Você está livre amanhã?
IPA: /esˈtas ˈliβɾe maˈɲana/ · PT: [estás líbre manhána]
44. ¿A qué hora es la reunión? — A que horas é a reunião?
IPA: /a ke ˈoɾa es la reuˈnjon/ · PT: [a ke óra és la reunión]
45. ¿Dónde está el restaurante? — Onde fica o restaurante?
IPA: /ˈdonde esˈta el restawˈɾante/ · PT: [dônde está el restauránte]

Viajando / direções
46. ¿Dónde está la estación? — Onde fica a estación?
IPA: /ˈdonde esˈta la estaˈθjon/ · PT: [dônde está la estathión]
47. ¿Cuánto cuesta el billete? — Quanto custa a passagem?
IPA: /ˈkwanto ˈkwesta el biˈʎete/ · PT: [kuánto kuésta el bilhéte]
48. ¿A qué hora sale el tren? — A que horas o trem sai?
IPA: /a ke ˈoɾa ˈsale el tɾen/ · PT: [a ke óra sále el trén]
49. ¿Está lejos de aquí? — É longe daqui?
IPA: /esˈta ˈlexos de aˈki/ · PT: [está lérros de akí]
50. ¿Hablas inglés? — Você fala inglês?
IPA: /ˈaβlas iŋˈɡles/ · PT: [áblas inglés]

51. ¿Cómo te llamas? — Qual é o seu nome?
IPA: /ˈkomo te ˈʎamas/ · PT: [kómo te lhámas]
52. ¿Dónde vives? — Onde você mora?
IPA: /ˈdonde ˈbiβes/ · PT: [dônde bíbes]
53. ¿Tienes coche? — Você tem carro?
IPA: /ˈtjenes ˈkotʃe/ · PT: [tiénes kótche]
54. ¿Es tu hermana? — Ela é sua irmã?
IPA: /es tu eɾˈmana/ · PT: [és tu ermána]

Um pouco mais
55. ¿Cuántos años tiene tu hermano? — Quantos anos tem seu irmão?
IPA: /ˈkwantos ˈaɲos ˈtjene tu eɾˈmano/ · PT: [kuántos ánhos tiéne tu ermáno]
56. ¿A qué hora abre la tienda? — A que horas a loja abre?
IPA: /a ke ˈoɾa ˈaβɾe la ˈtjenda/ · PT: [a ke óra ábre la tiénda]
57. ¿Por qué llegas tarde? — Por que você está atrasado?
IPA: /poɾ ke ˈʎeɣas ˈtaɾðe/ · PT: [por ké lhégas tárde]
58. ¿Quién es ese hombre? — Quem é aquele homem?
IPA: /kjen es ˈese ˈombɾe/ · PT: [kién és ése ómbre]

Mais complexas
59. ¿Con qué frecuencia visitas a tu familia? — Com que frequência você visita sua família?
IPA: /kon ke fɾeˈkwenθja biˈsitas a tu faˈmilja/ · PT: [kon ke frekuénthia bisítas a tu famílha]
60. ¿Qué sueles hacer después del trabajo? — O que você costuma fazer depois do trabalho?
IPA: /ke ˈsweles aˈθeɾ desˈpwes del tɾaˈβaxo/ · PT: [ke suéles athér después del trabárro]
61. ¿Trabaja o estudia? — Ela trabalha ou estuda?
IPA: /tɾaˈβaxa o esˈtuðja/ · PT: [trabárra o estúdia]
62. ¿No te gusta el café? — Você não gosta de café?
IPA: /no te ˈɡusta el kaˈfe/ · PT: [no te gústa el kafé]

Conectores e tempos verbais
63. ¿Adónde vas cuando tienes tiempo libre? — Onde você vai quando tem tempo livre?
IPA: /aˈðonde bas ˈkwando ˈtjenes ˈtjempo ˈliβɾe/ · PT: [adônde bas kuándo tiénes tiémpo líbre]
64. ¿Qué estás haciendo ahora mismo? — O que você está fazendo agora?
IPA: /ke esˈtas aˈθjendo aˈoɾa ˈmizmo/ · PT: [ke estás athiéndo aóra mízmo]
65. ¿Lo llamaste ayer? — Você ligou para ele ontem?
IPA: /lo ʎaˈmaste aˈʝeɾ/ · PT: [lo lhamáste aiér]
66. ¿Por qué no viniste a la fiesta? — Por que você não veio à festa?
IPA: /poɾ ke no biˈniste a la ˈfjesta/ · PT: [por ké no biníste a la fiésta]
67. ¿A qué hora empezará la reunión? — A que horas a reunião vai começar?
IPA: /a ke ˈoɾa empeθaˈɾa la reuˈnjon/ · PT: [a ke óra empetharrá la reunión]

As mais ricas
68. ¿Sabes dónde está el banco más cercano? — Você sabe onde fica o banco mais próximo?
IPA: /ˈsaβes ˈdonde esˈta el ˈbaŋko mas θeɾˈkano/ · PT: [sábes dônde está el bánko mas therkáno]
69. ¿Cuánto se tarda en llegar? — Quanto tempo leva para chegar?
IPA: /ˈkwanto se ˈtaɾða en ʎeˈɣaɾ/ · PT: [kuánto se tárda en lhegár]
70. ¿Qué harías si te tocara la lotería? — O que você faria se ganhasse na loteria?
IPA: /ke aˈɾias si te toˈkaɾa la loteˈɾia/ · PT: [ke arías si te tokára la lotería]
71. ¿Puedes decirme por qué está tan contenta? — Você pode me dizer por que ela está tão feliz?
IPA: /ˈpweðes deˈθiɾme poɾ ke esˈta tan konˈtenta/ · PT: [puédes dethírme por ké está tan konténta]
72. ¿Prefieres té o café por la mañana? — Você prefere chá ou café de manhã?
IPA: /pɾeˈfjeɾes te o kaˈfe poɾ la maˈɲana/ · PT: [prefiéres té o kafé por la manhána]
73. ¿Por qué siempre llega tarde, aunque se levante temprano? — Por que ele sempre chega atrasado, mesmo acordando cedo?
IPA: /poɾ ke ˈsjempɾe ˈʎeɣa ˈtaɾðe ˈawŋke se leˈβante temˈpɾano/ · PT: [por ké siémpre lhéga tárde áunke se lebánte tempráno]
74. ¿Con qué frecuencia comes fuera, y adónde sueles ir? — Com que frequência você come fora, e onde costuma ir?
IPA: /kon ke fɾeˈkwenθja ˈkomes ˈfweɾa i aˈðonde ˈsweles iɾ/ · PT: [kon ke frekuénthia kómes fuéra i adônde suéles ir]
75. ¿Qué opinas sobre trabajar desde casa? — O que você acha de trabajar de casa?
IPA: /ke oˈpinas ˈsoβɾe tɾaβaˈxaɾ ˈdezðe ˈkasa/ · PT: [ke opínas sóbre trabarrár désde kása]

«¿De dónde eres?» / «Soy de Brasil.» — "De onde você é?" / "Eu sou do Brasil."
IPA: /de ˈdonde ˈeɾes · soi de bɾaˈsil/ · PT: [de dônde éres · sôi de brasíl]
«¿Cuántos años tienes?» / «Tengo veinticinco.» — "Quantos anos você tem?" / "Tenho vinte e cinco."
IPA: /ˈkwantos ˈaɲos ˈtjenes · ˈteŋɡo beintiˈθiŋko/ · PT: [kuántos ánhos tiénes · téngo beintithínko]
«¿A qué te dedicas?» / «Soy profesor.» — "O que você faz?" / "Sou professor."
IPA: /a ke te deˈðikas · soi pɾofeˈsoɾ/ · PT: [a ke te dedíkas · sôi profesór]
«¿Te gusta la pizza?» / «Sí, me encanta.» — "Você gosta de pizza?" / "Sim, eu adoro."
IPA: /te ˈɡusta la ˈpitsa · si me eŋˈkanta/ · PT: [te gústa la pítsa · sí me enkánta]
«¿Dónde trabajas?» / «En un hospital.» — "Onde você trabalha?" / "Num hospital."
IPA: /ˈdonde tɾaˈβaxas · en un ospiˈtal/ · PT: [dônde trabárras · en un ospitál]
«¿A qué hora te levantas?» / «A las siete.» — "A que horas você levanta?" / "Às sete."
IPA: /a ke ˈoɾa te leˈβantas · a las ˈsjete/ · PT: [a ke óra te lebántas · a las siéte]
«¿Con qué frecuencia haces ejercicio?» / «Tres veces por semana.» — "Com que frequência você se exercita?" / "Três vezes por semana."
IPA: /kon ke fɾeˈkwenθja ˈaθes exeɾˈθiθjo · tɾes ˈbeθes poɾ seˈmana/ · PT: [kon ke frekuénthia áthes errerthíthio · trés béthes por semána]
«¿Es tuyo este coche?» / «No, no lo es.» — "Este carro é seu?" / "Não, não é."
IPA: /es ˈtuʝo ˈeste ˈkotʃe · no no lo es/ · PT: [és túio éste kótche · no no lo és]
«¿Cómo te llamas?» / «Me llamo Ana.» — "Qual é o seu nome?" / "Me chamo Ana."
IPA: /ˈkomo te ˈʎamas · me ˈʎamo ˈana/ · PT: [kómo te lhámas · me lhámo ána]
«¿Hablas inglés?» / «Sí, un poco.» — "Você fala inglês?" / "Sim, um pouco."
IPA: /ˈaβlas iŋˈɡles · si un ˈpoko/ · PT: [áblas inglés · sí un póko]
«¿Dónde vives?» / «Cerca del parque.» — "Onde você mora?" / "Perto do parque."
IPA: /ˈdonde ˈbiβes · ˈθeɾka del ˈpaɾke/ · PT: [dônde bíbes · thérka del párke]
«¿A qué hora sale el tren?» / «A mediodía.» — "A que horas o trem sai?" / "Ao meio-dia."
IPA: /a ke ˈoɾa ˈsale el tɾen · a meðjoˈðia/ · PT: [a ke óra sále el trén · a mediodía]
«¿Estás libre esta noche?» / «No, estoy ocupado.» — "Você está livre hoje à noite?" / "Não, estou ocupado."
IPA: /esˈtas ˈliβɾe ˈesta ˈnotʃe · no esˈtoi okuˈpaðo/ · PT: [estás líbre ésta nótche · no estôi okupádo]
«¿Quién es ese?» / «Es mi hermano.» — "Quem é aquele?" / "É meu irmão."
IPA: /kjen es ˈese · es mi eɾˈmano/ · PT: [kién és ése · és mi ermáno]
«¿Tienes mascotas?» / «Sí, un perro.» — "Você tem bicho de estimação?" / "Sim, um cachorro."
IPA: /ˈtjenes masˈkotas · si un ˈpero/ · PT: [tiénes maskótas · sí un pérro]
«¿Qué música te gusta?» / «Me gusta el rock.» — "De que música você gosta?" / "Eu gosto de rock."
IPA: /ke ˈmusika te ˈɡusta · me ˈɡusta el rok/ · PT: [ke músika te gústa · me gústa el rók]
«¿Dónde está el baño?» / «Al final del pasillo.» — "Onde fica o banheiro?" / "No fim do corredor."
IPA: /ˈdonde esˈta el ˈbaɲo · al fiˈnal del paˈsiʎo/ · PT: [dônde está el bánho · al finál del pasílho]
«¿Cuánto cuesta esto?» / «Diez euros.» — "Quanto custa isto?" / "Dez euros."
IPA: /ˈkwanto ˈkwesta ˈesto · djeθ ˈewɾos/ · PT: [kuánto kuésta ésto · diéth éuros]
«¿Cuándo es tu cumpleaños?» / «En junio.» — "Quando é seu aniversário?" / "Em junio."
IPA: /ˈkwando es tu kumpleˈaɲos · en ˈxunjo/ · PT: [kuándo és tu kumpleánhos · en rrúnio]
«¿Quieres un café?» / «Sí, por favor.» — "Você quer um café?" / "Sim, por favor."
IPA: /ˈkjeɾes un kaˈfe · si poɾ faˈβoɾ/ · PT: [kiéres un kafé · sí por fabór]
«¿Por qué estás triste?» / «Tuve un mal día.» — "Por que você está triste?" / "Tive um dia ruim."
IPA: /poɾ ke esˈtas ˈtɾiste · ˈtuβe un mal ˈdia/ · PT: [por ké estás tríste · túbe un mal día]
«¿Qué hora es?» / «Son las tres.» — "Que horas são?" / "São três horas."
IPA: /ke ˈoɾa es · son las tɾes/ · PT: [ke óra és · son las trés]
«¿Habla español?» / «Sí, con fluidez.» — "Ele fala espanhol?" / "Sim, fluentemente."
IPA: /ˈaβla espaˈɲol · si kon flwiˈðeθ/ · PT: [ábla espánhol · sí kon fluidéth]
«¿Cómo vas al trabajo?» / «En bici.» — "Como você vai para o trabalho?" / "De bicicleta."
IPA: /ˈkomo bas al tɾaˈβaxo · en ˈbiθi/ · PT: [kómo bas al trabárro · en bíthi]
«¿Qué haces los fines de semana?» / «Descanso en casa.» — "O que você faz nos fins de semana?" / "Descanso em casa."
IPA: /ke ˈaθes los ˈfines de seˈmana · desˈkanso en ˈkasa/ · PT: [ke áthes los fínes de semána · deskánso en kása]`;

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
      id: `leccion_7_gramatica_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_7_gramatica_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_7_gramatica_a1_s'] = meta['leccion_7_gramatica_a1_s'] || {};
meta['leccion_7_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
