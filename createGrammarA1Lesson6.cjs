const fs = require('fs');

const rawText = `I work — Eu trabalho
IPA: /aɪ wɜːrk/ · PT: [ái uârk]
You work — Você trabalha
IPA: /juː wɜːrk/ · PT: [iú uârk]
He works — Ele trabalha
IPA: /hiː wɜːrks/ · PT: [rrí uârks]
She works — Ela trabalha
IPA: /ʃiː wɜːrks/ · PT: [chí uârks]
It works — Funciona (coisa)
IPA: /ɪt wɜːrks/ · PT: [ít uârks]
We work — Nós trabalhamos
IPA: /wiː wɜːrk/ · PT: [uí uârk]
They work — Eles trabalham
IPA: /ðeɪ wɜːrk/ · PT: [dhêi uârk]

Negativa (don't / doesn't)
8. I don't work — Eu não trabalho
IPA: /aɪ doʊnt wɜːrk/ · PT: [ái dôunt uârk]
9. You don't work — Você não trabalha
IPA: /juː doʊnt wɜːrk/ · PT: [iú dôunt uârk]
10. He doesn't work — Ele não trabalha
IPA: /hiː ˈdʌznt wɜːrk/ · PT: [rrí dâznt uârk]
11. She doesn't work — Ela não trabalha
IPA: /ʃiː ˈdʌznt wɜːrk/ · PT: [chí dâznt uârk]
12. It doesn't work — Não funciona
IPA: /ɪt ˈdʌznt wɜːrk/ · PT: [ít dâznt uârk]
13. We don't work — Nós não trabalhamos
IPA: /wiː doʊnt wɜːrk/ · PT: [uí dôunt uârk]
14. They don't work — Eles não trabalham
IPA: /ðeɪ doʊnt wɜːrk/ · PT: [dhêi dôunt uârk]

Interrogativa (do / does)
15. Do I work? — Eu trabalho?
IPA: /duː aɪ wɜːrk/ · PT: [dú ái uârk]
16. Do you work? — Você trabalha?
IPA: /duː juː wɜːrk/ · PT: [dú iú uârk]
17. Does he work? — Ele trabalha?
IPA: /dʌz hiː wɜːrk/ · PT: [dâz rrí uârk]
18. Does she work? — Ela trabalha?
IPA: /dʌz ʃiː wɜːrk/ · PT: [dâz chí uârk]
19. Do we work? — Nós trabalhamos?
IPA: /duː wiː wɜːrk/ · PT: [dú uí uârk]
20. Do they work? — Eles trabalham?
IPA: /duː ðeɪ wɜːrk/ · PT: [dú dhêi uârk]

Respostas curtas
21. Yes, I do. — Sim. (eu trabalho)
IPA: /jɛs aɪ duː/ · PT: [iés ái dú]
22. Yes, he does. — Sim. (ele trabalha)
IPA: /jɛs hiː dʌz/ · PT: [iés rrí dâz]
23. No, I don't. — Não. (eu não trabalho)
IPA: /noʊ aɪ doʊnt/ · PT: [nôu ái dôunt]
24. No, he doesn't. — Não. (ele não trabalha)
IPA: /noʊ hiː ˈdʌznt/ · PT: [nôu rrí dâznt]
25. He doesn't work. — Ele não trabalha. (regra: depois de doesn't o verbo perde o -s)
IPA: /hiː ˈdʌznt wɜːrk/ · PT: [rrí dâznt uârk]

26. I work in an office. — Eu trabalho num escritório.
IPA: /aɪ wɜːrk ɪn ən ˈɔːfɪs/ · PT: [ái uârk in an ófis]
27. She works in a hospital. — Ela trabalha num hospital.
IPA: /ʃiː wɜːrks ɪn ə ˈhɑːspɪtl̩/ · PT: [chí uârks in a rráspitou]
28. He starts at nine. — Ele começa às nove.
IPA: /hiː stɑːrts æt naɪn/ · PT: [rrí stárts ét náin]
29. We finish at five. — Nós terminamos às cinco.
IPA: /wiː ˈfɪnɪʃ æt faɪv/ · PT: [uí fínich ét fáiv]
30. They work from home. — Eles trabalham de casa.
IPA: /ðeɪ wɜːrk frəm hoʊm/ · PT: [dhêi uârk from rrôum]

De manhã / hábitos
31. I wake up early. — Eu acordo cedo.
IPA: /aɪ weɪk ʌp ˈɜːrli/ · PT: [ái uêik âp ârli]
32. She drinks coffee every morning. — Ela toma café toda manhã.
IPA: /ʃiː drɪŋks ˈkɔːfi ˈɛvri ˈmɔːrnɪŋ/ · PT: [chí drínks kófi évri mórnin]
33. He takes the bus to work. — Ele pega o ônibus para o trabalho.
IPA: /hiː teɪks ðə bʌs tə wɜːrk/ · PT: [rrí têiks dha bâs tu uârk]
34. We have breakfast together. — Nós tomamos café da manhã juntos.
IPA: /wiː hæv ˈbrɛkfəst təˈɡɛðər/ · PT: [uí rrév brékfest tuguédher]

Tempo livre / hobbies
35. I play soccer on weekends. — Eu jogo futebol nos fins de semana.
IPA: /aɪ pleɪ ˈsɑːkər ɑːn ˈwiːkɛndz/ · PT: [ái plêi sáker ón uíkendz]
36. She reads before bed. — Ela lê antes de dormir.
IPA: /ʃiː riːdz bɪˈfɔːr bɛd/ · PT: [chí rídz bifór béd]
37. He watches TV at night. — Ele assiste TV à noite.
IPA: /hiː ˈwɑːtʃɪz ˌtiːˈviː æt naɪt/ · PT: [rrí uátchiz ti-ví ét náit]
38. They go to the gym. — Eles vão à academia.
IPA: /ðeɪ ɡoʊ tə ðə dʒɪm/ · PT: [dhêi gôu tu dha djím]

Perguntas do dia a dia
39. Do you live near here? — Você mora perto daqui?
IPA: /duː juː lɪv nɪr hɪr/ · PT: [dú iú lív nír rrír]
40. Does she speak English? — Ela fala inglês?
IPA: /dʌz ʃiː spiːk ˈɪŋɡlɪʃ/ · PT: [dâz chí spík ínglich]
41. What time do you start work? — A que horas você começa a trabalhar?
IPA: /wʌt taɪm duː juː stɑːrt wɜːrk/ · PT: [uât táim dú iú stárt uârk]
42. Where does he live? — Onde ele mora?
IPA: /wɛr dʌz hiː lɪv/ · PT: [uér dâz rrí lív]

Negativas
43. I don't drink coffee. — Eu não tomo café.
IPA: /aɪ doʊnt drɪŋk ˈkɔːfi/ · PT: [ái dôunt drínk kófi]
44. He doesn't eat meat. — Ele não come carne.
IPA: /hiː ˈdʌznt iːt miːt/ · PT: [rrí dâznt ít mít]
45. We don't work on Sundays. — Nós não trabalhamos aos domingos.
IPA: /wiː doʊnt wɜːrk ɑːn ˈsʌndeɪz/ · PT: [uí dôunt uârk ón sândeiz]

Coisas / funcionamento
46. This phone doesn't work. — Este celular não funciona.
IPA: /ðɪs foʊn ˈdʌznt wɜːrk/ · PT: [dhís fôun dâznt uârk]
47. The elevator works now. — O elevador funciona agora.
IPA: /ðə ˈɛləveɪtər wɜːrks naʊ/ · PT: [dhi élaveiter uârks náu]
48. The store opens at eight. — A loja abre às oito.
IPA: /ðə stɔːr ˈoʊpənz æt eɪt/ · PT: [dha stór ôupanz ét êit]
49. It closes at ten. — Fecha às dez.
IPA: /ɪt ˈkloʊzɪz æt tɛn/ · PT: [ít klôuziz ét tén]
50. The train leaves on time. — O trem sai na hora.
IPA: /ðə treɪn liːvz ɑːn taɪm/ · PT: [dha trêin lívz ón táim]

51. I work every day. — Eu trabalho todo dia.
IPA: /aɪ wɜːrk ˈɛvri deɪ/ · PT: [ái uârk évri dêi]
52. She likes coffee. — Ela gosta de café.
IPA: /ʃiː laɪks ˈkɔːfi/ · PT: [chí láiks kófi]
53. He plays the guitar. — Ele toca violão.
IPA: /hiː pleɪz ðə ɡɪˈtɑːr/ · PT: [rrí plêiz dha guitár]
54. We study English. — Nós estudamos inglês.
IPA: /wiː ˈstʌdi ˈɪŋɡlɪʃ/ · PT: [uí stâdi ínglich]

Advérbios de frequência
55. I always wake up early. — Eu sempre acordo cedo.
IPA: /aɪ ˈɔːlweɪz weɪk ʌp ˈɜːrli/ · PT: [ái ólueiz uêik âp ârli]
56. She usually works late. — Ela geralmente trabalha até tarde.
IPA: /ʃiː ˈjuːʒuəli wɜːrks leɪt/ · PT: [chí iújuali uârks lêit]
57. He never eats breakfast. — Ele nunca toma café da manhã.
IPA: /hiː ˈnɛvər iːts ˈbrɛkfəst/ · PT: [rrí néver íts brékfest]
58. They often visit us. — Eles nos visitam com frequência.
IPA: /ðeɪ ˈɔːfn̩ ˈvɪzɪt ʌs/ · PT: [dhêi ófen vízit âs]

Perguntas e negações
59. Do you work on Saturdays? — Você trabalha aos sábados?
IPA: /duː juː wɜːrk ɑːn ˈsætərdeɪz/ · PT: [dú iú uârk ón séterdeiz]
60. Does he understand Spanish? — Ele entende espanhol?
IPA: /dʌz hiː ˌʌndərˈstænd ˈspænɪʃ/ · PT: [dâz rrí andersténd spénich]
61. She doesn't like the city. — Ela não gosta da cidade.
IPA: /ʃiː ˈdʌznt laɪk ðə ˈsɪti/ · PT: [chí dâznt láik dha síti]
62. Why does he work so much? — Por que ele trabalha tanto?
IPA: /waɪ dʌz hiː wɜːrk soʊ mʌtʃ/ · PT: [uái dâz rrí uârk sôu mâtch]

Conectores e tempos verbais
63. I work because I need money. — Eu trabalho porque preciso de dinheiro.
IPA: /aɪ wɜːrk bɪˈkɔːz aɪ niːd ˈmʌni/ · PT: [ái uârk bikóz ái níd mâni]
64. She studies when she has time. — Ela estuda quando tem tempo.
IPA: /ʃiː ˈstʌdiz wɛn ʃiː hæz taɪm/ · PT: [chí stâdiz uén chí rréz táim]
65. He works hard, but he earns little. — Ele trabalha duro, mas ganha pouco.
IPA: /hiː wɜːrks hɑːrd bʌt hiː ɜːrnz ˈlɪtl̩/ · PT: [rrí uârks rrárd bât rrí ârnz lítou]
66. We don't work on holidays, so we relax. — Não trabalhamos nos feriados, então relaxamos.
IPA: /wiː doʊnt wɜːrk ɑːn ˈhɑːlədeɪz soʊ wiː rɪˈlæks/ · PT: [uí dôunt uârk ón rráladeiz sôu uí riléks]
67. When the store opens, people go in. — Quando a loja abre, as pessoas entram.
IPA: /wɛn ðə stɔːr ˈoʊpənz ˈpiːpl̩ ɡoʊ ɪn/ · PT: [uén dha stór ôupanz pípou gôu ín]

As mais ricas
68. She works in a bank, but she wants to change jobs. — Ela trabalha num banco, mas quer mudar de emprego.
IPA: /ʃiː wɜːrks ɪn ə bæŋk bʌt ʃiː wɑːnts tə tʃeɪndʒ dʒɑːbz/ · PT: [chí uârks in a bénk bât chí uánts tu tchêindj djóbz]
69. He doesn't eat meat because he is vegetarian. — Ele não come carne porque é vegetariano.
IPA: /hiː ˈdʌznt iːt miːt bɪˈkɔːz hiː ɪz ˌvɛdʒəˈtɛriən/ · PT: [rrí dâznt ít mít bikóz rrí iz vedjetérian]
70. If it doesn't work, we'll call a technician. — Se não funcionar, vamos chamar um técnico.
IPA: /ɪf ɪt ˈdʌznt wɜːrk wiːl kɔːl ə tɛkˈnɪʃn̩/ · PT: [if ít dâznt uârk uíou kól a tekníchan]
71. Do you know what time the museum opens? — Você sabe a que horas o museu abre?
IPA: /duː juː noʊ wʌt taɪm ðə mjuˈziːəm ˈoʊpənz/ · PT: [dú iú nôu uât táim dha miuzíam ôupanz]
72. He never complains, even when he is tired. — Ele nunca reclama, mesmo quando está cansado.
IPA: /hiː ˈnɛvər kəmˈpleɪnz ˈiːvn̩ wɛn hiː ɪz ˈtaɪərd/ · PT: [rrí néver kompleinz ívan uén rrí iz táierd]
73. My computer doesn't work, so I use my phone. — Meu computador não funciona, então uso meu celular.
IPA: /maɪ kəmˈpjuːtər ˈdʌznt wɜːrk soʊ aɪ juːz maɪ foʊn/ · PT: [mái kompiúter dâznt uârk sôu ái iúz mái fôun]
74. Does she really speak four languages fluently? — Ela realmente fala quatro idiomas fluentemente?
IPA: /dʌz ʃiː ˈrɪli spiːk fɔːr ˈlæŋɡwɪdʒɪz ˈfluːəntli/ · PT: [dâz chí ríli spík fór léNguidjiz flúentli]
75. They work together, but they live in different cities. — Eles trabalham juntos, mas moram em cidades diferentes.
IPA: /ðeɪ wɜːrk təˈɡɛðər bʌt ðeɪ lɪv ɪn ˈdɪfrənt ˈsɪtiz/ · PT: [dhêi uârk tuguédher bât dhêi lív in dífrent sítiz]

"Do you work here?" / "Yes, I do." — "Você trabalha aqui?" / "Sim, trabalho."
IPA: /duː juː wɜːrk hɪr · jɛs aɪ duː/ · PT: [dú iú uârk rrír · iés ái dú]
"Does she work on weekends?" / "No, she doesn't." — "Ela trabalha nos fins de semana?" / "Não, não trabalha."
IPA: /dʌz ʃiː wɜːrk ɑːn ˈwiːkɛndz · noʊ ʃiː ˈdʌznt/ · PT: [dâz chí uârk ón uíkendz · nôu chí dâznt]
"Where do you work?" / "In a hospital." — "Onde você trabalha?" / "Num hospital."
IPA: /wɛr duː juː wɜːrk · ɪn ə ˈhɑːspɪtl̩/ · PT: [uér dú iú uârk · in a rráspitou]
"Does he speak English?" / "Yes, a little." — "Ele fala inglês?" / "Sim, um pouco."
IPA: /dʌz hiː spiːk ˈɪŋɡlɪʃ · jɛs ə ˈlɪtl̩/ · PT: [dâz rrí spík ínglich · iés a lítou]
"Do they live nearby?" / "No, they don't." — "Eles moram por perto?" / "Não, não moram."
IPA: /duː ðeɪ lɪv ˈnɪrbaɪ · noʊ ðeɪ doʊnt/ · PT: [dú dhêi lív nírbai · nôu dhêi dôunt]
"What time do you start?" / "At nine." — "A que horas você começa?" / "Às nove."
IPA: /wʌt taɪm duː juː stɑːrt · æt naɪn/ · PT: [uât táim dú iú stárt · ét náin]
"Does this work?" / "No, it doesn't." — "Isto funciona?" / "Não, não funciona."
IPA: /dʌz ðɪs wɜːrk · noʊ ɪt ˈdʌznt/ · PT: [dâz dhís uârk · nôu ít dâznt]
"Do you like your job?" / "Yes, I love it." — "Você gosta do seu trabalho?" / "Sim, eu adoro."
IPA: /duː juː laɪk jɔːr dʒɑːb · jɛs aɪ lʌv ɪt/ · PT: [dú iú láik iór djób · iés ái lâv ít]
"Does she drive to work?" / "No, she takes the bus." — "Ela vai de carro pro trabalho?" / "Não, pega o ônibus."
IPA: /dʌz ʃiː draɪv tə wɜːrk · noʊ ʃiː teɪks ðə bʌs/ · PT: [dâz chí dráiv tu uârk · nôu chí têiks dha bâs]
"Do we have class today?" / "Yes, we do." — "Temos aula hoje?" / "Sim, temos."
IPA: /duː wiː hæv klæs təˈdeɪ · jɛs wiː duː/ · PT: [dú uí rrév klés tudêi · iés uí dú]
"What does he do?" / "He's a teacher." — "O que ele faz?" / "Ele é professor."
IPA: /wʌt dʌz hiː duː · hiːz ə ˈtiːtʃər/ · PT: [uât dâz rrí dú · rríz a títcher]
"Does it work now?" / "Yes, it does." — "Funciona agora?" / "Sim, funciona."
IPA: /dʌz ɪt wɜːrk naʊ · jɛs ɪt dʌz/ · PT: [dâz ít uârk náu · iés ít dâz]
"Do you drink coffee?" / "No, I don't." — "Você toma café?" / "Não, não tomo."
IPA: /duː juː drɪŋk ˈkɔːfi · noʊ aɪ doʊnt/ · PT: [dú iú drínk kófi · nôu ái dôunt]
"Does the store open early?" / "Yes, at eight." — "A loja abre cedo?" / "Sim, às oito."
IPA: /dʌz ðə stɔːr ˈoʊpən ˈɜːrli · jɛs æt eɪt/ · PT: [dâz dha stór ôupan ârli · iés ét êit]
"Do they study every day?" / "Yes, they do." — "Eles estudam todo dia?" / "Sim, estudam."
IPA: /duː ðeɪ ˈstʌdi ˈɛvri deɪ · jɛs ðeɪ duː/ · PT: [dú dhêi stâdi évri dêi · iés dhêi dú]
"Does your brother work?" / "No, he's a student." — "Seu irmão trabalha?" / "Não, é estudante."
IPA: /dʌz jɔːr ˈbrʌðər wɜːrk · noʊ hiːz ə ˈstuːdənt/ · PT: [dâz iór brâdher uârk · nôu rríz a stúdent]
"What time does it close?" / "At ten." — "A que horas fecha?" / "Às dez."
IPA: /wʌt taɪm dʌz ɪt kloʊz · æt tɛn/ · PT: [uât táim dâz ít klôuz · ét tén]
"Do you understand?" / "Yes, I do." — "Você entende?" / "Sim, entendo."
IPA: /duː juː ˌʌndərˈstænd · jɛs aɪ duː/ · PT: [dú iú andersténd · iés ái dú]
"Does she like the city?" / "No, she doesn't." — "Ela gosta da cidade?" / "Não, não gosta."
IPA: /dʌz ʃiː laɪk ðə ˈsɪti · noʊ ʃiː ˈdʌznt/ · PT: [dâz chí láik dha síti · nôu chí dâznt]
"Do they work from home?" / "Yes, they do." — "Eles trabalham de casa?" / "Sim, trabalham."
IPA: /duː ðeɪ wɜːrk frəm hoʊm · jɛs ðeɪ duː/ · PT: [dú dhêi uârk from rrôum · iés dhêi dú]
"Does he eat meat?" / "No, he doesn't." — "Ele come carne?" / "Não, não come."
IPA: /dʌz hiː iːt miːt · noʊ hiː ˈdʌznt/ · PT: [dâz rrí ít mít · nôu rrí dâznt]
"Do you play any sport?" / "Yes, I play tennis." — "Você pratica algum esporte?" / "Sim, jogo tênis."
IPA: /duː juː pleɪ ˈɛni spɔːrt · jɛs aɪ pleɪ ˈtɛnɪs/ · PT: [dú iú plêi éni spórt · iés ái plêi ténis]
"Does the bus stop here?" / "Yes, it does." — "O ônibus para aqui?" / "Sim, para."
IPA: /dʌz ðə bʌs stɑːp hɪr · jɛs ɪt dʌz/ · PT: [dâz dha bâs stáp rrír · iés ít dâz]
"Do you work alone?" / "No, with a team." — "Você trabalha sozinho?" / "Não, com uma equipe."
IPA: /duː juː wɜːrk əˈloʊn · noʊ wɪð ə tiːm/ · PT: [dú iú uârk alôun · nôu uídh a tím]
"Does she know the answer?" / "Yes, she does." — "Ela sabe a resposta?" / "Sim, sabe."
IPA: /dʌz ʃiː noʊ ðə ˈænsər · jɛs ʃiː dʌz/ · PT: [dâz chí nôu dhi énser · iés chí dâz]`;

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
      id: `lesson_6_grammar_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_6_grammar_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_6_grammar_a1'] = meta['lesson_6_grammar_a1'] || {};
meta['lesson_6_grammar_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
