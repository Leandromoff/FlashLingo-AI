import { FlashcardData } from '../types';

const RAW_CARDS: Array<[string, string, string, string, string[], string, string]> = [
  // Block 1: Verbs
  [
    "to tell - told",
    "contar / dizer - contou / disse",
    "/tu tɛl / toʊld/",
    "tchu tél / tôuld",
    ["to", " tell", " told"],
    "He told me he was getting married.",
    "Ele me disse que estava se casando."
  ],
  [
    "to talk - talked",
    "conversar / falar - conversou / falou",
    "/tu tɔk / tɔkt/",
    "tchu tólc / tólct",
    ["to", " talk", " talked"],
    "I talked to my friends yesterday.",
    "Eu conversei com meus amigos ontem."
  ],
  [
    "to invite - invited",
    "convidar - convidou",
    "/tu ɪnˈvaɪt / ɪnˈvaɪtɪd/",
    "tchu in-váit / in-vái-tid",
    ["to", " in", "vite", " in", "vit", "ed"],
    "Did they invite you to the wedding party?",
    "Eles convidaram você para a festa de casamento?"
  ],

  // Block 2: Vocabularies
  [
    "engaged",
    "noivo(a) / noivo(a) oficialmente",
    "/ɛnˈɡeɪdʒd/",
    "en-guêidjd",
    ["en", "gaged"],
    "They got engaged on the day of her birthday.",
    "Eles ficaram noivos no dia do aniversário dela."
  ],
  [
    "fiancé",
    "noivo",
    "/ˌfiːɑːnˈseɪ/",
    "fi-án-sêi",
    ["fi", "an", "cé"],
    "Laura was telling me a secret about her fiancé.",
    "Laura estava me contando um segredo sobre seu noivo."
  ],
  [
    "fiancée",
    "noiva",
    "/ˌfiːɑːnˈseɪ/",
    "fi-án-sêi",
    ["fi", "an", "cée"],
    "He told everybody his fiancée was an amazing woman.",
    "Ele disse a todos que sua noiva era uma mulher incrível."
  ],
  [
    "partner",
    "parceiro(a)",
    "/ˈpɑːrtnər/",
    "párt-ner",
    ["part", "ner"],
    "I talked to my son and he told me he was looking for a partner.",
    "Conversei com meu filho e ele me disse que estava procurando uma parceira."
  ],
  [
    "groomsman",
    "padrinho de casamento",
    "/ˈɡruːmzmən/",
    "grûmz-mân",
    ["grooms", "man"],
    "They invited me and my partner to be their maid of honor and groomsman.",
    "Eles convidaram eu e meu parceiro para sermos madrinha de honra e padrinho."
  ],
  [
    "maid of honor",
    "madrinha de honra",
    "/meɪd ʌv ˈɒnər/",
    "mêid âv ó-nor",
    ["maid", " of", " hon", "or"],
    "She invited her old friend to be their maid of honor.",
    "Ela convidou sua velha amiga para ser a madrinha de honra."
  ],
  [
    "marriage",
    "casamento",
    "/ˈmærɪdʒ/",
    "mǽ-ridj",
    ["mar", "riage"],
    "Did you tell him the truth about the marriage?",
    "Você contou a ele a verdade sobre o casamento?"
  ],
  [
    "wedding",
    "cerimônia de casamento",
    "/ˈwɛdɪŋ/",
    "uê-din",
    ["wed", "ding"],
    "They invited us to the wedding.",
    "Eles nos convidaram para o casamento."
  ],
  [
    "proposal",
    "pedido de casamento",
    "/prəˈpoʊzəl/",
    "pro-pôu-zôl",
    ["pro", "po", "sal"],
    "My wedding proposal was nowhere fascinating. We were in the kitchen.",
    "Meu pedido de casamento não foi nada fascinante. Estávamos na cozinha."
  ],
  [
    "lie",
    "mentira",
    "/laɪ/",
    "lái",
    ["lie"],
    "I talked to her about the lie my stepson told her daughter.",
    "Eu conversei com her sobre a mentira que meu enteado contou à filha dela."
  ],
  [
    "truth",
    "verdade",
    "/truːθ/",
    "trûθ",
    ["truth"],
    "Tell me the truth.",
    "Conte-me a verdade."
  ],
  [
    "joke",
    "piada",
    "/dʒoʊk/",
    "djôuc",
    ["joke"],
    "His brother-in-law told me their marriage was a joke.",
    "O cunhado dele me disse que o casamento deles era uma piada."
  ],
  [
    "secret",
    "segredo",
    "/ˈsiːkrət/",
    "sî-cret",
    ["se", "cret"],
    "Laura was telling me a secret about her fiancé.",
    "Laura estava me contando um segredo sobre seu noivo."
  ],

  // Block 3: Sentences
  [
    "Tell me about it!",
    "Conte-me sobre isso!",
    "/tɛl miː əˈbaʊt ɪt/",
    "tél mî a-báut ít",
    ["Tell", " me", " a", "bout", " it!"],
    "Really? Tell me about it!",
    "Sério? Conte-me sobre isso!"
  ],
  [
    "They want to get married next month.",
    "Eles querem se casar no próximo mês.",
    "/ðeɪ wɒnt tuː ɡɛt ˈmærid nɛkst mʌnθ/",
    "ðêi uónt tchu guét mǽ-rid nécst mânθ",
    ["They", " want", " to", " get", " mar", "ried", " next", " month."],
    "They want to get married next month.",
    "Eles querem se casar no próximo mês."
  ],
  [
    "It's not that easy to get divorced.",
    "Não é tão fácil se divorciar.",
    "/ɪts nɒt ðæt ˈiːzi tuː ɡɛt dɪˈvɔːrst/",
    "íts nót ðét î-zi tchu guét di-vórst",
    ["It's", " not", " that", " ea", "sy", " to", " get", " di", "vorced."],
    "It's not that easy to get divorced.",
    "Não é tão fácil se divorciar."
  ],
  [
    "They got engaged on the day of her birthday.",
    "Eles ficaram noivos no dia do aniversário dela.",
    "/ðeɪ ɡɒt ɛnˈɡeɪdʒd ɒn ðə deɪ ʌv hɜːr ˈbɜːrθdeɪ/",
    "ðêi gót en-guêidjd ón ðâ dêi âv rêr bərθ-dêi",
    ["They", " got", " en", "gaged", " on", " the", " day", " of", " her", " birth", "day."],
    "They got engaged on the day of her birthday.",
    "Eles ficaram noivos no dia do aniversário dela."
  ],

  // Block 4: Phrases 2
  [
    "Did they invite you to the wedding party?",
    "Eles convidaram você para a festa de casamento?",
    "/dɪd ðeɪ ɪnˈvaɪt juː tuː ðə ˈwɛdɪŋ ˈpɑːrti/",
    "díd ðêi in-váit iu tchu ðâ uê-din pár-ti",
    ["Did", " they", " in", "vite", " you", " to", " the", " wed", "ding", " par", "ty?"],
    "Did they invite you to the wedding party?",
    "Eles convidaram você para a festa de casamento?"
  ],
  [
    "They didn't get married in the church.",
    "Eles não se casaram na igreja.",
    "/ðeɪ ˈdɪdnt ɡɛt ˈmærid ɪn ðə tʃɜːrtʃ/",
    "ðêi díd-nt guét mǽ-rid ín ðâ tchərtch",
    ["They", " didn't", " get", " mar", "ried", " in", " the", " church."],
    "They didn't get married in the church.",
    "Eles não se casaram na igreja."
  ],
  [
    "They invited me and my partner to be their maid of honor and groomsman.",
    "Eles convidaram eu e meu parceiro para sermos madrinha de honra e padrinho.",
    "/ðeɪ ɪnˈvaɪtɪd miː ænd maɪ ˈpɑːrtnər tuː biː ðɛər meɪd ʌv ˈɒnər ænd ˈɡruːmzmən/",
    "ðêi in-vái-tid mî énd mái párt-ner tchu bî ðêr mêid âv ó-nor énd grûmz-mân",
    ["They", " in", "vit", "ed", " me", " and", " my", " part", "ner", " to", " be", " their", " maid", " of", " hon", "or", " and", " grooms", "man."],
    "They invited me and my partner to be their maid of honor and groomsman.",
    "Eles convidaram eu e meu parceiro para sermos madrinha de honra e padrinho."
  ],
  [
    "He told me he was getting married.",
    "Ele me disse que estava se casando.",
    "/hiː toʊld miː hiː wɒz ˈɡɛtɪŋ ˈmærid/",
    "rî tôuld mî rî uóz gué-tin mǽ-rid",
    ["He", " told", " me", " he", " was", " get", "ting", " mar", "ried."],
    "He told me he was getting married.",
    "Ele me disse que estava se casando."
  ],
  [
    "We told them we were talking about the wedding.",
    "Nós dissemos a eles que estávamos falando sobre o casamento.",
    "/wiː toʊld ðɛm wiː wɜːr ˈtɔːkɪŋ əˈbaʊt ðə ˈwɛdɪŋ/",
    "uí tôuld ðém uí uêr tól-quin a-báut ðâ uê-din",
    ["We", " told", " them", " we", " were", " talk", "ing", " a", "bout", " the", " wed", "ding."],
    "We told them we were talking about the wedding.",
    "Nós dissemos a eles que estávamos falando sobre o casamento."
  ],
  [
    "She told me they weren't going anywhere that night.",
    "Ela me disse que eles não iam a lugar nenhum naquela noite.",
    "/ʃiː toʊld miː ðeɪ wɜːrnt ˈɡoʊɪŋ ˈɛniwɛər ðæt naɪt/",
    "chî tôuld mî ðêi uêrn-t gôu-in é-ni-uêr ðét náit",
    ["She", " told", " me", " they", " weren't", " go", "ing", " an", "y", "where", " that", " night."],
    "She told me they weren't going anywhere that night.",
    "Ela me disse que eles não iam a lugar nenhum naquela noite."
  ],
  [
    "They got engaged somewhere in Italy.",
    "Eles ficaram noivos em algum lugar da Itália.",
    "/ðeɪ ɡɒt ɛnˈɡeɪdʒd ˈsʌmwɛər ɪn ˈɪtəli/",
    "ðêi gót en-guêidjd sâm-uêr ín í-ta-li",
    ["They", " got", " en", "gaged", " some", "where", " in", " It", "a", "ly."],
    "They got engaged somewhere in Italy.",
    "Eles ficaram noivos em algum lugar da Itália."
  ],
  [
    "My wedding proposal was nowhere fascinating. We were in the kitchen.",
    "Meu pedido de casamento não foi nada fascinante. Estávamos na cozinha.",
    "/maɪ ˈwɛdɪŋ prəˈpoʊzəl wɒz ˈnoʊwɛər ˈfæsɪneɪtɪŋ. wiː wɜːr ɪn ðə ˈkɪtʃɪn/",
    "mái uê-din pro-pôu-zôl uóz nôu-uêr fǽ-si-nêi-tin. uí uêr ín ðâ quí-tchin",
    ["My", " wed", "ding", " pro", "po", "sal", " was", " no", "where", " fas", "ci", "nat", "ing.", " We", " were", " in", " the", " kitch", "en."],
    "My wedding proposal was nowhere fascinating. We were in the kitchen.",
    "Meu pedido de casamento não foi nada fascinante. Estávamos na cozinha."
  ],
  [
    "Did they get married anywhere different?",
    "Eles se casaram em algum lugar diferente?",
    "/dɪd ðeɪ ɡɛt ˈmærid ˈɛniwɛər ˈdɪfrənt/",
    "díd ðêi guét mǽ-rid é-ni-uêr dí-frent",
    ["Did", " they", " get", " mar", "ried", " an", "y", "where", " dif", "fer", "ent?"],
    "Did they get married anywhere different?",
    "Eles se casaram em algum lugar diferente?"
  ],

  // Block 5: Phrases 3
  [
    "She invited her old friend to be their maid of honor.",
    "Ela convidou sua velha amiga para ser a madrinha de honra.",
    "/ʃiː ɪnˈvaɪtɪd hɜːr oʊld frɛnd tuː biː ðɛər meɪd ʌv ˈɒnər/",
    "chî in-vái-tid rêr ôuld frénd tchu bî ðêr mêid âv ó-nor",
    ["She", " in", "vit", "ed", " her", " old", " friend", " to", " be", " their", " maid", " of", " hon", "or."],
    "She invited her old friend to be their maid of honor.",
    "Ela convidou sua velha amiga para ser a madrinha de honra."
  ],
  [
    "His brother-in-law told me their marriage was a joke.",
    "O cunhado dele me disse que o casamento deles era uma piada.",
    "/hɪz ˈbrʌðər ɪn lɔː toʊld miː ðɛər ˈmærɪdʒ wɒz ə dʒoʊk/",
    "ríz brâ-ðer in ló tôuld mî ðêr mǽ-ridj uóz a djôuc",
    ["His", " broth", "er", "-in", "-law", " told", " me", " their", " mar", "riage", " was", " a", " joke."],
    "His brother-in-law told me their marriage was a joke.",
    "O cunhado dele me disse que o casamento deles era uma piada."
  ],
  [
    "He didn't tell the truth. They went somewhere last night.",
    "Ele não disse a verdade. Eles foram a algum lugar ontem à noite.",
    "/hiː ˈdɪdnt tɛl ðə truːθ. ðeɪ wɛnt ˈsʌmwɛər læst naɪt/",
    "rî díd-nt tél ðâ trûθ. ðêi uént sâm-uêr lést náit",
    ["He", " didn't", " tell", " the", " truth.", " They", " went", " some", "where", " last", " night."],
    "He didn't tell the truth. They went somewhere last night.",
    "Ele não disse a verdade. Eles foram a algum lugar ontem à noite."
  ],
  [
    "Laura was telling me a secret about her fiancé.",
    "Laura estava me contando um segredo sobre seu noivo.",
    "/ˈlɔːrə wɒz ˈtɛlɪŋ miː ə ˈsiːkrət əˈbaʊt hɜːr ˌfiːɑːnˈseɪ/",
    "ló-ra uóz tél-in mî a sî-cret a-báut rêr fi-án-sêi",
    ["Lau", "ra", " was", " tell", "ing", " me", " a", " se", "cret", " a", "bout", " her", " fi", "an", "cé."],
    "Laura was telling me a secret about her fiancé.",
    "Laura estava me contando um segredo sobre seu noivo."
  ],
  [
    "I talked to her about the lie my stepson told her daughter.",
    "Eu conversei com ela sobre a mentira que meu enteado contou à filha dela.",
    "/maɪ ˈstepˌsʌn toʊld hɜːr ˈdɔːtər/",
    "ai tólct tchu rêr a-báut ðâ lái mái estép-sân tôuld rêr dó-ter",
    ["I", " talked", " to", " her", " a", "bout", " the", " lie", " my", " step", "son", " told", " her", " daugh", "ter."],
    "I talked to her about the lie my stepson told her daughter.",
    "Eu conversei com ela sobre a mentira que meu enteado contou à filha dela."
  ],
  [
    "She told us that she was getting divorced.",
    "Ela nos disse que estava se divorciando.",
    "/ʃiː toʊld ʌs ðæt ʃiː wɒz ˈɡɛtɪŋ dɪˈvɔːrst/",
    "chî tôuld âs ðét chî uóz gué-tin di-vórst",
    ["She", " told", " us", " that", " she", " was", " get", "ting", " di", "vorced."],
    "She told us that she was getting divorced.",
    "Ela nos disse que estava se divorciando."
  ],
  [
    "They told me they went nowhere last Saturday; they stayed home.",
    "Eles me disseram que não foram a lugar nenhum no último sábado; ficaram em casa.",
    "/ðeɪ toʊld miː ðeɪ wɛnt ˈnoʊwɛər læst ˈsætərdeɪ; ðeɪ steɪd hoʊm/",
    "ðêi tôuld mî ðêi uént nôu-uêr lést sǽ-ter-dêi; ðêi estêid rôm",
    ["They", " told", " me", " they", " went", " no", "where", " last", " Sat", "ur", "day;", " they", " stayed", " home."],
    "They told me they went nowhere last Saturday; they stayed home.",
    "Eles me disseram que não foram a lugar nenhum no último sábado; ficaram em casa."
  ],

  // Block 6: Phrases 4
  [
    "Can she tell the time in English?",
    "Ela consegue dizer as horas em inglês?",
    "/kæn ʃiː tɛl ðə taɪm ɪn ˈɪŋɡlɪʃ/",
    "quên chî tél ðâ táim ín ín-glish",
    ["Can", " she", " tell", " the", " time", " in", " En", "glish?"],
    "Can she tell the time in English?",
    "Ela consegue dizer as horas em inglês?"
  ],
  [
    "He told everybody his fiancée was an amazing woman.",
    "Ele disse a todos que sua noiva era uma mulher incrível.",
    "/hiː toʊld ˈɛvribɒdi hɪz ˌfiːɑːnˈseɪ wɒz ən əˈmeɪzɪŋ ˈwʊmən/",
    "rî tôuld é-vri-bó-di ríz fi-án-sêi uóz én a-mêi-zin uú-mân",
    ["He", " told", " ev", "ery", "bod", "y", " his", " fi", "an", "cée", " was", " an", " a", "maz", "ing", " wom", "an."],
    "He told everybody his fiancée was an amazing woman.",
    "Ele disse a todos que sua noiva era uma mulher incrível."
  ],
  [
    "Did you go anywhere interesting with your partner?",
    "Você foi a algum lugar interessante com seu parceiro(a)?",
    "/dɪd juː ɡoʊ ˈɛniwɛər ˈɪntrestɪŋ wɪð jɔːr ˈpɑːrtnər/",
    "díd iu gôu é-ni-uêr ín-tres-tin uíð iór párt-ner",
    ["Did", " you", " go", " an", "y", "where", " in", "ter", "est", "ing", " with", " your", " part", "ner?"],
    "Did you go anywhere interesting with your partner?",
    "Você foi a algum lugar interessante com seu parceiro(a)?"
  ],
  [
    "Can you tell me the difference between getting married and getting engaged?",
    "Você pode me dizer a diferença entre casar e ficar noivo?",
    "/kæn juː tɛl miː ðə ˈdɪfrəns bɪˈtwiːn ˈɡɛtɪŋ ˈmærid ænd ˈɡɛtɪŋ ɛnˈɡeɪdʒd/",
    "quên iu tél mî ðâ dí-frens bi-tuîn gué-tin mǽ-rid énd gué-tin en-guêidjd",
    ["Can", " you", " tell", " me", " the", " dif", "fer", "ence", " be", "tween", " get", "ting", " mar", "ried", " and", " get", "ting", " en", "gaged?"],
    "Can you tell me the difference between getting married and getting engaged?",
    "Você pode me dizer a diferença entre casar e ficar noivo?"
  ],
  [
    "He didn't invite his stepmother to their wedding.",
    "Ele não convidou sua madrasta para o casamento.",
    "/hiː ˈdɪdnt ɪnˈvaɪt hɪz ˈstɛpˌmʌðər tuː ðɛər ˈwɛdɪŋ/",
    "rî díd-nt in-váit ríz estép-mâ-ðer tchu ðêr uê-din",
    ["He", " didn't", " in", "vite", " his", " step", "moth", "er", " to", " their", " wed", "ding."],
    "He didn't invite his stepmother to their wedding.",
    "Ele não convidou sua madrasta para o casamento."
  ],
  [
    "We want to get engaged somewhere hot and near the beach.",
    "Nós queremos ficar noivos em algum lugar quente e perto da praia.",
    "/wiː wɒnt tuː ɡɛt ɛnˈɡeɪdʒd ˈsʌmwɛər hɒt ænd nɪər ðə biːtʃ/",
    "uí uónt tchu guét en-guêidjd sâm-uêr rót énd nîer ðâ bîtch",
    ["We", " want", " to", " get", " en", "gaged", " some", "where", " hot", " and", " near", " the", " beach."],
    "We want to get engaged somewhere hot and near the beach.",
    "Nós queremos ficar noivos em algum lugar quente e perto da praia."
  ],
  [
    "Really? Tell me all about it!",
    "Sério? Conte-me tudo sobre isso!",
    "/ˈrɪəli? tɛl miː ɔːl əˈbaʊt ɪt/",
    "rî-li? tél mî ól a-báut ít",
    ["Real", "ly?", " Tell", " me", " all", " a", "bout", " it!"],
    "Really? Tell me all about it!",
    "Sério? Conte-me tudo sobre isso!"
  ],

  // Block 7: Relationship Statuses
  [
    "single",
    "solteiro(a)",
    "/ˈsɪŋɡəl/",
    "sín-gôl",
    ["sin", "gle"],
    "I am single at that time.",
    "Eu estava solteiro naquela época."
  ],
  [
    "engaged",
    "noivo(a)",
    "/ɛnˈɡeɪdʒd/",
    "en-guêidjd",
    ["en", "gaged"],
    "Sarah told me that she was getting engaged.",
    "Sarah me disse que estava ficando noiva."
  ],
  [
    "married",
    "casado(a)",
    "/ˈmærid/",
    "mǽ-rid",
    ["mar", "ried"],
    "My mother told me she was getting married again.",
    "Minha mãe me disse que estava se casando novamente."
  ],
  [
    "separated",
    "separado(a)",
    "/ˈsɛpəreɪtɪd/",
    "sé-pa-rêi-tid",
    ["sep", "a", "rat", "ed"],
    "They are separated now.",
    "Eles estão separados agora."
  ],
  [
    "divorced",
    "divorciado(a)",
    "/dɪˈvɔːrst/",
    "di-vórst",
    ["di", "vorced"],
    "Sam did not tell me he was getting divorced.",
    "Sam não me disse que estava se divorciando."
  ],
  [
    "widow",
    "viúva",
    "/ˈwɪdoʊ/",
    "uí-dou",
    ["wid", "ow"],
    "She has been a widow for five years.",
    "Ela é viúva há cinco anos."
  ],
  [
    "widower",
    "viúvo",
    "/ˈwɪdoʊər/",
    "uí-dou-er",
    ["wid", "ow", "er"],
    "The old man was a widower.",
    "O velho homem era viúvo."
  ],

  // Block 8: Family Relations
  [
    "son",
    "filho",
    "/sʌn/",
    "sân",
    ["son"],
    "I talked to my son and he told me he was looking for a partner.",
    "Conversei com meu filho e ele me disse que estava procurando uma parceira."
  ],
  [
    "daughter",
    "filha",
    "/ˈdɔːtər/",
    "dó-ter",
    ["daugh", "ter"],
    "I talked to her about the lie my stepson told her daughter.",
    "Eu conversei com ela sobre a mentira que meu enteado contou à filha dela."
  ],
  [
    "nephew",
    "sobrinho",
    "/ˈnɛfjuː/",
    "né-fiu",
    ["neph", "ew"],
    "I talked to my nephew at the party and he told me he was getting divorced.",
    "Conversei com meu sobrinho na festa e ele me disse que estava se divorciando."
  ],
  [
    "niece",
    "sobrinha",
    "/niːs/",
    "nîs",
    ["niece"],
    "My niece sent me an invitation.",
    "Minha sobrinha me enviou um convite."
  ],
  [
    "granddaughter",
    "neta",
    "/ˈɡrændˌdɔːtər/",
    "grénd-dó-ter",
    ["grand", "daugh", "ter"],
    "Their granddaughter is very beautiful.",
    "A neta deles é muito linda."
  ],
  [
    "grandson",
    "neto",
    "/ˈɡrændˌsʌn/",
    "grénd-sân",
    ["grand", "son"],
    "Their grandson works abroad.",
    "O neto deles trabalha no exterior."
  ],
  [
    "great-grandparents",
    "bisavós",
    "/ɡreɪt ˈɡrændˌpɛərənts/",
    "grêit grénd-pê-rents",
    ["great", " grand", "par", "ents"],
    "They visited their great-grandparents.",
    "Eles visitaram seus bisavós."
  ],

  // Block 9: Step relatives
  [
    "stepparents",
    "padrastos e madrastas",
    "/ˈstɛpˌpɛərənts/",
    "estép-pê-rents",
    ["step", "par", "ents"],
    "Knowing your stepparents takes time.",
    "Conhecer seus padrastos leva tempo."
  ],
  [
    "stepfather",
    "padrasto",
    "/ˈstɛpˌfɑːðər/",
    "estép-fá-ðer",
    ["step", "fa", "ther"],
    "My stepfather is an IT specialist.",
    "Meu padrasto é um especialista em TI."
  ],
  [
    "stepmother",
    "madrasta",
    "/ˈstɛpˌmʌðər/",
    "estép-mâ-ðer",
    ["step", "moth", "er"],
    "He didn't invite his stepmother to their wedding.",
    "Ele não convidou sua madrasta para o casamento."
  ],
  [
    "stepson",
    "enteado",
    "/ˈstɛpˌsʌn/",
    "estép-sân",
    ["step", "son"],
    "I talked to her about the lie my stepson told her daughter.",
    "Eu conversei com ela sobre a mentira que meu enteado contou à filha dela."
  ],
  [
    "stepdaughter",
    "enteada",
    "/ˈstɛpˌdɔːtər/",
    "estép-dó-ter",
    ["step", "daugh", "ter"],
    "His stepdaughter is a doctor.",
    "A enteada dele é médica."
  ],

  // Block 10: Half siblings
  [
    "half-brother",
    "meio-irmão",
    "/ˈhɑːf ˌbrʌðər/",
    "ráf-brâ-ðer",
    ["half", " broth", "er"],
    "I have one half-brother and one half-sister.",
    "Eu tenho um meio-irmão e uma meia-irmã."
  ],
  [
    "half-sister",
    "meia-irmã",
    "/ˈhɑːf ˌsɪstər/",
    "ráf-sís-ter",
    ["half", " sis", "ter"],
    "My half-sister lives in Atlanta.",
    "Minha meia-irmã mora em Atlanta."
  ],

  // Block 11: In-laws
  [
    "parents-in-law",
    "sogros",
    "/ˈpɛərənts ɪn lɔː/",
    "pê-rents in ló",
    ["par", "ents", "-in", "-law"],
    "My parents-in-law live near the beach.",
    "Meus sogros moram perto da praia."
  ],
  [
    "father-in-law",
    "sogro",
    "/ˈfɑːðər ɪn lɔː/",
    "fá-ðer in ló",
    ["fa", "ther", "-in", "-law"],
    "My father-in-law offered great benefits.",
    "Meu sogro oferecia ótimos benefícios."
  ],
  [
    "mother-in-law",
    "sogra",
    "/ˈmʌðər ɪn lɔː/",
    "mâ-ðer in ló",
    ["moth", "er", "-in", "-law"],
    "My mother-in-law is a sales manager.",
    "Minha sogra é gerente de vendas."
  ],
  [
    "son-in-law",
    "genro",
    "/ˈsʌn ɪn lɔː/",
    "sân in ló",
    ["son", "-in", "-law"],
    "His son-in-law got a salary raise last year.",
    "O genro dele recebeu um aumento salarial no ano passado."
  ],
  [
    "daughter-in-law",
    "nora",
    "/ˈdɔːtər ɪn lɔː/",
    "dó-ter in ló",
    ["daugh", "ter", "-in", "-law"],
    "My daughter-in-law sent her résumé on time.",
    "Minha nora enviou seu currículo a tempo."
  ],
  [
    "brother-in-law",
    "cunhado",
    "/ˈbrʌðər ɪn lɔː/",
    "brâ-ðer in ló",
    ["broth", "er", "-in", "-law"],
    "His brother-in-law told me their marriage was a joke.",
    "O cunhado dele me disse que o casamento deles era uma piada."
  ],
  [
    "sister-in-law",
    "cunhada",
    "/ˈsɪstər ɪn lɔː/",
    "sís-ter in ló",
    ["sis", "ter", "-in", "-law"],
    "Conversei com a cunhada dela esta manhã e ela me disse que estava ficando noiva.",
    "I talked to her sister-in-law this morning and she told me she was getting engaged."
  ],

  // Block 12: Truth, talk, inv
  [
    "Tell me the truth.",
    "Conte-me a verdade.",
    "/tɛl miː ðə truːθ/",
    "tél mî ðâ trûθ",
    ["Tell", " me", " the", " truth."],
    "Tell me the truth.",
    "Conte-me a verdade."
  ],
  [
    "He told me the truth.",
    "Ele me contou a verdade.",
    "/hiː toʊld miː ðə truːθ/",
    "rî tôuld mî ðâ trûθ",
    ["He", " told", " me", " the", " truth."],
    "He told me the truth.",
    "Ele me contou a verdade."
  ],
  [
    "I talk to my friends every day.",
    "Eu converso com meus amigos todos os dias.",
    "/aɪ tɔːk tuː maɪ frɛndz ˈɛvri deɪ/",
    "ai tólc tchu mái fréndz é-vri dêi",
    ["I", " talk", " to", " my", " friends", " ev", "ery", " day."],
    "I talk to my friends every day.",
    "Eu converso com meus amigos todos os dias."
  ],
  [
    "I talked to my friends yesterday.",
    "Eu conversei com meus amigos ontem.",
    "/aɪ tɔːkt tuː maɪ frɛndz ˈjɛstərdeɪ/",
    "ai tólct tchu mái fréndz iés-ter-dêi",
    ["I", " talked", " to", " my", " friends", " yes", "ter", "day."],
    "I talked to my friends yesterday.",
    "Eu conversei com meus amigos ontem."
  ],
  [
    "They invited us to the wedding.",
    "Eles nos convidaram para o casamento.",
    "/ðeɪ ɪnˈvaɪtɪd ʌs tuː ðə ˈwɛdɪŋ/",
    "ðêi in-vái-tid âs tchu ðâ uê-din",
    ["They", " in", "vit", "ed", " us", " to", " the", " wed", "ding."],
    "They invited us to the wedding.",
    "Eles nos convidaram para o casamento."
  ],
  [
    "Did they invite you?",
    "Eles convidaram você?",
    "/dɪd ðeɪ ɪnˈvaɪt juː/",
    "díd ðêi in-váit iu",
    ["Did", " they", " in", "vite", " you?"],
    "Did they invite you?",
    "Eles convidaram você?"
  ],

  // Block 13: Verbal compounds
  [
    "get engaged",
    "ficar noivo(a)",
    "/ɡɛt ɛnˈɡeɪdʒd/",
    "guét en-guêidjd",
    ["get", " en", "gaged"],
    "Sarah told me that she was getting engaged.",
    "Sarah me disse que estava ficando noiva."
  ],
  [
    "get married",
    "casar-se",
    "/ɡɛt ˈmærid/",
    "guét mǽ-rid",
    ["get", " mar", "ried"],
    "Do you want to marry me?",
    "Você quer se casar comigo?"
  ],
  [
    "get divorced",
    "divorciar-se",
    "/ɡɛt dɪˈvɔːrst/",
    "guét di-vórst",
    ["get", " di", "vorced"],
    "Sam did not tell me he was getting divorced.",
    "Sam não me disse que estava se divorciando."
  ],
  [
    "wedding proposal",
    "pedido de casamento",
    "/ˈwɛdɪŋ prəˈpoʊzəl/",
    "uê-din pro-pôu-zôl",
    ["wed", "ding", " pro", "po", "sal"],
    "My wedding proposal was nowhere fascinating. We were in the kitchen.",
    "Meu pedido de casamento não foi nada fascinante. Estávamos na cozinha."
  ],
  [
    "maid of honor",
    "madrinha de honra",
    "/meɪd ʌv ˈɒnər/",
    "mêid âv ó-nor",
    ["maid", " of", " hon", "or"],
    "She invited her old friend to be their maid of honor.",
    "Ela convidou sua velha amiga para ser a madrinha de honra."
  ],
  [
    "groomsman",
    "padrinho de casamento",
    "/ˈɡruːmzmən/",
    "grûmz-mân",
    ["grooms", "man"],
    "Did he invite you to be his groomsman?",
    "Ele convidou você para ser o padrinho dele?"
  ],

  // Block 14: Q&A Pairs
  [
    "When did they get engaged?",
    "Quando eles ficaram noivos?",
    "/wɛn dɪd ðeɪ ɡɛt ɛnˈɡeɪdʒd/",
    "uén díd ðêi guét en-guêidjd",
    ["When", " did", " they", " get", " en", "gaged?"],
    "When did they get engaged?",
    "Quando eles ficaram noivos?"
  ],
  [
    "They got engaged last year.",
    "Eles ficaram noivos no ano passado.",
    "/ðeɪ ɡɒt ɛnˈɡeɪdʒd læst jɪər/",
    "ðêi gót en-guêidjd lést í-er",
    ["They", " got", " en", "gaged", " last", " year."],
    "They got engaged last year.",
    "Eles ficaram noivos no ano passado."
  ],
  [
    "Did they invite you to the wedding?",
    "Eles convidaram você para o casamento?",
    "/dɪd ðeɪ ɪnˈvaɪt juː tuː ðə ˈwɛdɪŋ/",
    "díd ðêi in-váit iu tchu ðâ uê-din",
    ["Did", " they", " in", "vite", " you", " to", " the", " wed", "ding?"],
    "Did they invite you to the wedding?",
    "Eles convidaram você para o casamento?"
  ],
  [
    "Yes, they did.",
    "Sim, convidaram.",
    "/jɛs ðeɪ dɪd/",
    "iés ðêi díd",
    ["Yes,", " they", " did."],
    "Yes, they did.",
    "Sim, convidaram."
  ],
  [
    "Who told you that secret?",
    "Quem contou esse segredo para você?",
    "/huː toʊld juː ðæt ˈsiːkrət/",
    "rû tôuld iu ðét sî-cret",
    ["Who", " told", " you", " that", " se", "cret?"],
    "Who told you that secret?",
    "Quem contou esse segredo para você?"
  ],
  [
    "My sister told me.",
    "Minha irmã me contou.",
    "/maɪ ˈsɪstər toʊld miː/",
    "mái sís-ter tôuld mî",
    ["My", " sis", "ter", " told", " me."],
    "My sister told me.",
    "Minha irmã me contou."
  ],
  [
    "Did you talk to your fiancé yesterday?",
    "Você conversou com seu noivo ontem?",
    "/dɪd juː tɔːk tuː jɔːr ˌfiːɑːnˈseɪ ˈjɛstərdeɪ/",
    "díd iu tólc tchu iór fi-án-sêi iés-ter-dêi",
    ["Did", " you", " talk", " to", " your", " fi", "an", "cé", " yes", "ter", "day?"],
    "Did you talk to your fiancé yesterday?",
    "Você conversou com seu noivo ontem?"
  ],
  [
    "Yes, I did.",
    "Sim, conversei.",
    "/jɛs aɪ dɪd/",
    "iés ai díd",
    ["Yes,", " I", " did."],
    "Yes, I did.",
    "Sim, conversei."
  ],

  // Block 15: More negative and affirmative statements
  [
    "He told me he and John were getting divorced.",
    "Ele me disse que ele e John estavam se divorciando.",
    "/hiː toʊld miː hiː ænd dʒɒn wɜːr ˈɡɛtɪŋ dɪˈvɔːrst/",
    "rî tôuld mî rî énd djón uêr gué-tin di-vórst",
    ["He", " told", " me", " he", " and", " John", " were", " get", "ting", " di", "vorced."],
    "He told me he and John were getting divorced.",
    "Ele me disse que ele e John estavam se divorciando."
  ],
  [
    "I didn't invite her to the wedding.",
    "Eu não a convidei para o casamento.",
    "/aɪ ˈdɪdnt ɪnˈvaɪt hɜːr tuː ðə ˈwɛdɪŋ/",
    "ai díd-nt in-váit rêr tchu ðâ uê-din",
    ["I", " didn't", " in", "vite", " her", " to", " the", " wed", "ding."],
    "I didn't invite her to the wedding.",
    "Eu não a convidei para o casamento."
  ],
  [
    "Did she lie about it?",
    "Ela mentiu sobre isso?",
    "/dɪd ʃiː laɪ əˈbaʊt ɪt/",
    "díd chî lái a-báut ít",
    ["Did", " she", " lie", " a", "bout", " it?"],
    "Did she lie about it?",
    "Ela mentiu sobre isso?"
  ],
  [
    "Sarah told me that she was getting engaged.",
    "Sarah me disse que estava ficando noiva.",
    "/ˈsɛərə toʊld miː ðæt ʃiː wɒz ˈɡɛtɪŋ ɛnˈɡeɪdʒd/",
    "sé-ra tôuld mî ðét chî uóz gué-tin en-guêidjd",
    ["Sa", "rah", " told", " me", " that", " she", " was", " get", "ting", " en", "gaged."],
    "Sarah told me that she was getting engaged.",
    "Sarah me disse que estava ficando noiva."
  ],
  [
    "Did you know about his secret?",
    "Você sabia sobre o segredo dele?",
    "/dɪd juː noʊ əˈbaʊt hɪz ˈsiːkrət/",
    "díd iu nôu a-báut ríz sî-cret",
    ["Did", " you", " know", " a", "bout", " his", " se", "cret?"],
    "Did you know about his secret?",
    "Você sabia sobre o segredo dele?"
  ],
  [
    "Did you tell him the truth about the marriage?",
    "Você contou a ele a verdade sobre o casamento?",
    "/dɪd juː tɛl hɪm ðə truːθ əˈbaʊt ðə ˈmærɪdʒ/",
    "díd iu tél rím ðâ trûθ a-báut ðâ mǽ-ridj",
    ["Did", " you", " tell", " him", " the", " truth", " a", "bout", " the", " mar", "riage?"],
    "Did you tell him the truth about the marriage?",
    "Você contou a ele a verdade sobre o casamento?"
  ],
  [
    "Sam did not tell me he was getting divorced.",
    "Sam não me disse que estava se divorciando.",
    "/sæm dɪd nɒt tɛl miː hiː wɒz ˈɡɛtɪŋ dɪˈvɔːrst/",
    "sém díd nót tél mî rî uóz gué-tin di-vórst",
    ["Sam", " did", " not", " tell", " me", " he", " was", " get", "ting", " di", "vorced."],
    "Sam did not tell me he was getting divorced.",
    "Sam não me disse que estava se divorciando."
  ],
  [
    "My mother told me she was getting married again.",
    "Minha mãe me disse que estava se casando novamente.",
    "/maɪ ˈmʌðər toʊld miː ʃiː wɒz ˈɡɛtɪŋ ˈmærid əˈɡɛn/",
    "mái mâ-ðer tôuld mî chî uóz gué-tin mǽ-rid a-guén",
    ["My", " moth", "er", " told", " me", " she", " was", " get", "ting", " mar", "ried", " a", "gain."],
    "My mother told me she was getting married again.",
    "Minha mãe me disse que estava se casando novamente."
  ],
  [
    "Her wedding was very beautiful.",
    "O casamento dela foi muito bonito.",
    "/hɜːr ˈwɛdɪŋ wɒz ˈvɛri ˈbjuːtɪfʊl/",
    "rêr uê-din uóz vé-ri biû-ti-ful",
    ["Her", " wed", "ding", " was", " ve", "ry", " beau", "ti", "ful."],
    "Her wedding was very beautiful.",
    "O casamento dela foi muito bonito."
  ],
  [
    "Do you want to marry me?",
    "Você quer se casar comigo?",
    "/duː juː wɒnt tuː ˈmæri miː/",
    "dû iu uónt tchu mǽ-ri mî",
    ["Do", " you", " want", " to", " mar", "ry", " me?"],
    "Do you want to marry me?",
    "Você quer se casar comigo?"
  ],

  // Block 16: Dialogue Lines
  [
    "Hey, Josh! Do you know anything about Matt and Nikki?",
    "Oi, Josh! Você sabe alguma coisa sobre Matt e Nikki?",
    "/heɪ dʒɒʃ! duː juː noʊ ˈɛniˌθɪŋ əˈbaʊt mæt ænd ˈnɪki/",
    "rêi djóch! dû iu nôu é-ni-θin a-báut mæt énd ní-qui",
    ["Hey,", " Josh!", " Do", " you", " know", " an", "y", "thing", " a", "bout", " Matt", " and", " Nik", "ki?"],
    "Hey, Josh! Do you know anything about Matt and Nikki?",
    "Oi, Josh! Você sabe alguma coisa sobre Matt e Nikki?"
  ],
  [
    "Hi, Mandy! Yes, he told me they are getting married.",
    "Oi, Mandy! Sim, ele me disse que eles vão se casar.",
    "/haɪ ˈmændi! jɛs, hiː toʊld miː ðeɪ ɑːr ˈɡɛtɪŋ ˈmærid/",
    "rái mǽn-di! iés, rî tôuld mî ðêi ár gué-tin mǽ-rid",
    ["Hi,", " Man", "dy!", " Yes,", " he", " told", " me", " they", " are", " get", "ting", " mar", "ried."],
    "Hi, Mandy! Yes, he told me they are getting married.",
    "Oi, Mandy! Sim, ele me disse que eles vão se casar."
  ],
  [
    "Really? I didn't know he was getting married. I talked to him and he didn't invite me to his wedding.",
    "Sério? Eu não sabia que ele ia se casar. Eu conversei com ele e ele não me convidou para o casamento dele.",
    "/ˈrɪəli? aɪ ˈdɪdnt noʊ hiː wɒz ˈɡɛtɪŋ ˈmærid. aɪ tɔːkt tuː hɪm ænd hiː ˈdɪdnt ɪnˈvaɪt miː tuː hɪz ˈwɛdɪŋ/",
    "rî-li? ai díd-nt nôu rî uóz gué-tin mǽ-rid. ai tólct tchu rím énd rî díd-nt in-váit mî tchu ríz uê-din",
    ["Real", "ly?", " I", " didn't", " know", " he", " was", " get", "ting", " mar", "ried.", " I", " talked", " to", " him", " and", " he", " didn't", " in", "vite", " me", " to", " his", " wed", "ding."],
    "Really? I didn't know he was getting married. I talked to him and he didn't invite me to his wedding.",
    "Sério? Eu não sabia que ele ia se casar. Eu conversei com ele e ele não me convidou para o casamento dele."
  ],
  [
    "Oh... I think it's a secret. Do you know his fiancée?",
    "Ah... Acho que é segredo. Você conhece a noiva dele?",
    "/oʊ... aɪ θɪŋk ɪts ə ˈsiːkrət. duː juː noʊ hɪz ˌfiːɑːnˈseɪ/",
    "ôu... ai θínc íts a sî-cret. dû iu nôu ríz fi-án-sêi",
    ["Oh...", " I", " think", " it's", " a", " se", "cret.", " Do", " you", " know", " his", " fi", "an", "cée?"],
    "Oh... I think it's a secret. Do you know his fiancée?",
    "Ah... Acho que é segredo. Você conhece a noiva dele?"
  ],
  [
    "Yes, she's an amazing person. Last time I talked to her she told me she got engaged, but it was last year.",
    "Sim, ela é uma pessoa incrível. Da última vez que conversei com ela, ela me disse que ficou noiva, mas isso foi no ano passado.",
    "/jɛs, ʃiːz ən əˈmeɪzɪŋ ˈpɜːrsən. læst taɪm aɪ tɔːkt tuː hɜːr ʃiː toʊld miː ʃiː ɡɒt ɛnˈɡeɪdʒd, bʌt ɪt wɒz læst jɪər/",
    "iés, chîz én a-mêi-zin pər-sôn. lést táim ai tólct tchu rêr chî tôuld mî chî gót en-guêidjd, bât ít uóz lést í-er",
    ["Yes,", " she's", " an", " a", "maz", "ing", " per", "son.", " Last", " time", " I", " talked", " to", " her", " she", " told", " me", " she", " got", " en", "gaged,", " but", " it", " was", " last", " year."],
    "Yes, she's an amazing person. Last time I talked to her she told me she got engaged, but it was last year.",
    "Sim, ela é uma pessoa incrível. Da última vez que conversei com ela, ela me disse que ficou noiva, mas isso foi no ano passado."
  ],
  [
    "I didn't know about that.",
    "Eu não sabia disso.",
    "/aɪ ˈdɪdnt noʊ əˈbaʊt ðæt/",
    "ai díd-nt nôu a-báut ðét",
    ["I", " didn't", " know", " a", "bout", " that."],
    "I didn't know about that.",
    "Eu não sabia disso."
  ],
  [
    "Did he invite you to be his groomsman?",
    "Ele convidou você para ser o padrinho dele?",
    "/dɪd hiː ɪnˈvaɪt juː tuː biː hɪz ˈɡruːmzmən/",
    "díd rî in-váit iu tchu bî ríz grûmz-mân",
    ["Did", " he", " in", "vite", " you", " to", " be", " his", " grooms", "man?"],
    "Did he invite you to be his groomsman?",
    "Ele convidou você para ser o padrinho dele?"
  ],
  [
    "No, I don't know who the groomsman and maid of honor are.",
    "Não, eu não sei quem são o padrinho e a madrinha de honra.",
    "/noʊ, aɪ doʊnt noʊ huː ðə ˈɡruːmzmən ænd meɪd ʌv ˈɒnər ɑːr/",
    "nôu, ai dôunt nôu rû ðâ grûmz-mân énd mêid âv ó-nor ár",
    ["No,", " I", " don't", " know", " who", " the", " grooms", "man", " and", " maid", " of", " hon", "or", " are."],
    "No, I don't know who the groomsman and maid of honor are.",
    "Não, eu não sei quem são o padrinho e a madrinha de honra."
  ],
  [
    "I understand... Did he tell you when the wedding is?",
    "Entendo... Ele disse quando será o casamento?",
    "/aɪ ˌʌndərˈstænd... dɪd hiː tɛl juː wɛn ðə ˈwɛdɪŋ ɪz/",
    "ai ân-der-sténd... díd rî tél iu uén ðâ uê-din íz",
    ["I", " un", "der", "stand...", " Did", " he", " tell", " you", " when", " the", " wed", "ding", " is?"],
    "I understand... Did he tell you when the wedding is?",
    "Entendo... Ele disse quando será o casamento?"
  ],
  [
    "Yes, he told me it is next month.",
    "Sim, ele me disse que será no próximo mês.",
    "/jɛs, hiː toʊld miː ɪt ɪz nɛkst mʌnθ/",
    "iés, rî tôuld mî ít íz nécst mânθ",
    ["Yes,", " he", " told", " me", " it", " is", " next", " month."],
    "Yes, he told me it is next month.",
    "Sim, ele me disse que será no próximo mês."
  ],
  [
    "What... Is it a secret? Next month?",
    "O quê...? É um segredo? No próximo mês?",
    "/wɒt... ɪz ɪt ə ˈsiːkrət? nɛkst mʌnθ/",
    "uót... íz ít a sî-cret? nécst mânθ",
    ["What...", " Is", " it", " a", " se", "cret?", " Next", " month?"],
    "What... Is it a secret? Next month?",
    "O quê...? É um segredo? No próximo mês?"
  ],
  [
    "Yes, right... Tell me about it!",
    "Isso mesmo... Nem me fale! / Conte-me sobre isso!",
    "/jɛs, raɪt... tɛl miː əˈbaʊt ɪt/",
    "iés, ráit... tél mî a-báut ít",
    ["Yes,", " right...", " Tell", " me", " a", "bout", " it!"],
    "Yes, right... Tell me about it!",
    "Isso mesmo... Nem me fale! / Conte-me sobre isso!"
  ],

  // Block 17: Ending Speech-Like Phrases
  [
    "I talked to Paul and he told me he was getting married.",
    "Eu conversei com Paul e ele me disse que estava se casando.",
    "/aɪ tɔːkt tuː pɔːl ænd hiː toʊld miː hiː wɒz ˈɡɛtɪŋ ˈmærid/",
    "ai tólct tchu pól énd rî tôuld mî rî uóz gué-tin mǽ-rid",
    ["I", " talked", " to", " Paul", " and", " he", " told", " me", " he", " was", " get", "ting", " mar", "ried."],
    "I talked to Paul and he told me he was getting married.",
    "Eu conversei com Paul e ele me disse que estava se casando."
  ],
  [
    "I talked to her sister-in-law this morning and she told me she was getting engaged.",
    "Conversei com a cunhada dela esta manhã e ela me disse que estava ficando noiva.",
    "/aɪ tɔːkt tuː hɜːr ˈsɪstər ɪn lɔː ðɪs ˈmɔːrnɪŋ ænd ʃiː toʊld miː ʃiː wɒz ˈɡɛtɪŋ ɛnˈɡeɪdʒd/",
    "ai tólct tchu rêr sís-ter in ló ðís mór-nin énd chî tôuld mî chî uóz gué-tin en-guêidjd",
    ["I", " talked", " to", " her", " sis", "ter", "-in", "-law", " this", " morn", "ing", " and", " she", " told", " me", " she", " was", " get", "ting", " en", "gaged."],
    "I talked to her sister-in-law this morning and she told me she was getting engaged.",
    "Conversei com a cunhada dela esta manhã e ela me disse que estava ficando noiva."
  ],
  [
    "I talked to my nephew at the party and he told me he was getting divorced.",
    "Conversei com meu sobrinho na festa e ele me disse que estava se divorciando.",
    "/aɪ tɔːkt tuː maɪ ˈnɛfjuː æt ðə ˈpɑːrti ænd hiː toʊld miː hiː wɒz ˈɡɛtɪŋ dɪˈvɔːrst/",
    "ai tólct tchu mái né-fiu ét ðâ pár-ti énd rî tôuld mî rî uóz gué-tin di-vórst",
    ["I", " talked", " to", " my", " ne", "phew", " at", " the", " par", "ty", " and", " he", " told", " me", " he", " was", " get", "ting", " di", "vorced."],
    "I talked to my nephew at the party and he told me he was getting divorced.",
    "Conversei com meu sobrinho na festa e ele me disse que estava se divorciando."
  ],
  [
    "I talked to my son and he told me he was looking for a partner.",
    "Conversei com meu filho e ele me disse que estava procurando uma parceira.",
    "/aɪ tɔːkt tuː maɪ sʌn ænd hiː toʊld miː hiː wɒz ˈlʊkɪŋ fɔr ə ˈpɑːrtnər/",
    "ai tólct tchu mái sân énd rî tôuld mî rî uóz lû-quin fór a párt-ner",
    ["I", " talked", " to", " my", " son", " and", " he", " told", " me", " he", " was", " look", "ing", " for", " a", " part", "ner."],
    "I talked to my son and he told me he was looking for a partner.",
    "Conversei com meu filho e ele me disse que estava procurando uma parceira."
  ],

  // Extra Grammatical / Tense Drill Block (from very end of user request)
  [
    "I worked. / I didn't work.",
    "Eu trabalhei. / Eu não trabalhei.",
    "/aɪ wɜːrkt / aɪ ˈdɪdnt wɜːrk/",
    "ai uêrct / ai díd-nt uêrc",
    ["I", " worked.", " /", " I", " didn't", " work."],
    "I worked yesterday, but they didn't work.",
    "Eu trabalhei ontem, mas eles não trabalharam."
  ],
  [
    "They lived there. / They didn't live there.",
    "Eles moraram lá. / Eles não moraram lá.",
    "/ðeɪ lɪvd ðɛər / ðeɪ ˈdɪdnt lɪv ðɛər/",
    "ðêi lívd ðêr / ðêi díd-nt lív ðêr",
    ["They", " lived", " there.", " /", " They", " didn't", " live", " there."],
    "They lived there, but we didn't live there.",
    "Eles moraram lá, mas nós não moramos lá."
  ],
  [
    "He knew the answer. / He didn't know the answer.",
    "Ele sabia a resposta. / Ele não sabia a resposta.",
    "/hiː nuː ðə ˈænsər / hiː ˈdɪdnt noʊ ðə ˈænsər/",
    "rî niû ðâ án-ser / rî díd-nt nôu ðâ án-ser",
    ["He", " knew", " the", " an", "swer.", " /", " He", " didn't", " know", " the", " an", "swer."],
    "He knew the answer, but they didn't know the answer.",
    "Ele sabia a resposta, mas eles não sabiam a resposta."
  ],
  [
    "We had a chance. / We didn't have a chance.",
    "Nós tivemos uma chance. / Nós não tivemos uma chance.",
    "/wiː hæd ə tʃæns / wiː ˈdɪdnt hæv ə tʃæns/",
    "uí réd a tchéns / uí díd-nt rév a tchéns",
    ["We", " had", " a", " chance.", " /", " We", " didn't", " have", " a", " chance."],
    "We had a chance, but we didn't have a chance to show it.",
    "Nós tivemos uma chance, mas não tivemos a chance de mostrar isso."
  ],
  [
    "I worked for IBM. / I didn't work for IBM.",
    "Eu trabalhei para a IBM. / Eu não trabalhei para a IBM.",
    "/aɪ wɜːrkt fɔːr aɪ-biː-ɛm / aɪ ˈdɪdnt wɜːrk fɔːr aɪ-biː-ɛm/",
    "ai uêrct fór ai-bî-ém / ai díd-nt uêrc fór ai-bî-ém",
    ["I", " worked", " for", " I", "B", "M.", " /", " I", " didn't", " work", " for", " I", "B", "M."],
    "I worked for IBM some years ago.",
    "Eu trabalhei para a IBM alguns anos atrás."
  ],
  [
    "She lived in Canada. / She didn't live in Canada.",
    "Ela morou no Canadá. / Ela não morou no Canadá.",
    "/ʃiː lɪvd ɪn ˈkænədə / ʃiː ˈdɪdnt lɪv ɪn ˈkænədə/",
    "chî lívd ín cǽ-na-da / chî díd-nt lív ín cǽ-na-da",
    ["She", " lived", " in", " Can", "a", "da.", " /", " She", " didn't", " live", " in", " Can", "a", "da."],
    "She lived in Canada, but she didn't live in Canada for long.",
    "Ela morou no Canadá, mas não morou no Canadá por muito tempo."
  ],
  [
    "They knew the manager. / They didn't know the manager.",
    "Eles conheciam o gerente. / Eles não conheciam o gerente.",
    "/ðeɪ nuː ðə ˈmænədʒər / ðeɪ ˈdɪdnt noʊ ðə ˈmænədʒər/",
    "ðêi niû ðâ mǽ-na-djer / ðêi díd-nt nôu ðâ mǽ-na-djer",
    ["They", " knew", " the", " man", "a", "ger.", " /", " They", " didn't", " know", " the", " man", "a", "ger."],
    "They knew the manager, but I didn't know him.",
    "Eles conheciam o gerente, mas eu não o conhecia."
  ],
  [
    "He was happy. / He wasn't happy.",
    "Ele estava feliz. / Ele não estava feliz.",
    "/hiː wɒz ˈhæpi / hiː ˈwɒznt ˈhæpi/",
    "rî uâz rǽ-pi / rî uóz-nt rǽ-pi",
    ["He", " was", " hap", "py.", " /", " He", " wasn't", " hap", "py."],
    "He was happy, but she wasn't happy.",
    "Ele estava feliz, mas ela não estava feliz."
  ],
  [
    "They were friends. / They weren't friends.",
    "Eles eram amigos. / Eles não eram amigos.",
    "/ðeɪ wɜːr frɛndz / ðeɪ wɜːrnt frɛndz/",
    "ðêi uêr fréndz / ðêi uêrn-t fréndz",
    ["They", " were", " friends.", " /", " They", " weren't", " friends."],
    "They were friends, but they weren't friends after the fight.",
    "Eles eram amigos, mas não eram amigos depois da briga."
  ],
  [
    "They were best friends.",
    "Eles eram melhores amigos.",
    "/ðeɪ wɜːr bɛst frɛndz/",
    "ðêi uêr bést fréndz",
    ["They", " were", " best", " friends."],
    "They were best friends before the accident.",
    "Eles eram melhores amigos antes do acidente."
  ],
  [
    "They weren't best friends.",
    "Eles não eram melhores amigos.",
    "/ðeɪ wɜːrnt bɛst frɛndz/",
    "ðêi uêrn-t bést fréndz",
    ["They", " weren't", " best", " friends."],
    "They weren't best friends.",
    "Eles não eram melhores amigos."
  ]
];

export const LESSON_89_DECK: FlashcardData[] = RAW_CARDS.map((item, idx) => ({
  id: 'lesson_89_' + (idx + 1),
  word: item[0],
  translation: item[1],
  pronunciation: item[2],
  portuguesePhonetic: item[3],
  syllables: item[4],
  exampleSentence: item[5],
  exampleTranslation: item[6],
}));
