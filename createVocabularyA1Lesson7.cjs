const fs = require('fs');

const rawText = `meals — refeições
IPA: /miːlz/ · PT: [míouz]
breakfast — café da manhã
IPA: /ˈbrɛkfəst/ · PT: [brékfest]
lunch — almoço
IPA: /lʌntʃ/ · PT: [lântch]
dinner — jantar
IPA: /ˈdɪnər/ · PT: [díner]
snack — lanche
IPA: /snæk/ · PT: [snék]

Os alimentos
6. cereal — cereal
IPA: /ˈsɪriəl/ · PT: [sírial]
7. bread — pão
IPA: /brɛd/ · PT: [bréd]
8. cheese — queijo
IPA: /tʃiːz/ · PT: [tchíz]
9. ham — presunto
IPA: /hæm/ · PT: [rrém]
10. eggs — ovos
IPA: /ɛɡz/ · PT: [égz]
11. toast — torrada
IPA: /toʊst/ · PT: [tôust]
12. butter — manteiga
IPA: /ˈbʌtər/ · PT: [bâter]
13. jam — geleia
IPA: /dʒæm/ · PT: [djém]
14. yogurt — iogurte
IPA: /ˈjoʊɡərt/ · PT: [iôugurt]
15. fruit — fruta
IPA: /fruːt/ · PT: [frút]
16. chips — batata frita (de pacote) (US; UK: crisps)
IPA: /tʃɪps/ · PT: [tchíps]
17. cookies — biscoitos (US; UK: biscuits)
IPA: /ˈkʊkiz/ · PT: [kúkiz]
18. sandwich — sanduíche
IPA: /ˈsænwɪtʃ/ · PT: [sénuitch]
19. cake — bolo
IPA: /keɪk/ · PT: [kêik]
20. candy bar — barra de chocolate
IPA: /ˈkændi bɑːr/ · PT: [kéndi bár]

Bebidas e extras úteis
21. coffee — café
IPA: /ˈkɔːfi/ · PT: [kófi]
22. milk — leite
IPA: /mɪlk/ · PT: [míouk]
23. juice — suco
IPA: /dʒuːs/ · PT: [djús]
24. tea — chá
IPA: /tiː/ · PT: [tí]
25. honey — mel
IPA: /ˈhʌni/ · PT: [rrâni]

26. I have cereal for breakfast. — Eu como cereal no café da manhã.
IPA: /aɪ hæv ˈsɪriəl fɔːr ˈbrɛkfəst/ · PT: [ái rrév sírial fór brékfest]
27. I drink coffee with milk. — Eu tomo café com leite.
IPA: /aɪ drɪŋk ˈkɔːfi wɪð mɪlk/ · PT: [ái drínk kófi uídh míouk]
28. I eat toast with butter. — Eu como torrada com manteiga.
IPA: /aɪ iːt toʊst wɪð ˈbʌtər/ · PT: [ái ít tôust uídh bâter]
29. I put jam on my bread. — Eu passo geleia no pão.
IPA: /aɪ pʊt dʒæm ɑːn maɪ brɛd/ · PT: [ái pút djém ón mái bréd]
30. I have a yogurt too. — Eu como um iogurte também.
IPA: /aɪ hæv ə ˈjoʊɡərt tuː/ · PT: [ái rrév a iôugurt tú]

No almoço
31. I have a sandwich for lunch. — Eu como um sanduíche no almoço.
IPA: /aɪ hæv ə ˈsænwɪtʃ fɔːr lʌntʃ/ · PT: [ái rrév a sénuitch fór lântch]
32. The sandwich has ham and cheese. — O sanduíche tem presunto e queijo.
IPA: /ðə ˈsænwɪtʃ hæz hæm ænd tʃiːz/ · PT: [dha sénuitch rréz rrém énd tchíz]
33. I eat some fruit. — Eu como uma fruta.
IPA: /aɪ iːt sʌm fruːt/ · PT: [ái ít sâm frút]
34. I drink juice. — Eu tomo suco.
IPA: /aɪ drɪŋk dʒuːs/ · PT: [ái drínk djús]

Lanche da tarde
35. I want a snack. — Eu quero um lanche.
IPA: /aɪ wɑːnt ə snæk/ · PT: [ái uánt a snék]
36. I eat some cookies. — Eu como uns biscoitos.
IPA: /aɪ iːt sʌm ˈkʊkiz/ · PT: [ái ít sâm kúkiz]
37. I open a bag of chips. — Eu abro um pacote de batata frita.
IPA: /aɪ ˈoʊpən ə bæɡ əv tʃɪps/ · PT: [ái ôupan a bég ov tchíps]
38. I have a candy bar. — Eu como uma barra de chocolate.
IPA: /aɪ hæv ə ˈkændi bɑːr/ · PT: [ái rrév a kéndi bár]

No jantar
39. We have dinner at eight. — Nós jantamos às oito.
IPA: /wiː hæv ˈdɪnər æt eɪt/ · PT: [uí rrév díner ét êit]
40. I cook eggs for dinner. — Eu faço ovos no jantar.
IPA: /aɪ kʊk ɛɡz fɔːr ˈdɪnər/ · PT: [ái kúk égz fór díner]
41. We eat bread with cheese. — Nós comemos pão com queijo.
IPA: /wiː iːt brɛd wɪð tʃiːz/ · PT: [uí ít bréd uídh tchíz]
42. There is cake for dessert. — Tem bolo de sobremesa.
IPA: /ðɛr ɪz keɪk fɔːr dɪˈzɜːrt/ · PT: [dhér iz kêik fór dizârt]

No mercado
43. I buy bread and milk. — Eu compro pão e leite.
IPA: /aɪ baɪ brɛd ænd mɪlk/ · PT: [ái bái bréd énd míouk]
44. We need eggs and butter. — Precisamos de ovos e manteiga.
IPA: /wiː niːd ɛɡz ænd ˈbʌtər/ · PT: [uí níd égz énd bâter]
45. The cheese is fresh. — O queijo está fresco.
IPA: /ðə tʃiːz ɪz frɛʃ/ · PT: [dha tchíz iz fréch]

Café com amigos
46. Do you want some tea? — Você quer um chá?
IPA: /duː juː wɑːnt sʌm tiː/ · PT: [dú iú uánt sâm tí]
47. I'll have a coffee, please. — Vou querer um café, por favor.
IPA: /aɪl hæv ə ˈkɔːfi pliːz/ · PT: [áiou rrév a kófi plíz]
48. This cake is delicious. — Este bolo está delicioso.
IPA: /ðɪs keɪk ɪz dɪˈlɪʃəs/ · PT: [dhís kêik iz delíchas]
49. Have a cookie. — Pega um biscoito.
IPA: /hæv ə ˈkʊki/ · PT: [rrév a kúki]
50. The fruit is very sweet. — A fruta está bem doce.
IPA: /ðə fruːt ɪz ˈvɛri swiːt/ · PT: [dha frút iz véri suít]

51. I like cheese. — Eu gosto de queijo.
IPA: /aɪ laɪk tʃiːz/ · PT: [ái láik tchíz]
52. She eats fruit. — Ela come fruta.
IPA: /ʃiː iːts fruːt/ · PT: [chí íts frút]
53. We drink coffee. — Nós tomamos café.
IPA: /wiː drɪŋk ˈkɔːfi/ · PT: [uí drínk kófi]
54. He wants a sandwich. — Ele quer um sanduíche.
IPA: /hiː wɑːnts ə ˈsænwɪtʃ/ · PT: [rrí uánts a sénuitch]

Um pouco mais
55. I usually have eggs for breakfast. — Eu geralmente como ovos no café da manhã.
IPA: /aɪ ˈjuːʒuəli hæv ɛɡz fɔːr ˈbrɛkfəst/ · PT: [ái iújuali rrév égz fór brékfest]
56. She doesn't eat bread. — Ela não come pão.
IPA: /ʃiː ˈdʌznt iːt brɛd/ · PT: [chí dâznt ít bréd]
57. Do you like yogurt? — Você gosta de iogurte?
IPA: /duː juː laɪk ˈjoʊɡərt/ · PT: [dú iú láik iôugurt]
58. There isn't any butter. — Não tem manteiga.
IPA: /ðɛr ˈɪznt ˈɛni ˈbʌtər/ · PT: [dhér íznt éni bâter]

Perguntas e negações
59. What do you have for lunch? — O que você come no almoço?
IPA: /wʌt duː juː hæv fɔːr lʌntʃ/ · PT: [uât dú iú rrév fór lântch]
60. How many eggs do you want? — Quantos ovos você quer?
IPA: /haʊ ˈmɛni ɛɡz duː juː wɑːnt/ · PT: [rráu méni égz dú iú uánt]
61. I don't like ham very much. — Eu não gosto muito de presunto.
IPA: /aɪ doʊnt laɪk hæm ˈvɛri mʌtʃ/ · PT: [ái dôunt láik rrém véri mâtch]
62. Is there any cake left? — Sobrou bolo?
IPA: /ɪz ðɛr ˈɛni keɪk lɛft/ · PT: [iz dhér éni kêik léft]

Conectores e tempos verbais
63. I eat toast because I love butter. — Eu como torrada porque adoro manteiga.
IPA: /aɪ iːt toʊst bɪˈkɔːz aɪ lʌv ˈbʌtər/ · PT: [ái ít tôust bikóz ái lâv bâter]
64. She is making a sandwich now. — Ela está fazendo um sanduíche agora.
IPA: /ʃiː ɪz ˈmeɪkɪŋ ə ˈsænwɪtʃ naʊ/ · PT: [chí iz mêikin a sénuitch náu]
65. We had cake at the party yesterday. — Nós comemos bolo na festa ontem.
IPA: /wiː hæd keɪk æt ðə ˈpɑːrti ˈjɛstərdeɪ/ · PT: [uí rréd kêik ét dha párti iéster dei]
66. I was eating cereal when you called. — Eu estava comendo cereal quando você ligou.
IPA: /aɪ wəz ˈiːtɪŋ ˈsɪriəl wɛn juː kɔːld/ · PT: [ái uâz ítin sírial uén iú kóld]
67. He bought bread, cheese, and ham. — Ele comprou pão, queijo e presunto.
IPA: /hiː bɔːt brɛd tʃiːz ænd hæm/ · PT: [rrí bót bréd tchíz énd rrém]

As mais ricas
68. I always have a big breakfast, but a light dinner. — Eu sempre tomo um café da manhã reforçado, mas um jantar leve.
IPA: /aɪ ˈɔːlweɪz hæv ə bɪɡ ˈbrɛkfəst bʌt ə laɪt ˈdɪnər/ · PT: [ái ólueiz rrév a bíg brékfest bât a láit díner]
69. She doesn't eat candy bars because they are too sweet. — Ela não come barras de chocolate porque são muito doces.
IPA: /ʃiː ˈdʌznt iːt ˈkændi bɑːrz bɪˈkɔːz ðeɪ ɑːr tuː swiːt/ · PT: [chí dâznt ít kéndi bárz bikóz dhêi ár tú suít]
70. If you're hungry, have some fruit or a yogurt. — Se você está com fome, coma uma fruta ou um iogurte.
IPA: /ɪf jʊr ˈhʌŋɡri hæv sʌm fruːt ɔːr ə ˈjoʊɡərt/ · PT: [if iór râNgri rrév sâm frút ór a iôugurt]
71. Would you like coffee or tea with your cake? — Você quer café ou chá com o seu bolo?
IPA: /wʊd juː laɪk ˈkɔːfi ɔːr tiː wɪð jɔːr keɪk/ · PT: [uúd iú láik kófi ór tí uídh iór kêik]
72. We usually eat eggs and toast, but today we had cereal. — Geralmente comemos ovos e torrada, mas hoje comemos cereal.
IPA: /wiː ˈjuːʒuəli iːt ɛɡz ænd toʊst bʌt təˈdeɪ wiː hæd ˈsɪriəl/ · PT: [uí iújuali ít égz énd tôust bât tudêi uí rréd sírial]
73. After lunch, I like to have something sweet, like a cookie. — Depois do almoço, eu gosto de comer algo doce, como um biscoito.
IPA: /ˈæftər lʌntʃ aɪ laɪk tə hæv ˈsʌmθɪŋ swiːt laɪk ə ˈkʊki/ · PT: [éfter lântch ái láik tu rrév sâmthin suít láik a kúki]
74. Do you prefer a ham sandwich or a cheese sandwich? — Você prefere um sanduíche de presunto ou de queijo?
IPA: /duː juː prɪˈfɜːr ə hæm ˈsænwɪtʃ ɔːr ə tʃiːz ˈsænwɪtʃ/ · PT: [dú iú priférr a rrém sénuitch ór a tchíz sénuitch]
75. There was no milk, so I ate my cereal with yogurt. — Não tinha leite, então comi meu cereal com iogurte.
IPA: /ðɛr wəz noʊ mɪlk soʊ aɪ eɪt maɪ ˈsɪriəl wɪð ˈjoʊɡərt/ · PT: [dhér uâz nôu míouk sôu ái êit mái sírial uídh iôugurt]

"What do you want for breakfast?" / "Cereal, please." — "O que você quer no café?" / "Cereal, por favor."
IPA: /wʌt duː juː wɑːnt fɔːr ˈbrɛkfəst · ˈsɪriəl pliːz/ · PT: [uât dú iú uánt fór brékfest · sírial plíz]
"Do you like cheese?" / "Yes, I love it." — "Você gosta de queijo?" / "Sim, eu adoro."
IPA: /duː juː laɪk tʃiːz · jɛs aɪ lʌv ɪt/ · PT: [dú iú láik tchíz · iés ái lâv ít]
"Is there any bread?" / "Yes, on the table." — "Tem pão?" / "Sim, na mesa."
IPA: /ɪz ðɛr ˈɛni brɛd · jɛs ɑːn ðə ˈteɪbl̩/ · PT: [iz dhér éni bréd · iés ón dha têibou]
"What's in the sandwich?" / "Ham and cheese." — "O que tem no sanduíche?" / "Presunto e queijo."
IPA: /wʌts ɪn ðə ˈsænwɪtʃ · hæm ænd tʃiːz/ · PT: [uâts in dha sénuitch · rrém énd tchíz]
"Do you want a snack?" / "Yes, some fruit." — "Você quer um lanche?" / "Sim, uma fruta."
IPA: /duː juː wɑːnt ə snæk · jɛs sʌm fruːt/ · PT: [dú iú uánt a snék · iés sâm frút]
"Coffee or tea?" / "Coffee, please." — "Café ou chá?" / "Café, por favor."
IPA: /ˈkɔːfi ɔːr tiː · ˈkɔːfi pliːz/ · PT: [kófi ór tí · kófi plíz]
"How many eggs?" / "Two, please." — "Quantos ovos?" / "Dois, por favor."
IPA: /haʊ ˈmɛni ɛɡz · tuː pliːz/ · PT: [rráu méni égz · tú plíz]
"Do you eat dinner late?" / "Yes, around nine." — "Você janta tarde?" / "Sim, por volta das nove."
IPA: /duː juː iːt ˈdɪnər leɪt · jɛs əˈraʊnd naɪn/ · PT: [dú iú ít díner lêit · iés aráund náin]
"Is the cake good?" / "Yes, delicious." — "O bolo está bom?" / "Sim, delicioso."
IPA: /ɪz ðə keɪk ɡʊd · jɛs dɪˈlɪʃəs/ · PT: [iz dha kêik gúd · iés delíchas]
"Do you want butter on your toast?" / "Yes, please." — "Você quer manteiga na torrada?" / "Sim, por favor."
IPA: /duː juː wɑːnt ˈbʌtər ɑːn jɔːr toʊst · jɛs pliːz/ · PT: [dú iú uánt bâter ón iór tôust · iés plíz]
"What's for lunch?" / "A sandwich." — "O que tem pro almoço?" / "Um sanduíche."
IPA: /wʌts fɔːr lʌntʃ · ə ˈsænwɪtʃ/ · PT: [uâts fór lântch · a sénuitch]
"Do you like yogurt?" / "Not really." — "Você gosta de iogurte?" / "Nem tanto."
IPA: /duː juː laɪk ˈjoʊɡərt · nɑːt ˈrɪli/ · PT: [dú iú láik iôugurt · nót ríli]
"Can I have a cookie?" / "Sure, take one." — "Posso pegar um biscoito?" / "Claro, pega um."
IPA: /kæn aɪ hæv ə ˈkʊki · ʃʊr teɪk wʌn/ · PT: [kén ái rrév a kúki · chúr têik uân]
"Is there any jam?" / "Yes, strawberry jam." — "Tem geleia?" / "Sim, geleia de morango."
IPA: /ɪz ðɛr ˈɛni dʒæm · jɛs ˈstrɔːbɛri dʒæm/ · PT: [iz dhér éni djém · iés stróberi djém]
"What do you drink in the morning?" / "Juice." — "O que você bebe de manhã?" / "Suco."
IPA: /wʌt duː juː drɪŋk ɪn ðə ˈmɔːrnɪŋ · dʒuːs/ · PT: [uât dú iú drínk in dha mórnin · djús]
"Do you want chips?" / "Yes, I'm hungry." — "Você quer batata frita?" / "Sim, estou com fome."
IPA: /duː juː wɑːnt tʃɪps · jɛs aɪm ˈhʌŋɡri/ · PT: [dú iú uánt tchíps · iés áim râNgri]
"Where's the cheese?" / "In the fridge." — "Onde está o queijo?" / "Na geladeira."
IPA: /wɛrz ðə tʃiːz · ɪn ðə frɪdʒ/ · PT: [uérz dha tchíz · in dha frídj]
"Do you eat breakfast every day?" / "Yes, always." — "Você toma café todo dia?" / "Sim, sempre."
IPA: /duː juː iːt ˈbrɛkfəst ˈɛvri deɪ · jɛs ˈɔːlweɪz/ · PT: [dú iú ít brékfest évri dêi · iés ólueiz]
"What's your favorite snack?" / "A candy bar." — "Qual é seu lanche favorito?" / "Uma barra de chocolate."
IPA: /wʌts jɔːr ˈfeɪvərɪt snæk · ə ˈkændi bɑːr/ · PT: [uâts iór fêivorit snék · a kéndi bár]
"Is the fruit fresh?" / "Yes, very fresh." — "A fruta está fresca?" / "Sim, bem fresca."
IPA: /ɪz ðə fruːt frɛʃ · jɛs ˈvɛri frɛʃ/ · PT: [iz dha frút fréch · iés véri fréch]
"Do you want milk in your coffee?" / "No, black, please." — "Você quer leite no café?" / "Não, puro, por favor."
IPA: /duː juː wɑːnt mɪlk ɪn jɔːr ˈkɔːfi · noʊ blæk pliːz/ · PT: [dú iú uánt míouk in iór kófi · nôu blék plíz]
"What time is dinner?" / "At eight." — "A que horas é o jantar?" / "Às oito."
IPA: /wʌt taɪm ɪz ˈdɪnər · æt eɪt/ · PT: [uât táim iz díner · ét êit]
"Do you like sweet or salty snacks?" / "Sweet." — "Você gosta de lanches doces ou salgados?" / "Doces."
IPA: /duː juː laɪk swiːt ɔːr ˈsɔːlti snæks · swiːt/ · PT: [dú iú láik suít ór sólti snéks · suít]
"Is there ham in the fridge?" / "No, we ran out." — "Tem presunto na geladeira?" / "Não, acabou."
IPA: /ɪz ðɛr hæm ɪn ðə frɪdʒ · noʊ wiː ræn aʊt/ · PT: [iz dhér rrém in dha frídj · nôu uí rén áut]
"Would you like some cake?" / "Yes, a small piece." — "Você quer um pouco de bolo?" / "Sim, um pedaço pequeno."
IPA: /wʊd juː laɪk sʌm keɪk · jɛs ə smɔːl piːs/ · PT: [uúd iú láik sâm kêik · iés a smól pís]
`;

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
      id: `lesson_7_vocabulary_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_7_vocabulary_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_7_vocabulary_a1'] = meta['lesson_7_vocabulary_a1'] || {};
meta['lesson_7_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
