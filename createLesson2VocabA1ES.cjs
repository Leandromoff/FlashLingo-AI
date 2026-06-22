const fs = require('fs');

const rawText = `llamar a un amigo — ligar para um amigo
IPA: /ʎaˈmaɾ a un aˈmiɣo/ · PT: [lhamár a un amígo]
cocinar la cena — cozinhar o jantar
IPA: /koθiˈnaɾ la ˈθena/ · PT: [kothinár la théna]
hacer ejercicio — fazer exercício
IPA: /aˈθeɾ exeɾˈθiθjo/ · PT: [athér errerthíthio]
irse de vacaciones — viajar de férias
IPA: /ˈiɾse de bakaˈθjones/ · PT: [írse de bakathiónes]
acostarse — ir dormir / deitar-se
IPA: /akosˈtaɾse/ · PT: [akostárse]
ir al trabajo — ir para o trabalho
IPA: /iɾ al tɾaˈβaxo/ · PT: [ir al trabárro]
tomar un café — tomar um café
IPA: /toˈmaɾ un kaˈfe/ · PT: [tomár un kafé]
cenar — jantar
IPA: /θeˈnaɾ/ · PT: [thenár]
escuchar música — ouvir música
IPA: /eskuˈtʃaɾ ˈmusika/ · PT: [eskutchár músika]
jugar al fútbol — jogar futebol
IPA: /xuˈɣaɾ al ˈfutβol/ · PT: [rrugár al fútbol]
tocar la guitarra — tocar violão
IPA: /toˈkaɾ la ɡiˈtara/ · PT: [tokár la guitárra]
jugar a videojuegos — jogar videogame
IPA: /xuˈɣaɾ a biðeoˈxweɣos/ · PT: [rrugár a bideorruégos]
leer un libro — ler um livro
IPA: /leˈeɾ un ˈliβɾo/ · PT: [leér un líbro]
enviar un mensaje — mandar uma mensagem
IPA: /emˈbjaɾ un menˈsaxe/ · PT: [embiár un mensárre]
estudiar inglés — estudar inglês
IPA: /estuˈðjaɾ iŋˈɡles/ · PT: [estudiár inglés]
hacer una foto — tirar uma foto
IPA: /aˈθeɾ una ˈfoto/ · PT: [athér úna fóto]
visitar un museo — visitar um museu
IPA: /bisiˈtaɾ un muˈseo/ · PT: [bisitár un muséo]
ver la tele — assistir TV
IPA: /beɾ la ˈtele/ · PT: [bér la téle]
llevar gafas — usar óculos
IPA: /ʎeˈβaɾ ˈɡafas/ · PT: [lhebár gáfas]
enviar un correo — enviar um e-mail
IPA: /emˈbjaɾ un koˈreo/ · PT: [embiár un korréo]

Outras acciones do dia a dia
21. ducharse — tomar banho
IPA: /duˈtʃaɾse/ · PT: [dutchárse]
22. lavarse los dientes — escovar os dentes
IPA: /laˈβaɾse los ˈdjentes/ · PT: [labárse los diéntes]
23. preparar el desayuno — fazer o café da manhã
IPA: /pɾepaˈɾaɾ el desaˈʝuno/ · PT: [preparár el desaiúno]
24. pasear al perro — passear com o cachorro
IPA: /paseˈaɾ al ˈpero/ · PT: [paseár al pérro]
25. ir de compras — fazer compras
IPA: /iɾ de ˈkompɾas/ · PT: [ir de kómpras]

De manhã
26. Me despierto temprano. — Eu acordo cedo.
IPA: /me desˈpjeɾto temˈpɾano/ · PT: [me despiérto tempráno]
27. Me ducho. — Eu tomo banho.
IPA: /me ˈdutʃo/ · PT: [me dútcho]
28. Preparo el desayuno. — Eu faço o café da manhã.
IPA: /pɾeˈpaɾo el desaˈʝuno/ · PT: [prepáro el desaiúno]
29. Tomo un café. — Eu tomo um café.
IPA: /ˈtomo un kaˈfe/ · PT: [tómo un kafé]
30. Voy al trabajo. — Eu vou para o trabalho.
IPA: /boi al tɾaˈβaxo/ · PT: [bôi al trabárro]

No trabalho / ao telefone
31. Envío un correo. — Eu envio um e-mail.
IPA: /emˈbio un koˈreo/ · PT: [embío un korréo]
32. Llamo a un amigo. — Eu ligo para um amigo.
IPA: /ˈʎamo a un aˈmiɣo/ · PT: [lhámo a un amígo]
33. Envío un mensaje. — Eu mando uma mensagem.
IPA: /emˈbio un menˈsaxe/ · PT: [embío un mensárre]
34. Hago una foto. — Eu tiro uma foto.
IPA: /ˈaɣo una ˈfoto/ · PT: [águo úna fóto]
35. Llevo gafas en el trabajo. — Eu uso óculos no trabalho.
IPA: /ˈʎeβo ˈɡafas en el tɾaˈβaxo/ · PT: [lhébo gáfas en el trabárro]

Depois do trabalho / academia e parque
36. Hago ejercicio. — Eu faço exercício.
IPA: /ˈaɣo exeɾˈθiθjo/ · PT: [águo errerthíthio]
37. Juego al fútbol con amigos. — Eu jogo futebol com amigos.
IPA: /ˈxweɣo al ˈfutβol kon aˈmiɣos/ · PT: [rruégo al fútbol kon amígos]
38. Escucho música. — Eu ouço música.
IPA: /esˈkutʃo ˈmusika/ · PT: [eskútcho músika]
39. Paseo al perro. — Eu passeio com o cachorro.
IPA: /paˈseo al ˈpero/ · PT: [paséo al pérro]

À noite, em casa relaxando
40. Cocino la cena. — Eu cozinho o jantar.
IPA: /koˈθino la ˈθena/ · PT: [kothíno la théna]
41. Ceno. — Eu janto.
IPA: /ˈθeno/ · PT: [théno]
42. Veo la tele. — Eu assisto TV.
IPA: /ˈbeo la ˈtele/ · PT: [béo la téle]
43. Juego a videojuegos. — Eu jogo videogame.
IPA: /ˈxweɣo a biðeoˈxweɣos/ · PT: [rruégo a bideorruégos]
44. Toco la guitarra. — Eu toco violão.
IPA: /ˈtoko la ɡiˈtara/ · PT: [tóko la guitárra]
45. Leo un libro. — Eu leio um livro.
IPA: /ˈleo un ˈliβɾo/ · PT: [léo un líbro]
46. Me voy a la cama. — Eu vou dormir.
IPA: /me boi a la ˈkama/ · PT: [me bôi a la káma]

No fim de semana
47. Estudio inglés. — Eu estudo inglês.
IPA: /esˈtuðjo iŋˈɡles/ · PT: [estúdio inglés]
48. Voy de compras. — Eu faço compras.
IPA: /boi de ˈkompɾas/ · PT: [bôi de kómpras]
49. Visito un museo. — Eu visito um museu.
IPA: /biˈsito un muˈseo/ · PT: [bisíto un muséo]
50. Me voy de vacaciones. — Eu viajo de férias.
IPA: /me boi de bakaˈθjones/ · PT: [me bôi de bakathiónes]

Curtas e simples
51. Leo un libro. — Eu leio um livro.
IPA: /ˈleo un ˈliβɾo/ · PT: [léo un líbro]
52. Ella toca la guitarra. — Ela toca violão.
IPA: /ˈeʎa ˈtoka la ɡiˈtara/ · PT: [élha tóka la guitárra]
53. Él cocina la cena. — Ele cozinha o jantar.
IPA: /el koˈθina la ˈθena/ · PT: [él kothína la théna]
54. Vemos la tele. — Nós assistimos TV.
IPA: /ˈbemos la ˈtele/ · PT: [bémos la téle]

Frequência
55. Siempre tomo café. — Eu sempre tomo café.
IPA: /ˈsjempɾe ˈtomo kaˈfe/ · PT: [siémpre tómo kafé]
56. Ella va al gimnasio a menudo. — Ela vai à academia com frequência.
IPA: /ˈeʎa ba al ximˈnasjo a meˈnuðo/ · PT: [élha ba al rrimnásio a menúdo]
57. Ellos nunca juegan a videojuegos. — Eles nunca jogam videogame.
IPA: /ˈeʎos ˈnuŋka ˈxweɣan a biðeoˈxweɣos/ · PT: [élhos núnka rruégan a bideorruégos]
58. ¿Estudias inglés? — Você estuda inglês?
IPA: /esˈtuðjas iŋˈɡles/ · PT: [estúdias inglés]

Perguntas e negações
59. No veo la tele. — Eu não assisto TV.
IPA: /no ˈbeo la ˈtele/ · PT: [no béo la téle]
60. ¿Juega al fútbol? — Ele joga futebol?
IPA: /ˈxweɣa al ˈfutβol/ · PT: [rruéga al fútbol]
61. ¿Por qué llevas gafas? — Por que você usa óculos?
IPA: /poɾ ke ˈʎeβas ˈɡafas/ · PT: [por ké lhébas gáfas]
62. ¿A qué hora te acuestas? — A que horas você vai dormir?
IPA: /a ke ˈoɾa te aˈkwestas/ · PT: [a ké óra te akuéstas]

Conectores e tempos verbais
63. Escucho música cuando trabajo. — Eu ouço música quando trabalho.
IPA: /esˈkutʃo ˈmusika ˈkwando tɾaˈβaxo/ · PT: [eskútcho músika kuándo trabárro]
64. Está cocinando la cena ahora. — Ela está cozinhando o jantar agora.
IPA: /esˈta koθiˈnando la ˈθena aˈoɾa/ · PT: [está kothinándo la théna aóra]
65. Ayer llamé a un amigo. — Eu liguei para um amigo ontem.
IPA: /aˈʝeɾ ʎaˈme a un aˈmiɣo/ · PT: [aiér lhamé a un amígo]
66. Estábamos jugando a videojuegos cuando llegaste. — Estávamos jogando videogame quando você chegou.
IPA: /esˈtaβamos xuˈɣando a biðeoˈxweɣos ˈkwando ʎeˈɣaste/ · PT: [estábamos rrugándo a bideorruégos kuándo lhegáste]
67. Hizo una foto del museo. — Ele tirou uma foto do museu.
IPA: /ˈiθo una ˈfoto del muˈseo/ · PT: [ítho úna fóto del muséo]

As mais ricas
68. Quiero irme de vacaciones porque estoy cansado. — Quero viajar de férias porque estou cansado.
IPA: /ˈkjeɾo ˈiɾme de bakaˈθjones ˈpoɾke esˈtoi kanˈsaðo/ · PT: [kiéro írme de bakathiónes pórke estôi kansádo]
69. Ella lee un libro cada noche antes de acostarse. — Ela lê um livro toda noite antes de dormir.
IPA: /ˈeʎa ˈlee un ˈliβɾo ˈkaða ˈnotʃe ˈantes de akosˈtaɾse/ · PT: [élha lée un líbro káda nótche ántes de akostárse]
70. Te enviaré un correo cuando llegue a casa. — Vou te enviar um e-mail quando chegar em casa.
IPA: /te embjaˈɾe un koˈreo ˈkwando ˈʎeɣe a ˈkasa/ · PT: [te embiaré un korréo kuándo lhégue a kása]
71. No fue al trabajo porque estaba enfermo. — Ele não foi trabalhar porque estaba doente.
IPA: /no fwe al tɾaˈβaxo ˈpoɾke esˈtaβa emˈfeɾmo/ · PT: [no fué al trabárro pórke estába emférmo]
72. Normalmente cocino la cena, pero esta noche comeremos fuera. — Geralmente cozinho o jantar, mas hoje vamos comer fora.
IPA: /noɾˈmalmente koˈθino la ˈθena ˈpeɾo ˈesta ˈnotʃe komeˈɾemos ˈfweɾa/ · PT: [normalménte kothíno la théna péro ésta nótche komerémos fuéra]
73. Aunque estudio inglés cada día, todavía cometo errores. — Embora eu estude inglês todo dia, ainda cometo erros.
IPA: /ˈawŋke esˈtuðjo iŋˈɡles ˈkaða ˈdia toðaˈβia koˈmeto eˈrores/ · PT: [áunke estúdio inglés káda día todabía kométo erróres]
74. ¿Has visitado alguna vez un museo en otro país? — Você já visitou um museu em outro país?
IPA: /as bisiˈtaðo alˈɣuna beθ un muˈseo en ˈotɾo paˈis/ · PT: [as bisitádo algúna béth un muséo en ótro país]
75. Estaba escuchando música, así que no oí el teléfono. — Eu estava ouvindo música, então não ouvi o telefone.
IPA: /esˈtaβa eskuˈtʃando ˈmusika aˈsi ke no oˈi el teˈlefono/ · PT: [estába eskutchándo músika así ke no oí el teléfono]

«¿Qué haces después del trabajo?» / «Cocino la cena.» — "O que você faz depois do trabalho?" / "Eu cozinho o jantar."
IPA: /ke ˈaθes desˈpwes del tɾaˈβaxo · koˈθino la ˈθena/ · PT: [ke áthes después del trabárro · kothíno la théna]
«¿Juegas al fútbol?» / «Sí, todos los fines de semana.» — "Você joga futebol?" / "Sim, todos os fins de semana."
IPA: /ˈxweɣas al ˈfutβol · si ˈtoðos los ˈfines de seˈmana/ · PT: [rruégas al fútbol · sí tódos los fínes de semána]
«¿Puedes llamarme luego?» / «Claro, lo haré.» — "Pode me ligar mais tarde?" / "Claro, vou ligar."
IPA: /ˈpweðes ʎaˈmaɾme ˈlweɣo · ˈklaɾo lo aˈɾe/ · PT: [puédes lhamárme luégo · kláro lo aré]
«¿Qué estás haciendo?» / «Estoy leyendo un libro.» — "O que você está fazendo?" / "Estou lendo um livro."
IPA: /ke esˈtas aˈθjendo · esˈtoi leˈʝendo un ˈliβɾo/ · PT: [ke estás athiéndo · estôi leiéndo un líbro]
«¿Quieres un café?» / «Sí, por favor.» — "Você quer um café?" / "Sim, por favor."
IPA: /ˈkjeɾes un kaˈfe · si poɾ faˈβoɾ/ · PT: [kiéres un kafé · sí por fabór]
«¿Enviaste el correo?» / «Sí, lo envié.» — "Você enviou o e-mail?" / "Sim, enviei."
IPA: /embjaste el koˈreo · si lo emˈbje/ · PT: [embiáste el korréo · sí lo embié]
«¿Puedes hacernos una foto?» / «¡Claro!» — "Pode tirar uma foto da gente?" / "Claro!"
IPA: /ˈpweðes aˈθeɾnos una ˈfoto · ˈklaɾo/ · PT: [puédes athérnos úna fóto · kláro]
«¿A qué hora te acuestas?» / «Sobre las once.» — "A que horas você vai dormir?" / "Por volta das onze."
IPA: /a ke ˈoɾa te aˈkwestas · ˈsoβɾe las ˈonθe/ · PT: [a ké óra te akuéstas · sóbre las ónthe]
«¿Estudias inglés cada día?» / «No, solo los fines de semana.» — "Você estuda inglês todo dia?" / "Não, só nos fins de semana."
IPA: /esˈtuðjas iŋˈɡles ˈkaða ˈdia · no ˈsolo los ˈfines de seˈmana/ · PT: [estúdias inglés káda día · no sólo los fínes de semána]
«¿Qué haces para divertirte?» / «Juego a videojuegos.» — "O que você faz pra se divertir?" / "Eu jogo videogame."
IPA: /ke ˈaθes ˈpaɾa diβeɾˈtiɾte · ˈxweɣo a biðeoˈxweɣos/ · PT: [ke áthes pára dibertírte · rruégo a bideorruégos]
«¿Te vas de vacaciones?» / «Sí, la semana que viene.» — "Você vai viajar de férias?" / "Sim, semana que vem."
IPA: /te bas de bakaˈθjones · si la seˈmana ke ˈbjene/ · PT: [te bas de bakathiónes · sí la semána ke biéne]
«¿Haces mucho ejercicio?» / «No, la verdad que no.» — "Você faz muito exercício?" / "Não, na verdade não."
IPA: /ˈaθes ˈmutʃo exeɾˈθiθjo · no la beɾˈðað ke no/ · PT: [áthes mútcho errerthíthio · no la berdád ke no]
«¿Puedes enviarme un mensaje?» / «Claro, ¿cuál es tu número?» — "Pode me mandar uma mensagem?" / "Claro, qual é seu número?"
IPA: /ˈpweðes embjaɾme un menˈsaxe · ˈklaɾo kwal es tu ˈnumeɾo/ · PT: [puédes embiárme un mensárre · kláro kuál és tu número]
«¿Llevas gafas?» / «Solo para leer.» — "Você usa óculos?" / "Só para ler."
IPA: /ˈʎeβas ˈɡafas · ˈsolo ˈpaɾa leˈeɾ/ · PT: [lhébas gáfas · sólo pára leér]
«¿Qué música escuchas?» / «Sobre todo rock.» — "Que música você ouve?" / "Mais rock."
IPA: /ke ˈmusika esˈkutʃas · ˈsoβɾe ˈtoðo rok/ · PT: [ke músika eskútchas · sóbre tódo rók]
«¿Quieres ver la tele?» / «Quizá luego.» — "Você quer assistir TV?" / "Talvez mais tarde."
IPA: /ˈkjeɾes beɾ la ˈtele · kiˈθa ˈlweɣo/ · PT: [kiéres bér la téle · kithá luégo]
«¿Sabes tocar la guitarra?» / «Un poco.» — "Você sabe tocar violão?" / "Um pouco."
IPA: /ˈsaβes toˈkaɾ la ɡiˈtara · un ˈpoko/ · PT: [sábes tokár la guitárra · un póko]
«¿Fuiste al trabajo hoy?» / «No, es mi día libre.» — "Você foi trabalhar hoje?" / "Não, é minha folga."
IPA: /ˈfwiste al tɾaˈβaxo oi · no es mi ˈdia ˈliβɾe/ · PT: [fuíste al trabárro ôi · no és mi día líbre]
«¿Cocinas todos los días?» / «No, a veces pido comida.» — "Você cozinha todo dia?" / "Não, às vezes peço comida."
IPA: /koˈθinas ˈtoðos los ˈdias · no a ˈβeθes ˈpiðo koˈmiða/ · PT: [kothínas tódos los días · no a béthes pído komída]
«¿Has visitado el museo nuevo?» / «Todavía no.» — "Você já visitou o museu novo?" / "Ainda não."
IPA: /as bisiˈtaðo el muˈseo ˈnweβo · toðaˈβia no/ · PT: [as bisitádo el muséo nuébo · todabía no]
«¿Qué hiciste ayer?» / «Leí un libro.» — "O que você fez ontem?" / "Eu li um livro."
IPA: /ke iˈθiste aˈʝeɾ · leˈi un ˈliβɾo/ · PT: [ke ithíste aiér · leí un líbro]
«¿Tomas café por la mañana?» / «Sí, siempre.» — "Você toma café de manhã?" / "Sim, sempre."
IPA: /ˈtomas kaˈfe poɾ la maˈɲana · si ˈsjempɾe/ · PT: [tómas kafé por la manhána · sí siémpre]
«¿Estás libre esta noche?» / «No, estoy estudiando inglés.» — "Você está livre hoje à noite?" / "Não, estou estudando inglês."
IPA: /esˈtas ˈliβɾe ˈesta ˈnotʃe · no esˈtoi estuˈðjando iŋˈɡles/ · PT: [estás líbre ésta nótche · no estôi estudiándo inglés]
«¿Llamaste a tu amigo?» / «Sí, hablamos una hora.» — "Você ligou para seu amigo?" / "Sim, conversamos por uma hora."
IPA: /ʎaˈmaste a tu aˈmiɣo · si aˈβlamos una ˈoɾa/ · PT: [lhamáste a tu amígo · sí ablámos úna óra]
«¿Qué planes tienes para el fin de semana?» / «Me voy de vacaciones.» — "Quais são seus planos pro fim de semana?" / "Vou viajar de férias."
IPA: /ke ˈplanes ˈtjenes ˈpaɾa el fin de seˈmana · me boi de bakaˈθjones/ · PT: [ke plánes tiénes pára el fín de semána · me bôi de bakathiónes]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;

let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue;
  if (!line.includes('—') && !line.includes('IPA:')) continue;

  if (line.includes('—')) {
    let originalLine = line;
    originalLine = originalLine.replace(/^\d+\.\s*/, '');
    
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `leccion_2_vocabulario_a1_s_es_card_${index++}`,
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

const outputFile = 'public/decks/leccion_2_vocabulario_a1_s_es.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['leccion_2_vocabulario_a1_s'] = decksMeta['leccion_2_vocabulario_a1_s'] || {};
decksMeta['leccion_2_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
