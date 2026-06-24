const fs = require('fs');

const rawText = `happy — feliz
IPA: /ˈhæpi/ · PT: [rrépi]
sad — triste
IPA: /sæd/ · PT: [séd]
tall — alto
IPA: /tɔːl/ · PT: [tól]
short — baixo
IPA: /ʃɔːrt/ · PT: [chórt]
young — jovem
IPA: /jʌŋ/ · PT: [iâN]
old — velho / idoso
IPA: /oʊld/ · PT: [ôuld]
strong — forte
IPA: /strɔːŋ/ · PT: [stróN]
weak — fraco
IPA: /wiːk/ · PT: [uík]
fat — gordo
IPA: /fæt/ · PT: [fét]
thin — magro
IPA: /θɪn/ · PT: [thín]
beautiful — lindo / bonito
IPA: /ˈbjuːtɪfl̩/ · PT: [biútifou]
ugly — feio
IPA: /ˈʌɡli/ · PT: [âgli]

Outros adjetivos para descrever pessoas
13. kind — gentil / bondoso
IPA: /kaɪnd/ · PT: [káind]
14. friendly — simpático / amigável
IPA: /ˈfrɛndli/ · PT: [fréndli]
15. shy — tímido
IPA: /ʃaɪ/ · PT: [chái]
16. smart — inteligente / esperto
IPA: /smɑːrt/ · PT: [smárt]
17. funny — engraçado
IPA: /ˈfʌni/ · PT: [fâni]
18. tired — cansado
IPA: /ˈtaɪərd/ · PT: [táierd]
19. nice — legal / agradável
IPA: /naɪs/ · PT: [náis]
20. handsome — bonito (homem)
IPA: /ˈhænsəm/ · PT: [rrénsam]
21. pretty — bonita
IPA: /ˈprɪti/ · PT: [príti]
22. slim — esbelto / magro
IPA: /slɪm/ · PT: [slím]
23. big — grande
IPA: /bɪɡ/ · PT: [bíg]
24. small — pequeno
IPA: /smɔːl/ · PT: [smól]
25. healthy — saudável
IPA: /ˈhɛlθi/ · PT: [rrélthi]

Descrevendo a família
26. My brother is tall. — Meu irmão é alto.
IPA: /maɪ ˈbrʌðər ɪz tɔːl/ · PT: [mái brâdher iz tól]
27. My sister is short. — Minha irmã é baixa.
IPA: /maɪ ˈsɪstər ɪz ʃɔːrt/ · PT: [mái síster iz chórt]
28. My grandfather is old. — Meu avô é idoso.
IPA: /maɪ ˈɡrænfɑːðər ɪz oʊld/ · PT: [mái grénfadher iz ôuld]
29. My cousin is young. — Meu primo é jovem.
IPA: /maɪ ˈkʌzn̩ ɪz jʌŋ/ · PT: [mái kâzan iz iâN]
30. My mother is beautiful. — Minha mãe é linda.
IPA: /maɪ ˈmʌðər ɪz ˈbjuːtɪfl̩/ · PT: [mái mâdher iz biútifou]

Na academia / saúde
31. He is very strong. — Ele é muito forte.
IPA: /hiː ɪz ˈvɛri strɔːŋ/ · PT: [rrí iz véri stróN]
32. I feel weak today. — Eu me sinto fraco hoje.
IPA: /aɪ fiːl wiːk təˈdeɪ/ · PT: [ái fíou uík tudêi]
33. She is thin and healthy. — Ela é magra e saudável.
IPA: /ʃiː ɪz θɪn ænd ˈhɛlθi/ · PT: [chí iz thín énd rrélthi]
34. He wants to be strong. — Ele quer ser forte.
IPA: /hiː wɑːnts tə biː strɔːŋ/ · PT: [rrí uánts tu bí stróN]

Saindo com amigos
35. My friend is funny. — Meu amigo é engraçado.
IPA: /maɪ frɛnd ɪz ˈfʌni/ · PT: [mái frénd iz fâni]
36. She is very friendly. — Ela é muito simpática.
IPA: /ʃiː ɪz ˈvɛri ˈfrɛndli/ · PT: [chí iz véri fréndli]
37. He is shy at parties. — Ele é tímido em festas.
IPA: /hiː ɪz ʃaɪ æt ˈpɑːrtiz/ · PT: [rrí iz chái ét pártiz]
38. They are happy together. — Eles estão felizes juntos.
IPA: /ðeɪ ɑːr ˈhæpi təˈɡɛðər/ · PT: [dhêi ár rrépi tuguédher]

No trabalho / pessoas
39. My boss is kind. — Meu chefe é gentil.
IPA: /maɪ bɔːs ɪz kaɪnd/ · PT: [mái bós iz káind]
40. The new guy is smart. — O cara novo é inteligente.
IPA: /ðə nuː ɡaɪ ɪz smɑːrt/ · PT: [dha niú gái iz smárt]
41. She is a nice person. — Ela é uma pessoa legal.
IPA: /ʃiː ɪz ə naɪs ˈpɜːrsn̩/ · PT: [chí iz a náis pârsan]

Descrevendo aparência
42. He is handsome. — Ele é bonito.
IPA: /hiː ɪz ˈhænsəm/ · PT: [rrí iz rrénsam]
43. She is pretty. — Ela é bonita.
IPA: /ʃiː ɪz ˈprɪti/ · PT: [chí iz príti]
44. The baby is small. — O bebê é pequeno.
IPA: /ðə ˈbeɪbi ɪz smɔːl/ · PT: [dha bêibi iz smól]
45. The man is big. — O homem é grande.
IPA: /ðə mæn ɪz bɪɡ/ · PT: [dha mén iz bíg]

Estados e sentimentos
46. I am tired tonight. — Eu estou cansado hoje à noite.
IPA: /aɪ æm ˈtaɪərd təˈnaɪt/ · PT: [ái ém táierd tunáit]
47. She looks sad. — Ela parece triste.
IPA: /ʃiː lʊks sæd/ · PT: [chí lúks séd]
48. He looks happy. — Ele parece feliz.
IPA: /hiː lʊks ˈhæpi/ · PT: [rrí lúks rrépi]

Comparando
49. My dog is small but strong. — Meu cachorro é pequeno mas forte.
IPA: /maɪ dɔːɡ ɪz smɔːl bʌt strɔːŋ/ · PT: [mái dóg iz smól bât stróN]
50. He is old but healthy. — Ele é idoso mas saudável.
IPA: /hiː ɪz oʊld bʌt ˈhɛlθi/ · PT: [rrí iz ôuld bât rrélthi]

Curtas e simples
51. She is happy. — Ela está feliz.
IPA: /ʃiː ɪz ˈhæpi/ · PT: [chí iz rrépi]
52. He is tall. — Ele é alto.
IPA: /hiː ɪz tɔːl/ · PT: [rrí iz tól]
53. They are young. — Eles são jovens.
IPA: /ðeɪ ɑːr jʌŋ/ · PT: [dhêi ár iâN]
54. The man is strong. — O homem é forte.
IPA: /ðə mæn ɪz strɔːŋ/ · PT: [dha mén iz stróN]

Comparativos
55. My brother is taller than me. — Meu irmão é mais alto que eu.
IPA: /maɪ ˈbrʌðər ɪz ˈtɔːlər ðæn miː/ · PT: [mái brâdher iz tóler dhén mí]
56. She is younger than her sister. — Ela é mais nova que a irmã.
IPA: /ʃiː ɪz ˈjʌŋɡər ðæn hɜːr ˈsɪstər/ · PT: [chí iz iâNguer dhén rrâr síster]
57. Is he stronger than you? — Ele é mais forte que você?
IPA: /ɪz hiː ˈstrɔːŋɡər ðæn juː/ · PT: [iz rrí stróNguer dhén iú]
58. I am not as tall as him. — Eu não sou tão alto quanto ele.
IPA: /aɪ æm nɑːt æz tɔːl æz hɪm/ · PT: [ái ém nót éz tól éz rrím]

Perguntas e negações
59. Why is she sad? — Por que ela está triste?
IPA: /waɪ ɪz ʃiː sæd/ · PT: [uái iz chí séd]
60. Are you tired? — Você está cansado?
IPA: /ɑːr juː ˈtaɪərd/ · PT: [ár iú táierd]
61. He isn't weak; he's strong. — Ele não é fraco; é forte.
IPA: /hiː ˈɪznt wiːk hiːz strɔːŋ/ · PT: [rrí íznt uík rríz stróN]
62. What does your friend look like? — Como é seu amigo? (aparência)
IPA: /wʌt dʌz jɔːr frɛnd lʊk laɪk/ · PT: [uât dâz iór frénd lúk láik]

Conectores e tempos verbais
63. She is beautiful and very kind. — Ela é linda e muito gentil.
IPA: /ʃiː ɪz ˈbjuːtɪfl̩ ænd ˈvɛri kaɪnd/ · PT: [chí iz biútifou énd véri káind]
64. He looks young, but he is fifty. — Ele parece jovem, mas tem cinquenta.
IPA: /hiː lʊks jʌŋ bʌt hiː ɪz ˈfɪfti/ · PT: [rrí lúks iâN bât rrí iz fífti]
65. I was sad yesterday, but I'm happy now. — Eu estava triste ontem, mas estou feliz agora.
IPA: /aɪ wəz sæd ˈjɛstərdeɪ bʌt aɪm ˈhæpi naʊ/ · PT: [ái uâz séd iéster dei bât áim rrépi náu]
66. My grandfather was strong when he was young. — Meu avô era forte quando era jovem.
IPA: /maɪ ˈɡrænfɑːðər wəz strɔːŋ wɛn hiː wəz jʌŋ/ · PT: [mái grénfadher uâz stróN uén rrí uâz iâN]
67. She became famous because she is talented. — Ela ficou famosa porque é talentosa.
IPA: /ʃiː bɪˈkeɪm ˈfeɪməs bɪˈkɔːz ʃiː ɪz ˈtæləntɪd/ · PT: [chí bikêim fêimas bikóz chí iz télentid]

As mais ricas
68. Although he is old, he is still very strong. — Embora ele seja idoso, ainda é muito forte.
IPA: /ɔːlˈðoʊ hiː ɪz oʊld hiː ɪz stɪl ˈvɛri strɔːŋ/ · PT: [oldhôu rrí iz ôuld rrí iz stíou véri stróN]
69. She is the most beautiful person I know. — Ela é a pessoa mais linda que conheço.
IPA: /ʃiː ɪz ðə moʊst ˈbjuːtɪfl̩ ˈpɜːrsn̩ aɪ noʊ/ · PT: [chí iz dha môust biútifou pârsan ái nôu]
70. He used to be thin, but now he is heavier. — Ele costumava ser magro, mas agora está mais pesado.
IPA: /hiː juːst tə biː θɪn bʌt naʊ hiː ɪz ˈhɛviər/ · PT: [rrí iúst tu bí thín bât náu rrí iz rrévier]
71. People say I look like my mother when she was young. — As pessoas dizem que eu pareço minha mãe quando ela era jovem.
IPA: /ˈpiːpl̩ seɪ aɪ lʊk laɪk maɪ ˈmʌðər wɛn ʃiː wəz jʌŋ/ · PT: [pípou sêi ái lúk láik mái mâdher uén chí uâz iâN]
72. He isn't tall, but he is a great basketball player. — Ele não é alto, mas é um ótimo jogador de basquete.
IPA: /hiː ˈɪznt tɔːl bʌt hiː ɪz ə ɡreɪt ˈbæskɪtbɔːl ˈpleɪər/ · PT: [rrí íznt tól bât rrí iz a grêit béskitból plêier]
73. My sister is shy, so she doesn't like big parties. — Minha irmã é tímida, então não gosta de festas grandes.
IPA: /maɪ ˈsɪstər ɪz ʃaɪ soʊ ʃiː ˈdʌznt laɪk bɪɡ ˈpɑːrtiz/ · PT: [mái síster iz chái sôu chí dâznt láik bíg pártiz]
74. Have you noticed how happy she looks today? — Você reparou como ela parece feliz hoje?
IPA: /hæv juː ˈnoʊtɪst haʊ ˈhæpi ʃiː lʊks təˈdeɪ/ · PT: [rrév iú nôutist rráu rrépi chí lúks tudêi]
75. He is strong and healthy because he exercises every day. — Ele é forte e saudável porque se exercita todo dia.
IPA: /hiː ɪz strɔːŋ ænd ˈhɛlθi bɪˈkɔːz hiː ˈɛksərsaɪzɪz ˈɛvri deɪ/ · PT: [rrí iz stróN énd rrélthi bikóz rrí éksersaiziz évri dêi]

"Is your brother tall?" / "Yes, very tall." — "Seu irmão é alto?" / "Sim, muito alto."
IPA: /ɪz jɔːr ˈbrʌðər tɔːl · jɛs ˈvɛri tɔːl/ · PT: [iz iór brâdher tól · iés véri tól]
"Why are you sad?" / "I lost my keys." — "Por que você está triste?" / "Perdi minhas chaves."
IPA: /waɪ ɑːr juː sæd · aɪ lɔːst maɪ kiːz/ · PT: [uái ár iú séd · ái lóst mái kíz]
"Is she young?" / "No, she's quite old." — "Ela é jovem?" / "Não, é bem idosa."
IPA: /ɪz ʃiː jʌŋ · noʊ ʃiːz kwaɪt oʊld/ · PT: [iz chí iâN · nôu chíz kuáit ôuld]
"Are you happy?" / "Yes, very happy." — "Você está feliz?" / "Sim, muito feliz."
IPA: /ɑːr juː ˈhæpi · jɛs ˈvɛri ˈhæpi/ · PT: [ár iú rrépi · iés véri rrépi]
"Is he strong?" / "Yes, he works out a lot." — "Ele é forte?" / "Sim, ele treina muito."
IPA: /ɪz hiː strɔːŋ · jɛs hiː wɜːrks aʊt ə lɑːt/ · PT: [iz rrí stróN · iés rrí uârks áut a lót]
"Do you feel weak?" / "A little, yes." — "Você se sente fraco?" / "Um pouco, sim."
IPA: /duː juː fiːl wiːk · ə ˈlɪtl̩ jɛs/ · PT: [dú iú fíou uík · a lítou iés]
"What does she look like?" / "She's tall and thin." — "Como ela é?" / "Ela é alta e magra."
IPA: /wʌt dʌz ʃiː lʊk laɪk · ʃiːz tɔːl ænd θɪn/ · PT: [uât dâz chí lúk láik · chíz tól énd thín]
"Is he handsome?" / "Yes, I think so." — "Ele é bonito?" / "Sim, acho que sim."
IPA: /ɪz hiː ˈhænsəm · jɛs aɪ θɪŋk soʊ/ · PT: [iz rrí rrénsam · iés ái thínk sôu]
"Are they friendly?" / "Yes, very." — "Eles são simpáticos?" / "Sim, muito."
IPA: /ɑːr ðeɪ ˈfrɛndli · jɛs ˈvɛri/ · PT: [ár dhêi fréndli · iés véri]
"Is your dog big?" / "No, it's small." — "Seu cachorro é grande?" / "Não, é pequeno."
IPA: /ɪz jɔːr dɔːɡ bɪɡ · noʊ ɪts smɔːl/ · PT: [iz iór dóg bíg · nôu íts smól]
"Is she beautiful?" / "Yes, absolutely." — "Ela é linda?" / "Sim, com certeza."
IPA: /ɪz ʃiː ˈbjuːtɪfl̩ · jɛs ˌæbsəˈluːtli/ · PT: [iz chí biútifou · iés ébsalutli]
"Are you tired?" / "Yes, I need to sleep." — "Você está cansado?" / "Sim, preciso dormir."
IPA: /ɑːr juː ˈtaɪərd · jɛs aɪ niːd tə sliːp/ · PT: [ár iú táierd · iés ái níd tu slíp]
"Is your teacher kind?" / "Yes, she is." — "Sua professora é gentil?" / "Sim, é."
IPA: /ɪz jɔːr ˈtiːtʃər kaɪnd · jɛs ʃiː ɪz/ · PT: [iz iór títcher káind · iés chí iz]
"Is he shy?" / "A little, around new people." — "Ele é tímido?" / "Um pouco, perto de gente nova."
IPA: /ɪz hiː ʃaɪ · ə ˈlɪtl̩ əˈraʊnd nuː ˈpiːpl̩/ · PT: [iz rrí chái · a lítou aráund niú pípou]
"Who is taller, you or your brother?" / "My brother is." — "Quem é mais alto, você ou seu irmão?" / "Meu irmão."
IPA: /huː ɪz ˈtɔːlər juː ɔːr jɔːr ˈbrʌðər · maɪ ˈbrʌðər ɪz/ · PT: [rrú iz tóler iú ór iór brâdher · mái brâdher iz]
"Is your grandmother old?" / "Yes, she's eighty." — "Sua avó é idosa?" / "Sim, ela tem oitenta."
IPA: /ɪz jɔːr ˈɡrænmʌðər oʊld · jɛs ʃiːz ˈeɪti/ · PT: [iz iór grénmadher ôuld · iés chíz êiti]
"Are you healthy?" / "Yes, I exercise daily." — "Você é saudável?" / "Sim, me exercito todo dia."
IPA: /ɑːr juː ˈhɛlθi · jɛs aɪ ˈɛksərsaɪz ˈdeɪli/ · PT: [ár iú rrélthi · iés ái éksersaiz dêili]
"Is he funny?" / "Yes, he makes me laugh." — "Ele é engraçado?" / "Sim, ele me faz rir."
IPA: /ɪz hiː ˈfʌni · jɛs hiː meɪks miː læf/ · PT: [iz rrí fâni · iés rrí mêiks mí léf]
"Is she smart?" / "Yes, very intelligent." — "Ela é inteligente?" / "Sim, muito inteligente."
IPA: /ɪz ʃiː smɑːrt · jɛs ˈvɛri ɪnˈtɛlɪdʒənt/ · PT: [iz chí smárt · iés véri intélidjant]
"Are you strong enough?" / "I think so." — "Você é forte o suficiente?" / "Acho que sim."
IPA: /ɑːr juː strɔːŋ ɪˈnʌf · aɪ θɪŋk soʊ/ · PT: [ár iú stróN inâf · ái thínk sôu]
"Does he look young?" / "Yes, younger than his age." — "Ele parece jovem?" / "Sim, mais jovem do que a idade dele."
IPA: /dʌz hiː lʊk jʌŋ · jɛs ˈjʌŋɡər ðæn hɪz eɪdʒ/ · PT: [dâz rrí lúk iâN · iés iâNguer dhén rriz êidj]
"Is the baby small?" / "Yes, just two months old." — "O bebê é pequeno?" / "Sim, tem só dois meses."
IPA: /ɪz ðə ˈbeɪbi smɔːl · jɛs dʒʌst tuː mʌnθs oʊld/ · PT: [iz dha bêibi smól · iés djâst tú mânths ôuld]
"Is your friend nice?" / "Yes, very nice." — "Seu amigo é legal?" / "Sim, muito legal."
IPA: /ɪz jɔːr frɛnd naɪs · jɛs ˈvɛri naɪs/ · PT: [iz iór frénd náis · iés véri náis]
"Are you thin or fat?" / "I'm pretty thin." — "Você é magro ou gordo?" / "Eu sou bem magro."
IPA: /ɑːr juː θɪn ɔːr fæt · aɪm ˈprɪti θɪn/ · PT: [ár iú thín ór fét · áim príti thín]
"Is she prettier than her sister?" / "They're both pretty." — "Ela é mais bonita que a irmã?" / "As duas são bonitas."
IPA: /ɪz ʃiː ˈprɪtiər ðæn hɜːr ˈsɪstər · ðer boʊθ ˈprɪti/ · PT: [iz chí prítier dhén rrâr síster · dhér bôuth príti]`;

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
      id: `lesson_4_vocabulary_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_4_vocabulary_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_4_vocabulary_a1'] = meta['lesson_4_vocabulary_a1'] || {};
meta['lesson_4_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
