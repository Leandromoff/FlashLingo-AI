const fs = require('fs');

const raw = `I work in an office. — Eu trabalho num escritório. (simple)
IPA: /aɪ wɜːrk ɪn ən ˈɔːfɪs/ · PT: [ái uârk in an ófis]
I am working right now. — Eu estou trabalhando agora. (continuous)
IPA: /aɪ æm ˈwɜːrkɪŋ raɪt naʊ/ · PT: [ái ém uârkin ráit náu]
He works every day. — Ele trabalha todo dia. (simple, he/she/it +s)
IPA: /hiː wɜːrks ˈɛvri deɪ/ · PT: [rrí uârks évri dêi]
He is working today. — Ele está trabalhando hoje. (continuous)
IPA: /hiː ɪz ˈwɜːrkɪŋ təˈdeɪ/ · PT: [rrí iz uârkin tudêi]


Negativa
5. I don't work on Sundays. — Eu não trabalho aos domingos.
IPA: /aɪ doʊnt wɜːrk ɑːn ˈsʌndeɪz/ · PT: [ái dôunt uârk ón sândeiz]
6. I'm not working today. — Eu não estou trabalhando hoje.
IPA: /aɪm nɑːt ˈwɜːrkɪŋ təˈdeɪ/ · PT: [áim nót uârkin tudêi]
7. She doesn't work here. — Ela não trabalha aqui.
IPA: /ʃiː ˈdʌznt wɜːrk hɪr/ · PT: [chí dâznt uârk rrír]
8. She isn't working right now. — Ela não está trabalhando agora.
IPA: /ʃiː ˈɪznt ˈwɜːrkɪŋ raɪt naʊ/ · PT: [chí íznt uârkin ráit náu]

Pergunta e resposta curta
9. Do you work here? — Você trabalha aqui?
IPA: /duː juː wɜːrk hɪr/ · PT: [dú iú uârk rrír]
10. Are you working now? — Você está trabalhando agora?
IPA: /ɑːr juː ˈwɜːrkɪŋ naʊ/ · PT: [ár iú uârkin náu]
11. Yes, I do. — Sim, trabalho.
IPA: /jɛs aɪ duː/ · PT: [iés ái dú]
12. Yes, I am. — Sim, estou.
IPA: /jɛs aɪ æm/ · PT: [iés ái ém]

Hábitos vs. ação agora
13. I wash my hair every day. — Eu lavo o cabelo todo dia.
IPA: /aɪ wɑːʃ maɪ hɛr ˈɛvri deɪ/ · PT: [ái uách mái rrér évri dêi]
14. I can't talk. I'm brushing my teeth. — Não posso falar. Estou escovando os dentes.
IPA: /aɪ kænt tɔːk aɪm ˈbrʌʃɪŋ maɪ tiːθ/ · PT: [ái kênt tók áim brâchin mái títh]

Fatos vs. temporário
15. I have one brother. He lives in Paris. — Eu tenho um irmão. Ele mora em Paris.
IPA: /aɪ hæv wʌn ˈbrʌðər hiː lɪvz ɪn ˈpɛrɪs/ · PT: [ái rrév uân brâdher rrí lívz in péris]
16. I'm living with my cousins until I find an apartment. — Estou morando com meus primos até encontrar um apartamento.
IPA: /aɪm ˈlɪvɪŋ wɪð maɪ ˈkʌzn̩z ʌnˈtɪl aɪ faɪnd ən əˈpɑːrtmənt/ · PT: [áim lívin uídh mái kâzanz antíou ái fáind an apártment]

Verbos de estado vs. mudança
17. Give me the money. I need it now. — Me dá o dinheiro. Preciso agora.
IPA: /ɡɪv miː ðə ˈmʌni aɪ niːd ɪt naʊ/ · PT: [guív mí dha mâni ái níd ít náu]
18. The climate is changing very quickly. — O clima está mudando muito rápido.
IPA: /ðə ˈklaɪmət ɪz ˈtʃeɪndʒɪŋ ˈvɛri ˈkwɪkli/ · PT: [dha kláimat iz tchêindjin véri kuíkli]

Futuro programado vs. combinado
19. The train leaves at four. — O trem sai às quatro.
IPA: /ðə treɪn liːvz æt fɔːr/ · PT: [dha trêin lívz ét fór]
20. I'm meeting John this evening. — Vou encontrar o John hoje à noite.
IPA: /aɪm ˈmiːtɪŋ dʒɑːn ðɪs ˈiːvnɪŋ/ · PT: [áim mítin djón dhís ívnin]

Consolidação
21. Water boils at 100 degrees. — A água ferve a 100 graus.
IPA: /ˈwɔːtər bɔɪlz æt wʌn ˈhʌndrəd dɪˈɡriːz/ · PT: [uóter bóilz ét uân rrândred digríz]
22. Your English is improving. — Seu inglês está melhorando.
IPA: /jɔːr ˈɪŋɡlɪʃ ɪz ɪmˈpruːvɪŋ/ · PT: [iór ínglich iz imprúvin]
23. What happened? You look sad. — O que aconteceu? Você parece triste.
IPA: /wʌt ˈhæpənd juː lʊk sæd/ · PT: [uât rrépand iú lúk séd]
24. I'm reading a new book. I love it! — Estou lendo um livro novo. Estou amando!
IPA: /aɪm ˈriːdɪŋ ə nuː bʊk aɪ lʌv ɪt/ · PT: [áim rídin a niú búk ái lâv ít]
25. Simple = habits, facts, states. Continuous = now, temporary, changing. — Simples = hábitos, fatos, estados. Contínuo = agora, temporário, em mudança.
IPA: /ˈsɪmpl̩ ˈhæbɪts fækts steɪts kənˈtɪnjuəs naʊ ˈtɛmpərɛri ˈtʃeɪndʒɪŋ/ · PT: [símpou rébits fékts stêits kantíniuas náu témporeri tchêindjin]


26. I usually get up at seven. — Eu geralmente acordo às sete.
IPA: /aɪ ˈjuːʒuəli ɡɛt ʌp æt ˈsɛvn̩/ · PT: [ái iújuali guét âp ét sévan]
27. But today I'm getting up late. — Mas hoje estou acordando tarde.
IPA: /bʌt təˈdeɪ aɪm ˈɡɛtɪŋ ʌp leɪt/ · PT: [bât tudêi áim guétin âp lêit]
28. I don't usually drink tea, but I'm drinking some now. — Eu geralmente não tomo chá, mas estou tomando um pouco agora.
IPA: /aɪ doʊnt ˈjuːʒuəli drɪŋk tiː bʌt aɪm ˈdrɪŋkɪŋ sʌm naʊ/ · PT: [ái dôunt iújuali drínk tí bât áim drínkin sâm náu]

No trabalho
29. She works from home three days a week. — Ela trabalha de casa três dias por semana.
IPA: /ʃiː wɜːrks frəm hoʊm θriː deɪz ə wiːk/ · PT: [chí uârks from rrôum thrí dêiz a uík]
30. This week, she's working from the office. — Esta semana, ela está trabalhando do escritório.
IPA: /ðɪs wiːk ʃiːz ˈwɜːrkɪŋ frəm ðiː ˈɔːfɪs/ · PT: [dhís uík chíz uârkin from dhi ófis]
31. Does he usually finish at five? — Ele geralmente termina às cinco?
IPA: /dʌz hiː ˈjuːʒuəli ˈfɪnɪʃ æt faɪv/ · PT: [dâz rrí iújuali fínich ét fáiv]

Na cozinha
32. She cooks dinner every night. — Ela cozinha o jantar toda noite.
IPA: /ʃiː kʊks ˈdɪnər ˈɛvri naɪt/ · PT: [chí kúks díner évri náit]
33. She's cooking something special tonight. — Ela está cozinhando algo especial hoje à noite.
IPA: /ʃiːz ˈkʊkɪŋ ˈsʌmθɪŋ ˈspɛʃl̩ təˈnaɪt/ · PT: [chíz kúkin sâmthin spéchou tunáit]

Academia
34. He goes to the gym three times a week. — Ele vai à academia três vezes por semana.
IPA: /hiː ɡoʊz tə ðə dʒɪm θriː taɪmz ə wiːk/ · PT: [rrí gôuz tu dha djím thrí táimz a uík]
35. He's trying a new workout this month. — Ele está tentando um novo treino este mês.
IPA: /hiːz ˈtraɪɪŋ ə nuː ˈwɜːrkaʊt ðɪs mʌnθ/ · PT: [rríz tráiin a niú uârkaut dhís mânth]

Viajando / futuro
36. The plane leaves at nine. — O avião sai às nove. (programado)
IPA: /ðə pleɪn liːvz æt naɪn/ · PT: [dha plêin lívz ét náin]
37. We're traveling to Rome next month. — Nós vamos viajar para Roma no próximo mês. (combinado)
IPA: /wɪr ˈtrævl̩ɪŋ tə roʊm nɛkst mʌnθ/ · PT: [uír trévolin tu rrôum nékst mânth]

Estudando
38. She studies every night after dinner. — Ela estuda toda noite depois do jantar.
IPA: /ʃiː ˈstʌdiz ˈɛvri naɪt ˈæftər ˈdɪnər/ · PT: [chí stâdiz évri náit éfter díner]
39. She's studying for a big exam right now. — Ela está estudando para uma prova importante agora.
IPA: /ʃiːz ˈstʌdiɪŋ fɔːr ə bɪɡ ɪɡˈzæm raɪt naʊ/ · PT: [chíz stâdiin fór a bíg igzém ráit náu]

Compras / mercado
40. We go grocery shopping on Saturdays. — A gente vai fazer compras aos sábados.
IPA: /wiː ɡoʊ ˈɡroʊsəri ˈʃɑːpɪŋ ɑːn ˈsætərdeɪz/ · PT: [uí gôu grôuseri chápin ón séterdeiz]
41. I'm buying groceries at the moment. — Estou comprando mantimentos no momento.
IPA: /aɪm ˈbaɪɪŋ ˈɡroʊsəriz æt ðə ˈmoʊmənt/ · PT: [áim báiin grôuseriz ét dha môument]

Saindo com amigos
42. We meet up every Friday. — A gente se encontra toda sexta.
IPA: /wiː miːt ʌp ˈɛvri ˈfraɪdeɪ/ · PT: [uí mít âp évri fráidei]
43. I'm meeting them at the café tonight. — Vou encontrá-los no café hoje à noite.
IPA: /aɪm ˈmiːtɪŋ ðɛm æt ðə kæˈfeɪ təˈnaɪt/ · PT: [áim mítin dhém ét dha kafêi tunáit]

Tempo e clima
44. It usually rains in April. — Geralmente chove em abril.
IPA: /ɪt ˈjuːʒuəli reɪnz ɪn ˈeɪprəl/ · PT: [ít iújuali rêinz in êiprou]
45. It's raining right now. — Está chovendo agora.
IPA: /ɪts ˈreɪnɪŋ raɪt naʊ/ · PT: [íts rêinin ráit náu]

Em casa relaxando
46. I read before bed every night. — Eu leio antes de dormir toda noite.
IPA: /aɪ riːd bɪˈfɔːr bɛd ˈɛvri naɪt/ · PT: [ái ríd bifór béd évri náit]
47. I'm reading a great book this week. — Estou lendo um livro ótimo esta semana.
IPA: /aɪm ˈriːdɪŋ ə ɡreɪt bʊk ðɪs wiːk/ · PT: [áim rídin a grêit búk dhís uík]

No médico
48. She sees the doctor twice a year. — Ela vai ao médico duas vezes por ano.
IPA: /ʃiː siːz ðə ˈdɑːktər twaɪs ə jɪr/ · PT: [chí síz dha dáktor tuáis a íir]
49. The doctor is examining her now. — O médico está examinando ela agora.
IPA: /ðə ˈdɑːktər ɪz ɪɡˈzæmɪnɪŋ hɜːr naʊ/ · PT: [dha dáktor iz igzéminin rrâr náu]

Consolidação final
50. What do you usually do on weekends? What are you doing this weekend? — O que você geralmente faz nos fins de semana? O que você vai fazer neste fim de semana?
IPA: /wʌt duː juː ˈjuːʒuəli duː ɑːn ˈwiːkɛndz wʌt ɑːr juː ˈduːɪŋ ðɪs ˈwiːkɛnd/ · PT: [uât dú iú iújuali dú ón uíkendz uât ár iú dúin dhís uíkend]

51. She works hard. — Ela trabalha duro.
IPA: /ʃiː wɜːrks hɑːrd/ · PT: [chí uârks rrárd]
52. She's sleeping. — Ela está dormindo.
IPA: /ʃiːz ˈsliːpɪŋ/ · PT: [chíz slípin]
53. We study a lot. — A gente estuda muito.
IPA: /wiː ˈstʌdi ə lɑːt/ · PT: [uí stâdi a lát]
54. We're studying now. — A gente está estudando agora.
IPA: /wɪr ˈstʌdiɪŋ naʊ/ · PT: [uír stâdiin náu]

Um pouco mais
55. Does she like her job? — Ela gosta do trabalho dela?
IPA: /dʌz ʃiː laɪk hɜːr dʒɑːb/ · PT: [dâz chí láik rrâr djób]
56. Is she enjoying her new job? — Ela está gostando do novo trabalho?
IPA: /ɪz ʃiː ɪnˈdʒɔɪɪŋ hɜːr nuː dʒɑːb/ · PT: [iz chí indjóiin rrâr niú djób]
57. He doesn't cook often. — Ele não cozinha com frequência.
IPA: /hiː ˈdʌznt kʊk ˈɔːfn̩/ · PT: [rrí dâznt kúk ófan]
58. He's not cooking today. — Ele não está cozinhando hoje.
IPA: /hiːz nɑːt ˈkʊkɪŋ təˈdeɪ/ · PT: [rríz nót kúkin tudêi]

Perguntas e negações
59. Don't you usually work on Fridays? — Você não trabalha normalmente às sextas?
IPA: /doʊnt juː ˈjuːʒuəli wɜːrk ɑːn ˈfraɪdeɪz/ · PT: [dôunt iú iújuali uârk ón fráideiz]
60. Aren't you working today? — Você não está trabalhando hoje?
IPA: /ɑːrnt juː ˈwɜːrkɪŋ təˈdeɪ/ · PT: [árent iú uârkin tudêi]
61. Why doesn't he answer? — Por que ele não atende?
IPA: /waɪ ˈdʌznt hiː ˈænsər/ · PT: [uái dâznt rrí énser]
62. Why isn't he answering now? — Por que ele não está atendendo agora?
IPA: /waɪ ˈɪznt hiː ˈænsərɪŋ naʊ/ · PT: [uái íznt rrí énserin náu]

Conectores e tempos verbais
63. She usually walks to work, but today she's driving because it's raining. — Ela geralmente vai a pé ao trabalho, mas hoje está indo de carro porque está chovendo.
IPA: /ʃiː ˈjuːʒuəli wɔːks tə wɜːrk bʌt təˈdeɪ ʃiːz ˈdraɪvɪŋ bɪˈkɔːz ɪts ˈreɪnɪŋ/ · PT: [chí iújuali uóks tu uârk bât tudêi chíz dráivin bikóz íts rêinin]
64. I don't usually eat meat, but I'm trying it today because my friend cooked it. — Eu geralmente não como carne, mas estou experimentando hoje porque meu amigo cozinhou.
IPA: /aɪ doʊnt ˈjuːʒuəli iːt miːt bʌt aɪm ˈtraɪɪŋ ɪt təˈdeɪ bɪˈkɔːz maɪ frɛnd kʊkt ɪt/ · PT: [ái dôunt iújuali ít mít bât áim tráiin ít tudêi bikóz mái frénd kúkt ít]
65. He needs help because he doesn't understand the instructions. — Ele precisa de ajuda porque não entende as instruções.
IPA: /hiː niːdz hɛlp bɪˈkɔːz hiː ˈdʌznt ˌʌndərˈstænd ðiː ɪnˈstrʌkʃn̩z/ · PT: [rrí nídz rrélp bikóz rrí dâznt andersténd dhi instrâkchanz]
66. When she's studying, she doesn't like to be interrupted. — Quando ela está estudando, ela não gosta de ser interrompida.
IPA: /wɛn ʃiːz ˈstʌdiɪŋ ʃiː ˈdʌznt laɪk tə biː ˌɪntəˈrʌptɪd/ · PT: [uén chíz stâdiin chí dâznt láik tu bí interâpted]
67. He usually lives in London, but he's staying in Madrid this year. — Ele geralmente mora em Londres, mas está morando em Madri este ano.
IPA: /hiː ˈjuːʒuəli lɪvz ɪn ˈlʌndən bʌt hiːz ˈsteɪɪŋ ɪn məˈdrɪd ðɪs jɪr/ · PT: [rrí iújuali lívz in lândan bât rríz stêin in madríd dhís íir]

As mais ricas
68. She doesn't usually exercise in the morning, but she's trying it this month to see if it helps. — Ela geralmente não se exercita de manhã, mas está tentando isso este mês para ver se ajuda.
IPA: /ʃiː ˈdʌznt ˈjuːʒuəli ˈɛksərsaɪz ɪn ðə ˈmɔːrnɪŋ bʌt ʃiːz ˈtraɪɪŋ ɪt ðɪs mʌnθ tə siː ɪf ɪt hɛlps/ · PT: [chí dâznt iújuali éksersaiz in dha mórnin bât chíz tráiin ít dhís mânth tu sí if ít rrélps]
69. Does he always travel this much, or is he just visiting family this month? — Ele sempre viaja tanto assim, ou está só visitando a família este mês?
IPA: /dʌz hiː ˈɔːlweɪz ˈtrævl̩ ðɪs mʌtʃ ɔːr ɪz hiː dʒʌst ˈvɪzɪtɪŋ ˈfæməli ðɪs mʌnθ/ · PT: [dâz rrí ólueiz trévol dhís mâtch ór iz rrí djâst vízitin fémili dhís mânth]
70. They don't usually eat out, but they're celebrating a special occasion tonight. — Eles geralmente não comem fora, mas estão comemorando uma ocasião especial hoje à noite.
IPA: /ðeɪ doʊnt ˈjuːʒuəli iːt aʊt bʌt ðɛr ˈsɛləbreɪtɪŋ ə ˈspɛʃl̩ əˈkeɪʒn̩ təˈnaɪt/ · PT: [dhêi dôunt iújuali ít áut bât dhér sélebreitin a spéchou akêijan tunáit]
71. The company doesn't usually hire in December, but it's hiring right now because of high demand. — A empresa geralmente não contrata em dezembro, mas está contratando agora por causa da alta demanda.
IPA: /ðə ˈkʌmpəni ˈdʌznt ˈjuːʒuəli ˈhaɪər ɪn dɪˈsɛmbər bʌt ɪts ˈhaɪərɪŋ raɪt naʊ bɪˈkɔːz əv haɪ dɪˈmænd/ · PT: [dha kâmpani dâznt iújuali rráier in disémber bât íts rráierin ráit náu bikóz ov rrái dimênd]
72. She's not answering because she's driving, but she usually replies quickly. — Ela não está atendendo porque está dirigindo, mas geralmente responde rápido.
IPA: /ʃiːz nɑːt ˈænsərɪŋ bɪˈkɔːz ʃiːz ˈdraɪvɪŋ bʌt ʃiː ˈjuːʒuəli rɪˈplaɪz ˈkwɪkli/ · PT: [chíz nót énserin bikóz chíz dráivin bât chí iújuali riplaiz kuíkli]
73. We usually spend weekends at home, but we're going to the beach this Saturday because it's a holiday. — A gente geralmente passa os fins de semana em casa, mas vamos à praia neste sábado porque é feriado.
IPA: /wiː ˈjuːʒuəli spɛnd ˈwiːkɛndz æt hoʊm bʌt wɪr ˈɡoʊɪŋ tə ðə biːtʃ ðɪs ˈsætərdeɪ bɪˈkɔːz ɪts ə ˈhɑːlədeɪ/ · PT: [uí iújuali spénd uíkendz ét rrôum bât uír gôuin tu dha bítch dhís séterdei bikóz íts a rráladei]
74. Why isn't she working today, when she usually never misses a day? — Por que ela não está trabalhando hoje, sendo que geralmente nunca falta?
IPA: /waɪ ˈɪznt ʃiː ˈwɜːrkɪŋ təˈdeɪ wɛn ʃiː ˈjuːʒuəli ˈnɛvər ˈmɪsɪz ə deɪ/ · PT: [uái íznt chí uârkin tudêi uén chí iújuali néver mísiz a dêi]
75. He usually cooks dinner, but tonight I'm cooking because it's his birthday. — Ele geralmente cozinha o jantar, mas hoje à noite estou cozinhando porque é aniversário dele.
IPA: /hiː ˈjuːʒuəli kʊks ˈdɪnər bʌt təˈnaɪt aɪm ˈkʊkɪŋ bɪˈkɔːz ɪts hɪz ˈbɜːrθdeɪ/ · PT: [rrí iújuali kúks díner bât tunáit áim kúkin bikóz íts rríz bârthdei]




Do you work here? / Yes, I do. — Você trabalha aqui? / Sim, trabalho.
IPA: /duː juː wɜːrk hɪr · jɛs aɪ duː/ · PT: [dú iú uârk rrír · iés ái dú]
Are you working now? / Yes, I am. — Você está trabalhando agora? / Sim, estou.
IPA: /ɑːr juː ˈwɜːrkɪŋ naʊ · jɛs aɪ æm/ · PT: [ár iú uârkin náu · iés ái ém]
What are you doing? / I'm cooking. — O que você está fazendo? / Estou cozinhando.
IPA: /wʌt ɑːr juː ˈduːɪŋ · aɪm ˈkʊkɪŋ/ · PT: [uât ár iú dúin · áim kúkin]
What do you do? / I'm a teacher. — O que você faz? / Sou professor.
IPA: /wʌt duː juː duː · aɪm ə ˈtiːtʃər/ · PT: [uât dú iú dú · áim a títcher]
Does she work on weekends? / No, she doesn't. — Ela trabalha nos fins de semana? / Não, não trabalha.
IPA: /dʌz ʃiː wɜːrk ɑːn ˈwiːkɛndz · noʊ ʃiː ˈdʌznt/ · PT: [dâz chí uârk ón uíkendz · nôu chí dâznt]
Is she working today? / No, she isn't. — Ela está trabalhando hoje? / Não, não está.
IPA: /ɪz ʃiː ˈwɜːrkɪŋ təˈdeɪ · noʊ ʃiː ˈɪznt/ · PT: [iz chí uârkin tudêi · nôu chí íznt]
How often do you exercise? / Twice a week. — Com que frequência você se exercita? / Duas vezes por semana.
IPA: /haʊ ˈɔːfn̩ duː juː ˈɛksərsaɪz · twaɪs ə wiːk/ · PT: [rráu ófan dú iú éksersaiz · tuáis a uík]
Are you exercising right now? / Yes, at the gym. — Você está se exercitando agora? / Sim, na academia.
IPA: /ɑːr juː ˈɛksərsaɪzɪŋ raɪt naʊ · jɛs æt ðə dʒɪm/ · PT: [ár iú éksersaizin ráit náu · iés ét dha djím]
Does the store close early? / Yes, at six. — A loja fecha cedo? / Sim, às seis.
IPA: /dʌz ðə stɔːr kloʊz ˈɜːrli · jɛs æt sɪks/ · PT: [dâz dha stór klôuz ârli · iés ét síks]
Is the store closing now? / Yes, right now. — A loja está fechando agora? / Sim, agora mesmo.
IPA: /ɪz ðə stɔːr ˈkloʊzɪŋ naʊ · jɛs raɪt naʊ/ · PT: [iz dha stór klôuzin náu · iés ráit náu]
What time does the train leave? / At four. — A que horas o trem sai? / Às quatro.
IPA: /wʌt taɪm dʌz ðə treɪn liːv · æt fɔːr/ · PT: [uât táim dâz dha trêin lív · ét fór]
Are you leaving now? / Yes, right away. — Você está saindo agora? / Sim, agora mesmo.
IPA: /ɑːr juː ˈliːvɪŋ naʊ · jɛs raɪt əˈweɪ/ · PT: [ár iú lívin náu · iés ráit auêi]
Do you have any brothers? / Yes, one. — Você tem algum irmão? / Sim, um.
IPA: /duː juː hæv ˈɛni ˈbrʌðərz · jɛs wʌn/ · PT: [dú iú rrév éni brâdherz · iés uân]
Are you having a good time? / Yes, a great time. — Você está se divertindo? / Sim, muito.
IPA: /ɑːr juː ˈhævɪŋ ə ɡʊd taɪm · jɛs ə ɡreɪt taɪm/ · PT: [ár iú rrévin a gúd táim · iés a grêit táim]
Do you like coffee? / Yes, I love it. — Você gosta de café? / Sim, eu adoro.
IPA: /duː juː laɪk ˈkɔːfi · jɛs aɪ lʌv ɪt/ · PT: [dú iú láik kófi · iés ái lâv ít]
Are you meeting John today? / Yes, this evening. — Você vai encontrar o John hoje? / Sim, hoje à noite.
IPA: /ɑːr juː ˈmiːtɪŋ dʒɑːn təˈdeɪ · jɛs ðɪs ˈiːvnɪŋ/ · PT: [ár iú mítin djón tudêi · iés dhís ívnin]
What's the weather like today? / It's raining. — Como está o tempo hoje? / Está chovendo.
IPA: /wʌts ðə ˈwɛðər laɪk təˈdeɪ · ɪts ˈreɪnɪŋ/ · PT: [uâts dha uédher láik tudêi · íts rêinin]
Does it usually rain here? / Yes, a lot. — Costuma chover aqui? / Sim, bastante.
IPA: /dʌz ɪt ˈjuːʒuəli reɪn hɪr · jɛs ə lɑːt/ · PT: [dâz ít iújuali rêin rrír · iés a lát]
Is your English improving? / Yes, a little. — Seu inglês está melhorando? / Sim, um pouco.
IPA: /ɪz jɔːr ˈɪŋɡlɪʃ ɪmˈpruːvɪŋ · jɛs ə ˈlɪtl̩/ · PT: [iz iór ínglich imprúvin · iés a lítou]
Do you need help? / Yes, please. — Você precisa de ajuda? / Sim, por favor.
IPA: /duː juː niːd hɛlp · jɛs pliːz/ · PT: [dú iú níd rrélp · iés plíz]
What are you reading? / A great novel. — O que você está lendo? / Um ótimo romance.
IPA: /wʌt ɑːr juː ˈriːdɪŋ · ə ɡreɪt ˈnɑːvl̩/ · PT: [uât ár iú rídin · a grêit návou]
Do you travel a lot? / Not usually. — Você viaja muito? / Não normalmente.
IPA: /duː juː ˈtrævl̩ ə lɑːt · nɑːt ˈjuːʒuəli/ · PT: [dú iú trévol a lát · nót iújuali]
Are you traveling next month? / Yes, to Rome. — Você vai viajar no mês que vem? / Sim, para Roma.
IPA: /ɑːr juː ˈtrævl̩ɪŋ nɛkst mʌnθ · jɛs tə roʊm/ · PT: [ár iú trévolin nékst mânth · iés tu rrôum]
What happened? You look sad. / I'm just tired. — O que aconteceu? Você parece triste. / Só estou cansado.
IPA: /wʌt ˈhæpənd juː lʊk sæd aɪm dʒʌst ˈtaɪərd/ · PT: [uât rrépand iú lúk séd áim djâst táierd]
Are you feeling okay? / Yes, much better now. — Você está se sentindo bem? / Sim, bem melhor agora.
IPA: /ɑːr juː ˈfiːlɪŋ oʊˈkeɪ · jɛs mʌtʃ ˈbɛtər naʊ/ · PT: [ár iú fílin ôukêi · iés mâtch béter náu]
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
      id: `lesson_1_grammar_b1_id_${Math.random().toString(36).substr(2, 7)}`,
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

fs.writeFileSync('public/decks/lesson_1_grammar_b1_en.json', JSON.stringify(deck, null, 2));
console.log(`Created lesson_1_grammar_b1_en.json with ${deck.length} cards`);

const metadataPath = 'data/decksMetadata.json';
let metadata = {};
if (fs.existsSync(metadataPath)) {
  metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
}

if (!metadata['lesson_1_grammar_b1']) {
  metadata['lesson_1_grammar_b1'] = { cardCount: 0, en: 0, es: 0 };
}
metadata['lesson_1_grammar_b1'].cardCount = deck.length;
metadata['lesson_1_grammar_b1'].en = deck.length;

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
console.log('Updated metadata');
