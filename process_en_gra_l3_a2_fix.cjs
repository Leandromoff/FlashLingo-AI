const fs = require('fs');

const raw = `I work. — Eu trabalho.
IPA: /aɪ wɜːrk/ · PT: [ái uârk]
He works. — Ele trabalha.
IPA: /hiː wɜːrks/ · PT: [rrí uârks]
They work. — Eles trabalham.
IPA: /ðeɪ wɜːrk/ · PT: [dhêi uârk]


Present Simple — negativa
4. I don't work on Sundays. — Eu não trabalho aos domingos.
IPA: /aɪ doʊnt wɜːrk ɑːn ˈsʌndeɪz/ · PT: [ái dôunt uârk ón sândeiz]
5. He doesn't work on Sundays. — Ele não trabalha aos domingos.
IPA: /hiː ˈdʌznt wɜːrk ɑːn ˈsʌndeɪz/ · PT: [rrí dâznt uârk ón sândeiz]

Present Simple — pergunta e resposta curta
6. Do you work here? — Você trabalha aqui?
IPA: /duː juː wɜːrk hɪr/ · PT: [dú iú uârk rrír]
7. Does she work here? — Ela trabalha aqui?
IPA: /dʌz ʃiː wɜːrk hɪr/ · PT: [dâz chí uârk rrír]
8. Yes, she does. — Sim, ela trabalha.
IPA: /jɛs ʃiː dʌz/ · PT: [iés chí dâz]
9. No, she doesn't. — Não, ela não trabalha.
IPA: /noʊ ʃiː ˈdʌznt/ · PT: [nôu chí dâznt]

Ortografia do -s: regra geral e -es
10. He plays soccer. — Ele joga futebol.
IPA: /hiː pleɪz ˈsɑːkər/ · PT: [rrí plêiz sáker]
11. She watches TV. — Ela assiste TV.
IPA: /ʃiː ˈwɑːtʃɪz ˌtiːˈviː/ · PT: [chí uátchiz ti-ví]
12. He misses his family. — Ele sente falta da família.
IPA: /hiː ˈmɪsɪz hɪz ˈfæməli/ · PT: [rrí mísiz rríz fémili]

Ortografia: consoante+y vira -ies
13. She studies English. — Ela estuda inglês.
IPA: /ʃiː ˈstʌdiz ˈɪŋɡlɪʃ/ · PT: [chí stâdiz ínglich]
14. He tries his best. — Ele se esforça ao máximo.
IPA: /hiː traɪz hɪz bɛst/ · PT: [rrí tráiz rríz bést]

Ortografia: -o vira -oes; irregulares
15. She goes to work by bus. — Ela vai ao trabalho de ônibus.
IPA: /ʃiː ɡoʊz tə wɜːrk baɪ bʌs/ · PT: [chí gôuz tu uârk bái bâs]
16. He does the dishes. — Ele lava a louça.
IPA: /hiː dʌz ðə ˈdɪʃɪz/ · PT: [rrí dâz dha díchiz]
17. She has two brothers. — Ela tem dois irmãos.
IPA: /ʃiː hæz tuː ˈbrʌðərz/ · PT: [chí réz tú brâdherz]

Erro comum (com does)
18. The hotel doesn't have a spa. — O hotel não tem spa.
IPA: /ðə hoʊˈtɛl ˈdʌznt hæv ə spɑː/ · PT: [dha routél dâznt réf a spá]
19. Does Susan work in your office? — A Susan trabalha no seu escritório?
IPA: /dʌz ˈsuːzn̩ wɜːrk ɪn jɔːr ˈɔːfɪs/ · PT: [dâz súzan uârk in iór ófis]

Present Continuous — afirmativa, negativa, pergunta
20. I'm working. — Eu estou trabalhando.
IPA: /aɪm ˈwɜːrkɪŋ/ · PT: [áim uârkin]
21. She isn't working. — Ela não está trabalhando.
IPA: /ʃiː ˈɪznt ˈwɜːrkɪŋ/ · PT: [chí íznt uârkin]
22. Are they working? — Eles estão trabalhando?
IPA: /ɑːr ðeɪ ˈwɜːrkɪŋ/ · PT: [ár dhêi uârkin]

Ortografia do -ing
23. He's making dinner. — Ele está fazendo o jantar.
IPA: /hiːz ˈmeɪkɪŋ ˈdɪnər/ · PT: [rríz mêikin díner]
24. They're running in the park. — Eles estão correndo no parque.
IPA: /ðɛr ˈrʌnɪŋ ɪn ðə pɑːrk/ · PT: [dhér rânin in dha párk]
25. Simple = habits and facts. Continuous = actions happening now. — Simples = hábitos e fatos. Contínuo = ações acontecendo agora.
IPA: /ˈsɪmpl̩ ˈhæbɪts ænd fækts kənˈtɪnjuəs ˈækʃn̩z ˈhæpənɪŋ naʊ/ · PT: [símpou rébits énd fékts kantíniuas ékchanz rrépanin náu]


26. I wash my hair every day. — Eu lavo o cabelo todo dia.
IPA: /aɪ wɑːʃ maɪ hɛr ˈɛvri deɪ/ · PT: [ái uách mái rrér évri dêi]
27. He usually gets up very early. — Ele geralmente acorda bem cedo.
IPA: /hiː ˈjuːʒuəli ɡɛts ʌp ˈvɛri ˈɜːrli/ · PT: [rrí iújuali guéts âp véri ârli]
28. She brushes her teeth twice a day. — Ela escova os dentes duas vezes por dia.
IPA: /ʃiː ˈbrʌʃɪz hɜːr tiːθ twaɪs ə deɪ/ · PT: [chí brâchiz rrâr títh tuáis a dêi]

Agora mesmo (continuous)
29. I can't talk. I'm brushing my teeth. — Não posso falar. Estou escovando os dentes.
IPA: /aɪ kænt tɔːk aɪm ˈbrʌʃɪŋ maɪ tiːθ/ · PT: [ái kênt tók áim brâchin mái títh]
30. He can't talk now. He's having a shower. — Ele não pode falar agora. Está tomando banho.
IPA: /hiː kænt tɔːk naʊ hiːz ˈhævɪŋ ə ˈʃaʊər/ · PT: [rrí kênt tók náu rríz rrévin a cháuer]

No trabalho
31. She works in an office downtown. — Ela trabalha num escritório no centro.
IPA: /ʃiː wɜːrks ɪn ən ˈɔːfɪs ˈdaʊntaʊn/ · PT: [chí uârks in an ófis dáuntaun]
32. He's studying for a big presentation. — Ele está estudando para uma apresentação importante.
IPA: /hiːz ˈstʌdiɪŋ fɔːr ə bɪɡ ˌprɛzn̩ˈteɪʃn̩/ · PT: [rríz stâdiin fór a bíg prezantêichan]
33. Does she finish work at five? — Ela termina o trabalho às cinco?
IPA: /dʌz ʃiː ˈfɪnɪʃ wɜːrk æt faɪv/ · PT: [dâz chí fínich uârk ét fáiv]

Na cozinha
34. She cooks dinner every night. — Ela cozinha o jantar toda noite.
IPA: /ʃiː kʊks ˈdɪnər ˈɛvri naɪt/ · PT: [chí kúks díner évri náit]
35. He's making a cake right now. — Ele está fazendo um bolo agora.
IPA: /hiːz ˈmeɪkɪŋ ə keɪk raɪt naʊ/ · PT: [rríz mêikin a kêik ráit náu]

No parque / academia
36. They run in the park every morning. — Eles correm no parque toda manhã.
IPA: /ðeɪ rʌn ɪn ðə pɑːrk ˈɛvri ˈmɔːrnɪŋ/ · PT: [dhêi rân in dha párk évri mórnin]
37. He's training hard these days. — Ele está treinando pesado ultimamente.
IPA: /hiːz ˈtreɪnɪŋ hɑːrd ðiːz deɪz/ · PT: [rríz trêinin rrárd dhíz dêiz]

Fatos permanentes
38. Water boils at 100 degrees. — A água ferve a 100 graus.
IPA: /ˈwɔːtər bɔɪlz æt wʌn ˈhʌndrəd dɪˈɡriːz/ · PT: [uóter bóilz ét uân rrândred digríz]
39. I have one brother. — Eu tenho um irmão.
IPA: /aɪ hæv wʌn ˈbrʌðər/ · PT: [ái rrév uân brâdher]
40. He lives in Paris. — Ele mora em Paris.
IPA: /hiː lɪvz ɪn ˈpɛrɪs/ · PT: [rrí lívz in péris]

Lendo / lazer
41. I'm reading a new book. I love it! — Estou lendo um livro novo. Estou amando!
IPA: /aɪm ˈriːdɪŋ ə nuː bʊk aɪ lʌv ɪt/ · PT: [áim rídin a niú búk ái lâv ít]
42. This week, I'm staying home. — Esta semana, estou ficando em casa.
IPA: /ðɪs wiːk aɪm ˈsteɪɪŋ hoʊm/ · PT: [dhís uík áim stêin rrôum]

Verbos de estado
43. Give me the money. I need it now. — Me dá o dinheiro. Preciso agora.
IPA: /ɡɪv miː ðə ˈmʌni aɪ niːd ɪt naʊ/ · PT: [guív mí dha mâni ái níd ít náu]
44. What happened? You look sad. — O que aconteceu? Você parece triste.
IPA: /wʌt ˈhæpənd juː lʊk sæd/ · PT: [uât rrépand iú lúk séd]

Estudando / na escola
45. She studies every night after dinner. — Ela estuda toda noite depois do jantar.
IPA: /ʃiː ˈstʌdiz ˈɛvri naɪt ˈæftər ˈdɪnər/ · PT: [chí stâdiz évri náit éfter díner]
46. I'm studying for my exam right now. — Estou estudando para minha prova agora.
IPA: /aɪm ˈstʌdiɪŋ fɔːr maɪ ɪɡˈzæm raɪt naʊ/ · PT: [áim stâdiin fór mái igzém ráit náu]

Compras / mercado
47. He goes shopping on Saturdays. — Ele vai fazer compras aos sábados.
IPA: /hiː ɡoʊz ˈʃɑːpɪŋ ɑːn ˈsætərdeɪz/ · PT: [rrí gôuz chápin ón séterdeiz]
48. She's buying groceries at the moment. — Ela está comprando mantimentos no momento.
IPA: /ʃiːz ˈbaɪɪŋ ˈɡroʊsəriz æt ðə ˈmoʊmənt/ · PT: [chíz báiin grôuseriz ét dha môument]

Viajando
49. They travel to Spain every summer. — Eles viajam para a Espanha todo verão.
IPA: /ðeɪ ˈtrævl̩ tə speɪn ˈɛvri ˈsʌmər/ · PT: [dhêi trévol tu spêin évri sâmer]
50. We're traveling to Madrid this month. — Nós estamos viajando para Madri este mês.
IPA: /wɪr ˈtrævl̩ɪŋ tə məˈdrɪd ðɪs mʌnθ/ · PT: [uír trévolin tu madríd dhís mânth]


51. She works hard. — Ela trabalha duro.
IPA: /ʃiː wɜːrks hɑːrd/ · PT: [chí uârks rrárd]
52. He's sleeping. — Ele está dormindo.
IPA: /hiːz ˈsliːpɪŋ/ · PT: [rríz slípin]
53. They study a lot. — Eles estudam muito.
IPA: /ðeɪ ˈstʌdi ə lɑːt/ · PT: [dhêi stâdi a lát]
54. I'm watching TV. — Estou assistindo TV.
IPA: /aɪm ˈwɑːtʃɪŋ ˌtiːˈviː/ · PT: [áim uátchin ti-ví]

Um pouco mais
55. Does he have a car? — Ele tem um carro?
IPA: /dʌz hiː hæv ə kɑːr/ · PT: [dâz rrí rrév a kár]
56. She doesn't go to the gym often. — Ela não vai à academia com frequência.
IPA: /ʃiː ˈdʌznt ɡoʊ tə ðə dʒɪm ˈɔːfn̩/ · PT: [chí dâznt gôu tu dha djím ófan]
57. Are you studying right now? — Você está estudando agora?
IPA: /ɑːr juː ˈstʌdiɪŋ raɪt naʊ/ · PT: [ár iú stâdiin ráit náu]
58. They're not working today. — Eles não estão trabalhando hoje.
IPA: /ðɛr nɑːt ˈwɜːrkɪŋ təˈdeɪ/ · PT: [dhér nót uârkin tudêi]

Perguntas e negações
59. Doesn't she like coffee? — Ela não gosta de café?
IPA: /ˈdʌznt ʃiː laɪk ˈkɔːfi/ · PT: [dâznt chí láik kófi]
60. Don't they live here? — Eles não moram aqui?
IPA: /doʊnt ðeɪ lɪv hɪr/ · PT: [dôunt dhêi lív rrír]
61. What is he doing? — O que ele está fazendo?
IPA: /wʌt ɪz hiː ˈduːɪŋ/ · PT: [uât iz rrí dúin]
62. Why doesn't she answer? — Por que ela não atende?
IPA: /waɪ ˈdʌznt ʃiː ˈænsər/ · PT: [uái dâznt chí énser]

Conectores e tempos verbais
63. She usually walks to work, but today she's taking the bus. — Ela geralmente vai a pé ao trabalho, mas hoje está pegando o ônibus.
IPA: /ʃiː ˈjuːʒuəli wɔːks tə wɜːrk bʌt təˈdeɪ ʃiːz ˈteɪkɪŋ ðə bʌs/ · PT: [chí iújuali uóks tu uârk bât tudêi chíz têikin dha bâs]
64. He doesn't cook often, but he's cooking a big dinner tonight. — Ele não cozinha com frequência, mas está cozinhando um jantarzão hoje.
IPA: /hiː ˈdʌznt kʊk ˈɔːfn̩ bʌt hiːz ˈkʊkɪŋ ə bɪɡ ˈdɪnər təˈnaɪt/ · PT: [rrí dâznt kúk ófan bât rríz kúkin a bíg díner tunáit]
65. I need help because I don't understand this. — Eu preciso de ajuda porque não entendo isso.
IPA: /aɪ niːd hɛlp bɪˈkɔːz aɪ doʊnt ˌʌndərˈstænd ðɪs/ · PT: [ái níd rrélp bikóz ái dôunt andersténd dhís]
66. When she's studying, she doesn't answer the phone. — Quando ela está estudando, ela não atende o telefone.
IPA: /wɛn ʃiːz ˈstʌdiɪŋ ʃiː ˈdʌznt ˈænsər ðə foʊn/ · PT: [uén chíz stâdiin chí dâznt énser dha fôun]
67. He works in London, but he's staying in Paris this week. — Ele trabalha em Londres, mas está ficando em Paris esta semana.
IPA: /hiː wɜːrks ɪn ˈlʌndən bʌt hiːz ˈsteɪɪŋ ɪn ˈpɛrɪs ðɪs wiːk/ · PT: [rrí uârks in lândan bât rríz stêin in péris dhís uík]

As mais ricas
68. She doesn't usually exercise, but she's trying a new routine this month. — Ela geralmente não se exercita, mas está tentando uma nova rotina este mês.
IPA: /ʃiː ˈdʌznt ˈjuːʒuəli ˈɛksərsaɪz bʌt ʃiːz ˈtraɪɪŋ ə nuː ruːˈtiːn ðɪs mʌnθ/ · PT: [chí dâznt iújuali éksersaiz bât chíz tráiin a niú rutín dhís mânth]
69. Does he always study this late, or is he just preparing for the exam? — Ele sempre estuda até tão tarde, ou está só se preparando para a prova?
IPA: /dʌz hiː ˈɔːlweɪz ˈstʌdi ðɪs leɪt ɔːr ɪz hiː dʒʌst prɪˈpɛrɪŋ fɔːr ðə ɪɡˈzæm/ · PT: [dâz rrí ólueiz stâdi dhís lêit ór iz rrí djâst pripérin fór dhi igzém]
70. They don't usually travel in winter, but they're visiting family this December. — Eles geralmente não travel no inverno, mas estão visitando a família neste dezembro.
IPA: /ðeɪ doʊnt ˈjuːʒuəli ˈtrævl̩ ɪn ˈwɪntər bʌt ðɛr ˈvɪzɪtɪŋ ˈfæməli ðɪs dɪˈsɛmbər/ · PT: [dhêi dôunt iújuali trévol in uínter bât dhér vízitin fémili dhís disémber]
71. The hotel doesn't have a pool, but it's building one right now. — O hotel não tem piscina, mas está construindo uma agora.
IPA: /ðə hoʊˈtɛl ˈdʌznt hæv ə puːl bʌt ɪts ˈbɪldɪŋ wʌn raɪt naʊ/ · PT: [dha routél dâznt réf a púl bât íts bíldin uân ráit náu]
72. She's not answering because she's driving right now. — Ela não está atendendo porque está dirigindo agora.
IPA: /ʃiːz nɑːt ˈænsərɪŋ bɪˈkɔːz ʃiːz ˈdraɪvɪŋ raɪt naʊ/ · PT: [chíz nót énserin bikóz chíz dráivin ráit náu]
73. He goes to the gym three times a week, but he's not going today because he's sick. — Ele vai à academia três vezes por semana, mas não vai hoje porque está doente.
IPA: /hiː ɡoʊz tə ðə dʒɪm θriː taɪmz ə wiːk bʌt hiːz nɑːt ˈɡoʊɪŋ təˈdeɪ bɪˈkɔːz hiːz sɪk/ · PT: [rrí gôuz tu dha djím thrí táimz a uík bât rríz nót gôuin tudêi bikóz rríz sík]
74. Why isn't she studying, when the exam is tomorrow? — Por que ela não está estudando, sendo que a prova é amanhã?
IPA: /waɪ ˈɪznt ʃiː ˈstʌdiɪŋ wɛn ðə ɪɡˈzæm ɪz təˈmɑːroʊ/ · PT: [uái íznt chí stâdiin uén dhi igzém iz tumárou]
75. We usually stay home on weekends, but we're going out tonight because it's her birthday. — Nós geralmente ficamos em casa nos fins de semana, mas vamos sair hoje à noite porque é aniversário dela.
IPA: /wiː ˈjuːʒuəli steɪ hoʊm ɑːn ˈwiːkɛndz bʌt wɪr ˈɡoʊɪŋ aʊt təˈnaɪt bɪˈkɔːz ɪts hɜːr ˈbɜːrθdeɪ/ · PT: [uí iújuali stêi rrôum ón uíkendz bât uír gôuin áut tunáit bikóz íts rrâr bârthdei]




Do you work here? / Yes, I do. — Você trabalha aqui? / Sim, trabalho.
IPA: /duː juː wɜːrk hɪr · jɛs aɪ duː/ · PT: [dú iú uârk rrír · iés ái dú]
Does she work here? / No, she doesn't. — Ela trabalha aqui? / Não, não trabalha.
IPA: /dʌz ʃiː wɜːrk hɪr · noʊ ʃiː ˈdʌznt/ · PT: [dâz chí uârk rrír · nôu chí dâznt]
What are you doing? / I'm cooking. — O que você está fazendo? / Estou cozinhando.
IPA: /wʌt ɑːr juː ˈduːɪŋ · aɪm ˈkʊkɪŋ/ · PT: [uât ár iú dúin · áim kúkin]
Does he have a car? / Yes, he does. — Ele tem um carro? / Sim, tem.
IPA: /dʌz hiː hæv ə kɑːr · jɛs hiː dʌz/ · PT: [dâz rrí rrév a kár · iés rrí dâz]
Is she working today? / No, she isn't. — Ela está trabalhando hoje? / Não, não está.
IPA: /ɪz ʃiː ˈwɜːrkɪŋ təˈdeɪ · noʊ ʃiː ˈɪznt/ · PT: [iz chí uârkin tudêi · nôu chí íznt]
How often do you exercise? / Three times a week. — Com que frequência você se exercita? / Três vezes por semana.
IPA: /haʊ ˈɔːfn̩ duː juː ˈɛksərsaɪz · θriː taɪmz ə wiːk/ · PT: [rráu ófan dú iú éksersaiz · thrí táimz a uík]
Are you studying now? / Yes, I am. — Você está estudando agora? / Sim, estou.
IPA: /ɑːr juː ˈstʌdiɪŋ naʊ · jɛs aɪ æm/ · PT: [ár iú stâdiin náu · iés ái ém]
Does the hotel have a spa? / No, it doesn't. — O hotel tem spa? / Não, não tem.
IPA: /dʌz ðə hoʊˈtɛl hæv ə spɑː · noʊ ɪt ˈdʌznt/ · PT: [dâz dha routél rrév a spá · nôu ít dâznt]
What does she do? / She's a teacher. — O que ela faz? / Ela é professora.
IPA: /wʌt dʌz ʃiː duː · ʃiːz ə ˈtiːtʃər/ · PT: [uât dâz chí dú · chíz a títcher]
Is he sleeping? / Yes, he is. — Ele está dormindo? / Sim, está.
IPA: /ɪz hiː ˈsliːpɪŋ · jɛs hiː ɪz/ · PT: [iz rrí slípin · iés rrí iz]
Do they live near here? / Yes, they do. — Eles moram perto daqui? / Sim, moram.
IPA: /duː ðeɪ lɪv nɪr hɪr · jɛs ðeɪ duː/ · PT: [dú dhêi lív nír rrír · iés dhêi dú]
Why is she smiling? / She's happy today. — Por que ela está sorrindo? / Ela está feliz hoje.
IPA: /waɪ ɪz ʃiː ˈsmaɪlɪŋ · ʃiːz ˈhæpi təˈdeɪ/ · PT: [uái iz chí smáilin · chíz rrépi tudêi]
Does he speak Spanish? / A little. — Ele fala espanhol? / Um pouco.
IPA: /dʌz hiː spiːk ˈspænɪʃ · ə ˈlɪtl̩/ · PT: [dâz rrí spík spénich · a lítou]
Are they watching a movie? / Yes, they are. — Eles estão assistindo a um filme? / Sim, estão.
IPA: /ɑːr ðeɪ ˈwɑːtʃɪŋ ə ˈmuːvi · jɛs ðeɪ ɑːr/ · PT: [ár dhêi uátchin a múvi · iés dhêi ár]
How many brothers does she have? / Two. — Quantos irmãos ela tem? / Dois.
IPA: /haʊ ˈmɛni ˈbrʌðərz dʌz ʃiː hæv · tuː/ · PT: [rráu méni brâdherz dâz chí rrév · tú]
Is it raining now? / Yes, a little. — Está chovendo agora? / Sim, um pouco.
IPA: /ɪz ɪt ˈreɪnɪŋ naʊ · jɛs ə ˈlɪtl̩/ · PT: [iz ít rêinin náu · iés a lítou]
Does she like her job? / Yes, she loves it. — Ela gosta do trabalho dela? / Sim, ela ama.
IPA: /dʌz ʃiː laɪk hɜːr dʒɑːb · jɛs ʃiː lʌvz ɪt/ · PT: [dâz chí láik rrâr djób · iés chí lâvz ít]
What is he studying? / Medicine. — O que ele está estudando? / Medicina.
IPA: /wʌt ɪz hiː ˈstʌdiɪŋ · ˈmɛdɪsɪn/ · PT: [uât iz rrí stâdiin · médisin]
Do you have any pets? / Yes, a cat. — Você tem algum animal de estimação? / Sim, um gato.
IPA: /duː juː hæv ˈɛni pɛts · jɛs ə kæt/ · PT: [dú iú rrév éni péts · iés a két]
Is she coming to the party? / I think so. — Ela vai vir à festa? / Eu acho que sim.
IPA: /ɪz ʃiː ˈkʌmɪŋ tə ðə ˈpɑːrti · aɪ θɪŋk soʊ/ · PT: [iz chí kâmin tu dha párti · ái thínk sôu]
Does the store close early? / Yes, at six. — A loja fecha cedo? / Sim, às seis.
IPA: /dʌz ðə stɔːr kloʊz ˈɜːrli · jɛs æt sɪks/ · PT: [dâz dha stór klôuz ârli · iés ét síks]
What are they doing this weekend? / Traveling. — O que eles vão fazer neste fim de semana? / Viajar.
IPA: /wʌt ɑːr ðeɪ ˈduːɪŋ ðɪs ˈwiːkɛnd · ˈtrævl̩ɪŋ/ · PT: [uât ár dhêi dúin dhís uíkend · trévolin]
Do you usually cook at home? / Yes, every day. — Você geralmente cozinha em casa? / Sim, todo dia.
IPA: /duː juː ˈjuːʒuəli kʊk æt hoʊm · jɛs ˈɛvri deɪ/ · PT: [dú iú iújuali kúk ét rrôum · iés évri dêi]
Is he working from home today? / Yes, he is. — Ele está trabalhando de casa hoje? / Sim, está.
IPA: /ɪz hiː ˈwɜːrkɪŋ frəm hoʊm təˈdeɪ · jɛs hiː ɪz/ · PT: [iz rrí uârkin from rrôum tudêi · iés rrí iz]
Does it usually snow here? / Not often. — Costuma nevar aqui? / Não com frequência.
IPA: /dʌz ɪt ˈjuːʒuəli snoʊ hɪr · nɑːt ˈɔːfn̩/ · PT: [dâz ít iújuali snôu rrír · nót ófan]
`;

const lines = raw.split('\n').map(l => l.trim()).filter(Boolean);

const deck = [];
for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  // Verify next line is IPA to avoid picking up section headers with dashes
  const nextLine = lines[i + 1] || '';
  if (line.includes('—') && nextLine.startsWith('IPA:')) {
    let wordLine = line;
    // Remove leading numbers like "6. " or "10. "
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
      id: `lesson_3_grammar_a2_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/lesson_3_grammar_a2_en.json', JSON.stringify(deck, null, 2));
console.log(`Created lesson_3_grammar_a2_en.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}
metadata['lesson_3_grammar_a2'] = {
  cardCount: deck.length,
  en: deck.length
};
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
