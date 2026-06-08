import { FlashcardData } from '../types';

const RAW_CARDS: Array<[string, string, string, string, string[], string, string]> = [
  // Block 1: Verbs
  [
    "to take - took",
    "pegar / levar - pegou / levou",
    "/tu teɪk / tʊk/",
    "tchu têic / tûc",
    ["to", " take", " took"],
    "Can you take me to school, Mom?",
    "Você pode me levar para a escola, mãe?"
  ],
  [
    "to speak - spoke",
    "falar - falou",
    "/tu spiːk / spoʊk/",
    "tchu espîc / espôuc",
    ["to", " speak", " spoke"],
    "She went on an exchange program and now she can speak fluently.",
    "Ela participou de um programa de intercâmbio e agora consegue falar fluentemente."
  ],
  [
    "to improve - improved",
    "melhorar - melhorou",
    "/tu ɪmˈpruːv / ɪmˈpruːvd/",
    "tchu im-prûv / im-prûvd",
    ["to", " im", "prove", " im", "proved"],
    "You can improve your writing by reading.",
    "Você pode melhorar sua escrita lendo."
  ],

  // Block 2: Vocabularies
  [
    "reading",
    "leitura",
    "/ˈriːdɪŋ/",
    "rî-din",
    ["read", "ing"],
    "Can you help me with the reading?",
    "Você pode me ajudar com a leitura?"
  ],
  [
    "writing",
    "escrita",
    "/ˈraɪtɪŋ/",
    "rái-tin",
    ["writ", "ing"],
    "You can improve your writing by reading.",
    "Você pode melhorar sua escrita lendo."
  ],
  [
    "listening",
    "compreensão auditiva",
    "/ˈlɪsənɪŋ/",
    "lís-nin",
    ["lis", "ten", "ing"],
    "I can't improve my listening skills with only these classes.",
    "Eu não consigo melhorar minhas habilidades de compreensão auditiva apenas com estas aulas."
  ],
  [
    "speaking",
    "fala / conversação",
    "/ˈspiːkɪŋ/",
    "espî-quin",
    ["speak", "ing"],
    "They only need to improve their speaking.",
    "Eles só precisam melhorar sua conversação."
  ],
  [
    "communication",
    "comunicação",
    "/kəˌmjuːnɪˈkeɪʃən/",
    "co-miu-ni-quêi-shôn",
    ["com", "mu", "ni", "ca", "tion"],
    "We need to improve our communication skills.",
    "Precisamos melhorar nossas habilidades de comunicação."
  ],
  [
    "speech",
    "discurso / fala",
    "/spiːtʃ/",
    "espîtch",
    ["speech"],
    "Maybe you can talk to your teacher about the speech.",
    "Talvez você possa conversar com seu professor sobre o discurso."
  ],
  [
    "pronunciation",
    "pronúncia",
    "/prəˌnʌnsiˈeɪʃən/",
    "pro-nân-ci-êi-shôn",
    ["pro", "nun", "ci", "a", "tion"],
    "They only need to improve their pronunciation. The other skills are fine.",
    "Eles só precisam melhorar a pronúncia. As outras habilidades estão boas."
  ],
  [
    "ability",
    "habilidade / capacidade",
    "/əˈbɪlɪti/",
    "a-bí-li-ti",
    ["a", "bil", "i", "ty"],
    "She can learn everything. She has a great ability.",
    "Ela consegue aprender tudo. Ela tem uma grande capacidade."
  ],
  [
    "skill",
    "habilidade",
    "/skɪl/",
    "es-quíl",
    ["skill"],
    "We need to improve our communication skills.",
    "Precisamos melhorar nossas habilidades de comunicação."
  ],
  [
    "test",
    "prova / teste",
    "/tɛst/",
    "tést",
    ["test"],
    "I took the test yesterday.",
    "Eu fiz a prova ontem."
  ],
  [
    "break",
    "intervalo",
    "/breɪk/",
    "brêic",
    ["break"],
    "They spend the break reading.",
    "Eles passam o intervalo lendo."
  ],
  [
    "public",
    "público",
    "/ˈpʌblɪk/",
    "pâ-blic",
    ["pub", "lic"],
    "It's hard for him to speak in public.",
    "É difícil para ele falar em público."
  ],
  [
    "fluently",
    "fluentemente",
    "/ˈfluːəntli/",
    "flû-ent-li",
    ["flu", "ent", "ly"],
    "She went on an exchange program and now she can speak fluently.",
    "Ela participou de um programa de intercâmbio e agora consegue falar fluentemente."
  ],

  // Block 3: Sentences 1
  [
    "I don't get it.",
    "Eu não entendo.",
    "/aɪ doʊnt ɡɛt ɪt/",
    "ai dôunt guét ít",
    ["I", " don't", " get", " it."],
    "Sorry, I can't hear you. Can you repeat that, please? I didn't get it.",
    "Desculpe, não consigo ouvir você. Você pode repetir, por favor? Eu não entendi."
  ],
  [
    "Sorry, I can't hear you.",
    "Desculpe, eu não consigo ouvir você.",
    "/ˈsɒri aɪ kænt hɪər juː/",
    "só-ri ai quênt rîer iu",
    ["Sor", "ry,", " I", " can't", " hear", " you."],
    "Sorry, I can't hear you. Can you repeat that, please?",
    "Desculpe, eu não consigo ouvir você. Você pode repetir, por favor?"
  ],
  [
    "She wants to go on an exchange program.",
    "Ela quer participar de um programa de intercâmbio.",
    "/ʃiː wɒnts tuː ɡoʊ ɒn ən ɪksˈtʃeɪndʒ ˈproʊɡræm/",
    "chî uónts tchu gôu ón én ix-tchêindj prôu-græm",
    ["She", " wants", " to", " go", " on", " an", " ex", "change", " pro", "gram."],
    "She wants to go on an exchange program.",
    "Ela quer participar de um programa de intercâmbio."
  ],
  [
    "He needs to fill out an application form.",
    "Ele precisa preencher um formulário de inscrição.",
    "/hiː niːdz tuː fɪl aʊt ən ˌæplɪˈkeɪʃən fɔːrm/",
    "rî nîdz tchu fîl áut én æ-pli-quêi-shôn fórm",
    ["He", " needs", " to", " fill", " out", " an", " ap", "pli", "ca", "tion", " form."],
    "He needs to fill out an application form.",
    "Ele precisa preencher um formulário de inscrição."
  ],

  // Block 4: Sentences 2 (Can Drill)
  [
    "He can speak Italian very well.",
    "Ele consegue falar italiano muito bem.",
    "/hiː kæn spiːk ɪˈtæljən ˈvɛri wɛl/",
    "rî quên espîc i-tǽ-liân vé-ri uél",
    ["He", " can", " speak", " I", "tal", "ian", " ve", "ry", " well."],
    "He can speak Italian very well.",
    "Ele consegue falar italiano muito bem."
  ],
  [
    "She can learn everything.",
    "Ela consegue aprender tudo.",
    "/ʃiː kæn lɜːrn ˈɛvriˌθɪŋ/",
    "chî quên lərn é-vri-θin",
    ["She", " can", " learn", " ev", "ery", "thing."],
    "She can learn everything.",
    "Ela consegue aprender tudo."
  ],
  [
    "Can you take me to school, Mom?",
    "Você pode me levar para a escola, mãe?",
    "/kæn juː teɪk miː tuː skuːl mɒm/",
    "quên iu têic mî tchu escûl móm",
    ["Can", " you", " take", " me", " to", " school,", " Mom?"],
    "Can you take me to school, Mom?",
    "Você pode me levar para a escola, mãe?"
  ],
  [
    "Can you help me out, please?",
    "Você pode me ajudar, por favor?",
    "/kæn juː hɛlp miː aʊt pliːz/",
    "quên iu rélp mî áut plîz",
    ["Can", " you", " help", " me", " out,", " please?"],
    "Can you help me out, please?",
    "Você pode me ajudar, por favor?"
  ],
  [
    "I can take these boxes for you.",
    "Eu posso levar estas caixas para você.",
    "/aɪ kæn teɪk ðiːz ˈbɒksɪz fɔːr juː/",
    "ai quên têic ðîz bóc-siz fór iu",
    ["I", " can", " take", " these", " box", "es", " for", " you."],
    "I can take these boxes for you.",
    "Eu posso levar estas caixas para você."
  ],
  [
    "I can talk to her parents.",
    "Eu posso conversar com os pais dela.",
    "/aɪ kæn tɔːk tuː hɜːr ˈpɛərənts/",
    "ai quên tólc tchu rêr pê-rents",
    ["I", " can", " talk", " to", " her", " par", "ents."],
    "I can talk to her parents.",
    "Eu posso conversar com os pais dela."
  ],
  [
    "Can I come in, please?",
    "Posso entrar, por favor?",
    "/kæn aɪ kʌm ɪn pliːz/",
    "quên ai câm ín plîz",
    ["Can", " I", " come", " in,", " please?"],
    "Can I come in, please?",
    "Posso entrar, por favor?"
  ],
  [
    "Can I read it for you?",
    "Posso ler isso para você?",
    "/kæn aɪ riːd ɪt fɔːr juː/",
    "quên ai rîd ít fór iu",
    ["Can", " I", " read", " it", " for", " you?"],
    "Can I read it for you?",
    "Posso ler isso para você?"
  ],
  [
    "You can improve your writing by reading.",
    "Você pode melhorar sua escrita lendo.",
    "/juː kæn ɪmˈpruːv jɔːr ˈraɪtɪŋ baɪ ˈriːdɪŋ/",
    "iu quên im-prûv iór rái-tin bái rî-din",
    ["You", " can", " im", "prove", " your", " writ", "ing", " by", " read", "ing."],
    "You can improve your writing by reading.",
    "Você pode melhorar sua escrita lendo."
  ],
  [
    "Sorry, I can't now. Can we talk during the break?",
    "Desculpe, não posso agora. Podemos conversar durante o intervalo?",
    "/ˈsɒri aɪ kænt naʊ. kæn wiː tɔːk ˈdjʊərɪŋ ðə breɪk/",
    "só-ri ai quênt náu. quên uí tólc diû-rin ðâ brêic",
    ["Sor", "ry,", " I", " can't", " now.", " Can", " we", " talk", " dur", "ing", " the", " break?"],
    "Sorry, I can't now. Can we talk during the break?",
    "Desculpe, não posso agora. Podemos conversar durante o intervalo?"
  ],

  // Block 5: Longer Practice Sentences
  [
    "We need to improve our communication skills.",
    "Precisamos melhorar nossas habilidades de comunicação.",
    "/wiː niːd tuː ɪmˈpruːv ˈaʊər kəˌmjuːnɪˈkeɪʃən skɪlz/",
    "uí nîd tchu im-prûv áuer co-miu-ni-quêi-shôn es-quîlz",
    ["We", " need", " to", " im", "prove", " our", " com", "mu", "ni", "ca", "tion", " skills."],
    "We need to improve our communication skills.",
    "Precisamos melhorar nossas habilidades de comunicação."
  ],
  [
    "Maybe you can talk to your teacher about the speech.",
    "Talvez você possa conversar com seu professor sobre o discurso.",
    "/ˈmeɪbiː juː kæn tɔːk tuː jɔːr ˈtiːtʃər əˈbaʊt ðə spiːtʃ/",
    "mêi-bi iu quên tólc tchu iór tî-tcher a-báut ðâ espîtch",
    ["May", "be", " you", " can", " talk", " to", " your", " teach", "er", " a", "bout", " the", " speech."],
    "Maybe you can talk to your teacher about the speech.",
    "Talvez você possa conversar com seu professor sobre o discurso."
  ],
  [
    "They spend the break reading.",
    "Eles passam o intervalo lendo.",
    "/ðeɪ spɛnd ðə breɪk ˈriːdɪŋ/",
    "ðêi espénd ðâ brêic rî-din",
    ["They", " spend", " the", " break", " read", "ing."],
    "They spend the break reading.",
    "Eles passam o intervalo lendo."
  ],
  [
    "I can't improve my listening skills with only these classes.",
    "Eu não consigo melhorar minhas habilidades de compreensão auditiva apenas com estas aulas.",
    "/aɪ kænt ɪmˈpruːv maɪ ˈlɪsənɪŋ skɪlz wɪð ˈoʊnli ðiːz ˈklæsɪz/",
    "ai quênt im-prûv mái lís-nin es-quîlz uíð ôun-li ðîz clǽ-siz",
    ["I", " can't", " im", "prove", " my", " lis", "ten", "ing", " skills", " with", " on", "ly", " these", " class", "es."],
    "I can't improve my listening skills with only these classes.",
    "Eu não consigo melhorar minhas habilidades de compreensão auditiva apenas com estas aulas."
  ],
  [
    "I took the test yesterday. The writing part was very hard.",
    "Eu fiz a prova ontem. A parte de escrita foi muito difícil.",
    "/aɪ tʊk ðə tɛst ˈjɛstərdeɪ. ðə ˈraɪtɪŋ pɑːrt wɒz ˈvɛri hɑːrd/",
    "ai tûc ðâ tést iés-ter-dêi. ðâ rái-tin párt uóz vé-ri rárd",
    ["I", " took", " the", " test", " yes", "ter", "day.", " The", " writ", "ing", " part", " was", " ve", "ry", " hard."],
    "I took the test yesterday. The writing part was very hard.",
    "Eu fiz a prova ontem. A parte de escrita foi muito difícil."
  ],
  [
    "She went on an exchange program and now she can speak fluently.",
    "Ela participou de um programa de intercâmbio e agora consegue falar fluentemente.",
    "/ʃiː wɛnt ɒn ən ɪksˈtʃeɪndʒ ˈproʊɡræm ænd naʊ ʃiː kæn spiːk ˈfluːəntli/",
    "chî uént ón én ix-tchêindj prôu-græm énd náu chî quên espîc flû-ent-li",
    ["She", " went", " on", " an", " ex", "change", " pro", "gram", " and", " now", " she", " can", " speak", " flu", "ent", "ly."],
    "She went on an exchange program and now she can speak fluently.",
    "Ela participou de um programa de intercâmbio e agora consegue falar fluentemente."
  ],
  [
    "Can you help me with the reading?",
    "Você pode me ajudar com a leitura?",
    "/kæn juː hɛlp miː wɪð ðə ˈriːdɪŋ/",
    "quên iu rélp mî uíð ðâ rî-din",
    ["Can", " you", " help", " me", " with", " the", " read", "ing?"],
    "Can you help me with the reading?",
    "Você pode me ajudar com a leitura?"
  ],
  [
    "They only need to improve their pronunciation. The other skills are fine.",
    "Eles só precisam melhorar a pronúncia. As outras habilidades estão boas.",
    "/ðeɪ ˈoʊnli niːd tuː ɪmˈpruːv ðɛər prəˌnʌnsiˈeɪʃən. ðiː ˈʌðər skɪlz ɑːr faɪn/",
    "ðêi ôun-li nîd tchu im-prûv ðêr pro-nân-ci-êi-shôn. ðî â-ðer es-quîlz ár fáin",
    ["They", " on", "ly", " need", " to", " im", "prove", " their", " pro", "nun", "ci", "a", "tion.", " The", " oth", "er", " skills", " are", " fine."],
    "They only need to improve their pronunciation. The other skills are fine.",
    "Eles só precisam melhorar a pronúncia. As outras habilidades estão boas."
  ],
  [
    "Can I fill out this form with your pencil, please?",
    "Posso preencher este formulário com seu lápis, por favor?",
    "/kæn aɪ fɪl aʊt ðɪs fɔːrm wɪð jɔːr ˈpɛnsəl pliːz/",
    "quên ai fîl áut ðís fórm uíð iór pén-sil plîz",
    ["Can", " I", " fill", " out", " this", " form", " with", " your", " pen", "cil,", " please?"],
    "Can I fill out this form with your pencil, please?",
    "Posso preencher este formulário com seu lápis, por favor?"
  ],
  [
    "He is worried about his speech. It's hard for him to speak in public.",
    "Ele está preocupado com seu discurso. É difícil para ele falar em público.",
    "/hiː ɪz ˈwʌrid əˈbaʊt hɪz spiːtʃ. ɪts hɑːrd fɔːr hɪm tuː spiːk ɪn ˈpʌblɪk/",
    "rî íz uâ-rid a-báut ríz espîtch. íts rárd fór rím tchu espîc ín pâ-blic",
    ["He", " is", " wor", "ried", " a", "bout", " his", " speech.", " It's", " hard", " for", " him", " to", " speak", " in", " pub", "lic."],
    "He is worried about his speech. It's hard for him to speak in public.",
    "Ele está preocupado com seu discurso. É difícil para ele falar em público."
  ],
  [
    "Can I improve these spreadsheets for you?",
    "Posso melhorar estas planilhas para você?",
    "/kæn aɪ ɪmˈpruːv ðiːz ˈsprɛdʃiːts fɔːr juː/",
    "quên ai im-prûv ðîz es-préd-chîts fór iu",
    ["Can", " I", " im", "prove", " these", " spread", "sheets", " for", " you?"],
    "Can I improve these spreadsheets for you?",
    "Posso melhorar estas planilhas para você?"
  ],
  [
    "Sorry, I can't hear you. Can you repeat that, please? I didn't get it.",
    "Desculpe, não consigo ouvir você. Você pode repetir, por favor? Eu não entendi.",
    "/ˈsɒri aɪ kænt hɪər juː. kæn juː rɪˈpiːt ðæt pliːz? aɪ ˈdɪdnt ɡɛt ɪt/",
    "só-ri ai quênt rîer iu. quên iu ri-pît ðét plîz? ai díd-nt guét ít",
    ["Sor", "ry,", " I", " can't", " hear", " you.", " Can", " you", " re", "peat", " that,", " please?", " I", " didn't", " get", " it."],
    "Sorry, I can't hear you. Can you repeat that, please? I didn't get it.",
    "Desculpe, não consigo ouvir você. Você pode repetir, por favor? Eu não entendi."
  ],

  // Block 6: Transit and Ability Can
  [
    "They can drive very well.",
    "Eles conseguem dirigir muito bem.",
    "/ðeɪ kæn draɪv ˈvɛri wɛl/",
    "ðêi quên dráiv vé-ri uél",
    ["They", " can", " drive", " ve", "ry", " well."],
    "They can drive very well.",
    "Eles conseguem dirigir muito bem."
  ],
  [
    "Can you open the door for me, please?",
    "Você pode abrir a porta para mim, por favor?",
    "/kæn juː ˈoʊpən ðə dɔːr fɔːr miː pliːz/",
    "quên iu ôu-pên ðâ dór fór mî plîz",
    ["Can", " you", " o", "pen", " the", " door", " for", " me,", " please?"],
    "Can you open the door for me, please?",
    "Você pode abrir a porta para mim, por favor?"
  ],
  [
    "I can go to the grocery store and buy what you need.",
    "Eu posso ir ao mercado e comprar o que você precisa.",
    "/aɪ kæn ɡoʊ tuː ðə ˈɡroʊsəri stɔːr ænd baɪ wɒt juː niːd/",
    "ai quên gôu tchu ðâ grôu-se-ri estór énd bái uót iu nîd",
    ["I", " can", " go", " to", " the", " gro", "ce", "ry", " store", " and", " buy", " what", " you", " need."],
    "I can go to the grocery store and buy what you need.",
    "Eu posso ir ao mercado e comprar o que você precisa."
  ],
  [
    "Can you talk now?",
    "Você pode conversar agora?",
    "/kæn juː tɔːk naʊ/",
    "quên iu tólc náu",
    ["Can", " you", " talk", " now?"],
    "Can you talk now?",
    "Você pode conversar agora?"
  ],
  [
    "She can take the subway because it's faster.",
    "Ela pode pegar o metrô porque é mais rápido.",
    "/ʃiː kæn teɪk ðə ˈsʌbweɪ bɪˈkɒz ɪts ˈfæstər/",
    "chî quên têic ðâ sâb-uêi bi-cóz íts fæs-ter",
    ["She", " can", " take", " the", " sub", "way", " be", "cause", " it's", " fast", "er."],
    "She can take the subway because it's faster.",
    "Ela pode pegar o metrô porque é mais rápido."
  ],

  // Block 7: Skills and Pronouns conjugation
  [
    "Communication skills",
    "Habilidades de comunicação",
    "/kəˌmjuːnɪˈkeɪʃən skɪlz/",
    "co-miu-ni-quêi-shôn es-quîlz",
    ["Com", "mu", "ni", "ca", "tion", " skills"],
    "We need to improve our communication skills.",
    "Precisamos melhorar nossas habilidades de comunicação."
  ],
  [
    "I can",
    "Eu posso",
    "/aɪ kæn/",
    "ai quên",
    ["I", " can"],
    "I can speak English.",
    "Eu consigo falar inglês."
  ],
  [
    "You can",
    "Você pode",
    "/juː kæn/",
    "iu quên",
    ["You", " can"],
    "Can you help me?",
    "Você pode me ajudar?"
  ],
  [
    "He can",
    "Ele pode",
    "/hiː kæn/",
    "rî quên",
    ["He", " can"],
    "He can speak Italian very well.",
    "Ele consegue falar italiano muito bem."
  ],
  [
    "She can",
    "Ela pode",
    "/ʃiː kæn/",
    "chî quên",
    ["She", " can"],
    "She can learn everything.",
    "Ela consegue aprender tudo."
  ],
  [
    "We can",
    "Nós podemos",
    "/wiː kæn/",
    "uí quên",
    ["We", " can"],
    "We can improve together.",
    "Nós podemos melhorar juntos."
  ],
  [
    "They can",
    "Eles podem",
    "/ðeɪ kæn/",
    "ðêi quên",
    ["They", " can"],
    "They can understand the lesson.",
    "Eles conseguem entender a lição."
  ],

  // Block 8: Extra Verb-Sentence pairs
  [
    "I can speak English.",
    "Eu consigo falar inglês.",
    "/aɪ kæn spiːk ˈɪŋɡlɪʃ/",
    "ai quên espîc ín-glish",
    ["I", " can", " speak", " En", "glish."],
    "I can speak English.",
    "Eu consigo falar inglês."
  ],
  [
    "Can you help me?",
    "Você pode me ajudar?",
    "/kæn juː hɛlp miː/",
    "quên iu rélp mî",
    ["Can", " you", " help", " me?"],
    "Can you help me?",
    "Você pode me ajudar?"
  ],
  [
    "She can read very fast.",
    "Ela consegue ler muito rápido.",
    "/ʃiː kæn riːd ˈvɛri fæst/",
    "chî quên rîd vé-ri fæst",
    ["She", " can", " read", " ve", "ry", " fast."],
    "She can read very fast.",
    "Ela consegue ler muito rápido."
  ],
  [
    "We can improve together.",
    "Nós podemos melhorar juntos.",
    "/wiː kæn ɪmˈpruːv təˈɡɛðər/",
    "uí quên im-prûv ta-gué-ðer",
    ["We", " can", " im", "prove", " to", "geth", "er."],
    "We can improve together.",
    "Nós podemos melhorar juntos."
  ],
  [
    "They can understand the lesson.",
    "Eles conseguem entender a lição.",
    "/ðeɪ kæn ˌʌndərˈstænd ðə ˈlɛsən/",
    "ðêi quên ân-der-sténd ðâ lé-sôn",
    ["They", " can", " un", "der", "stand", " the", " les", "son."],
    "They can understand the lesson.",
    "Eles conseguem entender a lição."
  ],

  // Block 9: Affirmative and Interrogative statements pairing
  [
    "I want to take this book home.",
    "Eu quero levar este livro para casa.",
    "/aɪ wɒnt tuː teɪk ðɪs bʊk hoʊm/",
    "ai uónt tchu têic ðís bûc rôm",
    ["I", " want", " to", " take", " this", " book", " home."],
    "I want to take this book home.",
    "Eu quero levar este livro para casa."
  ],
  [
    "Can I take this book home?",
    "Posso levar este livro para casa?",
    "/kæn aɪ teɪk ðɪs bʊk hoʊm/",
    "quên ai têic ðís bûc rôm",
    ["Can", " I", " take", " this", " book", " home?"],
    "Can I take this book home?",
    "Posso levar este livro para casa?"
  ],
  [
    "I want to speak with your boss.",
    "Eu quero falar com seu chefe.",
    "/aɪ wɒnt tuː spiːk wɪð jɔːr bɒs/",
    "ai uónt tchu espîc uíð iór bós",
    ["I", " want", " to", " speak", " with", " your", " boss."],
    "I want to speak with your boss.",
    "Eu quero falar com seu chefe."
  ],
  [
    "Can I speak with your boss?",
    "Posso falar com seu chefe?",
    "/kæn aɪ spiːk wɪð jɔːr bɒs/",
    "quên ai espîc uíð iór bós",
    ["Can", " I", " speak", " with", " your", " boss?"],
    "Can I speak with your boss?",
    "Posso falar com seu chefe?"
  ],
  [
    "Jane is taking the test now.",
    "Jane está fazendo a prova agora.",
    "/dʒeɪn ɪz ˈteɪkɪŋ ðə tɛst naʊ/",
    "djêin íz têi-quin ðâ tést náu",
    ["Jane", " is", " tak", "ing", " the", " test", " now."],
    "Jane is taking the test now.",
    "Jane está fazendo a prova agora."
  ],
  [
    "Can Jane take the test now?",
    "Jane pode fazer a prova agora?",
    "/kæn dʒeɪn teɪk ðə tɛst naʊ/",
    "quên djêin têic ðâ tést náu",
    ["Can", " Jane", " take", " the", " test", " now?"],
    "Can Jane take the test now?",
    "Jane pode fazer a prova agora?"
  ],
  [
    "We want to go on an exchange program next summer.",
    "Nós queremos participar de um programa de intercâmbio no próximo verão.",
    "/wiː wɒnt tuː ɡoʊ ɒn ən ɪksˈtʃeɪndʒ ˈproʊɡræm nɛkst ˈsʌmər/",
    "uí uónt tchu gôu ón én ix-tchêindj prôu-græm nécst sâ-mer",
    ["We", " want", " to", " go", " on", " an", " ex", "change", " pro", "gram", " next", " sum", "mer."],
    "We want to go on an exchange program next summer.",
    "Nós queremos participar de um programa de intercâmbio no próximo verão."
  ],
  [
    "Can we go on an exchange program next summer?",
    "Podemos participar de um programa de intercâmbio no próximo verão?",
    "/kæn wiː ɡoʊ ɒn ən ɪksˈtʃeɪndʒ ˈproʊɡræm nɛkst ˈsʌmər/",
    "quên uí gôu ón én ix-tchêindj prôu-græm nécst sâ-mer",
    ["Can", " we", " go", " on", " an", " ex", "change", " pro", "gram", " next", " sum", "mer?"],
    "Can we go on an exchange program next summer?",
    "Podemos participar de um programa de intercâmbio no próximo verão?"
  ],
  [
    "Repeat, please. I can't hear you.",
    "Repita, por favor. Eu não consigo ouvir você.",
    "/rɪˈpiːt pliːz. aɪ kænt hɪər juː/",
    "ri-pît plîz. ai quênt rîer iu",
    ["Re", "peat,", " please.", " I", " can't", " hear", " you."],
    "Repeat, please. I can't hear you.",
    "Repita, por favor. Eu não consigo ouvir você."
  ],
  [
    "Can you repeat, please?",
    "Você pode repetir, por favor?",
    "/kæn juː rɪˈpiːt pliːz/",
    "quên iu ri-pît plîz",
    ["Can", " you", " re", "peat,", " please?"],
    "Can you repeat, please?",
    "Você pode repetir, por favor?"
  ],
  [
    "He needs to fill out an application.",
    "Ele precisa preencher uma inscrição.",
    "/hiː niːdz tuː fɪl aʊt ən ˌæplɪˈkeɪʃən/",
    "rî nîdz tchu fîl áut én æ-pli-quêi-shôn",
    ["He", " needs", " to", " fill", " out", " an", " ap", "pli", "ca", "tion."],
    "He needs to fill out an application.",
    "Ele precisa preencher uma inscrição."
  ],
  [
    "Can he fill out an application?",
    "Ele pode preencher uma inscrição?",
    "/kæn hiː fɪl aʊt ən ˌæplɪˈkeɪʃən/",
    "quên rî fîl áut én æ-pli-quêi-shôn",
    ["Can", " he", " fill", " out", " an", " ap", "pli", "ca", "tion?"],
    "Can he fill out an application?",
    "Ele pode preencher uma inscrição?"
  ],
  [
    "I want to do my writing now, please.",
    "Eu quero fazer minha atividade de escrita agora, por favor.",
    "/aɪ wɒnt tuː duː maɪ ˈraɪtɪŋ naʊ pliːz/",
    "ai uónt tchu dû mái rái-tin náu plîz",
    ["I", " want", " to", " do", " my", " writ", "ing", " now,", " please."],
    "I want to do my writing now, please.",
    "Eu quero fazer minha atividade de escrita agora, por favor."
  ],
  [
    "Can I do my writing now, please?",
    "Posso fazer minha atividade de escrita agora, por favor?",
    "/kæn aɪ duː maɪ ˈraɪtɪŋ naʊ pliːz/",
    "quên ai dû mái rái-tin náu plîz",
    ["Can", " I", " do", " my", " writ", "ing", " now,", " please?"],
    "Can I do my writing now, please?",
    "Posso fazer minha atividade de escrita agora, por favor?"
  ],
  [
    "Sarah wants to speak with him on the phone.",
    "Sarah quer falar com ele ao telefone.",
    "/ˈsɛərə wɒnts tuː spiːk wɪð hɪm ɒn ðə foʊn/",
    "sé-ra uónts tchu espîc uíð rím ón ðâ fôun",
    ["Sa", "rah", " wants", " to", " speak", " with", " him", " on", " the", " phone."],
    "Sarah wants to speak with him on the phone.",
    "Sarah quer falar com ele ao telefone."
  ],
  [
    "Can Sarah speak with him on the phone?",
    "Sarah pode falar com ele ao telefone?",
    "/kæn ˈsɛərə spiːk wɪð hɪm ɒn ðə foʊn/",
    "quên sé-ra espîc uíð rím ón ðâ fôun",
    ["Can", " Sa", "rah", " speak", " with", " him", " on", " the", " phone?"],
    "Can Sarah speak with him on the phone?",
    "Sarah pode falar com ele ao telefone?"
  ],
  [
    "We talk during the break.",
    "Nós conversamos durante o intervalo.",
    "/wiː tɔːk ˈdjʊərɪŋ ðə breɪk/",
    "uí tólc diû-rin ðâ brêic",
    ["We", " talk", " dur", "ing", " the", " break."],
    "We talk during the break.",
    "Nós conversamos durante o intervalo."
  ],
  [
    "Can we talk during the break?",
    "Podemos conversar durante o intervalo?",
    "/kæn wiː tɔːk ˈdjʊərɪŋ ðə breɪk/",
    "quên uí tólc diû-rin ðâ brêic",
    ["Can", " we", " talk", " dur", "ing", " the", " break?"],
    "Can we talk during the break?",
    "Podemos conversar durante o intervalo?"
  ],
  [
    "She needs to go to bed early tonight.",
    "Ela precisa ir para a cama cedo esta noite.",
    "/ʃiː niːdz tuː ɡoʊ tuː bɛd ˈɜːrli təˈnaɪt/",
    "chî nîdz tchu gôu tchu béd ər-li ta-náit",
    ["She", " needs", " to", " go", " to", " bed", " ear", "ly", " to", "night."],
    "She needs to go to bed early tonight.",
    "Ela precisa ir para a cama cedo esta noite."
  ],
  [
    "Can she go to bed early tonight?",
    "Ela pode ir para a cama cedo esta noite?",
    "/kæn ʃiː ɡoʊ tuː bɛd ˈɜːrli təˈnaɪt/",
    "quên chî gôu tchu béd ər-li ta-náit",
    ["Can", " she", " go", " to", " bed", " ear", "ly", " to", "night?"],
    "Can she go to bed early tonight?",
    "Ela pode ir para a cama cedo esta noite?"
  ],

  // Block 10: Dialogues and Questions/Replies
  [
    "Can you speak English fluently?",
    "Você consegue falar inglês fluentemente?",
    "/kæn juː spiːk ˈɪŋɡlɪʃ ˈfluːəntli/",
    "quên iu espîc ín-glish flû-ent-li",
    ["Can", " you", " speak", " En", "glish", " flu", "ent", "ly?"],
    "Can you speak English fluently?",
    "Você consegue falar inglês fluentemente?"
  ],
  [
    "Yes, I lived in the U.K. for ten years.",
    "Sim, eu morei no Reino Unido por dez anos.",
    "/jɛs aɪ lɪvd ɪn ðə juː-keɪ fɔːr tɛn jɪərz/",
    "iés ai lívd ín ðâ iû-quêi fór tén í-erz",
    ["Yes,", " I", " lived", " in", " the", " U.", "K.", " for", " ten", " years."],
    "Yes, I lived in the U.K. for ten years.",
    "Sim, eu morei no Reino Unido por dez anos."
  ],
  [
    "Can Roger fill out the application form for his visa?",
    "Roger consegue preencher o formulário de solicitação do visto?",
    "/kæn ˈrɒdʒər fɪl aʊt ðə ˌæplɪˈkeɪʃən fɔːrm fɔːr hɪz ˈviːzə/",
    "quên ró-djer fîl áut ðâ æ-pli-quêi-shôn fórm fór ríz vî-za",
    ["Can", " Ro", "ger", " fill", " out", " the", " ap", "pli", "ca", "tion", " form", " for", " his", " vi", "sa?"],
    "Can Roger fill out the application form for his visa?",
    "Roger consegue preencher o formulário de solicitação do visto?"
  ],
  [
    "Can Roger fill out the application form for his visa? (Alt)",
    "Roger consegue preencher o formulário do visto dele?",
    "/kæn ˈrɒdʒər fɪl aʊt ðə ˌæplɪˈkeɪʃən fɔːrm fɔːr hɪz ˈviːzə/",
    "quên ró-djer fîl áut ðâ æ-pli-quêi-shôn fórm fór ríz vî-za",
    ["Can", " Ro", "ger", " fill", " out", " the", " ap", "pli", "ca", "tion", " form", " for", " his", " vi", "sa?"],
    "Can Roger fill out the application form for his visa?",
    "Roger consegue preencher o formulário do visto dele?"
  ],
  [
    "Yes, it's easy to fill it out.",
    "Sim, é fácil preenchê-lo.",
    "/jɛs ɪts ˈiːzi tuː fɪl ɪt aʊt/",
    "iés íts î-zi tchu fîl ít áut",
    ["Yes,", " it's", " ea", "sy", " to", " fill", " it", " out."],
    "Yes, it's easy to fill it out.",
    "Sim, é fácil preenchê-lo."
  ],
  [
    "Can you write an essay?",
    "Você consegue escrever uma redação?",
    "/kæn juː raɪt ən ˈɛseɪ/",
    "quên iu ráit én és-sêi",
    ["Can", " you", " write", " an", " es", "say?"],
    "Can you write an essay?",
    "Você consegue escrever uma redação?"
  ],
  [
    "Yes, we had to write a lot at school.",
    "Sim, nós tivemos que escrever bastante na escola.",
    "/jɛs wiː hæd tuː raɪt ə lɒt æt skuːl/",
    "iés uí réd tchu ráit a lót ét escûl",
    ["Yes,", " we", " had", " to", " write", " a", " lot", " at", " school."],
    "Yes, we had to write a lot at school.",
    "Sim, nós tivemos que escrever bastante na escola."
  ],
  [
    "Can we go for the break?",
    "Podemos ir para o intervalo?",
    "/kæn wiː ɡoʊ fɔːr ðə breɪk/",
    "quên uí gôu fór ðâ brêic",
    ["Can", " we", " go", " for", " the", " break?"],
    "Can we go for the break?",
    "Podemos ir para o intervalo?"
  ],
  [
    "Yes, but you need to wait for two minutes.",
    "Sim, mas vocês precisam esperar dois minutos.",
    "/jɛs bʌt juː niːd tuː weɪt fɔːr tuː ˈmɪnɪts/",
    "iés bât iu nîd tchu uêit fór tû mí-nits",
    ["Yes,", " but", " you", " need", " to", " wait", " for", " two", " min", "utes."],
    "Yes, but you need to wait for two minutes.",
    "Sim, mas vocês precisam esperar dois minutos."
  ],
  [
    "Can I speak with you, please?",
    "Posso falar com você, por favor?",
    "/kæn aɪ spiːk wɪð juː pliːz/",
    "quên ai espîc uíð iu plîz",
    ["Can", " I", " speak", " with", " you,", " please?"],
    "Can I speak with you, please?",
    "Posso falar com você, por favor?"
  ],
  [
    "Yes, but I can't speak English well.",
    "Sim, mas eu não consigo falar inglês muito bem.",
    "/jɛs bʌt aɪ kænt spiːk ˈɪŋɡlɪʃ wɛl/",
    "iés bât ai quênt espîc ín-glish uél",
    ["Yes,", " but", " I", " can't", " speak", " En", "glish", " well."],
    "Yes, but I can't speak English well.",
    "Sim, mas eu não consigo falar inglês muito bem."
  ],
  [
    "Can Tim make a speech in English tomorrow?",
    "Tim consegue fazer um discurso em inglês amanhã?",
    "/kæn tɪm meɪk ə spiːtʃ ɪn ˈɪŋɡlɪʃ təˈmɒroʊ/",
    "quên tím mêic a espîtch ín ín-glish ta-mó-rou",
    ["Can", " Tim", " make", " a", " speech", " in", " En", "glish", " to", "mor", "row?"],
    "Can Tim make a speech in English tomorrow?",
    "Tim consegue fazer um discurso em inglês amanhã?"
  ],
  [
    "Yes, he is ready for that.",
    "Sim, ele está preparado para isso.",
    "/jɛs hiː ɪz ˈrɛdi fɔːr ðæt/",
    "iés rî íz ré-di fór ðét",
    ["Yes,", " he", " is", " rea", "dy", " for", " that."],
    "Yes, he is ready for that.",
    "Sim, ele está preparado para isso."
  ]
];

export const LESSON_91_DECK: FlashcardData[] = RAW_CARDS.map((item, idx) => ({
  id: 'lesson_91_' + (idx + 1),
  word: item[0],
  translation: item[1],
  pronunciation: item[2],
  portuguesePhonetic: item[3],
  syllables: item[4],
  exampleSentence: item[5],
  exampleTranslation: item[6],
}));
