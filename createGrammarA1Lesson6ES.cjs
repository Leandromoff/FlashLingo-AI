const fs = require('fs');

const rawText = `(Yo) trabajo — Eu trabalho
IPA: /ˈʝo tɾaˈβaxo/ · PT: [iô trabárro]
(Tú) trabajas — Você trabalha
IPA: /tu tɾaˈβaxas/ · PT: [tu trabárras]
(Él) trabaja — Ele trabalha
IPA: /el tɾaˈβaxa/ · PT: [él trabárra]
(Ella) trabaja — Ela trabalha
IPA: /ˈeʎa tɾaˈβaxa/ · PT: [élha trabárra]
Funciona — Funciona (coisa)
IPA: /funˈθjona/ · PT: [funthióna]
(Nosotros) trabajamos — Nós trabalhamos
IPA: /noˈsotɾos tɾaβaˈxamos/ · PT: [nosótros trabarrámos]
(Vosotros) trabajáis — Vocês trabalham (Espanha)
IPA: /boˈsotɾos tɾaβaˈxais/ · PT: [bosótros trabarráis]
(Ellos) trabajan — Eles trabalham
IPA: /ˈeʎos tɾaˈβaxan/ · PT: [élhos trabárran]

Negativa (só "no" + verbo)
9. (Yo) no trabajo — Eu não trabalho
IPA: /no tɾaˈβaxo/ · PT: [no trabárro]
10. (Tú) no trabajas — Você não trabalha
IPA: /no tɾaˈβaxas/ · PT: [no trabárras]
11. (Él) no trabaja — Ele não trabalha
IPA: /no tɾaˈβaxa/ · PT: [no trabárra]
12. No funciona — Não funciona
IPA: /no funˈθjona/ · PT: [no funthióna]
13. (Nosotros) no trabajamos — Nós não trabalhamos
IPA: /no tɾaβaˈxamos/ · PT: [no trabarrámos]
14. (Ellos) no trabajan — Eles não trabalham
IPA: /no tɾaˈβaxan/ · PT: [no trabárran]

Interrogativa (só entonação, sem auxiliar)
15. ¿Trabajo? — Eu trabalho?
IPA: /tɾaˈβaxo/ · PT: [trabárro]
16. ¿Trabajas? — Você trabalha?
IPA: /tɾaˈβaxas/ · PT: [trabárras]
17. ¿Trabaja él? — Ele trabalha?
IPA: /tɾaˈβaxa el/ · PT: [trabárra él]
18. ¿Trabaja ella? — Ela trabalha?
IPA: /tɾaˈβaxa ˈeʎa/ · PT: [trabárra élha]
19. ¿Trabajamos? — Nós trabalhamos?
IPA: /tɾaβaˈxamos/ · PT: [trabarrámos]
20. ¿Trabajan? — Eles trabalham?
IPA: /tɾaˈβaxan/ · PT: [trabárran]

Respostas curtas
21. Sí, trabajo. — Sim. (eu trabalho)
IPA: /si tɾaˈβaxo/ · PT: [sí trabárro]
22. Sí, trabaja. — Sim. (ele trabalha)
IPA: /si tɾaˈβaxa/ · PT: [sí trabárra]
23. No, no trabajo. — Não. (eu não trabalho)
IPA: /no no tɾaˈβaxo/ · PT: [no no trabárro]
24. No, no trabaja. — Não. (ele não trabalha)
IPA: /no no tɾaˈβaxa/ · PT: [no no trabárra]
25. En español no se usa "do/does". — Em espanhol não se usa "do/does".
IPA: /en espaˈɲol no se ˈusa/ · PT: [en espánhol no se úsa]

26. Trabajo en una oficina. — Eu trabajo num escritório.
IPA: /tɾaˈβaxo en una ofiˈθina/ · PT: [trabárro en úna ofithína]
27. Ella trabaja en un hospital. — Ela trabalha num hospital.
IPA: /ˈeʎa tɾaˈβaxa en un ospiˈtal/ · PT: [élha trabárra en un ospitál]
28. Él empieza a las nueve. — Ele começa às nove.
IPA: /el emˈpjeθa a las ˈnweβe/ · PT: [él empiétha a las nuébe]
29. Terminamos a las cinco. — Nós terminamos às cinco.
IPA: /teɾmiˈnamos a las ˈθiŋko/ · PT: [terminámos a las thínko]
30. Ellos trabajan desde casa. — Eles trabalham de casa.
IPA: /ˈeʎos tɾaˈβaxan ˈdezðe ˈkasa/ · PT: [élhos trabárran désde kása]

De manhã / hábitos
31. Me despierto temprano. — Eu acordo cedo.
IPA: /me desˈpjeɾto temˈpɾano/ · PT: [me despiérto tempráno]
32. Ella toma café cada mañana. — Ela toma café toda manhã.
IPA: /ˈeʎa ˈtoma kaˈfe ˈkaða maˈɲana/ · PT: [élha tóma kafé káda manhána]
33. Él coge el autobús al trabajo. — Ele pega o ônibus para o trabalho.
IPA: /el ˈkoxe el awtoˈβus al tɾaˈβaxo/ · PT: [él kórre el autobús al trabárro]
34. Desayunamos juntos. — Nós tomamos café da manhã juntos.
IPA: /desaʝuˈnamos ˈxuntos/ · PT: [desaiunámos rrúntos]

Tempo livre / hobbies
35. Juego al fútbol los fines de semana. — Eu jogo futebol nos fins de semana.
IPA: /ˈxweɣo al ˈfutβol los ˈfines de seˈmana/ · PT: [rruégo al fútbol los fínes de semána]
36. Ella lee antes de dormir. — Ela lê antes de dormir.
IPA: /ˈeʎa ˈlee ˈantes de doɾˈmiɾ/ · PT: [élha lée ántes de dormír]
37. Él ve la tele por la noche. — Ele assiste TV à noite.
IPA: /el be la ˈtele poɾ la ˈnotʃe/ · PT: [él be la téle por la nótche]
38. Van al gimnasio. — Eles vão à academia.
IPA: /ban al ximˈnasjo/ · PT: [ban al rrimnásio]

Perguntas do dia a dia
39. ¿Vives cerca de aquí? — Você mora perto daqui?
IPA: /ˈbiβes ˈθeɾka de aˈki/ · PT: [bíbes thérka de akí]
40. ¿Habla inglés? — Ela fala inglês?
IPA: /ˈaβla iŋˈɡles/ · PT: [ábla inglés]
41. ¿A qué hora empiezas a trabajar? — A que horas você começa a trabajar?
IPA: /a ke ˈoɾa emˈpjeθas a tɾaβaˈxaɾ/ · PT: [a ké óra empiéthas a trabarrár]
42. ¿Dónde vive? — Onde ele mora?
IPA: /ˈdonde ˈbiβe/ · PT: [dônde bíbe]

Negativas
43. No tomo café. — Eu não tomo café.
IPA: /no ˈtomo kaˈfe/ · PT: [no tómo kafé]
44. Él no come carne. — Ele não come carne.
IPA: /el no ˈkome ˈkaɾne/ · PT: [él no kóme kárne]
45. No trabajamos los domingos. — Nós não trabalhamos aos domingos.
IPA: /no tɾaβaˈxamos los doˈmiŋɡos/ · PT: [no trabarrámos los domíngos]

Coisas / funcionamento
46. Este móvil no funciona. — Este celular não funciona.
IPA: /ˈeste ˈmoβil no funˈθjona/ · PT: [éste móbil no funthióna]
47. El ascensor funciona ahora. — O elevador funciona agora.
IPA: /el asˈθensoɾ funˈθjona aˈoɾa/ · PT: [el asthensór funthióna aóra]
48. La tienda abre a las ocho. — A loja abre às oito.
IPA: /la ˈtjenda ˈaβɾe a las ˈotʃo/ · PT: [la tiénda ábre a las ótcho]
49. Cierra a las diez. — Fecha às dez.
IPA: /ˈθjera a las djeθ/ · PT: [thiérra a las diéth]
50. El tren sale puntual. — O trem sai na hora.
IPA: /el tɾen ˈsale punˈtwal/ · PT: [el trén sále puntuál]

51. Trabajo cada día. — Eu trabalho todo dia.
IPA: /tɾaˈβaxo ˈkaða ˈdia/ · PT: [trabárro káda día]
52. A ella le gusta el café. — Ela gosta de café.
IPA: /a ˈeʎa le ˈɡusta el kaˈfe/ · PT: [a élha le gústa el kafé]
53. Él toca la guitarra. — Ele toca violão.
IPA: /el ˈtoka la ɡiˈtara/ · PT: [él tóka la guitárra]
54. Estudiamos inglés. — Nós estudamos inglês.
IPA: /estuˈðjamos iŋˈɡles/ · PT: [estudiámos inglés]

Advérbios de frequência
55. Siempre me despierto temprano. — Eu sempre acordo cedo.
IPA: /ˈsjempɾe me desˈpjeɾto temˈpɾano/ · PT: [siémpre me despiérto tempráno]
56. Ella suele trabajar hasta tarde. — Ela geralmente trabalha até tarde.
IPA: /ˈeʎa ˈswele tɾaβaˈxaɾ ˈasta ˈtaɾðe/ · PT: [élha suéle trabarrár ásta tárde]
57. Él nunca desayuna. — Ele nunca toma café da manhã.
IPA: /el ˈnuŋka desaˈʝuna/ · PT: [él núnka desaiúna]
58. Nos visitan a menudo. — Eles nos visitam com frequência.
IPA: /nos biˈsitan a meˈnuðo/ · PT: [nos bisítan a menúdo]

Perguntas e negações
59. ¿Trabajas los sábados? — Você trabalha aos sábados?
IPA: /tɾaˈβaxas los ˈsaβaðos/ · PT: [trabárras los sábados]
60. ¿Entiende español? — Ele entende espanhol?
IPA: /enˈtjende espaˈɲol/ · PT: [entiénde espánhol]
61. A ella no le gusta la ciudad. — Ela não gosta da cidade.
IPA: /a ˈeʎa no le ˈɡusta la θjuˈðað/ · PT: [a élha no le gústa la thiudád]
62. ¿Por qué trabaja tanto? — Por que ele trabalha tanto?
IPA: /poɾ ke tɾaˈβaxa ˈtanto/ · PT: [por ké trabárra tánto]

Conectores e tempos verbais
63. Trabajo porque necesito dinero. — Eu trabalho porque preciso de dinheiro.
IPA: /tɾaˈβaxo ˈpoɾke neθeˈsito diˈneɾo/ · PT: [trabárro pórke nethesíto dinéro]
64. Ella estudia cuando tiene tiempo. — Ela estuda quando tem tempo.
IPA: /ˈeʎa esˈtuðja ˈkwando ˈtjene ˈtjempo/ · PT: [élha estúdia kuándo tiéne tiémpo]
65. Él trabaja mucho, pero gana poco. — Ele trabalha duro, mas ganha pouco.
IPA: /el tɾaˈβaxa ˈmutʃo ˈpeɾo ˈɡana ˈpoko/ · PT: [él trabárra mútcho péro gána póko]
66. No trabajamos en festivos, así que descansamos. — Não trabalhamos nos feriados, então relaxamos.
IPA: /no tɾaβaˈxamos en fesˈtiβos aˈsi ke deskanˈsamos/ · PT: [no trabarrámos en festíbos así ke deskansámos]
67. Cuando la tienda abre, la gente entra. — Quando a loja abre, as pessoas entram.
IPA: /ˈkwando la ˈtjenda ˈaβɾe la ˈxente ˈentɾa/ · PT: [kuándo la tiénda ábre la rrénte éntra]

As mais ricas
68. Ella trabaja en un banco, pero quiere cambiar de trabajo. — Ela trabalha num banco, mas quer mudar de emprego.
IPA: /ˈeʎa tɾaˈβaxa en un ˈbaŋko ˈpeɾo ˈkjeɾe kamˈbjaɾ de tɾaˈβaxo/ · PT: [élha trabárra en un bánko péro kiére kambiár de trabárro]
69. Él no come carne porque es vegetariano. — Ele não come carne porque é vegetariano.
IPA: /el no ˈkome ˈkaɾne ˈpoɾke es bexetaˈɾjano/ · PT: [él no kóme kárne pórke és berretariáno]
70. Si no funciona, llamaremos a un técnico. — Se não funcionar, vamos chamar um técnico.
IPA: /si no funˈθjona ʎamaˈɾemos a un ˈtekniko/ · PT: [si no funthióna lhamarémos a un tékniko]
71. ¿Sabes a qué hora abre el museo? — Você sabe a que horas o museu abre?
IPA: /ˈsaβes a ke ˈoɾa ˈaβɾe el muˈseo/ · PT: [sábes a ké óra ábre el muséo]
72. Él nunca se queja, ni siquiera cuando está cansado. — Ele nunca reclama, mesmo quando está cansado.
IPA: /el ˈnuŋka se ˈkexa ni siˈkjeɾa ˈkwando esˈta kanˈsaðo/ · PT: [él núnka se kérra ni sikiéra kuándo está kansádo]
73. Mi ordenador no funciona, así que uso el móvil. — Meu computador não funciona, então uso meu celular.
IPA: /mi oɾðenaˈðoɾ no funˈθjona aˈsi ke ˈuso el ˈmoβil/ · PT: [mi ordenadór no funthióna así ke úso el móbil]
74. ¿De verdad habla cuatro idiomas con fluidez? — Ela realmente fala quatro idiomas fluentemente?
IPA: /de beɾˈðað ˈaβla ˈkwatɾo iˈðjomas kon flwiˈðeθ/ · PT: [de berdád ábla kuátro idiómas kon fluidéth]
75. Trabajan juntos, pero viven en ciudades diferentes. — Eles trabalham juntos, mas moram em cidades diferentes.
IPA: /tɾaˈβaxan ˈxuntos ˈpeɾo ˈbiβen en θjuˈðaðes difeˈɾentes/ · PT: [trabárran rrúntos péro bíben en thiudádes diferéntes]

«¿Trabajas aquí?» / «Sí, trabajo aquí.» — "Você trabalha aqui?" / "Sim, trabalho aqui."
IPA: /tɾaˈβaxas aˈki · si tɾaˈβaxo aˈki/ · PT: [trabárras akí · sí trabárro akí]
«¿Trabaja los fines de semana?» / «No, no trabaja.» — "Ela trabalha nos fins de semana?" / "Não, não trabalha."
IPA: /tɾaˈβaxa los ˈfines de seˈmana · no no tɾaˈβaxa/ · PT: [trabárra los fínes de semána · no no trabárra]
«¿Dónde trabajas?» / «En un hospital.» — "Onde você trabalha?" / "Num hospital."
IPA: /ˈdonde tɾaˈβaxas · en un ospiˈtal/ · PT: [dônde trabárras · en un ospitál]
«¿Habla inglés?» / «Sí, un poco.» — "Ela fala inglês?" / "Sim, um pouco."
IPA: /ˈaβla iŋˈɡles · si un ˈpoko/ · PT: [ábla inglés · sí un póko]
«¿Viven cerca?» / «No, no viven cerca.» — "Eles moram perto?" / "Não, não moram perto."
IPA: /ˈbiβen ˈθeɾka · no no ˈbiβen ˈθeɾka/ · PT: [bíben thérka · no no bíben thérka]
«¿A qué hora empiezas?» / «A las nueve.» — "A que horas você começa?" / "Às nove."
IPA: /a ke ˈoɾa emˈpjeθas · a las ˈnweβe/ · PT: [a ké óra empiéthas · a las nuébe]
«¿Esto funciona?» / «No, no funciona.» — "Isto funciona?" / "Não, não funciona."
IPA: /ˈesto funˈθjona · no no funˈθjona/ · PT: [ésto funthióna · no no funthióna]
«¿Te gusta tu trabajo?» / «Sí, me encanta.» — "Você gosta do seu trabalho?" / "Sim, eu adoro."
IPA: /te ˈɡusta tu tɾaˈβaxo · si me eŋˈkanta/ · PT: [te gústa tu trabárro · sí me enkánta]
«¿Va en coche al trabajo?» / «No, coge el autobús.» — "Ela vai de carro pro trabalho?" / "Não, pega o ônibus."
IPA: /ba en ˈkotʃe al tɾaˈβaxo · no ˈkoxe el awtoˈβus/ · PT: [ba en kótche al trabárro · no kórre el autobús]
«¿Tenemos clase hoy?» / «Sí, tenemos.» — "Temos aula hoje?" / "Sim, temos."
IPA: /teˈnemos ˈklase oi · si teˈnemos/ · PT: [tenémos kláse ôi · sí tenémos]
«¿A qué se dedica?» / «Es profesor.» — "O que ele faz?" / "Ele é professor."
IPA: /a ke se deˈðika · es pɾofeˈsoɾ/ · PT: [a ké se dedíka · és profesór]
«¿Funciona ahora?» / «Sí, funciona.» — "Funciona agora?" / "Sim, funciona."
IPA: /funˈθjona aˈoɾa · si funˈθjona/ · PT: [funthióna aóra · sí funthióna]
«¿Tomas café?» / «No, no tomo.» — "Você toma café?" / "Não, não tomo."
IPA: /ˈtomas kaˈfe · no no ˈtomo/ · PT: [tómas kafé · no no tómo]
«¿La tienda abre temprano?» / «Sí, a las ocho.» — "A loja abre cedo?" / "Sim, às oito."
IPA: /la ˈtjenda ˈaβɾe temˈpɾano · si a las ˈotʃo/ · PT: [la tiénda ábre tempráno · sí a las ótcho]
«¿Estudian cada día?» / «Sí, estudian.» — "Eles estudam todo dia?" / "Sim, estudam."
IPA: /esˈtuðjan ˈkaða ˈdia · si esˈtuðjan/ · PT: [estúdian káda día · sí estúdian]
«¿Trabaja tu hermano?» / «No, es estudiante.» — "Seu irmão trabalha?" / "Não, é estudante."
IPA: /tɾaˈβaxa tu eɾˈmano · no es estuˈðjante/ · PT: [trabárra tu ermáno · no és estudiánte]
«¿A qué hora cierra?» / «A las diez.» — "A que horas fecha?" / "Às dez."
IPA: /a ke ˈoɾa ˈθjera · a las djeθ/ · PT: [a ké óra thiérra · a las diéth]
«¿Entiendes?» / «Sí, entiendo.» — "Você entende?" / "Sim, entendo."
IPA: /enˈtjendes · si enˈtjendo/ · PT: [entiéndes · sí entiéndo]
«¿Le gusta la ciudad?» / «No, no le gusta.» — "Ela gosta da cidade?" / "Não, não gosta."
IPA: /le ˈɡusta la θjuˈðað · no no le ˈɡusta/ · PT: [le gústa la thiudád · no no le gústa]
«¿Trabajan desde casa?» / «Sí, trabajan desde casa.» — "Eles trabalham de casa?" / "Sim, trabalham de casa."
IPA: /tɾaˈβaxan ˈdezðe ˈkasa · si tɾaˈβaxan ˈdezðe ˈkasa/ · PT: [trabárran désde kása · sí trabárran désde kása]
«¿Come carne?» / «No, no come.» — "Ele come carne?" / "Não, não come."
IPA: /ˈkome ˈkaɾne · no no ˈkome/ · PT: [kóme kárne · no no kóme]
«¿Practicas algún deporte?» / «Sí, juego al tenis.» — "Você pratica algum esporte?" / "Sim, jogo tênis."
IPA: /pɾakˈtikas alˈɣun deˈpoɾte · si ˈxweɣo al ˈtenis/ · PT: [praktíkas algún depórte · sí rruégo al ténis]
«¿El autobús para aquí?» / «Sí, para aquí.» — "O ônibus para aqui?" / "Sim, para aqui."
IPA: /el awtoˈβus ˈpaɾa aˈki · si ˈpaɾa aˈki/ · PT: [el autobús pára akí · sí pára akí]
«¿Trabajas solo?» / «No, con un equipo.» — "Você trabalha sozinho?" / "Não, com uma equipe."
IPA: /tɾaˈβaxas ˈsolo · no kon un eˈkipo/ · PT: [trabárras sólo · no kon un ekípo]
«¿Sabe la respuesta?» / «Sí, la sabe.» — "Ela sabe a resposta?" / "Sim, sabe."
IPA: /ˈsaβe la resˈpwesta · si la ˈsaβe/ · PT: [sábe la respuésta · sí la sábe]`;

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
      id: `leccion_6_gramatica_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_6_gramatica_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_6_gramatica_a1_s'] = meta['leccion_6_gramatica_a1_s'] || {};
meta['leccion_6_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
