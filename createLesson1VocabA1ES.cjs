const fs = require('fs');

const rawText = `una casa — uma casa
IPA: /ˈuna ˈkasa/ · PT: [úna kása]
un coche — um carro
IPA: /un ˈkotʃe/ · PT: [un kótche]
una bicicleta — uma bicicleta
IPA: /ˈuna biθiˈkleta/ · PT: [úna bithikléta]
un libro — um livro
IPA: /un ˈliβɾo/ · PT: [un líbro]
un bolígrafo — uma caneta
IPA: /un boˈliɣɾafo/ · PT: [un bolígrafo]
un cuaderno — um caderno
IPA: /un kwaˈðeɾno/ · PT: [un kuadérno]
una mochila — uma mochila
IPA: /ˈuna moˈtʃila/ · PT: [úna motchíla]
un reloj — um relógio
IPA: /un reˈlox/ · PT: [un rrelórr]
un ordenador — um computador
IPA: /un oɾðenaˈðoɾ/ · PT: [un ordenadór]
una televisión — uma TV / televisão
IPA: /ˈuna teleβiˈsjon/ · PT: [úna telebisión]
las gafas — óculos
IPA: /las ˈɡafas/ · PT: [las gáfas]
los zapatos — sapatos
IPA: /los θaˈpatos/ · PT: [los thapátos]
una cartera — uma carteira
IPA: /ˈuna kaɾˈteɾa/ · PT: [úna kartéra]
una llave — uma chave
IPA: /ˈuna ˈʎaβe/ · PT: [úna lhábe]
un móvil — um celular
IPA: /un ˈmoβil/ · PT: [un móbil]
los auriculares — fones de ouvido
IPA: /los awɾikuˈlaɾes/ · PT: [los aurikuláres]
un paraguas — um guarda-chuva
IPA: /un paˈɾaɣwas/ · PT: [un parágwas]
un pasaporte — um passaporte
IPA: /un pasaˈpoɾte/ · PT: [un pasapórte]
un sombrero — um chapéu
IPA: /un somˈbɾeɾo/ · PT: [un sombréro]
una botella de agua — uma garrafa de água
IPA: /ˈuna boˈteʎa de ˈaɣwa/ · PT: [úna botélha de ágwa]

Companheiros comunes
21. un cargador — um carregador
IPA: /un kaɾɣaˈðoɾ/ · PT: [un kargadór]
22. las gafas de sol — óculos de sol
IPA: /las ˈɡafas de sol/ · PT: [las gáfas de sól]
23. el DNI — o documento de identidade
IPA: /el de ˈene i/ · PT: [el de éne i]
24. un abrigo — um casaco
IPA: /un aˈβɾiɣo/ · PT: [un abrígo]
25. una bolsa — uma bolsa / sacola
IPA: /ˈuna ˈbolsa/ · PT: [úna bólsa]

Saindo de casa
26. Necesito mis llaves. — Preciso das minhas chaves.
IPA: /neθeˈsito mis ˈʎaβes/ · PT: [nethesíto mis lhábes]
27. Mi cartera está en la mochila. — Minha carteira está na mochila.
IPA: /mi kaɾˈteɾa esˈta en la moˈtʃila/ · PT: [mi kartéra está en la motchíla]
28. Cojo el paraguas. — Pego o guarda-chuva.
IPA: /ˈkoxo el paˈɾaɣwas/ · PT: [kórro el parágwas]
29. Me pongo el sombrero. — Coloco o chapéu.
IPA: /me ˈpoŋɡo el somˈbɾeɾo/ · PT: [me póngo el sombréro]
30. Cierro la casa con llave. — Tranco a casa.
IPA: /ˈθjero la ˈkasa kon ˈʎaβe/ · PT: [thiérro la kása kon lhábe]

No transporte
31. Subo al coche. — Entro no carro.
IPA: /ˈsuβo al ˈkotʃe/ · PT: [súbo al kótche]
32. Voy en bicicleta. — Vou de bicicleta.
IPA: /boi en biθiˈkleta/ · PT: [bôi en bithikléta]
33. Llevo los auriculares. — Uso os fones.
IPA: /ˈʎeβo los awɾikuˈlaɾes/ · PT: [lhébo los aurikuláres]
34. Miro el reloj. — Olho o relógio.
IPA: /ˈmiɾo el reˈlox/ · PT: [míro el rrelórr]
35. Uso el móvil. — Uso o celular.
IPA: /ˈuso el ˈmoβil/ · PT: [úso el móbil]

No trabalho / estudando
36. Abro el ordenador. — Abro o computador.
IPA: /ˈaβɾo el oɾðenaˈðoɾ/ · PT: [ábro el ordenadór]
37. Escribo en el cuaderno. — Escrevo no caderno.
IPA: /esˈkɾiβo en el kwaˈðeɾno/ · PT: [eskríbo en el kuadérno]
38. Leo un libro. — Leio um livro.
IPA: /ˈleo un ˈliβɾo/ · PT: [léo un líbro]
39. Necesito un bolígrafo. — Preciso de uma caneta.
IPA: /neθeˈsito un boˈliɣɾafo/ · PT: [nethesíto un bolígrafo]
40. Llevo las gafas. — Uso os óculos.
IPA: /ˈʎeβo las ˈɡafas/ · PT: [lhébo las gáfas]

Em casa relaxando
41. Veo la televisión. — Vejo TV.
IPA: /ˈbeo la teleβiˈsjon/ · PT: [béo la telebisión]
42. Me quito los zapatos. — Tiro os sapatos.
IPA: /me ˈkito los θaˈpatos/ · PT: [me kíto los thapátos]
43. Cargo el móvil. — Carrego o celular.
IPA: /ˈkaɾɣo el ˈmoβil/ · PT: [kárgo el móbil]
44. Bebo una botella de agua. — Bebo uma garrafa de água.
IPA: /ˈbeβo una boˈteʎa de ˈaɣwa/ · PT: [bébo una botélha de ágwa]

No aeroporto / viajando
45. Tengo el pasaporte. — Tenho o passaporte.
IPA: /ˈteŋɡo el pasaˈpoɾte/ · PT: [téngo el pasapórte]
46. La bolsa pesa mucho. — A bolsa pesa muito.
IPA: /la ˈbolsa ˈpesa ˈmutʃo/ · PT: [la bólsa pésa mútcho]
47. Enseño el DNI. — Mostro o documento.
IPA: /enˈseɲo el de ˈene i/ · PT: [ensénho el de éne i]

Tempo e clima
48. Me pongo el abrigo. — Visto o casaco.
IPA: /me ˈpoŋɡo el aˈβɾiɣo/ · PT: [me póngo el abrígo]
49. Llevo el paraguas porque llueve. — Levo o guarda-chuva porque chove.
IPA: /ˈʎeβo el paˈɾaɣwas ˈpoɾke ˈʎweβe/ · PT: [lhébo el parágwas pórke lhuébe]
50. Llevo gafas de sol cuando hace sol. — Uso óculos de sol quando faz sol.
IPA: /ˈʎeβo ˈɡafas de sol ˈkwando ˈaθe sol/ · PT: [lhébo gáfas de sól kuándo áthe sól]

Curtas e simples
51. Tengo un coche. — Tenho um carro.
IPA: /ˈteŋɡo un ˈkotʃe/ · PT: [téngo un kótche]
52. Ella lee un libro. — Ela lê um livro.
IPA: /ˈeʎa ˈlee un ˈliβɾo/ · PT: [élha lée un líbro]
53. Él necesita un bolígrafo. — Ele precisa de uma caneta.
IPA: /el neθeˈsita un boˈliɣɾafo/ · PT: [él nethesíta un bolígrafo]
54. Vemos la tele. — Vemos TV.
IPA: /ˈbemos la ˈtele/ · PT: [bémos la téle]

Um poco mais
55. Mis zapatos son nuevos. — Meus sapatos são novos.
IPA: /mis θaˈpatos son ˈnweβos/ · PT: [mis thapátos son nuébos]
56. La casa es grande. — A casa é grande.
IPA: /la ˈkasa es ˈɡɾande/ · PT: [la kása és gránde]
57. ¿Dónde está mi cartera? — Onde está minha carteira?
IPA: /ˈdonde esˈta mi kaɾˈteɾa/ · PT: [dônde está mi kartéra]
58. No tengo las llaves. — Não tenho as chaves.
IPA: /no ˈteŋɡo las ˈʎaβes/ · PT: [no téngo las lhábes]

Perguntas e negações
59. ¿Tienes una bicicleta? — Você tem uma bicicleta?
IPA: /ˈtjenes una biθiˈkleta/ · PT: [tiénes una bithikléta]
60. ¿Es este tu paraguas? — Este é o seu guarda-chuva?
IPA: /es ˈeste tu paˈɾaɣwas/ · PT: [és éste tu parágwas]
61. Él no lleva gafas. — Ele não usa óculos.
IPA: /el no ˈʎeβa ˈɡafas/ · PT: [él no lhéba gáfas]
62. ¿Por qué está abierta tu mochila? — Por que sua mochila está aberta?
IPA: /poɾ ke esˈta aˈβjeɾta tu moˈtʃila/ · PT: [por ké está abiérta tu motchíla]

Conectores e tempos verbais
63. Cojo el paraguas porque llueve. — Pego o guarda-chuva porque chove.
IPA: /ˈkoxo el paˈɾaɣwas ˈpoɾke ˈʎweβe/ · PT: [kórro el parágwas pórke lhuébe]
64. Está usando el ordenador ahora. — Ela está usando o computador agora.
IPA: /esˈta uˈsando el oɾðenaˈðoɾ aˈoɾa/ · PT: [está usándo el ordenadór aóra]
65. Ayer compré un reloj nuevo. — Ontem comprei um relógio novo.
IPA: /aˈʝeɾ komˈpɾe un reˈlox ˈnweβo/ · PT: [aiér kompré un rrelórr nuébo]
66. Estábamos leyendo cuando llamaste. — Estávamos lendo quando você ligou.
IPA: /esˈtaβamos leˈʝendo ˈkwando ʎaˈmaste/ · PT: [estábamos leiéndo kuándo lhamáste]
67. Perdió el pasaporte en el aeropuerto. — Ele perdeu o passaporte no aeroporto.
IPA: /peɾˈðjo el pasaˈpoɾte en el aeɾoˈpweɾto/ · PT: [perdió el pasapórte en el aeropuérto]

As mais ricas
68. No encuentro el móvil, pero tengo la cartera. — Não acho o celular, mas tenho a carteira.
IPA: /no eŋˈkwentɾo el ˈmoβil ˈpeɾo ˈteŋɡo la kaɾˈteɾa/ · PT: [no enkuéntro el móbil péro téngo la kartéra]
69. Siempre lleva los auriculares cuando estudia. — Sempre usa os fones quando estuda.
IPA: /ˈsjempɾe ˈʎeβa los awɾikuˈlaɾes ˈkwando esˈtuðja/ · PT: [siémpre lhéba los aurikuláres kuándo estúdia]
70. Compraré un ordenador nuevo porque el mío es viejo. — Vou comprar um computador novo porque o meu é velho.
IPA: /kompɾaˈɾe un oɾðenaˈðoɾ ˈnweβo ˈpoɾke el ˈmio es ˈbjexo/ · PT: [kompraré un ordenadór nuébo pórke el mío és biérro]
71. Si llueve, cogeré el paraguas y el abrigo. — Se chover, vou pegar o guarda-chuva e o casaco.
IPA: /si ˈʎweβe koxeˈɾe el paˈɾaɣwas i el aˈβɾiɣo/ · PT: [si lhuébe korreré el parágwas i el abrígo]
72. No trajo el libro, así que leyó en el móvil. — Não trouxe o livro, então leu no celular.
IPA: /no ˈtɾaxo el ˈliβɾo aˈsi ke leˈʝo en el ˈmoβil/ · PT: [no trárro el líbro así ke leió en el móbil]
73. Mis gafas están rotas y no puedo leer la pantalla. — Meus óculos estão quebrados e não consigo ler a tela.
IPA: /mis ˈɡafas esˈtan ˈrotas i no ˈpweðo leˈeɾ la panˈtaʎa/ · PT: [mis gáfas están rótas i no puédo leér la pantálha]
74. ¿Has visto mis llaves? Las dejé en la mesa. — Você viu minhas chaves? Eu as deixei na mesa.
IPA: /as ˈbisto mis ˈʎaβes · las deˈxe en la ˈmesa/ · PT: [as bísto mis lhábes · las derré en la mésa]
75. Aunque el coche es viejo, todavía funciona muy bien. — Embora o carro seja velho, ainda funciona muito bem.
IPA: /ˈawŋke el ˈkotʃe es ˈbjexo toðaˈβia funˈθjona mui bjen/ · PT: [áunke el kótche és biérro todabía funthióna múi bién]

«¿Dónde está mi libro?» / «Está en la mesa.» — "Onde está meu livro?" / "Está na mesa."
IPA: /ˈdonde esˈta mi ˈliβɾo · esˈta en la ˈmesa/ · PT: [dônde está mi líbro · está en la mésa]
«¿Es tuyo este bolígrafo?» / «Sí, lo es.» — "Esta caneta é sua?" / "Sim, é."
IPA: /es ˈtuʝo ˈeste boˈliɣɾafo · si lo es/ · PT: [és túio éste bolígrafo · sí lo és]
«¿Tienes coche?» / «No, tengo bicicleta.» — "Você tem carro?" / "Não, tenho bicicleta."
IPA: /ˈtjenes ˈkotʃe · no ˈteŋɡo biθiˈkleta/ · PT: [tiénes kótche · no téngo bithikléta]
«¿Dónde están mis llaves?» / «Están en tu bolsa.» — "Onde están minhas chaves?" / "Estão na sua bolsa."
IPA: /ˈdonde esˈtan mis ˈʎaβes · esˈtan en tu ˈbolsa/ · PT: [dônde están mis lhábes · están en tu bólsa]
«¿Me prestas el paraguas?» / «Claro, aquí tienes.» — "Me empresta o guarda-chuva?" / "Claro, aqui está."
IPA: /me ˈpɾestas el paˈɾaɣwas · ˈklaɾo aˈki ˈtjenes/ · PT: [me préstas el parágwas · kláro akí tiénes]
«¿De quién es esta mochila?» / «Es mía.» — "De quem é esta mochila?" / "É minha."
IPA: /de kjen es ˈesta moˈtʃila · es ˈmia/ · PT: [de kién és ésta motchíla · és mía]
«¿Está cargado el móvil?» / «No, no lo está.» — "O celular está carregado?" / "Não, não está."
IPA: /esˈta kaɾˈɣaðo el ˈmoβil · no no lo esˈta/ · PT: [está kargádo el móbil · no no lo está]
«¿Llevas gafas?» / «Sí, llevo gafas.» — "Você usa óculos?" / "Sim, uso óculos."
IPA: /ˈʎeβas ˈɡafas · si ˈʎeβo ˈɡafas/ · PT: [lhébas gáfas · sí lhébo gáfas]
«¿Dónde está la botella de agua?» / «Está en la nevera.» — "Onde está a garrafa de água?" / "Está na geladeira."
IPA: /ˈdonde esˈta la boˈteʎa de ˈaɣwa · esˈta en la neˈβeɾa/ · PT: [dônde está la botélha de ágwa · está en la nebéra]
«¿Son tuyos estos zapatos?» / «No, no lo son.» — "Estes sapatos são seus?" / "Não, não são."
IPA: /son ˈtuʝos ˈestos θaˈpatos · no no lo son/ · PT: [son túios éstos thapátos · no no lo son]
«¿Tienes el pasaporte?» / «Sí, está en la bolsa.» — "Você está com o passaporte?" / "Sim, está na bolsa."
IPA: /ˈtjenes el pasaˈpoɾte · si esˈta en la ˈbolsa/ · PT: [tiénes el pasapórte · sí está en la bólsa]
«¿Puedo usar tu ordenador?» / «Claro que sí.» — "Posso usar seu computador?" / "Claro que sim."
IPA: /ˈpweðo uˈsaɾ tu oɾðenaˈðoɾ · ˈklaɾo ke si/ · PT: [puédo usár tu ordenadór · kláro ke sí]
«¿Dónde está tu cartera?» / «Está en el bolsillo.» — "Onde está sua carteira?" / "Está no bolso."
IPA: /ˈdonde esˈta tu kaɾˈteɾa · esˈta en el bolˈsiʎo/ · PT: [dônde está tu kartéra · está en el bolsílho]
«¿Es tuyo este sombrero?» / «Sí, ¡gracias!» — "Este chapéu é seu?" / "Sim, obrigado!"
IPA: /es ˈtuʝo ˈeste somˈbɾeɾo · si ˈɡɾaθjas/ · PT: [és túio éste sombréro · sí gráthias]
«¿Qué hora es?» / «Déjame mirar el reloj.» — "Que horas são?" / "Deixa eu ver o relógio."
IPA: /ke ˈoɾa es · ˈdexame miˈɾaɾ el reˈlox/ · PT: [ke óra és · dérrame mirár el rrelórr]
«¿Ves mucho la tele?» / «No, no mucho.» — "Você vê muita TV?" / "Não, não muito."
IPA: /bes ˈmutʃo la ˈtele · no no ˈmutʃo/ · PT: [bés mútcho la téle · no no mútcho]
«¿Me das un bolígrafo, por favor?» / «Aquí tienes.» — "Me dá uma caneta, por favor?" / "Aqui está."
IPA: /me das un boˈliɣɾafo poɾ faˈβoɾ · aˈki ˈtjenes/ · PT: [me das un bolígrafo por fabór · akí tiénes]
«¿Dónde están los auriculares?» / «Están al lado del ordenador.» — "Onde estão os fones?" / "Estão ao lado do computador."
IPA: /ˈdonde esˈtan los awɾikuˈlaɾes · esˈtan al ˈlaðo del oɾðenaˈðoɾ/ · PT: [dônde están los aurikuláres · están al ládo del ordenadór]
«¿Está lejos la casa?» / «No, está cerca.» — "A casa é longe?" / "Não, é perto."
IPA: /esˈta ˈlexos la ˈkasa · no esˈta ˈθeɾka/ · PT: [está lérros la kása · no está thérka]
«¿Trajiste el cuaderno?» / «Sí, lo traje.» — "Você trouxe o caderno?" / "Sim, trouxe."
IPA: /tɾaˈxiste el kwaˈðeɾno · si lo ˈtɾaxe/ · PT: [trarríste el kuadérno · sí lo trárre]
«¿De quién es el móvil que suena?» / «Es el mío, ¡perdón!» — "De quem é o celular tocando?" / "É o meu, desculpa!"
IPA: /de kjen es el ˈmoβil ke ˈswena · es el ˈmio peɾˈðon/ · PT: [de kién és el móbil ke suéna · és el mío perdón]
«¿Es tuya la bicicleta?» / «No, es de mi hermano.» — "A bicicleta é sua?" / "Não, é do meu irmão."
IPA: /es ˈtuʝa la biθiˈkleta · no es de mi eɾˈmano/ · PT: [és túia la bithikléta · no és de mi ermáno]
«¿Necesitas una bolsa?» / «Sí, por favor.» — "Você precisa de uma sacola?" / "Sim, por favor."
IPA: /neθeˈsitas una ˈbolsa · si poɾ faˈβoɾ/ · PT: [nethesítas una bólsa · sí por fabór]
«¿Dónde está mi abrigo?» / «Está al lado de la puerta.» — "Onde está meu casaco?" / "Está ao lado da porta."
IPA: /ˈdonde esˈta mi aˈβɾiɣo · esˈta al ˈlaðo de la ˈpweɾta/ · PT: [dônde está mi abrígo · está al ládo de la puérta]
«¿Puedes apagar la tele?» / «Claro, sin problema.» — "Você pode desligar a TV?" / "Claro, sem problema."
IPA: /ˈpweðes apaˈɣaɾ la ˈtele · ˈklaɾo sin pɾoˈβlema/ · PT: [puédes apagár la téle · kláro sin probléma]`;

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
      id: `leccion_1_vocabulario_a1_s_es_card_${index++}`,
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

const outputFile = 'public/decks/leccion_1_vocabulario_a1_s_es.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['leccion_1_vocabulario_a1_s'] = decksMeta['leccion_1_vocabulario_a1_s'] || {};
decksMeta['leccion_1_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
