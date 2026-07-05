const fs = require('fs');

const raw = `Será un buen médico. — Ele vai ser um bom médico.
IPA: /seˈɾa un bwen ˈmeðiko/ · PT: [será un buén médiko]
Creo que ganarán este partido. — Eu acredito que eles vão ganhar essa partida.
IPA: /ˈkɾeo ke ɡanaˈɾan ˈeste paɾˈtiðo/ · PT: [kréo ke ganarán éste partído]


IR A — decisión instantánea
3. No tenemos azúcar. Voy a comprar un poco. — A gente não tem açúcar. Eu vou comprar.
IPA: /no teˈnemos aˈθukaɾ boi a komˈpɾaɾ un ˈpoko/ · PT: [no tenémos athúkar bôi a komprár un póko]

FUTURO SINTÉTICO — promessa e recusa
4. Te ayudaré, pero no te prestaré dinero. — Eu vou te ajudar, mas não vou te emprestar dinero.
IPA: /te aʝuˈðaɾe ˈpeɾo no te pɾestaˈɾe diˈneɾo/ · PT: [te aiudaré péro no te prestaré dinéro]

IR A — oferta
5. Voy a llevarte la bolsa. — Eu carrego sua bolsa.
IPA: /boi a ʎeˈβaɾte la ˈbolsa/ · PT: [bôi a lhebárte la bólsa]

PRESENTE — sugestão
6. ¿Comemos fuera hoy? — Vamos comer fora hoje?
IPA: /koˈmemos ˈfweɾa oi/ · PT: [komémos fuéra ôi]

IMPERATIVO/PRESENTE — pedido
7. ¿Puedes abrir la puerta, por favor? — Você abre a porta, por favor?
IPA: /ˈpweðes aˈβɾiɾ la ˈpweɾta poɾ faˈβoɾ/ · PT: [puédes abrír la puérta por fabór]

IR A — previsão con evidência
8. ¡Frena! ¡Vamos a tener un accidente! — Diminua! Nós vamos ter um acidente!
IPA: /ˈfɾena ˈbamos a teˈneɾ un aɣsiˈðente/ · PT: [fréna bámos a tenér un aksidénte]
9. Mira esas nubes. Va a llover. — Olha as nuvens. Vai chover.
IPA: /ˈmiɾa ˈesas ˈnuβes ba a ʎoˈβeɾ/ · PT: [míra ésas núbes ba a lhobér]

IR A — decisión já tomada
10. ¿Vas a ver el partido esta noche? — Você vai assistir ao jogo hoje à noite?
IPA: /bas a beɾ el paɾˈtiðo ˈesta ˈnotʃe/ · PT: [bas a ber el partído ésta nótche]

PRESENTE — eventos programados
11. El tren sale a las cuatro. — O trem sai às quatro horas.
IPA: /el tɾen ˈsale a las ˈkwatɾo/ · PT: [el trén sále a las kuátro]
12. Los exámenes empiezan la semana que viene. — As provas começam semana que vem.
IPA: /los eɣˈsamenes emˈpjeθan la seˈmana ke ˈbjene/ · PT: [los eksámenes empiéthan la semána ke biéne]

SUBJUNTIVO — oraciones de tiempo futuro
13. Me jubilaré cuando tenga 70 años. — Eu vou me aposentar quando fizer 70. (subjuntivo, não futuro!)
IPA: /me xuβilaˈɾe ˈkwando ˈteŋɡa seˈtenta ˈaɲos/ · PT: [me rrubilaré kuándo ténga seténta ánhos]
14. Llámame en cuanto llegues. — Me liga assim que você chegar.
IPA: /ˈʎamame en ˈkwanto ˈʎeɣes/ · PT: [lhámame en kuánto lhégues]

PRESENTE — planos combinados
15. Vuelo a Nueva York mañana por la mañana. — Eu vou voar para Nova York amanhã de manhã.
IPA: /ˈbwelo a ˈnweβa jɔːrk maˈɲana poɾ la maˈɲana/ · PT: [buélo a nuéba iórk manhána por la manhána]
16. Tengo hora con el dentista a las seis. — Eu tenho consulta con o dentista às seis.
IPA: /ˈteŋɡo ˈoɾa kon el denˈtista a las ˈsejs/ · PT: [téngo óra kon el dentísta a las séis]
17. Nos casamos la semana que viene. — Nós vamos nos casar semana que vem.
IPA: /nos kaˈsamos la seˈmana ke ˈbjene/ · PT: [nos kasámos la semána ke biéne]

PUEDE QUE / QUIZÁS — possibilidade
18. Puede que vaya a la fiesta mañana; no estoy seguro. — Talvez eu vá à festa amanhã; não tenho certeza.
IPA: /ˈpweðe ke ˈbaʝa a la ˈfjesta maˈɲana no esˈtoi seˈɣuɾo/ · PT: [puéde ke báia a la fiésta manhána no estôi segúro]
19. Las temperaturas quizás suban la semana que viene. — As temperaturas talvez subam semana que vem.
IPA: /las tempeɾaˈtuɾas kiˈθas ˈsuβan la seˈmana ke ˈbjene/ · PT: [las temperatúras kithás súban la semána ke biéne]

Consolidação
20. Te ayudará. — Ele vai te ajudar. (promessa espontânea)
IPA: /te aʝuˈðaɾa/ · PT: [te aiudará]
21. Te va a ayudar. — Ele vai te ajudar. (já planejado)
IPA: /te ba a aʝuˈðaɾ/ · PT: [te ba a aiudár]
22. La película empieza a las ocho. — O filme começa às oito. (programado)
IPA: /la peˈlikula emˈpjeθa a las ˈotʃo/ · PT: [la pelíkula empiétha a las ótcho]
23. Quedo con ella a las ocho. — Eu vou encontrá-la às oito. (combinado — presente!)
IPA: /ˈkeðo kon ˈeʎa a las ˈotʃo/ · PT: [kédo kon élha a las ótcho]
24. Puede que llueva más tarde. — Talvez chova mais tarde.
IPA: /ˈpweðe ke ˈʎweβa mas ˈtaɾðe/ · PT: [puéde ke lhuéba mas tárde]
25. En español, la mayoría de los planes futuros se dicen con presente o ir a. — Em espanhol, a maioria dos planos futuros se diz con presente ou ir a.
IPA: /en espaˈɲol la maʝoˈɾia de los ˈplanes fuˈtuɾos se ˈdiθen kon pɾeˈsente o iɾ a/ · PT: [en espánhol la maioría de los plánes futúros se díthen kon preSénte o ir a]


26. Voy a coger las llaves. — Eu vou pegar minhas chaves. (decisión na hora)
IPA: /boi a koˈxeɾ las ˈʎaβes/ · PT: [bôi a korrér las lhábes]
27. ¡Mira ese tráfico! Vamos a llegar tarde. — Olha esse trânsito! Vamos nos atrasar. (evidência)
IPA: /ˈmiɾa ˈese ˈtɾafiko ˈbamos a ʎeˈɣaɾ ˈtaɾðe/ · PT: [míra ése tráfiko bámos a lhegár tárde]
28. El autobús sale a las 8:15. — O ônibus sai às 8:15. (programado)
IPA: /el awtoˈβus ˈsale a las ˈotʃo i ˈkinθe/ · PT: [el autobús sále a las ótcho i kínthe]

No trabajo
29. Quedo con un cliente a las diez. — Eu vou encontrar un cliente às dez. (combinado)
IPA: /ˈkeðo kon un kliˈente a las djeθ/ · PT: [kédo kon un kliénte a las diéth]
30. Te mando el archivo ahora mismo. — Eu vou te mandar o archivo agora. (decisión instantânea)
IPA: /te ˈmando el aɾˈtʃiβo aˈoɾa ˈmizmo/ · PT: [te mándo el artchíbo aóra mízmo]
31. Puede que terminemos pronto hoy. — A gente talvez termine cedo hoje.
IPA: /ˈpweðe ke teɾmiˈnemos ˈpɾonto oi/ · PT: [puéde ke terminémos prónto ôi]

Viajando
32. Volamos a Roma el próximo viernes. — Nós vamos voar para Roma na próxima sexta. (combinado)
IPA: /boˈlamos a ˈroma el ˈpɾoɣsimo ˈbjeɾnes/ · PT: [bolámos a rróma el próksimo biérnes]
33. El vuelo sale a las dos de la tarde. — O voo sai às 14h. (programado)
IPA: /el ˈbwelo ˈsale a las dos de la ˈtaɾðe/ · PT: [el buélo sále a las dos de la tárde]
34. Mira esas nubes. El vuelo se va a retrasar. — Olha essas nuvens. O voo vai atrasar. (evidência)
IPA: /ˈmiɾa ˈesas ˈnuβes el ˈbwelo se ba a retɾaˈsaɾ/ · PT: [míra ésas núbes el buélo se ba a retrasár]

No médico
35. Tengo cita con el médico a las 3:30. — Eu tenho consulta con o médico às 3:30. (combinado)
IPA: /ˈteŋɡo ˈθita kon el ˈmeðiko a las tɾes i ˈmeðja/ · PT: [téngo thíta kon el médiko a las trés i médIa]
36. El médico cree que estarás bien. — O médico acha que você vai ficar bem. (previsão)
IPA: /el ˈmeðiko ˈkɾee ke estaˈɾas bjen/ · PT: [el médiko kréе ke estarás bién]

Saindo con amigos
37. Cenamos juntos el sábado. — A gente vai jantar junto no sábado. (combinado — presente)
IPA: /θeˈnamos ˈxuntos el ˈsaβaðo/ · PT: [thenámos rrúntos el sábado]
38. ¿Vamos al cine? — Vamos ao cinema? (sugestão)
IPA: /ˈbamos al ˈθine/ · PT: [bámos al thíne]
39. Puede que me una a vosotros más tarde. — Talvez eu me junte a vocês mais tarde.
IPA: /ˈpweðe ke me ˈuna a boˈsotɾos mas ˈtaɾðe/ · PT: [puéde ke me úna a bosótros mas tárde]

Tempo e clima
40. Mira el cielo. Va a haber tormenta. — Olha o céu. Vai fazer tempestade. (evidência)
IPA: /ˈmiɾa el ˈθjelo ba a aˈβeɾ toɾˈmenta/ · PT: [míra el thiélo ba a abér torménta]
41. Puede que nieve este fin de semana. — Talvez neve neste fin de semana.
IPA: /ˈpweðe ke ˈnjeβe ˈeste fin de seˈmana/ · PT: [puéde ke niébe éste fin de semána]

Compras
42. Me llevo este. — Eu vou levar este. (decisión na hora)
IPA: /me ˈʎeβo ˈeste/ · PT: [me lhébo éste]
43. ¿Vas a comprar el vestido azul? — Você vai comprar o vestido azul? (já decidiu)
IPA: /bas a komˈpɾaɾ el besˈtiðo aˈθul/ · PT: [bas a komprár el bestído athúl]

Na escola / estudando
44. El examen empieza a las nueve en punto. — A prova começa às nove em ponto. (programado)
IPA: /el eɣˈsamen emˈpjeθa a las ˈnweβe en ˈpunto/ · PT: [el eksámen empiétha a las nuébe en púnto]
45. Estudiaré más el próximo semestre. — Eu vou estudar mais no próximo semestre. (promessa)
IPA: /estuðjaˈɾe mas el ˈpɾoɣsimo seˈmestɾe/ · PT: [estudiaré mas el próksimo seméstre]

No aeroporto
46. ¿Me ayudas con las maletas, por favor? — Você me ajuda con as malas, por favor? (pedido)
IPA: /me aˈʝuðas kon las maˈletas poɾ faˈβoɾ/ · PT: [me aiúdas kon las malétas por fabór]
47. El avión va a aterrizar pronto. — O avião vai pousar logo. (evidência/anúncio)
IPA: /el aˈβjon ba a ateriˈθaɾ ˈpɾonto/ · PT: [el abión ba a aterrithár prónto]

No banco / burocracias
48. Llamaré al banco mañana. — Eu vou ligar para o banco amanhã. (decisión)
IPA: /ʎamaˈɾe al ˈbaŋko maˈɲana/ · PT: [lhamaré al bánko manhána]
49. Mi cita es a las once. — Minha consulta é às onze. (programado)
IPA: /mi ˈθita es a las ˈonθe/ · PT: [mi thíta és a las ónthe]

Consolidação
50. Ya veremos qué pasa. — A gente vai ver o que acontece.
IPA: /ʝa beˈɾemos ke ˈpasa/ · PT: [ia berémos ke pása]


51. Te ayudo. — Eu ajudo.
IPA: /te aˈʝuðo/ · PT: [te aiúdo]
52. Va a llover. — Vai chover.
IPA: /ba a ʎoˈβeɾ/ · PT: [ba a lhobér]
53. El autobús sale a las nueve. — O ônibus sai às nove.
IPA: /el awtoˈβus ˈsale a las ˈnweβe/ · PT: [el autobús sále a las nuébe]
54. Quedo con ella mañana. — Eu vou encontrá-la amanhã.
IPA: /ˈkeðo kon ˈeʎa maˈɲana/ · PT: [kédo kon élha manhána]

Um poco mais
55. Puede que lleguemos tarde. — Talvez a gente se atrase.
IPA: /ˈpweðe ke ʎeˈɣemos ˈtaɾðe/ · PT: [puéde ke lhegémos tárde]
56. ¿Se lo vas a decir? — Você vai contar para ela?
IPA: /se lo bas a deˈθiɾ/ · PT: [se lo bas a dethír]
57. ¿Abro la ventana? — Eu abro a janela?
IPA: /ˈaβɾo la benˈtana/ · PT: [ábro la bentána]
58. No van a llegar a tiempo. — Eles não vão chegar na hora.
IPA: /no ban a ʎeˈɣaɾ a ˈtjempo/ · PT: [no ban a lhegár a tiémpo]

Perguntas e negações
59. ¿No vienes con nosotros? — Você não vai vir con a gente?
IPA: /no ˈbjenes kon noˈsotɾos/ · PT: [no biénes kon nosótros]
60. ¿No empieza pronto la película? — O filme não vai começar logo?
IPA: /no emˈpjeθa ˈpɾonto la peˈlikula/ · PT: [no empiétha prónto la pelíkula]
61. ¿Por qué no vas a la fiesta? — Por que você não vai à fiesta?
IPA: /poɾ ke no bas a la ˈfjesta/ · PT: [por ké no bas a la fiésta]
62. ¿No lloverá después de todo? — Será que não vai chover afinal?
IPA: /no ʎoβeˈɾa desˈpwes de ˈtoðo/ · PT: [no lhoberá después de tódo]

Conectores e tempos verbais
63. Te llamaré en cuanto aterrice. — Eu vou te ligar assim que eu pousar.
IPA: /te ʎamaˈɾe en ˈkwanto ateˈriθe/ · PT: [te lhamaré en kuánto aterríthe]
64. Vamos a llegar tarde porque el tráfico es terrible. — A gente vai se atrasar porque o trânsito está terrível.
IPA: /ˈbamos a ʎeˈɣaɾ ˈtaɾðe ˈpoɾke el ˈtɾafiko es teˈriβle/ · PT: [bámos a lhegár tárde pórke el tráfiko és terríble]
65. No me iré hasta que llegues. — Eu não vou sair até você chegar.
IPA: /no me iˈɾe ˈasta ke ˈʎeɣes/ · PT: [no me iré ásta ke lhégues]
66. Cuando ella llegue, empezaremos la reunión. — Quando ela chegar aqui, a gente começa a reunião.
IPA: /ˈkwando ˈeʎa ˈʎeɣe empeθaˈɾemos la reuˈnjon/ · PT: [kuándo élha lhégue empethárémos la reunión]
67. Puede que vaya, pero todavía no estoy seguro porque tengo mucho trabajo. — Talvez eu vá, mas ainda não tenho certeza porque tenho muito trabalho.
IPA: /ˈpweðe ke ˈbaʝa ˈpeɾo toðaˈβia no esˈtoi seˈɣuɾo ˈpoɾke ˈteŋɡo ˈmutʃo tɾaˈβaxo/ · PT: [puéde ke báia péro todabía no estôi segúro pórke téngo mútcho trabárro]

As mais ricas
68. Mira ese cielo; seguro que va a haber tormenta antes de que lleguemos a casa. — Olha esse céu; con certeza vai fazer tempestade antes de chegarmos em casa.
IPA: /ˈmiɾa ˈese ˈθjelo seˈɣuɾo ke ba a aˈβeɾ toɾˈmenta ˈantes de ke ʎeˈɣemos a ˈkasa/ · PT: [míra ése thiélo segúro ke ba a abér torménta ántes de ke lhegémos a kása]
69. Terminaré el informe esta noche, en cuanto los niños se acuesten. — Eu vou terminar o relatório hoje à noite, assim que as crianças forem dormir.
IPA: /teɾmiˈnaɾe el imˈfoɾme ˈesta ˈnotʃe en ˈkwanto los ˈniɲos se aˈkwesten/ · PT: [terminaré el imfórme ésta nótche en kuánto los nínhos se akuésten]
70. Nos casamos la próxima primavera, pero todavía no hemos elegido la fecha. — Nós vamos nos casar na próxima primavera, mas ainda não escolhemos a data.
IPA: /nos kaˈsamos la ˈpɾoɣsima pɾimaˈβeɾa ˈpeɾo toðaˈβia no ˈemos eleˈxiðo la ˈfetʃa/ · PT: [nos kasámos la próksima primabéra péro todabía no émos elerrído la fétcha]
71. Dijo que llamaría cuando aterrizara, pero puede que el vuelo se retrase. — Ele disse que vai ligar quando pousar, mas o voo talvez atrase.
IPA: /ˈdixo ke ʎamaˈɾia ˈkwando ateriˈθaɾa ˈpeɾo ˈpweðe ke el ˈbwelo se reˈtɾase/ · PT: [dírro ke lhamaría kuándo aterrithára péro puéde ke el buélo se retráse]
72. No voy a la fiesta esta noche, porque he quedado con mi hermana para cenar. — Eu não vou à festa hoje à noite, porque vou jantar con minha irmã em vez disso.
IPA: /no boi a la ˈfjesta ˈesta ˈnotʃe ˈpoɾke e keˈðaðo kon mi eɾˈmana ˈpaɾa θeˈnaɾ/ · PT: [no bôi a la fiésta ésta nótche pórke é kedádo kon mi ermána pára thenár]
73. En cuanto termine el examen, te llamaré para contarte cómo me fue. — Assim que a prova terminar, eu vou te ligar para contar como foi.
IPA: /en ˈkwanto teɾˈmine el eɣˈsamen te ʎamaˈɾe ˈpaɾa konˈtaɾte ˈkomo me fwe/ · PT: [en kuánto termíne el eksámen te lhamaré pára kontárte kómo me fué]
74. La empresa va a contratar a más gente el año que viene, porque el negocio está creciendo rápido. — A empresa vai contratar mais gente ano que vem, porque os negócios estão crescendo rápido.
IPA: /la emˈpɾesa ba a kontɾaˈtaɾ a mas ˈxente el ˈaɲo ke ˈbjene ˈpoɾke el neˈɣoθjo esˈta kɾeˈθjendo ˈrapiðo/ · PT: [la empréza ba a kontratár a mas rrénte el ánho ke biéne pórke el negóthio está krethiéndo rrápido]
75. Puede que no termine a tiempo, a menos que alguien me ayude con la última parte. — Talvez eu não termine na hora, a menos que alguém me ajude con a última parte.
IPA: /ˈpweðe ke no teɾˈmine a ˈtjempo a ˈmenos ke ˈalɣjen me aˈʝuðe kon la ˈultima ˈpaɾte/ · PT: [puéde ke no termíne a tiémpo a ménos ke álguien me aiúde kon la última párte]



¿Me ayudarás? / Claro que sí. — Você vai me ajudar? / Claro que vou.
IPA: /me aʝuðaˈɾas · ˈklaɾo ke si/ · PT: [me aiudarás · kláro ke sí]
¿La vas a llamar? / Sí, ahora mismo. — Você vai ligar para ela? / Sim, agora mesmo.
IPA: /la bas a ʎaˈmaɾ · si aˈoɾa ˈmizmo/ · PT: [la bas a lhamár · sí aóra mízmo]
¿A qué hora sale el tren? / A las cuatro. — A que horas o trem sai? / Às quatro.
IPA: /a ke ˈoɾa ˈsale el tɾen · a las ˈkwatɾo/ · PT: [a ke óra sále el trén · a las kuátro]
¿Quedas con alguien esta noche? / Sí, con un viejo amigo. — Você vai encontrar alguém hoje à noite? / Sim, un amigo antigo.
IPA: /ˈkeðas kon ˈalɣjen ˈesta ˈnotʃe · si kon un ˈbjexo aˈmiɣo/ · PT: [kédas kon álguien ésta nótche · sí kon un biérro amígo]
¿Crees que lloverá? / Puede. — Você acha que vai chover? / Talvez.
IPA: /ˈkɾees ke ʎoβeˈɾa · ˈpweðe/ · PT: [krées ke lhoberá · puéde]
¿Pedimos pizza? / ¡Genial! — Vamos pedir pizza? / Ótima ideia!
IPA: /peˈðimos ˈpiːtsa · xeˈnjal/ · PT: [pedímos pítsa · rrenIál]
¿Va a nevar? / Parece que sí. — Vai nevar? / Parece que sim.
IPA: /ba a neˈβaɾ · paˈɾeθe ke si/ · PT: [ba a nebár · paréthe ke sí]
¿Cuándo empieza el examen? / A las nueve. — Quando a prova começa? / Às nove.
IPA: /ˈkwando emˈpjeθa el eɣˈsamen · a las ˈnweβe/ · PT: [kuándo empiétha el eksámen · a las nuébe]
¿Estarás en casa para cenar? / Sí. — Você vai estar em casa para o jantar? / Sim, vou.
IPA: /estaˈɾas en ˈkasa ˈpaɾa θeˈnaɾ · si/ · PT: [estarás en kása pára thenár · sí]
¿Vas a comprar ese coche? / Todavía lo estoy pensando. — Você vai comprar aquele carro? / Ainda estou pensando.
IPA: /bas a komˈpɾaɾ ˈese ˈkotʃe · toðaˈβia lo esˈtoi penˈsando/ · PT: [bas a komprár ése kótche · todabía lo estôi pensándo]
¿Qué vas a hacer este fin de semana? / Vamos a la playa. — O que você vai fazer neste fin de semana? / Vamos à praia.
IPA: /ke bas a aˈθeɾ ˈeste fin de seˈmana · ˈbamos a la ˈplaʝa/ · PT: [ke bas a athér éste fin de semána · bámos a la pláia]
¿Te casarás conmigo? / ¡Sí, quiero! — Você vai se casar comigo? / Sim, eu vou!
IPA: /te kasaˈɾas konˈmiɣo · si ˈkjeɾo/ · PT: [te kasarás konmígo · sí kiéro]
¿Cuándo vuelves? / El próximo domingo. — Quando você volta de avião? / No próximo domingo.
IPA: /ˈkwando ˈbwelβes · el ˈpɾoɣsimo doˈmiŋɡo/ · PT: [kuándo buélbes · el próksimo domíngo]
¿Puede que cambies de idea? / Puede. — Você talvez mude de ideia? / Talvez.
IPA: /ˈpweðe ke ˈkambjes de iˈðea · ˈpweðe/ · PT: [puéde ke kámbies de idéa · puéde]
¿Llegarás a tiempo? / Eso espero. — Você vai chegar lá na hora? / Espero que sim.
IPA: /ʎeɣaˈɾas a ˈtjempo · ˈeso esˈpeɾo/ · PT: [lhegarás a tiémpo · éso espéro]
¿Se va a mudar aquí? / Sí, el mes que viene. — Ela vai se mudar para cá? / Sim, mês que vem.
IPA: /se ba a muˈðaɾ aˈki · si el mes ke ˈbjene/ · PT: [se ba a mudár akí · sí el més ke biéne]
¿A qué hora cierra la tienda? / A las nueve. — A que horas a loja fecha? / Às nove.
IPA: /a ke ˈoɾa ˈθjera la ˈtjenda · a las ˈnweβe/ · PT: [a ke óra thiérra la tiénda · a las nuébe]
¿Tienes algo esta tarde? / Solo el médico. — Você vai ver alguém esta tarde? / Só meu médico.
IPA: /ˈtjenes ˈalɣo ˈesta ˈtaɾðe · ˈsolo el ˈmeðiko/ · PT: [tiénes álgo ésta tárde · sólo el médiko]
¿Crees que vendrán? / Lo dudo. — Você acha que eles vêm? / Duvido.
IPA: /ˈkɾees ke benˈdɾan · lo ˈduðo/ · PT: [krées ke bendrán · lo dúdo]
¿Cierro la ventana? / Sí, por favor. — Eu fecho a janela? / Sim, por favor.
IPA: /ˈθjero la benˈtana · si poɾ faˈβoɾ/ · PT: [thiérro la bentána · sí por fabór]
¿Estará listo para el viernes? / Debería. — Vai estar pronto até sexta? / Deveria estar.
IPA: /estaˈɾa ˈlisto ˈpaɾa el ˈbjeɾnes · deβeˈɾia/ · PT: [estará lísto pára el biérnes · debería]
¿Les vas a decir la verdad? / Tengo que hacerlo. — Você vai contar a verdade a eles? / Eu tenho que contar.
IPA: /les bas a deˈθiɾ la beɾˈðað · ˈteŋɡo ke aˈθeɾlo/ · PT: [les bas a dethír la berdád · téngo ke athérlo]
¿Puede que sea demasiado tarde? / Espero que no. — Talvez seja tarde demais? / Espero que não.
IPA: /ˈpweðe ke ˈsea demaˈsjaðo ˈtaɾðe · esˈpeɾo ke no/ · PT: [puéde ke séa demasiádo tárde · espéro ke no]
¿Cuándo es la boda? / En junio. — Quando é o casamento? / Em junho.
IPA: /ˈkwando es la ˈboða · en ˈxunjo/ · PT: [kuándo és la bóda · en rrúnio]
¿Me echarás de menos? / Claro que sí. — Você vai sentir minha falta? / Claro que vou.
IPA: /me etʃaˈɾas de ˈmenos · ˈklaɾo ke si/ · PT: [me etcharás de ménos · kláro ke sí]
`;

const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

const deck = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  const nextLine = lines[i + 1] || '';
  if (line.includes('—') && nextLine.startsWith('IPA:')) {
    let wordLine = line;
    wordLine = wordLine.replace(/^\d+\.\s*/, '');
    
    let [wordPart, translationPart] = wordLine.split('—').map(s => s.trim());
    if (!wordPart || !translationPart) continue;

    let pronunciation = '';
    let portuguesePhonetic = '';
    
    const parts = nextLine.split('· PT:');
    pronunciation = parts[0].replace('IPA:', '').trim();
    if (parts[1]) {
      portuguesePhonetic = parts[1].trim();
    }
    
    const syllables = wordPart.split(/\s+/).map(s => s.trim()).filter(Boolean);

    deck.push({
      id: `leccion_2_gramatica_b1_s_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/leccion_2_gramatica_b1_s_es.json', JSON.stringify(deck, null, 2));
console.log(`Created leccion_2_gramatica_b1_s_es.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}

if (!metadata['leccion_2_gramatica_b1_s']) {
  metadata['leccion_2_gramatica_b1_s'] = { cardCount: 0, en: 0, es: 0 };
}
metadata['leccion_2_gramatica_b1_s'].cardCount = deck.length;
metadata['leccion_2_gramatica_b1_s'].es = deck.length;

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
