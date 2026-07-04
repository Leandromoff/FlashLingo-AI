const fs = require('fs');

const raw = `Llamé a Peter. — Eu liguei para o Peter.
IPA: /ʎaˈme a ˈpiteɾ/ · PT: [lhamé a píter]
¿A quién llamaste? — Para quem você ligou?
IPA: /a kjen ʎaˈmaste/ · PT: [a kién lhamáste]
Peter me llamó. — O Peter me ligou.
IPA: /ˈpiteɾ me ʎaˈmo/ · PT: [píter me lhamó]
¿Quién te llamó? — Quem te ligou?
IPA: /kjen te ʎaˈmo/ · PT: [kién te lhamó]
Cuando la palabra interrogativa es el sujeto, no hay auxiliar. — Quando a palavra interrogativa é o sujeito, não há auxiliar.
IPA: /ˈkwando la paˈlaβɾa interoɣaˈtiβa es el suˈxeto no ai awkˈsiljaɾ/ · PT: [kuándo la palábra interrogatíba és el surréto no ái auksiliár]

Más pares comparativos
6. ¿Qué compró ella? — O que ela comprou?
IPA: /ke komˈpɾo ˈeʎa/ · PT: [ke kompró élha]
7. ¿Qué pasó? — O que aconteceu?
IPA: /ke paˈso/ · PT: [ke pasó]
8. ¿A quién conociste? — Quem você conheceu?
IPA: /a kjen konoˈθiste/ · PT: [a kién konothíste]
9. ¿Quién rompió la ventana? — Quem quebrou a janela?
IPA: /kjen romˈpjo la βenˈtana/ · PT: [kién rompió la bentána]
10. ¿Qué dijo él? — O que ele disse?
IPA: /ke ˈdixo el/ · PT: [ke dírro él]
11. ¿Qué te hizo llorar? — O que te fez chorar?
IPA: /ke te ˈiθo ʎoˈɾaɾ/ · PT: [ke te ítho lhorár]

Preguntas de sujeto comunes
12. ¿Quién viene a la fiesta? — Quem vai vir para a festa?
IPA: /kjen ˈbjene a la ˈfjesta/ · PT: [kién biéne a la fiésta]
13. ¿Quién vive aquí? — Quem mora aqui?
IPA: /kjen ˈbiβe aˈki/ · PT: [kién bíbe akí]
14. ¿Quién quiere café? — Quem quer café?
IPA: /kjen ˈkjeɾe kaˈfe/ · PT: [kién kiére kafé]
15. ¿Qué le pasó a tu coche? — O que aconteceu com seu carro?
IPA: /ke le paˈso a tu ˈkotʃe/ · PT: [ke le pasó a tu kótche]
16. ¿Qué huele tan bien? — O que está com um cheiro tão bom?
IPA: /ke ˈwele tan bjen/ · PT: [ke uéle tan bién]
17. ¿Qué equipo ganó? — Qual time ganhou?
IPA: /ke eˈkipo ɣaˈno/ · PT: [ke ekípo ganó]
18. ¿Cuántas personas vinieron? — Quantas pessoas vieram?
IPA: /ˈkwantas peɾˈsonas biˈnjeɾon/ · PT: [kuántas persónas biniéron]

Más pares (comparación directa)
19. ¿A quién invitaron? — Quem eles convidaram?
IPA: /a kjen imbiˈtaɾon/ · PT: [a kién imbitáron]
20. ¿Quién los invitó? — Quem os convidou?
IPA: /kjen los imbiˈto/ · PT: [kién los imbitó]
21. ¿Qué dañó la tormenta? — O que a tempestade danificou?
IPA: /ke daˈɲo la toɾˈmenta/ · PT: [ke danhó la torménta]
22. ¿Qué causó el daño? — O que causou o dano?
IPA: /ke kawˈso el ˈdaɲo/ · PT: [ke kausó el dánho]
23. ¿A quién pediste ayuda? — Você pediu ayuda a quem?
IPA: /a kjen peˈðiste aˈʝuða/ · PT: [a kién pedíste aiúda]
24. ¿Quién pidió ayuda? — Quem pidió ayuda?
IPA: /kjen piˈðjo aˈʝuða/ · PT: [kién pidió aiúda]
25. Recuerda: pregunta de sujeto = la palabra interrogativa reemplaza al sujeto. — Lembre-se: pregunta de sujeto = a palabra interrogativa substitui o sujeto.
IPA: /reˈkweɾða pɾeˈɣunta de suˈxeto la paˈlaβɾa interoɣaˈtiβa reemˈplaθa al suˈxeto/ · PT: [rekuérda pregúnta de surréto la palábra interrogatíba reemplátha al surréto]

En el teléfono
26. ¿Quién llama, por favor? — Quem está ligando, por favor?
IPA: /kjen ˈʎama poɾ faˈβoɾ/ · PT: [kién lháma por fabór]
27. ¿Quién llamó mientras estaba fuera? — Quem ligou enquanto eu estava fora?
IPA: /kjen ʎaˈmo ˈmjentɾas esˈtaβa ˈfweɾa/ · PT: [kién lhamó miéntras estába fuéra]
28. ¿Con quién hablaste por teléfono? — Com quem você falou no telefone?
IPA: /kon kjen aˈβlaste poɾ teˈlefono/ · PT: [kon kién abláste por teléfano]

En casa / tareas domésticas
29. ¿Quién rompió este vaso? — Quem quebrou esse copo?
IPA: /kjen romˈpjo ˈeste ˈβaso/ · PT: [kién rompió éste báso]
30. ¿Quién dejó la puerta abierta? — Quem deixou a porta abierta?
IPA: /kjen deˈxo la ˈpweɾta aˈβjeɾta/ · PT: [kién derró la puérta abiérta]
31. ¿Qué hizo este desastre? — O que fez essa bagunça?
IPA: /ke ˈiθo ˈeste deˈsastɾe/ · PT: [ke ítho éste desástre]
32. ¿Quién va a lavar los platos esta noche? — Quem vai lavar a louça hoje à noite?
IPA: /kjen ba a laˈβaɾ los ˈplatos ˈesta ˈnotʃe/ · PT: [kién ba a labár los plátos ésta nótche]

En el trabajo
33. ¿Quién terminó el informe? — Quem terminou o relatório?
IPA: /kjen teɾmiˈno el imˈfoɾme/ · PT: [kién terminó el imfórme]
34. ¿Qué causó el retraso? — O que causou o atraso?
IPA: /ke kawˈso el reˈtɾaso/ · PT: [ke kausó el retráso]
35. ¿Quién presenta primero? — Quem vai apresentar primeiro?
IPA: /kjen pɾeˈsenta pɾiˈmeɾo/ · PT: [kién presénta priméro]

En el supermercado
36. ¿Quién quiere ir a la tienda? — Quem quer ir ao mercado?
IPA: /kjen ˈkjeɾe iɾ a la ˈtjenda/ · PT: [kién kiére ir a la tiénda]
37. ¿Qué está en oferta hoy? — O que está em promoção hoje?
IPA: /ke esˈta en oˈfeɾta oi/ · PT: [ke está en oférta ôi]

Saliendo con amigos
38. ¿Quién viene esta noche? — Quem vai vir hoje à noite?
IPA: /kjen ˈbjene ˈesta ˈnotʃe/ · PT: [kién biéne ésta nótche]
39. ¿Quién sugirió este restaurante? — Quem sugeriu esse restaurante?
IPA: /kjen suxiˈɾjo ˈeste restawˈɾante/ · PT: [kién surririó éste restauránte]
40. ¿A qué hora les viene bien a todos? — Que horário funciona para todos?
IPA: /a ke ˈoɾa les ˈbjene bjen a ˈtoðos/ · PT: [a ke óra les biéne bién a tódos]

Noticias / clima
41. ¿Qué causó la tormenta? — O que causou a tempestade?
IPA: /ke kawˈso la toɾˈmenta/ · PT: [ke kausó la torménta]
42. ¿Qué pasó en las noticias? — O que aconteceu no noticiário?
IPA: /ke paˈso en las noˈtiθjas/ · PT: [ke pasó en las notíthias]

En la escuela
43. ¿Quién sacó la nota más alta? — Quem tirou a nota más alta?
IPA: /kjen saˈko la ˈnota mas ˈalta/ · PT: [kién sakó la nóta mas álta]
44. ¿Quién olvidó sus deberes? — Quem esqueceu o dever de casa?
IPA: /kjen olβiˈðo sus deˈβeɾes/ · PT: [kién olbidó sus debéres]

Viajando
45. ¿Quién viaja contigo? — Quem está viajando com você?
IPA: /kjen ˈbjaxa konˈtiɣo/ · PT: [kién biárra kontígo]
46. ¿Qué causó el retraso del vuelo? — O que causou o atraso do voo?
IPA: /ke kawˈso el reˈtɾaso del ˈβwelo/ · PT: [ke kausó el retráso del buélo]

Burocracia
47. ¿Quién firmó este documento? — Quem assinou este documento?
IPA: /kjen fiɾˈmo ˈeste dokuˈmento/ · PT: [kién firmó éste dokuménto]
48. ¿Qué requiere una firma? — O que requer assinatura?
IPA: /ke reˈkjeɾe ˈuna ˈfiɾma/ · PT: [ke rekiére úna fírma]

Consolidación
49. ¿Quién ganó el partido? — Quem ganhou o jogo?
IPA: /kjen ɣaˈno el paɾˈtiðo/ · PT: [kién ganó el partído]
50. ¿Qué te sorprendió más? — O que mais te surpreendeu?
IPA: /ke te soɾpɾenˈdjo mas/ · PT: [ke te sorprendió mas]

51. ¿Quién hizo eso? — Quem fez isso?
IPA: /kjen ˈiθo ˈeso/ · PT: [kién ítho éso]
52. ¿Qué pasó? — O que aconteceu?
IPA: /ke paˈso/ · PT: [ke pasó]
53. ¿Quién está ahí? — Quem está aí?
IPA: /kjen esˈta aˈi/ · PT: [kién está aí]
54. ¿Quién llamó? — Quem ligou?
IPA: /kjen ʎaˈmo/ · PT: [kién lhamó]

Un poco más
55. ¿Quién se llevó mi bolígrafo? — Quem pegou minha caneta?
IPA: /kjen se ʎeˈβo mi boˈliɣɾafo/ · PT: [kién se lhebó mi bolígrafo]
56. ¿Qué hizo ese ruido? — O que fez esse barulho?
IPA: /ke ˈiθo ˈese ˈrwiðo/ · PT: [ke ítho ése ruído]
57. ¿Quién llama a la puerta? — Quem está batendo na porta?
IPA: /kjen ˈʎama a la ˈpweɾta/ · PT: [kién lháma a la puérta]
58. ¿Qué te molesta? — O que está te incomodando?
IPA: /ke te moˈlesta/ · PT: [ke te molésta]

Preguntas con negación
59. ¿Quién no vino a la reunión? — Quem não veio à reunião?
IPA: /kjen no ˈbino a la reuˈnjon/ · PT: [kién no bíno a la reunión]
60. ¿Quién no está listo todavía? — Quem ainda não está pronto?
IPA: /kjen no esˈta ˈlisto toðaˈβia/ · PT: [kién no está lísto todabía]
61. ¿Qué no tiene sentido para ti? — O que não faz sentido para você?
IPA: /ke no ˈtjene senˈtiðo ˈpaɾa ti/ · PT: [ke no tiéne sentído pára ti]
62. ¿Quién no ha terminado el examen todavía? — Quem ainda não terminó a prova?
IPA: /kjen no a teɾmiˈnaðo el eɣˈsamen toðaˈβia/ · PT: [kién no a terminádo el eksámen todabía]

Conectores y tiempos verbales
63. ¿Quién llamó mientras yo dormía? — Quem ligou enquanto eu estava dormindo?
IPA: /kjen ʎaˈmo ˈmjentɾas ʝo doɾˈmia/ · PT: [kién lhamó miéntras io dormía]
64. ¿Qué pasó después de que te fuiste? — O que aconteceu depois que você saiu?
IPA: /ke paˈso desˈpwes de ke te ˈfwiste/ · PT: [ke pasó despuées de ke te fuíste]
65. ¿Quién nos estará ayudando mañana? — Quem vai estar nos ajudando amanhã?
IPA: /kjen nos estaˈɾa aʝuˈðando maˈɲana/ · PT: [kién nos estará aiudándo manhána]
66. ¿Quién se había ido ya cuando llegaste? — Quem já tinha ido quando você chegou?
IPA: /kjen se aˈβia ˈiðo ʝa ˈkwando ʎeˈɣaste/ · PT: [kién se abía ído ia kuándo lhegáste]
67. ¿Qué pasaría si nadie apareciera? — O que aconteceria se ninguém aparecesse?
IPA: /ke pasaˈɾia si ˈnaðje apaɾeˈθjeɾa/ · PT: [ke pasaría si nádie aparethiéra]

Las más ricas
68. ¿Quién te dijo eso, y por qué no me lo dijeron a mí también? — Quem te contou isso, e por que não me contaram também?
IPA: /kjen te ˈdixo ˈeso i poɾ ke no me lo diˈxeɾon a mi tamˈbjen/ · PT: [kién te dírro éso i por ké no me lo dirréron a mi también]
69. ¿Qué causó el accidente y quién fue responsable? — O que causou o acidente, e quem foi responsável?
IPA: /ke kawˈso el akθiˈðente i kjen fwe responsaˈβle/ · PT: [ke kausó el akthidénte i kién fué responsáble]
70. ¿Quién habría imaginado que esto pasaría? — Quem imaginaria que isso ia acontecer?
IPA: /kjen aˈβɾia imaxiˈnaðo ke ˈesto pasaˈɾia/ · PT: [kién abría imarrinádo ke ésto pasaría]
71. ¿Qué te impide solicitar el trabajo, si estás tan cualificado? — O que está te impedindo de se candidatar ao emprego, se você é tão qualificado?
IPA: /ke te imˈpiðe soliθiˈtaɾ el tɾaˈβaxo si esˈtas tan kwaliˈfikaðo/ · PT: [ke te impíde solithitár el trabárro si estás tan kualifikádo]
72. ¿Quién ha estado usando mi ordenador mientras estaba fuera? — Quem tem usado meu computador enquanto eu estava fora?
IPA: /kjen a esˈtaðo uˈsando mi oɾðenaˈðoɾ ˈmjentɾas esˈtaβa ˈfweɾa/ · PT: [kién a estádo usándo mi ordenador miéntras estába fuéra]
73. ¿Qué te hizo cambiar de opinión sobre el viaje, ya que parecías tan emocionado antes? — O que mudou sua opinión sobre a viagem, já que você parecia tão animado antes?
IPA: /ke te ˈiθo kamˈbjaɾ de opiˈnjon ˈsoβɾe el ˈbjaxe ʝa ke paɾeˈθias tan emoθjoˈnaðo ˈantes/ · PT: [ke te ítho kambiár de opinión sóbre el biárre ia ke parethías tan emothionádo ántes]
74. ¿Quién le va a explicar lo que pasó al gerente? — Quem vai explicar o que aconteceu para o gerente?
IPA: /kjen le ba a ekspliˈkaɾ lo ke paˈso al xeˈɾente/ · PT: [kién le ba a eksplikár lo ke pasó al rrerénte]
75. ¿Qué habría pasado si nadie hubiera notado el error? — O que teria acontecido se ninguém tivesse percebido o erro?
IPA: /ke aˈβɾia paˈsaðo si ˈnaðje uˈβjeɾa noˈtaðo el eˈror/ · PT: [ke abría pasádo si nádie ubiéra notádo el errór]


¿Quién te llamó? / Peter. — Quem te ligou? / O Peter.
IPA: /kjen te ʎaˈmo · ˈpiteɾ/ · PT: [kién te lhamó · píter]
¿Quién rompió el jarrón? / No lo sé. — Quem quebrou o vaso? / Eu não sei.
IPA: /kjen romˈpjo el xaˈron · no lo se/ · PT: [kién rompió el rrarrón · no lo sé]
¿Qué pasó aquí? / Estalló una tubería. — O que aconteceu aqui? / Um cano estourou.
IPA: /ke paˈso aˈki · estaˈʎo ˈuna tuβeˈɾia/ · PT: [ke pasó akí · estalhuó úna tubería]
¿Quién viene a cenar? / Solo la familia. — Quem vai vir jantar? / Só a família.
IPA: /kjen ˈbjene a θeˈnaɾ · ˈsolo la faˈmilja/ · PT: [kién biéne a thenár · sólo la família]
¿Quién dejó esto aquí? / No tengo ni idea. — Quem deixou isso aqui? / Não tenho ideia.
IPA: /kjen deˈxo ˈesto aˈki · no ˈteŋɡo ni iˈðea/ · PT: [kién derró ésto akí · no téngo ni idéa]
¿Qué huele tan bien? / Estoy horneando galletas. — O que está com um cheiro tão bom? / Estou assando biscoitos.
IPA: /ke ˈwele tan bjen · esˈtoi oɾneˈando ɣaˈʎetas/ · PT: [ke uéle tan bién · estói orneándo galhétas]
¿Quién llama a la puerta? / Es el cartero. — Quem está batendo? / É o carteiro.
IPA: /kjen ˈʎama a la ˈpweɾta · es el kaɾˈteɾo/ · PT: [kién lháma a la puérta · és el kartéro]
¿Quién ganó el partido? / Nuestro equipo. — Quem ganhou a partida? / Nosso time.
IPA: /kjen ɣaˈno el paɾˈtiðo · ˈnwestɾo eˈkipo/ · PT: [kién ganó el partído · nuéstro ekípo]
¿Qué te hizo llegar tarde? / El tráfico. — O que te atrasou? / O trânsito.
IPA: /ke te ˈiθo ʎeˈɣaɾ ˈtaɾðe · el ˈtɾafiko/ · PT: [ke te ítho lhegár tárde · el tráfiko]
¿Quién firmó el paquete? / Mi vecino. — Quem assinou pelo pacote? / Meu vizinho.
IPA: /kjen fiɾˈmo el paˈkete · mi βeˈθino/ · PT: [kién firmó el pakéte · mi bethíno]
¿Qué causó el retraso? / El mal tiempo. — O que causou o atraso? / Mau tempo.
IPA: /ke kawˈso el reˈtɾaso · el mal ˈtjempo/ · PT: [ke kausó el retráso · el mal tiémpo]
¿Quién conduce esta noche? / Yo. — Quem vai dirigir hoje à noite? / Eu.
IPA: /kjen konˈduθe ˈesta ˈnotʃe · ʝo/ · PT: [kién kondúthe ésta nótche · io]
¿Quién te dijo eso? / Un amigo mío. — Quem te contou isso? / Um amigo meu.
IPA: /kjen te ˈdixo ˈeso · un aˈmiɣo ˈmio/ · PT: [kién te dírro éso · un amígo mío]
¿Qué hace ese sonido? / La nevera, creo. — O que está fazendo esse som? / A geladeira, eu acho.
IPA: /ke ˈaθe ˈese soˈniðo · la neˈβeɾa ˈkɾeo/ · PT: [ke áthe ése sonído · la nebéra kréo]
¿Quién te ayuda con la mudanza? / Mis hermanos. — Quem vai te ajudar na mudança? / Meus irmãos.
IPA: /kjen te aˈʝuða kon la muˈðanθa · mis eɾˈmanos/ · PT: [kién te aiúda kon la mudántha · mis ermános]
¿Qué le pasó a tu brazo? / Me caí ayer. — O que aconteceu com seu braço? / Eu caí ontem.
IPA: /ke le paˈso a tu ˈβɾaθo · me kaˈi aˈʝeɾ/ · PT: [ke le pasó a tu brátho · me kaí aiér]
¿Quién paga el almuerzo? / Vamos a medias. — Quem vai pagar o almoço? / Vamos dividir.
IPA: /kjen ˈpaɣa el alˈmweɾθo · ˈbamos a ˈmeðjas/ · PT: [kién pága el almuértho · bámos a médias]
¿Qué te despertó? / La alarma. — O que te acordou? / O alarme.
IPA: /ke te despeɾˈto · la aˈlaɾma/ · PT: [ke te despertó · la alárma]
¿Quién está a cargo aquí? / El gerente. — Quem está no comando aqui? / O gerente.
IPA: /kjen esˈta a ˈkaɾɣo aˈki · el xeˈɾente/ · PT: [kién está a kárgo akí · el rrerénte]
¿Qué falta en la caja? / Dos cables. — O que está faltando na caixa? / Dois cabos.
IPA: /ke ˈfalta en la ˈkaxa · dos ˈkaβles/ · PT: [ke fálta en la kárra · dos kábles]
¿Quién va a recoger a los niños? / Yo iré. — Quem vai buscar as crianças? / Eu vou.
IPA: /kjen ba a rekoˈxeɾ a los ˈniɲos · ʝo iˈɾe/ · PT: [kién ba a rekogér a los nínhos · io iré]
¿Qué falló en la impresora? / Se quedó sin tinta. — O que deu errado com a impressora? / Acabou a tinta.
IPA: /ke faˈʎo en la impɾeˈsoɾa · se keˈðo sin ˈtinta/ · PT: [ke falhó en la impresóra · se kedó sin tínta]
¿Quién organiza el viaje? / Sarah. — Quem está organizando a viagem? / A Sarah.
IPA: /kjen oɾɣaˈniθa el ˈbjaxe · ˈsaɾa/ · PT: [kién organítha el biárre · sára]
¿Qué te sorprendió? / Lo rápido que fue. — O que te surpreendeu? / A rapidez.
IPA: /ke te soɾpɾenˈdjo · lo ˈrapiðo ke fwe/ · PT: [ke te sorprendió · lo rápído ke fué]
¿Quién prepara la cena esta noche? / ¡Tú! — Quem vai cozinhar o jantar hoje? / Você!
IPA: /kjen pɾeˈpaɾa la ˈθena ˈesta ˈnotʃe · tu/ · PT: [kién prepára la théna ésta nótche · tu]
`;

const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

const deck = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Ignore section headers which don't have dashes or IPA
  if (!line.includes('—') && !line.includes('IPA:')) continue;
  
  if (line.includes('—')) {
    let wordLine = line;
    // Remove leading numbers like "6. " or "10. "
    wordLine = wordLine.replace(/^\d+\.\s*/, '');
    
    let [wordPart, translationPart] = wordLine.split('—').map(s => s.trim());
    if (!wordPart || !translationPart) continue;

    const nextLine = lines[i + 1] || '';
    let pronunciation = '';
    let portuguesePhonetic = '';
    
    if (nextLine.startsWith('IPA:')) {
      const parts = nextLine.split('· PT:');
      pronunciation = parts[0].replace('IPA:', '').trim();
      if (parts[1]) {
        portuguesePhonetic = parts[1].trim();
      }
      i++; // Skip the next line as it's processed
    }
    
    const syllables = wordPart.split(/\s+/).map(s => s.trim()).filter(Boolean);

    deck.push({
      id: `leccion_2_gramatica_a2_s_id_${Math.random().toString(36).substr(2, 7)}`,
      word: wordPart,
      translation: translationPart,
      syllables: syllables,
      exampleSentence: "",
      exampleTranslation: "",
      pronunciation: pronunciation,
      portuguesePhonetic: portuguesePhonetic
    });
  }
}

fs.writeFileSync('public/decks/leccion_2_gramatica_a2_s_es.json', JSON.stringify(deck, null, 2));
console.log(`Created leccion_2_gramatica_a2_s_es.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}
metadata['leccion_2_gramatica_a2_s'] = {
  cardCount: deck.length,
  es: deck.length
};
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
