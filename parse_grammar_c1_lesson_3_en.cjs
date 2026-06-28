const fs = require('fs');

const rawText = `Every day, my grandad will tell the same stories. — Todo dia, meu avô conta as mesmas histórias. (hábito característico)
IPA: /ˈɛvri deɪ maɪ ˈɡrændæd wɪl tɛl ðə seɪm ˈstɔːriz/ · PT: [évri dêi mái grénded uíou tél dha sêim stóriz]
Oil will float on water. — O óleo flutua na água. (verdade sempre)
IPA: /ɔɪl wɪl floʊt ɑːn ˈwɔːtər/ · PT: [óiou uíou flôut ón uóter]
The car won't start. — O carro não quer pegar. (recusa)
IPA: /ðə kɑːr woʊnt stɑːrt/ · PT: [dha kár uôunt stárt]
She won't listen to anything you say. — Ela não quer ouvir nada que você diz. (crítica)
IPA: /ʃiː woʊnt ˈlɪsn̩ tə ˈɛniθɪŋ juː seɪ/ · PT: [chí uôunt lísan tu énithin iú sêi]
That'll be Mary. — Deve ser a Mary. (suposição sobre o presente)
IPA: /ðætl̩ biː ˈmɛri/ · PT: [dhétou bí méri]
She'll have left by now. — Ela já deve ter ido a essa altura. (dedução)
IPA: /ʃiːl hæv lɛft baɪ naʊ/ · PT: [chíou rrév léft bái náu]


WOULD — hábitos e situações passadas/imaginárias
7. When we were students, we would stay up late. — Quando éramos estudantes, ficávamos acordados até tarde. (hábito passado)
IPA: /wɛn wiː wɜːr ˈstuːdənts wiː wʊd steɪ ʌp leɪt/ · PT: [uén uí uâr stúdents uí uúd stêi âp lêit]
8. The river would freeze in winter. — O rio congelava no inverno. (verdade passada)
IPA: /ðə ˈrɪvər wʊd friːz ɪn ˈwɪntər/ · PT: [dha ríver uúd fríz in uínter]
9. The car wouldn't start yesterday. — O carro não quis pegar ontem. (recusa passada)
IPA: /ðə kɑːr ˈwʊdnt stɑːrt ˈjɛstərdeɪ/ · PT: [dha kár uúdent stárt iéster dei]
10. She wouldn't listen to anything you said. — Ela não queria ouvir nada que você dizia. (crítica passada)
IPA: /ʃiː ˈwʊdnt ˈlɪsn̩ tə ˈɛniθɪŋ juː sɛd/ · PT: [chí uúdent lísan tu énithin iú séd]
11. I would've helped, but he said no. — Eu teria ajudado, mas ele disse não. (situação imaginária)
IPA: /aɪ ˈwʊdəv hɛlpt bʌt hiː sɛd noʊ/ · PT: [ái uúdav rrélpt bât rrí séd nôu]
12. I'd have to agree with you on that. — Eu teria que concordar com você nisso. (polidez/cautela)
IPA: /aɪd hæv tə əˈɡriː wɪð juː ɑːn ðæt/ · PT: [áid rrév tu agrí uídh iú ón dhét]

SHOULD — recomendação, expectativa, formal
13. People should treat others with respect. — As pessoas deveriam tratar os outros com respeito. (recomendação)
IPA: /ˈpiːpl̩ ʃʊd triːt ˈʌðərz wɪð rɪˈspɛkt/ · PT: [pípou chúd trít âdherz uídh rispékt]
14. That should be enough to fix the problem. — Isso deveria ser suficiente para resolver o problema. (conclusão lógica)
IPA: /ðæt ʃʊd biː ɪˈnʌf tə fɪks ðə ˈprɑːbləm/ · PT: [dhét chúd bí inâf tu fíks dha práblam]
15. He should be home by now. — Ele já deveria estar em casa. (expectativa)
IPA: /hiː ʃʊd biː hoʊm baɪ naʊ/ · PT: [rrí chúd bí rrôum bái náu]
16. The results should be ready tomorrow. — Os resultados deveriam estar prontos amanhã.
IPA: /ðə rɪˈzʌlts ʃʊd biː ˈrɛdi təˈmɑːroʊ/ · PT: [dha rizâlts chúd bí rédi tumárou]
17. They shouldn't have spoken to her like that. — Eles não deveriam ter falado com ela daquele jeito. (arrependimento)
IPA: /ðeɪ ˈʃʊdnt hæv ˈspoʊkən tə hɜːr laɪk ðæt/ · PT: [dhêi chúdent rrév spôukan tu rrâr láik dhét]
18. I suggest that he should apologize. — Eu sugiro que ele se desculpe. (formal, that-clause)
IPA: /aɪ səˈdʒɛst ðæt hiː ʃʊd əˈpɑːlədʒaɪz/ · PT: [ái sadjést dhét rrí chúd apáladjaiz]
19. It's essential that we should act quickly. — É essencial que ajamos rápido. (formal)
IPA: /ɪts ɪˈsɛnʃl̩ ðæt wiː ʃʊd ækt ˈkwɪkli/ · PT: [íts isénchou dhét uí chúd ékt kuíkli]
20. If you should need any help, just let me know. — Se você precisar de ajuda, é só avisar. (condicional formal)
IPA: /ɪf juː ʃʊd niːd ˈɛni hɛlp dʒʌst lɛt miː noʊ/ · PT: [if iú chúd níd éni rrélp djâst lét mí nôu]
21. Take my number in case you should need anything. — Pegue meu número caso precise de algo. (formal)
IPA: /teɪk maɪ ˈnʌmbər ɪn keɪs juː ʃʊd niːd ˈɛniθɪŋ/ · PT: [têik mái nâmber in kêis iú chúd níd énithin]

Resumo das formas
22. will have + past participle = deduction. — will have + particípio = dedução.
IPA: /wɪl hæv pæst ˈpɑːrtɪsɪpl̩ dɪˈdʌkʃn̩/ · PT: [uíou rrév pést pártisipou didâkchan]
23. would have + past participle = imaginary past. — would have + particípio = passado imaginário.
IPA: /wʊd hæv pæst ˈpɑːrtɪsɪpl̩ ɪˈmædʒɪnɛri pæst/ · PT: [uúd rrév pést pártisipou imédjineri pést]
24. should have + past participle = regret. — should have + particípio = arrependimento.
IPA: /ʃʊd hæv pæst ˈpɑːrtɪsɪpl̩ rɪˈɡrɛt/ · PT: [chúd rrév pést pártisipou rigrét]
25. will = present assumption; would = past habit; should = expectation. — will = suposição presente; would = hábito passado; should = expectativa.
IPA: /wɪl ˈprɛznt əˈsʌmpʃn̩ wʊd pæst ˈhæbɪt ʃʊd ˌɛkspɛkˈteɪʃn̩/ · PT: [uíou préznt asâmpchan uúd pést rrébit chúd ekspektêichan]


26. My dad will always fall asleep on the sofa. — Meu pai sempre dorme no sofá.
IPA: /maɪ dæd wɪl ˈɔːlweɪz fɔːl əˈsliːp ɑːn ðə ˈsoʊfə/ · PT: [mái déd uíou ólueiz fól aslíp ón dha sôufa]
27. Every morning, she'll check her phone first. — Toda manhã, ela olha o celular primeiro.
IPA: /ˈɛvri ˈmɔːrnɪŋ ʃiːl tʃɛk hɜːr foʊn fɜːrst/ · PT: [évri mórnin chíou tchék rrâr fôun fârst]
28. The kids will leave their toys everywhere. — As crianças deixam os brinquedos por toda parte.
IPA: /ðə kɪdz wɪl liːv ðɛr tɔɪz ˈɛvriwɛr/ · PT: [dha kídz uíou lív dhér tóiz évriuér]

Problemas / recusa
29. The door won't open. — A porta não quer abrir.
IPA: /ðə dɔːr woʊnt ˈoʊpən/ · PT: [dha dór uôunt ôupan]
30. My computer won't turn on. — Meu computador não quer ligar.
IPA: /maɪ kəmˈpjuːtər woʊnt tɜːrn ɑːn/ · PT: [mái kompiúter uôunt târn ón]
31. This won't work. — Isso não vai funcionar.
IPA: /ðɪs woʊnt wɜːrk/ · PT: [dhís uôunt uârk]

Suposições
32. That'll be the delivery. — Deve ser a entrega.
IPA: /ðætl̩ biː ðə dɪˈlɪvəri/ · PT: [dhétou bí dha dilíveri]
33. He'll be at work right now. — Ele deve estar no trabalho agora.
IPA: /hiːl biː æt wɜːrk raɪt naʊ/ · PT: [rríou bí ét uârk ráit náu]
34. They'll have arrived by now. — Eles já devem ter chegado.
IPA: /ðeɪl hæv əˈraɪvd baɪ naʊ/ · PT: [dhêiou rrév aráivd bái náu]

Lembranças (hábitos passados)
35. We would play outside all day. — A gente brincava lá fora o dia todo.
IPA: /wiː wʊd pleɪ ˌaʊtˈsaɪd ɔːl deɪ/ · PT: [uí uúd plêi autsáid ól dêi]
36. Grandma would bake every Sunday. — A vovó fazia bolo todo domingo.
IPA: /ˈɡrænmɑː wʊd beɪk ˈɛvri ˈsʌndeɪ/ · PT: [grénmá uúd bêik évri sândei]
37. We wouldn't go to bed before midnight. — A gente não ia dormir antes da meia-noite.
IPA: /wiː ˈwʊdnt ɡoʊ tə bɛd bɪˈfɔːr ˈmɪdnaɪt/ · PT: [uí uúdent gôu tu béd bifór mídnait]

Situações imaginárias
38. I would've called, but I lost your number. — Eu teria ligado, mas perdi seu número.
IPA: /aɪ ˈwʊdəv kɔːld bʌt aɪ lɔːst jɔːr ˈnʌmbər/ · PT: [ái uúdav kóld bât ái lóst iór nâmber]
39. She would've come if she'd known. — Ela teria vindo se soubesse.
IPA: /ʃiː ˈwʊdəv kʌm ɪf ʃiːd noʊn/ · PT: [chí uúdav kâm if chíd nôun]

Conselhos / recomendações
40. You should rest more. — Você deveria descansar mais.
IPA: /juː ʃʊd rɛst mɔːr/ · PT: [iú chúd rést mór]
41. We should leave early to avoid traffic. — A gente deveria sair cedo para evitar o trânsito.
IPA: /wiː ʃʊd liːv ˈɜːrli tə əˈvɔɪd ˈtræfɪk/ · PT: [uí chúd lív ârli tu avóid tréfik]
42. You shouldn't worry so much. — Você não deveria se preocupar tanto.
IPA: /juː ˈʃʊdnt ˈwɜːri soʊ mʌtʃ/ · PT: [iú chúdent uâri sôu mâtch]

Expectativas
43. The package should arrive today. — O pacote deveria chegar hoje.
IPA: /ðə ˈpækɪdʒ ʃʊd əˈraɪv təˈdeɪ/ · PT: [dha pékidj chúd aráiv tudêi]
44. The meeting should finish by five. — A reunião deveria terminar até as cinco.
IPA: /ðə ˈmiːtɪŋ ʃʊd ˈfɪnɪʃ baɪ faɪv/ · PT: [dha mítin chúd fínich bái fáiv]
45. This should be enough food for everyone. — Isso deveria ser comida suficiente para todos.
IPA: /ðɪs ʃʊd biː ɪˈnʌf fuːd fɔːr ˈɛvriwʌn/ · PT: [dhís chúd bí inâf fúd fór évriuan]

Arrependimentos
46. I should have studied more. — Eu deveria ter estudado mais.
IPA: /aɪ ʃʊd hæv ˈstʌdid mɔːr/ · PT: [ái chúd rrév stâdid mór]
47. We shouldn't have left so late. — A gente não deveria ter saído tão tarde.
IPA: /wiː ˈʃʊdnt hæv lɛft soʊ leɪt/ · PT: [uí chúdent rrév léft sôu lêit]

Pedidos educados / cautelosos
48. I'd have to think about it. — Eu teria que pensar a respeito.
IPA: /aɪd hæv tə θɪŋk əˈbaʊt ɪt/ · PT: [áid rrév tu thínk abáut ít]
49. I would've thought he'd say yes. — Eu teria pensado que ele diria sim.
IPA: /aɪ ˈwʊdəv θɔːt hiːd seɪ jɛs/ · PT: [ái uúdav thót rríd sêi iés]
50. If you should change your mind, call me. — Se você mudar de ideia, me ligue.
IPA: /ɪf juː ʃʊd tʃeɪndʒ jɔːr maɪnd kɔːl miː/ · PT: [if iú chúd tchêindj iór máind kól mí]


51. You should rest. — Você deveria descansar.
IPA: /juː ʃʊd rɛst/ · PT: [iú chúd rést]
52. The car won't start. — O carro não quer pegar.
IPA: /ðə kɑːr woʊnt stɑːrt/ · PT: [dha kár uôunt stárt]
53. We would play outside. — A gente brincava lá fora.
IPA: /wiː wʊd pleɪ ˌaʊtˈsaɪd/ · PT: [uí uúd plêi autsáid]
54. That'll be him. — Deve ser ele.
IPA: /ðætl̩ biː hɪm/ · PT: [dhétou bí rrím]

Um pouco mais
55. He should be here soon. — Ele deveria chegar logo.
IPA: /hiː ʃʊd biː hɪr suːn/ · PT: [rrí chúd bí rrír sún]
56. She won't answer my calls. — Ela não quer atender minhas ligações.
IPA: /ʃiː woʊnt ˈænsər maɪ kɔːlz/ · PT: [chí uôunt énser mái kólz]
57. We would visit them every summer. — A gente os visitava todo verão.
IPA: /wiː wʊd ˈvɪzɪt ðɛm ˈɛvri ˈsʌmər/ · PT: [uí uúd vízit dhém évri sâmer]
58. They'll have finished by now. — Eles já devem ter terminado.
IPA: /ðeɪl hæv ˈfɪnɪʃt baɪ naʊ/ · PT: [dhêiou rrév fínicht bái náu]

Perguntas e negações
59. Should I call him now? — Devo ligar para ele agora?
IPA: /ʃʊd aɪ kɔːl hɪm naʊ/ · PT: [chúd ái kól rrím náu]
60. Wouldn't that be better? — Isso não seria melhor?
IPA: /ˈwʊdnt ðæt biː ˈbɛtər/ · PT: [uúdent dhét bí béter]
61. He shouldn't be late. — Ele não deveria se atrasar.
IPA: /hiː ˈʃʊdnt biː leɪt/ · PT: [rrí chúdent bí lêit]
62. Will that be enough? — Isso será suficiente?
IPA: /wɪl ðæt biː ɪˈnʌf/ · PT: [uíou dhét bí inâf]

Conectores e tempos verbais
63. You should apologize because you were rude. — Você deveria se desculpar porque foi mal-educado.
IPA: /juː ʃʊd əˈpɑːlədʒaɪz bɪˈkɔːz juː wɜːr ruːd/ · PT: [iú chúd apáladjaiz bikóz iú uâr rúd]
64. When I was young, I would read every night. — Quando eu era jovem, eu lia toda noite.
IPA: /wɛn aɪ wəz jʌŋ aɪ wʊd riːd ˈɛvri naɪt/ · PT: [uén ái uâz iâN ái uúd ríd évri náit]
65. I would've helped, but I was busy. — Eu teria ajudado, mas estava ocupado.
IPA: /aɪ ˈwʊdəv hɛlpt bʌt aɪ wəz ˈbɪzi/ · PT: [ái uúdav rrélpt bât ái uâz bízi]
66. He should have called when he arrived. — Ele deveria ter ligado quando chegou.
IPA: /hiː ʃʊd hæv kɔːld wɛn hiː əˈraɪvd/ · PT: [rrí chúd rrév kóld uén rrí aráivd]
67. That'll be the mailman; he always comes at noon. — Deve ser o carteiro; ele sempre vem ao meio-dia.
IPA: /ðætl̩ biː ðə ˈmeɪlmæn hiː ˈɔːlweɪz kʌmz æt nuːn/ · PT: [dhétou bí dha mêilmen rrí ólueiz kâmz ét nún]

As mais ricas
68. You shouldn't have said that, even if it was true. — Você não deveria ter dito aquilo, mesmo que fosse verdade.
IPA: /juː ˈʃʊdnt hæv sɛd ðæt ˈiːvn̩ ɪf ɪt wəz truː/ · PT: [iú chúdent rrév séd dhét ívan if ít uâz trú]
69. I would have agreed, but the terms had already changed. — Eu teria concordado, mas os termos já tinham mudado.
IPA: /aɪ wʊd hæv əˈɡriːd bʌt ðə tɜːrmz hæd ɔːlˈrɛdi tʃeɪndʒd/ · PT: [ái uúd rrév agríd bât dha târmz rréd olrédi tchêindjd]
70. If you should see her, please give her my regards. — Se por acaso você a vir, mande lembranças.
IPA: /ɪf juː ʃʊd siː hɜːr pliːz ɡɪv hɜːr maɪ rɪˈɡɑːrdz/ · PT: [if iú chúd sí rrâr plíz guív rrâr mái rigárdz]
71. It's essential that everyone should be informed before the deadline. — É essencial que todos sejam informados antes do prazo.
IPA: /ɪts ɪˈsɛnʃl̩ ðæt ˈɛvriwʌn ʃʊd biː ɪnˈfɔːrmd bɪˈfɔːr ðə ˈdɛdlaɪn/ · PT: [íts isénchou dhét évriuan chúd bí infórmd bifór dha dédlain]
72. He'll have realized his mistake by now, I suppose. — Ele já deve ter percebido o erro a essa altura, eu suponho.
IPA: /hiːl hæv ˈriːəlaɪzd hɪz mɪˈsteɪk baɪ naʊ aɪ səˈpoʊz/ · PT: [rríou rrév ríalaizd rríz mistêik bái náu ái sapôuz]
73. We should leave now, or we'll miss the train. — A gente deveria sair agora, ou vamos perder o trem.
IPA: /wiː ʃʊd liːv naʊ ɔːr wiːl mɪs ðə treɪn/ · PT: [uí chúd lív náu ór uíou mís dha trêin]
74. I suggest that the report should be reviewed before we send it. — Eu sugiro que o relatório seja revisado antes de enviarmos.
IPA: /aɪ səˈdʒɛst ðæt ðə rɪˈpɔːrt ʃʊd biː rɪˈvjuːd bɪˈfɔːr wiː sɛnd ɪt/ · PT: [ái sadjést dhét dha ripórt chúd bí riviúd bifór uí sénd ít]
75. Take an umbrella in case it should rain later. — Leve um guarda-chuva caso chova mais tarde.
IPA: /teɪk ən ʌmˈbrɛlə ɪn keɪs ɪt ʃʊd reɪn ˈleɪtər/ · PT: [têik an ambréla in kêis ít chúd rêin lêiter]




"Who's at the door?" / "That'll be Mary." — "Quem está na porta?" / "Deve ser a Mary."
IPA: /huːz æt ðə dɔːr · ðætl̩ biː ˈmɛri/ · PT: [rrúz ét dha dór · dhétou bí méri]
"Should I help?" / "Yes, please." — "Devo ajudar?" / "Sim, por favor."
IPA: /ʃʊd aɪ hɛlp · jɛs pliːz/ · PT: [chúd ái rrélp · iés plíz]
"Why won't it start?" / "The battery's dead." — "Por que não pega?" / "A bateria está descarregada."
IPA: /waɪ woʊnt ɪt stɑːrt · ðə ˈbætəriz dɛd/ · PT: [uái uôunt ít stárt · dha bétariz déd]
"Did your grandad tell stories?" / "Yes, every day." — "Seu avô contava histórias?" / "Sim, todo dia."
IPA: /dɪd jɔːr ˈɡrændæd tɛl ˈstɔːriz · jɛs ˈɛvri deɪ/ · PT: [díd iór grénded tél stóriz · iés évri dêi]
"Has she left?" / "She'll have left by now." — "Ela já foi?" / "A essa altura já deve ter ido."
IPA: /hæz ʃiː lɛft · ʃiːl hæv lɛft baɪ naʊ/ · PT: [rréz chí léft · chíou rrév léft bái náu]
"Should we leave early?" / "Yes, to avoid traffic." — "A gente deveria sair cedo?" / "Sim, pra evitar trânsito."
IPA: /ʃʊd wiː liːv ˈɜːrli · jɛs tə əˈvɔɪd ˈtræfɪk/ · PT: [chúd uí lív ârli · iés tu avóid tréfik]
"Would you have helped?" / "Of course I would." — "Você teria ajudado?" / "Claro que sim."
IPA: /wʊd juː hæv hɛlpt · ʌv kɔːrs aɪ wʊd/ · PT: [uúd iú rrév rrélpt · ov kórs ái uúd]
"Is he home yet?" / "He should be." — "Ele já está em casa?" / "Deveria estar."
IPA: /ɪz hiː hoʊm jɛt · hiː ʃʊd biː/ · PT: [iz rrí rrôum iét · rrí chúd bí]
"When will it be ready?" / "It should be ready tomorrow." — "Quando vai estar pronto?" / "Deveria estar pronto amanhã."
IPA: /wɛn wɪl ɪt biː ˈrɛdi · ɪt ʃʊd biː ˈrɛdi təˈmɑːroʊ/ · PT: [uén uíou ít bí rédi · ít chúd bí rédi tumárou]
"Did you used to stay up late?" / "Yes, we would." — "Vocês ficavam acordados até tarde?" / "Sim, ficávamos."
IPA: /dɪd juː juːst tə steɪ ʌp leɪt · jɛs wiː wʊd/ · PT: [díd iú iúst tu stêi âp lêit · iés uí uúd]
"Should I apologize?" / "Yes, you should." — "Devo me desculpar?" / "Sim, deveria."
IPA: /ʃʊd aɪ əˈpɑːlədʒaɪz · jɛs juː ʃʊd/ · PT: [chúd ái apáladjaiz · iés iú chúd]
"Why won't she listen?" / "She never does." — "Por que ela não quer ouvir?" / "Ela nunca ouve."
IPA: /waɪ woʊnt ʃiː ˈlɪsn̩ · ʃiː ˈnɛvər dʌz/ · PT: [uái uôunt chí lísan · chí néver dâz]
"Will that be enough?" / "It should be." — "Isso será suficiente?" / "Deveria ser."
IPA: /wɪl ðæt biː ɪˈnʌf · ɪt ʃʊd biː/ · PT: [uíou dhét bí inâf · ít chúd bí]
"Did they say sorry?" / "No, they should have." — "Eles pediram desculpa?" / "Não, deveriam ter pedido."
IPA: /dɪd ðeɪ seɪ ˈsɑːri · noʊ ðeɪ ʃʊd hæv/ · PT: [díd dhêi sêi sári · nôu dhêi chúd rrév]
"Would the river freeze?" / "Yes, every winter." — "O rio congelava?" / "Sim, todo inverno."
IPA: /wʊd ðə ˈrɪvər friːz · jɛs ˈɛvri ˈwɪntər/ · PT: [uúd dha ríver fríz · iés évri uínter]
"Should I bring anything?" / "No, it's fine." — "Devo levar alguma coisa?" / "Não, tá tudo certo."
IPA: /ʃʊd aɪ brɪŋ ˈɛniθɪŋ · noʊ ɪts faɪn/ · PT: [chúd ái brín énithin · nôu íts fáin]
"Is the package here?" / "It should arrive today." — "O pacote chegou?" / "Deveria chegar hoje."
IPA: /ɪz ðə ˈpækɪdʒ hɪr · ɪt ʃʊd əˈraɪv təˈdeɪ/ · PT: [iz dha pékidj rrír · ít chúd aráiv tudêi]
"Would you agree?" / "I'd have to, yes." — "Você concordaria?" / "Teria que concordar, sim."
IPA: /wʊd juː əˈɡriː · aɪd hæv tuː jɛs/ · PT: [uúd iú agrí · áid rrév tú iés]
"What if I need help?" / "Call me if you should." — "E se eu precisar de ajuda?" / "Me ligue se precisar."
IPA: /wʌt ɪf aɪ niːd hɛlp · kɔːl miː ɪf juː ʃʊd/ · PT: [uât if ái níd rrélp · kól mí if iú chúd]
"Did he apologize?" / "I would've thought so." — "Ele se desculpou?" / "Eu teria pensado que sim."
IPA: /dɪd hiː əˈpɑːlədʒaɪz · aɪ ˈwʊdəv θɔːt soʊ/ · PT: [díd rrí apáladjaiz · ái uúdav thót sôu]
"Should we wait?" / "Yes, just in case." — "A gente deveria esperar?" / "Sim, só por precaução."
IPA: /ʃʊd wiː weɪt · jɛs dʒʌst ɪn keɪs/ · PT: [chúd uí uêit · iés djâst in kêis]
"Why won't the door open?" / "It's stuck." — "Por que a porta não abre?" / "Está emperrada."
IPA: /waɪ woʊnt ðə dɔːr ˈoʊpən · ɪts stʌk/ · PT: [uái uôunt dha dór ôupan · íts stâk]
"Would you have come?" / "If I'd known, yes." — "Você teria vindo?" / "Se eu soubesse, sim."
IPA: /wʊd juː hæv kʌm · ɪf aɪd noʊn jɛs/ · PT: [uúd iú rrév kâm · if áid nôun iés]
"Is it essential?" / "Yes, we should act now." — "É essencial?" / "Sim, devemos agir agora."
IPA: /ɪz ɪt ɪˈsɛnʃl̩ · jɛs wiː ʃʊd ækt naʊ/ · PT: [iz ít isénchou · iés uí chúd ékt náu]
"Should I worry?" / "No, you shouldn't." — "Devo me preocupar?" / "Não, não deveria."
IPA: /ʃʊd aɪ ˈwɜːri · noʊ juː ˈʃʊdnt/ · PT: [chúd ái uâri · nôu iú chúdent]
`;

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const items = [];
let i = 0;
let cardCounter = 1;

while (i < lines.length) {
  let line = lines[i];
  if (line.match(/^([a-zA-ZÀ-ÿ0-9-.\/]*\s*(WOULD|SHOULD|Resumo|Problemas|Suposições|Lembranças|Situações|Conselhos|Expectativas|Arrependimentos|Pedidos|Um pouco|Perguntas|Conectores|As mais ricas).*)/i) && !line.includes('—')) {
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
          id: `lesson_3_grammar_c1_en_card_${cardCounter++}`,
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

fs.writeFileSync('public/decks/lesson_3_grammar_c1_en.json', JSON.stringify(items, null, 2));
console.log('Created lesson_3_grammar_c1_en.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['lesson_3_grammar_c1']) {
  meta['lesson_3_grammar_c1'] = {};
}
meta['lesson_3_grammar_c1'].en = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
