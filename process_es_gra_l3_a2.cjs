const fs = require('fs');

const raw = `Trabajo. — Eu trabalho.
IPA: /tɾaˈβaxo/ · PT: [trabárro]
Él trabaja. — Ele trabalha.
IPA: /el tɾaˈβaxa/ · PT: [él trabárra]
Ellos trabajan. — Eles trabalham.
IPA: /ˈeʎos tɾaˈβaxan/ · PT: [élhos trabárran]


Presente — negativa
4. No trabajo los domingos. — Eu não trabalho aos domingos.
IPA: /no tɾaˈβaxo los doˈmiŋɡos/ · PT: [no trabárro los domíngos]
5. Él no trabaja los domingos. — Ele não trabalha aos domingos.
IPA: /el no tɾaˈβaxa los doˈmiŋɡos/ · PT: [él no trabárra los domíngos]

Presente — pergunta e resposta curta
6. ¿Trabajas aquí? — Você trabalha aqui?
IPA: /tɾaˈβaxas aˈki/ · PT: [trabárras akí]
7. ¿Trabaja ella aquí? — Ela trabalha aqui?
IPA: /tɾaˈβaxa ˈeʎa aˈki/ · PT: [trabárra élha akí]
8. Sí, trabaja. — Sim, ela trabalha.
IPA: /si tɾaˈβaxa/ · PT: [sí trabárra]
9. No, no trabaja. — Não, ela não trabalha.
IPA: /no no tɾaˈβaxa/ · PT: [no no trabárra]

Verbos -er e -ir regulares
10. Él juega al fútbol. — Ele joga futebol.
IPA: /el ˈxweɣa al ˈfutβol/ · PT: [él rruéga al fútbol]
11. Ella ve la tele. — Ela assiste TV.
IPA: /ˈeʎa be la ˈtele/ · PT: [élha be la téle]
12. Él echa de menos a su familia. — Ele sente falta da família.
IPA: /el ˈetʃa de ˈmenos a su faˈmilja/ · PT: [él étcha de ménos a su famílha]

Verbos irregulares comuns
13. Ella estudia inglés. — Ela estuda inglês.
IPA: /ˈeʎa esˈtuðja iŋˈɡles/ · PT: [élha estúdia inglés]
14. Él lo intenta con todas sus fuerzas. — Ele se esforça ao máximo.
IPA: /el lo inˈtenta kon ˈtoðas sus ˈfweɾθas/ · PT: [él lo inténta kon tódas sus fuérthas]
15. Ella va al trabajo en autobús. — Ela vai ao trabalho de ônibus.
IPA: /ˈeʎa ba al tɾaˈβaxo en awtoˈβus/ · PT: [élha ba al trabárro en autobús]
16. Él friega los platos. — Ele lava a louça.
IPA: /el ˈfɾjeɣa los ˈplatos/ · PT: [él friéga los plátos]
17. Ella tiene dos hermanos. — Ela tem dois irmãos.
IPA: /ˈeʎa ˈtjene dos eɾˈmanos/ · PT: [élha tiéne dos ermános]

Verbo estar (para os fatos)
18. El hotel no tiene spa. — O hotel não tem spa.
IPA: /el oˈtel no ˈtjene ˈspa/ · PT: [el otél no tiéne spá]
19. ¿Trabaja Susana en tu oficina? — A Susana trabalha no seu escritório?
IPA: /tɾaˈβaxa suˈsana en tu ofiˈθina/ · PT: [trabárra susána en tu ofithína]

Estar + gerundio — afirmativa, negativa, pergunta
20. Estoy trabajando. — Eu estou trabajando.
IPA: /esˈtoi tɾaβaˈxando/ · PT: [estôi trabarrándo]
21. Ella no está trabajando. — Ela não está trabalhando.
IPA: /ˈeʎa no esˈta tɾaβaˈxando/ · PT: [élha no está trabarrándo]
22. ¿Están trabajando ellos? — Eles estão trabalhando?
IPA: /esˈtan tɾaβaˈxando ˈeʎos/ · PT: [están trabarrándo élhos]

Ortografia do gerúndio
23. Él está preparando la cena. — Ele está fazendo o jantar.
IPA: /el esˈta pɾepaˈɾando la ˈθena/ · PT: [él está preparándo la théna]
24. Están corriendo en el parque. — Eles estão correndo no parque.
IPA: /esˈtan koˈrjendo en el ˈpaɾke/ · PT: [están korriéndo en el párke]
25. Presente = hábitos y hechos. Continuo = acciones en este momento. — Presente = hábitos e fatos. Contínuo = ações neste momento.
IPA: /pɾeˈsente ˈaβitos i ˈetʃos konˈtinwo akˈθjones en ˈeste moˈmento/ · PT: [preSénte ábitos i étchos kontínuo akthiónes en éste moménto]


26. Me lavo el pelo todos los días. — Eu lavo o cabelo todo dia.
IPA: /me ˈlaβo el ˈpelo ˈtoðos los ˈdias/ · PT: [me lábo el pélo tódos los días]
27. Él suele levantarse muy temprano. — Ele geralmente acorda bem cedo.
IPA: /el ˈswele leβanˈtaɾse mui temˈpɾano/ · PT: [él suéle lebantárse múi tempráno]
28. Ella se cepilla los dientes dos veces al día. — Ela escova os dentes duas vezes por dia.
IPA: /ˈeʎa se θeˈpiʎa los ˈdjentes dos ˈbeθes al ˈdia/ · PT: [élha se thepílha los diéntes dos bétches al día]

Agora mesmo (contínuo)
29. No puedo hablar. Me estoy cepillando los dientes. — Não posso falar. Estou escovando os dentes.
IPA: /no ˈpweðo aˈβlaɾ me esˈtoi θepiˈʎando los ˈdjentes/ · PT: [no puédo ablár me estôi thepilhándo los diéntes]
30. Él no puede hablar ahora. Se está duchando. — Ele não pode falar agora. Está tomando banho.
IPA: /el no ˈpweðe aˈβlaɾ aˈoɾa se esˈta duˈtʃando/ · PT: [él no puéde ablár aóra se está dutchándo]

No trabalho
31. Ella trabaja en una oficina en el centro. — Ela trabalha num escritório no centro.
IPA: /ˈeʎa tɾaˈβaxa en una ofiˈθina en el ˈθentɾo/ · PT: [élha trabárra en úna ofithína en el théntro]
32. Él está estudiando para una presentación importante. — Ele está estudando para uma apresentação importante.
IPA: /el esˈta estuˈðjando ˈpaɾa una pɾesentaˈθjon impoɾˈtante/ · PT: [él está estudiándo pára úna presentathión importánte]
33. ¿Termina ella de trabajar a las cinco? — Ela termina o trabalho às cinco?
IPA: /teɾˈmina ˈeʎa de tɾaβaˈxaɾ a las ˈθiŋko/ · PT: [termína élha de trabarrár a las thínko]

Na cozinha
34. Ella cocina la cena cada noche. — Ela cozinha o jantar toda noite.
IPA: /ˈeʎa koˈθina la ˈθena ˈkaða ˈnotʃe/ · PT: [élha kothína la théna káda nótche]
35. Él está haciendo un pastel ahora mismo. — Ele está fazendo um bolo agora.
IPA: /el esˈta aˈθjendo un pasˈtel aˈoɾa ˈmizmo/ · PT: [él está athiéndo un pastél aóra mízmo]

No parque / academia
36. Corren en el parque cada mañana. — Eles correm no parque toda manhã.
IPA: /ˈkoren en el ˈpaɾke ˈkaða maˈɲana/ · PT: [kórren en el párke káda manhána]
37. Está entrenando duro estos días. — Ele está treinando pesado ultimamente.
IPA: /esˈta entɾeˈnando ˈduɾo ˈestos ˈdias/ · PT: [está entrenándo dúro éstos días]

Fatos permanentes
38. El agua hierve a 100 grados. — A água ferve a 100 graus.
IPA: /el ˈaɣwa ˈʝeɾβe a θjen ˈɡɾaðos/ · PT: [el água iérbe a thién grádos]
39. Tengo un hermano. — Eu tenho um irmão.
IPA: /ˈteŋɡo un eɾˈmano/ · PT: [téngo un ermáno]
40. Él vive en París. — Ele mora em Paris.
IPA: /el ˈbiβe en paˈɾis/ · PT: [él bíbe en parís]

Lendo / lazer
41. Estoy leyendo un libro nuevo. ¡Me encanta! — Estou lendo um livro novo. Estou amando!
IPA: /esˈtoi leˈʝendo un ˈliβɾo ˈnweβo me eŋˈkanta/ · PT: [estôi leiéndo un líbro nuébo me enkánta]
42. Esta semana me quedo en casa. — Esta semana, estou ficando em casa.
IPA: /ˈesta seˈmana me ˈkeðo en ˈkasa/ · PT: [ésta semána me kédo en kása]

Verbos de estado
43. Dame el dinero. Lo necesito ahora. — Me dá o dinheiro. Preciso agora.
IPA: /ˈdame el diˈneɾo lo neθeˈsito aˈoɾa/ · PT: [dáme el dinéro lo nethesíto aóra]
44. ¿Qué pasó? Pareces triste. — O que aconteceu? Você parece triste.
IPA: /ke paˈso paˈɾeθes ˈtɾiste/ · PT: [ke pasó parethes tríste]

Estudando / na escola
45. Ella estudia cada noche después de cenar. — Ela estuda toda noite depois do jantar.
IPA: /ˈeʎa esˈtuðja ˈkaða ˈnotʃe desˈpwes de θeˈnaɾ/ · PT: [élha estúdia káda nótche después de thenár]
46. Estoy estudiando para mi examen ahora mismo. — Estou estudando para minha prova agora.
IPA: /esˈtoi estuˈðjando ˈpaɾa mi eɣˈsamen aˈoɾa ˈmizmo/ · PT: [estôi estudiándo pára mi eksámen aóra mízmo]

Compras / mercado
47. Él va de compras los sábados. — Ele vai fazer compras aos sábados.
IPA: /el ba de ˈkompɾas los ˈsaβaðos/ · PT: [él ba de kómpras los sábados]
48. Está comprando comida en este momento. — Ela está comprando mantimentos no momento.
IPA: /esˈta komˈpɾando koˈmiða en ˈeste moˈmento/ · PT: [está komprándo komída en éste moménto]

Viajando
49. Ellos viajan a España cada verano. — Eles viajam para a Espanha todo verão.
IPA: /ˈeʎos ˈbjaxan a esˈpaɲa ˈkaða beˈɾano/ · PT: [élhos biárran a espánha káda beráno]
50. Estamos viajando a Madrid este mes. — Nós estamos viajando para Madri este mês.
IPA: /esˈtamos bjaˈxando a maˈðɾið ˈeste mes/ · PT: [estámos biarrándo a madríd éste més]


51. Ella trabaja duro. — Ela trabalha duro.
IPA: /ˈeʎa tɾaˈβaxa ˈduɾo/ · PT: [élha trabárra dúro]
52. Está durmiendo. — Ele está dormindo.
IPA: /esˈta duɾˈmjendo/ · PT: [está durmiéndo]
53. Estudian mucho. — Eles estudam muito.
IPA: /esˈtuðjan ˈmutʃo/ · PT: [estúdian mútcho]
54. Estoy viendo la tele. — Estou assistindo TV.
IPA: /esˈtoi ˈbjendo la ˈtele/ · PT: [estôi biéndo la téle]

Um pouco mais
55. ¿Tiene él un coche? — Ele tem um carro?
IPA: /ˈtjene el un ˈkotʃe/ · PT: [tiéne él un kótche]
56. Ella no va al gimnasio a menudo. — Ela não vai à academia com frequência.
IPA: /ˈeʎa no ba al ximˈnasjo a meˈnuðo/ · PT: [élha no ba al rrimnásio a menúdo]
57. ¿Estás estudiando ahora mismo? — Você está estudando agora?
IPA: /esˈtas estuˈðjando aˈoɾa ˈmizmo/ · PT: [estás estudiándo aóra mízmo]
58. No están trabajando hoy. — Eles não estão trabalhando hoje.
IPA: /no esˈtan tɾaβaˈxando oi/ · PT: [no están trabarrándo ôi]

Perguntas e negações
59. ¿No le gusta el café? — Ela não gosta de café?
IPA: /no le ˈɡusta el kaˈfe/ · PT: [no le gústa el kafé]
60. ¿No viven aquí? — Eles não moram aqui?
IPA: /no ˈbiβen aˈki/ · PT: [no bíben akí]
61. ¿Qué está haciendo él? — O que ele está fazendo?
IPA: /ke esˈta aˈθjendo el/ · PT: [ke está athiéndo él]
62. ¿Por qué no contesta ella? — Por que ela não atende?
IPA: /poɾ ke no konˈtesta ˈeʎa/ · PT: [por ké no kontésta élha]

Conectores e tempos verbais
63. Normalmente va andando al trabajo, pero hoy coge el autobús. — Ela geralmente vai a pé ao trabalho, mas hoje está pegando o ônibus.
IPA: /noɾˈmalmente ba anˈdando al tɾaˈβaxo ˈpeɾo oi ˈkoxe el awtoˈβus/ · PT: [normalménte ba andándo al trabárro péro ôi kórre el autobús]
64. No cocina a menudo, pero esta noche está preparando una gran cena. — Ele não cozinha com frequência, mas está cozinhando um jantarzão hoje.
IPA: /no koˈθina a meˈnuðo ˈpeɾo ˈesta ˈnotʃe esˈta pɾepaˈɾando una ɡɾan ˈθena/ · PT: [no kothína a menúdo péro ésta nótche está preparándo úna gran théna]
65. Necesito ayuda porque no entiendo esto. — Eu preciso de ajuda porque não entendo isso.
IPA: /neθeˈsito aˈʝuða ˈpoɾke no enˈtjendo ˈesto/ · PT: [nethesíto aiúda pórke no entiéndo ésto]
66. Cuando está estudiando, no contesta el teléfono. — Quando ela está estudando, ela não atende o telefone.
IPA: /ˈkwando esˈta estuˈðjando no konˈtesta el teˈlefono/ · PT: [kuándo está estudiándo no kontésta el teléfono]
67. Trabaja en Londres, pero se está quedando en París esta semana. — Ele trabaja em Londres, mas está ficando em Paris esta semana.
IPA: /tɾaˈβaxa en ˈlondɾes ˈpeɾo se esˈta keˈðando en paˈɾis ˈesta seˈmana/ · PT: [trabárra en lóndres péro se está kedándo en parís ésta semána]

As mais ricas
68. Normalmente no hace ejercicio, pero este mes está probando una rutina nueva. — Ela geralmente não se exercita, mas está tentando uma nova rotina este mês.
IPA: /noɾˈmalmente no ˈaθe exeɾˈθiθjo ˈpeɾo ˈeste mes esˈta pɾoˈβando una ruˈtina ˈnweβa/ · PT: [normalménte no áthe errertsíthio péro éste més está probándo úna rrutína nuéba]
69. ¿Siempre estudia hasta tan tarde, o solo se está preparando para el examen? — Ele sempre estuda até tão tarde, ou está só se preparando para a prova?
IPA: /ˈsjempɾe esˈtuðja ˈasta tan ˈtaɾðe o ˈsolo se esˈta pɾepaˈɾando ˈpaɾa el eɣˈsamen/ · PT: [siémpre estúdia ásta tan tárde o sólo se está preparándo pára el eksámen]
70. Normalmente no viajan en invierno, pero están visitando a la familia este diciembre. — Eles geralmente não viajam no inverno, mas estão visitando a família neste dezembro.
IPA: /noɾˈmalmente no ˈbjaxan en imˈbjeɾno ˈpeɾo esˈtan bisiˈtando a la faˈmilja ˈeste diˈθjembɾe/ · PT: [normalménte no biárran en imbiérno péro están bisitándo a la famílha éste dithiémbre]
71. El hotel no tiene piscina, pero está construyendo una ahora mismo. — O hotel não tem piscina, mas está construindo uma agora.
IPA: /el oˈtel no ˈtjene pisˈθina ˈpeɾo esˈta konstɾuˈʝendo una aˈoɾa ˈmizmo/ · PT: [el otél no tiéne pisthína péro está konstruiéndo úna aóra mízmo]
72. No contesta porque está conduciendo ahora mismo. — Ela não está atendendo porque está dirigindo agora.
IPA: /no konˈtesta ˈpoɾke esˈta konduˈθjendo aˈoɾa ˈmizmo/ · PT: [no kontésta pórke está kondutiéndo aóra mízmo]
73. Va al gimnasio tres veces a la semana, pero hoy no va porque está enfermo. — Ele vai à academia três vezes por semana, mas não vai hoje porque está doente.
IPA: /ba al ximˈnasjo tɾes ˈbeθes a la seˈmana ˈpeɾo oi no ba ˈpoɾke esˈta emˈfeɾmo/ · PT: [ba al rrimnásio trés bétches a la semána péro ôi no ba pórke está emférmo]
74. ¿Por qué no está estudiando, si el examen es mañana? — Por que ela não está estudando, sendo que a prova é amanhã?
IPA: /poɾ ke no esˈta estuˈðjando si el eɣˈsamen es maˈɲana/ · PT: [por ké no está estudiándo si el eksámen és manhána]
75. Normalmente nos quedamos en casa los fines de semana, pero esta noche salimos porque es su cumpleaños. — Nós geralmente ficamos em casa nos fins de semana, mas vamos sair hoje à noite porque é aniversário dela.
IPA: /noɾˈmalmente nos keˈðamos en ˈkasa los ˈfines de seˈmana ˈpeɾo ˈesta ˈnotʃe saˈlimos ˈpoɾke es su kumpleˈaɲos/ · PT: [normalménte nos kedámos en kása los fínes de semána péro ésta nótche salímos pórke és su kumpleánhos]




¿Trabajas aquí? / Sí. — Você trabalha aqui? / Sim, trabalho.
IPA: /tɾaˈβaxas aˈki · si/ · PT: [trabárras akí · sí]
¿Trabaja ella aquí? / No. — Ela trabalha aqui? / Não, não trabalha.
IPA: /tɾaˈβaxa ˈeʎa aˈki · no/ · PT: [trabárra élha akí · no]
¿Qué estás haciendo? / Estoy cocinando. — O que você está fazendo? / Estou cozinhando.
IPA: /ke esˈtas aˈθjendo · esˈtoi koθiˈnando/ · PT: [ke estás athiéndo · estôi kothinándo]
¿Tiene él coche? / Sí. — Ele tem um carro? / Sim, tem.
IPA: /ˈtjene el ˈkotʃe · si/ · PT: [tiéne él kótche · sí]
¿Trabaja ella hoy? / No. — Ela está trabalhando hoje? / Não, não está.
IPA: /tɾaˈβaxa ˈeʎa oi · no/ · PT: [trabárra élha ôi · no]
¿Con qué frecuencia haces ejercicio? / Tres veces a la semana. — Com que frequência você se exercita? / Três vezes por semana.
IPA: /kon ke fɾeˈkwenθja ˈaθes exeɾˈθiθjo · tɾes ˈbeθes a la seˈmana/ · PT: [kon ke frekuéntia áthes errertsíthio · trés bétches a la semána]
¿Estás estudiando ahora? / Sí. — Você está estudando agora? / Sim, estou.
IPA: /esˈtas estuˈðjando aˈoɾa · si/ · PT: [estás estudiándo aóra · sí]
¿Tiene el hotel spa? / No. — O hotel tem spa? / Não, não tem.
IPA: /ˈtjene el oˈtel ˈspa · no/ · PT: [tiéne el otél spá · no]
¿A qué se dedica ella? / Es profesora. — O que ela faz? / Ela é professora.
IPA: /a ke se deˈðika ˈeʎa · es pɾofeˈsoɾa/ · PT: [a ke se dedíka élha · és profesóra]
¿Está durmiendo? / Sí. — Ele está dormindo? / Sim, está.
IPA: /esˈta duɾˈmjendo · si/ · PT: [está durmiéndo · sí]
¿Viven cerca de aquí? / Sí. — Eles moram perto daqui? / Sim, moram.
IPA: /ˈbiβen ˈθeɾka de aˈki · si/ · PT: [bíben thérka de akí · sí]
¿Por qué sonríe? / Hoy está feliz. — Por que ela está sorrindo? / Ela está feliz hoje.
IPA: /poɾ ke sonˈrie · oi esˈta feˈliθ/ · PT: [por ké sonríe · ôi está felíth]
¿Habla español? / Un poco. — Ele fala espanhol? / Um pouco.
IPA: /ˈaβla espaˈɲol · un ˈpoko/ · PT: [ábla espánhol · un póko]
¿Están viendo una película? / Sí. — Eles están assistindo a um filme? / Sim, estão.
IPA: /esˈtan ˈbjendo una peˈlikula · si/ · PT: [están biéndo úna pelíkula · sí]
¿Cuántos hermanos tiene? / Dos. — Quantos irmãos ela tem? / Dois.
IPA: /ˈkwantos eɾˈmanos ˈtjene · dos/ · PT: [kuántos ermános tiéne · dos]
¿Está lloviendo ahora? / Sí, un poco. — Está chovendo agora? / Sim, um pouco.
IPA: /esˈta ʎoˈβjendo aˈoɾa · si un ˈpoko/ · PT: [está lhobiéndo aóra · sí un póko]
¿Le gusta su trabajo? / Le encanta. — Ela gosta do trabalho dela? / Sim, ela ama.
IPA: /le ˈɡusta su tɾaˈβaxo · le eŋˈkanta/ · PT: [le gústa su trabárro · le enkánta]
¿Qué está estudiando? / Medicina. — O que ele está estudando? / Medicina.
IPA: /ke esˈta estuˈðjando · meðiˈθina/ · PT: [ke está estudiándo · medithína]
¿Tienes mascotas? / Sí, un gato. — Você tem algum animal de estimação? / Sim, um gato.
IPA: /ˈtjenes masˈkotas · si un ˈɡato/ · PT: [tiénes maskótas · sí un gáto]
¿Viene ella a la fiesta? / Creo que sí. — Ela vai vir à festa? / Eu acho que sim.
IPA: /ˈbjene ˈeʎa a la ˈfjesta · ˈkɾeo ke si/ · PT: [biéne élha a la fiésta · kréo ke sí]
¿Cierra pronto la tienda? / Sí, a las seis. — A loja fecha cedo? / Sim, às seis.
IPA: /ˈθjera ˈpɾonto la ˈtjenda · si a las ˈseis/ · PT: [thiérra prónto la tiénda · sí a las séis]
¿Qué van a hacer este fin de semana? / Viajar. — O que eles vão fazer neste fim de semana? / Viajar.
IPA: /ke ban a aˈθeɾ ˈeste fin de seˈmana · bjaˈxaɾ/ · PT: [ke ban a athér éste fin de semána · biarrár]
¿Sueles cocinar en casa? / Sí, cada día. — Você geralmente cozinha em casa? / Sim, todo dia.
IPA: /ˈsweles koθiˈnaɾ en ˈkasa · si ˈkaða ˈdia/ · PT: [suéles kothinár en kása · sí káda día]
¿Está trabajando desde casa hoy? / Sí. — Ele está trabalhando de casa hoje? / Sim, está.
IPA: /esˈta tɾaβaˈxando ˈdezðe ˈkasa oi · si/ · PT: [está trabarrándo désde kása ôi · sí]
¿Suele nevar aquí? / No mucho. — Costuma nevar aqui? / Não com frequência.
IPA: /ˈswele neˈβaɾ aˈki · no ˈmutʃo/ · PT: [suéle nebár akí · no mútcho]
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
      id: `leccion_3_gramatica_a2_s_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/leccion_3_gramatica_a2_s_es.json', JSON.stringify(deck, null, 2));
console.log(`Created leccion_3_gramatica_a2_s_es.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}
metadata['leccion_3_gramatica_a2_s'] = {
  cardCount: deck.length,
  es: deck.length
};
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
