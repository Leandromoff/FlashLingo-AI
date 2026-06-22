const fs = require('fs');

const rawText = `call a friend — ligar para um amigo
IPA: /kɔːl ə frɛnd/ · PT: [kól a frénd]
cook dinner — cozinhar o jantar
IPA: /kʊk ˈdɪnər/ · PT: [kúk díner]
do exercise — fazer exercício
IPA: /duː ˈɛksərsaɪz/ · PT: [dú éksersaiz]
go on vacation — viajar de férias
IPA: /ɡoʊ ɑːn veɪˈkeɪʃn̩/ · PT: [gôu ón veikêichan]
go to bed — ir dormir
IPA: /ɡoʊ tə bɛd/ · PT: [gôu tu béd]
go to work — ir para o trabalho
IPA: /ɡoʊ tə wɜːrk/ · PT: [gôu tu uârk]
drink some coffee — tomar um café
IPA: /drɪŋk sʌm ˈkɔːfi/ · PT: [drínk sâm kófi]
eat dinner — jantar
IPA: /iːt ˈdɪnər/ · PT: [ít díner]
listen to music — ouvir música
IPA: /ˈlɪsn̩ tə ˈmjuːzɪk/ · PT: [lísan tu miúzik]
play soccer — jogar futebol
IPA: /pleɪ ˈsɑːkər/ · PT: [plêi sáker]
play the guitar — tocar violão
IPA: /pleɪ ðə ɡɪˈtɑːr/ · PT: [plêi dha guitár]
play video games — jogar videogame
IPA: /pleɪ ˈvɪdioʊ ɡeɪmz/ · PT: [plêi vídiou guêimz]
read a book — ler um livro
IPA: /riːd ə bʊk/ · PT: [ríd a búk]
send a text — mandar uma mensagem
IPA: /sɛnd ə tɛkst/ · PT: [sénd a tékst]
study English — estudar inglês
IPA: /ˈstʌdi ˈɪŋɡlɪʃ/ · PT: [stâdi ínglich]
take a photo — tirar uma foto
IPA: /teɪk ə ˈfoʊtoʊ/ · PT: [têik a fôutou]
visit a museum — visitar um museu
IPA: /ˈvɪzɪt ə mjuˈziːəm/ · PT: [vízit a miuzíam]
watch TV — assistir TV
IPA: /wɑːtʃ ˌtiːˈviː/ · PT: [uátch ti-ví]
wear glasses — usar óculos
IPA: /wɛr ˈɡlæsɪz/ · PT: [uér glésiz]
send an email — enviar um e-mail
IPA: /sɛnd ən ˈiːmeɪl/ · PT: [sénd an ímeiou]

Outras ações do dia a dia (reforço do tema)
21. take a shower — tomar banho
IPA: /teɪk ə ˈʃaʊər/ · PT: [têik a cháuer]
22. brush your teeth — escovar os dentes
IPA: /brʌʃ jɔːr tiːθ/ · PT: [brâch iór títh]
23. make breakfast — fazer o café da manhã
IPA: /meɪk ˈbrɛkfəst/ · PT: [mêik brékfest]
24. walk the dog — passear com o cachorro
IPA: /wɔːk ðə dɔːɡ/ · PT: [uók dha dóg]
25. go shopping — fazer compras
IPA: /ɡoʊ ˈʃɑːpɪŋ/ · PT: [gôu chápin]

De manhã
26. I wake up early. — Eu acordo cedo.
IPA: /aɪ weɪk ʌp ˈɜːrli/ · PT: [ái uêik âp ârli]
27. I take a shower. — Eu tomo banho.
IPA: /aɪ teɪk ə ˈʃaʊər/ · PT: [ái têik a cháuer]
28. I make breakfast. — Eu faço o café da manhã.
IPA: /aɪ meɪk ˈbrɛkfəst/ · PT: [ái mêik brékfest]
29. I drink some coffee. — Eu tomo um café.
IPA: /aɪ drɪŋk sʌm ˈkɔːfi/ · PT: [ái drínk sâm kófi]
30. I go to work. — Eu vou para o trabalho.
IPA: /aɪ ɡoʊ tə wɜːrk/ · PT: [ái gôu tu uârk]

No trabalho / ao telefone
31. I send an email. — Eu envio um e-mail.
IPA: /aɪ sɛnd ən ˈiːmeɪl/ · PT: [ái sénd an ímeiou]
32. I call a friend. — Eu ligo para um amigo.
IPA: /aɪ kɔːl ə frɛnd/ · PT: [ái kól a frénd]
33. I send a text. — Eu mando uma mensagem.
IPA: /aɪ sɛnd ə tɛkst/ · PT: [ái sénd a tékst]
34. I take a photo. — Eu tiro uma foto.
IPA: /aɪ teɪk ə ˈfoʊtoʊ/ · PT: [ái têik a fôutou]
35. I wear glasses at work. — Eu uso óculos no trabalho.
IPA: /aɪ wɛr ˈɡlæsɪz æt wɜːrk/ · PT: [ái uér glésiz ét uârk]

Depois do trabalho / academia e parque
36. I do exercise. — Eu faço exercício.
IPA: /aɪ duː ˈɛksərsaɪz/ · PT: [ái dú éksersaiz]
37. I play soccer with friends. — Eu jogo futebol com amigos.
IPA: /aɪ pleɪ ˈsɑːkər wɪð frɛndz/ · PT: [ái plêi sáker uídh fréndz]
38. I listen to music. — Eu ouço música.
IPA: /aɪ ˈlɪsn̩ tə ˈmjuːzɪk/ · PT: [ái lísan tu miúzik]
39. I walk the dog. — Eu passeio com o cachorro.
IPA: /aɪ wɔːk ðə dɔːɡ/ · PT: [ái uók dha dóg]

À noite, em casa relaxando
40. I cook dinner. — Eu cozinho o jantar.
IPA: /aɪ kʊk ˈdɪnər/ · PT: [ái kúk díner]
41. I eat dinner. — Eu janto.
IPA: /aɪ iːt ˈdɪnər/ · PT: [ái ít díner]
42. I watch TV. — Eu assisto TV.
IPA: /aɪ wɑːtʃ ˌtiːˈviː/ · PT: [ái uátch ti-ví]
43. I play video games. — Eu jogo videogame.
IPA: /aɪ pleɪ ˈvɪdioʊ ɡeɪmz/ · PT: [ái plêi vídiou guêimz]
44. I play the guitar. — Eu toco violão.
IPA: /aɪ pleɪ ðə ɡɪˈtɑːr/ · PT: [ái plêi dha guitár]
45. I read a book. — Eu leio um livro.
IPA: /aɪ riːd ə bʊk/ · PT: [ái ríd a búk]
46. I go to bed. — Eu vou dormir.
IPA: /aɪ ɡoʊ tə bɛd/ · PT: [ái gôu tu béd]

No fim de semana
47. I study English. — Eu estudo inglês.
IPA: /aɪ ˈstʌdi ˈɪŋɡlɪʃ/ · PT: [ái stâdi ínglich]
48. I go shopping. — Eu faço compras.
IPA: /aɪ ɡoʊ ˈʃɑːpɪŋ/ · PT: [ái gôu chápin]
49. I visit a museum. — Eu visito um museu.
IPA: /aɪ ˈvɪzɪt ə mjuˈziːəm/ · PT: [ái vízit a miuzíam]
50. I go on vacation. — Eu viajo de férias.
IPA: /aɪ ɡoʊ ɑːn veɪˈkeɪʃn̩/ · PT: [ái gôu ón veikêichan]

51. I read a book. — Eu leio um livro.
IPA: /aɪ riːd ə bʊk/ · PT: [ái ríd a búk]
52. She plays the guitar. — Ela toca violão.
IPA: /ʃiː pleɪz ðə ɡɪˈtɑːr/ · PT: [chí plêiz dha guitár]
53. He cooks dinner. — Ele cozinha o jantar.
IPA: /hiː kʊks ˈdɪnər/ · PT: [rrí kúks díner]
54. We watch TV. — Nós assistimos TV.
IPA: /wiː wɑːtʃ ˌtiːˈviː/ · PT: [uí uátch ti-ví]

Frequência
55. I always drink coffee. — Eu sempre tomo café.
IPA: /aɪ ˈɔːlweɪz drɪŋk ˈkɔːfi/ · PT: [ái ólueiz drínk kófi]
56. She often goes to the gym. — Ela vai à academia com frequência.
IPA: /ʃiː ˈɔːfn̩ ɡoʊz tə ðə dʒɪm/ · PT: [chí ófen gôuz tu dha djím]
57. They never play video games. — Eles nunca jogam videogame.
IPA: /ðeɪ ˈnɛvər pleɪ ˈvɪdioʊ ɡeɪmz/ · PT: [dhêi néver plêi vídiou guêimz]
58. Do you study English? — Você estuda inglês?
IPA: /duː juː ˈstʌdi ˈɪŋɡlɪʃ/ · PT: [dú iú stâdi ínglich]

Perguntas e negações
59. I don't watch TV. — Eu não assisto TV.
IPA: /aɪ doʊnt wɑːtʃ ˌtiːˈviː/ · PT: [ái dôunt uátch ti-ví]
60. Does he play soccer? — Ele joga futebol?
IPA: /dʌz hiː pleɪ ˈsɑːkər/ · PT: [dâz rrí plêi sáker]
61. Why do you wear glasses? — Por que você usa óculos?
IPA: /waɪ duː juː wɛr ˈɡlæsɪz/ · PT: [uái dú iú uér glésiz]
62. When do you go to bed? — A que horas você vai dormir?
IPA: /wɛn duː juː ɡoʊ tə bɛd/ · PT: [uén dú iú gôu tu béd]

Conectores e tempos verbais
63. I listen to music when I work. — Eu ouço música quando trabalho.
IPA: /aɪ ˈlɪsn̩ tə ˈmjuːzɪk wɛn aɪ wɜːrk/ · PT: [ái lísan tu miúzik uén ái uârk]
64. She is cooking dinner now. — Ela está cozinhando o jantar agora.
IPA: /ʃiː ɪz ˈkʊkɪŋ ˈdɪnər naʊ/ · PT: [chí iz kúkin díner náu]
65. I called a friend yesterday. — Eu liguei para um amigo ontem.
IPA: /aɪ kɔːld ə frɛnd ˈjɛstərdeɪ/ · PT: [ái kóld a frénd iéster dei]
66. We were playing video games when you arrived. — Estávamos jogando videogame quando você chegou.
IPA: /wiː wɜːr ˈpleɪɪŋ ˈvɪdioʊ ɡeɪmz wɛn juː əˈraɪvd/ · PT: [uí uâr plêin vídiou guêimz uén iú aráivd]
67. He took a photo of the museum. — Ele tirou uma foto do museu.
IPA: /hiː tʊk ə ˈfoʊtoʊ əv ðə mjuˈziːəm/ · PT: [rrí túk a fôutou ov dha miuzíam]

As mais ricas
68. I want to go on vacation because I'm tired. — Eu quero viajar de férias porque estou cansado.
IPA: /aɪ wɑːnt tə ɡoʊ ɑːn veɪˈkeɪʃn̩ bɪˈkɔːz aɪm ˈtaɪərd/ · PT: [ái uánt tu gôu ón veikêichan bikóz áim táierd]
69. She reads a book every night before she goes to bed. — Ela lê um livro toda noite antes de dormir.
IPA: /ʃiː riːdz ə bʊk ˈɛvri naɪt bɪˈfɔːr ʃiː ɡoʊz tə bɛd/ · PT: [chí rídz a búk évri náit bifór chí gôuz tu béd]
70. I'll send you an email when I get home. — Vou te enviar um e-mail quando chegar em casa.
IPA: /aɪl sɛnd juː ən ˈiːmeɪl wɛn aɪ ɡɛt hoʊm/ · PT: [áiou sénd iú an ímeiou uén ái guét rrôum]
71. He didn't go to work because he was sick. — Ele não foi trabalhar porque estava doente.
IPA: /hiː ˈdɪdnt ɡoʊ tə wɜːrk bɪˈkɔːz hiː wəz sɪk/ · PT: [rrí dídent gôu tu uârk bikóz rrí uâz sík]
72. I usually cook dinner, but tonight we'll eat out. — Eu geralmente cozinho o jantar, mas hoje vamos comer fora.
IPA: /aɪ ˈjuːʒuəli kʊk ˈdɪnər bʌt təˈnaɪt wiːl iːt aʊt/ · PT: [ái iújuali kúk díner bât tunáit uíou ít áut]
73. Although I study English every day, I still make mistakes. — Embora eu estude inglês todo dia, ainda cometo erros.
IPA: /ɔːlˈðoʊ aɪ ˈstʌdi ˈɪŋɡlɪʃ ˈɛvri deɪ aɪ stɪl meɪk mɪˈsteɪks/ · PT: [oldhôu ái stâdi ínglich évri dêi ái stíou mêik mistêiks]
74. Have you ever visited a museum in another country? — Você já visitou um museu em outro país?
IPA: /hæv juː ˈɛvər ˈvɪzɪtɪd ə mjuˈziːəm ɪn əˈnʌðər ˈkʌntri/ · PT: [rrév iú éver vízited a miuzíam in anâdher kântri]
75. I was listening to music, so I didn't hear the phone. — Eu estava ouvindo música, então não ouvi o telefone.
IPA: /aɪ wəz ˈlɪsn̩ɪŋ tə ˈmjuːzɪk soʊ aɪ ˈdɪdnt hɪr ðə foʊn/ · PT: [ái uâz lísanin tu miúzik sôu ái dídent rrír dha fôun]

"What do you do after work?" / "I cook dinner." — "O que você faz depois do trabalho?" / "Eu cozinho o jantar."
IPA: /wʌt duː juː duː ˈæftər wɜːrk · aɪ kʊk ˈdɪnər/ · PT: [uât dú iú dú éfter uârk · ái kúk díner]
"Do you play soccer?" / "Yes, every weekend." — "Você joga futebol?" / "Sim, todo fim de semana."
IPA: /duː juː pleɪ ˈsɑːkər · jɛs ˈɛvri ˈwiːkɛnd/ · PT: [dú iú plêi sáker · iés évri uíkend]
"Can you call me later?" / "Sure, I will." — "Você pode me ligar mais tarde?" / "Claro, vou ligar."
IPA: /kæn juː kɔːl miː ˈleɪtər · ʃʊr aɪ wɪl/ · PT: [kén iú kól mí lêiter · chúr ái uíou]
"What are you doing?" / "I'm reading a book." — "O que você está fazendo?" / "Estou lendo um livro."
IPA: /wʌt ɑːr juː ˈduːɪŋ · aɪm ˈriːdɪŋ ə bʊk/ · PT: [uât ár iú dúin · áim rídin a búk]
"Do you want some coffee?" / "Yes, please." — "Você quer um café?" / "Sim, por favor."
IPA: /duː juː wɑːnt sʌm ˈkɔːfi · jɛs pliːz/ · PT: [dú iú uánt sâm kófi · iés plíz]
"Did you send the email?" / "Yes, I did." — "Você enviou o e-mail?" / "Sim, enviei."
IPA: /dɪd juː sɛnd ðə ˈiːmeɪl · jɛs aɪ dɪd/ · PT: [díd iú sénd dha ímeiou · iés ái díd]
"Can you take a photo of us?" / "Of course!" — "Você pode tirar uma foto da gente?" / "Claro!"
IPA: /kæn juː teɪk ə ˈfoʊtoʊ əv ʌs · ʌv kɔːrs/ · PT: [kén iú têik a fôutou ov âs · óv kórs]
"What time do you go to bed?" / "Around eleven." — "A que horas você vai dormir?" / "Por volta das onze."
IPA: /wʌt taɪm duː juː ɡoʊ tə bɛd · əˈraʊnd ɪˈlɛvn̩/ · PT: [uât táim dú iú gôu tu béd · aráund ilévan]
"Do you study English every day?" / "No, just on weekends." — "Você estuda inglês todo dia?" / "Não, só nos fins de semana."
IPA: /duː juː ˈstʌdi ˈɪŋɡlɪʃ ˈɛvri deɪ · noʊ dʒʌst ɑːn ˈwiːkɛndz/ · PT: [dú iú stâdi ínglich évri dêi · nôu djâst ón uíkendz]
"What do you do for fun?" / "I play video games." — "O que você faz pra se divertir?" / "Eu jogo videogame."
IPA: /wʌt duː juː duː fɔːr fʌn · aɪ pleɪ ˈvɪdioʊ ɡeɪmz/ · PT: [uât dú iú dú fór fân · ái plêi vídiou guêimz]
"Are you going on vacation?" / "Yes, next week." — "Você vai viajar de férias?" / "Sim, semana que vem."
IPA: /ɑːr juː ˈɡoʊɪŋ ɑːn veɪˈkeɪʃn̩ · jɛs nɛkst wiːk/ · PT: [ár iú gôuin ón veikêichan · iés nékst uík]
"Do you exercise a lot?" / "No, not really." — "Você faz muito exercício?" / "Não, na verdade não."
IPA: /duː juː ˈɛksərsaɪz ə lɑːt · noʊ nɑːt ˈrɪli/ · PT: [dú iú éksersaiz a lót · nôu nót ríli]
"Can you send me a text?" / "Sure, what's your number?" — "Pode me mandar uma mensagem?" / "Claro, qual é seu número?"
IPA: /kæn juː sɛnd miː ə tɛkst · ʃʊr wʌts jɔːr ˈnʌmbər/ · PT: [kén iú sénd mí a tékst · chúr uâts iór nâmber]
"Do you wear glasses?" / "Only for reading." — "Você usa óculos?" / "Só para ler."
IPA: /duː juː wɛr ˈɡlæsɪz · ˈoʊnli fɔːr ˈriːdɪŋ/ · PT: [dú iú uér glésiz · ôunli fór rídin]
"What do you listen to?" / "Mostly rock music." — "O que você ouve?" / "Mais rock."
IPA: /wʌt duː juː ˈlɪsn̩ tuː · ˈmoʊstli rɑːk ˈmjuːzɪk/ · PT: [uât dú iú lísan tú · môustli rók miúzik]
"Do you want to watch TV?" / "Maybe later." — "Você quer assistir TV?" / "Talvez mais tarde."
IPA: /duː juː wɑːnt tə wɑːtʃ ˌtiːˈviː · ˈmeɪbi ˈleɪtər/ · PT: [dú iú uánt tu uátch ti-ví · mêibi lêiter]
"Can you play the guitar?" / "A little bit." — "Você sabe tocar violão?" / "Um pouquinho."
IPA: /kæn juː pleɪ ðə ɡɪˈtɑːr · ə ˈlɪtl̩ bɪt/ · PT: [kén iú plêi dha guitár · a lítou bít]
"Did you go to work today?" / "No, it's my day off." — "Você foi trabalhar hoje?" / "Não, é minha folga."
IPA: /dɪd juː ɡoʊ tə wɜːrk təˈdeɪ · noʊ ɪts maɪ deɪ ɔːf/ · PT: [díd iú gôu tu uârk tudêi · nôu íts mái dêi óf]
"Do you cook every day?" / "No, sometimes I order food." — "Você cozinha todo dia?" / "Não, às vezes peço comida."
IPA: /duː juː kʊk ˈɛvri deɪ · noʊ ˈsʌmtaɪmz aɪ ˈɔːrdər fuːd/ · PT: [dú iú kúk évri dêi · nôu sâmtaimz ái órder fúd]
"Have you visited the new museum?" / "Not yet." — "Você já visitou o museu novo?" / "Ainda não."
IPA: /hæv juː ˈvɪzɪtɪd ðə nuː mjuˈziːəm · nɑːt jɛt/ · PT: [rrév iú vízited dha niú miuzíam · nót iét]
"What did you do yesterday?" / "I read a book." — "O que você fez ontem?" / "Eu li um livro."
IPA: /wʌt dɪd juː duː ˈjɛstərdeɪ · aɪ rɛd ə bʊk/ · PT: [uât díd iú dú iéster dei · ái réd a búk]
"Do you drink coffee in the morning?" / "Yes, always." — "Você toma café de manhã?" / "Sim, sempre."
IPA: /duː juː drɪŋk ˈkɔːfi ɪn ðə ˈmɔːrnɪŋ · jɛs ˈɔːlweɪz/ · PT: [dú iú drínk kófi in dha mórnin · iés ólueiz]
"Are you free tonight?" / "No, I'm studying English." — "Você está livre hoje à noite?" / "Não, estou estudando inglês."
IPA: /ɑːr juː friː təˈnaɪt · noʊ aɪm ˈstʌdiɪŋ ˈɪŋɡlɪʃ/ · PT: [ár iú frí tunáit · nôu áim stâdiin ínglich]
"Did you call your friend?" / "Yes, we talked for an hour." — "Você ligou para seu amigo?" / "Sim, conversamos por uma hora."
IPA: /dɪd juː kɔːl jɔːr frɛnd · jɛs wiː tɔːkt fɔːr ən ˈaʊər/ · PT: [díd iú kól iór frénd · iés uí tókt fór an áuer]
"What are your plans for the weekend?" / "I'm going on vacation." — "Quais são seus planos pro fim de semana?" / "Vou viajar de férias."
IPA: /wʌt ɑːr jɔːr plænz fɔːr ðə ˈwiːkɛnd · aɪm ˈɡoʊɪŋ ɑːn veɪˈkeɪʃn̩/ · PT: [uât ár iór plénz fór dha uíkend · áim gôuin ón veikêichan]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;

let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue;
  if (!line.includes('—') && !line.includes('IPA:')) continue;

  if (line.includes('—')) {
    let originalLine = line;
    originalLine = originalLine.replace(/^\d+\.\s*/, '');
    
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `lesson_3_vocabulary_a1_en_card_${index++}`,
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

const outputFile = 'public/decks/lesson_3_vocabulary_a1_en.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['lesson_3_vocabulary_a1'] = decksMeta['lesson_3_vocabulary_a1'] || {};
decksMeta['lesson_3_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
