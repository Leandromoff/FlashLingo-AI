const fs = require('fs');

const rawText = `a house — uma casa
IPA: /ə haʊs/ · PT: [a ráus]
a car — um carro
IPA: /ə kɑːr/ · PT: [a kár]
a bicycle — uma bicicleta
IPA: /ə ˈbaɪsɪkl̩/ · PT: [a báissikou]
a book — um livro
IPA: /ə bʊk/ · PT: [a búk]
a pen — uma caneta
IPA: /ə pɛn/ · PT: [a pén]
a notebook — um caderno
IPA: /ə ˈnoʊtbʊk/ · PT: [a nôutbuk]
a backpack — uma mochila
IPA: /ə ˈbækpæk/ · PT: [a békpék]
a watch — um relógio (de pulso)
IPA: /ə wɑːtʃ/ · PT: [a uátch]
a computer — um computador
IPA: /ə kəmˈpjuːtər/ · PT: [a kompiúter]
a TV — uma TV / televisão
IPA: /ə ˌtiːˈviː/ · PT: [a ti-ví]
glasses — óculos
IPA: /ˈɡlæsɪz/ · PT: [glésiz]
shoes — sapatos
IPA: /ʃuːz/ · PT: [chúz]
a wallet — uma carteira
IPA: /ə ˈwɑːlɪt/ · PT: [a uálet]
a key — uma chave
IPA: /ə kiː/ · PT: [a kí]
a mobile phone — um celular (EUA: "cell phone")
IPA: /ə ˈmoʊbl̩ foʊn/ · PT: [a môubou fôun]
headphones — fones de ouvido
IPA: /ˈhɛdfoʊnz/ · PT: [rrédfounz]
an umbrella — um guarda-chuva
IPA: /ən ʌmˈbrɛlə/ · PT: [an âmbréla]
a passport — um passaporte
IPA: /ə ˈpæspɔːrt/ · PT: [a pésport]
a hat — um chapéu
IPA: /ə hæt/ · PT: [a rrét]
a bottle of water — uma garrafa de água
IPA: /ə ˈbɑːtl̩ əv ˈwɔːtər/ · PT: [a bárou ov uóter]

Companheiros comuns (reforço do mesmo tema)
21. a charger — um carregador
IPA: /ə ˈtʃɑːrdʒər/ · PT: [a tchárdjer]
22. sunglasses — óculos de sol
IPA: /ˈsʌnɡlæsɪz/ · PT: [sânglésiz]
23. an ID card — um documento de identidade
IPA: /ən ˌaɪˈdiː kɑːrd/ · PT: [an ai-dí kárd]
24. a coat — um casaco
IPA: /ə koʊt/ · PT: [a kôut]
25. a bag — uma bolsa / sacola
IPA: /ə bæɡ/ · PT: [a bég]

Saindo de casa
26. I need my keys. — Preciso das minhas chaves.
IPA: /aɪ niːd maɪ kiːz/ · PT: [ái níd mái kíz]
27. My wallet is in my backpack. — Minha carteira está na minha mochila.
IPA: /maɪ ˈwɑːlɪt ɪz ɪn maɪ ˈbækpæk/ · PT: [mái uálet iz in mái békpék]
28. I take my umbrella. — Eu pego meu guarda-chuva.
IPA: /aɪ teɪk maɪ ʌmˈbrɛlə/ · PT: [ái têik mái âmbréla]
29. I put on my hat. — Eu coloco meu chapéu.
IPA: /aɪ pʊt ɑːn maɪ hæt/ · PT: [ái pút ón mái rrét]
30. I lock the house. — Eu tranco a casa.
IPA: /aɪ lɑːk ðə haʊs/ · PT: [ái lók dha ráus]

No transporte
31. I get in the car. — Eu entro no carro.
IPA: /aɪ ɡɛt ɪn ðə kɑːr/ · PT: [ái guét in dha kár]
32. I ride my bicycle. — Eu ando de bicicleta.
IPA: /aɪ raɪd maɪ ˈbaɪsɪkl̩/ · PT: [ái ráid mái báissikou]
33. I wear my headphones. — Eu uso meus fones de ouvido.
IPA: /aɪ wɛr maɪ ˈhɛdfoʊnz/ · PT: [ái uér mái rrédfounz]
34. I check my watch. — Eu olho meu relógio.
IPA: /aɪ tʃɛk maɪ wɑːtʃ/ · PT: [ái tchék mái uátch]
35. I use my mobile phone. — Eu uso meu celular.
IPA: /aɪ juːz maɪ ˈmoʊbl̩ foʊn/ · PT: [ái iúz mái môubou fôun]

No trabalho / estudando
36. I open my computer. — Eu abro meu computador.
IPA: /aɪ ˈoʊpən maɪ kəmˈpjuːtər/ · PT: [ái ôupan mái kompiúter]
37. I write in my notebook. — Eu escrevo no meu caderno.
IPA: /aɪ raɪt ɪn maɪ ˈnoʊtbʊk/ · PT: [ái ráit in mái nôutbuk]
38. I read a book. — Eu leio um livro.
IPA: /aɪ riːd ə bʊk/ · PT: [ái ríd a búk]
39. I need a pen. — Eu preciso de uma caneta.
IPA: /aɪ niːd ə pɛn/ · PT: [ái níd a pén]
40. I wear my glasses. — Eu uso meus óculos.
IPA: /aɪ wɛr maɪ ˈɡlæsɪz/ · PT: [ái uér mái glésiz]

Em casa relaxando
41. I watch TV. — Eu assisto TV.
IPA: /aɪ wɑːtʃ ˌtiːˈviː/ · PT: [ái uátch ti-ví]
42. I take off my shoes. — Eu tiro meus sapatos.
IPA: /aɪ teɪk ɔːf maɪ ʃuːz/ · PT: [ái têik óf mái chúz]
43. I charge my phone. — Eu carrego meu celular.
IPA: /aɪ tʃɑːrdʒ maɪ foʊn/ · PT: [ái tchárdj mái fôun]
44. I drink a bottle of water. — Eu bebo uma garrafa de água.
IPA: /aɪ drɪŋk ə ˈbɑːtl̩ əv ˈwɔːtər/ · PT: [ái drínk a bárou ov uóter]

No aeroporto / viajando
45. I have my passport. — Eu tenho meu passaporte.
IPA: /aɪ hæv maɪ ˈpæspɔːrt/ · PT: [ái rrév mái pésport]
46. My bag is heavy. — Minha bolsa está pesada.
IPA: /maɪ bæɡ ɪz ˈhɛvi/ · PT: [mái bég iz rrévi]
47. I show my ID card. — Eu mostro meu documento.
IPA: /aɪ ʃoʊ maɪ ˌaɪˈdiː kɑːrd/ · PT: [ái chôu mái ai-dí kárd]

Tempo e clima
48. I wear my coat. — Eu visto meu casaco.
IPA: /aɪ wɛr maɪ koʊt/ · PT: [ái uér mái kôut]
49. I bring my umbrella because it's raining. — Eu levo meu guarda-chuva porque está chovendo.
IPA: /aɪ brɪŋ maɪ ʌmˈbrɛlə bɪˈkɔːz ɪts ˈreɪnɪŋ/ · PT: [ái brín mái âmbréla bikóz íts rrêinin]
50. I wear sunglasses in the sun. — Eu uso óculos de sol no sol.
IPA: /aɪ wɛr ˈsʌnɡlæsɪz ɪn ðə sʌn/ · PT: [ái uér sânglésiz in dha sân]

Curtas e simples
51. I have a car. — Eu tenho um carro.
IPA: /aɪ hæv ə kɑːr/ · PT: [ái rrév a kár]
52. She reads a book. — Ela lê um livro.
IPA: /ʃiː riːdz ə bʊk/ · PT: [chí rídz a búk]
53. He needs a pen. — Ele precisa de uma caneta.
IPA: /hiː niːdz ə pɛn/ · PT: [rrí nídz a pén]
54. We watch TV. — Nós assistimos TV.
IPA: /wiː wɑːtʃ ˌtiːˈviː/ · PT: [uí uátch ti-ví]

Um pouco mais
55. My shoes are new. — Meus sapatos são novos.
IPA: /maɪ ʃuːz ɑːr nuː/ · PT: [mái chúz ár niú]
56. The house is big. — A casa é grande.
IPA: /ðə haʊs ɪz bɪɡ/ · PT: [dha ráus iz bíg]
57. Where is my wallet? — Onde está minha carteira?
IPA: /wɛr ɪz maɪ ˈwɑːlɪt/ · PT: [uér iz mái uálet]
58. I don't have my keys. — Eu não tenho minhas chaves.
IPA: /aɪ doʊnt hæv maɪ kiːz/ · PT: [ái dôunt rrév mái kíz]

Perguntas e negações
59. Do you have a bicycle? — Você tem uma bicicleta?
IPA: /duː juː hæv ə ˈbaɪsɪkl̩/ · PT: [dú iú rrév a báissikou]
60. Is this your umbrella? — Este é o seu guarda-chuva?
IPA: /ɪz ðɪs jɔːr ʌmˈbrɛlə/ · PT: [iz dhis iór âmbréla]
61. He doesn't wear glasses. — Ele não usa óculos.
IPA: /hiː ˈdʌznt wɛr ˈɡlæsɪz/ · PT: [rrí dâznt uér glésiz]
62. Why is your backpack open? — Por que sua mochila está aberta?
IPA: /waɪ ɪz jɔːr ˈbækpæk ˈoʊpən/ · PT: [uái iz iór békpék ôupan]

Conectores e tempos verbais
63. I take my umbrella because it's raining. — Eu pego meu guarda-chuva porque está chovendo.
IPA: /aɪ teɪk maɪ ʌmˈbrɛlə bɪˈkɔːz ɪts ˈreɪnɪŋ/ · PT: [ái têik mái âmbréla bikóz íts rrêinin]
64. She is using her computer now. — Ela está usando o computador dela agora.
IPA: /ʃiː ɪz ˈjuːzɪŋ hɜːr kəmˈpjuːtər naʊ/ · PT: [chí iz iúzin rrâr kompiúter náu]
65. I bought a new watch yesterday. — Eu comprei um relógio novo ontem.
IPA: /aɪ bɔːt ə nuː wɑːtʃ ˈjɛstərdeɪ/ · PT: [ái bót a niú uátch iéster dei]
66. We were reading our books when you called. — Estávamos lendo nossos livros quando você ligou.
IPA: /wiː wɜːr ˈriːdɪŋ aʊər bʊks wɛn juː kɔːld/ · PT: [uí uâr rídin áuer búks uén iú kóld]
67. He lost his passport at the airport. — Ele perdeu o passaporte no aeroporto.
IPA: /hiː lɔːst hɪz ˈpæspɔːrt æt ðə ˈɛrpɔːrt/ · PT: [rrí lóst rriz pésport ét dhi érport]

As mais ricas
68. I can't find my phone, but I have my wallet. — Não acho meu celular, mas tenho minha carteira.
IPA: /aɪ kænt faɪnd maɪ foʊn bʌt aɪ hæv maɪ ˈwɑːlɪt/ · PT: [ái ként fáind mái fôun bât ái rrév mái uálet]
69. She always wears her headphones when she studies. — Ela sempre usa os fones quando estuda.
IPA: /ʃiː ˈɔːlweɪz wɛrz hɜːr ˈhɛdfoʊnz wɛn ʃiː ˈstʌdiz/ · PT: [chí ólueiz uérz rrâr rrédfounz uén chí stâdiz]
70. I will buy a new computer because mine is old. — Vou comprar um computador novo porque o meu é velho.
IPA: /aɪ wɪl baɪ ə nuː kəmˈpjuːtər bɪˈkɔːz maɪn ɪz oʊld/ · PT: [ái uíou bái a niú kompiúter bikóz máin iz ôuld]
71. If it rains, I'll take my umbrella and my coat. — Se chover, vou levar meu guarda-chuva e meu casaco.
IPA: /ɪf ɪt reɪnz aɪl teɪk maɪ ʌmˈbrɛlə ænd maɪ koʊt/ · PT: [if ít rêinz áiou têik mái âmbréla énd mái kôut]
72. He didn't bring his book, so he read on his phone. — Ele não trouxe o livro, então leu no celular.
IPA: /hiː ˈdɪdnt brɪŋ hɪz bʊk soʊ hiː rɛd ɑːn hɪz foʊn/ · PT: [rrí dídent brín rriz búk sôu rrí réd ón rriz fôun]
73. My glasses are broken, and I can't read the screen. — Meus óculos estão quebrados, e não consigo ler a tela.
IPA: /maɪ ˈɡlæsɪz ɑːr ˈbroʊkən ænd aɪ kænt riːd ðə skriːn/ · PT: [mái glésiz ár brôukan énd ái ként ríd dha skrín]
74. Have you seen my keys? I left them on the table. — Você viu minhas chaves? Eu as deixei na mesa.
IPA: /hæv juː siːn maɪ kiːz · aɪ lɛft ðɛm ɑːn ðə ˈteɪbl̩/ · PT: [rrév iú sín mái kíz · ái léft dhém ón dha têibou]
75. Although the car is old, it still works very well. — Embora o carro seja velho, ele ainda funciona muito bem.
IPA: /ɔːlˈðoʊ ðə kɑːr ɪz oʊld ɪt stɪl wɜːrks ˈvɛri wɛl/ · PT: [oldhôu dha kár iz ôuld ít stíou uârks véri uél]

"Where is my book?" / "It's on the desk." — "Onde está meu livro?" / "Está na escrivaninha."
IPA: /wɛr ɪz maɪ bʊk · ɪts ɑːn ðə dɛsk/ · PT: [uér iz mái búk · íts ón dha désk]
"Is this your pen?" / "Yes, it is." — "Esta caneta é sua?" / "Sim, é."
IPA: /ɪz ðɪs jɔːr pɛn · jɛs ɪt ɪz/ · PT: [iz dhis iór pén · iés ít iz]
"Do you have a car?" / "No, I have a bicycle." — "Você tem carro?" / "Não, tenho uma bicicleta."
IPA: /duː juː hæv ə kɑːr · noʊ aɪ hæv ə ˈbaɪsɪkl̩/ · PT: [dú iú rrév a kár · nôu ái rrév a báissikou]
"Where are my keys?" / "They're in your bag." — "Onde estão minhas chaves?" / "Estão na sua bolsa."
IPA: /wɛr ɑːr maɪ kiːz · ðer ɪn jɔːr bæɡ/ · PT: [uér ár mái kíz · dhér in iór bég]
"Can I borrow your umbrella?" / "Sure, here it is." — "Posso pegar seu guarda-chuva emprestado?" / "Claro, aqui está."
IPA: /kæn aɪ ˈbɑːroʊ jɔːr ʌmˈbrɛlə · ʃʊr hɪr ɪt ɪz/ · PT: [kén ái bárou iór âmbréla · chúr rrír ít iz]
"Whose backpack is this?" / "It's mine." — "De quem é esta mochila?" / "É minha."
IPA: /huːz ˈbækpæk ɪz ðɪs · ɪts maɪn/ · PT: [rrúz békpék iz dhis · íts máin]
"Is your phone charged?" / "No, it isn't." — "Seu celular está carregado?" / "Não, não está."
IPA: /ɪz jɔːr foʊn tʃɑːrdʒd · noʊ ɪt ˈɪznt/ · PT: [iz iór fôun tchárdjd · nôu ít íznt]
"Do you wear glasses?" / "Yes, I do." — "Você usa óculos?" / "Sim, uso."
IPA: /duː juː wɛr ˈɡlæsɪz · jɛs aɪ duː/ · PT: [dú iú uér glésiz · iés ái dú]
"Where is the bottle of water?" / "It's in the fridge." — "Onde está a garrafa de água?" / "Está na geladeira."
IPA: /wɛr ɪz ðə ˈbɑːtl̩ əv ˈwɔːtər · ɪts ɪn ðə frɪdʒ/ · PT: [uér iz dha bárou ov uóter · íts in dha frídj]
"Are these your shoes?" / "No, they aren't." — "Estes sapatos são seus?" / "Não, não são."
IPA: /ɑːr ðiːz jɔːr ʃuːz · noʊ ðeɪ ˈɑːrnt/ · PT: [ár dhíz iór chúz · nôu dhêi árent]
"Do you have your passport?" / "Yes, it's in my bag." — "Você está com o passaporte?" / "Sim, está na minha bolsa."
IPA: /duː juː hæv jɔːr ˈpæspɔːrt · jɛs ɪts ɪn maɪ bæɡ/ · PT: [dú iú rrév iór pésport · iés íts in mái bég]
"Can I use your computer?" / "Of course." — "Posso usar seu computador?" / "Claro."
IPA: /kæn aɪ juːz jɔːr kəmˈpjuːtər · ʌv kɔːrs/ · PT: [kén ái iúz iór kompiúter · óv kórs]
"Where is your wallet?" / "It's in my pocket." — "Onde está sua carteira?" / "Está no meu bolso."
IPA: /wɛr ɪz jɔːr ˈwɑːlɪt · ɪts ɪn maɪ ˈpɑːkɪt/ · PT: [uér iz iór uálet · íts in mái páket]
"Is this your hat?" / "Yes, thank you!" — "Este é o seu chapéu?" / "Sim, obrigado!"
IPA: /ɪz ðɪs jɔːr hæt · jɛs ˈθæŋk juː/ · PT: [iz dhis iór rrét · iés thénk iú]
"What time is it?" / "Let me check my watch." — "Que horas são?" / "Deixa eu ver meu relógio."
IPA: /wʌt taɪm ɪz ɪt · lɛt miː tʃɛk maɪ wɑːtʃ/ · PT: [uât táim iz ít · lét mí tchék mái uátch]
"Do you watch a lot of TV?" / "No, not much." — "Você assiste muita TV?" / "Não, não muito."
IPA: /duː juː wɑːtʃ ə lɑːt əv ˌtiːˈviː · noʊ nɑːt mʌtʃ/ · PT: [dú iú uátch a lót ov ti-ví · nôu nót mâtch]
"Can I have a pen, please?" / "Here you go." — "Pode me dar uma caneta, por favor?" / "Aqui está."
IPA: /kæn aɪ hæv ə pɛn pliːz · hɪr juː ɡoʊ/ · PT: [kén ái rrév a pén plíz · rrír iú gôu]
"Where are my headphones?" / "They're next to the computer." — "Onde estão meus fones?" / "Estão ao lado do computador."
IPA: /wɛr ɑːr maɪ ˈhɛdfoʊnz · ðer nɛkst tə ðə kəmˈpjuːtər/ · PT: [uér ár mái rrédfounz · dhér nékst tu dha kompiúter]
"Is the house far?" / "No, it's close." — "A casa é longe?" / "Não, é perto."
IPA: /ɪz ðə haʊs fɑːr · noʊ ɪts kloʊs/ · PT: [iz dha ráus fár · nôu íts klôus]
"Did you bring your notebook?" / "Yes, I did." — "Você trouxe seu caderno?" / "Sim, trouxe."
IPA: /dɪd juː brɪŋ jɔːr ˈnoʊtbʊk · jɛs aɪ dɪd/ · PT: [díd iú brín iór nôutbuk · iés ái díd]
"Whose phone is ringing?" / "It's mine, sorry!" — "De quem é o celular tocando?" / "É o meu, desculpa!"
IPA: /huːz foʊn ɪz ˈrɪŋɪŋ · ɪts maɪn ˈsɑːri/ · PT: [rrúz fôun iz rrínin · íts máin sári]
"Is it your bicycle?" / "No, it's my brother's." — "É a sua bicicleta?" / "Não, é a do meu irmão."
IPA: /ɪz ɪt jɔːr ˈbaɪsɪkl̩ · noʊ ɪts maɪ ˈbrʌðərz/ · PT: [iz ít iór báissikou · nôu íts mái brâdherz]
"Do you need a bag?" / "Yes, please." — "Você precisa de uma sacola?" / "Sim, por favor."
IPA: /duː juː niːd ə bæɡ · jɛs pliːz/ · PT: [dú iú níd a bég · iés plíz]
"Where's my coat?" / "It's by the door." — "Onde está meu casaco?" / "Está perto da porta."
IPA: /wɛrz maɪ koʊt · ɪts baɪ ðə dɔːr/ · PT: [uérz mái kôut · íts bái dha dór]
"Can you turn off the TV?" / "Sure, no problem." — "Você pode desligar a TV?" / "Claro, sem problema."
IPA: /kæn juː tɜːrn ɔːf ðə ˌtiːˈviː · ʃʊr noʊ ˈprɑːbləm/ · PT: [kén iú târn óf dha ti-ví · chúr nôu práblem]`;

const lines = rawText.split('\n').map(l => l.trim());
let cards = [];
let currentCard = null;

let index = 1;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  if (!line || line.length < 2) continue; // skip empty or short like headers
  if (!line.includes('—') && !line.includes('IPA:')) continue; // skip categories

  if (line.includes('—')) {
    // New card
    let originalLine = line;
    // remove number prefix like "26. "
    originalLine = originalLine.replace(/^\d+\.\s*/, '');
    
    // Sometimes the sentence has quotes «...» let's keep them as is 
    
    const [word, translation] = originalLine.split('—').map(s => s.trim());
    currentCard = {
      id: `lesson_1_vocabulary_a1_en_card_${index++}`,
      word,
      translation,
      pronunciation: '',
      portuguesePhonetic: ''
    };
    cards.push(currentCard);
  } else if (line.startsWith('IPA:')) {
    // IPA: /ʝo soi/ · PT: [iô sôi]
    const parts = line.split('· PT:');
    let ipaPart = parts[0].replace('IPA:', '').trim();
    let ptPart = parts[1] ? parts[1].trim() : '';

    if (currentCard) {
      currentCard.pronunciation = ipaPart;
      currentCard.portuguesePhonetic = ptPart;
    }
  }
}

const outputFile = 'public/decks/lesson_1_vocabulary_a1_en.json';
fs.writeFileSync(outputFile, JSON.stringify(cards, null, 2), 'utf8');

const decksMeta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
decksMeta['lesson_1_vocabulary_a1'] = decksMeta['lesson_1_vocabulary_a1'] || {};
decksMeta['lesson_1_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(decksMeta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
