const fs = require('fs');

const raw = `He will be a good doctor. — Ele vai ser um bom médico.
IPA: /hiː wɪl biː ə ɡʊd ˈdɑːktər/ · PT: [rrí uíou bí a gúd dáktor]
I believe they will win this match. — Eu acredito que eles vão ganhar essa partida.
IPA: /aɪ bɪˈliːv ðeɪ wɪl wɪn ðɪs mætʃ/ · PT: [ái bilív dhêi uíou uín dhís métch]


WILL — decisão instantânea
3. We don't have sugar. I'll buy some. — A gente não tem açúcar. Eu vou comprar.
IPA: /wiː doʊnt hæv ˈʃʊɡər aɪl baɪ sʌm/ · PT: [uí dôunt rrév chúgar áiou bái sâm]

WILL — promessa e recusa
4. I will help you, but I won't lend you any money. — Eu vou te ajudar, mas não vou te emprestar dinheiro.
IPA: /aɪ wɪl hɛlp juː bʌt aɪ woʊnt lɛnd juː ˈɛni ˈmʌni/ · PT: [ái uíou rrélp iú bât ái uôunt lénd iú éni mâni]

WILL — oferta
5. I'll carry your bag. — Eu carrego sua bolsa.
IPA: /aɪl ˈkæri jɔːr bæɡ/ · PT: [áiou kéri iór bég]

WILL — sugestão
6. Shall we eat out today? — Vamos comer fora hoje?
IPA: /ʃæl wiː iːt aʊt təˈdeɪ/ · PT: [chél uí ít áut tudêi]

WILL — pedido
7. Will you open the door, please? — Você abre a porta, por favor?
IPA: /wɪl juː ˈoʊpən ðə dɔːr pliːz/ · PT: [uíou iú ôupan dha dór plíz]

BE GOING TO — previsão com evidência
8. Slow down! We're going to have an accident! — Diminua! Nós vamos ter um acidente!
IPA: /sloʊ daʊn wɪr ˈɡoʊɪŋ tə hæv ən ˈæksɪdənt/ · PT: [slôu dáun uír gôuin tu rrév an éksident]
9. Look at the clouds. It's going to rain. — Olha as nuvens. Vai chover.
IPA: /lʊk æt ðə klaʊdz ɪts ˈɡoʊɪŋ tə reɪn/ · PT: [lúk ét dha kláudz íts gôuin tu rêin]

BE GOING TO — decisão já tomada
10. Are you going to watch the game tonight? — Você vai assistir ao jogo hoje à noite?
IPA: /ɑːr juː ˈɡoʊɪŋ tə wɑːtʃ ðə ɡeɪm təˈnaɪt/ · PT: [ár iú gôuin tu uátch dha guêim tunáit]

PRESENT SIMPLE — eventos programados
11. The train leaves at four o'clock. — O trem sai às quatro horas.
IPA: /ðə treɪn liːvz æt fɔːr əˈklɑːk/ · PT: [dha trêin lívz ét fór aklák]
12. The exams start next week. — As provas começam semana que vem.
IPA: /ðiː ɪɡˈzæmz stɑːrt nɛkst wiːk/ · PT: [dhi igzémz stárt nékst uík]

PRESENT SIMPLE — orações de tempo futuro
13. I'll retire when I am 70. — Eu vou me aposentar quando fizer 70. (não "when I will be 70")
IPA: /aɪl rɪˈtaɪər wɛn aɪ æm ˈsɛvn̩ti/ · PT: [áiou ritáier uén ái ém sévanti]
14. Call me as soon as you arrive. — Me liga assim que você chegar.
IPA: /kɔːl miː æz suːn æz juː əˈraɪv/ · PT: [kól mí éz sún éz iú aráiv]

PRESENT CONTINUOUS — planos combinados
15. I'm flying to New York tomorrow morning. — Eu vou voar para Nova York amanhã de manhã.
IPA: /aɪm ˈflaɪɪŋ tə nuː jɔːrk təˈmɑːroʊ ˈmɔːrnɪŋ/ · PT: [áim fláiin tu niú iórk tumárou mórnin]
16. I'm seeing the dentist at six. — Eu tenho consulta com o dentista às seis.
IPA: /aɪm ˈsiːɪŋ ðə ˈdɛntɪst æt sɪks/ · PT: [áim síin dha déntist ét síks]
17. We are getting married next week. — Nós vamos nos casar semana que vem.
IPA: /wiː ɑːr ˈɡɛtɪŋ ˈmɛrid nɛkst wiːk/ · PT: [uí ár guétin mérid nékst uík]

MAY/MIGHT — possibilidade
18. I might go to the party tomorrow; I'm not sure. — Talvez eu vá à festa amanhã; não tenho certeza.
IPA: /aɪ maɪt ɡoʊ tə ðə ˈpɑːrti təˈmɑːroʊ aɪm nɑːt ʃʊr/ · PT: [ái máit gôu tu dha párti tumárou áim nót chúr]
19. Temperatures might go up next week. — As temperaturas talvez subam semana que vem.
IPA: /ˈtɛmprətʃərz maɪt ɡoʊ ʌp nɛkst wiːk/ · PT: [témpratchers máit gôu âp nékst uík]

Consolidação
20. He'll help you. — Ele vai te ajudar. (promessa espontânea)
IPA: /hiːl hɛlp juː/ · PT: [rríou rrélp iú]
21. He's going to help you. — Ele vai te ajudar. (já planejado)
IPA: /hiːz ˈɡoʊɪŋ tə hɛlp juː/ · PT: [rríz gôuin tu rrélp iú]
22. The movie starts at eight. — O filme começa às oito. (programado)
IPA: /ðə ˈmuːvi stɑːrts æt eɪt/ · PT: [dha múvi stárts ét êit]
23. I'm meeting her at eight. — Eu vou encontrá-la às oito. (combinado)
IPA: /aɪm ˈmiːtɪŋ hɜːr æt eɪt/ · PT: [áim mítin rrâr ét êit]
24. It may rain later. — Talvez chova mais tarde.
IPA: /ɪt meɪ reɪn ˈleɪtər/ · PT: [ít mêi rêin lêiter]
25. Five ways to talk about the future: will, be going to, present simple, present continuous, may/might. — Cinco jeitos de falar sobre o futuro: will, be going to, presente simples, presente contínuo, may/might.
IPA: /faɪv weɪz tə tɔːk əˈbaʊt ðə ˈfjuːtʃər/ · PT: [fáiv uêiz tu tók abáut dha fiútcher]


26. I'll grab my keys. — Eu vou pegar minhas chaves. (decisão na hora)
IPA: /aɪl ɡræb maɪ kiːz/ · PT: [áiou gréb mái kíz]
27. Look at that traffic! We're going to be late. — Olha esse trânsito! Vamos nos atrasar. (evidência)
IPA: /lʊk æt ðæt ˈtræfɪk wɪr ˈɡoʊɪŋ tə biː leɪt/ · PT: [lúk ét dhét tréfik uír gôuin tu bí lêit]
28. The bus leaves at 8:15. — O ônibus sai às 8:15. (programado)
IPA: /ðə bʌs liːvz æt eɪt fɪfˈtiːn/ · PT: [dha bâs lívz ét êit fiftín]

No trabalho
29. I'm meeting a client at ten. — Eu vou encontrar um cliente às dez. (combinado)
IPA: /aɪm ˈmiːtɪŋ ə ˈklaɪənt æt tɛn/ · PT: [áim mítin a kláient ét tén]
30. I'll send you the file right now. — Eu vou te mandar o arquivo agora. (decisão instantânea)
IPA: /aɪl sɛnd juː ðə faɪl raɪt naʊ/ · PT: [áiou sénd iú dha fáiou ráit náu]
31. We might finish early today. — A gente talvez termine cedo hoje.
IPA: /wiː maɪt ˈfɪnɪʃ ˈɜːrli təˈdeɪ/ · PT: [uí máit fínich ârli tudêi]

Viajando
32. We're flying to Rome next Friday. — Nós vamos voar para Roma na próxima sexta. (combinado)
IPA: /wɪr ˈflaɪɪŋ tə roʊm nɛkst ˈfraɪdeɪ/ · PT: [uír fláiin tu rrôum nékst fráidei]
33. The flight leaves at 2 p.m. — O voo sai às 14h. (programado)
IPA: /ðə flaɪt liːvz æt tuː piː ɛm/ · PT: [dha fláit lívz ét tú pí ém]
34. Look at those clouds. The flight is going to be delayed. — Olha essas nuvens. O voo vai atrasar. (evidência)
IPA: /lʊk æt ðoʊz klaʊdz ðə flaɪt ɪz ˈɡoʊɪŋ tə biː dɪˈleɪd/ · PT: [lúk ét dhôuz kláudz dha fláit iz gôuin tu bí dilêid]

No médico
35. I'm seeing the doctor at 3:30. — Eu tenho consulta com o médico às 3:30. (combinado)
IPA: /aɪm ˈsiːɪŋ ðə ˈdɑːktər æt θriː ˈθɜːrti/ · PT: [áim síin dha dáktor ét thrí thârti]
36. The doctor thinks you'll be fine. — O médico acha que você vai ficar bem. (previsão)
IPA: /ðə ˈdɑːktər θɪŋks juːl biː faɪn/ · PT: [dha dáktor thínks iúou bí fáin]

Saindo com amigos
37. We're having dinner together on Saturday. — A gente vai jantar junto no sábado. (combinado)
IPA: /wiː ɑːr ˈhævɪŋ ˈdɪnər təˈɡɛðər ɑːn ˈsætərdeɪ/ · PT: [uí ár rrévin díner taguédher ón séterdei]
38. Shall we go to the movies? — Vamos ao cinema? (sugestão)
IPA: /ʃæl wiː ɡoʊ tə ðə ˈmuːviz/ · PT: [chél uí gôu tu dha múviz]
39. I might join you later. — Talvez eu me junte a vocês mais tarde.
IPA: /aɪ maɪt dʒɔɪn juː ˈleɪtər/ · PT: [ái máit djóin iú lêiter]

Tempo e clima
40. Look at the sky. It's going to storm. — Olha o céu. Vai fazer tempestade. (evidência)
IPA: /lʊk æt ðə skaɪ ɪts ˈɡoʊɪŋ tə stɔːrm/ · PT: [lúk ét dha skái íts gôuin tu stórm]
41. It might snow this weekend. — Talvez neve neste fim de semana.
IPA: /ɪt maɪt snoʊ ðɪs ˈwiːkɛnd/ · PT: [ít máit snôu dhís uíkend]

Compras
42. I'll take this one. — Eu vou levar este. (decisão na hora)
IPA: /aɪl teɪk ðɪs wʌn/ · PT: [áiou têik dhís uân]
43. Are you going to buy the blue dress? — Você vai comprar o vestido azul? (já decidiu)
IPA: /ɑːr juː ˈɡoʊɪŋ tə baɪ ðə bluː drɛs/ · PT: [ár iú gôuin tu bái dha blú drés]

Na escola / estudando
44. The exam starts at nine sharp. — A prova começa às nove em ponto. (programado)
IPA: /ðiː ɪɡˈzæm stɑːrts æt naɪn ʃɑːrp/ · PT: [dhi igzém stárts ét náin chárp]
45. I'll study harder next semester. — Eu vou estudar mais no próximo semestre. (promessa)
IPA: /aɪl ˈstʌdi ˈhɑːrdər nɛkst sɪˈmɛstər/ · PT: [áiou stâdi rrárder nékst siméster]

No aeroporto
46. Will you help me with my bags, please? — Você me ajuda com as malas, por favor? (pedido)
IPA: /wɪl juː hɛlp miː wɪð maɪ bæɡz pliːz/ · PT: [uíou iú rrélp mí uídh mái bégz plíz]
47. The plane is going to land soon. — O avião vai pousar logo. (evidência/anúncio)
IPA: /ðə pleɪn ɪz ˈɡoʊɪŋ tə lænd suːn/ · PT: [dha plêin iz gôuin tu lénd sún]

No banco / burocracias
48. I'll call the bank tomorrow. — Eu vou ligar para o banco amanhã. (decisão)
IPA: /aɪl kɔːl ðə bæŋk təˈmɑːroʊ/ · PT: [áiou kól dha bênk tumárou]
49. My appointment is at eleven. — Minha consulta é às onze. (programado)
IPA: /maɪ əˈpɔɪntmənt ɪz æt ɪˈlɛvn̩/ · PT: [mái apóintment iz ét ilévan]

Consolidação
50. We'll see what happens. — A gente vai ver o que acontece.
IPA: /wiːl siː wʌt ˈhæpənz/ · PT: [uíou sí uât rrépanz]


51. I'll help. — Eu ajudo.
IPA: /aɪl hɛlp/ · PT: [áiou rrélp]
52. It's going to rain. — Vai chover.
IPA: /ɪts ˈɡoʊɪŋ tə reɪn/ · PT: [íts gôuin tu rêin]
53. The bus leaves at nine. — O ônibus sai às nove.
IPA: /ðə bʌs liːvz æt naɪn/ · PT: [dha bâs lívz ét náin]
54. I'm meeting her tomorrow. — Eu vou encontrá-la amanhã.
IPA: /aɪm ˈmiːtɪŋ hɜːr təˈmɑːroʊ/ · PT: [áim mítin rrâr tumárou]

Um pouco mais
55. We might be late. — Talvez a gente se atrase.
IPA: /wiː maɪt biː leɪt/ · PT: [uí máit bí lêit]
56. Are you going to tell her? — Você vai contar para ela?
IPA: /ɑːr juː ˈɡoʊɪŋ tə tɛl hɜːr/ · PT: [ár iú gôuin tu tél rrâr]
57. Shall I open the window? — Eu abro a janela?
IPA: /ʃæl aɪ ˈoʊpən ðə ˈwɪndoʊ/ · PT: [chél ái ôupan dha uíndou]
58. They won't be here on time. — Eles não vão chegar na hora.
IPA: /ðeɪ woʊnt biː hɪr ɑːn taɪm/ · PT: [dhêi uôunt bí rrír ón táim]

Perguntas e negações
59. Won't you come with us? — Você não vai vir com a gente?
IPA: /woʊnt juː kʌm wɪð ʌs/ · PT: [uôunt iú kâm uídh âs]
60. Isn't the movie starting soon? — O filme não vai começar logo?
IPA: /ˈɪznt ðə ˈmuːvi ˈstɑːrtɪŋ suːn/ · PT: [íznt dha múvi stártin sún]
61. Why aren't you going to the party? — Por que você não vai à festa?
IPA: /waɪ ɑːrnt juː ˈɡoʊɪŋ tə ðə ˈpɑːrti/ · PT: [uái árent iú gôuin tu dha párti]
62. Might it not rain after all? — Será que não vai chover afinal?
IPA: /maɪt ɪt nɑːt reɪn ˈæftər ɔːl/ · PT: [máit ít nót rêin éfter ól]

Conectores e tempos verbais
63. I'll call you as soon as I land. — Eu vou te ligar assim que eu pousar.
IPA: /aɪl kɔːl juː æz suːn æz aɪ lænd/ · PT: [áiou kól iú éz sún éz ái lénd]
64. We're going to be late because the traffic is terrible. — A gente vai se atrasar porque o trânsito está terrível.
IPA: /wɪr ˈɡoʊɪŋ tə biː leɪt bɪˈkɔːz ðə ˈtræfɪk ɪz ˈtɛrəbl̩/ · PT: [uír gôuin tu bí lêit bikóz dha tréfik iz térabou]
65. I won't leave until you arrive. — Eu não vou sair até você chegar.
IPA: /aɪ woʊnt liːv ʌnˈtɪl juː əˈraɪv/ · PT: [ái uôunt lív antíou iú aráiv]
66. When she gets here, we'll start the meeting. — Quando ela chegar aqui, a gente começa a reunião.
IPA: /wɛn ʃiː ɡɛts hɪr wiːl stɑːrt ðə ˈmiːtɪŋ/ · PT: [uén chí guéts rrír uíou stárt dha mítin]
67. I might go, but I'm not sure yet because I have a lot of work. — Talvez eu vá, mas ainda não tenho certeza porque tenho muito trabalho.
IPA: /aɪ maɪt ɡoʊ bʌt aɪm nɑːt ʃʊr jɛt bɪˈkɔːz aɪ hæv ə lɑːt əv wɜːrk/ · PT: [ái máit gôu bât áim nót chúr iét bikóz ái rrév a lát ov uârk]

As mais ricas
68. Look at that sky; it's definitely going to storm before we get home. — Olha esse céu; com certeza vai fazer tempestade antes de chegarmos em casa.
IPA: /lʊk æt ðæt skaɪ ɪts ˈdɛfɪnətli ˈɡoʊɪŋ tə stɔːrm bɪˈfɔːr wiː ɡɛt hoʊm/ · PT: [lúk ét dhét skái íts définatli gôuin tu stórm bifór uí guét rrôum]
69. I'll finish the report tonight, as soon as the kids go to bed. — Eu vou terminar o relatório hoje à noite, assim que as crianças forem dormir.
IPA: /aɪl ˈfɪnɪʃ ðə rɪˈpɔːrt təˈnaɪt æz suːn æz ðə kɪdz ɡoʊ tə bɛd/ · PT: [áiou fínich dha ripórt tunáit éz sún éz dha kídz gôu tu béd]
70. We're getting married next spring, but we haven't chosen the date yet. — Nós vamos nos casar na próxima primavera, mas ainda não escolhemos a data.
IPA: /wɪr ˈɡɛtɪŋ ˈmɛrid nɛkst sprɪŋ bʌt wiː ˈhævənt ˈtʃoʊzn̩ ðə deɪt jɛt/ · PT: [uír guétin mérid nékst sprín bât uí révent tchôuzan dha dêit iét]
71. He said he'll call when he lands, but the flight might be delayed. — Ele disse que vai ligar quando pousar, mas o voo talvez atrase.
IPA: /hiː sɛd hiːl kɔːl wɛn hiː lændz bʌt ðə flaɪt maɪt biː dɪˈleɪd/ · PT: [rrí séd rríou kól uén rrí léndz bât dha fláit máit bí dilêid]
72. I'm not going to the party tonight, because I'm meeting my sister for dinner instead. — Eu não vou à festa hoje à noite, porque vou jantar com minha irmã em vez disso.
IPA: /aɪm nɑːt ˈɡoʊɪŋ tə ðə ˈpɑːrti təˈnaɪt bɪˈkɔːz aɪm ˈmiːtɪŋ maɪ ˈsɪstər fɔːr ˈdɪnər ɪnˈstɛd/ · PT: [áim nót gôuin tu dha párti tunáit bikóz áim mítin mái síster fór díner instéd]
73. As soon as the exam is over, I'll call you to tell you how it went. — Assim que a prova terminar, eu vou te ligar para contar como foi.
IPA: /æz suːn æz ðiː ɪɡˈzæm ɪz ˈoʊvər aɪl kɔːl juː tə tɛl juː haʊ ɪt wɛnt/ · PT: [éz sún éz dhi igzém iz ôuver áiou kól iú tu tél iú rráu ít uént]
74. The company is going to hire more people next year, because business is growing fast. — A empresa vai contratar mais gente ano que vem, porque os negócios estão crescendo rápido.
IPA: /ðə ˈkʌmpəni ɪz ˈɡoʊɪŋ tə ˈhaɪər mɔːr ˈpiːpl̩ nɛkst jɪr bɪˈkɔːz ˈbɪznəs ɪz ˈɡroʊɪŋ fæst/ · PT: [dha kâmpani iz gôuin tu rráier mór pípou nékst íir bikóz bíznes iz grôuin fést]
75. I might not finish on time, unless someone helps me with the last part. — Talvez eu não termine na hora, a menos que alguém me ajude com a última parte.
IPA: /aɪ maɪt nɑːt ˈfɪnɪʃ ɑːn taɪm ʌnˈlɛs ˈsʌmwʌn hɛlps miː wɪð ðə læst pɑːrt/ · PT: [ái máit nót fínich ón táim anlés sâmuan rrélps mí uídh dha lést párt]




Will you help me? / Of course I will. — Você vai me ajudar? / Claro que vou.
IPA: /wɪl juː hɛlp miː · ʌv kɔːrs aɪ wɪl/ · PT: [uíou iú rrélp mí · ov kórs ái uíou]
Are you going to call her? / Yes, right now. — Você vai ligar para ela? / Sim, agora mesmo.
IPA: /ɑːr juː ˈɡoʊɪŋ tə kɔːl hɜːr · jɛs raɪt naʊ/ · PT: [ár iú gôuin tu kól rrâr · iés ráit náu]
What time does the train leave? / At four. — A que horas o trem sai? / Às quatro.
IPA: /wʌt taɪm dʌz ðə treɪn liːv · æt fɔːr/ · PT: [uât táim dâz dha trêin lív · ét fór]
Are you meeting anyone tonight? / Yes, an old friend. — Você vai encontrar alguém hoje à noite? / Sim, um amigo antigo.
IPA: /ɑːr juː ˈmiːtɪŋ ˈɛniwʌn təˈnaɪt · jɛs ən oʊld frɛnd/ · PT: [ár iú mítin éniuan tunáit · iés an ôuld frénd]
Do you think it will rain? / It might. — Você acha que vai chover? / Talvez.
IPA: /duː juː θɪŋk ɪt wɪl reɪn · ɪt maɪt/ · PT: [dú iú thínk ít uíou rêin · ít máit]
Shall we order pizza? / Sounds great! — Vamos pedir pizza? / Ótima ideia!
IPA: /ʃæl wiː ˈɔːrdər ˈpiːtsə · saʊndz ɡreɪt/ · PT: [chél uí órder pítsa · sáundz grêit]
Is it going to snow? / Looks like it. — Vai nevar? / Parece que sim.
IPA: /ɪz ɪt ˈɡoʊɪŋ tə snoʊ · lʊks laɪk ɪt/ · PT: [iz ít gôuin tu snôu · lúks láik ít]
When does the exam start? / At nine. — Quando a prova começa? / Às nove.
IPA: /wɛn dʌz ðiː ɪɡˈzæm stɑːrt · æt naɪn/ · PT: [uén dâz dhi igzém stárt · ét náin]
Will you be home for dinner? / Yes, I will. — Você vai estar em casa para o jantar? / Sim, vou.
IPA: /wɪl juː biː hoʊm fɔːr ˈdɪnər · jɛs aɪ wɪl/ · PT: [uíou iú bí rrôum fór díner · iés ái uíou]
Are you going to buy that car? / I'm still thinking about it. — Você vai comprar aquele carro? / Ainda estou pensando.
IPA: /ɑːr juː ˈɡoʊɪŋ tə baɪ ðæt kɑːr · aɪm stɪl ˈθɪŋkɪŋ əˈbaʊt ɪt/ · PT: [ár iú gôuin tu bái dhét kár · áim stíou thínkin abáut ít]
What are you doing this weekend? / We're going to the beach. — O que você vai fazer neste fim de semana? / Vamos à praia.
IPA: /wʌt ɑːr juː ˈduːɪŋ ðɪs ˈwiːkɛnd · wɪr ˈɡoʊɪŋ tə ðə biːtʃ/ · PT: [uât ár iú dúin dhís uíkend · uír gôuin tu dha bítch]
Will you marry me? / Yes, I will! — Você vai se casar comigo? / Sim, eu vou!
IPA: /wɪl juː ˈmɛri miː · jɛs aɪ wɪl/ · PT: [uíou iú méri mí · iés ái uíou]
When are you flying back? / Next Sunday. — Quando você volta de avião? / No próximo domingo.
IPA: /wɛn ɑːr juː ˈflaɪɪŋ bæk · nɛkst ˈsʌndeɪ/ · PT: [uén ár iú fláiin bék · nékst sândei]
Might you change your mind? / Maybe. — Você talvez mude de ideia? / Talvez.
IPA: /maɪt juː tʃeɪndʒ jɔːr maɪnd · ˈmeɪbiː/ · PT: [máit iú tchêindj iór máind · mêibi]
Will you be there on time? / I hope so. — Você vai chegar lá na hora? / Espero que não.
IPA: /wɪl juː biː ðɛr ɑːn taɪm · aɪ hoʊp soʊ/ · PT: [uíou iú bí dhér ón táim · ái rrôup sôu]
Is she going to move here? / Yes, next month. — Ela vai se mudar para cá? / Sim, mês que vem.
IPA: /ɪz ʃiː ˈɡoʊɪŋ tə muːv hɪr · jɛs nɛkst mʌnθ/ · PT: [iz chí gôuin tu múv rrír · iés nékst mânth]
What time does the store close? / At nine. — A que horas a loja fecha? / Às nove.
IPA: /wʌt taɪm dʌz ðə stɔːr kloʊz · æt naɪn/ · PT: [uât táim dâz dha stór klôuz · ét náin]
Are you seeing anyone this afternoon? / Just my doctor. — Você vai ver alguém esta tarde? / Só meu médico.
IPA: /ɑːr juː ˈsiːɪŋ ˈɛniwʌn ðɪs ˌæftərˈnuːn · dʒʌst maɪ ˈdɑːktər/ · PT: [ár iú síin éniuan dhís éfternún · djâst mái dáktor]
Do you think they'll come? / I doubt it. — Você acha que eles vêm? / Duvido.
IPA: /duː juː θɪŋk ðeɪl kʌm · aɪ daʊt ɪt/ · PT: [dú iú thínk dhêiou kâm · ái dáut ít]
Shall I close the window? / Yes, please. — Eu fecho a janela? / Sim, por favor.
IPA: /ʃæl aɪ kloʊz ðə ˈwɪndoʊ · jɛs pliːz/ · PT: [chél ái klôuz dha uíndou · iés plíz]
Will it be ready by Friday? / It should be. — Vai estar pronto até sexta? / Deveria estar.
IPA: /wɪl ɪt biː ˈrɛdi baɪ ˈfraɪdeɪ · ɪt ʃʊd biː/ · PT: [uíou ít bí rédi bái fráidei · ít chúd bí]
Are you going to tell them the truth? / I have to. — Você vai contar a verdade a eles? / Eu tenho que contar.
IPA: /ɑːr juː ˈɡoʊɪŋ tə tɛl ðɛm ðə truːθ · aɪ hæv tuː/ · PT: [ár iú gôuin tu tél dhém dha trúth · ái rrév tú]
Might it be too late? / I hope not. — Talvez seja tarde demais? / Espero que não.
IPA: /maɪt ɪt biː tuː leɪt · aɪ hoʊp nɑːt/ · PT: [máit ít bí tú lêit · ái rrôup nót]
When is the wedding? / In June. — Quando é o casamento? / Em junho.
IPA: /wɛn ɪz ðə ˈwɛdɪŋ · ɪn dʒuːn/ · PT: [uén iz dha uédin · in djún]
Will you miss me? / Of course I will. — Você vai sentir minha falta? / Claro que vou.
IPA: /wɪl juː mɪs miː · ʌv kɔːrs aɪ wɪl/ · PT: [uíou iú mís mí · ov kórs ái uíou]
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
      id: `lesson_2_grammar_b1_en_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/lesson_2_grammar_b1_en.json', JSON.stringify(deck, null, 2));
console.log(`Created lesson_2_grammar_b1_en.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}

if (!metadata['lesson_2_grammar_b1']) {
  metadata['lesson_2_grammar_b1'] = { cardCount: 0, en: 0, es: 0 };
}
metadata['lesson_2_grammar_b1'].cardCount = deck.length;
metadata['lesson_2_grammar_b1'].en = deck.length;

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
