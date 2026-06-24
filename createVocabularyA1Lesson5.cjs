const fs = require('fs');

const rawText = `wake up — acordar
IPA: /weɪk ʌp/ · PT: [uêik âp]
get up — levantar (da cama)
IPA: /ɡɛt ʌp/ · PT: [guét âp]
brush my teeth — escovar os dentes
IPA: /brʌʃ maɪ tiːθ/ · PT: [brâch mái títh]
eat breakfast — tomar café da manhã
IPA: /iːt ˈbrɛkfəst/ · PT: [ít brékfest]
take a shower — tomar banho
IPA: /teɪk ə ˈʃaʊər/ · PT: [têik a cháuer]
get dressed — vestir-se / se arrumar
IPA: /ɡɛt drɛst/ · PT: [guét drést]
go to work — ir para o trabalho
IPA: /ɡoʊ tə wɜːrk/ · PT: [gôu tu uârk]
start work — começar a trabalhar
IPA: /stɑːrt wɜːrk/ · PT: [stárt uârk]
check my emails — verificar meus e-mails
IPA: /tʃɛk maɪ ˈiːmeɪlz/ · PT: [tchék mái ímeiouz]
eat lunch — almoçar
IPA: /iːt lʌntʃ/ · PT: [ít lântch]
finish work — terminar o trabalho
IPA: /ˈfɪnɪʃ wɜːrk/ · PT: [fínich uârk]
go home — ir para casa
IPA: /ɡoʊ hoʊm/ · PT: [gôu rrôum]
do my homework — fazer minha lição de casa
IPA: /duː maɪ ˈhoʊmwɜːrk/ · PT: [dú mái rrôumuerk]
go for a run — ir correr
IPA: /ɡoʊ fɔːr ə rʌn/ · PT: [gôu fór a rân]
go to the gym — ir à academia
IPA: /ɡoʊ tə ðə dʒɪm/ · PT: [gôu tu dha djím]
go shopping — fazer compras
IPA: /ɡoʊ ˈʃɑːpɪŋ/ · PT: [gôu chápin]
cook dinner — cozinhar o jantar
IPA: /kʊk ˈdɪnər/ · PT: [kúk díner]
eat dinner — jantar
IPA: /iːt ˈdɪnər/ · PT: [ít díner]
watch TV — assistir TV
IPA: /wɑːtʃ ˌtiːˈviː/ · PT: [uátch ti-ví]
go to bed — ir dormir
IPA: /ɡoʊ tə bɛd/ · PT: [gôu tu béd]

21. get ready — se aprontar
IPA: /ɡɛt ˈrɛdi/ · PT: [guét rrédi]
22. make the bed — arrumar a cama
IPA: /meɪk ðə bɛd/ · PT: [mêik dha béd]
23. comb my hair — pentear o cabelo
IPA: /koʊm maɪ hɛr/ · PT: [kôum mái rrér]
24. take a nap — tirar uma soneca
IPA: /teɪk ə næp/ · PT: [têik a nép]
25. relax — relaxar
IPA: /rɪˈlæks/ · PT: [riléks]

26. I wake up at seven. — Eu acordo às sete.
IPA: /aɪ weɪk ʌp æt ˈsɛvn̩/ · PT: [ái uêik âp ét sévan]
27. I get up and stretch. — Eu levanto e me espreguiço.
IPA: /aɪ ɡɛt ʌp ænd strɛtʃ/ · PT: [ái guét âp énd strétch]
28. I make the bed. — Eu arrumo a cama.
IPA: /aɪ meɪk ðə bɛd/ · PT: [ái mêik dha béd]
29. I brush my teeth. — Eu escovo os dentes.
IPA: /aɪ brʌʃ maɪ tiːθ/ · PT: [ái brâch mái títh]
30. I take a quick shower. — Eu tomo um banho rápido.
IPA: /aɪ teɪk ə kwɪk ˈʃaʊər/ · PT: [ái têik a kuík cháuer]

31. I get dressed. — Eu me visto.
IPA: /aɪ ɡɛt drɛst/ · PT: [ái guét drést]
32. I eat breakfast. — Eu tomo café da manhã.
IPA: /aɪ iːt ˈbrɛkfəst/ · PT: [ái ít brékfest]
33. I drink a cup of coffee. — Eu tomo uma xícara de café.
IPA: /aɪ drɪŋk ə kʌp əv ˈkɔːfi/ · PT: [ái drínk a kâp ov kófi]
34. I check my phone. — Eu olho meu celular.
IPA: /aɪ tʃɛk maɪ foʊn/ · PT: [ái tchék mái fôun]
35. I leave the house. — Eu saio de casa.
IPA: /aɪ liːv ðə haʊs/ · PT: [ái lív dha ráus]

36. I go to work by bus. — Eu vou para o trabalho de ônibus.
IPA: /aɪ ɡoʊ tə wɜːrk baɪ bʌs/ · PT: [ái gôu tu uârk bái bâs]
37. I start work at nine. — Eu começo a trabalhar às nove.
IPA: /aɪ stɑːrt wɜːrk æt naɪn/ · PT: [ái stárt uârk ét náin]
38. I check my emails. — Eu verifico meus e-mails.
IPA: /aɪ tʃɛk maɪ ˈiːmeɪlz/ · PT: [ái tchék mái ímeiouz]
39. I eat lunch at noon. — Eu almoço ao meio-dia.
IPA: /aɪ iːt lʌntʃ æt nuːn/ · PT: [ái ít lântch ét nún]
40. I finish work at five. — Eu termino o trabalho às cinco.
IPA: /aɪ ˈfɪnɪʃ wɜːrk æt faɪv/ · PT: [ái fínich uârk ét fáiv]

41. I go home. — Eu vou para casa.
IPA: /aɪ ɡoʊ hoʊm/ · PT: [ái gôu rrôum]
42. I do my homework. — Eu faço minha lição de casa.
IPA: /aɪ duː maɪ ˈhoʊmwɜːrk/ · PT: [ái dú mái rrôumuerk]
43. I go for a run. — Eu vou correr.
IPA: /aɪ ɡoʊ fɔːr ə rʌn/ · PT: [ái gôu fór a rân]
44. I go to the gym. — Eu vou à academia.
IPA: /aɪ ɡoʊ tə ðə dʒɪm/ · PT: [ái gôu tu dha djím]

45. I go shopping. — Eu faço compras.
IPA: /aɪ ɡoʊ ˈʃɑːpɪŋ/ · PT: [ái gôu chápin]
46. I cook dinner. — Eu cozinho o jantar.
IPA: /aɪ kʊk ˈdɪnər/ · PT: [ái kúk díner]
47. I eat dinner with my family. — Eu janto com minha família.
IPA: /aɪ iːt ˈdɪnər wɪð maɪ ˈfæməli/ · PT: [ái ít díner uídh mái fémili]
48. I watch TV. — Eu assisto TV.
IPA: /aɪ wɑːtʃ ˌtiːˈviː/ · PT: [ái uátch ti-ví]
49. I relax on the sofa. — Eu relaxo no sofá.
IPA: /aɪ rɪˈlæks ɑːn ðə ˈsoʊfə/ · PT: [ái riléks ón dha sôufa]
50. I go to bed at eleven. — Eu vou dormir às onze.
IPA: /aɪ ɡoʊ tə bɛd æt ɪˈlɛvn̩/ · PT: [ái gôu tu béd ét ilévan]

51. I wake up early. — Eu acordo cedo.
IPA: /aɪ weɪk ʌp ˈɜːrli/ · PT: [ái uêik âp ârli]
52. She eats breakfast. — Ela toma café da manhã.
IPA: /ʃiː iːts ˈbrɛkfəst/ · PT: [chí íts brékfest]
53. He goes to work. — Ele vai para o trabalho.
IPA: /hiː ɡoʊz tə wɜːrk/ · PT: [rrí gôuz tu uârk]
54. We watch TV. — Nós assistimos TV.
IPA: /wiː wɑːtʃ ˌtiːˈviː/ · PT: [uí uátch ti-ví]

Advérbios de frequência
55. I always brush my teeth. — Eu sempre escovo os dentes.
IPA: /aɪ ˈɔːlweɪz brʌʃ maɪ tiːθ/ · PT: [ái ólueiz brâch mái títh]
56. She usually gets up at six. — Ela geralmente levanta às seis.
IPA: /ʃiː ˈjuːʒuəli ɡɛts ʌp æt sɪks/ · PT: [chí iújuali guéts âp ét síks]
57. He never eats breakfast. — Ele nunca toma café da manhã.
IPA: /hiː ˈnɛvər iːts ˈbrɛkfəst/ · PT: [rrí néver íts brékfest]
58. They often go to the gym. — Eles vão à academia com frequência.
IPA: /ðeɪ ˈɔːfn̩ ɡoʊ tə ðə dʒɪm/ · PT: [dhêi ófen gôu tu dha djím]

Perguntas e negações
59. What time do you wake up? — A que horas você acorda?
IPA: /wʌt taɪm duː juː weɪk ʌp/ · PT: [uât táim dú iú uêik âp]
60. Does she cook dinner every day? — Ela cozinha o jantar todo dia?
IPA: /dʌz ʃiː kʊk ˈdɪnər ˈɛvri deɪ/ · PT: [dâz chí kúk díner évri dêi]
61. I don't watch TV at night. — Eu não assisto TV à noite.
IPA: /aɪ doʊnt wɑːtʃ ˌtiːˈviː æt naɪt/ · PT: [ái dôunt uátch ti-ví ét náit]
62. Why do you go to bed so late? — Por que você vai dormir tão tarde?
IPA: /waɪ duː juː ɡoʊ tə bɛd soʊ leɪt/ · PT: [uái dú iú gôu tu béd sôu lêit]

Conectores e tempos verbais
63. I check my emails when I start work. — Eu verifico meus e-mails quando começo a trabalhar.
IPA: /aɪ tʃɛk maɪ ˈiːmeɪlz wɛn aɪ stɑːrt wɜːrk/ · PT: [ái tchék mái ímeiouz uén ái stárt uârk]
64. She is cooking dinner now. — Ela está cozinhando o jantar agora.
IPA: /ʃiː ɪz ˈkʊkɪŋ ˈdɪnər naʊ/ · PT: [chí iz kúkin díner náu]
65. I went for a run yesterday morning. — Eu fui correr ontem de manhã.
IPA: /aɪ wɛnt fɔːr ə rʌn ˈjɛstərdeɪ ˈmɔːrnɪŋ/ · PT: [ái uént fór a rân iéster dei mórnin]
66. He was sleeping when I called. — Ele estava dormindo quando eu liguei.
IPA: /hiː wəz ˈsliːpɪŋ wɛn aɪ kɔːld/ · PT: [rrí uâz slípin uén ái kóld]
67. We watched TV after we ate dinner. — Nós assistimos TV depois que jantamos.
IPA: /wiː wɑːtʃt ˌtiːˈviː ˈæftər wiː eɪt ˈdɪnər/ · PT: [uí uátcht ti-ví éfter uí êit díner]

As mais ricas
68. I take a shower before I go to work. — Eu tomo banho antes de ir para o trabalho.
IPA: /aɪ teɪk ə ˈʃaʊər bɪˈfɔːr aɪ ɡoʊ tə wɜːrk/ · PT: [ái têik a cháuer bifór ái gôu tu uârk]
69. She goes to the gym because she wants to be healthy. — Ela vai à academia porque quer ser saudável.
IPA: /ʃiː ɡoʊz tə ðə dʒɪm bɪˈkɔːz ʃiː wɑːnts tə biː ˈhɛlθi/ · PT: [chí gôuz tu dha djím bikóz chí uánts tu bí rrélthi]
70. I usually cook dinner, but tonight we'll order pizza. — Eu geralmente cozinho o jantar, mas hoje vamos pedir pizza.
IPA: /aɪ ˈjuːʒuəli kʊk ˈdɪnər bʌt təˈnaɪt wiːl ˈɔːrdər ˈpiːtsə/ · PT: [ái iújuali kúk díner bât tunáit uíou órder pítsa]
71. After he finishes work, he goes home and relaxes. — Depois que ele termina o trabalho, ele vai para casa e relaxa.
IPA: /ˈæftər hiː ˈfɪnɪʃɪz wɜːrk hiː ɡoʊz hoʊm ænd rɪˈlæksɪz/ · PT: [éfter rrí fínichiz uârk rrí gôuz rrôum énd riléksiz]
72. I didn't do my homework because I was too tired. — Eu não fiz minha lição porque estava cansado demais.
IPA: /aɪ ˈdɪdnt duː maɪ ˈhoʊmwɜːrk bɪˈkɔːz aɪ wəz tuː ˈtaɪərd/ · PT: [ái dídent dú mái rrôumuerk bikóz ái uâz tú táierd]
73. She wakes up early, so she always has breakfast. — Ela acorda cedo, então sempre toma café da manhã.
IPA: /ʃiː weɪks ʌp ˈɜːrli soʊ ʃiː ˈɔːlweɪz hæz ˈbrɛkfəst/ · PT: [chí uêiks âp ârli sôu chí ólueiz rréz brékfest]
74. Do you go shopping on weekends or after work? — Você faz compras nos fins de semana ou depois do trabalho?
IPA: /duː juː ɡoʊ ˈʃɑːpɪŋ ɑːn ˈwiːkɛndz ɔːr ˈæftər wɜːrk/ · PT: [dú iú gôu chápin ón uíkendz ór éfter uârk]
75. When I get home, I take off my shoes and rest. — Quando chego em casa, tiro os sapatos e descanso.
IPA: /wɛn aɪ ɡɛt hoʊm aɪ teɪk ɔːf maɪ ʃuːz ænd rɛst/ · PT: [uén ái guét rrôum ái têik óf mái chúz énd rést]

"What time do you wake up?" / "At seven." — "A que horas você acorda?" / "Às sete."
IPA: /wʌt taɪm duː juː weɪk ʌp · æt ˈsɛvn̩/ · PT: [uât táim dú iú uêik âp · ét sévan]
"Do you eat breakfast?" / "Yes, every day." — "Você toma café da manhã?" / "Sim, todo dia."
IPA: /duː juː iːt ˈbrɛkfəst · jɛs ˈɛvri deɪ/ · PT: [dú iú ít brékfest · iés évri dêi]
"When do you start work?" / "At nine." — "Quando você começa a trabalhar?" / "Às nove."
IPA: /wɛn duː juː stɑːrt wɜːrk · æt naɪn/ · PT: [uén dú iú stárt uârk · ét náin]
"Do you go to the gym?" / "Yes, three times a week." — "Você vai à academia?" / "Sim, três vezes por semana."
IPA: /duː juː ɡoʊ tə ðə dʒɪm · jɛs θriː taɪmz ə wiːk/ · PT: [dú iú gôu tu dha djím · iés thrí táimz a uík]
"What do you do after work?" / "I cook dinner." — "O que você faz depois do trabalho?" / "Eu cozinho o jantar."
IPA: /wʌt duː juː duː ˈæftər wɜːrk · aɪ kʊk ˈdɪnər/ · PT: [uât dú iú dú éfter uârk · ái kúk díner]
"Do you watch TV at night?" / "Sometimes." — "Você assiste TV à noite?" / "Às vezes."
IPA: /duː juː wɑːtʃ ˌtiːˈviː æt naɪt · ˈsʌmtaɪmz/ · PT: [dú iú uátch ti-ví ét náit · sâmtaimz]
"When do you do your homework?" / "After dinner." — "Quando você faz a lição?" / "Depois do jantar."
IPA: /wɛn duː juː duː jɔːr ˈhoʊmwɜːrk · ˈæftər ˈdɪnər/ · PT: [uén dú iú dú iór rrôumuerk · éfter díner]
"Do you take a shower in the morning?" / "Yes, always." — "Você toma banho de manhã?" / "Sim, sempre."
IPA: /duː juː teɪk ə ˈʃaʊər ɪn ðə ˈmɔːrnɪŋ · jɛs ˈɔːlweɪz/ · PT: [dú iú têik a cháuer in dha mórnin · iés ólueiz]
"What time do you go to bed?" / "Around eleven." — "A que horas você vai dormir?" / "Por volta das onze."
IPA: /wʌt taɪm duː juː ɡoʊ tə bɛd · əˈraʊnd ɪˈlɛvn̩/ · PT: [uât táim dú iú gôu tu béd · aráund ilévan]
"Do you go running?" / "Yes, every morning." — "Você vai correr?" / "Sim, toda manhã."
IPA: /duː juː ɡoʊ ˈrʌnɪŋ · jɛs ˈɛvri ˈmɔːrnɪŋ/ · PT: [dú iú gôu rânin · iés évri mórnin]
"When do you check your emails?" / "First thing at work." — "Quando você verifica os e-mails?" / "Logo que chego ao trabalho."
IPA: /wɛn duː juː tʃɛk jɔːr ˈiːmeɪlz · fɜːrst θɪŋ æt wɜːrk/ · PT: [uén dú iú tchék iór ímeiouz · fârst thíN ét uârk]
"Do you cook every day?" / "No, sometimes I order food." — "Você cozinha todo dia?" / "Não, às vezes peço comida."
IPA: /duː juː kʊk ˈɛvri deɪ · noʊ ˈsʌmtaɪmz aɪ ˈɔːrdər fuːd/ · PT: [dú iú kúk évri dêi · nôu sâmtaimz ái órder fúd]
"What time do you finish work?" / "At five." — "A que horas você termina o trabalho?" / "Às cinco."
IPA: /wʌt taɪm duː juː ˈfɪnɪʃ wɜːrk · æt faɪv/ · PT: [uât táim dú iú fínich uârk · ét fáiv]
"Do you go shopping often?" / "Once a week." — "Você faz compras com frequência?" / "Uma vez por semana."
IPA: /duː juː ɡoʊ ˈʃɑːpɪŋ ˈɔːfn̩ · wʌns ə wiːk/ · PT: [dú iú gôu chápin ófen · uâns a uík]
"Do you eat lunch at work?" / "Yes, I do." — "Você almoça no trabalho?" / "Sim, almoço."
IPA: /duː juː iːt lʌntʃ æt wɜːrk · jɛs aɪ duː/ · PT: [dú iú ít lântch ét uârk · iés ái dú]
"When do you get up?" / "Right after I wake up." — "Quando você levanta?" / "Logo depois de acordar."
IPA: /wɛn duː juː ɡɛt ʌp · raɪt ˈæftər aɪ weɪk ʌp/ · PT: [uén dú iú guét âp · ráit éfter ái uêik âp]
"Do you brush your teeth after breakfast?" / "Yes, I do." — "Você escova os dentes depois do café?" / "Sim, escovo."
IPA: /duː juː brʌʃ jɔːr tiːθ ˈæftər ˈbrɛkfəst · jɛs aɪ duː/ · PT: [dú iú brâch iór títh éfter brékfest · iés ái dú]
"How do you go to work?" / "By bus." — "Como você vai para o trabalho?" / "De ônibus."
IPA: /haʊ duː juː ɡoʊ tə wɜːrk · baɪ bʌs/ · PT: [rráu dú iú gôu tu uârk · bái bâs]
"Do you relax in the evening?" / "Yes, I watch TV." — "Você relaxa à noite?" / "Sim, assisto TV."
IPA: /duː juː rɪˈlæks ɪn ðə ˈiːvnɪŋ · jɛs aɪ wɑːtʃ ˌtiːˈviː/ · PT: [dú iú riléks in dhi ívnin · iés ái uátch ti-ví]
"What's your morning routine?" / "I shower and eat." — "Qual é sua rotina de manhã?" / "Tomo banho e como."
IPA: /wʌts jɔːr ˈmɔːrnɪŋ ruːˈtiːn · aɪ ˈʃaʊər ænd iːt/ · PT: [uâts iór mórnin rutín · ái cháuer énd ít]
"Do you go to bed early?" / "No, quite late." — "Você dorme cedo?" / "Não, bem tarde."
IPA: /duː juː ɡoʊ tə bɛd ˈɜːrli · noʊ kwaɪt leɪt/ · PT: [dú iú gôu tu béd ârli · nôu kuáit lêit]
"When do you eat dinner?" / "Around seven." — "Quando você janta?" / "Por volta das sete."
IPA: /wɛn duː juː iːt ˈdɪnər · əˈraʊnd ˈsɛvn̩/ · PT: [uén dú iú ít díner · aráund sévan]
"Do you make your bed?" / "Yes, every morning." — "Você arruma a cama?" / "Sim, toda manhã."
IPA: /duː juː meɪk jɔːr bɛd · jɛs ˈɛvri ˈmɔːrnɪŋ/ · PT: [dú iú mêik iór béd · iés évri mórnin]
"What do you do on weekends?" / "I sleep late." — "O que você faz nos fins de semana?" / "Durmo até tarde."
IPA: /wʌt duː juː duː ɑːn ˈwiːkɛndz · aɪ sliːp leɪt/ · PT: [uât dú iú dú ón uíkendz · ái slíp lêit]
"Do you have a busy routine?" / "Yes, very busy." — "Você tem uma rotina corrida?" / "Sim, bem corrida."
IPA: /duː juː hæv ə ˈbɪzi ruːˈtiːn · jɛs ˈvɛri ˈbɪzi/ · PT: [dú iú rrév a bízi rutín · iés véri bízi]`;

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
      id: `lesson_5_vocabulary_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_5_vocabulary_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_5_vocabulary_a1'] = meta['lesson_5_vocabulary_a1'] || {};
meta['lesson_5_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
