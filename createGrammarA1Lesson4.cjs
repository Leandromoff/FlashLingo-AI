const fs = require('fs');

const rawText = `a student → students — um estudante → estudantes
IPA: /ə ˈstuːdənt → ˈstuːdənts/ · PT: [a stúdent → stúdents]
an apple → apples — uma maçã → maçãs
IPA: /ən ˈæpl̩ → ˈæpl̩z/ · PT: [an épou → épouz]

Depois de -s, -ch, -sh, -x (+es)
3. a bus → buses — um ônibus → ônibus (pl.)
IPA: /ə bʌs → ˈbʌsɪz/ · PT: [a bâs → bâsiz]
4. a box → boxes — uma caixa → caixas
IPA: /ə bɑːks → ˈbɑːksɪz/ · PT: [a báks → báksiz]

Consoante + y (vira -ies)
5. a baby → babies — um bebê → bebês
IPA: /ə ˈbeɪbi → ˈbeɪbiz/ · PT: [a bêibi → bêibiz]
6. a country → countries — um país → países
IPA: /ə ˈkʌntri → ˈkʌntriz/ · PT: [a kântri → kântriz]

Vogal + y (só +s)
7. a day → days — um dia → dias
IPA: /ə deɪ → deɪz/ · PT: [a dêi → dêiz]
8. a toy → toys — um brinquedo → brinquedos
IPA: /ə tɔɪ → tɔɪz/ · PT: [a tói → tóiz]

Final -f / -fe (vira -ves)
9. a shelf → shelves — uma prateleira → prateleiras
IPA: /ə ʃɛlf → ʃɛlvz/ · PT: [a chélf → chélvz]
10. a wife → wives — uma esposa → esposas
IPA: /ə waɪf → waɪvz/ · PT: [a uáif → uáivz]

A + consoante / AN + vogal
11. a table — uma mesa (a + consoante)
IPA: /ə ˈteɪbl̩/ · PT: [a têibou]
12. an orange — uma laranja (an + vogal)
IPA: /ən ˈɔːrɪndʒ/ · PT: [an órindj]
13. an egg — um ovo (an + vogal)
IPA: /ən ɛɡ/ · PT: [an ég]

Plural irregular
14. a man → men — um homem → homens
IPA: /ə mæn → mɛn/ · PT: [a mén → mén]
15. a woman → women — uma mulher → mulheres
IPA: /ə ˈwʊmən → ˈwɪmɪn/ · PT: [a uúman → uímen]
16. a child → children — uma criança → crianças
IPA: /ə tʃaɪld → ˈtʃɪldrən/ · PT: [a tcháild → tchíldren]
17. a foot → feet — um pé → pés
IPA: /ə fʊt → fiːt/ · PT: [a fút → fít]
18. a tooth → teeth — um dente → dentes
IPA: /ə tuːθ → tiːθ/ · PT: [a túth → títh]
19. a fish → fish — um peixe → peixes (não muda)
IPA: /ə fɪʃ → fɪʃ/ · PT: [a fích → fích]
20. a mouse → mice — um rato → ratos
IPA: /ə maʊs → maɪs/ · PT: [a máus → máis]
21. a sheep → sheep — uma ovelha → ovelhas (não muda)
IPA: /ə ʃiːp → ʃiːp/ · PT: [a chíp → chíp]

Casos do som
22. an hour — uma hora (h mudo)
IPA: /ən ˈaʊər/ · PT: [an áuer]
23. a hat — um chapéu (h pronunciado)
IPA: /ə hæt/ · PT: [a rrét]
24. an umbrella — um guarda-chuva (som de "â")
IPA: /ən ʌmˈbrɛlə/ · PT: [an âmbréla]
25. a university — uma universidade (som de "iú")
IPA: /ə ˌjuːnɪˈvɜːrsəti/ · PT: [a iunivârsiti]

26. I buy an apple. — Eu compro uma maçã.
IPA: /aɪ baɪ ən ˈæpl̩/ · PT: [ái bái an épou]
27. I need three apples. — Eu preciso de três maçãs.
IPA: /aɪ niːd θriː ˈæpl̩z/ · PT: [ái níd thrí épouz]
28. She buys an orange. — Ela compra uma laranja.
IPA: /ʃiː baɪz ən ˈɔːrɪndʒ/ · PT: [chí báiz an órindj]
29. We need a box of eggs. — Precisamos de uma caixa de ovos.
IPA: /wiː niːd ə bɑːks əv ɛɡz/ · PT: [uí níd a báks ov égz]
30. The eggs are fresh. — Os ovos estão frescos.
IPA: /ðə ɛɡz ɑːr frɛʃ/ · PT: [dhi égz ár fréch]

No transporte
31. I take a bus. — Eu pego um ônibus.
IPA: /aɪ teɪk ə bʌs/ · PT: [ái têik a bâs]
32. The buses are late. — Os ônibus estão atrasados.
IPA: /ðə ˈbʌsɪz ɑːr leɪt/ · PT: [dha bâsiz ár lêit]
33. I wear a hat. — Eu uso um chapéu.
IPA: /aɪ wɛr ə hæt/ · PT: [ái uér a rrét]
34. I bring an umbrella. — Eu levo um guarda-chuva.
IPA: /aɪ brɪŋ ən ʌmˈbrɛlə/ · PT: [ái brín an âmbréla]

Em casa / tarefas
35. I put the books on a shelf. — Eu coloco os livros numa prateleira.
IPA: /aɪ pʊt ðə bʊks ɑːn ə ʃɛlf/ · PT: [ái pút dha búks ón a chélf]
36. The shelves are full. — As prateleiras estão cheias.
IPA: /ðə ʃɛlvz ɑːr fʊl/ · PT: [dha chélvz ár fúl]
37. There is a mouse in the kitchen. — Tem um rato na cozinha.
IPA: /ðɛr ɪz ə maʊs ɪn ðə ˈkɪtʃən/ · PT: [dhér iz a máus in dha kítchen]
38. We have two children. — Nós temos dois filhos.
IPA: /wiː hæv tuː ˈtʃɪldrən/ · PT: [uí rrév tú tchíldren]
39. The baby is sleeping. — O bebê está dormindo.
IPA: /ðə ˈbeɪbi ɪz ˈsliːpɪŋ/ · PT: [dha bêibi iz slípin]

Na escola / universidade
40. He is a student. — Ele é estudante.
IPA: /hiː ɪz ə ˈstuːdənt/ · PT: [rrí iz a stúdent]
41. The students study hard. — Os estudantes estudam muito.
IPA: /ðə ˈstuːdənts ˈstʌdi hɑːrd/ · PT: [dha stúdents stâdi rrárd]
42. She goes to a university. — Ela vai para uma universidade.
IPA: /ʃiː ɡoʊz tə ə ˌjuːnɪˈvɜːrsəti/ · PT: [chí gôuz tu a iunivârsiti]
43. I have a class in an hour. — Eu tenho aula em uma hora.
IPA: /aɪ hæv ə klæs ɪn ən ˈaʊər/ · PT: [ái rrév a klés in an áuer]

No médico / corpo
44. My tooth hurts. — Meu dente dói.
IPA: /maɪ tuːθ hɜːrts/ · PT: [mái túth rârts]
45. The dentist checks my teeth. — O dentista examina meus dentes.
IPA: /ðə ˈdɛntɪst tʃɛks maɪ tiːθ/ · PT: [dha déntist tchéks mái títh]
46. My foot is sore. — Meu pé está dolorido.
IPA: /maɪ fʊt ɪz sɔːr/ · PT: [mái fút iz sór]

Na fazenda / parque
47. There is a sheep in the field. — Tem uma ovelha no campo.
IPA: /ðɛr ɪz ə ʃiːp ɪn ðə fiːld/ · PT: [dhér iz a chíp in dha fíld]
48. The sheep are eating grass. — As ovelhas estão comendo grama.
IPA: /ðə ʃiːp ɑːr ˈiːtɪŋ ɡræs/ · PT: [dha chíp ár ítin grés]
49. I caught a fish. — Eu peguei um peixe.
IPA: /aɪ kɔːt ə fɪʃ/ · PT: [ái kót a fích]
50. We caught five fish. — Pegamos cinco peixes.
IPA: /wiː kɔːt faɪv fɪʃ/ · PT: [uí kót fáiv fích]

51. I have a box. — Eu tenho uma caixa.
IPA: /aɪ hæv ə bɑːks/ · PT: [ái rrév a báks]
52. She eats an apple. — Ela come uma maçã.
IPA: /ʃiː iːts ən ˈæpl̩/ · PT: [chí íts an épou]
53. He is a man. — Ele é um homem.
IPA: /hiː ɪz ə mæn/ · PT: [rrí iz a mén]
54. They are students. — Eles são estudantes.
IPA: /ðeɪ ɑːr ˈstuːdənts/ · PT: [dhêi ár stúdents]

Um pouco mais
55. The babies are crying. — Os bebês estão chorando.
IPA: /ðə ˈbeɪbiz ɑːr ˈkraɪɪŋ/ · PT: [dha bêibiz ár kráin]
56. Two women are talking. — Duas mulheres estão conversando.
IPA: /tuː ˈwɪmɪn ɑːr ˈtɔːkɪŋ/ · PT: [tú uímen ár tókin]
57. Is this a fish or a toy? — Isto é um peixe ou um brinquedo?
IPA: /ɪz ðɪs ə fɪʃ ɔːr ə tɔɪ/ · PT: [iz dhís a fích ór a tói]
58. I don't have an umbrella. — Eu não tenho guarda-chuva.
IPA: /aɪ doʊnt hæv ən ʌmˈbrɛlə/ · PT: [ái dôunt rrév an âmbréla]

Perguntas e negações
59. How many boxes do you have? — Quantas caixas você tem?
IPA: /haʊ ˈmɛni ˈbɑːksɪz duː juː hæv/ · PT: [rráu méni báksiz dú iú rrév]
60. Are there any apples? — Tem alguma maçã?
IPA: /ɑːr ðɛr ˈɛni ˈæpl̩z/ · PT: [ár dhér éni épouz]
61. These aren't toys. — Estes não são brinquedos.
IPA: /ðiːz ˈɑːrnt tɔɪz/ · PT: [dhíz árent tóiz]
62. Why are the shelves empty? — Por que as prateleiras estão vazias?
IPA: /waɪ ɑːr ðə ʃɛlvz ˈɛmpti/ · PT: [uái ár dha chélvz émpti]

Conectores e tempos verbais
63. I bought an apple because I was hungry. — Eu comprei uma maçã porque estava com fome.
IPA: /aɪ bɔːt ən ˈæpl̩ bɪˈkɔːz aɪ wəz ˈhʌŋɡri/ · PT: [ái bót an épou bikóz ái uâz râNgri]
64. The children are playing with their toys. — As crianças estão brincando com os brinquedos delas.
IPA: /ðə ˈtʃɪldrən ɑːr ˈpleɪɪŋ wɪð ðɛr tɔɪz/ · PT: [dha tchíldren ár plêin uídh dhér tóiz]
65. We visited three countries last year. — Nós visitamos três países no ano passado.
IPA: /wiː ˈvɪzɪtɪd θriː ˈkʌntriz læst jɪr/ · PT: [uí vízited thrí kântriz lést íir]
66. She was reading when the bus arrived. — Ela estava lendo quando o ônibus chegou.
IPA: /ʃiː wəz ˈriːdɪŋ wɛn ðə bʌs əˈraɪvd/ · PT: [chí uâz rídin uén dha bâs aráivd]
67. The mice ran under the table. — Os ratos correram para baixo da mesa.
IPA: /ðə maɪs ræn ˈʌndər ðə ˈteɪbl̩/ · PT: [dha máis rén ânder dha têibou]

As mais ricas
68. I'll buy a dozen eggs when I go to the store. — Vou comprar uma dúzia de ovos quando for ao mercado.
IPA: /aɪl baɪ ə ˈdʌzn̩ ɛɡz wɛn aɪ ɡoʊ tə ðə stɔːr/ · PT: [áiou bái a dâzan égz uén ái gôu tu dha stór]
69. He has two feet, but one shoe is missing. — Ele tem dois pés, mas falta um sapato.
IPA: /hiː hæz tuː fiːt bʌt wʌn ʃuː ɪz ˈmɪsɪŋ/ · PT: [rrí rréz tú fít bât uân chú iz mísin]
70. Although it's only an hour, the class feels long. — Embora seja só uma hora, a aula parece longa.
IPA: /ɔːlˈðoʊ ɪts ˈoʊnli ən ˈaʊər ðə klæs fiːlz lɔːŋ/ · PT: [oldhôu íts ôunli an áuer dha klés fílz lóN]
71. The men and women work at the same university. — Os homens e as mulheres trabalham na mesma universidade.
IPA: /ðə mɛn ænd ˈwɪmɪn wɜːrk æt ðə seɪm ˌjuːnɪˈvɜːrsəti/ · PT: [dha mén énd uímen uârk ét dha sêim iunivârsiti]
72. I didn't bring an umbrella, so I got wet. — Eu não trouxe guarda-chuva, então me molhei.
IPA: /aɪ ˈdɪdnt brɪŋ ən ʌmˈbrɛlə soʊ aɪ ɡɑːt wɛt/ · PT: [ái dídent brín an âmbréla sôu ái gót uét]
73. My teeth hurt because I ate too much candy. — Meus dentes doem porque comi muito doce.
IPA: /maɪ tiːθ hɜːrt bɪˈkɔːz aɪ eɪt tuː mʌtʃ ˈkændi/ · PT: [mái títh rârt bikóz ái êit tú mâtch kéndi]
74. Have you ever seen a mouse as big as this one? — Você já viu um rato tão grande quanto este?
IPA: /hæv juː ˈɛvər siːn ə maʊs æz bɪɡ æz ðɪs wʌn/ · PT: [rrév iú éver sín a máus éz bíg éz dhís uân]
75. We need more shelves because we have too many books. — Precisamos de mais prateleiras porque temos livros demais.
IPA: /wiː niːd mɔːr ʃɛlvz bɪˈkɔːz wiː hæv tuː ˈmɛni bʊks/ · PT: [uí níd mór chélvz bikóz uí rrév tú méni búks]

"Do you want an apple?" / "Yes, please." — "Você quer uma maçã?" / "Sim, por favor."
IPA: /duː juː wɑːnt ən ˈæpl̩ · jɛs pliːz/ · PT: [dú iú uánt an épou · iés plíz]
"Is this a bus or a train?" / "It's a bus." — "Isto é um ônibus ou um trem?" / "É um ônibus."
IPA: /ɪz ðɪs ə bʌs ɔːr ə treɪn · ɪts ə bʌs/ · PT: [iz dhís a bâs ór a trêin · íts a bâs]
"How many children do you have?" / "Two." — "Quantos filhos você tem?" / "Dois."
IPA: /haʊ ˈmɛni ˈtʃɪldrən duː juː hæv · tuː/ · PT: [rráu méni tchíldren dú iú rrév · tú]
"Are these toys yours?" / "Yes, they are." — "Estes brinquedos são seus?" / "Sim, são."
IPA: /ɑːr ðiːz tɔɪz jɔːrz · jɛs ðeɪ ɑːr/ · PT: [ár dhíz tóiz iórz · iés dhêi ár]
"Where is the box?" / "On the shelf." — "Onde está a caixa?" / "Na prateleira."
IPA: /wɛr ɪz ðə bɑːks · ɑːn ðə ʃɛlf/ · PT: [uér iz dha báks · ón dha chélf]
"Do you have an umbrella?" / "No, I don't." — "Você tem guarda-chuva?" / "Não, não tenho."
IPA: /duː juː hæv ən ʌmˈbrɛlə · noʊ aɪ doʊnt/ · PT: [dú iú rrév an âmbréla · nôu ái dôunt]
"Is that a fish?" / "Yes, it is." — "Aquilo é um peixe?" / "Sim, é."
IPA: /ɪz ðæt ə fɪʃ · jɛs ɪt ɪz/ · PT: [iz dhét a fích · iés ít iz]
"How many eggs do we need?" / "Six." — "Quantos ovos precisamos?" / "Seis."
IPA: /haʊ ˈmɛni ɛɡz duː wiː niːd · sɪks/ · PT: [rráu méni égz dú uí níd · síks]
"Is he a student?" / "Yes, at the university." — "Ele é estudante?" / "Sim, na universidade."
IPA: /ɪz hiː ə ˈstuːdənt · jɛs æt ðə ˌjuːnɪˈvɜːrsəti/ · PT: [iz rrí a stúdent · iés ét dha iunivârsiti]
"What time is it?" / "We have an hour left." — "Que horas são?" / "Temos uma hora ainda."
IPA: /wʌt taɪm ɪz ɪt · wiː hæv ən ˈaʊər lɛft/ · PT: [uât táim iz ít · uí rrév an áuer léft]
"Are there mice in the house?" / "Yes, unfortunately." — "Tem ratos na casa?" / "Sim, infelizmente."
IPA: /ɑːr ðɛr maɪs ɪn ðə haʊs · jɛs ʌnˈfɔːrtʃənətli/ · PT: [ár dhér máis in dha ráus · iés anfórtchanetli]
"Do sheep live here?" / "Yes, on the farm." — "Tem ovelhas aqui?" / "Sim, na fazenda."
IPA: /duː ʃiːp lɪv hɪr · jɛs ɑːn ðə fɑːrm/ · PT: [dú chíp lív rrír · iés ón dha fárm]
"Is this an orange?" / "No, it's a lemon." — "Isto é uma laranja?" / "Não, é um limão."
IPA: /ɪz ðɪs ən ˈɔːrɪndʒ · noʊ ɪts ə ˈlɛmən/ · PT: [iz dhís an órindj · nôu íts a léman]
"Are these men your brothers?" / "No, they're my cousins." — "Estes homens são seus irmãos?" / "Não, são meus primos."
IPA: /ɑːr ðiːz mɛn jɔːr ˈbrʌðərz · noʊ ðer maɪ ˈkʌzn̩z/ · PT: [ár dhíz mén iór brâdherz · nôu dhér mái kâzanz]
"Does your tooth still hurt?" / "No, it's better now." — "Seu dente ainda dói?" / "Não, está melhor agora."
IPA: /dʌz jɔːr tuːθ stɪl hɜːrt · noʊ ɪts ˈbɛtər naʊ/ · PT: [dâz iór túth stíou rârt · nôu íts béter náu]
"How many countries have you visited?" / "Three." — "Quantos países você visitou?" / "Três."
IPA: /haʊ ˈmɛni ˈkʌntriz hæv juː ˈvɪzɪtɪd · θriː/ · PT: [rráu méni kântriz rrév iú vízited · thrí]
"Is that a hat?" / "Yes, it's mine." — "Aquilo é um chapéu?" / "Sim, é meu."
IPA: /ɪz ðæt ə hæt · jɛs ɪts maɪn/ · PT: [iz dhét a rrét · iés íts máin]
"Are the women teachers?" / "Yes, they are." — "As mulheres são professoras?" / "Sim, são."
IPA: /ɑːr ðə ˈwɪmɪn ˈtiːtʃərz · jɛs ðeɪ ɑːr/ · PT: [ár dha uímen títcherz · iés dhêi ár]
"Do you need a box?" / "Yes, a big one." — "Você precisa de uma caixa?" / "Sim, uma grande."
IPA: /duː juː niːd ə bɑːks · jɛs ə bɪɡ wʌn/ · PT: [dú iú níd a báks · iés a bíg uân]
"Is it an hour or two?" / "Just an hour." — "É uma hora ou duas?" / "Só uma hora."
IPA: /ɪz ɪt ən ˈaʊər ɔːr tuː · dʒʌst ən ˈaʊər/ · PT: [iz ít an áuer ór tú · djâst an áuer]
"Are these your shelves?" / "No, they're hers." — "Estas prateleiras são suas?" / "Não, são dela."
IPA: /ɑːr ðiːz jɔːr ʃɛlvz · noʊ ðer hɜːrz/ · PT: [ár dhíz iór chélvz · nôu dhér rrârz]
"Can I have an egg?" / "Sure, take two." — "Posso pegar um ovo?" / "Claro, pega dois."
IPA: /kæn aɪ hæv ən ɛɡ · ʃʊr teɪk tuː/ · PT: [kén ái rrév an ég · chúr têik tú]
"Is your foot okay?" / "No, it hurts." — "Seu pé está bem?" / "Não, está doendo."
IPA: /ɪz jɔːr fʊt oʊˈkeɪ · noʊ ɪt hɜːrts/ · PT: [iz iór fút ôukêi · nôu ít rârts]
"Are those babies twins?" / "Yes, they are." — "Aqueles bebês são gêmeos?" / "Sim, são."
IPA: /ɑːr ðoʊz ˈbeɪbiz twɪnz · jɛs ðeɪ ɑːr/ · PT: [ár dhôuz bêibiz tuínz · iés dhêi ár]
"Is this a university?" / "Yes, a big one." — "Isto é uma universidade?" / "Sim, uma grande."
IPA: /ɪz ðɪs ə ˌjuːnɪˈvɜːrsəti · jɛs ə bɪɡ wʌn/ · PT: [iz dhís a iunivârsiti · iés a bíg uân]`;

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
      id: `lesson_4_grammar_a1_en_card_${index++}`,
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

const fileDest = 'public/decks/lesson_4_grammar_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_4_grammar_a1'] = meta['lesson_4_grammar_a1'] || {};
meta['lesson_4_grammar_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
