const fs = require('fs');

const rawText = `Monday — segunda-feira
IPA: /ˈmʌndeɪ/ · PT: [mândei]
Tuesday — terça-feira
IPA: /ˈtuːzdeɪ/ · PT: [túzdei]
Wednesday — quarta-feira
IPA: /ˈwɛnzdeɪ/ · PT: [uénzdei]
Thursday — quinta-feira
IPA: /ˈθɜːrzdeɪ/ · PT: [thârzdei]
Friday — sexta-feira
IPA: /ˈfraɪdeɪ/ · PT: [fráidei]
Saturday — sábado
IPA: /ˈsætərdeɪ/ · PT: [séterdei]
Sunday — domingo
IPA: /ˈsʌndeɪ/ · PT: [sândei]

Os meses do ano
8. January — janeiro
IPA: /ˈdʒænjueri/ · PT: [djéniueri]
9. February — fevereiro
IPA: /ˈfɛbrueri/ · PT: [fébrueri]
10. March — março
IPA: /mɑːrtʃ/ · PT: [mártch]
11. April — abril
IPA: /ˈeɪprəl/ · PT: [êiprou]
12. May — maio
IPA: /meɪ/ · PT: [mêi]
13. June — junho
IPA: /dʒuːn/ · PT: [djún]
14. July — julho
IPA: /dʒuˈlaɪ/ · PT: [djulái]
15. August — agosto
IPA: /ˈɔːɡəst/ · PT: [ógast]
16. September — setembro
IPA: /sɛpˈtɛmbər/ · PT: [septémber]
17. October — outubro
IPA: /ɑːkˈtoʊbər/ · PT: [aktôuber]
18. November — novembro
IPA: /noʊˈvɛmbər/ · PT: [novémber]
19. December — dezembro
IPA: /dɪˈsɛmbər/ · PT: [dissémber]

As quatro estações
20. Winter — inverno
IPA: /ˈwɪntər/ · PT: [uínter]
21. Spring — primavera
IPA: /sprɪŋ/ · PT: [sprín]
22. Summer — verão
IPA: /ˈsʌmər/ · PT: [sâmer]
23. Fall / Autumn — outono (US / UK)
IPA: /fɔːl · ˈɔːtəm/ · PT: [fól · ótam]

Palavras úteis de tempo
24. the weekend — o fim de semana
IPA: /ðə ˈwiːkɛnd/ · PT: [dha uíkend]
25. today — hoje
IPA: /təˈdeɪ/ · PT: [tudêi]

26. I work on Monday. — Eu trabalho na segunda.
IPA: /aɪ wɜːrk ɑːn ˈmʌndeɪ/ · PT: [ái uârk ón mândei]
27. I have a meeting on Tuesday. — Eu tenho uma reunião na terça.
IPA: /aɪ hæv ə ˈmiːtɪŋ ɑːn ˈtuːzdeɪ/ · PT: [ái rrév a mítin ón túzdei]
28. We rest on Sunday. — Nós descansamos no domingo.
IPA: /wiː rɛst ɑːn ˈsʌndeɪ/ · PT: [uí rést ón sândei]
29. The party is on Saturday. — A festa é no sábado.
IPA: /ðə ˈpɑːrti ɪz ɑːn ˈsætərdeɪ/ · PT: [dha párti iz ón séterdei]
30. See you on Friday. — Te vejo na sexta.
IPA: /siː juː ɑːn ˈfraɪdeɪ/ · PT: [sí iú ón fráidei]

Marcando datas
31. My birthday is in May. — Meu aniversário é em maio.
IPA: /maɪ ˈbɜːrθdeɪ ɪz ɪn meɪ/ · PT: [mái bârthdei iz in mêi]
32. The course starts in September. — O curso começa em setembro.
IPA: /ðə kɔːrs stɑːrts ɪn sɛpˈtɛmbər/ · PT: [dha kórs stárts in septémber]
33. We travel in July. — Nós viajamos em julho.
IPA: /wiː ˈtrævl̩ ɪn dʒuˈlaɪ/ · PT: [uí trévou in djulái]
34. The appointment is on March 5th. — A consulta é no dia 5 de março.
IPA: /ðə əˈpɔɪntmənt ɪz ɑːn mɑːrtʃ fɪfθ/ · PT: [dhi apóintment iz ón mártch fífth]

Clima e estações
35. It's cold in winter. — Faz frio no inverno.
IPA: /ɪts koʊld ɪn ˈwɪntər/ · PT: [íts kôuld in uínter]
36. Flowers bloom in spring. — As flores florescem na primavera.
IPA: /ˈflaʊərz bluːm ɪn sprɪŋ/ · PT: [fláuerz blúm in sprín]
37. We go to the beach in summer. — Nós vamos à praia no verão.
IPA: /wiː ɡoʊ tə ðə biːtʃ ɪn ˈsʌmər/ · PT: [uí gôu tu dha bítch in sâmer]
38. Leaves fall in autumn. — As folhas caem no outono.
IPA: /liːvz fɔːl ɪn ˈɔːtəm/ · PT: [lívz fól in ótam]

Fim de semana e planos
39. What are you doing this weekend? — O que você vai fazer neste fim de semana?
IPA: /wʌt ɑːr juː ˈduːɪŋ ðɪs ˈwiːkɛnd/ · PT: [uât ár iú dúin dhís uíkend]
40. Let's meet next week. — Vamos nos encontrar na semana que vem.
IPA: /lɛts miːt nɛkst wiːk/ · PT: [léts mít nékst uík]
41. I'm free on Thursday. — Eu estou livre na quinta.
IPA: /aɪm friː ɑːn ˈθɜːrzdeɪ/ · PT: [áim frí ón thârzdei]

Feriados e eventos
42. Christmas is in December. — O Natal é em dezembro.
IPA: /ˈkrɪsməs ɪz ɪn dɪˈsɛmbər/ · PT: [krísmas iz in dissémber]
43. The new year starts in January. — O ano novo começa em janeiro.
IPA: /ðə nuː jɪr stɑːrts ɪn ˈdʒænjueri/ · PT: [dha niú íir stárts in djéniueri]
44. School ends in June. — A escola termina em junho.
IPA: /skuːl ɛndz ɪn dʒuːn/ · PT: [skúl éndz in djún]

Hoje, amanhã, ontem
45. Today is Wednesday. — Hoje é quarta-feira.
IPA: /təˈdeɪ ɪz ˈwɛnzdeɪ/ · PT: [tudêi iz uénzdei]
46. Tomorrow is Friday. — Amanhã é sexta.
IPA: /təˈmɑːroʊ ɪz ˈfraɪdeɪ/ · PT: [tumárou iz fráidei]
47. Yesterday was Monday. — Ontem foi segunda.
IPA: /ˈjɛstərdeɪ wəz ˈmʌndeɪ/ · PT: [iéster dei uâz mândei]

Combinando
48. I have classes on Tuesday and Thursday. — Eu tenho aulas na terça e na quinta.
IPA: /aɪ hæv ˈklæsɪz ɑːn ˈtuːzdeɪ ænd ˈθɜːrzdeɪ/ · PT: [ái rrév klésiz ón túzdei énd thârzdei]
49. The store is closed on Sundays. — A loja fecha aos domingos.
IPA: /ðə stɔːr ɪz kloʊzd ɑːn ˈsʌndeɪz/ · PT: [dha stór iz klôuzd ón sândeiz]
50. Summer is my favorite season. — O verão é minha estação favorita.
IPA: /ˈsʌmər ɪz maɪ ˈfeɪvərɪt ˈsiːzn̩/ · PT: [sâmer iz mái fêivorit sízan]

51. Today is Monday. — Hoje é segunda.
IPA: /təˈdeɪ ɪz ˈmʌndeɪ/ · PT: [tudêi iz mândei]
52. I like summer. — Eu gosto do verão.
IPA: /aɪ laɪk ˈsʌmər/ · PT: [ái láik sâmer]
53. My birthday is in April. — Meu aniversário é em abril.
IPA: /maɪ ˈbɜːrθdeɪ ɪz ɪn ˈeɪprəl/ · PT: [mái bârthdei iz in êiprou]
54. We rest on weekends. — Nós descansamos nos fins de semana.
IPA: /wiː rɛst ɑːn ˈwiːkɛndz/ · PT: [uí rést ón uíkendz]

Um pouco mais
55. The weekend starts on Saturday. — O fim de semana começa no sábado.
IPA: /ðə ˈwiːkɛnd stɑːrts ɑːn ˈsætərdeɪ/ · PT: [dha uíkend stárts ón séterdei]
56. Winter is colder than autumn. — O inverno é mais frio que o outono.
IPA: /ˈwɪntər ɪz ˈkoʊldər ðæn ˈɔːtəm/ · PT: [uínter iz kôulder dhén ótam]
57. What day is it today? — Que dia é hoje?
IPA: /wʌt deɪ ɪz ɪt təˈdeɪ/ · PT: [uât dêi iz ít tudêi]
58. I don't work on Fridays. — Eu não trabalho às sextas.
IPA: /aɪ doʊnt wɜːrk ɑːn ˈfraɪdeɪz/ · PT: [ái dôunt uârk ón fráideiz]

Perguntas e negações
59. When is your birthday? — Quando é seu aniversário?
IPA: /wɛn ɪz jɔːr ˈbɜːrθdeɪ/ · PT: [uén iz iór bârthdei]
60. Does the course start in September? — O curso começa em setembro?
IPA: /dʌz ðə kɔːrs stɑːrt ɪn sɛpˈtɛmbər/ · PT: [dâz dha kórs stárt in septémber]
61. It isn't summer yet. — Ainda não é verão.
IPA: /ɪt ˈɪznt ˈsʌmər jɛt/ · PT: [ít íznt sâmer iét]
62. Why do you like spring? — Por que você gosta da primavera?
IPA: /waɪ duː juː laɪk sprɪŋ/ · PT: [uái dú iú láik sprín]

Conectores e tempos verbais
63. I love summer because it's warm. — Eu amo o verão porque é quente.
IPA: /aɪ lʌv ˈsʌmər bɪˈkɔːz ɪts wɔːrm/ · PT: [ái lâv sâmer bikóz íts uórm]
64. We are traveling in August. — Nós vamos viajar em agosto.
IPA: /wiː ɑːr ˈtrævl̩ɪŋ ɪn ˈɔːɡəst/ · PT: [uí ár trévolin in ógast]
65. It snowed last winter. — Nevou no inverno passado.
IPA: /ɪt snoʊd læst ˈwɪntər/ · PT: [ít snôud lést uínter]
66. I was born in October. — Eu nasci em outubro.
IPA: /aɪ wəz bɔːrn ɪn ɑːkˈtoʊbər/ · PT: [ái uâz bórn in aktôuber]
67. When spring comes, the days get longer. — Quando a primavera llega, os dias ficam mais longos.
IPA: /wɛn sprɪŋ kʌmz ðə deɪz ɡɛt ˈlɔːŋɡər/ · PT: [uén sprín kâmz dha dêiz guét lóNguer]

As mais ricas
68. My favorite month is December because of Christmas. — Meu mês favorito é dezembro por causa do Natal.
IPA: /maɪ ˈfeɪvərɪt mʌnθ ɪz dɪˈsɛmbər bɪˈkɔːz əv ˈkrɪsməs/ · PT: [mái fêivorit mânth iz dissémber bikóz ov krísmas]
69. We usually go on vacation in July, but this year we'll go in August. — Geralmente viajamos em julho, mas este ano vamos em agosto.
IPA: /wiː ˈjuːʒuəli ɡoʊ ɑːn veɪˈkeɪʃn̩ ɪn dʒuˈlaɪ bʌt ðɪs jɪr wiːl ɡoʊ ɪn ˈɔːɡəst/ · PT: [uí iújuali gôu ón veikêichan in djulái bât dhís íir uíou gôu in ógast]
70. Although it's spring, the weather is still cold. — Embora seja primavera, o tempo ainda está frio.
IPA: /ɔːlˈðoʊ ɪts sprɪŋ ðə ˈwɛðər ɪz stɪl koʊld/ · PT: [oldhôu íts sprín dha uédher iz stíou kôuld]
71. The meeting was on Monday, but it's now on Wednesday. — A reunião era na segunda, mas agora é na quarta.
IPA: /ðə ˈmiːtɪŋ wəz ɑːn ˈmʌndeɪ bʌt ɪts naʊ ɑːn ˈwɛnzdeɪ/ · PT: [dha mítin uâz ón mândei bât íts náu ón uénzdei]
72. I don't like winter because the days are short and dark. — Eu não gosto do inverno porque os dias são curtos e escuros.
IPA: /aɪ doʊnt laɪk ˈwɪntər bɪˈkɔːz ðə deɪz ɑːr ʃɔːrt ænd dɑːrk/ · PT: [ái dôunt láik uínter bikóz dha dêiz ár chórt énd dárk]
73. Do you know which months have thirty-one days? — Você sabe quais meses têm trinta e um dias?
IPA: /duː juː noʊ wɪtʃ mʌnθs hæv ˈθɜːrti wʌn deɪz/ · PT: [dú iú nôu uítch mânths rrév thârti uân dêiz]
74. We met in the summer of 2019, and we married in spring. — Nós nos conhecemos no verão de 2019 e nos casamos na primavera.
IPA: /wiː mɛt ɪn ðə ˈsʌmər əv ... ænd wiː ˈmɛrid ɪn sprɪŋ/ · PT: [uí mét in dha sâmer ov ... énd uí mérid in sprín]
75. School starts in September and finishes in June. — A escola começa em setembro e termina em junho.
IPA: /skuːl stɑːrts ɪn sɛpˈtɛmbər ænd ˈfɪnɪʃɪz ɪn dʒuːn/ · PT: [skúl stárts in septémber énd fínichiz in djún]

"What day is it today?" / "It's Tuesday." — "Que dia é hoje?" / "É terça."
IPA: /wʌt deɪ ɪz ɪt təˈdeɪ · ɪts ˈtuːzdeɪ/ · PT: [uât dêi iz ít tudêi · íts túzdei]
"When is your birthday?" / "In May." — "Quando é seu aniversário?" / "Em maio."
IPA: /wɛn ɪz jɔːr ˈbɜːrθdeɪ · ɪn meɪ/ · PT: [uén iz iór bârthdei · in mêi]
"What's your favorite season?" / "Summer." — "Qual é sua estação favorita?" / "O verão."
IPA: /wʌts jɔːr ˈfeɪvərɪt ˈsiːzn̩ · ˈsʌmər/ · PT: [uâts iór fêivorit sízan · sâmer]
"Do you work on Saturdays?" / "No, I don't." — "Você trabalha aos sábados?" / "Não, não trabalho."
IPA: /duː juː wɜːrk ɑːn ˈsætərdeɪz · noʊ aɪ doʊnt/ · PT: [dú iú uârk ón séterdeiz · nôu ái dôunt]
"When does the course start?" / "In September." — "Quando o curso começa?" / "Em setembro."
IPA: /wɛn dʌz ðə kɔːrs stɑːrt · ɪn sɛpˈtɛmbər/ · PT: [uén dâz dha kórs stárt · in septémber]
"Is the party on Friday?" / "No, on Saturday." — "A festa é na sexta?" / "Não, no sábado."
IPA: /ɪz ðə ˈpɑːrti ɑːn ˈfraɪdeɪ · noʊ ɑːn ˈsætərdeɪ/ · PT: [iz dha párti ón fráidei · nôu ón séterdei]
"What month is it?" / "It's March." — "Que mês é?" / "É março."
IPA: /wʌt mʌnθ ɪz ɪt · ɪts mɑːrtʃ/ · PT: [uât mânth iz ít · íts mártch]
"Do you like winter?" / "No, it's too cold." — "Você gosta do inverno?" / "Não, é frio demais."
IPA: /duː juː laɪk ˈwɪntər · noʊ ɪts tuː koʊld/ · PT: [dú iú láik uínter · nôu íts tú kôuld]
"When do we travel?" / "In July." — "Quando viajamos?" / "Em julho."
IPA: /wɛn duː wiː ˈtrævl̩ · ɪn dʒuˈlaɪ/ · PT: [uén dú uí trévou · in djulái]
"Is today Wednesday?" / "No, it's Thursday." — "Hoje é quarta?" / "Não, é quinta."
IPA: /ɪz təˈdeɪ ˈwɛnzdeɪ · noʊ ɪts ˈθɜːrzdeɪ/ · PT: [iz tudêi uénzdei · nôu íts thârzdei]
"What are your plans for the weekend?" / "I'm relaxing." — "Quais são seus planos pro fim de semana?" / "Vou relaxar."
IPA: /wʌt ɑːr jɔːr plænz fɔːr ðə ˈwiːkɛnd · aɪm rɪˈlæksɪŋ/ · PT: [uât ár iór plénz fór dha uíkend · áim riléksin]
"When is Christmas?" / "In December." — "Quando é o Natal?" / "Em dezembro."
IPA: /wɛn ɪz ˈkrɪsməs · ɪn dɪˈsɛmbər/ · PT: [uén iz krísmas · in dissémber]
"Are you free on Monday?" / "Yes, I am." — "Você está livre na segunda?" / "Sim, estou."
IPA: /ɑːr juː friː ɑːn ˈmʌndeɪ · jɛs aɪ æm/ · PT: [ár iú frí ón mândei · iés ái ém]
"Which season do you prefer?" / "Spring." — "Que estação você prefere?" / "A primavera."
IPA: /wɪtʃ ˈsiːzn̩ duː juː prɪˈfɜːr · sprɪŋ/ · PT: [uítch sízan dú iú priférr · sprín]
"Is it summer in Brazil now?" / "Yes, it is." — "É verão no Brasil agora?" / "Sim, é."
IPA: /ɪz ɪt ˈsʌmər ɪn brəˈzɪl naʊ · jɛs ɪt ɪz/ · PT: [iz ít sâmer in brazíou náu · iés ít iz]
"What time is the meeting on Tuesday?" / "At ten." — "A que horas é a reunião de terça?" / "Às dez."
IPA: /wʌt taɪm ɪz ðə ˈmiːtɪŋ ɑːn ˈtuːzdeɪ · æt tɛn/ · PT: [uât táim iz dha mítin ón túzdei · ét tén]
"When were you born?" / "In October." — "Quando você nasceu?" / "Em outubro."
IPA: /wɛn wɜːr juː bɔːrn · ɪn ɑːkˈtoʊbər/ · PT: [uén uâr iú bórn · in aktôuber]
"Do flowers bloom in spring?" / "Yes, they do." — "As flores florescem na primavera?" / "Sim, florescem."
IPA: /duː ˈflaʊərz bluːm ɪn sprɪŋ · jɛs ðeɪ duː/ · PT: [dú fláuerz blúm in sprín · iés dhêi dú]
"Is the store open on Sundays?" / "No, it's closed." — "A loja abre aos domingos?" / "Não, fica fechada."
IPA: /ɪz ðə stɔːr ˈoʊpən ɑːn ˈsʌndeɪz · noʊ ɪts kloʊzd/ · PT: [iz dha stór ôupan ón sândeiz · nôu íts klôuzd]
"When does school end?" / "In June." — "Quando a escola termina?" / "Em junho."
IPA: /wɛn dʌz skuːl ɛnd · ɪn dʒuːn/ · PT: [uén dâz skúl énd · in djún]
"What's the first month of the year?" / "January." — "Qual é o primeiro mês do ano?" / "Janeiro."
IPA: /wʌts ðə fɜːrst mʌnθ əv ðə jɪr · ˈdʒænjueri/ · PT: [uâts dha fârst mânth ov dha íir · djéniueri]
"Do you prefer summer or winter?" / "Summer." — "Você prefere verão ou inverno?" / "Verão."
IPA: /duː juː prɪˈfɜːr ˈsʌmər ɔːr ˈwɪntər · ˈsʌmər/ · PT: [dú iú priférr sâmer ór uínter · sâmer]
"Is autumn cold here?" / "A little." — "O outono é frio aqui?" / "Um pouco."
IPA: /ɪz ˈɔːtəm koʊld hɪr · ə ˈlɪtl̩/ · PT: [iz ótam kôuld rrír · a lítou]
"When is the new year?" / "On January 1st." — "Quando é o ano novo?" / "No dia 1º de janeiro."
IPA: /wɛn ɪz ðə nuː jɪr · ɑːn ˈdʒænjueri fɜːrst/ · PT: [uén iz dha niú íir · ón djéniueri fârst]
"See you next week?" / "Yes, on Monday." — "Te vejo na semana que vem?" / "Sim, na segunda."
IPA: /siː juː nɛkst wiːk · jɛs ɑːn ˈmʌndeɪ/ · PT: [sí iú nékst uík · iés ón mândei]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;
let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (!line.startsWith('IPA:') && line.includes('—')) {
    let originalLine = line.replace(/^\d+\.\s*/, '');
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `lesson_6_vocabulary_a1_en_card_${index++}`,
      word,
      translation,
      pronunciation: '',
      portuguesePhonetic: ''
    };
    cards.push(currentCard);
  } else if (line.startsWith('IPA:')) {
    const parts = line.split('· PT:');
    let ipaPart = parts[0].replace('IPA:', '').trim();
    let ptPart = parts[1] ? parts[1].trim() : '';
    if (currentCard) {
      currentCard.pronunciation = ipaPart;
      currentCard.portuguesePhonetic = ptPart;
    }
  }
}

const fileDest = 'public/decks/lesson_6_vocabulary_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_6_vocabulary_a1'] = meta['lesson_6_vocabulary_a1'] || {};
meta['lesson_6_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
