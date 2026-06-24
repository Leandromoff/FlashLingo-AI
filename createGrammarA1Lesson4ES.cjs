const fs = require('fs');

const rawText = `un estudiante → estudiantes — um estudante → estudantes
IPA: /un estuˈðjante → estuˈðjantes/ · PT: [un estudiánte → estudiántes]
una manzana → manzanas — uma maçã → maçãs
IPA: /una manˈθana → manˈθanas/ · PT: [úna manthána → manthánas]

Termina em consoante (+es)
3. un autobús → autobuses — um ônibus → ônibus (pl.)
IPA: /un awtoˈβus → awtoˈβuses/ · PT: [un autobús → autobúses]
4. una caja → cajas — uma caixa → caixas
IPA: /una ˈkaxa → ˈkaxas/ · PT: [úna kárra → kárras]

Bebê e país
5. un bebé → bebés — um bebê → bebês
IPA: /un beˈβe → beˈβes/ · PT: [un bebé → bebés]
6. un país → países — um país → países
IPA: /un paˈis → paˈises/ · PT: [un país → países]

Dia e brinquedo
7. un día → días — um dia → dias
IPA: /un ˈdia → ˈdias/ · PT: [un día → días]
8. un juguete → juguetes — um brinquedo → brinquedos
IPA: /un xuˈɣete → xuˈɣetes/ · PT: [un rruguéte → rruguétes]

Prateleira e mulher
9. una estantería → estanterías — uma prateleira → prateleiras
IPA: /una estanteˈɾia → estanteˈɾias/ · PT: [úna estantería → estanterías]
10. una mujer → mujeres — uma mulher → mulheres
IPA: /una muˈxeɾ → muˈxeɾes/ · PT: [úna murrér → murréres]

Gênero do artigo (un / una)
11. una mesa — uma mesa (feminino → una)
IPA: /una ˈmesa/ · PT: [úna mésa]
12. una naranja — uma laranja (feminino → una)
IPA: /una naˈɾaŋxa/ · PT: [úna naránrra]
13. un huevo — um ovo (masculino → un)
IPA: /un ˈweβo/ · PT: [un uébo]

Homem e menino
14. un hombre → hombres — um homem → homens
IPA: /un ˈombɾe → ˈombɾes/ · PT: [un ómbre → ómbres]
15. un niño → niños — um menino → meninos
IPA: /un ˈniɲo → ˈniɲos/ · PT: [un nínho → nínhos]

Final -z vira -ces
16. un lápiz → lápices — um lápis → lápis (pl.)
IPA: /un ˈlapiθ → ˈlapiθes/ · PT: [un lápith → lápithes]
17. un pez → peces — um peixe → peixes
IPA: /un peθ → ˈpeθes/ · PT: [un péth → péthes]

Pé e dente
18. un pie → pies — um pé → pés
IPA: /un pje → pjes/ · PT: [un pié → piés]
19. un diente → dientes — um dente → dentes
IPA: /un ˈdjente → ˈdjentes/ · PT: [un diénte → diéntes]

Rato, ovelha
20. un ratón → ratones — um rato → ratos
IPA: /un raˈton → raˈtones/ · PT: [un ratón → ratónes]
21. una oveja → ovejas — uma ovelha → ovelhas
IPA: /una oˈβexa → oˈβexas/ · PT: [úna obérra → obérras]

Hora, chapéu
22. una hora — uma hora
IPA: /una ˈoɾa/ · PT: [úna óra]
23. un sombrero — um chapéu
IPA: /un somˈbɾeɾo/ · PT: [un sombréro]

Invariável (já termina em -s)
24. el paraguas → los paraguas — o guarda-chuva → os guarda-chuvas
IPA: /el paˈɾaɣwas → los paˈɾaɣwas/ · PT: [el parágwas → los parágwas]
25. una universidad → universidades — uma universidade → universidades
IPA: /una uniβeɾsiˈðað → uniβeɾsiˈðaðes/ · PT: [úna unibersidád → unibersidádes]

26. Compro una manzana. — Eu compro uma maçã.
IPA: /ˈkompɾo una manˈθana/ · PT: [kómpro úna manthána]
27. Necesito tres manzanas. — Eu preciso de três maçãs.
IPA: /neθeˈsito tɾes manˈθanas/ · PT: [nethesíto trés manthánas]
28. Ella compra una naranja. — Ela compra uma laranja.
IPA: /ˈeʎa ˈkompɾa una naˈɾaŋxa/ · PT: [élha kómpra úna naránrra]
29. Necesitamos una caja de huevos. — Precisamos de uma caixa de ovos.
IPA: /neθesiˈtamos una ˈkaxa de ˈweβos/ · PT: [nethesitámos úna kárra de uébos]
30. Los huevos están frescos. — Os ovos estão frescos.
IPA: /los ˈweβos esˈtan ˈfɾeskos/ · PT: [los uébos están fréskos]

No transporte
31. Cojo un autobús. — Eu pego um ônibus.
IPA: /ˈkoxo un awtoˈβus/ · PT: [kórro un autobús]
32. Los autobuses llegan tarde. — Os ônibus chegam atrasados.
IPA: /los awtoˈβuses ˈʎeɣan ˈtaɾðe/ · PT: [los autobúses lhégan tárde]
33. Llevo un sombrero. — Eu uso um chapéu.
IPA: /ˈʎeβo un somˈbɾeɾo/ · PT: [lhébo un sombréro]
34. Llevo un paraguas. — Eu levo um guarda-chuva.
IPA: /ˈʎeβo un paˈɾaɣwas/ · PT: [lhébo un parágwas]

Em casa / tarefas
35. Pongo los libros en una estantería. — Eu coloco os livros numa prateleira.
IPA: /ˈpoŋɡo los ˈliβɾos en una estanteˈɾia/ · PT: [póngo los líbros en úna estantería]
36. Las estanterías están llenas. — As prateleiras estão cheias.
IPA: /las estanteˈɾias esˈtan ˈʎenas/ · PT: [las estanterías están lhénas]
37. Hay un ratón en la cocina. — Tem um rato na cozinha.
IPA: /ai un raˈton en la koˈθina/ · PT: [ái un ratón en la kothína]
38. Tenemos dos niños. — Nós temos dois filhos.
IPA: /teˈnemos dos ˈniɲos/ · PT: [tenémos dos nínhos]
39. El bebé está durmiendo. — O bebê está dormindo.
IPA: /el beˈβe esˈta duɾˈmjendo/ · PT: [el bebé está durmiéndo]

Na escola / universidade
40. Él es estudiante. — Ele é estudiante.
IPA: /el es estuˈðjante/ · PT: [él és estudiánte]
41. Los estudiantes estudian mucho. — Os estudantes estudam muito.
IPA: /los estuˈðjantes esˈtuðjan ˈmutʃo/ · PT: [los estudiántes estúdian mútcho]
42. Ella va a una universidad. — Ela vai para uma universidade.
IPA: /ˈeʎa ba a una uniβeɾsiˈðað/ · PT: [élha ba a úna unibersidád]
43. Tengo clase en una hora. — Eu tenho aula em uma hora.
IPA: /ˈteŋɡo ˈklase en una ˈoɾa/ · PT: [téngo kláse en úna óra]

No médico / corpo
44. Me duele un diente. — Meu dente dói.
IPA: /me ˈdwele un ˈdjente/ · PT: [me duéle un diénte]
45. El dentista revisa mis dientes. — O dentista examina meus dentes.
IPA: /el denˈtista reˈβisa mis ˈdjentes/ · PT: [el dentísta rebísa mis diéntes]
46. Me duele el pie. — Meu pé está dolorido.
IPA: /me ˈdwele el pje/ · PT: [me duéle el pié]

Na fazenda / parque
47. Hay una oveja en el campo. — Tem uma ovelha no campo.
IPA: /ai una oˈβexa en el ˈkampo/ · PT: [ái úna obérra en el kámpo]
48. Las ovejas comen hierba. — As ovelhas comem grama.
IPA: /las oˈβexas ˈkomen ˈʝeɾβa/ · PT: [las obérras kómen iérba]
49. Pesqué un pez. — Eu peguei um peixe.
IPA: /pesˈke un peθ/ · PT: [peské un péth]
50. Pescamos cinco peces. — Pegamos cinco peixes.
IPA: /pesˈkamos ˈθiŋko ˈpeθes/ · PT: [peskámos thínko péthes]

51. Tengo una caja. — Eu tenho uma caixa.
IPA: /ˈteŋɡo una ˈkaxa/ · PT: [téngo úna kárra]
52. Ella come una manzana. — Ela come uma maçã.
IPA: /ˈeʎa ˈkome una manˈθana/ · PT: [élha kóme úna manthána]
53. Él es un hombre. — Ele é um homem.
IPA: /el es un ˈombɾe/ · PT: [él és un ómbre]
54. Ellos son estudiantes. — Eles são estudantes.
IPA: /ˈeʎos son estuˈðjantes/ · PT: [élhos son estudiántes]

Um pouco mais
55. Los bebés están llorando. — Os bebês estão chorando.
IPA: /los beˈβes esˈtan ʎoˈɾando/ · PT: [los bebés están lhorándo]
56. Dos mujeres están hablando. — Duas mulheres estão conversando.
IPA: /dos muˈxeɾes esˈtan aˈβlando/ · PT: [dos murréres están ablándo]
57. ¿Es esto un pez o un juguete? — Isto é um peixe ou um brinquedo?
IPA: /es ˈesto un peθ o un xuˈɣete/ · PT: [és ésto un péth o un rruguéte]
58. No tengo paraguas. — Eu não tenho guarda-chuva.
IPA: /no ˈteŋɡo paˈɾaɣwas/ · PT: [no téngo parágwas]

Perguntas e negações
59. ¿Cuántas cajas tienes? — Quantas caixas você tem?
IPA: /ˈkwantas ˈkaxas ˈtjenes/ · PT: [kuántas kárras tiénes]
60. ¿Hay manzanas? — Tem maçãs?
IPA: /ai manˈθanas/ · PT: [ái manthánas]
61. Estos no son juguetes. — Estes não são brinquedos.
IPA: /ˈestos no son xuˈɣetes/ · PT: [éstos no son rruguétes]
62. ¿Por qué están vacías las estanterías? — Por que as prateleiras estão vazias?
IPA: /poɾ ke esˈtan baˈθias las estanteˈɾias/ · PT: [por ké están bathías las estanterías]

Conectores e tempos verbais
63. Compré una manzana porque tenía hambre. — Eu comprei uma maçã porque estava com fome.
IPA: /komˈpɾe una manˈθana ˈpoɾke teˈnia ˈambɾe/ · PT: [kompré úna manthána pórke tenía âmbre]
64. Los niños están jugando con sus juguetes. — As crianças estão brincando com os brinquedos delas.
IPA: /los ˈniɲos esˈtan xuˈɣando kon sus xuˈɣetes/ · PT: [los nínhos están rrugándo kon sus rruguétes]
65. Visitamos tres países el año pasado. — Nós visitamos três países no ano passado.
IPA: /bisiˈtamos tɾes paˈises el ˈaɲo paˈsaðo/ · PT: [bisitámos trés países el ánho pasádo]
66. Estaba leyendo cuando llegó el autobús. — Ela estava lendo quando o ônibus chegou.
IPA: /esˈtaβa leˈʝendo ˈkwando ʎeˈɣo el awtoˈβus/ · PT: [estába leiéndo kuándo lhegó el autobús]
67. Los ratones corrieron debajo de la mesa. — Os ratos correram para baixo da mesa.
IPA: /los raˈtones koˈrjeɾon deˈβaxo de la ˈmesa/ · PT: [los ratónes korriéron debárro de la mésa]

As mais ricas
68. Compraré una docena de huevos cuando vaya a la tienda. — Vou comprar uma dúzia de ovos quando for ao mercado.
IPA: /kompɾaˈɾe una doˈθena de ˈweβos ˈkwando ˈbaʝa a la ˈtjenda/ · PT: [kompraré úna dothéna de uébos kuándo báia a la tiénda]
69. Tiene dos pies, pero le falta un zapato. — Ele tem dois pés, mas falta um sapato.
IPA: /ˈtjene dos pjes ˈpeɾo le ˈfalta un θaˈpato/ · PT: [tiéne dos piés péro le fálta un thapáto]
70. Aunque es solo una hora, la clase se hace larga. — Embora seja só uma hora, a aula parece longa.
IPA: /ˈawŋke es ˈsolo una ˈoɾa la ˈklase se ˈaθe ˈlaɾɣa/ · PT: [áunke és sólo úna óra la kláse se áthe lárga]
71. Los hombres y las mujeres trabajan en la misma universidad. — Os homens e as mulheres trabalham na mesma universidade.
IPA: /los ˈombɾes i las muˈxeɾes tɾaˈβaxan en la ˈmisma uniβeɾsiˈðað/ · PT: [los ómbres i las murréres trabárran en la mísma unibersidád]
72. No llevé paraguas, así que me mojé. — Eu não trouxe guarda-chuva, então me molhei.
IPA: /no ʎeˈβe paˈɾaɣwas aˈsi ke me moˈxe/ · PT: [no lhebé parágwas así ke me morré]
73. Me duelen los dientes porque comí demasiados dulces. — Meus dentes doem porque comi muito doce.
IPA: /me ˈdwelen los ˈdjentes ˈpoɾke koˈmi demaˈsjaðos ˈdulθes/ · PT: [me duélen los diéntes pórke komí demasiádos dúlthes]
74. ¿Has visto alguna vez un ratón tan grande como este? — Você já viu um rato tão grande quanto este?
IPA: /as ˈbisto alˈɣuna beθ un raˈton tan ˈɡɾande ˈkomo ˈeste/ · PT: [as bísto algúna béth un ratón tan gránde kómo éste]
75. Necesitamos más estanterías porque tenemos demasiados libros. — Precisamos de mais prateleiras porque temos livros demais.
IPA: /neθesiˈtamos mas estanteˈɾias ˈpoɾke teˈnemos demaˈsjaðos ˈliβɾos/ · PT: [nethesitámos mas estanterías pórke tenémos demasiádos líbros]

«¿Quieres una manzana?» / «Sí, por favor.» — "Você quer uma maçã?" / "Sim, por favor."
IPA: /ˈkjeɾes una manˈθana · si poɾ faˈβoɾ/ · PT: [kiéres úna manthána · sí por fabór]
«¿Es esto un autobús o un tren?» / «Es un autobús.» — "Isto é um ônibus ou um trem?" / "É um ônibus."
IPA: /es ˈesto un awtoˈβus o un tɾen · es un awtoˈβus/ · PT: [és ésto un autobús o un trén · és un autobús]
«¿Cuántos niños tienes?» / «Dos.» — "Quantos filhos você tem?" / "Dois."
IPA: /ˈkwantos ˈniɲos ˈtjenes · dos/ · PT: [kuántos nínhos tiénes · dos]
«¿Son tuyos estos juguetes?» / «Sí, lo son.» — "Estes brinquedos são seus?" / "Sim, são."
IPA: /son ˈtuʝos ˈestos xuˈɣetes · si lo son/ · PT: [son túios éstos rruguétes · sí lo son]
«¿Dónde está la caja?» / «En la estantería.» — "Onde está a caixa?" / "Na prateleira."
IPA: /ˈdonde esˈta la ˈkaxa · en la estanteˈɾia/ · PT: [dônde está la kárra · en la estantería]
«¿Tienes paraguas?» / «No, no tengo.» — "Você tem guarda-chuva?" / "Não, não tenho."
IPA: /ˈtjenes paˈɾaɣwas · no no ˈteŋɡo/ · PT: [tiénes parágwas · no no téngo]
«¿Eso es un pez?» / «Sí, lo es.» — "Aquilo é um peixe?" / "Sim, é."
IPA: /ˈeso es un peθ · si lo es/ · PT: [éso és un péth · sí lo és]
«¿Cuántos huevos necesitamos?» / «Seis.» — "Quantos ovos precisamos?" / "Seis."
IPA: /ˈkwantos ˈweβos neθesiˈtamos · seis/ · PT: [kuántos uébos nethesitámos · séis]
«¿Es estudiante?» / «Sí, en la universidad.» — "Ele é estudante?" / "Sim, na universidade."
IPA: /es estuˈðjante · si en la uniβeɾsiˈðað/ · PT: [és estudiánte · sí en la unibersidád]
«¿Qué hora es?» / «Nos queda una hora.» — "Que horas são?" / "Falta uma hora."
IPA: /ke ˈoɾa es · nos ˈkeða una ˈoɾa/ · PT: [ke óra és · nos kéda úna óra]
«¿Hay ratones en casa?» / «Sí, por desgracia.» — "Tem ratos em casa?" / "Sim, infelizmente."
IPA: /ai raˈtones en ˈkasa · si poɾ desˈɣɾaθja/ · PT: [ái ratónes en kása · sí por desgráthia]
«¿Viven ovejas aquí?» / «Sí, en la granja.» — "Tem ovelhas aqui?" / "Sim, na fazenda."
IPA: /ˈbiβen oˈβexas aˈki · si en la ˈɡɾanxa/ · PT: [bíben obérras akí · sí en la gránrra]
«¿Esto es una naranja?» / «No, es un limón.» — "Isto é uma laranja?" / "Não, é um limão."
IPA: /ˈesto es una naˈɾaŋxa · no es un liˈmon/ · PT: [ésto és úna naránrra · no és un limón]
«¿Estos hombres son tus hermanos?» / «No, son mis primos.» — "Estes homens são seus irmãos?" / "Não, são meus primos."
IPA: /ˈestos ˈombɾes son tus eɾˈmanos · no son mis ˈpɾimos/ · PT: [éstos ómbres son tus ermános · no son mis prímos]
«¿Todavía te duele el diente?» / «No, ya está mejor.» — "Seu dente ainda dói?" / "Não, já está melhor."
IPA: /toðaˈβia te ˈdwele el ˈdjente · no ʝa esˈta meˈxoɾ/ · PT: [todabía te duéle el diénte · no ia está merrór]
«¿Cuántos países has visitado?» / «Tres.» — "Quantos países você visitou?" / "Três."
IPA: /ˈkwantos paˈises as bisiˈtaðo · tɾes/ · PT: [kuántos países as bisitádo · trés]
«¿Eso es un sombrero?» / «Sí, es mío.» — "Aquilo é um chapéu?" / "Sim, é meu."
IPA: /ˈeso es un somˈbɾeɾo · si es ˈmio/ · PT: [éso és un sombréro · sí és mío]
«¿Son profesoras las mujeres?» / «Sí, lo son.» — "As mulheres são professoras?" / "Sim, são."
IPA: /son pɾofeˈsoɾas las muˈxeɾes · si lo son/ · PT: [son profesóras las murréres · sí lo son]
«¿Necesitas una caja?» / «Sí, una grande.» — "Você precisa de uma caixa?" / "Sim, uma grande."
IPA: /neθeˈsitas una ˈkaxa · si una ˈɡɾande/ · PT: [nethesítas úna kárra · sí úna gránde]
«¿Es una hora o dos?» / «Solo una hora.» — "É uma hora ou duas?" / "Só uma hora."
IPA: /es una ˈoɾa o dos · ˈsolo una ˈoɾa/ · PT: [és úna óra o dos · sólo úna óra]
«¿Son tuyas estas estanterías?» / «No, son suyas.» — "Estas prateleiras são suas?" / "Não, são dela."
IPA: /son ˈtuʝas ˈestas estanteˈɾias · no son ˈsuʝas/ · PT: [son túias éstas estanterías · no son súias]
«¿Me das un huevo?» / «Claro, coge dos.» — "Me dá um ovo?" / "Claro, pega dois."
IPA: /me das un ˈweβo · ˈklaɾo ˈkoxe dos/ · PT: [me das un uébo · kláro kórre dos]
«¿Está bien tu pie?» / «No, me duele.» — "Seu pé está bem?" / "Não, está doendo."
IPA: /esˈta bjen tu pje · no me ˈdwele/ · PT: [está bién tu pié · no me duéle]
«¿Esos bebés son gemelos?» / «Sí, lo son.» — "Aqueles bebês são gêmeos?" / "Sim, são."
IPA: /ˈesos beˈβes son xeˈmelos · si lo son/ · PT: [ésos bebés son rremélos · sí lo son]
«¿Esto es una universidad?» / «Sí, una grande.» — "Isto é uma universidade?" / "Sim, uma grande."
IPA: /ˈesto es una uniβeɾsiˈðað · si una ˈɡɾande/ · PT: [ésto és úna unibersidád · sí úna gránde]`;

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
      id: `leccion_4_gramatica_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_4_gramatica_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_4_gramatica_a1_s'] = meta['leccion_4_gramatica_a1_s'] || {};
meta['leccion_4_gramatica_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
