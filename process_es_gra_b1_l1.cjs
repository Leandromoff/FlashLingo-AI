const fs = require('fs');

const raw = `Trabajo en una oficina. — Eu trabalho num escritório. (presente)
IPA: /tɾaˈβaxo en una ofiˈθina/ · PT: [trabárro en úna ofithína]
Estoy trabajando ahora mismo. — Eu estou trabalhando agora. (contínuo)
IPA: /esˈtoi tɾaβaˈxando aˈoɾa ˈmizmo/ · PT: [estôi trabarrándo aóra mízmo]
Él trabaja cada día. — Ele trabalha todo dia. (presente)
IPA: /el tɾaˈβaxa ˈkaða ˈdia/ · PT: [él trabárra káda día]
Él está trabajando hoy. — Ele está trabalhando hoje. (contínuo)
IPA: /el esˈta tɾaβaˈxando oi/ · PT: [él está trabarrándo ôi]


Negativa
5. No trabajo los domingos. — Eu não trabalho aos domingos.
IPA: /no tɾaˈβaxo los doˈmiŋɡos/ · PT: [no trabárro los domíngos]
6. No estoy trabajando hoy. — Eu não estou trabalhando hoje.
IPA: /no esˈtoi tɾaβaˈxando oi/ · PT: [no estôi trabarrándo ôi]
7. Ella no trabaja aquí. — Ela não trabalha aqui.
IPA: /ˈeʎa no tɾaˈβaxa aˈki/ · PT: [élha no trabárra akí]
8. Ella no está trabajando ahora mismo. — Ela não está trabajando agora.
IPA: /ˈeʎa no esˈta tɾaβaˈxando aˈoɾa ˈmizmo/ · PT: [élha no está trabarrándo aóra mízmo]

Pergunta e resposta curta
9. ¿Trabajas aquí? — Você trabalha aqui?
IPA: /tɾaˈβaxas aˈki/ · PT: [trabárras akí]
10. ¿Estás trabajando ahora? — Você está trabalhando agora?
IPA: /esˈtas tɾaβaˈxando aˈoɾa/ · PT: [estás trabarrándo aóra]
11. Sí. — Sim, trabalho.
IPA: /si/ · PT: [sí]
12. Sí, estoy. — Sim, estou.
IPA: /si esˈtoi/ · PT: [sí estôi]

Hábitos vs. ação agora
13. Me lavo el pelo todos los días. — Eu lavo o cabelo todo dia.
IPA: /me ˈlaβo el ˈpelo ˈtoðos los ˈdias/ · PT: [me lábo el pélo tódos los días]
14. No puedo hablar. Me estoy cepillando los dientes. — Não posso falar. Estou escovando os dentes.
IPA: /no ˈpweðo aˈβlaɾ me esˈtoi θepiˈʎando los ˈdjentes/ · PT: [no puédo ablár me estôi thepilhándo los diéntes]

Fatos vs. temporário
15. Tengo un hermano. Vive en París. — Eu tenho um irmão. Ele mora em Paris.
IPA: /ˈteŋɡo un eɾˈmano ˈbiβe en paˈɾis/ · PT: [téngo un ermáno bíbe en parís]
16. Estoy viviendo con mis primos hasta encontrar un piso. — Estou morando com meus primos até encontrar um apartamento.
IPA: /esˈtoi biˈβjendo kon mis ˈpɾimos ˈasta eŋkonˈtɾaɾ un ˈpiso/ · PT: [estôi bibiéndo kon mis prímos ásta enkontrár un píso]

Verbos de estado vs. mudança
17. Dame el dinero. Lo necesito ahora. — Me dá o dinheiro. Preciso agora.
IPA: /ˈdame el diˈneɾo lo neθeˈsito aˈoɾa/ · PT: [dáme el dinéro lo nethesíto aóra]
18. El clima está cambiando muy rápido. — O clima está mudando muito rápido.
IPA: /el ˈklima esˈta kamˈbjando mui ˈrapiðo/ · PT: [el klíma está kambiándo múi rrápido]

Futuro: aqui o espanhol usa o presente simples!
19. El tren sale a las cuatro. — O trem sai às quatro.
IPA: /el tɾen ˈsale a las ˈkwatɾo/ · PT: [el trén sále a las kuátro]
20. Quedo con Juan esta tarde. — Vou encontrar o Juan hoje à tarde. (presente para o futuro combinado — não precisa de gerundio!)
IPA: /ˈkeðo kon ˈxwan ˈesta ˈtaɾðe/ · PT: [kédo kon rruán ésta tárde]

Consolidação
21. El agua hierve a 100 grados. — A água ferve a 100 graus.
IPA: /el ˈaɣwa ˈʝeɾβe a θjen ˈɡɾaðos/ · PT: [el água iérbe a thién grádos]
22. Tu inglés está mejorando. — Seu inglês está melhorando.
IPA: /tu iŋˈɡles esˈta mexoˈɾando/ · PT: [tu inglés está merroándo]
23. ¿Qué pasó? Pareces triste. — O que aconteceu? Você parece triste.
IPA: /ke paˈso paˈɾeθes ˈtɾiste/ · PT: [ke pasó parethes tríste]
24. Estoy leyendo un libro nuevo. ¡Me encanta! — Estou lendo um livro novo. Estou amando!
IPA: /esˈtoi leˈʝendo un ˈliβɾo ˈnweβo me eŋˈkanta/ · PT: [estôi leiéndo un líbro nuébo me enkánta]
25. Presente = hábitos, hechos, estados, y futuro combinado. Continuo = ahora, temporal, cambiando. — Presente = hábitos, fatos, estados e futuro combinado. Contínuo = agora, temporário, em mudança.
IPA: /pɾeˈsente ˈaβitos ˈetʃos esˈtaðos i fuˈtuɾo komˈbinaðo konˈtinwo aˈoɾa tempoˈɾal kamˈbjando/ · PT: [preSénte ábitos étchos estádos i futúro kombinádo kontínuo aóra temporál kambiándo]


26. Normalmente me levanto a las siete. — Eu geralmente acordo às sete.
IPA: /noɾˈmalmente me leˈβanto a las ˈsjete/ · PT: [normalménte me lebánto a las siéte]
27. Pero hoy me estoy levantando tarde. — Mas hoje estou acordando tarde.
IPA: /ˈpeɾo oi me esˈtoi leβanˈtando ˈtaɾðe/ · PT: [péro ôi me estôi lebantándo tárde]
28. Normalmente no bebo té, pero estoy bebiendo un poco ahora. — Eu geralmente não tomo chá, mas estou tomando um pouco agora.
IPA: /noɾˈmalmente no ˈbeβo te ˈpeɾo esˈtoi beˈβjendo un ˈpoko aˈoɾa/ · PT: [normalménte no bébo té péro estôi bebiéndo un póko aóra]

No trabajo
29. Trabaja desde casa tres días a la semana. — Ela trabalha de casa três dias por semana.
IPA: /tɾaˈβaxa ˈdezðe ˈkasa tɾes ˈdias a la seˈmana/ · PT: [trabárra désde kása trés días a la semána]
30. Esta semana está trabajando desde la oficina. — Esta semana, ela está trabalhando do escritório.
IPA: /ˈesta seˈmana esˈta tɾaβaˈxando ˈdezðe la ofiˈθina/ · PT: [ésta semána está trabarrándo désde la ofithína]
31. ¿Suele terminar a las cinco? — Ele geralmente termina às cinco?
IPA: /ˈswele teɾmiˈnaɾ a las ˈθiŋko/ · PT: [suéle terminár a las thínko]

Na cozinha
32. Cocina la cena cada noche. — Ela cozinha o jantar toda noite.
IPA: /koˈθina la ˈθena ˈkaða ˈnotʃe/ · PT: [kothína la théna káda nótche]
33. Está cocinando algo especial esta noche. — Ela está cozinhando algo especial hoje à noite.
IPA: /esˈta koθiˈnando ˈalɣo espeˈθjal ˈesta ˈnotʃe/ · PT: [está kothinándo álgo espethiál ésta nótche]

Academia
34. Va al gimnasio tres veces a la semana. — Ele vai à academia três vezes por semana.
IPA: /ba al ximˈnasjo tɾes ˈbeθes a la seˈmana/ · PT: [ba al rrimnásio trés bétches a la semána]
35. Está probando una nueva rutina este mes. — Ele está tentando um novo treino este mês.
IPA: /esˈta pɾoˈβando una ˈnweβa ruˈtina ˈeste mes/ · PT: [está probándo úna nuéba rrutína éste més]

Viajando / futuro
36. El avión sale a las nueve. — O avião sai às nove. (programado)
IPA: /el aˈβjon ˈsale a las ˈnweβe/ · PT: [el abión sále a las nuébe]
37. Viajamos a Roma el mes que viene. — Nós vamos viajar para Roma no próximo mês. (presente para o combinado)
IPA: /bjaˈxamos a ˈroma el mes ke ˈbjene/ · PT: [biarrámos a rróma el més ke biéne]

Estudando
38. Estudia cada noche después de cenar. — Ela estuda toda noite depois do jantar.
IPA: /esˈtuðja ˈkaða ˈnotʃe desˈpwes de θeˈnaɾ/ · PT: [estúdia káda nótche después de thenár]
39. Está estudiando para un examen importante ahora mismo. — Ela está estudando para uma prova importante agora.
IPA: /esˈta estuˈðjando ˈpaɾa un eɣˈsamen impoɾˈtante aˈoɾa ˈmizmo/ · PT: [está estudiándo pára un eksámen importánte aóra mízmo]

Compras / mercado
40. Vamos a comprar los sábados. — A gente vai fazer compras aos sábados.
IPA: /ˈbamos a komˈpɾaɾ los ˈsaβaðos/ · PT: [bámos a komprár los sábados]
41. Estoy comprando comida en este momento. — Estou comprando mantimentos no momento.
IPA: /esˈtoi komˈpɾando koˈmiða en ˈeste moˈmento/ · PT: [estôi komprándo komída en éste moménto]

Saindo com amigos
42. Quedamos cada viernes. — A gente se encontra toda sexta.
IPA: /keˈðamos ˈkaða ˈbjeɾnes/ · PT: [kedámos káda biérnes]
43. Quedo con ellos en la cafetería esta noche. — Vou encontrá-los no café hoje à noite. (presente para o futuro combinado)
IPA: /ˈkeðo kon ˈeʎos en la kafeteˈɾia ˈesta ˈnotʃe/ · PT: [kédo kon élhos en la kafetería ésta nótche]

Tempo e clima
44. Normalmente llueve en abril. — Geralmente chove em abril.
IPA: /noɾˈmalmente ˈʎweβe en aˈβɾil/ · PT: [normalménte lhuébe en abríl]
45. Está lloviendo ahora mismo. — Está chovendo agora.
IPA: /esˈta ʎoˈβjendo aˈoɾa ˈmizmo/ · PT: [está lhobiéndo aóra mízmo]

Em casa relaxando
46. Leo antes de dormir cada noche. — Eu leio antes de dormir toda noite.
IPA: /ˈleo ˈantes de doɾˈmiɾ ˈkaða ˈnotʃe/ · PT: [léo ántes de dormír káda nótche]
47. Estoy leyendo un libro genial esta semana. — Estou lendo um livro ótimo esta semana.
IPA: /esˈtoi leˈʝendo un ˈliβɾo xeˈnjal ˈesta seˈmana/ · PT: [estôi leiéndo un líbro rrenIál ésta semána]

No médico
48. Va al médico dos veces al año. — Ela vai ao médico duas vezes por ano.
IPA: /ba al ˈmeðiko dos ˈbeθes al ˈaɲo/ · PT: [ba al médiko dos bétches al ánho]
49. El médico la está examinando ahora. — O médico está examinando ela agora.
IPA: /el ˈmeðiko la esˈta eɣsamiˈnando aˈoɾa/ · PT: [el médiko la está eksaminándo aóra]

Consolidação final
50. ¿Qué sueles hacer los fines de semana? ¿Qué vas a hacer este fin de semana? — O que você geralmente faz nos fins de semana? O que você vai fazer neste fim de semana?
IPA: /ke ˈsweles aˈθeɾ los ˈfines de seˈmana ke bas a aˈθeɾ ˈeste fin de seˈmana/ · PT: [ke suéles athér los fínes de semána ke bas a athér éste fin de semána]


51. Trabaja duro. — Ela trabalha duro.
IPA: /tɾaˈβaxa ˈduɾo/ · PT: [trabárra dúro]
52. Está durmiendo. — Ela está dormindo.
IPA: /esˈta duɾˈmjendo/ · PT: [está durmiéndo]
53. Estudiamos mucho. — A gente estuda muito.
IPA: /estuˈðjamos ˈmutʃo/ · PT: [estudiámos mútcho]
54. Estamos estudiando ahora. — A gente está estudando agora.
IPA: /esˈtamos estuˈðjando aˈoɾa/ · PT: [estámos estudiándo aóra]

Um poco mais
55. ¿Le gusta su trabajo? — Ela gosta do trabalho dela?
IPA: /le ˈɡusta su tɾaˈβaxo/ · PT: [le gústa su trabárro]
56. ¿Le está gustando su nuevo trabajo? — Ela está gostando do novo trabalho?
IPA: /le esˈta ɣusˈtando su ˈnweβo tɾaˈβaxo/ · PT: [le está gustándo su nuébo trabárro]
57. No cocina a menudo. — Ele não cozinha com frequência.
IPA: /no koˈθina a meˈnuðo/ · PT: [no kothína a menúdo]
58. No está cocinando hoy. — Ele não está cozinhando hoje.
IPA: /no esˈta koθiˈnando oi/ · PT: [no está kothinándo ôi]

Perguntas e negações
59. ¿No sueles trabajar los viernes? — Você não trabalha normalmente às sextas?
IPA: /no ˈsweles tɾaβaˈxaɾ los ˈbjeɾnes/ · PT: [no suéles trabarrár los biérnes]
60. ¿No estás trabajando hoy? — Você não está trabajando hoje?
IPA: /no esˈtas tɾaβaˈxando oi/ · PT: [no estás trabarrándo ôi]
61. ¿Por qué no contesta? — Por que ele não atende?
IPA: /poɾ ke no konˈtesta/ · PT: [por ké no kontésta]
62. ¿Por qué no está contestando ahora? — Por que ele não está atendendo agora?
IPA: /poɾ ke no esˈta kontesˈtando aˈoɾa/ · PT: [por ké no está kontestándo aóra]

Conectores e tempos verbais
63. Normalmente va andando al trabajo, pero hoy va en coche porque llueve. — Ela geralmente vai a pé ao trabalho, mas hoje está indo de carro porque está chovendo.
IPA: /noɾˈmalmente ba anˈdando al tɾaˈβaxo ˈpeɾo oi ba en ˈkotʃe ˈpoɾke ˈʎweβe/ · PT: [normalménte ba andándo al trabárro péro ôi ba en kótche pórke lhuébe]
64. Normalmente no como carne, pero la estoy probando hoy porque la cocinó mi amigo. — Eu geralmente não como carne, mas estou experimentando hoje porque meu amigo cozinhou.
IPA: /noɾˈmalmente no ˈkomo ˈkaɾne ˈpeɾo la esˈtoi pɾoˈβando oi ˈpoɾke la koˈθino mi aˈmiɣo/ · PT: [normalménte no kómo kárne péro la estôi probándo ôi pórke la kothinó mi amígo]
65. Necesita ayuda porque no entiende las instrucciones. — Ele precisa de ajuda porque não entende as instruções.
IPA: /neθeˈsita aˈʝuða ˈpoɾke no enˈtjende las instɾukˈθjones/ · PT: [nethesíta aiúda pórke no entiénde las instruktiónes]
66. Cuando está estudiando, no le gusta que la interrumpan. — Quando ela está estudando, ela não gosta de ser interrompida.
IPA: /ˈkwando esˈta estuˈðjando no le ˈɡusta ke la interumˈpan/ · PT: [kuándo está estudiándo no le gústa ke la interrúmpan]
67. Normalmente vive en Londres, pero está viviendo en Madrid este año. — Ele geralmente mora em Londres, mas está morando em Madri este ano.
IPA: /noɾˈmalmente ˈbiβe en ˈlondɾes ˈpeɾo esˈta biˈβjendo en maˈðɾið ˈeste ˈaɲo/ · PT: [normalménte bíbe en lóndres péro está bibiéndo en madríd éste ánho]

As mais ricas
68. Normalmente no hace ejercicio por la mañana, pero lo está probando este mes para ver si ayuda. — Ela geralmente não se exercita de manhã, mas está tentando isso este mês para ver se ajuda.
IPA: /noɾˈmalmente no ˈaθe exeɾˈθiθjo poɾ la maˈɲana ˈpeɾo lo esˈta pɾoˈβando ˈeste mes ˈpaɾa beɾ si aˈʝuða/ · PT: [normalménte no áthe errertsíthio por la manhána péro lo está probándo éste més pára ber si aiúda]
69. ¿Siempre viaja tanto, o solo está visitando a la familia este mes? — Ele sempre viaja tanto assim, ou está só visitando a família este mês?
IPA: /ˈsjempɾe ˈbjaxa ˈtanto o ˈsolo esˈta bisiˈtando a la faˈmilja ˈeste mes/ · PT: [siémpre biárra tánto o sólo está bisitándo a la famílha éste més]
70. Normalmente no comen fuera, pero están celebrando una ocasión especial esta noche. — Eles geralmente não comem fora, mas estão comemorando uma ocasião especial hoje à noite.
IPA: /noɾˈmalmente no ˈkomen ˈfweɾa ˈpeɾo esˈtan θeleˈβɾando una okaˈsjon espeˈθjal ˈesta ˈnotʃe/ · PT: [normalménte no kómen fuéra péro están thelebrándo úna okasión espethiál ésta nótche]
71. La empresa normalmente no contrata en diciembre, pero está contratando ahora por la alta demanda. — A empresa geralmente não contrata em dezembro, mas está contratando agora por causa da alta demanda.
IPA: /la emˈpɾesa noɾˈmalmente no kontɾaˈta en diˈθjembɾe ˈpeɾo esˈta kontɾaˈtando aˈoɾa poɾ la ˈalta deˈmanda/ · PT: [la empréza normalménte no kontratá en dithiémbre péro está kontratándo aóra por la álta demánda]
72. No contesta porque está conduciendo, pero normalmente responde rápido. — Ela não está atendendo porque está dirigindo, mas geralmente responde rápido.
IPA: /no konˈtesta ˈpoɾke esˈta konduˈθjendo ˈpeɾo noɾˈmalmente resˈponde ˈrapiðo/ · PT: [no kontésta pórke está kondutiéndo péro normalménte respónde rrápido]
73. Normalmente pasamos los fines de semana en casa, pero vamos a la playa este sábado porque es festivo. — A gente geralmente passa os fins de semana em casa, mas vamos à praia neste sábado porque é feriado.
IPA: /noɾˈmalmente paˈsamos los ˈfines de seˈmana en ˈkasa ˈpeɾo ˈbamos a la ˈplaʝa ˈeste ˈsaβaðo ˈpoɾke es fesˈtiβo/ · PT: [normalménte pasámos los fínes de semána en kása péro bámos a la pláia éste sábado pórke és festíbo]
74. ¿Por qué no está trabajando hoy, si normalmente nunca falta? — Por que ela não está trabalhando hoje, sendo que geralmente nunca falta?
IPA: /poɾ ke no esˈta tɾaβaˈxando oi si noɾˈmalmente ˈnuŋka ˈfalta/ · PT: [por ké no está trabarrándo ôi si normalménte núnka fálta]
75. Normalmente cocina él, pero esta noche cocino yo porque es su cumpleaños. — Ele geralmente cozinha o jantar, mas hoje à noite estou cozinhando porque é aniversário dele.
IPA: /noɾˈmalmente koˈθina el ˈpeɾo ˈesta ˈnotʃe koˈθino ʝo ˈpoɾke es su kumpleˈaɲos/ · PT: [normalménte kothína él péro ésta nótche kothíno io pórke és su kumpleánhos]



¿Trabajas aquí? / Sí. — Você trabalha aqui? / Sim, trabalho.
IPA: /tɾaˈβaxas aˈki · si/ · PT: [trabárras akí · sí]
¿Estás trabajando ahora? / Sí. — Você está trabalhando agora? / Sim, estou.
IPA: /esˈtas tɾaβaˈxando aˈoɾa · si/ · PT: [estás trabarrándo aóra · sí]
¿Qué estás haciendo? / Estoy cocinando. — O que você está fazendo? / Estou cozinhando.
IPA: /ke esˈtas aˈθjendo · esˈtoi koθiˈnando/ · PT: [ke estás athiéndo · estôi kothinándo]
¿A qué te dedicas? / Soy profesor. — O que você faz? / Sou professor.
IPA: /a ke te deˈðikas · soi pɾofeˈsoɾ/ · PT: [a ke te dedíkas · sôi profesór]
¿Trabaja los fines de semana? / No. — Ela trabalha nos fins de semana? / Não, não trabalha.
IPA: /tɾaˈβaxa los ˈfines de seˈmana · no/ · PT: [trabárra los fínes de semána · no]
¿Está trabajando hoy? / No. — Ela está trabalhando hoje? / Não, não está.
IPA: /esˈta tɾaβaˈxando oi · no/ · PT: [está trabarrándo ôi · no]
¿Con qué frecuencia haces ejercicio? / Dos veces a la semana. — Com que frequência você se exercita? / Duas vezes por semana.
IPA: /kon ke fɾeˈkwenθja ˈaθes exeɾˈθiθjo · dos ˈbeθes a la seˈmana/ · PT: [kon ke frekuéntia áthes errertsíthio · dos bétches a la semána]
¿Estás haciendo ejercicio ahora? / Sí, en el gimnasio. — Você está se exercitando agora? / Sim, na academia.
IPA: /esˈtas aˈθjendo exeɾˈθiθjo aˈoɾa · si en el ximˈnasjo/ · PT: [estás athiéndo errertsíthio aóra · sí en el rrimnásio]
¿Cierra pronto la tienda? / Sí, a las seis. — A loja fecha cedo? / Sim, às seis.
IPA: /ˈθjera ˈpɾonto la ˈtjenda · si a las ˈsejs/ · PT: [thiérra prónto la tiénda · sí a las séis]
¿Está cerrando la tienda ahora? / Sí, ahora mismo. — A loja está fechando agora? / Sim, agora mesmo.
IPA: /esˈta θeˈrando la ˈtjenda aˈoɾa · si aˈoɾa ˈmizmo/ · PT: [está therrándo la tiénda aóra · sí aóra mízmo]
¿A qué hora sale el tren? / A las cuatro. — A que horas o trem sai? / Às quatro.
IPA: /a ke ˈoɾa ˈsale el tɾen · a las ˈkwatɾo/ · PT: [a ke óra sále el trén · a las kuátro]
¿Te vas ahora? / Sí, ahora mismo. — Você está saindo agora? / Sim, agora mesmo.
IPA: /te bas aˈoɾa · si aˈoɾa ˈmizmo/ · PT: [te bas aóra · sí aóra mízmo]
¿Tienes hermanos? / Sí, uno. — Você tem algum irmão? / Sim, um.
IPA: /ˈtjenes eɾˈmanos · si ˈuno/ · PT: [tiénes ermános · sí úno]
¿Te lo estás pasando bien? / Sí, genial. — Você está se divertindo? / Sim, muito.
IPA: /te lo esˈtas paˈsando bjen · si xeˈnjal/ · PT: [te lo estás pasándo bién · sí rrenIál]
¿Te gusta el café? / Sí, me encanta. — Você gosta de café? / Sim, eu adoro.
IPA: /te ˈɡusta el kaˈfe · si me eŋˈkanta/ · PT: [te gústa el kafé · sí me enkánta]
¿Quedas con Juan hoy? / Sí, esta tarde. — Você vai encontrar o Juan hoje? / Sim, hoje à tarde.
IPA: /ˈkeðas kon ˈxwan oi · si ˈesta ˈtaɾðe/ · PT: [kédas kon rruán ôi · sí ésta tárde]
¿Qué tiempo hace hoy? / Está lloviendo. — Como está o tempo hoje? / Está chovendo.
IPA: /ke ˈtjempo ˈaθe oi · esˈta ʎoˈβjendo/ · PT: [ke tiémpo áthe ôi · está lhobiéndo]
¿Suele llover aquí? / Sí, mucho. — Costuma chover aqui? / Sim, bastante.
IPA: /ˈswele ʎoˈβeɾ aˈki · si ˈmutʃo/ · PT: [suéle lhobér akí · sí mútcho]
¿Está mejorando tu inglés? / Sí, un poco. — Seu inglês está melhorando? / Sim, um pouco.
IPA: /esˈta mexoˈɾando tu iŋˈɡles · si un ˈpoko/ · PT: [está merroándo tu inglés · sí un póko]
¿Necesitas ayuda? / Sí, por favor. — Você precisa de ayuda? / Sim, por favor.
IPA: /neθeˈsitas aˈʝuða · si poɾ faˈβoɾ/ · PT: [nethesítas aiúda · sí por fabór]
¿Qué estás leyendo? / Una novela genial. — O que você está lendo? / Um ótimo romance.
IPA: /ke esˈtas leˈʝendo · una noˈβela xeˈnjal/ · PT: [ke estás leiéndo · úna nobéla rrenIál]
¿Viajas mucho? / No mucho. — Você viaja muito? / Não normalmente.
IPA: /ˈbjaxas ˈmutʃo · no ˈmutʃo/ · PT: [biárras mútcho · no mútcho]
¿Viajas el mes que viene? / Sí, a Roma. — Você vai viajar no mês que vem? / Sim, para Roma.
IPA: /ˈbjaxas el mes ke ˈbjene · si a ˈroma/ · PT: [biárras el més ke biéne · sí a rróma]
¿Qué pasó? Pareces triste. / Solo estoy cansado. — O que aconteceu? Você parece triste. / Só estou cansado.
IPA: /ke paˈso paˈɾeθes ˈtɾiste ˈsolo esˈtoi kanˈsaðo/ · PT: [ke pasó parethes tríste sólo estôi kansádo]
¿Te encuentras bien? / Sí, mucho mejor ahora. — Você está se sentindo bem? / Sim, bem melhor agora.
IPA: /te eŋˈkwentɾas bjen · si ˈmutʃo meˈxoɾ aˈoɾa/ · PT: [te enkuéntras bién · sí mútcho merrór aóra]
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
      id: `leccion_1_gramatica_b1_s_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/leccion_1_gramatica_b1_s_es.json', JSON.stringify(deck, null, 2));
console.log(`Created leccion_1_gramatica_b1_s_es.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}

if (!metadata['leccion_1_gramatica_b1_s']) {
  metadata['leccion_1_gramatica_b1_s'] = { cardCount: 0, en: 0, es: 0 };
}
metadata['leccion_1_gramatica_b1_s'].cardCount = deck.length;
metadata['leccion_1_gramatica_b1_s'].es = deck.length;

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
