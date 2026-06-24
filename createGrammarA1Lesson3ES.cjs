const fs = require('fs');

const rawText = `yo — eu
IPA: /ʝo/ · PT: [iô]
tú — você (informal)
IPA: /tu/ · PT: [tu]
él — ele
IPA: /el/ · PT: [él]
ella — ela
IPA: /ˈeʎa/ · PT: [élha]
(it) — não existe pronome; usa-se o verbo direto
IPA: /—/ · PT: [—]
nosotros / nosotras — nós
IPA: /noˈsotɾos · noˈsotɾas/ · PT: [nosótros · nosótras]
vosotros / vosotras — vocês (informal, Espanha)
IPA: /boˈsotɾos · boˈsotɾas/ · PT: [bosótros · bosótras]
ellos / ellas — eles / elas
IPA: /ˈeʎos · ˈeʎas/ · PT: [élhos · élhas]
mi — meu / minha
IPA: /mi/ · PT: [mi]
tu — teu / seu (de ti)
IPA: /tu/ · PT: [tu]
su — dele
IPA: /su/ · PT: [su]
su — dela
IPA: /su/ · PT: [su]
su — dele / dela (de coisa ou animal)
IPA: /su/ · PT: [su]
nuestro / nuestra — nosso / nossa
IPA: /ˈnwestɾo · ˈnwestɾa/ · PT: [nuéstro · nuéstra]
su / sus — deles / delas
IPA: /su · sus/ · PT: [su · sus]
(Yo) juego al fútbol. — Eu jogo futebol.
IPA: /ˈʝo ˈxweɣo al ˈfutβol/ · PT: [iô rruégo al fútbol]
Tú eres australiano. — Você é australiano.
IPA: /tu ˈeɾes awstɾaˈljano/ · PT: [tu éres australiáno]
Él es muy alto. — Ele é muito alto.
IPA: /el es mui ˈalto/ · PT: [él és múi álto]
Ella es profesora. — Ela é professora.
IPA: /ˈeʎa es pɾofeˈsoɾa/ · PT: [élha és profesóra]
Es un perro. — É um cachorro.
IPA: /es un ˈpero/ · PT: [és un pérro]
Nosotros amamos el inglés. — Nós amamos inglês.
IPA: /noˈsotɾos aˈmamos el iŋˈɡles/ · PT: [nosótros amámos el inglés]
Ellos tienen una casa bonita. — Eles têm uma casa bonita.
IPA: /ˈeʎos ˈtjenen una ˈkasa boˈnita/ · PT: [élhos tiénen úna kása boníta]
Este es mi hermano. — Este é meu irmão.
IPA: /ˈeste es mi eɾˈmano/ · PT: [éste és mi ermáno]
Dame tu libro. — Me dá seu livro.
IPA: /ˈdame tu ˈliβɾo/ · PT: [dáme tu líbro]
Esa es su casa. — Aquela é a casa dele.
IPA: /ˈesa es su ˈkasa/ · PT: [ésa és su kása]

26. Esta es mi familia. — Esta é minha família.
IPA: /ˈesta es mi faˈmilja/ · PT: [ésta és mi famílha]
27. Él es mi padre. — Ele é meu pai.
IPA: /el es mi ˈpaðɾe/ · PT: [él és mi pádre]
28. Ella es mi madre. — Ela é minha mãe.
IPA: /ˈeʎa es mi ˈmaðɾe/ · PT: [élha és mi mádre]
29. Conozco a su hermana. — Eu conheço a irmã dela.
IPA: /koˈnoθko a su eɾˈmana/ · PT: [konóthko a su ermána]
30. Amamos a nuestros padres. — Nós amamos nossos pais.
IPA: /aˈmamos a ˈnwestɾos ˈpaðɾes/ · PT: [amámos a nuéstros pádres]

No trabalho / na escola
31. Ella es profesora. — Ela é professora.
IPA: /ˈeʎa es pɾofeˈsoɾa/ · PT: [élha és profesóra]
32. Este es su profesor. — Este é o professor deles.
IPA: /ˈeste es su pɾofeˈsoɾ/ · PT: [éste és su profesór]
33. Él es mi jefe. — Ele é meu chefe.
IPA: /el es mi ˈxefe/ · PT: [él és mi rréfe]
34. Ellos son mis compañeros de trabajo. — Eles são meus colegas de trabalho.
IPA: /ˈeʎos son mis kompaˈɲeɾos de tɾaˈβaxo/ · PT: [élhos son mis kompanhéros de trabárro]
35. Me gusta mi trabajo. — Eu gosto do meu trabalho.
IPA: /me ˈɡusta mi tɾaˈβaxo/ · PT: [me gústa mi trabárro]

Falando da casa e das coisas
36. Esa es su casa. — Aquela é a casa dele.
IPA: /ˈesa es su ˈkasa/ · PT: [ésa és su kása]
37. Ellos tienen una casa bonita. — Eles têm uma casa bonita.
IPA: /ˈeʎos ˈtjenen una ˈkasa boˈnita/ · PT: [élhos tiénen úna kása boníta]
38. Nuestra casa es pequeña. — Nossa casa é pequena.
IPA: /ˈnwestɾa ˈkasa es peˈkeɲa/ · PT: [nuéstra kása és pekénha]
39. Dame tu libro. — Me dá seu livro.
IPA: /ˈdame tu ˈliβɾo/ · PT: [dáme tu líbro]
40. Esta es mi habitación. — Este é meu quarto.
IPA: /ˈesta es mi aβitaˈθjon/ · PT: [ésta és mi abitathión]

No parque / com o cachorro
41. Es un perro. — É um cachorro.
IPA: /es un ˈpero/ · PT: [és un pérro]
42. Su nombre es Max. — O nome dele é Max.
IPA: /su ˈnombɾe es maks/ · PT: [su nómbre és máks]
43. El perro tiene sus juguetes. — O cachorro tem os brinquedos dele.
IPA: /el ˈpero ˈtjene sus xuˈɣetes/ · PT: [el pérro tiéne sus rruguétes]

Saindo com amigos / hobbies
44. (Yo) juego al fútbol. — Eu jogo futebol.
IPA: /ˈxweɣo al ˈfutβol/ · PT: [rruégo al fútbol]
45. Amamos el inglés. — Nós amamos inglês.
IPA: /aˈmamos el iŋˈɡles/ · PT: [amámos el inglés]
46. Ellos son estudiantes. — Eles são estudantes.
IPA: /ˈeʎos son estuˈðjantes/ · PT: [élhos son estudiántes]
47. Tú eres mi mejor amigo. — Você é meu melhor amigo.
IPA: /tu ˈeɾes mi meˈxoɾ aˈmiɣo/ · PT: [tu éres mi merrór amígo]

Descrevendo pessoas / viajando
48. Tú eres australiano. — Você é australiano.
IPA: /tu ˈeɾes awstɾaˈljano/ · PT: [tu éres australiáno]
49. Él es muy alto. — Ele é muito alto.
IPA: /el es mui ˈalto/ · PT: [él és múi álto]
50. Me gustan tus coches. — Eu gosto dos seus carros.
IPA: /me ˈɡustan tus ˈkotʃes/ · PT: [me gústan tus kótches]

51. Tengo un hermano. — Eu tenho um irmão.
IPA: /ˈteŋɡo un eɾˈmano/ · PT: [téngo un ermáno]
52. Ella es mi amiga. — Ela é minha amiga.
IPA: /ˈeʎa es mi aˈmiɣa/ · PT: [élha és mi amíga]
53. A él le gusta su trabajo. — Ele gosta do trabalho dele.
IPA: /a el le ˈɡusta su tɾaˈβaxo/ · PT: [a él le gústa su trabárro]
54. Necesitamos nuestros libros. — Nós precisamos dos nossos livros.
IPA: /neθesiˈtamos ˈnwestɾos ˈliβɾos/ · PT: [nethesitámos nuéstros líbros]

Um pouco mais
55. Su casa es grande. — A casa deles é grande.
IPA: /su ˈkasa es ˈɡɾande/ · PT: [su kása és gránde]
56. Su coche es nuevo. — O carro dela é novo.
IPA: /su ˈkotʃe es ˈnweβo/ · PT: [su kótche és nuébo]
57. ¿Es este tu móvil? — Este é o seu celular?
IPA: /es ˈeste tu ˈmoβil/ · PT: [és éste tu móbil]
58. No sé su nombre. — Eu não sei o nome dele.
IPA: /no se su ˈnombɾe/ · PT: [no sé su nómbre]

Perguntas e negações
59. ¿Dónde está mi bolígrafo? — Onde está minha caneta?
IPA: /ˈdonde esˈta mi boˈliɣɾafo/ · PT: [dônde está mi bolígrafo]
60. ¿Te gusta su música? — Você gosta da música deles?
IPA: /te ˈɡusta su ˈmusika/ · PT: [te gústa su músika]
61. Ella no es mi profesora. — Ela não é minha professora.
IPA: /ˈeʎa no es mi pɾofeˈsoɾa/ · PT: [élha no és mi profesóra]
62. ¿Por qué está enfadado? — Por que ele está bravo?
IPA: /poɾ ke esˈta emfaˈðaðo/ · PT: [por ké está emfadádo]

Conectores e tempos verbais
63. Amo a mi familia porque me ayudan. — Eu amo minha família porque eles me ajudam.
IPA: /ˈamo a mi faˈmilja ˈpoɾke me aˈʝuðan/ · PT: [ámo a mi famílha pórke me aiúdan]
64. Está leyendo su libro ahora. — Ele está lendo o livro dele agora.
IPA: /esˈta leˈʝendo su ˈliβɾo aˈoɾa/ · PT: [está leiéndo su líbro aóra]
65. Visitamos su casa ayer. — Nós visitamos a casa deles ontem.
IPA: /bisiˈtamos su ˈkasa aˈʝeɾ/ · PT: [bisitámos su kása aiér]
66. Hablaba con su hermana cuando llamé. — Ela estava falando com a irmã dela quando liguei.
IPA: /aˈβlaβa kon su eɾˈmana ˈkwando ʎaˈme/ · PT: [ablába kon su ermána kuándo lhamé]
67. Perdieron sus llaves en el parque. — Eles perderam as chaves deles no parque.
IPA: /peɾˈðjeɾon sus ˈʎaβes en el ˈpaɾke/ · PT: [perdiéron sus lhábes en el párke]

As mais ricas
68. Mi hermano es alto, pero su mujer es baja. — Meu irmão é alto, mas a esposa dele é baixa.
IPA: /mi eɾˈmano es ˈalto ˈpeɾo su muˈxeɾ es ˈbaxa/ · PT: [mi ermáno és álto péro su murrér és bárra]
69. Traeré mi coche porque el tuyo está roto. — Vou trazer meu carro porque o seu está quebrado.
IPA: /tɾaeˈɾe mi ˈkotʃe ˈpoɾke el ˈtuʝo esˈta ˈroto/ · PT: [traeré mi kótche pórke el túio está róto]
70. Le encanta su trabajo y su jefe la respeta. — Ela ama o trabalho dela, e o chefe dela a respeita.
IPA: /le eŋˈkanta su tɾaˈβaxo i su ˈxefe la resˈpeta/ · PT: [le enkánta su trabárro i su rréfe la respéta]
71. No sabemos sus nombres, pero ellos saben los nuestros. — Não sabemos os nomes deles, mas eles sabem os nossos.
IPA: /no saˈβemos sus ˈnombɾes ˈpeɾo ˈeʎos ˈsaβen los ˈnwestɾos/ · PT: [no sabémos sus nómbres péro élhos sában los nuéstros]
72. No trajo su pasaporte, así que perdió su vuelo. — Ele não trouxe o passaporte dele, então perdeu o voo dele.
IPA: /no ˈtɾaxo su pasaˈpoɾte aˈsi ke peɾˈðjo su ˈbwelo/ · PT: [no trárro su pasapórte así ke perdió su buélo]
73. Aunque es solo un perro, tiene su propia personalidad. — Embora seja só um cachorro, ele tem a própria personalidade.
IPA: /ˈawŋke es ˈsolo un ˈpero ˈtjene su ˈpɾopja peɾsonaliˈðað/ · PT: [áunke és sólo un pérro tiéne su própia personalidád]
74. ¿Has conocido a su nuevo profesor y a su ayudante? — Você conheceu o novo professor deles e a assistente dela?
IPA: /as konoˈθiðo a su ˈnweβo pɾofeˈsoɾ i a su aʝuˈðante/ · PT: [as konothído a su nuébo profesór i a su aiudánte]
75. Me gusta tu idea, pero creo que nuestro plan es mejor. — Eu gosto da sua ideia, mas acho que nosso plano é melhor.
IPA: /me ˈɡusta tu iˈðea ˈpeɾo ˈkɾeo ke ˈnwestɾo plan es meˈxoɾ/ · PT: [me gústa tu idéa péro kréo ke nuéstro plán és merrór]

«¿Quién es él?» / «Es mi hermano.» — "Quem é ele?" / "Ele é meu irmão."
IPA: /kjen es el · es mi eɾˈmano/ · PT: [kién és él · és mi ermáno]
«¿Es tuyo este libro?» / «Sí, es mío.» — "Este livro é seu?" / "Sim, é meu."
IPA: /es ˈtuʝo ˈeste ˈliβɾo · si es ˈmio/ · PT: [és túio éste líbro · sí és mío]
«¿Dónde viven?» / «En su casa nueva.» — "Onde eles moram?" / "Na casa nova deles."
IPA: /ˈdonde ˈbiβen · en su ˈkasa ˈnweβa/ · PT: [dônde bíben · en su kása nuéba]
«¿Cómo se llama ella?» / «Se llama Ana.» — "Qual é o nome dela?" / "Ela se chama Ana."
IPA: /ˈkomo se ˈʎama ˈeʎa · se ˈʎama ˈana/ · PT: [kómo se lháma élha · se lháma ána]
«¿Sois estudiantes?» / «Sí, lo somos.» — "Vocês são estudantes?" / "Sim, somos."
IPA: /sois estuˈðjantes · si lo ˈsomos/ · PT: [sóis estudiántes · sí lo sómos]
«¿Es tu profesor?» / «No, es mi jefe.» — "Ele é seu professor?" / "Não, é meu chefe."
IPA: /es tu pɾofeˈsoɾ · no es mi ˈxefe/ · PT: [és tu profesór · no és mi rréfe]
«¿De quién es este coche?» / «Es su coche.» — "De quem é este carro?" / "É o carro deles."
IPA: /de kjen es ˈeste ˈkotʃe · es su ˈkotʃe/ · PT: [de kién és éste kótche · és su kótche]
«¿Amáis el inglés?» / «Sí, lo amamos.» — "Vocês amam inglês?" / "Sim, amamos."
IPA: /aˈmais el iŋˈɡles · si lo aˈmamos/ · PT: [amáis el inglés · sí lo amámos]
«¿Es australiana?» / «No, es americana.» — "Ela é australiana?" / "Não, é americana."
IPA: /es awstɾaˈljana · no es ameɾiˈkana/ · PT: [és australiána · no és amerikána]
«¿Puedo usar tu bolígrafo?» / «Claro, aquí tienes.» — "Posso usar sua caneta?" / "Claro, aqui está."
IPA: /ˈpweðo uˈsaɾ tu boˈliɣɾafo · ˈklaɾo aˈki ˈtjenes/ · PT: [puédo usár tu bolígrafo · kláro akí tiénes]
«¿Es tu perro?» / «Sí, se llama Max.» — "É o seu cachorro?" / "Sim, ele se chama Max."
IPA: /es tu ˈpero · si se ˈʎama maks/ · PT: [és tu pérro · sí se lháma máks]
«¿Son tus padres?» / «Sí, lo son.» — "Eles são seus pais?" / "Sim, são."
IPA: /son tus ˈpaðɾes · si lo son/ · PT: [son tus pádres · sí lo son]
«¿Te gusta mi casa?» / «Sí, es preciosa.» — "Você gosta da minha casa?" / "Sim, é linda."
IPA: /te ˈɡusta mi ˈkasa · si es pɾeˈθjosa/ · PT: [te gústa mi kása · sí és prethiósa]
«¿Es este su profesor?» / «Sí, lo es.» — "Este é o professor deles?" / "Sim, é."
IPA: /es ˈeste su pɾofeˈsoɾ · si lo es/ · PT: [és éste su profesór · sí lo és]
«¿Dónde está su hermana?» / «Está en el colegio.» — "Onde está a irmã dele?" / "Está na escola."
IPA: /ˈdonde esˈta su eɾˈmana · esˈta en el koˈlexjo/ · PT: [dônde está su ermána · está en el kolérrio]
«¿La conoces?» / «No, no la conozco.» — "Você a conhece?" / "Não, não conheço."
IPA: /la koˈnoθes · no no la koˈnoθko/ · PT: [la konóthes · no no la konóthko]
«¿Son tuyos estos coches?» / «No, son suyos.» — "Estes carros são seus?" / "Não, são dele."
IPA: /son ˈtuʝos ˈestos ˈkotʃes · no son ˈsuʝos/ · PT: [son túios éstos kótches · no son súios]
«¿Es alto?» / «Sí, muy alto.» — "Ele é alto?" / "Sim, muito alto."
IPA: /es ˈalto · si mui ˈalto/ · PT: [és álto · sí múi álto]
«¿Qué tienen?» / «Tienen una casa bonita.» — "O que eles têm?" / "Têm uma casa bonita."
IPA: /ke ˈtjenen · ˈtjenen una ˈkasa boˈnita/ · PT: [ke tiénen · tiénen úna kása boníta]
«¿Ese móvil es tuyo o mío?» / «Es tuyo.» — "Aquele celular é seu ou meu?" / "É seu."
IPA: /ˈese ˈmoβil es ˈtuʝo o ˈmio · es ˈtuʝo/ · PT: [ése móbil és túio o mío · és túio]
«¿Tenemos nuestras entradas?» / «Sí, las tengo yo.» — "Temos nossos ingressos?" / "Sim, estão comigo."
IPA: /teˈnemos ˈnwestɾas enˈtɾaðas · si las ˈteŋɡo ʝo/ · PT: [tenémos nuéstras entrádas · sí las téngo iô]
«¿De quién fue la idea?» / «Fue su idea.» — "De quem foi a ideia?" / "Foi ideia dela."
IPA: /de kjen fwe la iˈðea · fwe su iˈðea/ · PT: [de kién fué la idéa · fué su idéa]
«¿Tu hermana es profesora?» / «Sí, lo es.» — "Sua irmã é professora?" / "Sim, é."
IPA: /tu eɾˈmana es pɾofeˈsoɾa · si lo es/ · PT: [tu ermána és profesóra · sí lo és]
«¿Necesitan nuestra ayuda?» / «Sí, la necesitan.» — "Eles precisam da nossa ajuda?" / "Sim, precisam."
IPA: /neθeˈsitan ˈnwestɾa aˈʝuða · si la neθeˈsitan/ · PT: [nethesítan nuéstra aiúda · sí la nethesítan]
«¿Es este mi asiento?» / «No, es el suyo.» — "Este é meu assento?" / "Não, é o dele."
IPA: /es ˈeste mi aˈsjento · no es el ˈsuʝo/ · PT: [és éste mi asiénto · no és el súio]`;

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
      id: `leccion_3_gramatica_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_3_gramatica_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_3_gramatica_a1_s'] = meta['leccion_3_gramatica_a1_s'] || {};
meta['leccion_3_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
