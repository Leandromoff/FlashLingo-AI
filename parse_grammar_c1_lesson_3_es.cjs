const fs = require('fs');

const rawText = `WILL — hábitos, verdades, suposições
Todos los días, mi abuelo cuenta las mismas historias. — Todo dia, meu avô conta as mesmas histórias. (hábito → presente)
IPA: /ˈtoðos los ˈdias mi aˈβwelo ˈkwenta las ˈmizmas isˈtoɾjas/ · PT: [tódos los días mi abuélo kuénta las mízmas istórias]
El aceite flota en el agua. — O óleo flutua na água. (verdade siempre)
IPA: /el aˈθejte ˈflota en el ˈaɣwa/ · PT: [el athéite flóta en el água]
El coche no quiere arrancar. — O carro não quer pegar. (recusa)
IPA: /el ˈkotʃe no ˈkjeɾe araŋˈkaɾ/ · PT: [el kótche no kiére arrankár]
No quiere escuchar nada de lo que le dices. — Ela não quer ouvir nada que você diz. (crítica)
IPA: /no ˈkjeɾe eskuˈtʃaɾ ˈnaða de lo ke le ˈðiθes/ · PT: [no kiére eskutchár náda de lo ke le díthes]
Será María. — Deve ser a Mary. (suposição → futuro de probabilidade)
IPA: /seˈɾa maˈɾia/ · PT: [será maría]
Ya se habrá ido. — Ela já deve ter ido. (dedução → futuro perfeito)
IPA: /ʝa se aˈβɾa ˈiðo/ · PT: [ia se abrá ído]


WOULD — hábitos e situaciones pasadas/imaginárias
7. Cuando éramos estudiantes, nos quedábamos despiertos hasta tarde. — Quando éramos estudantes, ficávamos acordados até tarde. (imperfeito)
IPA: /ˈkwando ˈeɾamos estuˈðjantes nos keˈðaβamos desˈpjeɾtos ˈasta ˈtaɾðe/ · PT: [kuándo éramos estudiántes nos kedábamos despiértos ásta tárde]
8. El río se congelaba en invierno. — O rio congelava no inverno. (imperfeito)
IPA: /el ˈrio se konxeˈlaβa en imˈbjeɾno/ · PT: [el río se konrrelába en imbiérno]
9. El coche no quiso arrancar ayer. — O carro não quis pegar ontem. (recusa passada)
IPA: /el ˈkotʃe no ˈkiso araŋˈkaɾ aˈʝeɾ/ · PT: [el kótche no kíso arrankár aiér]
10. No quería escuchar nada de lo que le decías. — Ela não queria ouvir nada que você dizia. (crítica passada)
IPA: /no keˈɾia eskuˈtʃaɾ ˈnaða de lo ke le deˈθias/ · PT: [no kería eskutchár náda de lo ke le dethías]
11. Habría ayudado, pero dijo que no. — Eu teria ajudado, mas ele disse não. (condicional composto)
IPA: /aˈβɾia aʝuˈðaðo ˈpeɾo ˈdixo ke no/ · PT: [abría aiudádo péro dírro ke no]
12. Tendría que estar de acuerdo contigo en eso. — Eu teria que concordar com você nisso. (polidez)
IPA: /tenˈdɾia ke esˈtaɾ de aˈkweɾðo konˈtiɣo en ˈeso/ · PT: [tendría ke estár de akuérdo kontígo en éso]

SHOULD — recomendação, expectativa, formal
13. La gente debería tratar a los demás con respeto. — As pessoas deveriam tratar os outros com respeito. (recomendação)
IPA: /la ˈxente deβeˈɾia tɾaˈtaɾ a los deˈmas kon resˈpeto/ · PT: [la rrénte debería tratár a los demás kon respéto]
14. Eso debería bastar para arreglar el problema. — Isso deveria ser suficiente para resolver o problema. (conclusão)
IPA: /ˈeso deβeˈɾia basˈtaɾ ˈpaɾa areˈɣlaɾ el pɾoˈβlema/ · PT: [éso debería bastár pára arreglár el probléma]
15. Ya debería estar en casa. — Ele já deveria estar em casa. (expectativa)
IPA: /ʝa deβeˈɾia esˈtaɾ en ˈkasa/ · PT: [ia debería estár en kása]
16. Los resultados deberían estar listos mañana. — Os resultados deveriam estar prontos amanhã.
IPA: /los resulˈtaðos deβeˈɾian esˈtaɾ ˈlistos maˈɲana/ · PT: [los resultádos debérian estár lístos manhána]
17. No deberían haberle hablado así. — Eles não deveriam ter falado com ela daquele jeito. (arrependimento)
IPA: /no deβeˈɾian aˈβeɾle aˈβlaðo aˈsi/ · PT: [no debérian abérle abládo así]
18. Sugiero que se disculpe. — Eu sugiro que ele se desculpe. (subjuntivo!)
IPA: /suˈxjeɾo ke se disˈkulpe/ · PT: [surriéro ke se diskúlpe]
19. Es esencial que actuemos rápido. — É essencial que ajamos rápido. (subjuntivo!)
IPA: /es esenˈθjal ke akˈtwemos ˈrapiðo/ · PT: [és esenthIál ke aktuémos rrápido]
20. Si necesitaras ayuda, avísame. — Se você precisar de ajuda, me avise. (subjuntivo)
IPA: /si neθesiˈtaɾas aˈʝuða aˈβisame/ · PT: [si nethesitáras aiúda abísame]
21. Toma mi número por si necesitas algo. — Pegue meu número caso precise de algo.
IPA: /ˈtoma mi ˈnumeɾo poɾ si neθeˈsitas ˈalɣo/ · PT: [tóma mi número por si nethesítas álgo]

Resumo das formas
22. Futuro de probabilidad: "Será María" = "Deve ser a Mary". — Futuro de probabilidade.
IPA: /fuˈtuɾo de pɾoβaβiliˈðað/ · PT: [futúro de probabilidád]
23. Condicional compuesto: "Habría ayudado" = "would have helped". — Condicional composto.
IPA: /kondiθjoˈnal komˈpwesto/ · PT: [kondithIonál kompuésto]
24. "Debería haber" = "should have" (arrependimento). — "Debería haber".
IPA: /deβeˈɾia aˈβeɾ/ · PT: [debería abér]
25. En español, "will" para suposiciones es el FUTURO; "should" es DEBERÍA. — Em espanhol, "will" para suposições é o FUTURO; "should" é DEBERÍA.
IPA: /en espaˈɲol el fuˈtuɾo i deβeˈɾia/ · PT: [en espánhol el futúro i debería]


26. Mi padre siempre se queda dormido en el sofá. — Meu pai sempre dorme no sofá.
IPA: /mi ˈpaðɾe ˈsjempɾe se ˈkeða doɾˈmiðo en el soˈfa/ · PT: [mi pádre siémpre se kéda dormído en el sofá]
27. Cada mañana, mira el móvil primero. — Toda manhã, ela olha o celular primeiro.
IPA: /ˈkaða maˈɲana ˈmiɾa el ˈmoβil pɾiˈmeɾo/ · PT: [káda manhána míra el móbil priméro]
28. Los niños dejan los juguetes por todas partes. — As crianças deixam os brinquedos por toda parte.
IPA: /los ˈniɲos ˈdexan los xuˈɣetes poɾ ˈtoðas ˈpaɾtes/ · PT: [los nínhos dérran los rruguétes por tódas pártes]

Problemas / recusa
29. La puerta no quiere abrirse. — A porta não quer abrir.
IPA: /la ˈpweɾta no ˈkjeɾe aˈβɾiɾse/ · PT: [la puérta no kiére abrírse]
30. Mi ordenador no quiere encenderse. — Meu computador não quer ligar.
IPA: /mi oɾðenaˈðoɾ no ˈkjeɾe enθenˈdeɾse/ · PT: [mi ordenadór no kiére enthendérse]
31. Esto no va a funcionar. — Isso não vai funcionar.
IPA: /ˈesto no ba a funθjoˈnaɾ/ · PT: [ésto no ba a funthIonár]

Suposições
32. Será el repartidor. — Deve ser o entregador.
IPA: /seˈɾa el repaɾtiˈðoɾ/ · PT: [será el repartidór]
33. Estará en el trabajo ahora mismo. — Ele debe estar no trabalho agora.
IPA: /estaˈɾa en el tɾaˈβaxo aˈoɾa ˈmizmo/ · PT: [estará en el trabárro aóra mízmo]
34. Ya habrán llegado. — Eles já devem ter chegado.
IPA: /ʝa aˈβɾan ʎeˈɣaðo/ · PT: [ia abrán lhegádo]

Lembranças (hábitos passados)
35. Jugábamos fuera todo el día. — A gente brincava lá fora o dia todo.
IPA: /xuˈɣaβamos ˈfweɾa ˈtoðo el ˈdia/ · PT: [rrugábamos fuéra tódo el día]
36. La abuela hacía bizcocho cada domingo. — A vovó fazia bolo todo domingo.
IPA: /la aˈβwela aˈθia biθˈkotʃo ˈkaða doˈmiŋɡo/ · PT: [la abuéla athía bithkótcho káda domíngo]
37. No nos íbamos a la cama antes de medianoche. — A gente não ia dormir antes da meia-noite.
IPA: /no nos ˈiβamos a la ˈkama ˈantes de meðjaˈnotʃe/ · PT: [no nos íbamos a la káma ántes de mediánótche]

Situações imaginárias
38. Habría llamado, pero perdí tu número. — Eu teria ligado, mas perdi seu número.
IPA: /aˈβɾia ʎaˈmaðo ˈpeɾo peɾˈði tu ˈnumeɾo/ · PT: [abría lhamádo péro perdí tu número]
39. Habría venido si lo hubiera sabido. — Ela teria vindo se soubesse.
IPA: /aˈβɾia beˈniðo si lo uˈβjeɾa saˈβiðo/ · PT: [abría benído si lo ubiéra sabído]

Conselhos / recomendações
40. Deberías descansar más. — Você deveria descansar mais.
IPA: /deβeˈɾias deskanˈsaɾ mas/ · PT: [deberías deskansár mas]
41. Deberíamos salir pronto para evitar el tráfico. — A gente deveria sair cedo para evitar o trânsito.
IPA: /deβeˈɾiamos saˈliɾ ˈpɾonto ˈpaɾa eβiˈtaɾ el ˈtɾafiko/ · PT: [deberíamos salír prónto pára ebitár el tráfiko]
42. No deberías preocuparte tanto. — Você não deveria se preocupar tanto.
IPA: /no deβeˈɾias pɾeokuˈpaɾte ˈtanto/ · PT: [no deberías preokupárte tánto]

Expectativas
43. El paquete debería llegar hoy. — O pacote deveria chegar hoje.
IPA: /el paˈkete deβeˈɾia ʎeˈɣaɾ oi/ · PT: [el pakéte debería lhegár ôi]
44. La reunión debería terminar a las cinco. — A reunião deveria terminar até as cinco.
IPA: /la reuˈnjon deβeˈɾia teɾmiˈnaɾ a las ˈθiŋko/ · PT: [la reunión debería terminár a las thínko]
45. Esto debería ser comida suficiente para todos. — Isso deveria ser comida suficiente para todos.
IPA: /ˈesto deβeˈɾia seɾ koˈmiða sufiˈθjente ˈpaɾa ˈtoðos/ · PT: [ésto debería ser komída sufithIénte pára tódos]

Arrependimentos
46. Debería haber estudiado más. — Eu deveria ter estudiado mais.
IPA: /deβeˈɾia aˈβeɾ estuˈðjaðo mas/ · PT: [debería abér estudiádo mas]
47. No deberíamos haber salido tan tarde. — A gente não deveria ter saído tão tarde.
IPA: /no deβeˈɾiamos aˈβeɾ saˈliðo tan ˈtaɾðe/ · PT: [no deberíamos abér salído tan tárde]

Pedidos educados / cautelosos
48. Tendría que pensarlo. — Eu teria que pensar a respeito.
IPA: /tenˈdɾia ke penˈsaɾlo/ · PT: [tendría ke pensárlo]
49. Habría pensado que diría que sí. — Eu teria pensado que ele diria sim.
IPA: /aˈβɾia penˈsaðo ke diˈɾia ke si/ · PT: [abría pensádo ke diría ke sí]
50. Si cambiaras de idea, llámame. — Se você mudar de ideia, me ligue.
IPA: /si kamˈbjaɾas de iˈðea ˈʎamame/ · PT: [si kambiáras de idéa lhámame]


51. Deberías descansar. — Você deveria descansar.
IPA: /deβeˈɾias deskanˈsaɾ/ · PT: [deberías deskansár]
52. El coche no quiere arrancar. — O carro não quer pegar.
IPA: /el ˈkotʃe no ˈkjeɾe araŋˈkaɾ/ · PT: [el kótche no kiére arrankár]
53. Jugábamos fuera. — A gente brincava lá fora.
IPA: /xuˈɣaβamos ˈfweɾa/ · PT: [rrugábamos fuéra]
54. Será él. — Deve ser ele.
IPA: /seˈɾa el/ · PT: [será él]

Um poco mais
55. Debería llegar pronto. — Ele deveria chegar logo.
IPA: /deβeˈɾia ʎeˈɣaɾ ˈpɾonto/ · PT: [debería lhegár prónto]
56. No quiere contestar mis llamadas. — Ela não quer atender minhas ligações.
IPA: /no ˈkjeɾe kontesˈtaɾ mis ʎaˈmaðas/ · PT: [no kiére kontestár mis lhamádas]
57. Los visitábamos cada verano. — A gente os visitava todo verão.
IPA: /los bisiˈtaβamos ˈkaða beˈɾano/ · PT: [los bisitábamos káda beráno]
58. Ya habrán terminado. — Eles já devem ter terminado.
IPA: /ʝa aˈβɾan teɾmiˈnaðo/ · PT: [ia abrán terminádo]

Perguntas e negações
59. ¿Debería llamarlo ahora? — Devo ligar para ele agora?
IPA: /deβeˈɾia ʎaˈmaɾlo aˈoɾa/ · PT: [debería lhamárlo aóra]
60. ¿No sería mejor? — Isso não seria melhor?
IPA: /no seˈɾia meˈxoɾ/ · PT: [no sería merrór]
61. No debería llegar tarde. — Ele não deveria se atrasar.
IPA: /no deβeˈɾia ʎeˈɣaɾ ˈtaɾðe/ · PT: [no debería lhegár tárde]
62. ¿Será suficiente? — Isso será suficiente?
IPA: /seˈɾa sufiˈθjente/ · PT: [será sufithIénte]

Conectores e tempos verbais
63. Deberías disculparte porque fuiste grosero. — Você deveria se desculpar porque foi mal-educado.
IPA: /deβeˈɾias diskulˈpaɾte ˈpoɾke ˈfwiste ɡɾoˈseɾo/ · PT: [deberías diskulpárte pórke fuíste groséro]
64. Cuando era joven, leía cada noche. — Quando eu era jovem, eu lia toda noite.
IPA: /ˈkwando ˈeɾa ˈxoβen leˈia ˈkaða ˈnotʃe/ · PT: [kuándo éra rróben leía káda nótche]
65. Habría ayudado, pero estaba ocupado. — Eu teria ajudado, mas estava ocupado.
IPA: /aˈβɾia aʝuˈðaðo ˈpeɾo esˈtaβa okuˈpaðo/ · PT: [abría aiudádo péro estába okupádo]
66. Debería haber llamado cuando llegó. — Ele deveria ter ligado quando chegou.
IPA: /deβeˈɾia aˈβeɾ ʎaˈmaðo ˈkwando ʎeˈɣo/ · PT: [debería abér lhamádo kuándo lhegó]
67. Será el cartero; siempre viene a mediodía. — Deve ser o carteiro; ele sempre vem ao meio-dia.
IPA: /seˈɾa el kaɾˈteɾo ˈsjempɾe ˈbjene a meðjoˈðia/ · PT: [será el kartéro siémpre biéne a mediodía]

As mais ricas
68. No deberías haber dicho eso, aunque fuera verdad. — Você não deveria ter dito aquilo, mesmo que fosse verdade.
IPA: /no deβeˈɾias aˈβeɾ ˈditʃo ˈeso ˈawŋke ˈfweɾa beɾˈðað/ · PT: [no deberías abér dítcho éso áunke fuéra berdád]
69. Habría estado de acuerdo, pero las condiciones ya habían cambiado. — Eu teria concordado, mas os termos já tinham mudado.
IPA: /aˈβɾia esˈtaðo de aˈkweɾðo ˈpeɾo las kondiˈθjones ʝa aˈβian kamˈbjaðo/ · PT: [abría estádo de akuérdo péro las kondithIónes ia abían kambiádo]
70. Si por casualidad la ves, dale recuerdos de mi parte. — Se por acaso você a vir, mande lembranças.
IPA: /si poɾ kaswaliˈðað la bes ˈdale reˈkweɾðos de mi ˈpaɾte/ · PT: [si por kasualidád la bes dále rekuérdos de mi párte]
71. Es esencial que todos estén informados antes del plazo. — É essencial que todos sejam informados antes do prazo. (subjuntivo)
IPA: /es esenˈθjal ke ˈtoðos esˈten imfoɾˈmaðos ˈantes del ˈplaθo/ · PT: [és esenthIál ke tódos estén imformádos ántes del plátho]
72. Ya se habrá dado cuenta de su error, supongo. — Ele já deve ter percebido o erro, eu suponho.
IPA: /ʝa se aˈβɾa ˈdaðo ˈkwenta de su eˈror suˈpoŋɡo/ · PT: [ia se abrá dádo kuénta de su error supóngo]
73. Deberíamos irnos ya, o perderemos el tren. — A gente deveria sair agora, ou vamos perder o trem.
IPA: /deβeˈɾiamos ˈiɾnos ʝa o peɾðeˈɾemos el tɾen/ · PT: [deberíamos írnos ia o perderémos el trén]
74. Sugiero que se revise el informe antes de enviarlo. — Eu sugiro que o relatório seja revisado antes de enviarmos. (subjuntivo)
IPA: /suˈxjeɾo ke se reˈβise el imˈfoɾme ˈantes de embiˈaɾlo/ · PT: [surriéro ke se rebíse el imfórme ántes de embiárlo]
75. Llévate un paraguas por si llueve luego. — Leve um guarda-chuva caso chova mais tarde.
IPA: /ˈʎeβate un paˈɾaɣwas poɾ si ˈʎweβe ˈlweɣo/ · PT: [lhébate un parágwas por si lhuébe luégo]




«¿Quién está en la puerta?» / «Será María.» — "Quem está na porta?" / "Deve ser a Mary."
IPA: /kjen esˈta en la ˈpweɾta · seˈɾa maˈɾia/ · PT: [kién está en la puérta · será maría]
«¿Ayudo?» / «Sí, por favor.» — "Devo ajudar?" / "Sim, por favor."
IPA: /aˈʝuðo · si poɾ faˈβoɾ/ · PT: [aiúdo · sí por fabór]
«¿Por qué no arranca?» / «La batería está muerta.» — "Por que não pega?" / "A bateria está descarregada."
IPA: /poɾ ke no aˈraŋka · la bateˈɾia esˈta ˈmweɾta/ · PT: [por ké no arránka · la batería está muérta]
«¿Tu abuelo contaba historias?» / «Sí, cada día.» — "Seu avô contava histórias?" / "Sim, todo dia."
IPA: /tu aˈβwelo konˈtaβa isˈtoɾjas · si ˈkaða ˈdia/ · PT: [tu abuélo kontába istórias · sí káda día]
«¿Se ha ido?» / «Ya se habrá ido.» — "Ela já foi?" / "Já deve ter ido."
IPA: /se a ˈiðo · ʝa se aˈβɾa ˈiðo/ · PT: [se a ído · ia se abrá ído]
«¿Salimos pronto?» / «Sí, para evitar el tráfico.» — "Saímos cedo?" / "Sim, pra evitar trânsito."
IPA: /saˈlimos ˈpɾonto · si ˈpaɾa eβiˈtaɾ el ˈtɾafiko/ · PT: [salímos prónto · sí pára ebitár el tráfiko]
«¿Habrías ayudado?» / «Por supuesto.» — "Você teria ajudado?" / "Claro."
IPA: /aˈβɾias aʝuˈðaðo · poɾ suˈpwesto/ · PT: [abrías aiudádo · por supuésto]
«¿Ya está en casa?» / «Debería estar.» — "Ele já está em casa?" / "Deveria estar."
IPA: /ʝa esˈta en ˈkasa · deβeˈɾia esˈtaɾ/ · PT: [ia está en kása · debería estár]
«¿Cuándo estará listo?» / «Debería estar listo mañana.» — "Quando vai estar pronto?" / "Deveria estar pronto amanhã."
IPA: /ˈkwando estaˈɾa ˈlisto · deβeˈɾia esˈtaɾ ˈlisto maˈɲana/ · PT: [kuándo estará lísto · debería estár lísto manhána]
«¿Os quedabais despiertos hasta tarde?» / «Sí, siempre.» — "Vocês ficavam acordados até tarde?" / "Sim, sempre."
IPA: /os keˈðaβais desˈpjeɾtos ˈasta ˈtaɾðe · si ˈsjempɾe/ · PT: [os kedábais despiértos ásta tárde · sí siémpre]
«¿Me disculpo?» / «Sí, deberías.» — "Devo me desculpar?" / "Sim, deveria."
IPA: /me disˈkulpo · si deβeˈɾias/ · PT: [me diskúlpo · sí deberías]
«¿Por qué no escucha?» / «Nunca lo hace.» — "Por que ela não ouve?" / "Ela nunca ouve."
IPA: /poɾ ke no esˈkutʃa · ˈnuŋka lo ˈaθe/ · PT: [por ké no eskútcha · núnka lo áthe]
«¿Será suficiente?» / «Debería serlo.» — "Será suficiente?" / "Deveria ser."
IPA: /seˈɾa sufiˈθjente · deβeˈɾia ˈseɾlo/ · PT: [será sufithIénte · debería sérlo]
«¿Pidieron perdón?» / «No, deberían haberlo hecho.» — "Eles pediram desculpa?" / "Não, deveriam ter pedido."
IPA: /piˈðjeɾon peɾˈðon · no deβeˈɾian aˈβeɾlo ˈetʃo/ · PT: [pidiéron perdón · no debérian abérlo étcho]
«¿Se congelaba el río?» / «Sí, cada invierno.» — "O rio congelava?" / "Sim, todo inverno."
IPA: /se konxeˈlaβa el ˈrio · si ˈkaða imˈbjeɾno/ · PT: [se konrrelába el río · sí káda imbiérno]
«¿Llevo algo?» / «No, está bien.» — "Levo alguma coisa?" / "Não, tá tudo bem."
IPA: /ˈʎeβo ˈalɣo · no esˈta bjen/ · PT: [lhébo álgo · no está bién]
«¿Está aquí el paquete?» / «Debería llegar hoy.» — "O pacote chegou?" / "Deveria chegar hoje."
IPA: /esˈta aˈki el paˈkete · deβeˈɾia ʎeˈɣaɾ oi/ · PT: [está akí el pakéte · debería lhegár ôi]
«¿Estarías de acuerdo?» / «Tendría que estarlo, sí.» — "Você concordaria?" / "Teria que concordar, sim."
IPA: /estaˈɾias de aˈkweɾðo · tenˈdɾia ke esˈtaɾlo si/ · PT: [estarías de akuérdo · tendría ke estárlo sí]
«¿Y si necesito ayuda?» / «Llámame si la necesitas.» — "E se eu precisar de ayuda?" / "Me ligue se precisar."
IPA: /i si neθeˈsito aˈʝuða · ˈʎamame si la neθeˈsitas/ · PT: [i si nethesíto aiúda · lhámame si la nethesítas]
«¿Se disculpó?» / «Habría pensado que sí.» — "Ele se desculpou?" / "Eu teria pensado que sim."
IPA: /se diskulˈpo · aˈβɾia penˈsaðo ke si/ · PT: [se diskulpó · abría pensádo ke sí]
«¿Esperamos?» / «Sí, por si acaso.» — "Esperamos?" / "Sim, por precaução."
IPA: /espeˈɾamos · si poɾ si aˈkaso/ · PT: [esperámos · sí por si akáso]
«¿Por qué no abre la puerta?» / «Está atascada.» — "Por que a porta não abre?" / "Está emperrada."
IPA: /poɾ ke no ˈaβɾe la ˈpweɾta · esˈta atasˈkaða/ · PT: [por ké no ábre la puérta · está ataskáda]
«¿Habrías venido?» / «Si lo hubiera sabido, sí.» — "Você teria vindo?" / "Se eu soubesse, sim."
IPA: /aˈβɾias beˈniðo · si lo uˈβjeɾa saˈβiðo si/ · PT: [abrías benído · si lo ubiéra sabído sí]
«¿Es esencial?» / «Sí, debemos actuar ya.» — "É essencial?" / "Sim, devemos agir já."
IPA: /es esenˈθjal · si deˈβemos akˈtwaɾ ʝa/ · PT: [és esenthIál · sí debémos aktuár ia]
«¿Me preocupo?» / «No, no deberías.» — "Devo me preocupar?" / "Não, não deveria."
IPA: /me pɾeoˈkupo · no no deβeˈɾias/ · PT: [me preokúpo · no no deberías]
`;

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const items = [];
let i = 0;
let cardCounter = 1;

while (i < lines.length) {
  let line = lines[i];
  if (line.match(/^([a-zA-ZÀ-ÿ0-9-.\/]*\s*(WILL|WOULD|SHOULD|Resumo|Problemas|Suposições|Lembranças|Situações|Conselhos|Expectativas|Arrependimentos|Pedidos|Um poco|Um pouco|Perguntas|Conectores|As mais ricas).*)/i) && !line.includes('—')) {
    i++;
    continue;
  }
  
  if (line.includes('—')) {
    let wordPart = line.split('—')[0].trim();
    let transPart = line.split('—')[1].trim();
    wordPart = wordPart.replace(/^\d+\.\s*/, '').trim();
    if (i + 1 < lines.length && lines[i+1].startsWith('IPA:')) {
      let nextLine = lines[i+1];
      let ipaMatch = nextLine.match(/IPA:\s*(.*?)\s*·\s*PT:\s*(.*)/);
      if (ipaMatch) {
        items.push({
          id: `lesson_3_grammar_c1_es_card_${cardCounter++}`,
          word: wordPart,
          translation: transPart,
          pronunciation: ipaMatch[1].trim(),
          portuguesePhonetic: ipaMatch[2].trim()
        });
        i += 2;
        continue;
      }
    }
  }
  i++;
}

fs.writeFileSync('public/decks/leccion_3_gramatica_c1_s_es.json', JSON.stringify(items, null, 2));
console.log('Created leccion_3_gramatica_c1_s_es.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['leccion_3_gramatica_c1_s']) {
  meta['leccion_3_gramatica_c1_s'] = {};
}
meta['leccion_3_gramatica_c1_s'].es = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
