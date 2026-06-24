const fs = require('fs');

const rawText = `family — família
IPA: /ˈfæməli/ · PT: [fémili]
grandfather — avô
IPA: /ˈɡrænfɑːðər/ · PT: [grénfadher]
grandmother — avó
IPA: /ˈɡrænmʌðər/ · PT: [grénmadher]
uncle — tio
IPA: /ˈʌŋkl̩/ · PT: [ânkou]
aunt — tia
IPA: /ænt/ · PT: [ént]
father — pai
IPA: /ˈfɑːðər/ · PT: [fádher]
mother — mãe
IPA: /ˈmʌðər/ · PT: [mâdher]
cousin — primo / prima
IPA: /ˈkʌzn̩/ · PT: [kâzan]
brother — irmão
IPA: /ˈbrʌðər/ · PT: [brâdher]
sister — irmã
IPA: /ˈsɪstər/ · PT: [síster]
brother-in-law — cunhado
IPA: /ˈbrʌðər ɪn lɔː/ · PT: [brâdher in ló]
husband — marido
IPA: /ˈhʌzbənd/ · PT: [râzband]
wife — esposa
IPA: /waɪf/ · PT: [uáif]
nephew — sobrinho
IPA: /ˈnɛfjuː/ · PT: [néfiu]
niece — sobrinha
IPA: /niːs/ · PT: [nís]
son — filho
IPA: /sʌn/ · PT: [sân]
daughter — filha
IPA: /ˈdɔːtər/ · PT: [dóter]
parents — pais
IPA: /ˈpɛrənts/ · PT: [pérents]
grandparents — avós
IPA: /ˈɡrænpɛrənts/ · PT: [grénperents]
children — filhos / crianças
IPA: /ˈtʃɪldrən/ · PT: [tchíldren]
grandson — neto
IPA: /ˈɡrænsʌn/ · PT: [grénsan]
granddaughter — neta
IPA: /ˈɡrændɔːtər/ · PT: [gréndoter]
sister-in-law — cunhada
IPA: /ˈsɪstər ɪn lɔː/ · PT: [síster in ló]
baby — bebê
IPA: /ˈbeɪbi/ · PT: [bêibi]
relatives — parentes
IPA: /ˈrɛlətɪvz/ · PT: [rélativz]

26. This is my family. — Esta é minha família.
IPA: /ðɪs ɪz maɪ ˈfæməli/ · PT: [dhís iz mái fémili]
27. My father is a doctor. — Meu pai é médico.
IPA: /maɪ ˈfɑːðər ɪz ə ˈdɑːktər/ · PT: [mái fádher iz a dáktor]
28. My mother is a teacher. — Minha mãe é professora.
IPA: /maɪ ˈmʌðər ɪz ə ˈtiːtʃər/ · PT: [mái mâdher iz a títcher]
29. I have one brother. — Eu tenho um irmão.
IPA: /aɪ hæv wʌn ˈbrʌðər/ · PT: [ái rrév uân brâdher]
30. My sister is younger than me. — Minha irmã é mais nova que eu.
IPA: /maɪ ˈsɪstər ɪz ˈjʌŋɡər ðæn miː/ · PT: [mái síster iz iâNguer dhén mí]

Visitando os avós
31. My grandparents live nearby. — Meus avós moram perto.
IPA: /maɪ ˈɡrænpɛrənts lɪv ˈnɪrbaɪ/ · PT: [mái grénperents lív nírbai]
32. My grandfather is very kind. — Meu avô é muito gentil.
IPA: /maɪ ˈɡrænfɑːðər ɪz ˈvɛri kaɪnd/ · PT: [mái grénfadher iz véri káind]
33. My grandmother cooks well. — Minha avó cozinha bem.
IPA: /maɪ ˈɡrænmʌðər kʊks wɛl/ · PT: [mái grénmadher kúks uél]
34. We visit them on weekends. — Nós os visitamos nos fins de semana.
IPA: /wiː ˈvɪzɪt ðɛm ɑːn ˈwiːkɛndz/ · PT: [uí vízit dhém ón uíkendz]

Tios e primos
35. My uncle has two children. — Meu tio tem dois filhos.
IPA: /maɪ ˈʌŋkl̩ hæz tuː ˈtʃɪldrən/ · PT: [mái ânkou rréz tú tchíldren]
36. My aunt lives in Madrid. — Minha tia mora em Madri.
IPA: /maɪ ænt lɪvz ɪn məˈdrɪd/ · PT: [mái ént lívz in madríd]
37. My cousins are my best friends. — Meus primos são meus melhores amigos.
IPA: /maɪ ˈkʌzn̩z ɑːr maɪ bɛst frɛndz/ · PT: [mái kâzanz ár mái bést fréndz]

Marido e esposa
38. This is my wife, Sarah. — Esta é minha esposa, Sarah.
IPA: /ðɪs ɪz maɪ waɪf ˈsɛrə/ · PT: [dhís iz mái uáif séra]
39. My husband works a lot. — Meu marido trabalha muito.
IPA: /maɪ ˈhʌzbənd wɜːrks ə lɑːt/ · PT: [mái râzband uârks a lót]
40. We have two kids. — Nós temos dois filhos.
IPA: /wiː hæv tuː kɪdz/ · PT: [uí rrév tú kídz]

Os filhos
41. My son is six years old. — Meu filho tem seis anos.
IPA: /maɪ sʌn ɪz sɪks jɪrz oʊld/ · PT: [mái sân iz síks íirz ôuld]
42. My daughter loves to draw. — Minha filha adora desenhar.
IPA: /maɪ ˈdɔːtər lʌvz tə drɔː/ · PT: [mái dóter lâvz tu dró]
43. The baby is sleeping. — O bebê está dormindo.
IPA: /ðə ˈbeɪbi ɪz ˈsliːpɪŋ/ · PT: [dha bêibi iz slípin]

Cunhados e sobrinhos
44. My sister's husband is my brother-in-law. — O marido da minha irmã é meu cunhado.
IPA: /maɪ ˈsɪstərz ˈhʌzbənd ɪz maɪ ˈbrʌðər ɪn lɔː/ · PT: [mái sísterz râzband iz mái brâdher in ló]
45. My nephew is very funny. — Meu sobrinho é muito engraçado.
IPA: /maɪ ˈnɛfjuː ɪz ˈvɛri ˈfʌni/ · PT: [mái néfiu iz véri fâni]
46. My niece is learning to walk. — Minha sobrinha está aprendendo a andar.
IPA: /maɪ niːs ɪz ˈlɜːrnɪŋ tə wɔːk/ · PT: [mái nís iz lârnin tu uók]

Fotos e momentos
47. Here is a photo of my parents. — Aqui está uma foto dos meus pais.
IPA: /hɪr ɪz ə ˈfoʊtoʊ əv maɪ ˈpɛrənts/ · PT: [rrír iz a fôutou ov mái pérents]
48. We are a big family. — Nós somos uma família grande.
IPA: /wiː ɑːr ə bɪɡ ˈfæməli/ · PT: [uí ár a bíg fémili]
49. I love my relatives. — Eu amo meus parentes.
IPA: /aɪ lʌv maɪ ˈrɛlətɪvz/ · PT: [ái lâv mái rélativz]
50. Family is important to me. — A família é importante para mim.
IPA: /ˈfæməli ɪz ɪmˈpɔːrtənt tə miː/ · PT: [fémili iz impórtant tu mí]

51. I have a sister. — Eu tenho uma irmã.
IPA: /aɪ hæv ə ˈsɪstər/ · PT: [ái rrév a síster]
52. My father is tall. — Meu pai é alto.
IPA: /maɪ ˈfɑːðər ɪz tɔːl/ · PT: [mái fádher iz tól]
53. She is my cousin. — Ela é minha prima.
IPA: /ʃiː ɪz maɪ ˈkʌzn̩/ · PT: [chí iz mái kâzan]
54. We love our grandparents. — Nós amamos nossos avós.
IPA: /wiː lʌv aʊər ˈɡrænpɛrənts/ · PT: [uí lâv áuer grénperents]

Um pouco mais
55. My brother has a dog. — Meu irmão tem um cachorro.
IPA: /maɪ ˈbrʌðər hæz ə dɔːɡ/ · PT: [mái brâdher rréz a dóg]
56. Her daughter is a nurse. — A filha dela é enfermeira.
IPA: /hɜːr ˈdɔːtər ɪz ə nɜːrs/ · PT: [rrâr dóter iz a nârs]
57. Is he your uncle? — Ele é seu tio?
IPA: /ɪz hiː jɔːr ˈʌŋkl̩/ · PT: [iz rrí iór ânkou]
58. I don't have any cousins. — Eu não tenho primos.
IPA: /aɪ doʊnt hæv ˈɛni ˈkʌzn̩z/ · PT: [ái dôunt rrév éni kâzanz]

Perguntas e negações
59. How many brothers do you have? — Quantos irmãos você tem?
IPA: /haʊ ˈmɛni ˈbrʌðərz duː juː hæv/ · PT: [rráu méni brâdherz dú iú rrév]
60. Where do your parents live? — Onde seus pais moram?
IPA: /wɛr duː jɔːr ˈpɛrənts lɪv/ · PT: [uér dú iór pérents lív]
61. My grandfather isn't here today. — Meu avô não está aqui hoje.
IPA: /maɪ ˈɡrænfɑːðər ˈɪznt hɪr təˈdeɪ/ · PT: [mái grénfadher íznt rrír tudêi]
62. Why is your sister sad? — Por que sua irmã está triste?
IPA: /waɪ ɪz jɔːr ˈsɪstər sæd/ · PT: [uái iz iór síster séd]

Conectores e tempos verbais
63. I call my mother because I miss her. — Eu ligo para minha mãe porque sinto falta dela.
IPA: /aɪ kɔːl maɪ ˈmʌðər bɪˈkɔːz aɪ mɪs hɜːr/ · PT: [ái kól mái mâdher bikóz ái mís rrâr]
64. My aunt is visiting us this week. — Minha tia está nos visitando esta semana.
IPA: /maɪ ænt ɪz ˈvɪzɪtɪŋ ʌs ðɪs wiːk/ · PT: [mái ént iz vízitin âs dhís uík]
65. We celebrated my grandmother's birthday yesterday. — Nós comemoramos o aniversário da minha avó ontem.
IPA: /wiː ˈsɛləbreɪtɪd maɪ ˈɡrænmʌðərz ˈbɜːrθdeɪ ˈjɛstərdeɪ/ · PT: [uí sélebreited mái grénmadherz bârthdei iéster dei]
66. My brother was studying when I arrived. — Meu irmão estava estudando quando eu cheguei.
IPA: /maɪ ˈbrʌðər wəz ˈstʌdiɪŋ wɛn aɪ əˈraɪvd/ · PT: [mái brâdher uâz stâdiin uén ái aráivd]
67. My parents met when they were young. — Meus pais se conheceram quando eram jovens.
IPA: /maɪ ˈpɛrənts mɛt wɛn ðeɪ wɜːr jʌŋ/ · PT: [mái pérents mét uén dhêi uâr iâN]

As mais ricas
68. My sister is married, but my brother is single. — Minha irmã é casada, mas meu irmão é solteiro.
IPA: /maɪ ˈsɪstər ɪz ˈmɛrid bʌt maɪ ˈbrʌðər ɪz ˈsɪŋɡl̩/ · PT: [mái síster iz mérid bât mái brâdher iz síNgou]
69. I'll introduce you to my family when you come. — Vou te apresentar à minha família quando você vier.
IPA: /aɪl ˌɪntrəˈduːs juː tə maɪ ˈfæməli wɛn juː kʌm/ · PT: [áiou introdús iú tu mái fémili uén iú kâm]
70. My grandparents have been married for fifty years. — Meus avós são casados há cinquenta anos.
IPA: /maɪ ˈɡrænpɛrənts hæv bɪn ˈmɛrid fɔːr ˈfɪfti jɪrz/ · PT: [mái grénperents rrév bín mérid fór fífti íirz]
71. Although my cousin lives far away, we talk every day. — Embora meu primo more longe, conversamos todo dia.
IPA: /ɔːlˈðoʊ maɪ ˈkʌzn̩ lɪvz fɑːr əˈweɪ wiː tɔːk ˈɛvri deɪ/ · PT: [oldhôu mái kâzan lívz fár auêi uí tók évri dêi]
72. My uncle didn't come because he was sick. — Meu tio não veio porque estava doente.
IPA: /maɪ ˈʌŋkl̩ ˈdɪdnt kʌm bɪˈkɔːz hiː wəz sɪk/ · PT: [mái ânkou dídent kâm bikóz rrí uâz sík]
73. My daughter looks like her mother, but she acts like me. — Minha filha se parece com a mãe, mas age como eu.
IPA: /maɪ ˈdɔːtər lʊks laɪk hɜːr ˈmʌðər bʌt ʃiː ækts laɪk miː/ · PT: [mái dóter lúks láik rrâr mâdher bât chí ékts láik mí]
74. Have you ever met my brother-in-law and his wife? — Você já conheceu meu cunhado e a esposa dele?
IPA: /hæv juː ˈɛvər mɛt maɪ ˈbrʌðər ɪn lɔː ænd hɪz waɪf/ · PT: [rrév iú éver mét mái brâdher in ló énd rriz uáif]
75. My nephew and niece are coming, so the house will be full. — Meu sobrinho e minha sobrinha estão vindo, então a casa vai ficar cheia.
IPA: /maɪ ˈnɛfjuː ænd niːs ɑːr ˈkʌmɪŋ soʊ ðə haʊs wɪl biː fʊl/ · PT: [mái néfiu énd nís ár kâmin sôu dha ráus uíou bí fúl]

"Is this your family?" / "Yes, it is." — "Esta é sua família?" / "Sim, é."
IPA: /ɪz ðɪs jɔːr ˈfæməli · jɛs ɪt ɪz/ · PT: [iz dhís iór fémili · iés ít iz]
"Who is he?" / "He's my father." — "Quem é ele?" / "É meu pai."
IPA: /huː ɪz hiː · hiːz maɪ ˈfɑːðər/ · PT: [rrú iz rrí · rríz mái fádher]
"Do you have any siblings?" / "Yes, one brother." — "Você tem irmãos?" / "Sim, um irmão."
IPA: /duː juː hæv ˈɛni ˈsɪblɪŋz · jɛs wʌn ˈbrʌðər/ · PT: [dú iú rrév éni síblinz · iés uân brâdher]
"Is she your sister?" / "No, she's my cousin." — "Ela é sua irmã?" / "Não, é minha prima."
IPA: /ɪz ʃiː jɔːr ˈsɪstər · noʊ ʃiːz maɪ ˈkʌzn̩/ · PT: [iz chí iór síster · nôu chíz mái kâzan]
"How old is your son?" / "He's six." — "Quantos anos tem seu filho?" / "Ele tem seis."
IPA: /haʊ oʊld ɪz jɔːr sʌn · hiːz sɪks/ · PT: [rráu ôuld iz iór sân · rríz síks]
"Where do your grandparents live?" / "In Spain." — "Onde seus avós moram?" / "Na Espanha."
IPA: /wɛr duː jɔːr ˈɡrænpɛrənts lɪv · ɪn speɪn/ · PT: [uér dú iór grénperents lív · in spêin]
"Are you married?" / "Yes, this is my wife." — "Você é casado?" / "Sim, esta é minha esposa."
IPA: /ɑːr juː ˈmɛrid · jɛs ðɪs ɪz maɪ waɪf/ · PT: [ár iú mérid · iés dhís iz mái uáif]
"Who is the baby?" / "She's my niece." — "Quem é o bebê?" / "É minha sobrinha."
IPA: /huː ɪz ðə ˈbeɪbi · ʃiːz maɪ niːs/ · PT: [rrú iz dha bêibi · chíz mái nís]
"Is that your uncle?" / "Yes, his name is Michael." — "Aquele é seu tio?" / "Sim, o nome dele é Michael."
IPA: /ɪz ðæt jɔːr ˈʌŋkl̩ · jɛs hɪz neɪm ɪz ˈmaɪkl̩/ · PT: [iz dhét iór ânkou · iés rriz nêim iz máikou]
"Do you have children?" / "Yes, a son and a daughter." — "Você tem filhos?" / "Sim, um filho e uma filha."
IPA: /duː juː hæv ˈtʃɪldrən · jɛs ə sʌn ænd ə ˈdɔːtər/ · PT: [dú iú rrév tchíldren · iés a sân énd a dóter]
"What's your mother's name?" / "Her name is Linda." — "Qual é o nome da sua mãe?" / "O nome dela é Linda."
IPA: /wʌts jɔːr ˈmʌðərz neɪm · hɜːr neɪm ɪz ˈlɪndə/ · PT: [uâts iór mâdherz nêim · rrâr nêim iz línda]
"Is your sister older than you?" / "No, she's younger." — "Sua irmã é mais velha que você?" / "Não, é mais nova."
IPA: /ɪz jɔːr ˈsɪstər ˈoʊldər ðæn juː · noʊ ʃiːz ˈjʌŋɡər/ · PT: [iz iór síster ôulder dhén iú · nôu chíz iâNguer]
"Who cooks in your family?" / "My grandmother does." — "Quem cozinha na sua família?" / "Minha avó."
IPA: /huː kʊks ɪn jɔːr ˈfæməli · maɪ ˈɡrænmʌðər dʌz/ · PT: [rrú kúks in iór fémili · mái grénmadher dâz]
"Are these your cousins?" / "Yes, they are." — "Estes são seus primos?" / "Sim, são."
IPA: /ɑːr ðiːz jɔːr ˈkʌzn̩z · jɛs ðeɪ ɑːr/ · PT: [ár dhíz iór kâzanz · iés dhêi ár]
"Is your brother married?" / "No, he's single." — "Seu irmão é casado?" / "Não, é solteiro."
IPA: /ɪz jɔːr ˈbrʌðər ˈmɛrid · noʊ hiːz ˈsɪŋɡl̩/ · PT: [iz iór brâdher mérid · nôu rríz síNgou]
"Who is John?" / "He's my brother-in-law." — "Quem é o John?" / "É meu cunhado."
IPA: /huː ɪz dʒɑːn · hiːz maɪ ˈbrʌðər ɪn lɔː/ · PT: [rrú iz djón · rríz mái brâdher in ló]
"How many cousins do you have?" / "Four." — "Quantos primos você tem?" / "Quatro."
IPA: /haʊ ˈmɛni ˈkʌzn̩z duː juː hæv · fɔːr/ · PT: [rráu méni kâzanz dú iú rrév · fór]
"Is your father retired?" / "Yes, he is." — "Seu pai é aposentado?" / "Sim, é."
IPA: /ɪz jɔːr ˈfɑːðər rɪˈtaɪərd · jɛs hiː ɪz/ · PT: [iz iór fádher ritáierd · iés rrí iz]
"Who is your favorite relative?" / "My grandfather." — "Quem é seu parente favorito?" / "Meu avô."
IPA: /huː ɪz jɔːr ˈfeɪvərɪt ˈrɛlətɪv · maɪ ˈɡrænfɑːðər/ · PT: [rrú iz iór fêivorit rélativ · mái grénfadher]
"Does your aunt live near you?" / "No, she lives far away." — "Sua tia mora perto de você?" / "Não, mora longe."
IPA: /dʌz jɔːr ænt lɪv nɪr juː · noʊ ʃiː lɪvz fɑːr əˈweɪ/ · PT: [dâz iór ént lív nír iú · nôu chí lívz fár auêi]
"Is your wife from here?" / "No, she's from Italy." — "Sua esposa é daqui?" / "Não, é da Itália."
IPA: /ɪz jɔːr waɪf frəm hɪr · noʊ ʃiːz frəm ˈɪtəli/ · PT: [iz iór uáif from rrír · nôu chíz from ítali]
"Who is older, your mom or your dad?" / "My dad is." — "Quem é mais velho, sua mãe ou seu pai?" / "Meu pai."
IPA: /huː ɪz ˈoʊldər jɔːr mɑːm ɔːr jɔːr dæd · maɪ dæd ɪz/ · PT: [rrú iz ôulder iór móm ór iór déd · mái déd iz]
"Are your parents coming?" / "Yes, they are." — "Seus pais estão vindo?" / "Sim, estão."
IPA: /ɑːr jɔːr ˈpɛrənts ˈkʌmɪŋ · jɛs ðeɪ ɑːr/ · PT: [ár iór pérents kâmin · iés dhêi ár]
"Is the little girl your daughter?" / "Yes, her name is Olivia." — "A menininha é sua filha?" / "Sim, o nome dela é Olivia."
IPA: /ɪz ðə ˈlɪtl̩ ɡɜːrl jɔːr ˈdɔːtər · jɛs hɜːr neɪm ɪz əˈlɪviə/ · PT: [iz dha lítou gârl iór dóter · iés rrâr nêim iz olívia]
"Do you see your family often?" / "Yes, every weekend." — "Você vê sua família com frequência?" / "Sim, todo fim de semana."
IPA: /duː juː siː jɔːr ˈfæməli ˈɔːfn̩ · jɛs ˈɛvri ˈwiːkɛnd/ · PT: [dú iú sí iór fémili ófen · iés évri uíkend]`;

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

const fileDest = 'public/decks/lesson_3_vocabulary_a1_en.json';
fs.writeFileSync(fileDest, JSON.stringify(cards, null, 2), 'utf8');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));
meta['lesson_3_vocabulary_a1'] = meta['lesson_3_vocabulary_a1'] || {};
meta['lesson_3_vocabulary_a1']['en'] = cards.length;
fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2), 'utf8');

console.log('Cards parsed:', cards.length);
