const fs = require('fs');

const rawText = `lunes — segunda-feira
IPA: /ˈlunes/ · PT: [lúnes]
martes — terça-feira
IPA: /ˈmaɾtes/ · PT: [mártes]
miércoles — quarta-feira
IPA: /ˈmjeɾkoles/ · PT: [miérkoles]
jueves — quinta-feira
IPA: /ˈxweβes/ · PT: [rruébes]
viernes — sexta-feira
IPA: /ˈbjeɾnes/ · PT: [biérnes]
sábado — sábado
IPA: /ˈsaβaðo/ · PT: [sábado]
domingo — domingo
IPA: /doˈmiŋɡo/ · PT: [domíngo]

Os meses do ano
8. enero — janeiro
IPA: /eˈneɾo/ · PT: [enéro]
9. febrero — fevereiro
IPA: /feˈβɾeɾo/ · PT: [febréro]
10. marzo — março
IPA: /ˈmaɾθo/ · PT: [márzo]
11. abril — abril
IPA: /aˈβɾil/ · PT: [abríl]
12. mayo — maio
IPA: /ˈmaʝo/ · PT: [máio]
13. junio — junio
IPA: /ˈxunjo/ · PT: [rrúnio]
14. julio — julho
IPA: /ˈxuljo/ · PT: [rrúlio]
15. agosto — agosto
IPA: /aˈɣosto/ · PT: [agósto]
16. septiembre — setembro
IPA: /sepˈtjembɾe/ · PT: [septiémbre]
17. octubre — outubro
IPA: /okˈtuβɾe/ · PT: [oktúbre]
18. noviembre — novembro
IPA: /noˈβjembɾe/ · PT: [nobiémbre]
19. diciembre — dezembro
IPA: /diˈθjembɾe/ · PT: [dithiémbre]

As quatro estações
20. el invierno — o inverno
IPA: /el imˈbjeɾno/ · PT: [el imbiérno]
21. la primavera — a primavera
IPA: /la pɾimaˈβeɾa/ · PT: [la primabéra]
22. el verano — o verão
IPA: /el beˈɾano/ · PT: [el beráno]
23. el otoño — o outono
IPA: /el oˈtoɲo/ · PT: [el otónho]

Palavras úteis de tempo
24. el fin de semana — o fim de semana
IPA: /el fin de seˈmana/ · PT: [el fín de semána]
25. hoy — hoje
IPA: /oi/ · PT: [ôi]

26. Trabajo el lunes. — Eu trabalho na segunda.
IPA: /tɾaˈβaxo el ˈlunes/ · PT: [trabárro el lúnes]
27. Tengo una reunión el martes. — Eu tengo uma reunião na terça.
IPA: /ˈteŋɡo una reuˈnjon el ˈmaɾtes/ · PT: [téngo úna reunión el mártes]
28. Descansamos el domingo. — Nós descansamos no domingo.
IPA: /deskanˈsamos el doˈmiŋɡo/ · PT: [deskansámos el domíngo]
29. La fiesta es el sábado. — A festa é no sábado.
IPA: /la ˈfjesta es el ˈsaβaðo/ · PT: [la fiésta és el sábado]
30. Nos vemos el viernes. — Te vejo na sexta.
IPA: /nos ˈbemos el ˈbjeɾnes/ · PT: [nos bémos el biérnes]

Marcando datas
31. Mi cumpleaños es en mayo. — Meu aniversário é em maio.
IPA: /mi kumpleˈaɲos es en ˈmaʝo/ · PT: [mi kumpleánhos és en máio]
32. El curso empieza en septiembre. — O curso começa em setembro.
IPA: /el ˈkuɾso emˈpjeθa en sepˈtjembɾe/ · PT: [el kúrso empiétha en septiémbre]
33. Viajamos en julio. — Nós viajamos em julho.
IPA: /bjaˈxamos en ˈxuljo/ · PT: [biarrámos en rrúlio]
34. La cita es el 5 de marzo. — A consulta é no dia 5 de março.
IPA: /la ˈθita es el ˈθiŋko de ˈmaɾθo/ · PT: [la thíta és el thínko de márzo]

Clima e estações
35. Hace frío en invierno. — Faz frio no inverno.
IPA: /ˈaθe ˈfɾio en imˈbjeɾno/ · PT: [áthe frío en imbiérno]
36. Las flores florecen en primavera. — As flores florescem na primavera.
IPA: /las ˈfloɾes floˈɾeθen en pɾimaˈβeɾa/ · PT: [las flóres floréthen en primabéra]
37. Vamos a la playa en verano. — Nós vamos à praia no verão.
IPA: /ˈbamos a la ˈplaʝa en beˈɾano/ · PT: [bámos a la pláia en beráno]
38. Las hojas caen en otoño. — As folhas caem no outono.
IPA: /las ˈoxas ˈkaen en oˈtoɲo/ · PT: [las órras káen en otónho]

Fim de semana e planos
39. ¿Qué haces este fin de semana? — O que você vai fazer neste fim de semana?
IPA: /ke ˈaθes ˈeste fin de seˈmana/ · PT: [ke áthes éste fín de semána]
40. Quedamos la semana que viene. — Vamos nos encontrar na semana que vem.
IPA: /keˈðamos la seˈmana ke ˈbjene/ · PT: [kedámos la semána ke biéne]
41. Estoy libre el jueves. — Eu estou livre na quinta.
IPA: /esˈtoi ˈliβɾe el ˈxweβes/ · PT: [estôi líbre el rruébes]

Feriados e eventos
42. La Navidad es en diciembre. — O Natal é em dezembro.
IPA: /la naβiˈðað es en diˈθjembɾe/ · PT: [la nabidád és en dithiémbre]
43. El año nuevo empieza en enero. — O ano novo começa em janeiro.
IPA: /el ˈaɲo ˈnweβo emˈpjeθa en eˈneɾo/ · PT: [el ánho nuébo empiétha en enéro]
44. El colegio termina en junio. — A escola termina em junho.
IPA: /el koˈlexjo teɾˈmina en ˈxunjo/ · PT: [el kolérrio termína en rrúnio]

Hoje, amanhã, ontem
45. Hoy es miércoles. — Hoje é quarta-feira.
IPA: /oi es ˈmjeɾkoles/ · PT: [ôi és miérkoles]
46. Mañana es viernes. — Amanhã é sexta.
IPA: /maˈɲana es ˈbjeɾnes/ · PT: [manhána és biérnes]
47. Ayer fue lunes. — Ontem foi segunda.
IPA: /aˈʝeɾ fwe ˈlunes/ · PT: [aiér fué lúnes]

Combinando
48. Tengo clases los martes y jueves. — Eu tenho aulas na terça e na quinta.
IPA: /ˈteŋɡo ˈklases los ˈmaɾtes i ˈxweβes/ · PT: [téngo kláses los mártes i rruébes]
49. La tienda cierra los domingos. — A loja fecha aos domingos.
IPA: /la ˈtjenda ˈθjera los doˈmiŋɡos/ · PT: [la tiénda thiérra los domíngos]
50. El verano es mi estación favorita. — O verão é minha estação favorita.
IPA: /el beˈɾano es mi estaˈθjon faβoˈɾita/ · PT: [el beráno és mi estathión faboríta]

51. Hoy es lunes. — Hoje é segunda.
IPA: /oi es ˈlunes/ · PT: [ôi és lúnes]
52. Me gusta el verano. — Eu gosto do verão.
IPA: /me ˈɡusta el beˈɾano/ · PT: [me gústa el beráno]
53. Mi cumpleaños es en abril. — Meu aniversário é em abril.
IPA: /mi kumpleˈaɲos es en aˈβɾil/ · PT: [mi kumpleánhos és en abríl]
54. Descansamos los fines de semana. — Nós descansamos nos fins de semana.
IPA: /deskanˈsamos los ˈfines de seˈmana/ · PT: [deskansámos los fínes de semána]

Um poco mais
55. El fin de semana empieza el sábado. — O fim de semana começa no sábado.
IPA: /el fin de seˈmana emˈpjeθa el ˈsaβaðo/ · PT: [el fín de semána empiétha el sábado]
56. El invierno es más frío que el otoño. — O inverno é mais frio que o outono.
IPA: /el imˈbjeɾno es mas ˈfɾio ke el oˈtoɲo/ · PT: [el imbiérno és mas frío ke el otónho]
57. ¿Qué día es hoy? — Que dia é hoje?
IPA: /ke ˈdia es oi/ · PT: [ke día és ôi]
58. No trabajo los viernes. — Eu não trabalho às sextas.
IPA: /no tɾaˈβaxo los ˈbjeɾnes/ · PT: [no trabárro los biérnes]

Perguntas e negações
59. ¿Cuándo es tu cumpleaños? — Quando é seu aniversário?
IPA: /ˈkwando es tu kumpleˈaɲos/ · PT: [kuándo és tu kumpleánhos]
60. ¿El curso empieza en septiembre? — O curso começa em setembro?
IPA: /el ˈkuɾso emˈpjeθa en sepˈtjembɾe/ · PT: [el kúrso empiétha en septiémbre]
61. Todavía no es verano. — Ainda não é verão.
IPA: /toðaˈβia no es beˈɾano/ · PT: [todabía no és beráno]
62. ¿Por qué te gusta la primavera? — Por que você gosta da primavera?
IPA: /poɾ ke te ˈɡusta la pɾimaˈβeɾa/ · PT: [por ké te gústa la primabéra]

Conectores e tempos verbais
63. Me encanta el verano porque hace calor. — Eu amo o verão porque é quente.
IPA: /me eŋˈkanta el beˈɾano ˈpoɾke ˈaθe kaˈloɾ/ · PT: [me enkánta el beráno pórke áthe kalór]
64. Vamos a viajar en agosto. — Nós vamos viajar em agosto.
IPA: /ˈbamos a bjaˈxaɾ en aˈɣosto/ · PT: [bámos a biarrár en agósto]
65. Nevó el invierno pasado. — Nevou no inverno passado.
IPA: /neˈβo el imˈbjeɾno paˈsaðo/ · PT: [nebó el imbiérno pasádo]
66. Nací en octubre. — Eu nasci em outubro.
IPA: /naˈθi en okˈtuβɾe/ · PT: [nathí en oktúbre]
67. Cuando llega la primavera, los días se hacen más largos. — Quando a primavera chega, os dias ficam mais longos.
IPA: /ˈkwando ˈʎeɣa la pɾimaˈβeɾa los ˈdias se ˈaθen mas ˈlaɾɣos/ · PT: [kuándo lhéga la primabéra los días se áthen mas lárgos]

As mais ricas
68. Mi mes favorito es diciembre por la Navidad. — Meu mês favorito é dezembro por causa do Natal.
IPA: /mi mes faβoˈɾito es diˈθjembɾe poɾ la naβiˈðað/ · PT: [mi més faboríto és dithiémbre por la nabidád]
69. Normalmente vamos de vacaciones en julio, pero este año iremos en agosto. — Geralmente viajamos em julho, mas este ano vamos em agosto.
IPA: /noɾˈmalmente ˈbamos de bakaˈθjones en ˈxuljo ˈpeɾo ˈeste ˈaɲo iˈɾemos en aˈɣosto/ · PT: [normalménte bámos de bakathiónes en rrúlio péro éste ánho irémos en agósto]
70. Aunque es primavera, todavía hace frío. — Embora seja primavera, o tempo ainda está frio.
IPA: /ˈawŋke es pɾimaˈβeɾa toðaˈβia ˈaθe ˈfɾio/ · PT: [áunke és primabéra todabía áthe frío]
71. La reunión era el lunes, pero ahora es el miércoles. — A reunião era na segunda, mas agora é na quarta.
IPA: /la reuˈnjon ˈeɾa el ˈlunes ˈpeɾo aˈoɾa es el ˈmjeɾkoles/ · PT: [la reunión éra el lúnes péro aóra és el miérkoles]
72. No me gusta el invierno porque los días son cortos y oscuros. — Eu não gosto do inverno porque os dias são curtos e escuros.
IPA: /no me ˈɡusta el imˈbjeɾno ˈpoɾke los ˈdias son ˈkoɾtos i osˈkuɾos/ · PT: [no me gústa el imbiérno pórke los días son kórtos i oskúros]
73. ¿Sabes qué meses tienen treinta y un días? — Você sabe quais meses têm trinta e um dias?
IPA: /ˈsaβes ke ˈmeses ˈtjenen ˈtɾeinta i un ˈdias/ · PT: [sábes ke méses tiénen tréinta i un días]
74. Nos conocimos en el verano de 2019 y nos casamos en primavera. — Nós nos conhecemos no verão de 2019 e nos casamos na primavera.
IPA: /nos konoˈθimos en el beˈɾano de ... i nos kaˈsamos en pɾimaˈβeɾa/ · PT: [nos konothímos en el beráno de ... i nos kasámos en primabéra]
75. El colegio empieza en septiembre y termina en junio. — A escola começa em setembro e termina en junio.
IPA: /el koˈlexjo emˈpjeθa en sepˈtjembɾe i teɾˈmina en ˈxunjo/ · PT: [el kolérrio empiétha en septiémbre i termína en rrúnio]

«¿Qué día es hoy?» / «Es martes.» — "Que dia é hoje?" / "É terça."
IPA: /ke ˈdia es oi · es ˈmaɾtes/ · PT: [ke día és ôi · és mártes]
«¿Cuándo es tu cumpleaños?» / «En mayo.» — "Quando é seu aniversário?" / "Em maio."
IPA: /ˈkwando es tu kumpleˈaɲos · en ˈmaʝo/ · PT: [kuándo és tu kumpleánhos · en máio]
«¿Cuál es tu estación favorita?» / «El verano.» — "Qual é sua estação favorita?" / "O verão."
IPA: /kwal es tu estaˈθjon faβoˈɾita · el beˈɾano/ · PT: [kuál és tu estathión faboríta · el beráno]
«¿Trabajas los sábados?» / «No, no trabajo.» — "Você trabalha aos sábados?" / "Não, não trabalho."
IPA: /tɾaˈβaxas los ˈsaβaðos · no no tɾaˈβaxo/ · PT: [trabárras los sábados · no no trabárro]
«¿Cuándo empieza el curso?» / «En septiembre.» — "Quando o curso começa?" / "Em setembro."
IPA: /ˈkwando emˈpjeθa el ˈkuɾso · en sepˈtjembɾe/ · PT: [kuándo empiétha el kúrso · en septiémbre]
«¿La fiesta es el viernes?» / «No, el sábado.» — "A festa é na sexta?" / "Não, no sábado."
IPA: /la ˈfjesta es el ˈbjeɾnes · no el ˈsaβaðo/ · PT: [la fiésta és el biérnes · no el sábado]
«¿En qué mes estamos?» / «Estamos en marzo.» — "Em que mês estamos?" / "Estamos em março."
IPA: /en ke mes esˈtamos · esˈtamos en ˈmaɾθo/ · PT: [en ke més estámos · estámos en márzo]
«¿Te gusta el invierno?» / «No, hace mucho frío.» — "Você gosta do inverno?" / "Não, faz muito frio."
IPA: /te ˈɡusta el imˈbjeɾno · no ˈaθe ˈmutʃo ˈfɾio/ · PT: [te gústa el imbiérno · no áthe mútcho frío]
«¿Cuándo viajamos?» / «En julio.» — "Quando viajamos?" / "Em julho."
IPA: /ˈkwando bjaˈxamos · en ˈxuljo/ · PT: [kuándo biarrámos · en rrúlio]
«¿Hoy es miércoles?» / «No, es jueves.» — "Hoje é quarta?" / "Não, é quinta."
IPA: /oi es ˈmjeɾkoles · no es ˈxweβes/ · PT: [ôi és miérkoles · no és rruébes]
«¿Qué planes tienes para el fin de semana?» / «Voy a descansar.» — "Quais são seus planos pro fim de semana?" / "Vou descansar."
IPA: /ke ˈplanes ˈtjenes ˈpaɾa el fin de seˈmana · boi a deskanˈsaɾ/ · PT: [ke plánes tiénes pára el fín de semána · bôi a deskansár]
«¿Cuándo es la Navidad?» / «En diciembre.» — "Quando é o Natal?" / "Em dezembro."
IPA: /ˈkwando es la naβiˈðað · en diˈθjembɾe/ · PT: [kuándo és la nabidád · en dithiémbre]
«¿Estás libre el lunes?» / «Sí, lo estoy.» — "Você está livre na segunda?" / "Sim, estou."
IPA: /esˈtas ˈliβɾe el ˈlunes · si lo esˈtoi/ · PT: [estás líbre el lúnes · sí lo estôi]
«¿Qué estación prefieres?» / «La primavera.» — "Que estação você prefere?" / "A primavera."
IPA: /ke estaˈθjon pɾeˈfjeɾes · la pɾimaˈβeɾa/ · PT: [ke estathión prefiéres · la primabéra]
«¿Ahora es verano en Brasil?» / «Sí, lo es.» — "É verão no Brasil agora?" / "Sim, é."
IPA: /aˈoɾa es beˈɾano en bɾaˈsil · si lo es/ · PT: [aóra és beráno en brasíl · sí lo és]
«¿A qué hora es la reunión del martes?» / «A las diez.» — "A que horas é a reunião de terça?" / "Às dez."
IPA: /a ke ˈoɾa es la reuˈnjon del ˈmaɾtes · a las djeθ/ · PT: [a ké óra és la reunión del mártes · a las diéth]
«¿Cuándo naciste?» / «En octubre.» — "Quando você nasceu?" / "Em outubro."
IPA: /ˈkwando naˈθiste · en okˈtuβɾe/ · PT: [kuándo nathíste · en oktúbre]
«¿Las flores florecen en primavera?» / «Sí, florecen.» — "As flores florescem na primavera?" / "Sim, florescem."
IPA: /las ˈfloɾes floˈɾeθen en pɾimaˈβeɾa · si floˈɾeθen/ · PT: [las flóres floréthen en primabéra · sí floréthen]
«¿La tienda abre los domingos?» / «No, está cerrada.» — "A loja abre aos domingos?" / "Não, fica fechada."
IPA: /la ˈtjenda ˈaβɾe los doˈmiŋɡos · no esˈta θeˈraða/ · PT: [la tiénda ábre los domíngos · no está therráda]
«¿Cuándo termina el colegio?» / «En junio.» — "Quando a escola termina?" / "Em junio."
IPA: /ˈkwando teɾˈmina el koˈlexjo · en ˈxunjo/ · PT: [kuándo termína el kolérrio · en rrúnio]
«¿Cuál es el primer mes del año?» / «Enero.» — "Qual é o primeiro mês do ano?" / "Janeiro."
IPA: /kwal es el pɾiˈmeɾ mes del ˈaɲo · eˈneɾo/ · PT: [kuál és el primér més del ánho · enéro]
«¿Prefieres el verano o el invierno?» / «El verano.» — "Você prefere verão ou inverno?" / "Verão."
IPA: /pɾeˈfjeɾes el beˈɾano o el imˈbjeɾno · el beˈɾano/ · PT: [prefiéres el beráno o el imbiérno · el beráno]
«¿Hace frío en otoño aquí?» / «Un poco.» — "O outono é frio aqui?" / "Um pouco."
IPA: /ˈaθe ˈfɾio en oˈtoɲo aˈki · un ˈpoko/ · PT: [áthe frío en otónho akí · un póko]
«¿Cuándo es el año nuevo?» / «El 1 de enero.» — "Quando é o ano novo?" / "No dia 1º de janeiro."
IPA: /ˈkwando es el ˈaɲo ˈnweβo · el ˈuno de eˈneɾo/ · PT: [kuándo és el ánho nuébo · el úno de enéro]
«¿Nos vemos la semana que viene?» / «Sí, el lunes.» — "Te vejo na semana que vem?" / "Sim, na segunda."
IPA: /nos ˈbemos la seˈmana ke ˈbjene · si el ˈlunes/ · PT: [nos bémos la semána ke biéne · sí el lúnes]`;

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
      id: `leccion_6_vocabulario_a1_s_es_card_${index++}`,
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

const fileDest = 'public/decks/leccion_6_vocabulario_a1_s_es.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['leccion_6_vocabulario_a1_s'] = meta['leccion_6_vocabulario_a1_s'] || {};
meta['leccion_6_vocabulario_a1_s']['es'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
