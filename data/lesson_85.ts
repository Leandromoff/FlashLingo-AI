import { FlashcardData } from '../types';

const RAW_CARDS: Array<[string, string, string, string, string[], string, string]> = [
  [
    "to know - knew",
    "conhecer / saber - conheceu / soube",
    "/tu noʊ / nu/",
    "tchu nôu / niû",
    ["to", " know", " knew"],
    "I knew him years ago.",
    "Eu o conhecia anos atrás."
  ],
  [
    "to work - worked",
    "trabalhar - trabalhou",
    "/tu wɜrk / wɜrkt/",
    "tchu uêrc / uêrct",
    ["to", " work", " worked"],
    "I worked for IBM some years ago.",
    "Eu trabalhei para a IBM alguns anos atrás."
  ],
  [
    "to live - lived",
    "morar / viver - morou / viveu",
    "/tu lɪv / lɪvd/",
    "tchu lív / lívd",
    ["to", " live", " lived"],
    "Louise didn't live close to her work.",
    "Louise não morava perto do trabalho."
  ],
  [
    "profession",
    "profissão",
    "/prəˈfɛʃən/",
    "pro-fé-shôn",
    ["pro", "fes", "sion"],
    "What do you do for a living?",
    "O que você faz da vida? / Qual é a sua profissão?"
  ],
  [
    "career",
    "carreira",
    "/kəˈrɪər/",
    "ca-rîer",
    ["ca", "reer"],
    "That career opportunity was a very good choice.",
    "Aquela oportunidade de carreira foi uma ótima escolha."
  ],
  [
    "résumé",
    "currículo",
    "/ˈrɛzʊˌmeɪ/",
    "ré-zu-mêi",
    ["ré", "su", "mé"],
    "His résumé wasn't so good, but he got the job.",
    "O currículo dele não era tão bom, mas ele conseguiu o emprego."
  ],
  [
    "chance",
    "chance / oportunidade",
    "/tʃæns/",
    "tchéns",
    ["chance"],
    "Sam didn't have a chance to get a promotion this year.",
    "Sam não teve uma chance de conseguir uma promoção este ano."
  ],
  [
    "choice",
    "escolha",
    "/tʃɔɪs/",
    "tchóis",
    ["choice"],
    "That career opportunity was a very good choice.",
    "Aquela oportunidade de carreira foi uma ótima escolha."
  ],
  [
    "opportunity",
    "oportunidade",
    "/ˌɑpərˈtunəti/",
    "ó-por-tû-ni-di",
    ["op", "por", "tu", "ni", "ty"],
    "I didn't know it was a great opportunity.",
    "Eu não sabia que era uma grande oportunidade."
  ],
  [
    "employee",
    "funcionário",
    "/ɛmˈplɔɪ-i/",
    "em-plói-î",
    ["em", "ploy", "ee"],
    "He didn't know his employees very well.",
    "Ele não conhecia muito bem seus funcionários."
  ],
  [
    "employer",
    "empregador",
    "/ɛmˈplɔɪər/",
    "em-plói-er",
    ["em", "ploy", "er"],
    "My employer offered great benefits.",
    "Meu empregador oferecia ótimos benefícios."
  ],
  [
    "salary",
    "salário",
    "/ˈsæləri/",
    "sǽ-lâ-ri",
    ["sal", "a", "ry"],
    "The opportunity wasn't so good, but the salary was high.",
    "A oportunidade não era tão boa, mas o salário era alto."
  ],
  [
    "benefit",
    "benefício",
    "/ˈbɛnəfɪt/",
    "bé-ne-fit",
    ["ben", "e", "fit"],
    "You didn't work only for salary or benefits.",
    "Você não trabalhava apenas por salário ou benefícios."
  ],
  [
    "raise",
    "aumento salarial",
    "/reɪz/",
    "rêiz",
    ["raise"],
    "I got a promotion and a raise.",
    "Eu consegui uma promoção e um aumento salarial."
  ],
  [
    "spreadsheet",
    "planilha",
    "/ˈsprɛdˌʃit/",
    "es-préd-chît",
    ["spread", "sheet"],
    "He didn't send me the spreadsheets on time.",
    "Ele não me enviou as planilhas a tempo."
  ],
  [
    "minimum wage",
    "salário mínimo",
    "/ˈmɪnəməm weɪdʒ/",
    "mí-ni-mâm uêidj",
    ["min", "i", "mum", " wage"],
    "She didn't know she was working for minimum wage.",
    "Ela não sabia que estava trabalhando por salário mínimo."
  ],
  [
    "What do you do for a living?",
    "O que você faz da vida? / Qual é a sua profissão?",
    "/wʌt du ju du fɔr ə ˈlɪvɪŋ/",
    "uót du iu du fór a lí-vin",
    ["What", " do", " you", " do", " for", " a", " liv", "ing?"],
    "What do you do for a living?",
    "O que você faz da vida? / Qual é a sua profissão?"
  ],
  [
    "I worked for IBM some years ago.",
    "Eu trabalhei para a IBM alguns anos atrás.",
    "/aɪ wɜrkt fɔr aɪ-bi-ɛm sʌm jɪərz əˈɡoʊ/",
    "ai uêrct fór ai-bî-ém sâm í-erz a-gôu",
    ["I", " worked", " for", " I", "B", "M", " some", " years", " a", "go."],
    "I worked for IBM some years ago.",
    "Eu trabalhei para a IBM alguns anos atrás."
  ],
  [
    "I want to get that promotion.",
    "Eu quero conseguir aquela promoção.",
    "/aɪ wɑnt tu ɡɛt ðæt prəˈmoʊʃən/",
    "ai uónt tchu gét ðét pro-môu-chôn",
    ["I", " want", " to", " get", " that", " pro", "mo", "tion."],
    "I want to get that promotion.",
    "Eu quero conseguir aquela promoção."
  ],
  [
    "I'm looking for a job in the music business.",
    "Estou procurando um emprego na indústria da música.",
    "/aɪm ˈlʊkɪŋ fɔr ə dʒɑb ɪn ðə ˈmjuzɪk ˈbɪznəs/",
    "aim lû-quin fór a djób ín ðâ miû-zic bíz-nes",
    ["I'm", " look", "ing", " for", " a", " job", " in", " the", " mu", "sic", " busi", "ness."],
    "I'm looking for a job in the music business.",
    "Estou procurando um emprego na indústria da música."
  ],
  [
    "I didn't have a career at that time.",
    "Eu não tinha uma carreira naquela época.",
    "/aɪ ˈdɪdənt hæv ə kəˈrɪər æt ðæt taɪm/",
    "ai díd-nt rév a ca-rîer ét ðét táim",
    ["I", " didn't", " have", " a", " ca", "reer", " at", " that", " time."],
    "I didn't have a career at that time.",
    "Eu não tinha uma carreira naquela época."
  ],
  [
    "He didn't know his employees very well.",
    "Ele não conhecia muito bem seus funcionários.",
    "/hi ˈdɪdənt noʊ hɪz ɛmˈplɔɪ-iz ˈvɛri wɛl/",
    "ri díd-nt nôu ríz em-plói-îz vé-ri uél",
    ["He", " didn't", " know", " his", " em", "ploy", "ees", " ve", "ry", " well."],
    "He didn't know his employees very well.",
    "Ele não conhecia muito bem seus funcionários."
  ],
  [
    "We didn't live near our workplace.",
    "Nós não morávamos perto do nosso local de trabalho.",
    "/wi ˈdɪdənt lɪv nɪər ˈaʊər ˈwɜrkˌpleɪs/",
    "uí díd-nt lív nîer áu-er uêrc-plêis",
    ["We", " didn't", " live", " near", " our", " work", "place."],
    "We didn't live near our workplace.",
    "Nós não morávamos perto do nosso local de trabalho."
  ],
  [
    "I didn't know it was a great opportunity.",
    "Eu não sabia que era uma grande oportunidade.",
    "/aɪ ˈdɪdənt noʊ ɪt wʌz ə ɡreɪt ˌɑpərˈtunəti/",
    "ai díd-nt nôu ít uâz a grêit ó-por-tû-ni-di",
    ["I", " didn't", " know", " it", " was", " a", " great", " op", "por", "tu", "ni", "ty."],
    "I didn't know it was a great opportunity.",
    "Eu não sabia que era uma grande oportunidade."
  ],
  [
    "They didn't work together. They had the same employer.",
    "Eles não trabalhavam juntos. Eles tinham o mesmo empregador.",
    "/ðeɪ ˈdɪdənt wɜrk təˈɡɛðər. ðeɪ hæd ðə seɪm ɛmˈplɔɪər/",
    "ðêi díd-nt uêrc tû-gué-ðer. ðêi réd ðâ sêim em-plói-er",
    ["They", " didn't", " work", " to", "geth", "er.", " They", " had", " the", " same", " em", "ploy", "er."],
    "They didn't work together. They had the same employer.",
    "Eles não trabalhavam juntos. Eles tinham o mesmo empregador."
  ],
  [
    "I didn't know you were looking for a job.",
    "Eu não sabia que você estava procurando emprego.",
    "/aɪ ˈdɪdənt noʊ ju wɜr ˈlʊkɪŋ fɔr ə dʒɑb/",
    "ai díd-nt nôu iu uêr lû-quin fór a djób",
    ["I", " didn't", " know", " you", " were", " look", "ing", " for", " a", " job."],
    "I didn't know you were looking for a job.",
    "Eu não sabia que você estava procurando emprego."
  ],
  [
    "I didn't know you worked here.",
    "Eu não sabia que você trabalhava aqui.",
    "/aɪ ˈdɪdənt noʊ ju wɜrkt hɪər/",
    "ai díd-nt nôu iu uêrct rîer",
    ["I", " didn't", " know", " you", " worked", " here."],
    "I didn't know you worked here.",
    "Eu não sabia que você trabalhava aqui."
  ],
  [
    "You didn't work only for salary or benefits.",
    "Você não trabalhava apenas por salário ou benefícios.",
    "/ju ˈdɪdənt wɜrk ˈoʊnli fɔr ˈsæləri ɔr ˈbɛnəfɪts/",
    "iu díd-nt uêrc ôun-li fór sǽ-lâ-ri ór bé-ne-fits",
    ["You", " didn't", " work", " on", "ly", " for", " sal", "a", "ry", " or", " ben", "e", "fits."],
    "You didn't work only for salary or benefits.",
    "Você não trabalhava apenas por salário ou benefícios."
  ],
  [
    "I didn't know there was a chance of a salary raise.",
    "Eu não sabia que havia uma chance de aumento salarial.",
    "/aɪ ˈdɪdənt noʊ ðɛr wʌz ə tʃæns ʌv ə ˈsæləri reɪz/",
    "ai díd-nt nôu ðêr uâz a tchéns âv a sǽ-lâ-ri rêiz",
    ["I", " didn't", " know", " there", " was", " a", " chance", " of", " a", " sal", "a", "ry", " raise."],
    "I didn't know there was a chance of a salary raise.",
    "Eu não sabia que havia uma chance de aumento salarial."
  ],
  [
    "I'm so happy. I got the promotion and a raise.",
    "Estou tão feliz. Eu consegui a promoção e um aumento salarial.",
    "/aɪm soʊ ˈhæpi. aɪ ɡɑt ðə prəˈmoʊʃən ænd ə reɪz/",
    "aim sôu rǽ-pi. ai gót ðâ pro-môu-chôn énd a rêiz",
    ["I'm", " so", " hap", "py.", " I", " got", " the", " pro", "mo", "tion", " and", " a", " raise."],
    "I'm so happy. I got the promotion and a raise.",
    "Estou tão feliz. Eu consegui a promoção e um aumento salarial."
  ],
  [
    "Louis needed a new job. He didn't want to work for her.",
    "Louis precisava de um novo emprego. Ele não queria trabalhar para ela.",
    "/ˈluɪs ˈnidɪd ə nu dʒɑb. hi ˈdɪdənt wɑnt tu wɜrk fɔr hɜr/",
    "lû-is nî-did a niû djób. ri díd-nt uónt tchu uêrc fór rêr",
    ["Lou", "is", " need", "ed", " a", " new", " job.", " He", " didn't", " want", " to", " work", " for", " her."],
    "Louis needed a new job. He didn't want to work for her.",
    "Louis precisava de um novo emprego. Ele não queria trabalhar para ela."
  ],
  [
    "He didn't send me the spreadsheets on time.",
    "Ele não me enviou as planilhas a tempo.",
    "/hi ˈdɪdənt sɛnd mi ðə ˈsprɛdˌʃits ɑn taɪm/",
    "ri díd-nt sénd mî ðâ es-préd-chîts ón táim",
    ["He", " didn't", " send", " me", " the", " spread", "sheets", " on", " time."],
    "He didn't send me the spreadsheets on time.",
    "Ele não me enviou as planilhas a tempo."
  ],
  [
    "She didn't know she was working for minimum wage.",
    "Ela não sabia que estava trabalhando por salário mínimo.",
    "/ʃi ˈdɪdənt noʊ ʃi wʌz ˈwɜrkɪŋ fɔr ˈmɪnəməm weɪdʒ/",
    "chî díd-nt nôu chî uâz uêr-quin fór mí-ni-mâm uêidj",
    ["She", " didn't", " know", " she", " was", " work", "ing", " for", " min", "i", "mum", " wage."],
    "She didn't know she was working for minimum wage.",
    "Ela não sabia que estava trabalhando por salário mínimo."
  ],
  [
    "The opportunity wasn't so good, but the salary was high.",
    "A oportunidade não era tão boa, mas o salário era alto.",
    "/ði ˌɑpərˈtunəti ˈwʌzənt soʊ ɡʊd, bʌt ðə ˈsæləri wʌz haɪ/",
    "ðî ó-por-tû-ni-di uóz-nt sôu gûd, bât ðâ sǽ-lâ-ri uâz rái",
    ["The", " op", "por", "tu", "ni", "ty", " wasn't", " so", " good,", " but", " the", " sal", "a", "ry", " was", " high."],
    "The opportunity wasn't so good, but the salary was high.",
    "A oportunidade não era tão boa, mas o salário era alto."
  ],
  [
    "That career opportunity was a very good choice.",
    "Aquela oportunidade de carreira foi uma ótima escolha.",
    "/ðæt kəˈrɪər ˌɑpərˈtunəti wʌz ə ˈvɛri ɡʊd tʃɔɪs/",
    "ðét ca-rîer ó-por-tû-ni-di uâz a vé-ri gûd tchóis",
    ["That", " ca", "reer", " op", "por", "tu", "ni", "ty", " was", " a", " ve", "ry", " good", " choice."],
    "That career opportunity was a very good choice.",
    "Aquela oportunidade de carreira foi uma ótima escolha."
  ],
  [
    "Louise didn't live close to her work.",
    "Louise não morava perto do trabalho.",
    "/luˈiz ˈdɪdənt lɪv kloʊs tu hɜr wɜrk/",
    "lu-îz díd-nt lív clôus tchu rêr uêrc",
    ["Lou", "ise", " didn't", " live", " close", " to", " her", " work."],
    "Louise didn't live close to her work.",
    "Louise não morava perto do trabalho."
  ],
  [
    "She really wanted that job, but didn't send her résumé on time.",
    "Ela realmente queria aquele emprego, mas não enviou seu currículo a tempo.",
    "/ʃi ˈrɪli ˈwɑntɪd ðæt dʒɑb, bʌt ˈdɪdənt sɛnd hɜr ˈrɛzʊˌmeɪ ɑn taɪm/",
    "chî rî-li uón-tid ðét djób, bât díd-nt sénd rêr ré-zu-mêi ón táim",
    ["She", " real", "ly", " want", "ed", " that", " job,", " but", " didn't", " send", " her", " ré", "su", "mé", " on", " time."],
    "She really wanted that job, but didn't send her résumé on time.",
    "Ela realmente queria aquele emprego, mas não enviou seu currículo a tempo."
  ],
  [
    "When we knew who our new boss was, we all wanted to change jobs.",
    "Quando soubemos quem era nosso novo chefe, todos nós quisemos trocar de emprego.",
    "/wɛn wi nu hu ˈaʊər nu bɔs wʌz, wi ɔl ˈwɑntɪd tu tʃeɪndʒ dʒɑbz/",
    "uén uí niû rû áu-er niû bós uâz, uí ól uón-tid tchu tchêindj djóbs",
    ["When", " we", " knew", " who", " our", " new", " boss", " was,", " we", " all", " want", "ed", " to", " change", " jobs."],
    "When we knew who our new boss was, we all wanted to change jobs.",
    "Quando soubemos quem era nosso novo chefe, todos nós quisemos trocar de emprego."
  ],
  [
    "You didn't miss that promotion opportunity because your career is international.",
    "Você não perdeu aquela oportunidade de promoção porque sua carreira é internacional.",
    "/ju ˈdɪdənt mɪs ðæt prəˈmoʊʃən ˌɑpərˈtunəti bɪˈkɔz jɔər kəˈrɪər ɪz ˌɪntərˈnæʃənəl/",
    "iu díd-nt mís ðét pro-môu-chôn ó-por-tû-ni-di bi-cóz iór ca-rîer íz in-ter-né-cho-nôl",
    ["You", " didn't", " miss", " that", " pro", "mo", "tion", " op", "por", "tu", "ni", "ty", " be", "cause", " your", " ca", "reer", " is", " in", "ter", "na", "tion", "al."],
    "You didn't miss that promotion opportunity because your career is international.",
    "Você não perdeu aquela oportunidade de promoção porque sua carreira é internacional."
  ],
  [
    "His résumé wasn't so good, but he got the job.",
    "O currículo dele não era tão bom, mas ele conseguiu o emprego.",
    "/hɪz ˈrɛzʊˌmeɪ ˈwʌzənt soʊ ɡʊd, bʌt hi ɡɑt ðə dʒɑb/",
    "ríz ré-zu-mêi uóz-nt sôu gûd, bât ri gót ðâ djób",
    ["His", " ré", "su", "mé", " wasn't", " so", " good,", " but", " he", " got", " the", " job."],
    "His résumé wasn't so good, but he got the job.",
    "O currículo dele não era tão bom, mas ele conseguiu o emprego."
  ],
  [
    "The job was near the place I lived, but they didn't pay well.",
    "O emprego era perto do lugar onde eu morava, mas eles não pagavam bem.",
    "/ðə dʒɑb wʌz nɪər ðə pleɪs aɪ lɪvd, bʌt ðeɪ ˈdɪdənt peɪ wɛl/",
    "ðâ djób uâz nîer ðâ plêis ai lívd, bât ðêi díd-nt pêi uél",
    ["The", " job", " was", " near", " the", " place", " I", " lived,", " but", " they", " didn't", " pay", " well."],
    "The job was near the place I lived, but they didn't pay well.",
    "O emprego era perto do lugar onde eu morava, mas eles não pagavam bem."
  ],
  [
    "I got a promotion.",
    "Eu consegui uma promoção.",
    "/aɪ ɡɑt ə prəˈmoʊʃən/",
    "ai gót a pro-môu-chôn",
    ["I", " got", " a", " pro", "mo", "tion."],
    "I got a promotion.",
    "Eu consegui uma promoção."
  ],
  [
    "They had a career in common.",
    "Eles tinham uma carreira em comum.",
    "/ðeɪ hæd ə kəˈrɪər ɪn ˈkɑmən/",
    "ðêi réd a ca-rîer ín có-môn",
    ["They", " had", " a", " ca", "reer", " in", " com", "mon."],
    "They had a career in common.",
    "Eles tinham uma carreira em comum."
  ],
  [
    "What position are you looking for?",
    "Que cargo você está procurando?",
    "/wʌt pəˈzɪʃən ɑr ju ˈlʊkɪŋ fɔr/",
    "uót po-zí-chôn ár iu lû-quin fór",
    ["What", " po", "si", "tion", " are", " you", " look", "ing", " for?"],
    "What position are you looking for?",
    "Que cargo você está procurando?"
  ],
  [
    "He worked as a sales manager.",
    "Ele trabalhou como gerente de vendas.",
    "/hi wɜrkt æz ə seɪlz ˈmænədʒər/",
    "ri uêrct éz a sêilz mǽ-na-djer",
    ["He", " worked", " as", " a", " sales", " man", "a", "ger."],
    "He worked as a sales manager.",
    "Ele trabalhou como gerente de vendas."
  ],
  [
    "I know him.",
    "Eu o conheço.",
    "/aɪ noʊ hɪm/",
    "ai nôu rím",
    ["I", " know", " him."],
    "I know him.",
    "Eu o conheço."
  ],
  [
    "I knew him years ago.",
    "Eu o conhecia anos atrás.",
    "/aɪ nu hɪm jɪərz əˈɡoʊ/",
    "ai niû rím í-erz a-gôu",
    ["I", " knew", " him", " years", " a", "go."],
    "I knew him years ago.",
    "Eu o conhecia anos atrás."
  ],
  [
    "I didn't know him.",
    "Eu não o conhecia.",
    "/aɪ ˈdɪdənt noʊ hɪm/",
    "ai díd-nt nôu rím",
    ["I", " didn't", " know", " him."],
    "I didn't know him.",
    "Eu não o conhecia."
  ],
  [
    "I work in a hospital.",
    "Eu trabalho em um hospital.",
    "/aɪ wɜrk ɪn ə ˈhɑspɪtəl/",
    "ai uêrc ín a rós-pi-tôl",
    ["I", " work", " in", " a", " hos", "pi", "tal."],
    "I work in a hospital.",
    "Eu trabalho em um hospital."
  ],
  [
    "I worked in a hospital.",
    "Eu trabalhei em um hospital.",
    "/aɪ wɜrkt ɪn ə ˈhɑspɪtəl/",
    "ai uêrct ín a rós-pi-tôl",
    ["I", " worked", " in", " a", " hos", "pi", "tal."],
    "I worked in a hospital.",
    "Eu trabalhei em um hospital."
  ],
  [
    "I didn't work there.",
    "Eu não trabalhei lá.",
    "/aɪ ˈdɪdənt wɜrk ðɛr/",
    "ai díd-nt uêrc ðêr",
    ["I", " didn't", " work", " there."],
    "I didn't work there.",
    "Eu não trabalhei lá."
  ],
  [
    "I live in São Paulo.",
    "Eu moro em São Paulo.",
    "/aɪ lɪv ɪn saʊ ˈpaʊloʊ/",
    "ai lív ín sãu páu-lou",
    ["I", " live", " in", " São", " Pau", "lo."],
    "I live in São Paulo.",
    "Eu moro em São Paulo."
  ],
  [
    "I lived in Rio de Janeiro.",
    "Eu morei no Rio de Janeiro.",
    "/aɪ lɪvd ɪn ˈriːoʊ deɪ dʒəˈnɛəroʊ/",
    "ai lívd ín rî-ou dê dja-nêi-rou",
    ["I", " lived", " in", " Ri", "o", " de", " Ja", "nei", "ro."],
    "I lived in Rio de Janeiro.",
    "Eu morei no Rio de Janeiro."
  ],
  [
    "I didn't live there.",
    "Eu não morei lá.",
    "/aɪ ˈdɪdənt lɪv ðɛr/",
    "ai díd-nt lív ðêr",
    ["I", " didn't", " live", " there."],
    "I didn't live there.",
    "Eu não morei lá."
  ],
  [
    "profession",
    "profissão",
    "/prəˈfɛʃən/",
    "pro-fé-shôn",
    ["pro", "fes", "sion"],
    "I work in other professions now.",
    "Eu trabalho em outras profissões agora."
  ],
  [
    "career",
    "carreira",
    "/kəˈrɪər/",
    "ca-rîer",
    ["ca", "reer"],
    "You have a great career path.",
    "Você tem uma ótima trajetória de carreira."
  ],
  [
    "résumé",
    "currículo",
    "/ˈrɛzʊˌmeɪ/",
    "ré-zu-mêi",
    ["ré", "su", "mé"],
    "Send us your résumé.",
    "Envie-nos seu currículo."
  ],
  [
    "employee",
    "funcionário",
    "/ɛmˈplɔɪ-i/",
    "em-plói-î",
    ["em", "ploy", "ee"],
    "They hired a new employee.",
    "Eles contrataram um novo funcionário."
  ],
  [
    "employer",
    "empregador",
    "/ɛmˈplɔɪər/",
    "em-plói-er",
    ["em", "ploy", "er"],
    "The employer was very kind.",
    "O empregador era muito gentil."
  ],
  [
    "salary",
    "salário",
    "/ˈsæləri/",
    "sǽ-lâ-ri",
    ["sal", "a", "ry"],
    "My salary is deposited on Friday.",
    "Meu salário é depositado na sexta-feira."
  ],
  [
    "benefit",
    "benefício",
    "/ˈbɛnəfɪt/",
    "bé-ne-fit",
    ["ben", "e", "fit"],
    "That company offers health benefits.",
    "Aquela empresa oferece benefícios de saúde."
  ],
  [
    "raise",
    "aumento salarial",
    "/reɪz/",
    "rêiz",
    ["raise"],
    "He asked for a raise last week.",
    "Ele pediu um aumento na semana passada."
  ],
  [
    "promotion",
    "promoção",
    "/prəˈmoʊʃən/",
    "pro-môu-chôn",
    ["pro", "mo", "tion"],
    "I want to get that promotion.",
    "Eu quero conseguir aquela promoção."
  ],
  [
    "opportunity",
    "oportunidade",
    "/ˌɑpərˈtunəti/",
    "ó-por-tû-ni-di",
    ["op", "por", "tu", "ni", "ty"],
    "It's a huge opportunity for our sector.",
    "É uma oportunidade gigante para o nosso setor."
  ],
  [
    "minimum wage",
    "salário mínimo",
    "/ˈmɪnəməm weɪdʒ/",
    "mí-ni-mâm uêidj",
    ["min", "i", "mum", " wage"],
    "Their minimum wage is higher than ours.",
    "O salário mínimo deles é mais alto que o nosso."
  ],
  [
    "spreadsheet",
    "planilha",
    "/ˈsprɛdˌʃit/",
    "es-préd-chît",
    ["spread", "sheet"],
    "Please fill in this spreadsheet.",
    "Por favor, preencha esta planilha."
  ],
  [
    "What do you do for a living?",
    "Qual é a sua profissão?",
    "/wʌt du ju du fɔr ə ˈlɪvɪŋ/",
    "uót du iu du fór a lí-vin",
    ["What", " do", " you", " do", " for", " a", " liv", "ing?"],
    "What do you do for a living?",
    "Qual é a sua profissão?"
  ],
  [
    "I work as an IT Specialist.",
    "Eu trabalho como Especialista de TI.",
    "/aɪ wɜrk æz ən aɪ-ti ˈspɛʃəlɪst/",
    "ai uêrc éz én ai-tî espé-cha-list",
    ["I", " work", " as", " an", " I", "T", " Spe", "cial", "ist."],
    "I work as an IT Specialist.",
    "Eu trabalho como Especialista de TI."
  ],
  [
    "I worked for a hospital network.",
    "Eu trabalhei para uma rede hospitalar.",
    "/aɪ wɜrkt fɔr ə ˈhɑspɪtəl ˈnɛtˌwɜrk/",
    "ai uêrct fór a rós-pi-tôl nét-uêrc",
    ["I", " worked", " for", " a", " hos", "pi", "tal", " net", "work."],
    "I worked for a hospital network.",
    "Eu trabalhei para uma rede hospitalar."
  ],
  [
    "I got a salary raise last year.",
    "Eu recebi um aumento salarial no ano passado.",
    "/aɪ ɡɑt ə ˈsæləri reɪz læst jɪər/",
    "ai gót a sǽ-lâ-ri rêiz lést í-er",
    ["I", " got", " a", " sal", "a", "ry", " raise", " last", " year."],
    "I got a salary raise last year.",
    "Eu recebi um aumento salarial no ano passado."
  ],
  [
    "I didn't know about that opportunity.",
    "Eu não sabia daquela oportunidade.",
    "/aɪ ˈdɪdənt noʊ əˈbaʊt ðæt ˌɑpərˈtunəti/",
    "ai díd-nt nôu a-báut ðét ó-por-tû-ni-di",
    ["I", " didn't", " know", " a", "bout", " that", " op", "por", "tu", "ni", "ty."],
    "I didn't know about that opportunity.",
    "Eu não sabia daquela oportunidade."
  ],
  [
    "My employer offered great benefits.",
    "Meu empregador oferecia ótimos benefícios.",
    "/maɪ ɛmˈplɔɪər ˈɔfərd ɡreɪt ˈbɛnəfɪts/",
    "mái em-plói-er ó-ferd grêit bé-ne-fits",
    ["My", " em", "ploy", "er", " of", "fered", " great", " ben", "e", "fits."],
    "My employer offered great benefits.",
    "Meu empregador oferecia ótimos benefícios."
  ],
  [
    "I lived near my workplace.",
    "Eu morava perto do meu local de trabalho.",
    "/aɪ lɪvd nɪər maɪ ˈwɜrkˌpleɪs/",
    "ai lívd nîer mái uêrc-plêis",
    ["I", " lived", " near", " my", " work", "place."],
    "I lived near my workplace.",
    "Eu morava perto do meu local de trabalho."
  ],
  [
    "You didn't work for my company for ten years.",
    "Você não trabalhou para minha empresa por dez anos.",
    "/ju ˈdɪdənt wɜrk fɔr maɪ ˈkʌmpəni fɔr tɛn jɪərz/",
    "iu díd-nt uêrc fór mái cảm-pa-ni fór tén í-erz",
    ["You", " didn't", " work", " for", " my", " com", "pa", "ny", " for", " ten", " years."],
    "You didn't work for my company for ten years.",
    "Você não trabalhou para minha empresa por dez anos."
  ],
  [
    "John and Sam didn't live in Brazil because of their profession.",
    "John e Sam não moraram no Brasil por causa da profissão deles.",
    "/dʒɑn ænd sæm ˈdɪdənt lɪv ɪn brəˈzɪl bɪˈkɔz ʌv ðɛr prəˈfɛʃən/",
    "djón énd sém díd-nt lív ín bra-zíl bi-cóz âv ðêr pro-fé-shôn",
    ["John", " and", " Sam", " didn't", " live", " in", " Bra", "zil", " be", "cause", " of", " their", " pro", "fes", "sion."],
    "John and Sam didn't live in Brazil because of their profession.",
    "John e Sam não moraram no Brasil por causa da profissão deles."
  ],
  [
    "Raphael didn't know anything about the raise.",
    "Raphael não sabia nada sobre o aumento salarial.",
    "/ˈræfeɪəl ˈdɪdənt noʊ ˈɛniˌθɪŋ əˈbaʊt ðə reɪz/",
    "rá-fei-ôl díd-nt nôu é-ni-θin a-báut ðâ rêiz",
    ["Raph", "a", "el", " didn't", " know", " an", "y", "thing", " a", "bout", " the", " raise."],
    "Raphael didn't know anything about the raise.",
    "Raphael não sabia nada sobre o aumento salarial."
  ],
  [
    "We didn't have an opportunity to work for an international company.",
    "Nós não tivemos a oportunidade de trabalhar para uma empresa internacional.",
    "/wi ˈdɪdənt hæv ən ˌɑpərˈtunəti tu wɜrk fɔr ən ˌɪntərˈnæʃənəl ˈkʌmpəni/",
    "uí díd-nt rév én ó-por-tû-ni-di tchu uêrc fór én in-ter-né-cho-nôl cảm-pa-ni",
    ["We", " didn't", " have", " an", " op", "por", "tu", "ni", "ty", " to", " work", " for", " an", " in", "ter", "na", "tion", "al", " com", "pa", "ny."],
    "We didn't have an opportunity to work for an international company.",
    "Nós não tivemos a oportunidade de trabalhar para uma empresa internacional."
  ],
  [
    "Sam didn't have a chance to get a promotion this year.",
    "Sam não teve uma chance de conseguir uma promoção este ano.",
    "/sæm ˈdɪdənt hæv ə tʃæns tu ɡɛt ə prəˈmoʊʃən ðɪs jɪər/",
    "sém díd-nt rév a tchéns tchu gét a pro-môu-chôn ðís í-er",
    ["Sam", " didn't", " have", " a", " chance", " to", " get", " a", " pro", "mo", "tion", " this", " year."],
    "Sam didn't have a chance to get a promotion this year.",
    "Sam não teve uma chance de conseguir uma promoção este ano."
  ],
  [
    "My family and I didn't live in Cuba for three years.",
    "Minha família e eu não moramos em Cuba por três anos.",
    "/maɪ ˈfæməli ænd aɪ ˈdɪdənt lɪv ɪn ˈkjubə fɔr θri jɪərz/",
    "mái fǽ-mi-li énd ai díd-nt lív ín qiû-ba fór θrî í-erz",
    ["My", " fam", "i", "ly", " and", " I", " didn't", " live", " in", " Cu", "ba", " for", " three", " years."],
    "My family and I didn't live in Cuba for three years.",
    "Minha família e eu não moramos em Cuba por três anos."
  ],
  [
    "John and Max didn't know how many employees they had.",
    "John e Max não sabiam quantos funcionários eles tinham.",
    "/dʒɑn ænd mæks ˈdɪdənt noʊ haʊ ˈmɛni ɛmˈplɔɪ-iz ðeɪ hæd/",
    "djón énd mécs díd-nt nôu háu mé-ni em-plói-îz ðêi réd",
    ["John", " and", " Max", " didn't", " know", " how", " ma", "ny", " em", "ploy", "ees", " they", " had."],
    "John and Max didn't know how many employees they had.",
    "John e Max não sabiam quantos funcionários eles tinham."
  ],
  [
    "I didn't live in Asia when I was young.",
    "Eu não morei na Ásia quando era jovem.",
    "/aɪ ˈdɪdənt lɪv ɪn ˈeɪʒə wɛn aɪ wʌz jʌŋ/",
    "ai díd-nt lív ín êi-ja uén ai uâz iân",
    ["I", " didn't", " live", " in", " A", "sia", " when", " I", " was", " young."],
    "I didn't live in Asia when I was young.",
    "Eu não morei na Ásia quando era jovem."
  ],
  [
    "Peter didn't know a lot about chemistry when he was at school.",
    "Peter não sabia muito sobre química quando estava na escola.",
    "/ˈpitər ˈdɪdənt noʊ ə lɑt əˈbaʊt ˈkɛmɪstri wɛn hi wʌz æt skul/",
    "pî-ter díd-nt nôu a lót a-báut qué-mis-tri uén ri uâz ét scûl",
    ["Pe", "ter", " didn't", " know", " a", " lot", " a", "bout", " chem", "is", "try", " when", " he", " was", " at", " school."],
    "Peter didn't know a lot about chemistry when he was at school.",
    "Peter não sabia muito sobre química quando estava na escola."
  ],
  [
    "They weren't best friends before the accident.",
    "Eles não eram melhores amigos antes do acidente.",
    "/ðeɪ ˈwɜrənt bɛst frɛndz bɪˈfɔr ði ˈæksədənt/",
    "ðêi uêrn-t bést fréndz bi-fór ðî á-si-dent",
    ["They", " weren't", " best", " friends", " be", "fore", " the", " ac", "ci", "dent."],
    "They weren't best friends before the accident.",
    "Eles não eram melhores amigos antes do acidente."
  ],
  [
    "I didn't know about the raise.",
    "Eu não sabia sobre o aumento salarial.",
    "/aɪ ˈdɪdənt noʊ əˈbaʊt ðə reɪz/",
    "ai díd-nt nôu a-báut ðâ rêiz",
    ["I", " didn't", " know", " a", "bout", " the", " raise."],
    "I didn't know about the raise.",
    "Eu não sabia sobre o aumento salarial."
  ],
  [
    "Tim didn't have an opportunity when he was working for my father.",
    "Tim não teve uma oportunidade quando trabalhava para meu pai.",
    "/tɪm ˈdɪdənt hæv ən ˌɑpərˈtunəti wɛn hi wʌz ˈwɜrkɪŋ fɔr maɪ ˈfɑðər/",
    "tím díd-nt rév én ó-por-tû-ni-di uén ri uâz uêr-quin fór mái fá-ðer",
    ["Tim", " didn't", " have", " an", " op", "por", "tu", "ni", "ty", " when", " he", " was", " work", "ing", " for", " my", " fa", "ther."],
    "Tim didn't have an opportunity when he was working for my father.",
    "Tim não teve uma oportunidade quando trabalhava para meu pai."
  ],
  [
    "Carl was looking for a job abroad because he didn't have a choice.",
    "Carl estava procurando um emprego no exterior porque não tinha escolha.",
    "/kɑrl wʌz ˈlʊkɪŋ fɔr ə dʒɑb əˈbrɔd bɪˈfɔz hi ˈdɪdənt hæv ə tʃɔɪs/",
    "cárl uâz lû-quin fór a djób a-bród bi-cóz ri díd-nt rév a tchóis",
    ["Carl", " was", " look", "ing", " for", " a", " job", " a", "broad", " be", "cause", " he", " didn't", " have", " a", " choice."],
    "Carl was looking for a job abroad because he didn't have a choice.",
    "Carl estava procurando um emprego no exterior porque não tinha escolha."
  ],
  [
    "They didn't live in Atlanta last year.",
    "Eles não moraram em Atlanta no ano passado.",
    "/ðeɪ ˈdɪdənt lɪv ɪn ætˈlæntə læst jɪər/",
    "ðêi díd-nt lív ín ét-lén-ta lést í-er",
    ["They", " didn't", " live", " in", " At", "lan", "ta", " last", " year."],
    "They didn't live in Atlanta last year.",
    "Eles não moraram em Atlanta no ano passado."
  ],
  [
    "The employer pays a good salary, but last week we didn't get a raise.",
    "O empregador paga um bom salário, mas na semana passada nós não recebemos um aumento.",
    "/ðə ɛmˈplɔɪər peɪz ə ɡʊd ˈsæləri, bʌt læst wik wi ˈdɪdənt ɡɛt ə reɪz/",
    "ðâ em-plói-er pêiz a gûd sǽ-lâ-ri, bât lést uîc uí díd-nt gét a rêiz",
    ["The", " em", "ploy", "er", " pays", " a", " good", " sal", "a", "ry,", " but", " last", " week", " we", " didn't", " get", " a", " raise."],
    "The employer pays a good salary, but last week we didn't get a raise.",
    "O empregador paga um bom salário, mas na semana passada nós não recebemos um aumento."
  ],
  [
    "I didn't work for that company two years ago.",
    "Eu não trabalhei para aquela empresa há dois anos.",
    "/aɪ ˈdɪdənt wɜrk fɔr ðæt ˈkʌmpəni tu jɪərz əˈɡoʊ/",
    "ai díd-nt uêrc fór ðét cảm-pa-ni tû í-erz a-gôu",
    ["I", " didn't", " work", " for", " that", " com", "pa", "ny", " two", " years", " a", "go."],
    "I didn't work for that company two years ago.",
    "Eu não trabalhei para aquela empresa há dois anos."
  ],
  [
    "He didn't live abroad because of his family.",
    "Ele não morou no exterior por causa da família dele.",
    "/hi ˈdɪdənt lɪv əˈbrɔd bɪˈkɔz ʌv hɪz ˈfæməli/",
    "ri díd-nt lív a-bród bi-cóz âv ríz fǽ-mi-li",
    ["He", " didn't", " live", " a", "broad", " be", "cause", " of", " his", " fam", "i", "ly."],
    "He didn't live abroad because of his family.",
    "Ele não morou no exterior por causa da família dele."
  ],
  [
    "Kate was looking for a job, but didn't know where her résumé was.",
    "Kate estava procurando um emprego, mas não sabia onde estava seu currículo.",
    "/keɪt wʌz ˈlʊkɪŋ fɔr ə dʒɑb, bʌt ˈdɪdənt noʊ wɛr hɜr ˈrɛzʊˌmeɪ wʌz/",
    "quêit uâz lû-quin fór a djób, bât díd-nt nôu uêr rêr ré-zu-mêi uâz",
    ["Kate", " was", " look", "ing", " for", " a", " job,", " but", " didn't", " know", " where", " her", " ré", "su", "mé", " was."],
    "Kate was looking for a job, but didn't know where her résumé was.",
    "Kate estava procurando um emprego, mas não sabia onde estava seu currículo."
  ],
  [
    "I worked. / I didn't work.",
    "Eu trabalhei. / Eu não trabalhei.",
    "/aɪ wɜrkt / aɪ ˈdɪdənt wɜrk/",
    "ai uêrct / ai díd-nt uêrc",
    ["I", " worked.", " /", " I", " didn't", " work."],
    "I worked, but he didn't work.",
    "Eu trabalhei, mas ele não trabalhou."
  ],
  [
    "They lived there. / They didn't live there.",
    "Eles moraram lá. / Eles não moraram lá.",
    "/ðeɪ lɪvd ðɛr / ðeɪ ˈdɪdənt lɪv ðɛr/",
    "ðêi lívd ðêr / ðêi díd-nt lív ðêr",
    ["They", " lived", " there.", " /", " They", " didn't", " live", " there."],
    "They lived there, but we didn't live there.",
    "Eles moraram lá, mas nós não moramos lá."
  ],
  [
    "He knew the answer. / He didn't know the answer.",
    "Ele sabia a resposta. / Ele não sabia a resposta.",
    "/hi nu ði ˈænsər / hi ˈdɪdənt noʊ ði ˈænsər/",
    "ri niû ðî án-ser / ri díd-nt nôu ðî án-ser",
    ["He", " knew", " the", " an", "swer.", " /", " He", " didn't", " know", " the", " an", "swer."],
    "He knew the answer, but they didn't know the answer.",
    "Ele sabia a resposta, mas eles não sabiam a resposta."
  ],
  [
    "We had a chance. / We didn't have a chance.",
    "Nós tivemos uma chance. / Nós não tivemos uma chance.",
    "/wi hæd ə tʃæns / wi ˈdɪdənt hæv ə tʃæns/",
    "uí réd a tchéns / uí díd-nt rév a tchéns",
    ["We", " had", " a", " chance.", " /", " We", " didn't", " have", " a", " chance."],
    "We had a chance, but they didn't have a chance.",
    "Nós tivemos uma chance, mas eles não tiveram uma chance."
  ],
  [
    "I worked for IBM. / I didn't work for IBM.",
    "Eu trabalhei para a IBM. / Eu não trabalhei para a IBM.",
    "/aɪ wɜrkt fɔr aɪ-bi-ɛm / aɪ ˈdɪdənt wɜrk fɔr aɪ-bi-ɛm/",
    "ai uêrct fór ai-bî-ém / ai díd-nt uêrc fór ai-bî-ém",
    ["I", " worked", " for", " I", "B", "M.", " /", " I", " didn't", " work", " for", " I", "B", "M."],
    "I worked for IBM, but my brother didn't work for IBM.",
    "Eu trabalhei para a IBM, mas meu irmão não trabalhou para a IBM."
  ],
  [
    "She lived in Canada. / She didn't live in Canada.",
    "Ela morou no Canadá. / Ela não morou no Canadá.",
    "/ʃi lɪvd ɪn ˈkænədə / ʃi ˈdɪdənt lɪv ɪn ˈkænədə/",
    "chî lívd ín cǽ-na-da / chî díd-nt lív ín cǽ-na-da",
    ["She", " lived", " in", " Can", "a", "da.", " /", " She", " didn't", " live", " in", " Can", "a", "da."],
    "She lived in Canada, but they didn't live in Canada.",
    "Ela morou no Canadá, mas eles não moraram no Canadá."
  ],
  [
    "They knew the manager. / They didn't know the manager.",
    "Eles conheciam o gerente. / Eles não conheciam o gerente.",
    "/ðeɪ nu ðə ˈmænədʒər / ðeɪ ˈdɪdənt noʊ ðə ˈmænədʒər/",
    "ðêi niû ðâ mǽ-na-djer / ðêi díd-nt nôu ðâ mǽ-na-djer",
    ["They", " knew", " the", " man", "a", "ger.", " /", " They", " didn't", " know", " the", " man", "a", "ger."],
    "They knew the manager, but I didn't know the manager.",
    "Eles conheciam o gerente, mas eu não conhecia o gerente."
  ],
  [
    "He was happy. / He wasn't happy.",
    "Ele estava feliz. / Ele não estava feliz.",
    "/hi wʌz ˈhæpi / hi ˈwʌzənt ˈhæpi/",
    "ri uâz rǽ-pi / ri uóz-nt rǽ-pi",
    ["He", " was", " hap", "py.", " /", " He", " wasn't", " hap", "py."],
    "He was happy, but they weren't happy.",
    "Ele estava feliz, mas eles não estavam felizes."
  ],
  [
    "They were friends. / They weren't friends.",
    "Eles eram amigos. / Eles não eram amigos.",
    "/ðeɪ wɜr frɛndz / ðeɪ wɜrnt frɛndz/",
    "ðêi uêr fréndz / ðêi uêrn-t fréndz",
    ["They", " were", " friends.", " /", " They", " weren't", " friends."],
    "They were friends, but we weren't friends.",
    "Eles eram amigos, mas nós não éramos amigos."
  ],
  [
    "They were best friends.",
    "Eles eram melhores amigos.",
    "/ðeɪ wɜr bɛst frɛndz/",
    "ðêi uêr bést fréndz",
    ["They", " were", " best", " friends."],
    "They were best friends.",
    "Eles eram melhores amigos."
  ],
  [
    "They weren't best friends.",
    "Eles não eram melhores amigos.",
    "/ðeɪ wɜrnt bɛst frɛndz/",
    "ðêi uêrn-t bést fréndz",
    ["They", " weren't", " best", " friends."],
    "They weren't best friends.",
    "Eles não eram melhores amigos."
  ]
];

export const LESSON_85_DECK: FlashcardData[] = RAW_CARDS.map((item, idx) => ({
  id: 'lesson_85_' + (idx + 1),
  word: item[0],
  translation: item[1],
  pronunciation: item[2],
  portuguesePhonetic: item[3],
  syllables: item[4],
  exampleSentence: item[5],
  exampleTranslation: item[6],
}));
