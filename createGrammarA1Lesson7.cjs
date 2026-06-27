const fs = require('fs');

const rawText = `what — o que / qual
IPA: /wʌt/ · PT: [uât]
where — onde
IPA: /wɛr/ · PT: [uér]
when — quando
IPA: /wɛn/ · PT: [uén]
how — como
IPA: /haʊ/ · PT: [rráu]
how old — quantos anos
IPA: /haʊ oʊld/ · PT: [rráu ôuld]
what time — a que horas
IPA: /wʌt taɪm/ · PT: [uât táim]
how often — com que frequência
IPA: /haʊ ˈɔːfn̩/ · PT: [rráu ófen]
why — por que
IPA: /waɪ/ · PT: [uái]
who — quem
IPA: /huː/ · PT: [rrú]
Perguntas com BE (is / are)
10. Is Sharon from the US? — A Sharon é dos EUA?
IPA: /ɪz ˈʃɛrən frəm ðə juː ɛs/ · PT: [iz chéran from dha iú és]
11. How old are you? — Quantos anos você tem?
IPA: /haʊ oʊld ɑːr juː/ · PT: [rráu ôuld ár iú]
12. What is this? — O que é isto?
IPA: /wʌt ɪz ðɪs/ · PT: [uât iz dhís]
13. Where are you from? — De onde você é?
IPA: /wɛr ɑːr juː frəm/ · PT: [uér ár iú from]
Perguntas com DO (do / does)
14. Do you like pizza? — Você gosta de pizza?
IPA: /duː juː laɪk ˈpiːtsə/ · PT: [dú iú láik pítsa]
15. Where do you work? — Onde você trabalha?
IPA: /wɛr duː juː wɜːrk/ · PT: [uér dú iú uârk]
16. What time does he get up? — A que horas ele levanta?
IPA: /wʌt taɪm dʌz hiː ɡɛt ʌp/ · PT: [uât táim dâz rrí guét âp]
17. How often do they go out? — Com que frequência eles saem?
IPA: /haʊ ˈɔːfn̩ duː ðeɪ ɡoʊ aʊt/ · PT: [rráu ófen dú dhêi gôu áut]
18. What do you do? — O que você faz (da vida)?
IPA: /wʌt duː juː duː/ · PT: [uât dú iú dú]
Os padrões (estruturas)
19. Are you...? — Você é / está...?
IPA: /ɑːr juː/ · PT: [ár iú]
20. Is he...? — Ele é / está...?
IPA: /ɪz hiː/ · PT: [iz rrí]
21. Do you...? — Você...? (verbo de ação)
IPA: /duː juː/ · PT: [dú iú]
22. Does he...? — Ele...?
IPA: /dʌz hiː/ · PT: [dâz rrí]
23. What do you...? — O que você...?
IPA: /wʌt duː juː/ · PT: [uât dú iú]
24. Where does she...? — Onde ela...?
IPA: /wɛr dʌz ʃiː/ · PT: [uér dâz chí]
25. Why don't you...? — Por que você não...?
IPA: /waɪ doʊnt juː/ · PT: [uái dôunt iú]

26. What's your name? — Qual é o seu nome?
IPA: /wʌts jɔːr neɪm/ · PT: [uâts iór nêim]
27. Where are you from? — De onde você é?
IPA: /wɛr ɑːr juː frəm/ · PT: [uér ár iú from]
28. How old are you? — Quantos anos você tem?
IPA: /haʊ oʊld ɑːr juː/ · PT: [rráu ôuld ár iú]
29. What do you do? — O que você faz (da vida)?
IPA: /wʌt duː juː duː/ · PT: [uât dú iú dú]
30. Do you live here? — Você mora aqui?
IPA: /duː juː lɪv hɪr/ · PT: [dú iú lív rrír]
No trabalho / rotina
31. Where do you work? — Onde você trabalha?
IPA: /wɛr duː juː wɜːrk/ · PT: [uér dú iú uârk]
32. What time do you start? — A que horas você começa?
IPA: /wʌt taɪm duː juː stɑːrt/ · PT: [uât táim dú iú stárt]
33. Do you like your job? — Você gosta do seu trabalho?
IPA: /duː juː laɪk jɔːr dʒɑːb/ · PT: [dú iú láik iór djób]
34. How do you go to work? — Como você vai para o trabalho?
IPA: /haʊ duː juː ɡoʊ tə wɜːrk/ · PT: [rráu dú iú gôu tu uârk]
Saindo / convidando
35. Do you want to go out? — Você quer sair?
IPA: /duː juː wɑːnt tə ɡoʊ aʊt/ · PT: [dú iú uánt tu gôu áut]
36. What time does the movie start? — A que horas o filme começa?
IPA: /wʌt taɪm dʌz ðə ˈmuːvi stɑːrt/ · PT: [uât táim dâz dha múvi stárt]
37. Where do you want to eat? — Onde você quer comer?
IPA: /wɛr duː juː wɑːnt tə iːt/ · PT: [uér dú iú uánt tu ít]
38. Do you like Italian food? — Você gosta de comida italiana?
IPA: /duː juː laɪk ɪˈtæljən fuːd/ · PT: [dú iú láik itélian fúd]
Hobbies / interesses
39. What do you do on weekends? — O que você faz nos fins de semana?
IPA: /wʌt duː juː duː ɑːn ˈwiːkɛndz/ · PT: [uât dú iú dú ón uíkendz]
40. How often do you exercise? — Com que frequência você se exercita?
IPA: /haʊ ˈɔːfn̩ duː juː ˈɛksərsaɪz/ · PT: [rráu ófen dú iú éksersaiz]
41. Do you play any sports? — Você pratica algum esporte?
IPA: /duː juː pleɪ ˈɛni spɔːrts/ · PT: [dú iú plêi éni spórts]
42. What music do you like? — De que música você gosta?
IPA: /wʌt ˈmjuːzɪk duː juː laɪk/ · PT: [uât miúzik dú iú láik]
Ao telefone / marcando
43. Are you free tomorrow? — Você está livre amanhã?
IPA: /ɑːr juː friː təˈmɑːroʊ/ · PT: [ár iú frí tumárou]
44. What time is the meeting? — A que horas é a reunião?
IPA: /wʌt taɪm ɪz ðə ˈmiːtɪŋ/ · PT: [uât táim iz dha mítin]
45. Where is the restaurant? — Onde fica o restaurante?
IPA: /wɛr ɪz ðə ˈrɛstərɑːnt/ · PT: [uér iz dha réstorant]
Viajando / direções
46. Where is the station? — Onde fica a estação?
IPA: /wɛr ɪz ðə ˈsteɪʃn̩/ · PT: [uér iz dha stêichan]
47. How much is the ticket? — Quanto custa a passagem?
IPA: /haʊ mʌtʃ ɪz ðə ˈtɪkɪt/ · PT: [rráu mâtch iz dha tíket]
48. What time does the train leave? — A que horas o trem sai?
IPA: /wʌt taɪm dʌz ðə treɪn liːv/ · PT: [uât táim dâz dha trêin lív]
49. Is it far from here? — É longe daqui?
IPA: /ɪz ɪt fɑːr frəm hɪr/ · PT: [iz ít fár from rrír]
50. Do you speak English? — Você fala inglês?
IPA: /duː juː spiːk ˈɪŋɡlɪʃ/ · PT: [dú iú spík ínglich]

51. What is your name? — Qual é o seu nome?
IPA: /wʌt ɪz jɔːr neɪm/ · PT: [uât iz iór nêim]
52. Where do you live? — Onde você mora?
IPA: /wɛr duː juː lɪv/ · PT: [uér dú iú lív]
53. Do you have a car? — Você tem carro?
IPA: /duː juː hæv ə kɑːr/ · PT: [dú iú rrév a kár]
54. Is she your sister? — Ela é sua irmã?
IPA: /ɪz ʃiː jɔːr ˈsɪstər/ · PT: [iz chí iór síster]
Um pouco mais
55. How old is your brother? — Quantos anos tem seu irmão?
IPA: /haʊ oʊld ɪz jɔːr ˈbrʌðər/ · PT: [rráu ôuld iz iór brâdher]
56. What time does the store open? — A que horas a loja abre?
IPA: /wʌt taɪm dʌz ðə stɔːr ˈoʊpən/ · PT: [uât táim dâz dha stór ôupan]
57. Why are you late? — Por que você está atrasado?
IPA: /waɪ ɑːr juː leɪt/ · PT: [uái ár iú lêit]
58. Who is that man? — Quem é aquele homem?
IPA: /huː ɪz ðæt mæn/ · PT: [rrú iz dhét mén]
Mais complexas
59. How often do you visit your family? — Com que frequência você visita sua família?
IPA: /haʊ ˈɔːfn̩ duː juː ˈvɪzɪt jɔːr ˈfæməli/ · PT: [rráu ófen dú iú vízit iór fémili]
60. What do you usually do after work? — O que você costuma fazer depois do trabalho?
IPA: /wʌt duː juː ˈjuːʒuəli duː ˈæftər wɜːrk/ · PT: [uât dú iú iújuali dú éfter uârk]
61. Does she work or study? — Ela trabalha ou estuda?
IPA: /dʌz ʃiː wɜːrk ɔːr ˈstʌdi/ · PT: [dâz chí uârk ór stâdi]
62. Don't you like coffee? — Você não gosta de café?
IPA: /doʊnt juː laɪk ˈkɔːfi/ · PT: [dôunt iú láik kófi]
Conectores e tempos verbais
63. Where do you go when you have free time? — Onde você vai quando tem tempo livre?
IPA: /wɛr duː juː ɡoʊ wɛn juː hæv friː taɪm/ · PT: [uér dú iú gôu uén iú rrév frí táim]
64. What are you doing right now? — O que você está fazendo agora?
IPA: /wʌt ɑːr juː ˈduːɪŋ raɪt naʊ/ · PT: [uât ár iú dúin ráit náu]
65. Did you call him yesterday? — Você ligou para ele ontem?
IPA: /dɪd juː kɔːl hɪm ˈjɛstərdeɪ/ · PT: [díd iú kól rrím iéster dei]
66. Why didn't you come to the party? — Por que você não veio à festa?
IPA: /waɪ ˈdɪdnt juː kʌm tə ðə ˈpɑːrti/ · PT: [uái dídent iú kâm tu dha párti]
67. What time will the meeting start? — A que horas a reunião vai começar?
IPA: /wʌt taɪm wɪl ðə ˈmiːtɪŋ stɑːrt/ · PT: [uât táim uíou dha mítin stárt]
As mais ricas
68. Do you know where the nearest bank is? — Você sabe onde fica o banco mais próximo?
IPA: /duː juː noʊ wɛr ðə ˈnɪrəst bæŋk ɪz/ · PT: [dú iú nôu uér dha nírast bénk iz]
69. How long does it take to get there? — Quanto tempo leva para chegar lá?
IPA: /haʊ lɔːŋ dʌz ɪt teɪk tə ɡɛt ðɛr/ · PT: [rráu lóN dâz ít têik tu guét dhér]
70. What would you do if you won the lottery? — O que você faria se ganhasse na loteria?
IPA: /wʌt wʊd juː duː ɪf juː wʌn ðə ˈlɑːtəri/ · PT: [uât uúd iú dú if iú uân dha látari]
71. Can you tell me why she is so happy? — Você pode me dizer por que ela está tão feliz?
IPA: /kæn juː tɛl miː waɪ ʃiː ɪz soʊ ˈhæpi/ · PT: [kén iú tél mí uái chí iz sôu rrépi]
72. Do you prefer tea or coffee in the morning? — Você prefere chá ou café de manhã?
IPA: /duː juː prɪˈfɜːr tiː ɔːr ˈkɔːfi ɪn ðə ˈmɔːrnɪŋ/ · PT: [dú iú priférr tí ór kófi in dha mórnin]
73. Why does he always arrive late, even when he wakes up early? — Por que ele sempre chega atrasado, mesmo acordando cedo?
IPA: /waɪ dʌz hiː ˈɔːlweɪz əˈraɪv leɪt ˈiːvn̩ wɛn hiː weɪks ʌp ˈɜːrli/ · PT: [uái dâz rrí ólueiz aráiv lêit ívan uén rrí uêiks âp ârli]
74. How often do you eat out, and where do you usually go? — Com que frequência você come fora, e onde costuma ir?
IPA: /haʊ ˈɔːfn̩ duː juː iːt aʊt ænd wɛr duː juː ˈjuːʒuəli ɡoʊ/ · PT: [rráu ófen dú iú ít áut énd uér dú iú iújuali gôu]
75. What do you think about working from home? — O que você acha de trabalhar de casa?
IPA: /wʌt duː juː θɪŋk əˈbaʊt ˈwɜːrkɪŋ frəm hoʊm/ · PT: [uât dú iú thínk abáut uârkin from rrôum]

"Where are you from?" / "I'm from Brazil." — "De onde você é?" / "Eu sou do Brasil."
IPA: /wɛr ɑːr juː frəm · aɪm frəm brəˈzɪl/ · PT: [uér ár iú from · áim from brazíou]
"How old are you?" / "I'm twenty-five." — "Quantos anos você tem?" / "Tenho vinte e cinco."
IPA: /haʊ oʊld ɑːr juː · aɪm ˈtwɛnti faɪv/ · PT: [rráu ôuld ár iú · áim tuénti fáiv]
"What do you do?" / "I'm a teacher." — "O que você faz?" / "Sou professor."
IPA: /wʌt duː juː duː · aɪm ə ˈtiːtʃər/ · PT: [uât dú iú dú · áim a títcher]
"Do you like pizza?" / "Yes, I love it." — "Você gosta de pizza?" / "Sim, eu adoro."
IPA: /duː juː laɪk ˈpiːtsə · jɛs aɪ lʌv ɪt/ · PT: [dú iú láik pítsa · iés ái lâv ít]
"Where do you work?" / "In a hospital." — "Onde você trabalha?" / "Num hospital."
IPA: /wɛr duː juː wɜːrk · ɪn ə ˈhɑːspɪtl̩/ · PT: [uér dú iú uârk · in a rráspitou]
"What time do you get up?" / "At seven." — "A que horas você levanta?" / "Às sete."
IPA: /wʌt taɪm duː juː ɡɛt ʌp · æt ˈsɛvn̩/ · PT: [uât táim dú iú guét âp · ét sévan]
"How often do you exercise?" / "Three times a week." — "Com que frequência você se exercita?" / "Três vezes por semana."
IPA: /haʊ ˈɔːfn̩ duː juː ˈɛksərsaɪz · θriː taɪmz ə wiːk/ · PT: [rráu ófen dú iú éksersaiz · thrí táimz a uík]
"Is this your car?" / "No, it isn't." — "Este é o seu carro?" / "Não, não é."
IPA: /ɪz ðɪs jɔːr kɑːr · noʊ ɪt ˈɪznt/ · PT: [iz dhís iór kár · nôu ít íznt]
"What's your name?" / "My name is Anna." — "Qual é o seu nome?" / "Meu nome é Anna."
IPA: /wʌts jɔːr neɪm · maɪ neɪm ɪz ˈænə/ · PT: [uâts iór nêim · mái nêim iz éna]
"Do you speak English?" / "Yes, a little." — "Você fala inglês?" / "Sim, um pouco."
IPA: /duː juː spiːk ˈɪŋɡlɪʃ · jɛs ə ˈlɪtl̩/ · PT: [dú iú spík ínglich · iés a lítou]
"Where do you live?" / "Near the park." — "Onde você mora?" / "Perto do parque."
IPA: /wɛr duː juː lɪv · nɪr ðə pɑːrk/ · PT: [uér dú iú lív · nír dha párk]
"What time does the train leave?" / "At noon." — "A que horas o trem sai?" / "Ao meio-dia."
IPA: /wʌt taɪm dʌz ðə treɪn liːv · æt nuːn/ · PT: [uât táim dâz dha trêin lív · ét nún]
"Are you free tonight?" / "No, I'm busy." — "Você está livre hoje à noite?" / "Não, estou ocupado."
IPA: /ɑːr juː friː təˈnaɪt · noʊ aɪm ˈbɪzi/ · PT: [ár iú frí tunáit · nôu áim bízi]
"Who is that?" / "That's my brother." — "Quem é aquele?" / "É meu irmão."
IPA: /huː ɪz ðæt · ðæts maɪ ˈbrʌðər/ · PT: [rrú iz dhét · dhéts mái brâdher]
"Do you have any pets?" / "Yes, a dog." — "Você tem algum bicho de estimação?" / "Sim, um cachorro."
IPA: /duː juː hæv ˈɛni pɛts · jɛs ə dɔːɡ/ · PT: [dú iú rrév éni péts · iés a dóg]
"What music do you like?" / "I like rock." — "De que música você gosta?" / "Eu gosto de rock."
IPA: /wʌt ˈmjuːzɪk duː juː laɪk · aɪ laɪk rɑːk/ · PT: [uât miúzik dú iú láik · ái láik rók]
"Where is the bathroom?" / "Down the hall." — "Onde fica o banheiro?" / "No fim do corredor."
IPA: /wɛr ɪz ðə ˈbæθruːm · daʊn ðə hɔːl/ · PT: [uér iz dha béthrum · dáun dha ról]
"How much is this?" / "Ten dollars." — "Quanto custa isto?" / "Dez dólares."
IPA: /haʊ mʌtʃ ɪz ðɪs · tɛn ˈdɑːlərz/ · PT: [rráu mâtch iz dhís · tén dálars]
"When is your birthday?" / "In June." — "Quando é seu aniversário?" / "Em junho."
IPA: /wɛn ɪz jɔːr ˈbɜːrθdeɪ · ɪn dʒuːn/ · PT: [uén iz iór bârthdei · in djún]
"Do you want some coffee?" / "Yes, please." — "Você quer um café?" / "Sim, por favor."
IPA: /duː juː wɑːnt sʌm ˈkɔːfi · jɛs pliːz/ · PT: [dú iú uánt sâm kófi · iés plíz]
"Why are you sad?" / "I had a bad day." — "Por que você está triste?" / "Tive um dia ruim."
IPA: /waɪ ɑːr juː sæd · aɪ hæd ə bæd deɪ/ · PT: [uái ár iú séd · ái rréd a béd dêi]
"What time is it?" / "It's three o'clock." — "Que horas são?" / "São três horas."
IPA: /wʌt taɪm ɪz ɪt · ɪts θriː əˈklɑːk/ · PT: [uât táim iz ít · íts thrí aklák]
"Does he speak Spanish?" / "Yes, fluently." — "Ele fala espanhol?" / "Sim, fluentemente."
IPA: /dʌz hiː spiːk ˈspænɪʃ · jɛs ˈfluːəntli/ · PT: [dâz rrí spík spénich · iés flúentli]
"How do you go to work?" / "By bike." — "Como você vai para o trabalho?" / "De bicicleta."
IPA: /haʊ duː juː ɡoʊ tə wɜːrk · baɪ baɪk/ · PT: [rráu dú iú gôu tu uârk · bái báik]
"What do you do on weekends?" / "I relax at home." — "O que você faz nos fins de semana?" / "Eu relaxo em casa."
IPA: /wʌt duː juː duː ɑːn ˈwiːkɛndz · aɪ rɪˈlæks æt hoʊm/ · PT: [uât dú iú dú ón uíkendz · ái riléks ét rrôum]`;

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
      id: `lesson_7_grammar_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_7_grammar_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_7_grammar_a1'] = meta['lesson_7_grammar_a1'] || {};
meta['lesson_7_grammar_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
