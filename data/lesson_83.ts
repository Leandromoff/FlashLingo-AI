import { FlashcardData } from '../types';

const RAW_CARDS: Array<[string, string, string, string, string[], string, string]> = [
  [
    "to travel - traveled",
    "viajar - viajou",
    "/tu ˈtrævəl / ˈtrævəld/",
    "tchu trǽ-vôl / trǽ-vôld",
    ["to", " trav", "el", " trav", "eled"],
    "I love to travel. Two months ago I traveled to Canada to visit my brother.",
    "Eu adoro viajar. Há dois meses viajei para o Canadá para visitar meu irmão."
  ],
  [
    "to stay - stayed",
    "ficar / hospedar-se - ficou / hospedou-se",
    "/tu steɪ / steɪd/",
    "tchu estêi / estêid",
    ["to", " stay", " stayed"],
    "They stayed in a great hostel in Amsterdam.",
    "Eles ficaram em um ótimo albergue em Amsterdã."
  ],
  [
    "to need - needed",
    "precisar - precisou",
    "/tu nid / ˈnidɪd/",
    "tchu nîd / nî-did",
    ["to", " need", " need", "ed"],
    "Emma needed to check the arrival time.",
    "Emma precisou verificar o horário de chegada."
  ],
  [
    "itinerary",
    "itinerário",
    "/aɪˈtɪnəˌrɛri/",
    "ai-tí-ne-rê-ri",
    ["i", "tin", "er", "ar", "y"],
    "To visit all the places we wanted, we needed a new itinerary.",
    "Para visitar todos os lugares que queríamos, precisávamos de um novo itinerário."
  ],
  [
    "reservation",
    "reserva",
    "/ˌrɛzərˈveɪʃən/",
    "ré-zer-vêi-chôn",
    ["res", "er", "va", "tion"],
    "I'd like to cancel my reservation.",
    "Eu gostaria de cancelar minha reserva."
  ],
  [
    "flight",
    "voo",
    "/flaɪt/",
    "fláit",
    ["flight"],
    "I needed a flight reservation for that night.",
    "Eu precisava de uma reserva de voo para aquela noite."
  ],
  [
    "boarding pass",
    "cartão de embarque",
    "/ˈbɔrdɪŋ pæs/",
    "bór-din pés",
    ["board", "ing", " pass"],
    "The travel agency needed to find my boarding pass.",
    "A agência de viagens precisou encontrar meu cartão de embarque."
  ],
  [
    "economy",
    "classe econômica",
    "/ɪˈkɑnəmi/",
    "i-cón-o-mi",
    ["e", "con", "o", "my"],
    "She always traveled first class, but this time she went economy.",
    "Ela sempre viajava de primeira classe, mas desta vez foi de classe econômica."
  ],
  [
    "first class",
    "primeira classe",
    "/fɜrst klæs/",
    "fêrst clés",
    ["first", " class"],
    "My sister and I traveled to Morocco first class.",
    "Minha irmã e eu viajamos para Marrocos na primeira classe."
  ],
  [
    "baggage drop",
    "despacho de bagagem",
    "/ˈbæɡɪdʒ drɑp/",
    "bǽ-guidj dróp",
    ["bag", "gage", " drop"],
    "He still needed to go to the baggage drop.",
    "Ele ainda precisava ir ao despacho de bagagem."
  ],
  [
    "visa",
    "visto",
    "/ˈvizə/",
    "vî-za",
    ["vi", "sa"],
    "Alejandro was Argentinian and he needed a visa and a hotel reservation to go to the U.S.",
    "Alejandro era argentino e precisava de um visto e de uma reserva de hotel para ir aos Estados Unidos."
  ],
  [
    "accommodation",
    "hospedagem",
    "/əˌkɑməˈdeɪʃən/",
    "a-có-mo-dêi-shân",
    ["ac", "com", "mo", "da", "tion"],
    "We had accommodation to stay at the beach.",
    "Nós tínhamos hospedagem para ficar na praia."
  ],
  [
    "inn",
    "pousada",
    "/ɪn/",
    "ín",
    ["inn"],
    "My friends went to Malta last year. They stayed in an inn.",
    "Meus amigos foram para Malta no ano passado. Eles ficaram em uma pousada."
  ],
  [
    "bed and breakfast",
    "pousada com café da manhã",
    "/bɛd ænd ˈbrɛkfəst/",
    "béd énd bréc-fâst",
    ["bed", " and", " break", "fast"],
    "My family stayed in a bed and breakfast for a week.",
    "Minha família ficou em uma pousada com café da manhã por uma semana."
  ],
  [
    "I'd like to cancel my reservation.",
    "Eu gostaria de cancelar minha reserva.",
    "/aɪd laɪk tu ˈkænsəl maɪ ˌrɛzərˈveɪʃən/",
    "aid láic tchu quén-sôl mái ré-zer-vêi-chôn",
    ["I'd", " like", " to", " can", "cel", " my", " res", "er", "va", "tion."],
    "I'd like to cancel my reservation.",
    "Eu gostaria de cancelar minha reserva."
  ],
  [
    "First, you need to go through customs.",
    "Primeiro, você precisa passar pela alfândega.",
    "/fɜrst, ju nid tu ɡoʊ θru ˈkʌstəmz/",
    "fêrst, iu nîd tchu gôu θrû câs-tômz",
    ["First,", " you", " need", " to", " go", " through", " cus", "toms."],
    "First, you need to go through customs.",
    "Primeiro, você precisa passar pela alfândega."
  ],
  [
    "Excuse me, I need to book a flight to Rio for next Friday.",
    "Com licença, preciso reservar um voo para o Rio para a próxima sexta-feira.",
    "/ɪkˈskjus mi, aɪ nid tu bʊk ə flaɪt tu ˈriːoʊ fɔr nɛkst ˈfraɪdeɪ/",
    "ic-squiûz mî, ai nîd tchu bûc a fláit tchu rî-ou fór nécst frái-dêi",
    ["Ex", "cuse", " me,", " I", " need", " to", " book", " a", " flight", " to", " Ri", "o", " for", " next", " Fri", "day."],
    "Excuse me, I need to book a flight to Rio for next Friday.",
    "Com licença, preciso reservar um voo para o Rio para a próxima sexta-feira."
  ],
  [
    "Let me get a shot of you two.",
    "Deixe-me tirar uma foto de vocês dois.",
    "/lɛt mi ɡɛt ə ʃɑt ʌv ju tu/",
    "lét mî gét a chót âv iu tû",
    ["Let", " me", " get", " a", " shot", " of", " you", " two."],
    "Let me get a shot of you two.",
    "Deixe-me tirar uma foto de vocês dois."
  ],
  [
    "She always traveled first class, but this time she went economy.",
    "Ela sempre viajava de primeira classe, mas desta vez foi de classe econômica.",
    "/ʃi ˈɔlweɪz ˈtrævəld fɜrst klæs, bʌt ðɪs taɪm ʃi wɛnt ɪˈkɑnəmi/",
    "chî ól-uêiz trǽ-vôld fêrst clés, bât ðís táim chî uént i-cón-o-mi",
    ["She", " al", "ways", " trav", "eled", " first", " class,", " but", " this", " time", " she", " went", " e", "con", "o", "my."],
    "She always traveled first class, but this time she went economy.",
    "Ela sempre viajava de primeira classe, mas desta vez foi de classe econômica."
  ],
  [
    "They stayed in a great hostel in Amsterdam.",
    "Eles ficaram em um ótimo albergue em Amsterdã.",
    "/ðeɪ steɪd ɪn ə ɡreɪt ˈhɑstəl ɪn ˈæmstərˌdæm/",
    "ðêi estêid ín a grêit rós-tôl ín éms-ter-dém",
    ["They", " stayed", " in", " a", " great", " hos", "tel", " in", " Am", "ster", "dam."],
    "They stayed in a great hostel in Amsterdam.",
    "Eles ficaram em um ótimo albergue em Amsterdã."
  ],
  [
    "Alejandro was Argentinian and he needed a visa and a hotel reservation to go to the U.S.",
    "Alejandro era argentino e precisava de um visto e de uma reserva de hotel para ir aos Estados Unidos.",
    "/ˌɑlɛˈhɑndroʊ wʌz ˌɑrdʒənˈtɪniən ænd hi ˈnidɪd ə ˈvizə ænd ə hoʊˈtɛl ˌrɛzərˈveɪʃən tu ɡoʊ tu ðə ju.ɛs./",
    "a-le-rán-drou uâz ar-djen-tî-ni-an énd ri nî-did a vî-za énd a rou-tél ré-zer-vêi-chôn tchu gôu tchu ðâ iu-és",
    ["Al", "e", "jan", "dro", " was", " Ar", "gen", "tin", "i", "an", " and", " he", " need", "ed", " a", " vi", "sa", " and", " a", " ho", "tel", " res", "er", "va", "tion", " to", " go", " to", " the", " U.", "S."],
    "Alejandro was Argentinian and he needed a visa and a hotel reservation to go to the U.S.",
    "Alejandro era argentino e precisava de um visto e de uma reserva de hotel para ir aos Estados Unidos."
  ],
  [
    "I needed a flight reservation for that night.",
    "Eu precisava de uma reserva de voo para aquela noite.",
    "/aɪ ˈnidɪd ə flaɪt ˌrɛzərˈveɪʃən fɔr ðæt naɪt/",
    "ai nî-did a fláit ré-zer-vêi-chôn fór ðét náit",
    ["I", " need", "ed", " a", " flight", " res", "er", "va", "tion", " for", " that", " night."],
    "I needed a flight reservation for that night.",
    "Eu precisava de uma reserva de voo para aquela noite."
  ],
  [
    "To visit all the places we wanted, we needed a new itinerary.",
    "Para visitar todos os lugares que queríamos, precisávamos de um novo itinerário.",
    "/tu ˈvɪzɪt ɔl ðə ˈpleɪsəz wi ˈwɑntɪd, wi ˈnidɪd ə nu aɪˈtɪnəˌrɛri/",
    "tchu ví-zit ól ðâ plêi-siz uí uón-tid, uí nî-did a niû ai-tí-ne-rê-ri",
    ["To", " vis", "it", " all", " the", " pla", "ces", " we", " want", "ed,", " we", " need", "ed", " a", " new", " i", "tin", "er", "ar", "y."],
    "To visit all the places we wanted, we needed a new itinerary.",
    "Para visitar todos os lugares que queríamos, precisávamos de um novo itinerário."
  ],
  [
    "He still needed to go to the baggage drop.",
    "Ele ainda precisava ir ao despacho de bagagem.",
    "/hi stɪl ˈnidɪd tu ɡoʊ tu ðə ˈbæɡɪdʒ drɑp/",
    "ri estíl nî-did tchu gôu tchu ðâ bǽ-guidj dróp",
    ["He", " still", " need", "ed", " to", " go", " to", " the", " bag", "gage", " drop."],
    "He still needed to go to the baggage drop.",
    "Ele ainda precisava ir ao despacho de bagagem."
  ],
  [
    "customs",
    "alfândega",
    "/ˈkʌstəmz/",
    "câs-tômz",
    ["cus", "toms"],
    "First, you need to go through customs.",
    "Primeiro, você precisa passar pela alfândega."
  ],
  [
    "flight reservation",
    "reserva de voo",
    "/flaɪt ˌrɛzərˈveɪʃən/",
    "fláit ré-zer-vêi-chôn",
    ["flight", " res", "er", "va", "tion"],
    "I needed a flight reservation for that night.",
    "Eu precisava de uma reserva de voo para aquela noite."
  ],
  [
    "I traveled to California last year.",
    "Eu viajei para a Califórnia no ano passado.",
    "/aɪ ˈtrævəld tu ˌkæləˈfɔrnjə læst jɪər/",
    "ai trǽ-vôld tchu cǽ-li-fór-nia lést í-er",
    ["I", " trav", "eled", " to", " Cal", "i", "for", "nia", " last", " year."],
    "I traveled to California last year.",
    "Eu viajei para a Califórnia no ano passado."
  ],
  [
    "We traveled by plane.",
    "Nós viajamos de avião.",
    "/wi ˈtrævəld baɪ pleɪn/",
    "uí trǽ-vôld bái plêin",
    ["We", " trav", "eled", " by", " plane."],
    "We traveled by plane.",
    "Nós viajamos de avião."
  ],
  [
    "She traveled first class.",
    "Ela viajou de primeira classe.",
    "/ʃi ˈtrævəld fɜrst klæs/",
    "chî trǽ-vôld fêrst clés",
    ["She", " trav", "eled", " first", " class."],
    "She traveled first class.",
    "Ela viajou de primeira classe."
  ],
  [
    "We stayed at a hotel downtown.",
    "Nós ficamos em um hotel no centro.",
    "/wi steɪd æt ə hoʊˈtɛl ˈdaʊnˌtaʊn/",
    "uí estêid ét a rou-tél dáun-táun",
    ["We", " stayed", " at", " a", " ho", "tel", " down", "town."],
    "We stayed at a hotel downtown.",
    "Nós ficamos em um hotel no centro."
  ],
  [
    "They stayed for three nights.",
    "Eles ficaram por três noites.",
    "/ðeɪ steɪd fɔr θri naɪts/",
    "ðêi estêid fór θrî náits",
    ["They", " stayed", " for", " three", " nights."],
    "They stayed for three nights.",
    "Eles ficaram por três noites."
  ],
  [
    "I stayed with my family during the trip.",
    "Eu fiquei com minha família durante a viagem.",
    "/aɪ steɪd wɪð maɪ ˈfæməli ˈdʊrɪŋ ðə trɪp/",
    "ai estêid uíð mái fǽ-mi-li dû-rin ðâ tríp",
    ["I", " stayed", " with", " my", " fam", "i", "ly", " dur", "ing", " the", " trip."],
    "I stayed with my family during the trip.",
    "Eu fiquei com minha família durante a viagem."
  ],
  [
    "I needed a visa to enter the country.",
    "Eu precisei de um visto para entrar no país.",
    "/aɪ ˈnidɪd ə ˈvizə tu ˈɛntər ðə ˈkʌntri/",
    "ai nî-did a vî-za tchu én-ter ðâ cân-tri",
    ["I", " need", "ed", " a", " vi", "sa", " to", " en", "ter", " the", " coun", "try."],
    "I needed a visa to enter the country.",
    "Eu precisei de um visto para entrar no país."
  ],
  [
    "We needed a new itinerary.",
    "Nós precisávamos de um novo itinerário.",
    "/wi ˈnidɪd ə nu aɪˈtɪnəˌrɛri/",
    "uí nî-did a niû ai-tí-ne-rê-ri",
    ["We", " need", "ed", " a", " new", " i", "tin", "er", "ar", "y."],
    "We needed a new itinerary.",
    "Nós precisávamos de um novo itinerário."
  ],
  [
    "She needed a reservation.",
    "Ela precisava de uma reserva.",
    "/ʃi ˈnidɪd ə ˌrɛzərˈveɪʃən/",
    "chî nî-did a ré-zer-vêi-chôn",
    ["She", " need", "ed", " a", " res", "er", "va", "tion."],
    "She needed a reservation.",
    "Ela precisava de uma reserva."
  ],
  [
    "I travel a lot for work.",
    "Eu viajo muito a trabalho.",
    "/aɪ ˈtrævəl ə lɑt fɔr wɜrk/",
    "ai trǽ-vôl a lót fór uêrc",
    ["I", " trav", "el", " a", " lot", " for", " work."],
    "I travel a lot for work.",
    "Eu viajo muito a trabalho."
  ],
  [
    "I traveled to Japan last year.",
    "Eu viajei para o Japão no ano passado.",
    "/aɪ ˈtrævəld tu dʒəˈpæn læst jɪər/",
    "ai trǽ-vôld tchu dja-pǽn lést í-er",
    ["I", " trav", "eled", " to", " Ja", "pan", " last", " year."],
    "I traveled to Japan last year.",
    "Eu viajei para o Japão no ano passado."
  ],
  [
    "We stay at hotels when we travel.",
    "Nós ficamos em hotéis quando viajamos.",
    "/wi steɪ æt hoʊˈtɛlz wɛn wi ˈtrævəl/",
    "uí estêi ét rou-télz uén uí trǽ-vôl",
    ["We", " stay", " at", " ho", "tels", " when", " we", " trav", "el."],
    "We stay at hotels when we travel.",
    "Nós ficamos em hotéis quando viajamos."
  ],
  [
    "We stayed at a hotel in Amsterdam.",
    "Nós ficamos em um hotel em Amsterdã.",
    "/wi steɪd æt ə hoʊˈtɛl ɪn ˈæmstərˌdæm/",
    "uí estêid ét a rou-tél ín éms-ter-dém",
    ["We", " stayed", " at", " a", " ho", "tel", " in", " Am", "ster", "dam."],
    "We stayed at a hotel in Amsterdam.",
    "Nós ficamos em um hotel em Amsterdã."
  ],
  [
    "I need a passport.",
    "Eu preciso de um passaporte.",
    "/aɪ nid ə ˈpæspɔrt/",
    "ai nîd a pés-pórt",
    ["I", " need", " a", " pass", "port."],
    "I need a passport.",
    "Eu preciso de um passaporte."
  ],
  [
    "I needed a visa for my trip.",
    "Eu precisei de um visto para minha viagem.",
    "/aɪ ˈnidɪd ə ˈvizə fɔr maɪ trɪp/",
    "ai nî-did a vî-za fór mái tríp",
    ["I", " need", "ed", " a", " vi", "sa", " for", " my", " trip."],
    "I needed a visa for my trip.",
    "Eu precisei de um visto para minha viagem."
  ],
  [
    "I visited Paris when I traveled in Europe.",
    "Eu visitei Paris quando viajei pela Europa.",
    "/aɪ ˈvɪzɪtɪd ˈpærɪs wɛn aɪ ˈtrævəld ɪn ˈjʊrəp/",
    "ai ví-zi-tid pǽ-ris uén ai trǽ-vôld ín iû-rôp",
    ["I", " vis", "it", "ed", " Par", "is", " when", " I", " trav", "eled", " in", " Eu", "rope."],
    "I visited Paris when I traveled in Europe.",
    "Eu visitei Paris quando viajei pela Europa."
  ],
  [
    "Sarah went to London and she needed a place to stay.",
    "Sarah foi para Londres e precisou de um lugar para ficar.",
    "/ˈsɛrə wɛnt tu ˈlʌndən ænd ʃi ˈnidɪd ə pleɪs tu steɪ/",
    "sǽ-ra uént tchu lân-dôn énd chî nî-did a plêis tchu estêi",
    ["Sa", "rah", " went", " to", " Lon", "don", " and", " she", " need", "ed", " a", " place", " to", " stay."],
    "Sarah went to London and she needed a place to stay.",
    "Sarah foi para Londres e precisou de um lugar para ficar."
  ],
  [
    "My family stayed in a bed and breakfast for a week.",
    "Minha família ficou em uma pousada com café da manhã por uma semana.",
    "/maɪ ˈfæməli steɪd ɪn ə bɛd ænd ˈbrɛkfəst fɔr ə wik/",
    "mái fǽ-mi-li estêid ín a béd énd bréc-fâst fór a uîc",
    ["My", " fam", "i", "ly", " stayed", " in", " a", " bed", " and", " break", "fast", " for", " a", " week."],
    "My family stayed in a bed and breakfast for a week.",
    "Minha família ficou em uma pousada com café da manhã por uma semana."
  ],
  [
    "I needed a visa when I went to Australia last month.",
    "Eu precisei de um visto quando fui para a Austrália no mês passado.",
    "/aɪ ˈnidɪd ə ˈvizə wɛn aɪ wɛnt tu ɔˈstreɪljə læst mʌnθ/",
    "ai nî-did a vî-za uén ai uént tchu os-trêi-lia lést mânθ",
    ["I", " need", "ed", " a", " vi", "sa", " when", " I", " went", " to", " Aus", "tral", "ia", " last", " month."],
    "I needed a visa when I went to Australia last month.",
    "Eu precisei de um visto quando fui para a Austrália no mês passado."
  ],
  [
    "My friends went to Malta last year. They stayed in an inn.",
    "Meus amigos foram para Malta no ano passado. Eles ficaram em uma pousada.",
    "/maɪ frɛndz wɛnt tu ˈmɔːltə læst jɪər. ðeɪ steɪd ɪn ən ɪn/",
    "mái fréndz uént tchu mól-ta lést í-er. ðêi estêid ín én ín",
    ["My", " friends", " went", " to", " Mal", "ta", " last", " year.", " They", " stayed", " in", " an", " inn."],
    "My friends went to Malta last year. They stayed in an inn.",
    "Meus amigos foram para Malta no ano passado. Eles ficaram em uma pousada."
  ],
  [
    "Sam needed to buy travel insurance before his trip last year.",
    "Sam precisou comprar um seguro de viagem antes da viagem dele no ano passado.",
    "/sæm ˈnidɪd tu baɪ ˈtrævəl ɪnˈʃʊrəns bɪˈfɔr hɪz trɪp læst jɪər/",
    "sém nî-did tchu bái trǽ-vôl in-chû-râns bi-fór ríz tríp lést í-er",
    ["Sam", " need", "ed", " to", " buy", " trav", "el", " in", "sur", "ance", " be", "fore", " his", " trip", " last", " year."],
    "Sam needed to buy travel insurance before his trip last year.",
    "Sam precisou comprar um seguro de viagem antes da viagem dele no ano passado."
  ],
  [
    "Why was he staying in a hostel?",
    "Por que ele estava ficando em um albergue?",
    "/waɪ wʌz hi ˈsteɪɪŋ ɪn ə ˈhɑstəl/",
    "uái uâz rî estêi-in ín a rós-tôl",
    ["Why", " was", " he", " stay", "ing", " in", " a", " hos", "tel?"],
    "Why was he staying in a hostel?",
    "Por que ele estava ficando em um albergue?"
  ],
  [
    "I love to travel. Two months ago I traveled to Canada to visit my brother.",
    "Eu adoro viajar. Há dois meses viajei para o Canadá para visitar meu irmão.",
    "/aɪ lʌv tu ˈtrævəl. tu mʌnθs əˈɡoʊ aɪ ˈtrævəld tu ˈkænədə tu ˈvɪzɪt maɪ ˈbrʌðər/",
    "ai lâv tchu trǽ-vôl. tû mânθs a-gôu ai trǽ-vôld tchu cǽ-na-da tchu ví-zit mái brâ-ðer",
    ["I", " love", " to", " trav", "el.", " Two", " months", " a", "go", " I", " trav", "eled", " to", " Can", "a", "da", " to", " vis", "it", " my", " broth", "er."],
    "I love to travel. Two months ago I traveled to Canada to visit my brother.",
    "Eu adoro viajar. Há dois meses viajei para o Canadá para visitar meu irmão."
  ],
  [
    "Good afternoon! This is Julie speaking from your travel agency. How can I help you?",
    "Boa tarde! Aqui é Julie da sua agência de viagens. Como posso ajudá-lo?",
    "/ɡʊd ˌæftərˈnun! ðɪs ɪz ˈdʒuli ˈspikɪŋ frʌm jɔər ˈtrævəl ˈeɪdʒənsi. haʊ kæn aɪ hɛlp ju/",
    "gûd áf-ter-nûn! ðís íz dju-li espî-quin frâm iór trǽ-vôl êi-djen-si. háu quén ai rélp iu",
    ["Good", " af", "ter", "noon!", " This", " is", " Ju", "lie", " speak", "ing", " from", " your", " trav", "el", " a", "gen", "cy.", " How", " can", " I", " help", " you?"],
    "Good afternoon! This is Julie speaking from your travel agency. How can I help you?",
    "Boa tarde! Aqui é Julie da sua agência de viagens. Como posso ajudá-lo?"
  ],
  [
    "I have a flight to the Bahamas, but I'd like to cancel my reservation, please.",
    "Tenho um voo para as Bahamas, mas gostaria de cancelar minha reserva.",
    "/aɪ hæv ə flaɪt tu ðə bəˈhɑːməz, bʌt aɪd laɪk tu ˈkænsəl maɪ ˌrɛzərˈveɪʃən, plz/",
    "ai rév a fláit tchu ðâ ba-râ-mas, bât aid láic tchu quén-sôl mái ré-zer-vêi-chôn, plîz",
    ["I", " have", " a", " flight", " to", " the", " Ba", "ha", "mas,", " but", " I'd", " like", " to", " can", "cel", " my", " res", "er", "va", "tion,", " please."],
    "I have a flight to the Bahamas, but I'd like to cancel my reservation, please.",
    "Tenho um voo para as Bahamas, mas gostaria de cancelar minha reserva."
  ],
  [
    "What's your name and date of trip, please, sir?",
    "Qual é o seu nome e a data da viagem, senhor?",
    "/wɑts jɔər neɪm ænd deɪt ʌv trɪp, plz, sɜr/",
    "uóts iór nêim énd dêit âv tríp, plîz, sêr",
    ["What's", " your", " name", " and", " date", " of", " trip,", " please,", " sir?"],
    "What's your name and date of trip, please, sir?",
    "Qual é o seu nome e a data da viagem, senhor?"
  ],
  [
    "My name is Phillip Brown and my reservation is for next Friday.",
    "Meu nome é Phillip Brown e minha reserva é para a próxima sexta-feira.",
    "/maɪ neɪm ɪz ˈfɪlɪp braʊn ænd maɪ ˌrɛzərˈveɪʃən ɪz fɔr nɛkst ˈfraɪdeɪ/",
    "mái nêim íz fí-lip bráun énd mái ré-zer-vêi-chôn íz fór nécst frái-dêi",
    ["My", " name", " is", " Phil", "lip", " Brown", " and", " my", " res", "er", "va", "tion", " is", " for", " next", " Fri", "day."],
    "My name is Phillip Brown and my reservation is for next Friday.",
    "Meu nome é Phillip Brown e minha reserva é para a próxima sexta-feira."
  ],
  [
    "And why do you need to cancel it, Mr. Brown?",
    "E por que o senhor precisa cancelá-la, Sr. Brown?",
    "/ænd waɪ du ju nid tu ˈkænsəl ɪt, ˈmɪstər braʊn/",
    "énd uái du iu nîd tchu quén-sôl ít, mís-ter bráun",
    ["And", " why", " do", " you", " need", " to", " can", "cel", " it,", " Mr.", " Brown?"],
    "And why do you need to cancel it, Mr. Brown?",
    "E por que o senhor precisa cancelá-la, Sr. Brown?"
  ],
  [
    "I have some personal matters that I need to fix.",
    "Tenho alguns assuntos pessoais que preciso resolver.",
    "/aɪ hæv sʌm ˈpɜrsənəl ˈmætərz ðæt aɪ nid tu fɪks/",
    "ai rév sâm pêr-so-nôl mǽ-terz ðét ai nîd tchu fícs",
    ["I", " have", " some", " per", "son", "al", " mat", "ters", " that", " I", " need", " to", " fix."],
    "I have some personal matters that I need to fix.",
    "Tenho alguns assuntos pessoais que preciso resolver."
  ],
  [
    "I see you traveled with us a few times before.",
    "Vejo que o senhor já viajou conosco algumas vezes.",
    "/aɪ si ju ˈtrævəld wɪð ʌs ə fju taɪmz bɪˈfɔr/",
    "ai sî iu trǽ-vôld uíð âs a fiû táimz bi-fór",
    ["I", " see", " you", " trav", "eled", " with", " us", " a", " few", " times", " be", "fore."],
    "I see you traveled with us a few times before.",
    "Vejo que o senhor já viajou conosco algumas vezes."
  ],
  [
    "Yes, I traveled to New York last year and to other places before that.",
    "Sim, viajei para Nova York no ano passado e para outros lugares antes disso.",
    "/jɛs, aɪ ˈtrævəld tu nu jɔrk læst jɪər ænd tu ˈʌðər ˈpleɪsəz bɪˈfɔr ðæt/",
    "iés, ai trǽ-vôld tchu niû iórc lést í-er énd tchu â-ðer plêi-siz bi-fór ðét",
    ["Yes,", " I", " trav", "eled", " to", " New", " York", " last", " year", " and", " to", " oth", "er", " pla", "ces", " be", "fore", " that."],
    "Yes, I traveled to New York last year and to other places before that.",
    "Sim, viajei para Nova York no ano passado e para outros lugares antes disso."
  ],
  [
    "Your reservation will be canceled in a minute... It's canceled, sir. Anything else I can help you with?",
    "Sua reserva será cancelada em um minuto... Está cancelada, senhor. Posso ajudá-lo em mais alguma coisa?",
    "/jɔər ˌrɛzərˈveɪʃən wɪl bi ˈkænsəld ɪn ə ˈmɪnət... ɪts ˈkænsəld, sɜr. ˈɛniˌθɪŋ ɛls aɪ kæn hɛlp ju wɪð/",
    "iór ré-zer-vêi-chôn uíl bî quén-sôld ín a mí-nit... íts quén-sôld, sêr. é-ni-θin éls ai quén rélp iu uíð",
    ["Your", " res", "er", "va", "tion", " will", " be", " can", "celed", " in", " a", " min", "ute...", " It's", " can", "celed,", " sir.", " An", "y", "thing", " else", " I", " can", " help", " you", " with?"],
    "Your reservation will be canceled in a minute... It's canceled, sir. Anything else I can help you with?",
    "Sua reserva será cancelada em um minuto... Está cancelada, senhor. Posso ajudá-lo em mais alguma coisa?"
  ],
  [
    "That was fast! Thanks. When things get better, I'll call you back.",
    "Foi rápido! Obrigado. Quando as coisas melhorarem, ligarei novamente.",
    "/ðæt wʌz fæst! θæŋks. wɛn θɪŋz ɡɛt ˈbɛtər, aɪl kɔl ju bæk/",
    "ðét uâz fést! θéncs. uén θinz gét bé-ter, ail cól iu béc",
    ["That", " was", " fast!", " Thanks.", " When", " things", " get", " bet", "ter,", " I'll", " call", " you", " back."],
    "That was fast! Thanks. When things get better, I'll call you back.",
    "Foi rápido! Obrigado. Quando as coisas melhorarem, ligarei novamente."
  ],
  [
    "It was my pleasure to help you, sir.",
    "Foi um prazer ajudá-lo, senhor.",
    "/ɪt wʌz maɪ ˈplɛʒər tu hɛlp ju, sɜr/",
    "ít uâz mái plé-jur tchu rélp iu, sêr",
    ["It", " was", " my", " pleas", "ure", " to", " help", " you,", " sir."],
    "It was my pleasure to help you, sir.",
    "Foi um prazer ajudá-lo, senhor."
  ],
  [
    "Thank you.",
    "Obrigado.",
    "/θæŋk ju/",
    "θénc iu",
    ["Thank", " you."],
    "Thank you.",
    "Obrigado."
  ],
  [
    "I needed to book my flights to Greece.",
    "Eu precisei reservar meus voos para a Grécia.",
    "/aɪ ˈnidɪd tu bʊk maɪ flaɪts tu ɡris/",
    "ai nî-did tchu bûc mái fláits tchu grîs",
    ["I", " need", "ed", " to", " book", " my", " flights", " to", " Greece."],
    "I needed to book my flights to Greece.",
    "Eu precisei reservar meus voos para a Grécia."
  ],
  [
    "John traveled to Florida with his wife.",
    "John viajou para a Flórida com sua esposa.",
    "/dʒɑn ˈtrævəld tu ˈflɔrədə wɪð hɪz waɪf/",
    "djón trǽ-vôld tchu fló-ri-da uíð ríz uáif",
    ["John", " trav", "eled", " to", " Flor", "i", "da", " with", " his", " wife."],
    "John traveled to Florida with his wife.",
    "John viajou para a Flórida com sua esposa."
  ],
  [
    "We had breakfast in bed. It was amazing!",
    "Nós tomamos café da manhã na cama. Foi incrível!",
    "/wi hæd ˈbrɛkfəst ɪn bɛd. ɪt wʌz əˈmeɪzɪŋ/",
    "uí réd bréc-fâst ín béd. ít uâz a-mêi-zin",
    ["We", " had", " break", "fast", " in", " bed.", " It", " was", " a", "maz", "ing!"],
    "We had breakfast in bed. It was amazing!",
    "Nós tomamos café da manhã na cama. Foi incrível!"
  ],
  [
    "We stayed with my family in Brazil.",
    "Nós ficamos com minha família no Brasil.",
    "/wi steɪd wɪð maɪ ˈfæməli ɪn brəˈzɪl/",
    "uí estêid uíð mái fǽ-mi-li ín bra-zíl",
    ["We", " stayed", " with", " my", " fam", "i", "ly", " in", " Bra", "zil."],
    "We stayed with my family in Brazil.",
    "Nós ficamos com minha família no Brasil."
  ],
  [
    "Emma needed to check the arrival time.",
    "Emma precisou verificar o horário de chegada.",
    "/ˈɛmə ˈnidɪd tu tʃɛk ði əˈraɪvəl taɪm/",
    "é-ma nî-did tchu tchéc ðî a-rái-vôl táim",
    ["Em", "ma", " need", "ed", " to", " check", " the", " ar", "ri", "val", " time."],
    "Emma needed to check the arrival time.",
    "Emma precisou verificar o horário de chegada."
  ],
  [
    "My sister and I traveled to Morocco first class.",
    "Minha irmã e eu viajamos para Marrocos na primeira classe.",
    "/maɪ ˈsɪstər ænd aɪ ˈtrævəld tu məˈrɑːkoʊ fɜrst klæs/",
    "mái sís-ter énd ai trǽ-vôld tchu ma-ró-cou fêrst clés",
    ["My", " sis", "ter", " and", " I", " trav", "eled", " to", " Mo", "roc", "co", " first", " class."],
    "My sister and I traveled to Morocco first class.",
    "Minha irmã e eu viajamos para Marrocos na primeira classe."
  ],
  [
    "The travel agency needed to find my boarding pass.",
    "A agência de viagens precisou encontrar meu cartão de embarque.",
    "/ðə ˈtrævəl ˈeɪdʒənsi ˈnidɪd tu faɪnd maɪ ˈbɔrdɪŋ pæs/",
    "ðâ trǽ-vôl êi-djen-si nî-did tchu fáind mái bór-din pés",
    ["The", " trav", "el", " a", "gen", "cy", " need", "ed", " to", " find", " my", " board", "ing", " pass."],
    "The travel agency needed to find my boarding pass.",
    "A agência de viagens precisou encontrar meu cartão de embarque."
  ],
  [
    "Max needed to know where the baggage drop was.",
    "Max precisou saber onde ficava o despacho de bagagem.",
    "/mæks ˈnidɪd tu noʊ wɛr ðə ˈbæɡɪdʒ drɑp wʌz/",
    "mécs nî-did tchu nôu uêr ðâ bǽ-guidj dróp uâz",
    ["Max", " need", "ed", " to", " know", " where", " the", " bag", "gage", " drop", " was."],
    "Max needed to know where the baggage drop was.",
    "Max precisou saber onde ficava o despacho de bagagem."
  ],
  [
    "He wanted to make a reservation in that restaurant.",
    "Ele quis fazer uma reserva naquele restaurante.",
    "/hi ˈwɑntɪd tu meɪk ə ˌrɛzərˈveɪʃən ɪn ðæt ˈrɛstəˌrɑnt/",
    "ri uón-tid tchu mêic a ré-zer-vêi-chôn ín ðét rés-to-ránt",
    ["He", " want", "ed", " to", " make", " a", " res", "er", "va", "tion", " in", " that", " res", "tau", "rant."],
    "He wanted to make a reservation in that restaurant.",
    "Ele quis fazer uma reserva naquele restaurante."
  ],
  [
    "We had accommodation to stay at the beach.",
    "Nós tínhamos hospedagem para ficar na praia.",
    "/wi hæd əˌkɑməˈdeɪʃən tu steɪ æt ðə bitʃ/",
    "uí réd a-có-mo-dêi-shân tchu estêi ét ðâ bîtch",
    ["We", " had", " ac", "com", "mo", "da", "tion", " to", " stay", " at", " the", " beach."],
    "We had accommodation to stay at the beach.",
    "Nós tínhamos hospedagem para ficar na praia."
  ],
  [
    "Last summer I went on holiday with my husband.",
    "No verão passado eu fui viajar com meu marido.",
    "/læst ˈsʌmər aɪ wɛnt ɑn ˈhɑləˌdeɪ wɪð maɪ ˈhʌzbənd/",
    "lést sâ-mer ai uént ón ró-li-dêi uíð mái râz-bând",
    ["Last", " sum", "mer", " I", " went", " on", " hol", "i", "day", " with", " my", " hus", "band."],
    "Last summer I went on holiday with my husband.",
    "No verão passado eu fui viajar com meu marido."
  ],
  [
    "He was very excited about the trip.",
    "Ele estava muito animado com a viagem.",
    "/hi wʌz ˈvɛri ɪkˈsaɪtəd əˈbaʊt ðə trɪp/",
    "ri uâz vé-ri ic-sái-tid a-báut ðâ tríp",
    ["He", " was", " ve", "ry", " ex", "cit", "ed", " a", "bout", " the", " trip."],
    "He was very excited about the trip.",
    "Ele estava muito animado com a viagem."
  ],
  [
    "He wanted to visit the cathedral and the zoo on the first day.",
    "Ele queria visitar a catedral e o zoológico no primeiro dia.",
    "/hi ˈwɑntɪd tu ˈvɪzɪt ðə kəˈθidrəl ænd ðə zu ɑn ðə fɜrst deɪ/",
    "ri uón-tid tchu ví-zit ðâ ca-θî-drôl énd ðâ zû ón ðâ fêrst dêi",
    ["He", " want", "ed", " to", " vis", "it", " the", " ca", "the", "dral", " and", " the", " zoo", " on", " the", " first", " day."],
    "He wanted to visit the cathedral and the zoo on the first day.",
    "Ele queria visitar a catedral e o zoológico no primeiro dia."
  ],
  [
    "I wanted to eat the local cuisine, so we went to a typical restaurant in the evening.",
    "Eu queria experimentar a culinária local, então fomos a um restaurante típico à noite.",
    "/aɪ ˈwɑntɪd tu iːt ðə ˈloʊkəl kwɪˈzin, soʊ wi wɛnt tu ə ˈtɪpɪkəl ˈrɛstəˌrɑnt ɪn ði ˈivnɪŋ/",
    "ai uón-tid tchu ît ðâ lôu-côl cui-zîn, sôu uí uént tchu a tí-pi-côl rés-to-ránt ín ðî îv-nin",
    ["I", " want", "ed", " to", " eat", " the", " lo", "cal", " cui", "sine,", " so", " we", " went", " to", " a", " typ", "i", "cal", " res", "tau", "rant", " in", " the", " eve", "ning."],
    "I wanted to eat the local cuisine, so we went to a typical restaurant in the evening.",
    "Eu queria experimentar a culinária local, então fomos a um restaurante típico à noite."
  ],
  [
    "On the second day we visited an art gallery and the opera house.",
    "No segundo dia visitamos uma galeria de arte e a casa de ópera.",
    "/ɑn ðə ˈsɛkənd deɪ wi ˈvɪzɪtɪd ən ɑrt ˈɡæləri ænd ðə ˈɑpərə haʊs/",
    "ón ðâ sé-când dêi uí ví-zi-tid én árt gǽ-lâ-ri énd ðâ ó-pâ-ra ráus",
    ["On", " the", " sec", "ond", " day", " we", " vis", "it", "ed", " an", " art", " gal", "ler", "y", " and", " the", " op", "er", "a", " house."],
    "On the second day we visited an art gallery and the opera house.",
    "No segundo dia visitamos uma galeria de arte e a casa de ópera."
  ],
  [
    "It was amazing! After that, we ate pizza at a pizza place and went to the hotel because we were very tired.",
    "Foi incrível! Depois disso, comemos pizza em uma pizzaria e fomos para o hotel porque estávamos muito cansados.",
    "/ɪt wʌz əˈmeɪzɪŋ! ˈæftər ðæt, wi eɪt ˈpitsə æt ə ˈpitsə pleɪs ænd wɛnt tu ðə hoʊˈtɛl bɪˈkɔz wi wɜr ˈvɛri ˈtaɪərd/",
    "id uâz a-mêi-zin! áf-ter ðét, uí êit pî-tsa ét a pî-tsa plêis énd uént tchu ðâ rou-tél bi-cóz uí uêr vé-ri tái-erd",
    ["It", " was", " a", "maz", "ing!", " Af", "ter", " that,", " we", " ate", " piz", "za", " at", " a", " piz", "za", " place", " and", " went", " to", " the", " ho", "tel", " be", "cause", " we", " were", " ve", "ry", " tired."],
    "It was amazing! After that, we ate pizza at a pizza place and went to the hotel because we were very tired.",
    "Foi incrível! Depois disso, comemos pizza em uma pizzaria e foi para o hotel porque estávamos muito cansados."
  ],
  [
    "We had a lot of fun on our trip together!",
    "Nós nos divertimos muito em nossa viagem juntos!",
    "/wi hæd ə lɑt ʌv fʌn ɑn ˈaʊər trɪp təˈɡeðər/",
    "uí réd a lót âv fân ón áu-er tríp tû-gué-ðer",
    ["We", " had", " a", " lot", " of", " fun", " on", " our", " trip", " to", "geth", "er!"],
    "We had a lot of fun on our trip together!",
    "Nós nos divertimos muito em nossa viagem juntos!"
  ]
];

export const LESSON_83_DECK: FlashcardData[] = RAW_CARDS.map((item, idx) => ({
  id: 'lesson_83_' + (idx + 1),
  word: item[0],
  translation: item[1],
  pronunciation: item[2],
  portuguesePhonetic: item[3],
  syllables: item[4],
  exampleSentence: item[5],
  exampleTranslation: item[6],
}));
