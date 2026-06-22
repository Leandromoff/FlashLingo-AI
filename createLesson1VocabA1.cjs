const fs = require('fs');

const rawLines = `I am — Eu sou / estou
IPA: /aɪ æm/ · PT: [ái ém]
I'm — Eu sou / estou (contração)
IPA: /aɪm/ · PT: [áim]
You are — Você é / está
IPA: /juː ɑːr/ · PT: [iú ár]
You're — Você é / está (contração)
IPA: /jʊr/ · PT: [iór]
He is — Ele é / está
IPA: /hiː ɪz/ · PT: [rrí iz]
He's — Ele é / está (contração)
IPA: /hiːz/ · PT: [rríz]
She is — Ela é / está
IPA: /ʃiː ɪz/ · PT: [chí iz]
She's — Ela é / está (contração)
IPA: /ʃiːz/ · PT: [chíz]
It is — Ele/ela/isto é / está (coisas)
IPA: /ɪt ɪz/ · PT: [ít iz]
It's — É / está (contração)
IPA: /ɪts/ · PT: [íts]
We are — Nós somos / estamos
IPA: /wiː ɑːr/ · PT: [uí ár]
We're — Nós somos / estamos (contração)
IPA: /wɪr/ · PT: [uír]
They are — Eles/elas são / estão
IPA: /ðeɪ ɑːr/ · PT: [dhêi ár]
They're — Eles/elas são / estão (contração)
IPA: /ðer/ · PT: [dhér]
I am not / I'm not — Eu não sou / estou
IPA: /aɪm nɑːt/ · PT: [áim nót]
You aren't — Você não é / está
IPA: /juː ˈɑːrnt/ · PT: [iú árent]
He isn't — Ele não é / está
IPA: /hiː ˈɪznt/ · PT: [rrí íznt]
She isn't — Ela não é / está
IPA: /ʃiː ˈɪznt/ · PT: [chí íznt]
It isn't — Não é / está (coisas)
IPA: /ɪt ˈɪznt/ · PT: [ít íznt]
We aren't — Nós não somos / estamos
IPA: /wiː ˈɑːrnt/ · PT: [uí árent]
They aren't — Eles não são / estão
IPA: /ðeɪ ˈɑːrnt/ · PT: [dhêi árent]
Am I? — Eu sou / estou?
IPA: /æm aɪ/ · PT: [ém ái]
Are you? — Você é / está?
IPA: /ɑːr juː/ · PT: [ár iú]
Is he? — Ele é / está?
IPA: /ɪz hiː/ · PT: [iz rrí]
Is she? / Is it? / Are they? — Ela é/está? / Isto é/está? / Eles são/estão?
IPA: /ɪz ʃiː · ɪz ɪt · ɑːr ðeɪ/ · PT: [iz chí · iz ít · ár dhêi]

Saindo de casa de manhã
26. I'm ready. — Estou pronto.
IPA: /aɪm ˈrɛdi/ · PT: [áim rrédi]
27. Where are my keys? — Onde estão minhas chaves?
IPA: /wɛr ɑːr maɪ kiːz/ · PT: [uér ár mái kíz]
28. They're on the table. — Estão na mesa.
IPA: /ðer ɑːn ðə ˈteɪbl̩/ · PT: [dhér ón dha têibou]
29. The door is open. — A porta está aberta.
IPA: /ðə dɔːr ɪz ˈoʊpən/ · PT: [dha dór iz ôupan]
30. We're late! — Estamos atrasados!
IPA: /wɪr leɪt/ · PT: [uír lêit]

No mercado
31. How much is it? — Quanto custa?
IPA: /haʊ mʌtʃ ɪz ɪt/ · PT: [rráu mâtch iz ít]
32. It's five dollars. — São cinco dólares.
IPA: /ɪts faɪv ˈdɑːlərz/ · PT: [íts fáiv dálars]
33. The apples are fresh. — As maçãs estão fresquinhas.
IPA: /ðə ˈæpl̩z ɑːr frɛʃ/ · PT: [dha épous ár fréch]
34. Where is the milk? — Onde está o leite?
IPA: /wɛr ɪz ðə mɪlk/ · PT: [uér iz dha mílk]
35. It's in aisle three. — Está no corredor três.
IPA: /ɪts ɪn aɪl θriː/ · PT: [íts in áiou thrí]

No transporte e no trabalho
36. The bus is late. — O ônibus está atrasado.
IPA: /ðə bʌs ɪz leɪt/ · PT: [dha bâs iz lêit]
37. I'm at work. — Estou no trabalho.
IPA: /aɪm æt wɜːrk/ · PT: [áim ét uârk]
38. My boss is busy. — Meu chefe está ocupado.
IPA: /maɪ bɔːs ɪz ˈbɪzi/ · PT: [mái bós iz bízi]
39. The meeting is at ten. — A reunião é às dez.
IPA: /ðə ˈmiːtɪŋ ɪz æt tɛn/ · PT: [dha mítin iz ét tén]
40. We're in a hurry. — Estamos com pressa.
IPA: /wɪr ɪn ə ˈhɜːri/ · PT: [uír in a rrâri]

No restaurante
41. The food is delicious. — A comida está deliciosa.
IPA: /ðə fuːd ɪz dɪˈlɪʃəs/ · PT: [dha fúd iz delíchas]
42. Are you hungry? — Você está com fome?
IPA: /ɑːr juː ˈhʌŋɡri/ · PT: [ár iú râNgri]
43. The waiter is friendly. — O garçom é simpático.
IPA: /ðə ˈweɪtər ɪz ˈfrɛndli/ · PT: [dha uêiter iz fréndli]
44. The bill is ready. — A conta está pronta.
IPA: /ðə bɪl ɪz ˈrɛdi/ · PT: [dha bíou iz rrédi]

Tempo e clima
45. It's sunny today. — Está ensolarado hoje.
IPA: /ɪts ˈsʌni təˈdeɪ/ · PT: [íts sâni tudêi]
46. The weather is nice. — O tempo está bom.
IPA: /ðə ˈwɛðər ɪz naɪs/ · PT: [dha uédher iz náis]
47. It's cold outside. — Está frio lá fora.
IPA: /ɪts koʊld ˌaʊtˈsaɪd/ · PT: [íts kôuld autsáid]

Em casa, relaxando com amigos
48. My friends are here. — Meus amigos estão aqui.
IPA: /maɪ frɛndz ɑːr hɪr/ · PT: [mái fréndz ár rrír]
49. The movie is great. — O filme está ótimo.
IPA: /ðə ˈmuːvi ɪz ɡreɪt/ · PT: [dha múvi iz grêit]
50. We're happy. — Estamos felizes.
IPA: /wɪr ˈhæpi/ · PT: [uír rrépi]

Curtas e simples
51. I am tired. — Estou cansado.
IPA: /aɪ æm ˈtaɪərd/ · PT: [ái ém táierd]
52. She is my friend. — Ela é minha amiga.
IPA: /ʃiː ɪz maɪ frɛnd/ · PT: [chí iz mái frénd]
53. They are at school. — Eles estão na escola.
IPA: /ðeɪ ɑːr æt skuːl/ · PT: [dhêi ár ét skúl]
54. The room is clean. — O quarto está limpo.
IPA: /ðə ruːm ɪz kliːn/ · PT: [dha rrúm iz klín]

Negativas e perguntas
55. We are not ready yet. — Ainda não estamos prontos.
IPA: /wiː ɑːr nɑːt ˈrɛdi jɛt/ · PT: [uí ár nót rrédi iét]
56. He isn't at home. — Ele não está em casa.
IPA: /hiː ˈɪznt æt hoʊm/ · PT: [rrí íznt ét rrôum]
57. Are you a student? — Você é estudante?
IPA: /ɑːr juː ə ˈstuːdənt/ · PT: [ár iú a stúdent]
58. Why are you sad? — Por que você está triste?
IPA: /waɪ ɑːr juː sæd/ · PT: [uái ár iú séd]

Com conectores (because, but, when)
59. The kids are happy because it's their birthday. — As crianças estão felizes porque é aniversário delas.
IPA: /ðə kɪdz ɑːr ˈhæpi bɪˈkɔːz ɪts ðɛr ˈbɜːrθdeɪ/ · PT: [dha kídz ár rrépi bikóz íts dhér bârthdei]
60. I am tired but I am happy. — Estou cansado, mas estou feliz.
IPA: /aɪ æm ˈtaɪərd bʌt aɪ æm ˈhæpi/ · PT: [ái ém táierd bât ái ém rrépi]
61. She is at work when I am at home. — Ela está no trabalho quando eu estou em casa.
IPA: /ʃiː ɪz æt wɜːrk wɛn aɪ æm æt hoʊm/ · PT: [chí iz ét uârk uén ái ém ét rrôum]

Tempos verbais variados (continuous, passado, futuro)
62. It is raining now. — Está chovendo agora.
IPA: /ɪt ɪz ˈreɪnɪŋ naʊ/ · PT: [ít iz rrêinin náu]
63. We are watching a movie. — Estamos assistindo a um filme.
IPA: /wiː ɑːr ˈwɑːtʃɪŋ ə ˈmuːvi/ · PT: [uí ár uátchin a múvi]
64. Are they coming to the party? — Eles estão vindo para a festa?
IPA: /ɑːr ðeɪ ˈkʌmɪŋ tə ðə ˈpɑːrti/ · PT: [ár dhêi kâmin tu dha párti]
65. I was at the gym yesterday. — Eu estava na academia ontem.
IPA: /aɪ wəz æt ðə dʒɪm ˈjɛstərdeɪ/ · PT: [ái uâz ét dha djím iéster dei]
66. They were very tired last night. — Eles estavam muito cansados ontem à noite.
IPA: /ðeɪ wɜːr ˈvɛri ˈtaɪərd læst naɪt/ · PT: [dhêi uâr véri táierd lést náit]
67. Where were you this morning? — Onde você estava esta manhã?
IPA: /wɛr wɜːr juː ðɪs ˈmɔːrnɪŋ/ · PT: [uér uâr iú dhis mórnin]

As mais ricas
68. He wasn't at the office because he was sick. — Ele não estava no escritório porque estava doente.
IPA: /hiː ˈwʌznt æt ðə ˈɔːfɪs bɪˈkɔːz hiː wəz sɪk/ · PT: [rrí uâznt ét dhi ófis bikóz rrí uâz sík]
69. We were happy when the sun was shining. — Estávamos felizes quando o sol estava brilhando.
IPA: /wiː wɜːr ˈhæpi wɛn ðə sʌn wəz ˈʃaɪnɪŋ/ · PT: [uí uâr rrépi uén dha sân uâz cháinin]
70. Is she going to be ready soon? — Ela vai estar pronta logo?
IPA: /ɪz ʃiː ˈɡoʊɪŋ tə biː ˈrɛdi suːn/ · PT: [iz chí gôuin tu bí rrédi súun]
71. I will be there at eight. — Eu estarei lá às oito.
IPA: /aɪ wɪl biː ðɛr æt eɪt/ · PT: [ái uíou bí dhér ét êit]
72. They are going to be late, but it's okay. — Eles vão se atrasar, mas tudo bem.
IPA: /ðeɪ ɑːr ˈɡoʊɪŋ tə biː leɪt bʌt ɪts oʊˈkeɪ/ · PT: [dhêi ár gôuin tu bí lêit bât íts ôukêi]
73. Are you sure you are right? — Você tem certeza de que está certo?
IPA: /ɑːr juː ʃʊr juː ɑːr raɪt/ · PT: [ár iú chúr iú ár ráit]
74. I'm not sure if he is at home or at work. — Não tenho certeza se ele está em casa ou no trabalho.
IPA: /aɪm nɑːt ʃʊr ɪf hiː ɪz æt hoʊm ɔːr æt wɜːrk/ · PT: [áim nót chúr if rrí iz ét rrôum ór ét uârk]
75. She isn't happy because the weather is bad and her friends are busy. — Ela não está feliz porque o tempo está ruim e seus amigos estão ocupados.
IPA: /ʃiː ˈɪznt ˈhæpi bɪˈkɔːz ðə ˈwɛðər ɪz bæd ænd hɜːr frɛndz ɑːr ˈbɪzi/ · PT: [chí íznt rrépi bikóz dha uédher iz béd énd rrâr fréndz ár bízi]

"Are you ready?" / "Yes, I am." — "Você está pronto?" / "Sim, estou."
IPA: /ɑːr juː ˈrɛdi · jɛs aɪ æm/ · PT: [ár iú rrédi · iés ái ém]
"Is he your brother?" / "No, he isn't." — "Ele é seu irmão?" / "Não, não é."
IPA: /ɪz hiː jɔːr ˈbrʌðər · noʊ hiː ˈɪznt/ · PT: [iz rrí iór brâdher · nôu rrí íznt]
"Where are my keys?" / "They're on the table." — "Onde estão minhas chaves?" / "Estão na mesa."
IPA: /wɛr ɑːr maɪ kiːz · ðer ɑːn ðə ˈteɪbl̩/ · PT: [uér ár mái kíz · dhér ón dha têibou]
"Are they at home?" / "Yes, they are." — "Eles estão em casa?" / "Sim, estão."
IPA: /ɑːr ðeɪ æt hoʊm · jɛs ðeɪ ɑːr/ · PT: [ár dhêi ét rrôum · iés dhêi ár]
"Is she a teacher?" / "Yes, she is." — "Ela é professora?" / "Sim, é."
IPA: /ɪz ʃiː ə ˈtiːtʃər · jɛs ʃiː ɪz/ · PT: [iz chí a títcher · iés chí iz]
"Am I late?" / "No, you aren't." — "Estou atrasado?" / "Não, não está."
IPA: /æm aɪ leɪt · noʊ juː ˈɑːrnt/ · PT: [ém ái lêit · nôu iú árent]
"Are we there yet?" / "No, we aren't." — "Já chegamos?" / "Não, ainda não."
IPA: /ɑːr wiː ðɛr jɛt · noʊ wiː ˈɑːrnt/ · PT: [ár uí dhér iét · nôu uí árent]
"Is it cold outside?" / "Yes, it is." — "Está frio lá fora?" / "Sim, está."
IPA: /ɪz ɪt koʊld ˌaʊtˈsaɪd · jɛs ɪt ɪz/ · PT: [iz ít kôuld autsáid · iés ít iz]
"Are you hungry?" / "Yes, I am." — "Você está com fome?" / "Sim, estou."
IPA: /ɑːr juː ˈhʌŋɡri · jɛs aɪ æm/ · PT: [ár iú râNgri · iés ái ém]
"Is the store open?" / "No, it isn't." — "A loja está aberta?" / "Não, não está."
IPA: /ɪz ðə stɔːr ˈoʊpən · noʊ ɪt ˈɪznt/ · PT: [iz dha stór ôupan · nôu ít íznt]
"Are your friends here?" / "Yes, they are." — "Seus amigos estão aqui?" / "Sim, estão."
IPA: /ɑːr jɔːr frɛndz hɪr · jɛs ðeɪ ɑːr/ · PT: [ár iór fréndz rrír · iés dhêi ár]
"Is the bus late?" / "Yes, it is." — "O ônibus está atrasado?" / "Sim, está."
IPA: /ɪz ðə bʌs leɪt · jɛs ɪt ɪz/ · PT: [iz dha bâs lêit · iés ít iz]
"Are you a student?" / "No, I'm not." — "Você é estudante?" / "Não, não sou."
IPA: /ɑːr juː ə ˈstuːdənt · noʊ aɪm nɑːt/ · PT: [ár iú a stúdent · nôu áim nót]
"Is dinner ready?" / "Yes, it is." — "O jantar está pronto?" / "Sim, está."
IPA: /ɪz ˈdɪnər ˈrɛdi · jɛs ɪt ɪz/ · PT: [iz díner rrédi · iés ít iz]
"Are you okay?" / "No, I'm not." — "Você está bem?" / "Não, não estou."
IPA: /ɑːr juː oʊˈkeɪ · noʊ aɪm nɑːt/ · PT: [ár iú ôukêi · nôu áim nót]
"Is this your bag?" / "Yes, it is." — "Esta bolsa é sua?" / "Sim, é."
IPA: /ɪz ðɪs jɔːr bæɡ · jɛs ɪt ɪz/ · PT: [iz dhis iór bég · iés ít iz]
"Are the kids asleep?" / "Yes, they are." — "As crianças estão dormindo?" / "Sim, estão."
IPA: /ɑːr ðə kɪdz əˈsliːp · jɛs ðeɪ ɑːr/ · PT: [ár dha kídz aslíp · iés dhêi ár]
"Is he at work?" / "No, he isn't." — "Ele está no trabalho?" / "Não, não está."
IPA: /ɪz hiː æt wɜːrk · noʊ hiː ˈɪznt/ · PT: [iz rrí ét uârk · nôu rrí íznt]
"Are you from Brazil?" / "Yes, I am." — "Você é do Brasil?" / "Sim, sou."
IPA: /ɑːr juː frəm brəˈzɪl · jɛs aɪ æm/ · PT: [ár iú from brazíou · iés ái ém]
"Is she happy?" / "Yes, she is." — "Ela está feliz?" / "Sim, está."
IPA: /ɪz ʃiː ˈhæpi · jɛs ʃiː ɪz/ · PT: [iz chí rrépi · iés chí iz]
"Are we early?" / "No, we aren't." — "Estamos adiantados?" / "Não, não estamos."
IPA: /ɑːr wiː ˈɜːrli · noʊ wiː ˈɑːrnt/ · PT: [ár uí ârli · nôu uí árent]
"Is it raining?" / "No, it isn't." — "Está chovendo?" / "Não, não está."
IPA: /ɪz ɪt ˈreɪnɪŋ · noʊ ɪt ˈɪznt/ · PT: [iz ít rrêinin · nôu ít íznt]
"Are you tired?" / "Yes, I am." — "Você está cansado?" / "Sim, estou."
IPA: /ɑːr juː ˈtaɪərd · jɛs aɪ æm/ · PT: [ár iú táierd · iés ái ém]
"Is the coffee hot?" / "Yes, it is." — "O café está quente?" / "Sim, está."
IPA: /ɪz ðə ˈkɔːfi hɑːt · jɛs ɪt ɪz/ · PT: [iz dha kófi rrót · iés ít iz]
"Are they coming?" / "No, they aren't." — "Eles estão vindo?" / "Não, não estão."
IPA: /ɑːr ðeɪ ˈkʌmɪŋ · noʊ ðeɪ ˈɑːrnt/ · PT: [ár dhêi kâmin · nôu dhêi árent]`;

const generateIds = () => {
  return "id_" + Math.random().toString(36).substring(2, 9);
};

const words = [];
let currentItem = {};

for (const line of rawLines.split("\n")) {
  if (!line.trim()) continue;
  if (/^\d+\./.test(line) || /^"/.test(line) || /^[A-Z][a-z]/.test(line) || line.includes(' — ') || line.startsWith('I ')) {
    let cleanLine = line.replace(/^\d+\.\s*/, '');
    let parts = cleanLine.split(' — ');
    if (parts.length >= 2) {
      if (currentItem.word) {
        words.push(currentItem);
      }
      currentItem = {
        id: "lesson_1_vocabulary_a1_" + generateIds(),
        word: parts[0].trim(),
        translation: parts[1].trim(),
        syllables: parts[0].trim().split(" "),
        exampleSentence: "",
        exampleTranslation: ""
      };
    }
  } else if (line.startsWith('IPA:')) {
    let ipaPart = line.match(/IPA:\s*(.*?)\s*·/)?.[1] || "";
    let ptPart = line.match(/PT:\s*(.*)/)?.[1] || "";
    if (currentItem.word) {
      currentItem.pronunciation = ipaPart.trim();
      currentItem.portuguesePhonetic = ptPart.trim();
    }
  }
}
if (currentItem.word) words.push(currentItem);

fs.writeFileSync('public/decks/lesson_1_vocabulary_a1_en.json', JSON.stringify(words, null, 2));

const metadataPath = 'data/decksMetadata.json';
const metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));
if (!metadata['lesson_1_vocabulary_a1']) {
    metadata['lesson_1_vocabulary_a1'] = {};
}
metadata['lesson_1_vocabulary_a1']['en'] = words.length;
fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
