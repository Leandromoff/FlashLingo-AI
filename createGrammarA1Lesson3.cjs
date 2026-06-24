const fs = require('fs');

const rawText = `I — eu
IPA: /aɪ/ · PT: [ái]
you — você
IPA: /juː/ · PT: [iú]
he — ele
IPA: /hiː/ · PT: [rrí]
she — ela
IPA: /ʃiː/ · PT: [chí]
it — ele/ela/isto (coisas e animais)
IPA: /ɪt/ · PT: [ít]
we — nós
IPA: /wiː/ · PT: [uí]
you — vocês (plural)
IPA: /juː/ · PT: [iú]
they — eles / elas
IPA: /ðeɪ/ · PT: [dhêi]
my — meu / minha
IPA: /maɪ/ · PT: [mái]
your — seu / sua (de você)
IPA: /jɔːr/ · PT: [iór]
his — dele
IPA: /hɪz/ · PT: [rriz]
her — dela
IPA: /hɜːr/ · PT: [rrâr]
its — dele / dela (de coisa ou animal)
IPA: /ɪts/ · PT: [íts]
our — nosso / nossa
IPA: /aʊər/ · PT: [áuer]
their — deles / delas
IPA: /ðɛr/ · PT: [dhér]
I play football. — Eu jogo futebol.
IPA: /aɪ pleɪ ˈfʊtbɔːl/ · PT: [ái plêi fútból]
You are Australian. — Você é australiano.
IPA: /juː ɑːr ɔːˈstreɪljən/ · PT: [iú ár ostrêilian]
He is very tall. — Ele é muito alto.
IPA: /hiː ɪz ˈvɛri tɔːl/ · PT: [rrí iz véri tól]
She is a teacher. — Ela é professora.
IPA: /ʃiː ɪz ə ˈtiːtʃər/ · PT: [chí iz a títcher]
It is a dog. — É um cachorro.
IPA: /ɪt ɪz ə dɔːɡ/ · PT: [ít iz a dóg]
We love English. — Nós amamos inglês.
IPA: /wiː lʌv ˈɪŋɡlɪʃ/ · PT: [uí lâv ínglich]
They have a nice house. — Eles têm uma casa bonita.
IPA: /ðeɪ hæv ə naɪs haʊs/ · PT: [dhêi rrév a náis ráus]
This is my brother. — Este é meu irmão.
IPA: /ðɪs ɪz maɪ ˈbrʌðər/ · PT: [dhís iz mái brâdher]
Give me your book. — Me dá seu livro.
IPA: /ɡɪv miː jɔːr bʊk/ · PT: [guív mí iór búk]
That's his house. — Aquela é a casa dele.
IPA: /ðæts hɪz haʊs/ · PT: [dhéts rriz ráus]

Apresentando a família
26. This is my family. — Esta é minha família.
IPA: /ðɪs ɪz maɪ ˈfæməli/ · PT: [dhís iz mái fémili]
27. He is my father. — Ele é meu pai.
IPA: /hiː ɪz maɪ ˈfɑːðər/ · PT: [rrí iz mái fádher]
28. She is my mother. — Ela é minha mãe.
IPA: /ʃiː ɪz maɪ ˈmʌðər/ · PT: [chí iz mái mâdher]
29. I know her sister. — Eu conheço a irmã dela.
IPA: /aɪ noʊ hɜːr ˈsɪstər/ · PT: [ái nôu rrâr síster]
30. We love our parents. — Nós amamos nossos pais.
IPA: /wiː lʌv aʊər ˈpɛrənts/ · PT: [uí lâv áuer pérents]

No trabalho / na escola
31. She is a teacher. — Ela é professora.
IPA: /ʃiː ɪz ə ˈtiːtʃər/ · PT: [chí iz a títcher]
32. This is their teacher. — Este é o professor deles.
IPA: /ðɪs ɪz ðɛr ˈtiːtʃər/ · PT: [dhís iz dhér títcher]
33. He is my boss. — Ele é meu chefe.
IPA: /hiː ɪz maɪ bɔːs/ · PT: [rrí iz mái bós]
34. They are my coworkers. — Eles são meus colegas de trabalho.
IPA: /ðeɪ ɑːr maɪ ˈkoʊwɜːrkərz/ · PT: [dhêi ár mái kôuuerkerz]
35. I like my job. — Eu gosto do meu trabalho.
IPA: /aɪ laɪk maɪ dʒɑːb/ · PT: [ái láik mái djób]

Falando da casa e das coisas
36. That's his house. — Aquela é a casa dele.
IPA: /ðæts hɪz haʊs/ · PT: [dhéts rriz ráus]
37. They have a nice house. — Eles têm uma casa bonita.
IPA: /ðeɪ hæv ə naɪs haʊs/ · PT: [dhêi rrév a náis ráus]
38. Our house is small. — Nossa casa é pequena.
IPA: /aʊər haʊs ɪz smɔːl/ · PT: [áuer ráus iz smól]
39. Give me your book. — Me dá seu livro.
IPA: /ɡɪv miː jɔːr bʊk/ · PT: [guív mí iór búk]
40. This is my room. — Este é meu quarto.
IPA: /ðɪs ɪz maɪ ruːm/ · PT: [dhís iz mái rúm]

No parque / com o cachorro
41. It is a dog. — É um cachorro.
IPA: /ɪt ɪz ə dɔːɡ/ · PT: [ít iz a dóg]
42. Its name is Max. — O nome dele é Max.
IPA: /ɪts neɪm ɪz mæks/ · PT: [íts nêim iz méks]
43. The dog has its toys. — O cachorro tem os brinquedos dele.
IPA: /ðə dɔːɡ hæz ɪts tɔɪz/ · PT: [dha dóg rréz íts tóiz]

Saindo com amigos / hobbies
44. I play football. — Eu jogo futebol.
IPA: /aɪ pleɪ ˈfʊtbɔːl/ · PT: [ái plêi fútból]
45. We love English. — Nós amamos inglês.
IPA: /wiː lʌv ˈɪŋɡlɪʃ/ · PT: [uí lâv ínglich]
46. They are students. — Eles são estudantes.
IPA: /ðeɪ ɑːr ˈstuːdənts/ · PT: [dhêi ár stúdents]
47. You are my best friend. — Você é meu melhor amigo.
IPA: /juː ɑːr maɪ bɛst frɛnd/ · PT: [iú ár mái bést frénd]

Descrevendo pessoas / viajando
48. You are Australian. — Você é australiano.
IPA: /juː ɑːr ɔːˈstreɪljən/ · PT: [iú ár ostrêilian]
49. He is very tall. — Ele é muyto alto.
IPA: /hiː ɪz ˈvɛri tɔːl/ · PT: [rrí iz véri tól]
50. I like your cars. — Eu gosto dos seus carros.
IPA: /aɪ laɪk jɔːr kɑːrz/ · PT: [ái láik iór kárz]

Curtas e simples
51. I have a brother. — Eu tenho um irmão.
IPA: /aɪ hæv ə ˈbrʌðər/ · PT: [ái rrév a brâdher]
52. She is my friend. — Ela é minha amiga.
IPA: /ʃiː ɪz maɪ frɛnd/ · PT: [chí iz mái frénd]
53. He likes his job. — Ele gosta do trabalho dele.
IPA: /hiː laɪks hɪz dʒɑːb/ · PT: [rrí láiks rriz djób]
54. We need our books. — Nós precisamos dos nossos livros.
IPA: /wiː niːd aʊər bʊks/ · PT: [uí níd áuer búks]

Um pouco mais
55. Their house is big. — A casa deles é grande.
IPA: /ðɛr haʊs ɪz bɪɡ/ · PT: [dhér ráus iz bíg]
56. Her car is new. — O carro dela é novo.
IPA: /hɜːr kɑːr ɪz nuː/ · PT: [rrâr kár iz niú]
57. Is this your phone? — Este é o seu celular?
IPA: /ɪz ðɪs jɔːr foʊn/ · PT: [iz dhís iór fôun]
58. I don't know his name. — Eu não sei o nome dele.
IPA: /aɪ doʊnt noʊ hɪz neɪm/ · PT: [ái dôunt nôu rriz nêim]

Perguntas e negações
59. Where is my pen? — Onde está minha caneta?
IPA: /wɛr ɪz maɪ pɛn/ · PT: [uér iz mái pén]
60. Do you like their music? — Você gosta da música deles?
IPA: /duː juː laɪk ðɛr ˈmjuːzɪk/ · PT: [dú iú láik dhér miúzik]
61. She isn't my teacher. — Ela não é minha professora.
IPA: /ʃiː ˈɪznt maɪ ˈtiːtʃər/ · PT: [chí íznt mái títcher]
62. Why is he angry? — Por que ele está bravo?
IPA: /waɪ ɪz hiː ˈæŋɡri/ · PT: [uái iz rrí éNgri]

Conectores e tempos verbais
63. I love my family because they help me. — Eu amo minha família porque eles me ajudam.
IPA: /aɪ lʌv maɪ ˈfæməli bɪˈkɔːz ðeɪ hɛlp miː/ · PT: [ái lâv mái fémili bikóz dhêi rrélp mí]
64. He is reading his book now. — Ele está lendo o livro dele agora.
IPA: /hiː ɪz ˈriːdɪŋ hɪz bʊk naʊ/ · PT: [rrí iz rídin rriz búk náu]
65. We visited their house yesterday. — Nós visitamos a casa deles ontem.
IPA: /wiː ˈvɪzɪtɪd ðɛr haʊs ˈjɛstərdeɪ/ · PT: [uí vízited dhér ráus iéster dei]
66. She was talking to her sister when I called. — Ela estava falando com a irmã dela quando eu liguei.
IPA: /ʃiː wəz ˈtɔːkɪŋ tə hɜːr ˈsɪstər wɛn aɪ kɔːld/ · PT: [chí uâz tókin tu rrâr síster uén ái kóld]
67. They lost their keys at the park. — Eles perderam as chaves deles no parque.
IPA: /ðeɪ lɔːst ðɛr kiːz æt ðə pɑːrk/ · PT: [dhêi lóst dhér kíz ét dha párk]

As mais ricas
68. My brother is tall, but his wife is short. — Meu irmão é alto, mas a esposa dele é baixa.
IPA: /maɪ ˈbrʌðər ɪz tɔːl bʌt hɪz waɪf ɪz ʃɔːrt/ · PT: [mái brâdher iz tól bât rriz uáif iz chórt]
69. I'll bring my car because yours is broken. — Vou trazer meu carro porque o seu está quebrado.
IPA: /aɪl brɪŋ maɪ kɑːr bɪˈkɔːz jɔːrz ɪz ˈbroʊkən/ · PT: [áiou brín mái kár bikóz iórz iz brôukan]
70. She loves her job, and her boss respects her. — Ela ama o trabalho dela, e o chefe dela a respeita.
IPA: /ʃiː lʌvz hɜːr dʒɑːb ænd hɜːr bɔːs rɪˈspɛkts hɜːr/ · PT: [chí lâvz rrâr djób énd rrâr bós rispékts rrâr]
71. We don't know their names, but they know ours. — Não sabemos os nomes deles, mas eles sabem os nossos.
IPA: /wiː doʊnt noʊ ðɛr neɪmz bʌt ðeɪ noʊ ˈaʊərz/ · PT: [uí dôunt nôu dhér nêimz bât dhêi nôu áuerz]
72. He didn't bring his passport, so he missed his flight. — Ele não trouxe o passaporte dele, então perdeu o voo dele.
IPA: /hiː ˈdɪdnt brɪŋ hɪz ˈpæspɔːrt soʊ hiː mɪst hɪz flaɪt/ · PT: [rrí dídent brín rriz pésport sôu rrí míst rriz fláit]
73. Although it is just a dog, it has its own personality. — Embora seja só um cachorro, ele tem a própria personalidade.
IPA: /ɔːlˈðoʊ ɪt ɪz dʒʌst ə dɔːɡ ɪt hæz ɪts oʊn ˌpɜːrsəˈnæləti/ · PT: [oldhôu ít iz djâst a dóg ít rréz íts ôun perssanéliti]
74. Have you met their new teacher and her assistant? — Você conheceu o novo professor deles e a assistente dela?
IPA: /hæv juː mɛt ðɛr nuː ˈtiːtʃər ænd hɜːr əˈsɪstənt/ · PT: [rrév iú mét dhér niú títcher énd rrâr assístant]
75. I like your idea, but I think our plan is better. — Eu gosto da sua ideia, mas acho que nosso plano é melhor.
IPA: /aɪ laɪk jɔːr aɪˈdiːə bʌt aɪ θɪŋk aʊər plæn ɪz ˈbɛtər/ · PT: [ái láik iór aidía bât ái thínk áuer plén iz béter]

"Who is he?" / "He is my brother." — "Quem é ele?" / "Ele é meu irmão."
IPA: /huː ɪz hiː · hiː ɪz maɪ ˈbrʌðər/ · PT: [rrú iz rrí · rrí iz mái brâdher]
"Is this your book?" / "Yes, it's mine." — "Este livro é seu?" / "Sim, é meu."
IPA: /ɪz ðɪs jɔːr bʊk · jɛs ɪts maɪn/ · PT: [iz dhís iór búk · iés íts máin]
"Where do they live?" / "In their new house." — "Onde eles moram?" / "Na casa nova deles."
IPA: /wɛr duː ðeɪ lɪv · ɪn ðɛr nuː haʊs/ · PT: [uér dú dhêi lív · in dhér niú ráus]
"What's her name?" / "Her name is Anna." — "Qual é o nome dela?" / "O nome dela é Anna."
IPA: /wʌts hɜːr neɪm · hɜːr neɪm ɪz ˈænə/ · PT: [uâts rrâr nêim · rrâr nêim iz éna]
"Are you students?" / "Yes, we are." — "Vocês são estudantes?" / "Sim, somos."
IPA: /ɑːr juː ˈstuːdənts · jɛs wiː ɑːr/ · PT: [ár iú stúdents · iés uí ár]
"Is he your teacher?" / "No, he's my boss." — "Ele é seu professor?" / "Não, é meu chefe."
IPA: /ɪz hiː jɔːr ˈtiːtʃər · noʊ hiːz maɪ bɔːs/ · PT: [iz rrí iór títcher · nôu rríz mái bós]
"Whose car is this?" / "It's their car." — "De quem é este carro?" / "É o carro deles."
IPA: /huːz kɑːr ɪz ðɪs · ɪts ðɛr kɑːr/ · PT: [rrúz kár iz dhís · íts dhér kár]
"Do you love English?" / "Yes, we do." — "Vocês amam inglês?" / "Sim, amamos."
IPA: /duː juː lʌv ˈɪŋɡlɪʃ · jɛs wiː duː/ · PT: [dú iú lâv ínglich · iés uí dú]
"Is she Australian?" / "No, she's American." — "Ela é australiana?" / "Não, é americana."
IPA: /ɪz ʃiː ɔːˈstreɪljən · noʊ ʃiːz əˈmɛrɪkən/ · PT: [iz chí ostrêilian · nôu chíz amérikan]
"Can I use your pen?" / "Sure, here it is." — "Posso usar sua caneta?" / "Claro, aqui está."
IPA: /kæn aɪ juːz jɔːr pɛn · ʃʊr hɪr ɪt ɪz/ · PT: [kén ái iúz iór pén · chúr rrír ít iz]
"Is it your dog?" / "Yes, its name is Max." — "É o seu cachorro?" / "Sim, o nome dele é Max."
IPA: /ɪz ɪt jɔːr dɔːɡ · jɛs ɪts neɪm ɪz mæks/ · PT: [iz ít iór dóg · iés íts nêim iz méks]
"Are they your parents?" / "Yes, they are." — "Eles são seus pais?" / "Sim, são."
IPA: /ɑːr ðeɪ jɔːr ˈpɛrənts · jɛs ðeɪ ɑːr/ · PT: [ár dhêi iór pérents · iés dhêi ár]
"Do you love my house?" / "Yes, it's beautiful." — "Você gosta da minha casa?" / "Sim, é linda."
IPA: /duː juː laɪk maɪ haʊs · jɛs ɪts ˈbjuːtɪfl̩/ · PT: [dú iú láik mái ráus · iés íts biútifou]
"Is this their teacher?" / "Yes, it is." — "Este é o professor deles?" / "Sim, é."
IPA: /ɪz ðɪs ðɛr ˈtiːtʃər · jɛs ɪt ɪz/ · PT: [iz dhís dhér títcher · iés ít iz]
"Where is his sister?" / "She's at school." — "Onde está a irmã dele?" / "Ela está na escola."
IPA: /wɛr ɪz hɪz ˈsɪstər · ʃiːz æt skuːl/ · PT: [uér iz rriz síster · chíz ét skúl]
"Do you know her?" / "No, I don't." — "Você a conhece?" / "Não, não conheço."
IPA: /duː juː noʊ hɜːr · noʊ aɪ doʊnt/ · PT: [dú iú nôu rrâr · nôu ái dôunt]
"Are these your cars?" / "No, they're his." — "Estes carros são seus?" / "Não, são dele."
IPA: /ɑːr ðiːz jɔːr kɑːrz · noʊ ðer hɪz/ · PT: [ár dhíz iór kárz · nôu dhér rriz]
"Is he tall?" / "Yes, very tall." — "Ele é alto?" / "Sim, muito alto."
IPA: /ɪz hiː tɔːl · jɛs ˈvɛri tɔːl/ · PT: [iz rrí tól · iés véri tól]
"What do they have?" / "They have a nice house." — "O que eles têm?" / "Têm uma casa bonita."
IPA: /wʌt duː ðeɪ hæv · ðeɪ hæv ə naɪs haʊs/ · PT: [uât dú dhêi rrév · dhêi rrév a náis ráus]
"Is that your phone or mine?" / "It's yours." — "Aquele celular é seu ou meu?" / "É seu."
IPA: /ɪz ðæt jɔːr foʊn ɔːr maɪn · ɪts jɔːrz/ · PT: [iz dhét iór fôun ór máin · íts iórz]
"Do we have our tickets?" / "Yes, I have them." — "Temos nossos ingressos?" / "Sim, estão comigo."
IPA: /duː wiː hæv aʊər ˈtɪkɪts · jɛs aɪ hæv ðɛm/ · PT: [dú uí rrév áuer tíkets · iés ái rrév dhém]
"Whose idea was it?" / "It was her idea." — "De quem foi a ideia?" / "Foi ideia dela."
IPA: /huːz aɪˈdiːə wəz ɪt · ɪt wəz hɜːr aɪˈdiːə/ · PT: [rrúz aidía uâz ít · ít uâz rrâr aidía]
"Is your sister a teacher?" / "Yes, she is." — "Sua irmã é professora?" / "Sim, é."
IPA: /ɪz jɔːr ˈsɪstər ə ˈtiːtʃər · jɛs ʃiː ɪz/ · PT: [iz iór síster a títcher · iés chí iz]
"Do they need our help?" / "Yes, they do." — "Eles precisam da nossa ajuda?" / "Sim, precisam."
IPA: /duː ðeɪ niːd aʊər hɛlp · jɛs ðeɪ duː/ · PT: [dú dhêi níd áuer rrélp · iés dhêi dú]
"Is this my seat?" / "No, it's his." — "Este é meu assento?" / "Não, é dele."
IPA: /ɪz ðɪs maɪ siːt · noʊ ɪts hɪz/ · PT: [iz dhís mái sít · nôu íts rriz]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;
let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (line.includes('—')) {
    let originalLine = line.replace(/^\d+\.\s*/, '');
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `lesson_3_grammar_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_3_grammar_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_3_grammar_a1'] = meta['lesson_3_grammar_a1'] || {};
meta['lesson_3_grammar_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
