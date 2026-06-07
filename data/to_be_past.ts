import { FlashcardData } from '../types';

const RAW_CARDS: Array<[string, string, string, string, string[], string, string]> = [
  // 1. Core Vocabulary & Concept Words
  ["to be", "ser, estar", "/tu bi/", "tchu bî", ["to", " be"], "I was tired yesterday.", "Eu estava cansado ontem."],
  ["bored", "entediado(a)", "/bɔːrd/", "bórd", ["bored"], "I was bored at home yesterday.", "Eu estava entediado(a) em casa ontem."],
  ["excited", "animado(a)", "/ɪkˈsaɪtɪd/", "ec-sái-ted", ["ex", "cit", "ed"], "He wasn't very excited about the job.", "Ele não estava muito animado com o emprego."],
  ["disappointed", "desapontado(a), decepcionado(a)", "/ˌdɪsəˈpɔɪntɪd/", "dis-a-póin-ted", ["dis", "ap", "point", "ed"], "We were all frustrated and disappointed.", "Nós todos estávamos frustrados(as) e decepcionados(as)."],
  ["awkward", "constrangedor(a)", "/ˈɔːkwərd/", "ó-quərd", ["awk", "ward"], "The meeting was awkward.", "A reunião foi constrangedora."],
  ["careful", "cuidadoso(a)", "/ˈkɛəfʊl/", "qué-ful", ["care", "ful"], "You were very careful.", "Você foi muito cuidadoso(a)."],
  ["amazing", "ótimo(a), excelente", "/əˈmeɪzɪŋ/", "a-mêi-zin", ["a", "maz", "ing"], "Last summer was amazing.", "O verão passado foi ótimo."],
  ["embarrassed", "envergonhado(a)", "/ɪmˈbærəst/", "em-bé-rest", ["em", "bar", "rassed"], "Be careful with your words. Your sister is really embarrassed.", "Cuidado com suas palavras. Sua irmã está muito envergonhada."],
  ["frustrated", "frustrado(a)", "/frʌsˈtreɪtɪd/", "fras-trêi-ted", ["frus", "trat", "ed"], "We were all frustrated and disappointed.", "Nós todos estávamos frustrados(as) e decepcionados(as)."],
  ["summer", "verão", "/ˈsʌmər/", "sâ-mer", ["sum", "mer"], "Last summer was amazing.", "O verão passado foi ótimo."],
  ["spring", "primavera", "/sprɪŋ/", "sprin", ["spring"], "I was really excited to go to the countryside last spring.", "Eu estava muito animado para ir para o interior na primavera passada."],
  ["fall", "outono", "/fɔːl/", "fól", ["fall"], "Do you like the fall?", "Você gosta do outono?"],
  ["winter", "inverno", "/ˈwɪntər/", "uín-ter", ["win", "ter"], "Our winter trip was amazing last month.", "Nossa viagem de inverno foi excelente no mês passado."],
  ["yesterday", "ontem", "/ˈjɛstərdeɪ/", "iés-ter-dêi", ["yes", "ter", "day"], "I was bored at home yesterday.", "Eu estava entediado(a) em casa ontem."],
  ["last", "último(a), passado(a)", "/læst/", "lést", ["last"], "I was there last week.", "Eu estava lá na semana passada."],
  ["ago", "atrás", "/əˈɡoʊ/", "a-gôu", ["a", "go"], "My parents were in Europe five days ago.", "Meus pais estavam na Europa cinco dias atrás."],

  // 2. Short Essential Sentences
  ["You can rely on me.", "Você pode confiar em mim.", "/ju kæn rɪˈlaɪ ɑn mi./", "iu quén ri-lái an mî", ["You", " can", " re", "ly", " on", " me."], "You can rely on me.", "Você pode confiar em mim."],
  ["Be careful, she is old.", "Cuidado, ela é idosa.", "/bi ˈkɛəfʊl, ʃi ɪz oʊld./", "bî qué-ful, xi is ôuld", ["Be", " care", "ful,", " she", " is", " old."], "Be careful, she is old.", "Cuidado, ela é idosa."],
  ["I was there last week.", "Eu estava lá na semana passada.", "/aɪ wʌz ðɛr læst wik./", "ai uós dér lést uîc", ["I", " was", " there", " last", " week."], "I was there last week.", "Eu estava lá na semana passada."],
  ["My parents were in Europe five days ago.", "Meus pais estavam na Europa cinco dias atrás.", "/maɪ ˈpɛərənts wɜːr ɪn ˈjʊərəp faɪv deɪz əˈɡoʊ./", "mai pé-rents uẽr in iú-rop fáiv dêis a-gôu", ["My", " par", "ents", " were", " in", " Eu", "rope", " five", " days", " a", "go."], "My parents were in Europe five days ago.", "Meus pais estavam na Europa cinco dias atrás."],

  // 3. Sequential Topic Sentences (was/were)
  ["I was bored at home yesterday.", "Eu estava entediado(a) em casa ontem.", "/aɪ wʌz bɔːrd æt hoʊm ˈjɛstərdeɪ./", "ai uós bórd ét rôum iés-ter-dêi", ["I", " was", " bored", " at", " home", " yes", "ter", "day."], "I was bored at home yesterday.", "Eu estava entediado(a) em casa ontem."],
  ["You were very careful.", "Você foi muito cuidadoso(a).", "/ju wɜːr ˈvɛri ˈkɛəfʊl./", "iu uẽr vé-ri qué-ful", ["You", " were", " ve", "ry", " care", "ful."], "You were very careful.", "Você foi muito cuidadoso(a)."],
  ["He wasn't very excited about the job.", "Ele não estava muito animado com o emprego.", "/hi ˈwʌzənt ˈvɛri ɪkˈsaɪtɪd əˈbaʊt ðə dʒɒb./", "rî uó-zent vé-ri ec-sái-ted a-báut dâ djób", ["He", " was", "n't", " ve", "ry", " ex", "cit", "ed", " a", "bout", " the", " job."], "He wasn't very excited about the job.", "Ele não estava muito animado com o emprego."],
  ["She was at the beach last weekend.", "Ela estava na praia no fim de semana passado.", "/ʃi wʌz æt ðə biːtʃ læst ˈwikˌɛnd./", "xi uós ét dâ bîtch lést uî-quend", ["She", " was", " at", " the", " beach", " last", " week", "end."], "She was at the beach last weekend.", "Ela estava na praia no fim de semana passado."],
  ["Last summer was amazing.", "O verão passado foi ótimo.", "/læst ˈsʌmər wʌz əˈmeɪzɪŋ./", "lést sâ-mer uós a-mêi-zin", ["Last", " sum", "mer", " was", " a", "maz", "ing."], "Last summer was amazing.", "O verão passado foi ótimo."],
  ["We were all frustrated and disappointed.", "Nós todos estávamos frustrados(as) e decepcionados(as).", "/wi wɜːr ɔːl frʌsˈtreɪtɪd ænd ˌdɪsəˈpɔɪntɪd./", "uí uẽr ól fras-trêi-ted énd dis-a-póin-ted", ["We", " were", " all", " frus", "trat", "ed", " and", " dis", "ap", "point", "ed."], "We were all frustrated and disappointed.", "Nós todos estávamos frustrados(as) e decepcionados(as)."],
  ["The meeting was awkward.", "A reunião foi constrangedora.", "/ðə ˈmitɪŋ wʌz ˈɔːkwərd./", "dâ mî-tin uós ó-quərd", ["The", " meet", "ing", " was", " awk", "ward."], "The meeting was awkward.", "A reunião foi constrangedora."],
  ["They weren't at school two days ago.", "Eles não estavam na escola dois dias atrás.", "/ðeɪ wɜːrnt æt skuːl tuː deɪz əˈɡoʊ./", "ðêi uẽrnt ét scûl tû dêis a-gôu", ["They", " were", "n't", " at", " school", " two", " days", " a", "go."], "They weren't at school two days ago.", "Eles não estavam na escola dois dias atrás."],

  // 4. Continued Topic Practice Sentences
  ["The children were bored this morning.", "As crianças estavam entediadas esta manhã.", "/ðə ˈtʃɪldrən wɜːr bɔːrd ðɪs ˈmɔːrnɪŋ./", "dâ tchíl-dren uẽr bórd dâ mór-nin", ["The", " chil", "dren", " were", " bored", " this", " morn", "ing."], "The children were bored this morning.", "As crianças estavam entediadas esta manhã."],
  ["He wasn't very careful about the problem.", "Ele não foi muito cuidadoso com o problema.", "/hi ˈwʌzənt ˈvɛri ˈkɛəfʊl əˈbaʊt ðə ˈprɒbləm./", "rî uó-zent vé-ri qué-ful a-báut dâ pró-blem", ["He", " was", "n't", " ve", "ry", " care", "ful", " a", "bout", " the", " prob", "lem."], "He wasn't very careful about the problem.", "Ele não foi muito cuidadoso com o problema."],
  ["What an awkward situation!", "Que situação constrangedora!", "/wɒt æn ˈɔːkwərd ˌsɪtʃuˈeɪʃən!/", "uót én ó-quərd si-tchu-êi-xân!", ["What", " an", " awk", "ward", " sit", "u", "a", "tion!"], "What an awkward situation!", "Que situação constrangedora!"],
  ["It wasn't hot at the beach yesterday.", "Não estava quente na praia ontem.", "/ɪt ˈwʌzənt hɒt æt ðə biːtʃ ˈjɛstərdeɪ./", "it uó-zent rót ét dâ bîtch iés-ter-dêi", ["It", " was", "n't", " hot", " at", " the", " beach", " yes", "ter", "day."], "It wasn't hot at the beach yesterday.", "Não estava quente na praia ontem."],
  ["Do you like the fall?", "Você gosta do outono?", "/duː juː laɪk ðə fɔːl?/", "du iu láic dâ fól?", ["Do", " you", " like", " the", " fall?"], "Do you like the fall?", "Você gosta do outono?"],
  ["Our winter trip was amazing last month.", "Nossa viagem de inverno foi excelente no mês passado.", "/ˈaʊər ˈwɪntər trɪp wʌz əˈmeɪzɪŋ læst mʌnθ./", "áu-er uín-ter trîp uós a-mêi-zin lést mánth", ["Our", " win", "ter", " trip", " was", " a", "maz", "ing", " last", " month."], "Our winter trip was amazing last month.", "Nossa viagem de inverno foi excelente no mês passado."],
  ["You can't rely on everybody.", "Você não pode confiar em todo mundo.", "/juː kɑːnt rɪˈlaɪ ɒn ˈɛvribɒdi./", "iu quânt ri-lái an é-vri-bó-di", ["You", " can't", " re", "ly", " on", " ev", "ery", "bod", "y."], "You can't rely on everybody.", "Você não pode confiar em todo mundo."],
  ["They were frustrated during the trip.", "Eles estavam frustrados durante a viagem.", "/ðeɪ wɜːr frʌsˈtreɪtɪd ˈdjʊərɪŋ ðə trɪp./", "ðêi uẽr fras-trêi-ted diú-rin dâ trîp", ["They", " were", " frus", "trat", "ed", " dur", "ing", " the", " trip."], "They were frustrated during the trip.", "Eles estavam frustrados durante a viagem."],
  ["I was really excited to go to the countryside last spring.", "Eu estava muito animado para ir para o interior na primavera passada.", "/aɪ wʌz ˈrɪəli ɪkˈsaɪtɪd tuː ɡoʊ tuː ðə ˈkʌntrisaɪd læst sprɪŋ./", "ai uós rî-li ec-sái-ted tû gôu tû dâ cán-tri-sáid lést sprin", ["I", " was", " real", "ly", " ex", "cit", "ed", " to", " go", " to", " the", " coun", "try", "side", " last", " spring."], "I was really excited to go to the countryside last spring.", "Eu estava muito animado para ir para o interior na primavera passada."],
  ["They weren't here five days ago.", "Eles não estavam aqui cinco dias atrás.", "/ðeɪ wɜːrnt hɪər faɪv deɪz əˈɡoʊ./", "ðêi uẽrnt rîr fáiv dêis a-gôu", ["They", " were", "n't", " here", " five", " days", " a", "go."], "They weren't here five days ago.", "Eles não estavam aqui cinco dias atrás."],
  ["John was very disappointed with the food.", "John ficou muito decepcionado com a comida.", "/dʒɒn wʌz ˈvɛri ˌdɪsəˈpɔɪntɪd wɪð ðə fuːd./", "djón uós vé-ri dis-a-póin-ted uíð dâ fûd", ["John", " was", " ve", "ry", " dis", "ap", "point", "ed", " with", " the", " food."], "John was very disappointed with the food.", "John ficou muito decepcionado com a comida."],
  ["Be careful with your words. Your sister is really embarrassed.", "Cuidado com suas palavras. Sua irmã está muito envergonhada.", "/biː ˈkɛəfʊl wɪð jʊər wɜːdz. jʊər ˈsɪstər ɪz ˈrɪəli ɪmˈbærəst./", "bî qué-ful uíð iór uẽrds. iór sís-ter is rî-li em-bé-rest", ["Be", " care", "ful", " with", " your", " words.", " Your", " sis", "ter", " is", " real", "ly", " em", "bar", "rassed."], "Be careful with your words. Your sister is really embarrassed.", "Cuidado com suas palavras. Sua irmã está muito envergonhada."],

  // 5. Short Seasons Sentences
  ["It's spring! Look at the flowers.", "É primavera! Olhe as flores.", "/ɪts sprɪŋ! lʊk æt ðə ˈflaʊərz./", "its sprin! lûc ét dâ fláu-ers", ["It's", " spring!", " Look", " at", " the", " flow", "ers."], "It's spring! Look at the flowers.", "É primavera! Olhe as flores."],
  ["I don't like winter. It's difficult to get up.", "Eu não gosto do inverno. É difícil levantar.", "/aɪ doʊnt laɪk ˈwɪntər. ɪts ˈdɪfəkəlt tuː ɡɛt ʌp./", "ai dôunt láic uín-ter. its dí-fi-colt tû gét áp", ["I", " don't", " like", " win", "ter.", " It's", " dif", "fi", "cult", " to", " get", " up."], "I don't like winter. It's difficult to get up.", "Eu não gosto do inverno. É difícil levantar."],
  ["It's summer. Let's go to the beach and swim.", "É verão. Vamos para a praia nadar.", "/ɪts ˈsʌmər. lɛts ɡoʊ tuː ðə biːtʃ ænd swɪm./", "its sâ-mer. léts gôu tû dâ bîtch énd suîm", ["It's", " sum", "mer.", " Let's", " go", " to", " the", " beach", " and", " swim."], "It's summer. Let's go to the beach and swim.", "É verão. Vamos para a praia nadar."],
  ["What a beautiful view! It's fall.", "Que vista bonita! É outono.", "/wɒt ə ˈbjuːtɪfʊl vjuː! ɪts fɔːl./", "uót a biú-ti-ful viu! its fól", ["What", " a", " beau", "ti", "ful", " view!", " It's", " fall."], "What a beautiful view! It's fall.", "Que vista bonita! É outono."],

  // 6. Affirmative Conjugation drill (was / were)
  ["I was tired yesterday.", "Eu estava cansado ontem.", "/aɪ wʌz ˈtaɪərd ˈjɛstərdeɪ./", "ai uós tái-ard iés-ter-dêi", ["I", " was", " tired", " yes", "ter", "day."], "I was tired yesterday.", "Eu estava cansado ontem."],
  ["You were very happy.", "Você estava muito feliz.", "/juː wɜːr ˈvɛri ˈhæpi./", "iu uẽr vé-ri ré-pi", ["You", " were", " ve", "ry", " hap", "py."], "You were very happy.", "Você estava muito feliz."],
  ["He was at home last night.", "Ele estava em casa ontem à noite.", "/hi wʌz æt hoʊm læst naɪt./", "rî uós ét rôum lést náit", ["He", " was", " at", " home", " last", " night."], "He was at home last night.", "Ele estava em casa ontem à noite."],
  ["She was busy yesterday.", "Ela estava ocupada ontem.", "/ʃi wʌz ˈbɪzi ˈjɛstərdeɪ./", "xi uós bí-zi iés-ter-dêi", ["She", " was", " bu", "sy", " yes", "ter", "day."], "She was busy yesterday.", "Ela estava ocupada ontem."],
  ["It was cold this morning.", "Estava frio esta manhã.", "/ɪt wʌz koʊld ðɪs ˈmɔːrnɪŋ./", "it uós côuld dís mór-nin", ["It", " was", " cold", " this", " morn", "ing."], "It was cold this morning.", "Estava frio esta manhã."],
  ["We were at the restaurant.", "Nós estávamos no restaurante.", "/wi wɜːr æt ðə ˈrɛstərənt./", "uí uẽr ét dâ rés-tô-rant", ["We", " were", " at", " the", " res", "tau", "rant."], "We were at the restaurant.", "Nós estávamos no restaurante."],
  ["You were late for class.", "Vocês estavam atrasados para a aula.", "/ju wɜːr leɪt fɔːr klɑːs./", "iu uẽr lêit fór clâs", ["You", " were", " late", " for", " class."], "You were late for class.", "Vocês estavam atrasados para a aula."],
  ["They were at school.", "Eles estavam na escola.", "/ðeɪ wɜːr æt skuːl./", "ðêi uẽr ét scûl", ["They", " were", " at", " school."], "They were at school.", "Eles estavam na escola."],

  // 7. Negative Conjugation drill (wasn't / weren't)
  ["I wasn't tired yesterday.", "Eu não estava cansado ontem.", "/aɪ ˈwʌzənt ˈtaɪərd ˈjɛstərdeɪ./", "ai uó-zent tái-ard iés-ter-dêi", ["I", " was", "n't", " tired", " yes", "ter", "day."], "I wasn't tired yesterday.", "Eu não estava cansado ontem."],
  ["You weren't at work.", "Você não estava no trabalho.", "/ju wɜːrnt æt wɜːrk./", "iu uẽrnt ét uãrc", ["You", " were", "n't", " at", " work."], "You weren't at work.", "Você não estava no trabalho."],
  ["He wasn't at home last night.", "Ele não estava em casa ontem à noite.", "/hi ˈwʌzənt æt hoʊm læst naɪt./", "rî uó-zent ét rôum lést náit", ["He", " was", "n't", " at", " home", " last", " night."], "He wasn't at home last night.", "Ele não estava em casa ontem à noite."],
  ["She wasn't busy yesterday.", "Ela não estava ocupada ontem.", "/ʃi ˈwʌzənt ˈbɪzi ˈjɛstərdeɪ./", "xi uó-zent bí-zi iés-ter-dêi", ["She", " was", "n't", " bu", "sy", " yes", "ter", "day."], "She wasn't busy yesterday.", "Ela não estava ocupada ontem."],
  ["It wasn't cold this morning.", "Não estava frio esta manhã.", "/ɪt ˈwʌzənt koʊld ðɪs ˈmɔːrnɪŋ./", "it uó-zent côuld dís mór-nin", ["It", " was", "n't", " cold", " this", " morn", "ing."], "It wasn't cold this morning.", "Não estava frio esta manhã."],
  ["We weren't at the restaurant.", "Nós não estávamos no restaurante.", "/wi wɜːrnt æt ðə ˈrɛstərənt./", "uí uẽrnt ét dâ rés-tô-rant", ["We", " were", "n't", " at", " the", " res", "tau", "rant."], "We weren't at the restaurant.", "Nós não estávamos no restaurante."],
  ["You weren't late for class.", "Vocês não estavam atrasados para a aula.", "/ju wɜːrnt leɪt fɔːr klɑːs./", "iu uẽrnt lêit fór clâs", ["You", " were", "n't", " late", " for", " class."], "You weren't late for class.", "Vocês não estavam atrasados para a aula."],
  ["They weren't at school.", "Eles não estavam na escola.", "/ðeɪ wɜːrnt æt skuːl./", "ðêi uẽrnt ét scûl", ["They", " were", "n't", " at", " school."], "They weren't at school.", "Eles não estavam na escola."],

  // 8. Vocabulary drills
  ["bored", "entediado", "/bɔːrd/", "bórd", ["bored"], "Joe was very bored at the party.", "Joe estava muito entediado na festa."],
  ["excited", "animado", "/ɪkˈsaɪtɪd/", "ec-sái-ted", ["ex", "cit", "ed"], "He was really excited to go to the countryside last spring.", "Eu estava muito animado para ir para o interior na primavera passada."],
  ["disappointed", "decepcionado", "/ˌdɪsəˈpɔɪntɪd/", "dis-a-póin-ted", ["dis", "ap", "point", "ed"], "John was very disappointed with the food.", "John ficou muito decepcionado com a comida."],
  ["awkward", "constrangedor", "/ˈɔːkwərd/", "ó-quərd", ["awk", "ward"], "What an awkward situation!", "Que situação constrangedora!"],
  ["careful", "cuidadoso", "/ˈkɛəfʊl/", "qué-ful", ["care", "ful"], "Sam needs to be careful with his words.", "Sam precisa ser cuidadoso com suas palavras."],
  ["amazing", "excelente", "/əˈmeɪzɪŋ/", "a-mêi-zin", ["a", "maz", "ing"], "Our winter trip was amazing last month.", "Nossa viagem de inverno foi excelente no mês passado."],
  ["embarrassed", "envergonhado", "/ɪmˈbærəst/", "em-bé-rest", ["em", "bar", "rassed"], "Be careful with your words. Your sister is really embarrassed.", "Cuidado com suas palavras. Sua irmã está muito envergonhada."],
  ["frustrated", "frustrado", "/frʌsˈtreɪtɪd/", "fras-trêi-ted", ["frus", "trat", "ed"], "They were frustrated during the trip.", "Eles estavam frustrados durante a viagem."],
  ["spring", "primavera", "/sprɪŋ/", "sprin", ["spring"], "It's spring! Look at the flowers.", "É primavera! Olhe as flores."],
  ["summer", "verão", "/ˈsʌmər/", "sâ-mer", ["sum", "mer"], "It's summer. Let's go to the beach and swim.", "É verão. Vamos para a praia nadar."],
  ["fall", "outono", "/fɔːl/", "fól", ["fall"], "What a beautiful view! It's fall.", "Que vista bonita! É outono."],
  ["winter", "inverno", "/ˈwɪntər/", "uín-ter", ["win", "ter"], "I don't like winter. It's difficult to get up.", "Eu não gosto do inverno. É difícil levantar."],
  ["yesterday", "ontem", "/ˈjɛstərdeɪ/", "iés-ter-dêi", ["yes", "ter", "day"], "I was tired yesterday.", "Eu estava cansado ontem."],
  ["last", "passado", "/læst/", "lést", ["last"], "I was there last week.", "Eu estava lá na semana passada."],
  ["ago", "atrás", "/əˈɡoʊ/", "a-gôu", ["a", "go"], "They weren't here five days ago.", "Eles não estavam aqui cinco dias atrás."],
  ["rely on", "confiar em", "/rɪˈlaɪ ɑn/", "ri-lái an", ["re", "ly", " on"], "You can rely on me.", "Você pode confiar em mim."],
  ["countryside", "interior", "/ˈkʌntrisaɪd/", "cán-tri-sáid", ["coun", "try", "side"], "I was really excited to go to the countryside last spring.", "Eu estava muito animado para ir para o interior na primavera passada."],
  ["beach", "praia", "/biːtʃ/", "bîtch", ["beach"], "It wasn't hot at the beach yesterday.", "Não estava quente na praia ontem."],
  ["trip", "viagem", "/trɪp/", "trîp", ["trip"], "Our winter trip was amazing last month.", "Nossa viagem de inverno foi excelente no mês passado."],
  ["meeting", "reunião", "/ˈmitɪŋ/", "mî-tin", ["meet", "ing"], "The meeting was awkward.", "A reunião foi constrangedora."],

  // 9. Extra sentences from bottom section of prompt
  ["The weather was nice last week.", "O tempo estava bom na semana passada.", "/ðə ˈwɛðər wʌz naɪs læst wik./", "dâ ué-ðer uós náis lést uîc", ["The", " weath", "er", " was", " nice", " last", " week."], "The weather was nice last week.", "O tempo estava bom na semana passada."],
  ["Sam needs to be careful with his words.", "Sam precisa ser cuidadoso com suas palavras.", "/sæm nidz tuː biː ˈkɛəfʊl wɪð hɪz wɜːdz./", "sém nîds tû bî qué-ful uíð rîs uẽrds", ["Sam", " needs", " to", " be", " care", "ful", " with", " his", " words."], "Sam needs to be careful with his words.", "Sam precisa ser cuidadoso com suas palavras."],
  ["Last winter was amazing.", "O inverno passado foi incrível.", "/læst ˈwɪntər wʌz əˈmeɪzɪŋ./", "lést uín-ter uós a-mêi-zin", ["Last", " win", "ter", " was", " a", "maz", "ing."], "Last winter was amazing.", "O inverno passado foi incrível."],
  ["My husband and I were disappointed with the hotel. It was dirty and far from the beach.", "Meu marido e eu ficamos decepcionados com o hotel. Ele era sujo e longe da praia.", "/maɪ ˈhʌzbənd ænd aɪ wɜːr ˌdɪsəˈpɔɪntɪd wɪð ðə hoʊˈtɛl. ɪt wʌz ˈdɜːrti ænd fɑːr frɒm ðə biːtʃ./", "mai rás-band énd ai uẽr dis-a-póin-ted uíð dâ rôu-tél. it uós dẽr-ti énd fár fram dâ bîtch", ["My", " hus", "band", " and", " I", " were", " dis", "ap", "point", "ed", " with", " the", " ho", "tel.", " It", " was", " dir", "ty", " and", " far", " from", " the", " beach."], "My husband and I were disappointed with the hotel. It was dirty and far from the beach.", "Meu marido e eu ficamos decepcionados com o hotel. Ele era sujo e longe da praia."],
  ["It's difficult to work with her because she doesn't rely on anybody.", "É difícil trabalhar com ela porque ela não confia em ninguém.", "/ɪts ˈdɪfəkəlt tuː wɜːrk wɪð hər bɪˈkɒz ʃi ˈdʌzənt rɪˈlaɪ ɒn ˈɛvribɒdi./", "its dí-fi-colt tû uãrc uíð rãr bi-cós xi dâ-zent ri-lái an é-vri-bó-di", ["It's", " dif", "fi", "cult", " to", " work", " with", " her", " be", "cause", " she", " does", "n't", " re", "ly", " on", " an", "y", "bod", "y."], "It's difficult to work with her because she doesn't rely on anybody.", "É difícil trabalhar com ela porque ela não confia em ninguém."],
  ["Peter was disappointed because nobody was home.", "Peter ficou decepcionado porque ninguém estava em casa.", "/ˈpitər wʌz ˌdɪsəˈpɔɪntɪd bɪˈkɒz ˈnoʊˌbɔdi wʌz hoʊm./", "pî-ter uós dis-a-póin-ted bi-cós nôu-bó-di uós rôum", ["Pe", "ter", " was", " dis", "ap", "point", "ed", " be", "cause", " no", "bod", "y", " was", " home."], "Peter was disappointed because nobody was home.", "Peter ficou decepcionado porque ninguém estava em casa."],
  ["Joe was very bored at the party.", "Joe estava muito entediado na festa.", "/dʒoʊ wʌz ˈvɛri bɔːrd æt ðə ˈpɑːrti./", "djôu uós vé-ri bórd ét dâ pár-ti", ["Joe", " was", " ve", "ry", " bored", " at", " the", " par", "ty."], "Joe was very bored at the party.", "Joe estava muito entediado na festa."],
  ["My father and mother were late for the play.", "Meu pai e minha mãe chegaram atrasados para a peça.", "/maɪ ˈfɑːðər ænd ˈmʌðər wɜːr leɪt fɔːr ðə pleɪ./", "mai fá-der énd mâ-der uẽr lêit fór dâ plêi", ["My", " fa", "ther", " and", " moth", "er", " were", " late", " for", " the", " play."], "My father and mother were late for the play.", "Meu pai e minha mãe chegaram atrasados para a peça."],
  ["The movie we watched last night was amazing.", "O filme que assistimos ontem à noite foi incrível.", "/ðə ˈmuːvi wiː wɒtʃt læst naɪt wʌz əˈmeɪzɪŋ./", "dâ mû-vi uî uótcht lést náit uós a-mêi-zin", ["The", " mo", "vie", " we", " watched", " last", " night", " was", " a", "maz", "ing."], "The movie we watched last night was amazing.", "O filme que assistimos ontem à noite foi incrível."],
  ["Keith traveled on vacation last week.", "Keith viajou de férias na semana passada.", "/kiːθ ˈtrævəld ɒn veɪˈkeɪʃən læst wik./", "kîth tré-veld an vêi-quêi-xân lést uîc", ["Keith", " trav", "eled", " on", " va", "ca", "tion", " last", " week."], "Keith traveled on vacation last week.", "Keith viajou de férias na semana passada."],

  // 10. Vocabulary recap list at the end
  ["weather", "tempo (clima)", "/ˈwɛðər/", "ué-ðer", ["weath", "er"], "The weather was nice last week.", "O tempo estava bom na semana passada."],
  ["amazing", "incrível", "/əˈmeɪzɪŋ/", "a-mêi-zin", ["a", "maz", "ing"], "The movie we watched last night was amazing.", "O filme que assistimos ontem à noite foi incrível."],
  ["disappointed", "decepcionado", "/ˌdɪsəˈpɔɪntɪd/", "dis-a-póin-ted", ["dis", "ap", "point", "ed"], "Peter was disappointed because nobody was home.", "Peter ficou decepcionado porque ninguém estava em casa."],
  ["rely on", "confiar em", "/rɪˈlaɪ ɒn/", "ri-lái an", ["re", "ly", " on"], "It's difficult to work with her because she doesn't rely on anybody.", "É difícil trabalhar com ela porque ela não confia em ninguém."],
  ["bored", "entediado", "/bɔːrd/", "bórd", ["bored"], "Joe was very bored at the party.", "Joe estava muito entediado na festa."],
  ["late", "atrasado", "/leɪt/", "lêit", ["late"], "My father and mother were late for the play.", "Meu pai e minha mãe chegaram atrasados para a peça."],
  ["play", "peça de teatro", "/pleɪ/", "plêi", ["play"], "My father and mother were late for the play.", "Meu pai e minha mãe chegaram atrasados para a peça."],
  ["vacation", "férias", "/veɪˈkeɪʃən/", "vêi-quêi-xân", ["va", "ca", "tion"], "Keith traveled on vacation last week.", "Keith viajou de férias na semana passada."],
  ["last week", "semana passada", "/læst wik/", "lést uîc", ["last", " week"], "Keith traveled on vacation last week.", "Keith viajou de férias na semana passada."],
  ["embarrassed", "envergonhado", "/ɪmˈbærəst/", "em-bé-rest", ["em", "bar", "rassed"], "Be careful with your words. Your sister is really embarrassed.", "Cuidado com suas palavras. Sua irmã está muito envergonhada."],
  ["museum", "museu", "/mjuːˈziːəm/", "miu-zî-am", ["mu", "se", "um"], "We were at the museum last week.", "Nós estávamos no museu na semana passada."],
  ["building", "prédio", "/ˈbɪldɪŋ/", "bíl-din", ["build", "ing"], "The building was very tall.", "O prédio era muito alto."],
  ["tower", "torre", "/ˈtaʊər/", "táu-er", ["tow", "er"], "Look at that beautiful tower!", "Olhe para aquela bela torre!"],
  ["French", "francês", "/frɛntʃ/", "fréntch", ["French"], "Can you help me study French? I find it difficult.", "Você pode me ajudar a estudar francês? Eu acho isso difícil."]
];

export const TO_BE_PAST_DECK: FlashcardData[] = RAW_CARDS.map((item, idx) => ({
  id: 'to_be_past_' + (idx + 1),
  word: item[0],
  translation: item[1],
  pronunciation: item[2],
  portuguesePhonetic: item[3],
  syllables: item[4],
  exampleSentence: item[5],
  exampleTranslation: item[6],
}));
