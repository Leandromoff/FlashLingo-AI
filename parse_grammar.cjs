const fs = require('fs');

const rawText = `Me levanto temprano todos los días. — Eu me levanto cedo todo dia. (rotina)
IPA: /me leˈβanto temˈpɾano ˈtoðos los ˈdias/ · PT: [me lebánto tempráno tódos los días]
El agua hierve a 100°C. — A água ferve a 100°C. (fato)
IPA: /el ˈaɣwa ˈʝeɾβe a θjen ˈɡɾaðos/ · PT: [el água iérbe a thién grádos]
Sé lo que quieres decir. — Eu sei o que você quer dizer. (verbo de estado)
IPA: /se lo ke ˈkjeɾes deˈθiɾ/ · PT: [se lo ke kiéres dethír]
El tren sale a las 8:30. — O trem sai às 8:30. (futuro programado)
IPA: /el tɾen ˈsale a las ˈotʃo i ˈmeðja/ · PT: [el trén sále a las ótcho i médIa]
Giras a la izquierda en la esquina. — Você vira à esquerda na esquina. (instrução)
IPA: /ˈxiɾas a la iθˈkjeɾða en la esˈkina/ · PT: [rríras a la ithkiérda en la eskína]
Entonces, entro en la sala y todos me miran. — Aí, eu entro na sala e todos olham pra mim. (história)
IPA: /enˈtonθes ˈentɾo en la ˈsala i ˈtoðos me ˈmiɾan/ · PT: [entónthes éntro en la sála i tódos me míran]
Pasa el balón y marca. — Ele passa a bola e marca. (narração ao vivo)
IPA: /ˈpasa el baˈlon i ˈmaɾka/ · PT: [pása el balón i márka]
Te prometo que te ayudo. — Eu prometo que te ajudo. (verbo performativo)
IPA: /te pɾoˈmeto ke te aˈʝuðo/ · PT: [te prométo ke te aiúdo]
El gobierno baja los impuestos. — O governo baixa os impostos. (manchete)
IPA: /el ɡoˈβjeɾno ˈbaxa los imˈpwestos/ · PT: [el gobiérno bárra los impuéstos]
Me dicen que empiezas un trabajo nuevo. — Me dizem que você vai começar um emprego novo. (verbo de comunicação)
IPA: /me ˈðiθen ke emˈpjeθas un tɾaˈβaxo ˈnweβo/ · PT: [me díthen ke empiéthas un trabárro nuébo]
PRESENTE CONTÍNUO (estar + gerundio)
11. Estoy hablando contigo. — Eu estou falando com você. (ação agora)
IPA: /esˈtoi aˈβlando konˈtiɣo/ · PT: [estôi ablándo kontígo]
12. Esta semana me quedo con amigos. — Esta semana fico com amigos. (temporário — note o presente simples!)
IPA: /ˈesta seˈmana me ˈkeðo kon aˈmiɣos/ · PT: [ésta semána me kédo kon amígos]
13. La población está creciendo rápido. — A população está crescendo rápido. (mudança)
IPA: /la poβlaˈθjon esˈta kɾeˈθjendo ˈrapiðo/ · PT: [la poblathión está krethiéndo rrápido]
14. Quedo con Jane a las seis. — Vou encontrar a Jane às seis. (futuro = presente simples!)
IPA: /ˈkeðo kon ʝein a las seis/ · PT: [kédo kon djéin a las séis]
15. ¡Siempre pierdes las llaves! — Você está sempre perdendo as chaves! (reclamação)
IPA: /ˈsjempɾe ˈpjeɾðes las ˈʎaβes/ · PT: [siémpre piérdes las lhábes]
16. Estoy esperando cuando un tipo empieza a cantar. — Estou esperando quando um cara começa a cantar. (história)
IPA: /esˈtoi espeˈɾando ˈkwando un ˈtipo emˈpjeθa a kanˈtaɾ/ · PT: [estôi esperándo kuándo un típo empiétha a kantár]
Verbos de estado × ação
17. Me encanta trabajar desde casa. — Eu amo trabalhar de casa. (permanente)
IPA: /me eŋˈkanta tɾaβaˈxaɾ ˈdezðe ˈkasa/ · PT: [me enkánta trabarrár désde kása]
18. Últimamente me encanta trabajar desde casa. — Ultimamente estou amando trabalhar de casa. (temporário)
IPA: /ˈultimamente me eŋˈkanta tɾaβaˈxaɾ ˈdezðe ˈkasa/ · PT: [últimaménte me enkánta trabarrár désde kása]
19. Esta sopa sabe genial. — Esta sopa tem um gosto ótimo. (tem sabor)
IPA: /ˈesta ˈsopa ˈsaβe xeˈnjal/ · PT: [ésta sópa sábe rrenIál]
20. El chef está probando la salsa. — O chef está provando o molho. (experimentando)
IPA: /el tʃef esˈta pɾoˈβando la ˈsalsa/ · PT: [el tchéf está probándo la sálsa]
21. Creo que es buena idea. — Eu acho que é uma boa ideia. (opinião)
IPA: /ˈkɾeo ke es ˈbwena iˈðea/ · PT: [kréo ke és buéna idéa]
22. Estoy pensándolo. — Estou pensando nisso. (processo)
IPA: /esˈtoi penˈsandolo/ · PT: [estôi pensándolo]
23. Tengo un coche. — Eu tenho um carro. (posse)
IPA: /ˈteŋɡo un ˈkotʃe/ · PT: [téngo un kótche]
24. Estoy comiendo. — Estou comendo. (ação)
IPA: /esˈtoi koˈmjendo/ · PT: [estôi komiéndo]
25. El español usa el presente simple para el futuro; el inglés usa el continuo. — O espanhol usa o presente simples para o futuro; o inglês usa o contínuo.
IPA: /el espaˈɲol ˈusa el pɾeˈsente ˈsimple ˈpaɾa el fuˈtuɾo/ · PT: [el espánhol úsa el preEsénte símple pára el futúro]
26. Normalmente me despierto a las siete. — Eu geralmente acordo às sete.
IPA: /noɾˈmalmente me desˈpjeɾto a las ˈsjete/ · PT: [normalménte me despiérto a las siéte]
27. Pero hoy me estoy despertando tarde. — Mas hoje estou acordando tarde.
IPA: /ˈpeɾo oi me esˈtoi despeɾˈtando ˈtaɾðe/ · PT: [péro ôi me estôi despertándo tárde]
28. Tomo café cada mañana. — Eu tomo café toda manhã.
IPA: /ˈtomo kaˈfe ˈkaða maˈɲana/ · PT: [tómo kafé káda manhána]
29. Ahora mismo estoy tomando té. — Agora estou tomando chá.
IPA: /aˈoɾa ˈmizmo esˈtoi toˈmando te/ · PT: [aóra mízmo estôi tomándo té]
30. Trabajo en una oficina. — Eu trabalho num escritório.
IPA: /tɾaˈβaxo en una ofiˈθina/ · PT: [trabárro en úna ofithína]
Temporário (esta semana)
31. Esta semana trabajo desde casa. — Esta semana trabalho de casa.
IPA: /ˈesta seˈmana tɾaˈβaxo ˈdezðe ˈkasa/ · PT: [ésta semána trabárro désde kása]
32. Me estoy quedando con mis padres. — Estou ficando na casa dos meus pais.
IPA: /me esˈtoi keˈðando kon mis ˈpaðɾes/ · PT: [me estôi kedándo kon mis pádres]
33. Mi hermana nos está visitando. — Minha irmã está nos visitando.
IPA: /mi eɾˈmana nos esˈta bisiˈtando/ · PT: [mi ermána nos está bisitándo]
Planos futuros (presente simples!)
34. Quedo con un amigo a las seis. — Vou encontrar um amigo às seis.
IPA: /ˈkeðo kon un aˈmiɣo a las seis/ · PT: [kédo kon un amígo a las séis]
35. Viajamos el finde que viene. — Vamos viajar no próximo fim de semana.
IPA: /bjaˈxamos el ˈfinde ke ˈbjene/ · PT: [biarrámos el fínde ke biéne]
36. El tren sale a las ocho. — O trem sai às oito.
IPA: /el tɾen ˈsale a las ˈotʃo/ · PT: [el trén sále a las ótcho]
Fatos × mudança
37. El sol sale por el este. — O sol nasce no leste.
IPA: /el sol ˈsale poɾ el ˈeste/ · PT: [el sol sále por el éste]
38. Los precios están subiendo rápido. — Os preços estão subindo rápido.
IPA: /los ˈpɾeθjos esˈtan suˈβjendo ˈrapiðo/ · PT: [los préthios estão subiéndo rrápido]
39. El agua hierve a 100 grados. — A água ferve a 100 graus.
IPA: /el ˈaɣwa ˈʝeɾβe a θjen ˈɡɾaðos/ · PT: [el água iérbe a thién grádos]
Verbos de estado
40. Sé la respuesta. — Eu sei a resposta.
IPA: /se la resˈpwesta/ · PT: [se la respuésta]
41. No entiendo esto. — Eu não entendo isso.
IPA: /no enˈtjendo ˈesto/ · PT: [no entiéndo ésto]
42. Ella quiere un café. — Ela quer um café.
IPA: /ˈeʎa ˈkjeɾe un kaˈfe/ · PT: [élha kiére un kafé]
Agora mesmo (em progresso)
43. Los niños están jugando fuera. — As crianças estão brincando lá fora.
IPA: /los ˈniɲos esˈtan xuˈɣando ˈfweɾa/ · PT: [los nínhos estão rrugándo fuéra]
44. Él está cocinando la cena ahora. — Ele está fazendo o jantar agora.
IPA: /el esˈta koθiˈnando la ˈθena aˈoɾa/ · PT: [él está kothinándo la théna aóra]
45. Estamos viendo una película. — Estamos assistindo a um filme.
IPA: /esˈtamos ˈbjendo una peˈlikula/ · PT: [estámos biéndo úna pelíkula]
Hábito irritante
46. ¡Siempre me estás interrumpiendo! — Você está sempre me interrompendo!
IPA: /ˈsjempɾe me esˈtas interumˈpjendo/ · PT: [siémpre me estás interrumpiéndo]
47. Está todo el rato mirando el móvil. — Ele está sempre olhando o celular.
IPA: /esˈta ˈtoðo el ˈrato miˈɾando el ˈmoβil/ · PT: [está tódo el rráto mirándo el móbil]
Gosto / sentidos
48. Este café sabe genial. — Este café tem um gosto ótimo.
IPA: /ˈeste kaˈfe ˈsaβe xeˈnjal/ · PT: [éste kafé sábe rrenIál]
49. Solo lo estoy probando para comprobar. — Só estou provando para conferir.
IPA: /ˈsolo lo esˈtoi pɾoˈβando ˈpaɾa kompɾoˈβaɾ/ · PT: [sólo lo estôi probándo pára komprobár]
50. El pastel huele delicioso. — O bolo cheira delicioso.
IPA: /el pasˈtel ˈwele deliˈθjoso/ · PT: [el pastél uéle delithióso]
51. Trabajo cada día. — Eu trabalho todo dia.
IPA: /tɾaˈβaxo ˈkaða ˈdia/ · PT: [trabárro káda día]
52. Estoy trabajando ahora. — Estou trabalhando agora.
IPA: /esˈtoi tɾaβaˈxando aˈoɾa/ · PT: [estôi trabarrándo aóra]
53. Vive en Madrid. — Ela mora em Madri.
IPA: /ˈbiβe en maˈðɾið/ · PT: [bíbe en madríd]
54. Este año vive en el extranjero. — Ela está morando no exterior este ano.
IPA: /ˈeste ˈaɲo ˈbiβe en el ekstɾaŋˈxeɾo/ · PT: [éste ánho bíbe en el ekstranrréro]
Um pouco mais
55. La tienda abre a las nueve. — A loja abre às nove.
IPA: /la ˈtjenda ˈaβɾe a las ˈnweβe/ · PT: [la tiénda ábre a las nuébe]
56. Mira, la tienda está abriendo ahora. — Olha, a loja está abrindo agora.
IPA: /ˈmiɾa la ˈtjenda esˈta aˈβɾjendo aˈoɾa/ · PT: [míra la tiénda está abriéndo aóra]
57. Creo que tienes razón. — Eu acho que você está certo.
IPA: /ˈkɾeo ke ˈtjenes raˈθon/ · PT: [kréo ke tiénes rathón]
58. Estoy pensando en cambiar de trabajo. — Estou pensando em mudar de emprego.
IPA: /esˈtoi penˈsando en kamˈbjaɾ de tɾaˈβaxo/ · PT: [estôi pensándo en kambiár de trabárro]
Perguntas e negações
59. ¿A qué te dedicas? — O que você faz? (profissão)
IPA: /a ke te deˈðikas/ · PT: [a ke te dedíkas]
60. ¿Qué estás haciendo? — O que você está fazendo? (agora)
IPA: /ke esˈtas aˈθjendo/ · PT: [ke estás athiéndo]
61. Normalmente no tomo café. — Eu geralmente não tomo café.
IPA: /noɾˈmalmente no ˈtomo kaˈfe/ · PT: [normalménte no tómo kafé]
62. Hoy no trabajo. — Hoje não trabalho.
IPA: /oi no tɾaˈβaxo/ · PT: [ôi no trabárro]
Conectores e tempos verbais
63. Me quedo en casa porque estoy enfermo. — Estou ficando em casa porque estou doente.
IPA: /me ˈkeðo en ˈkasa ˈpoɾke esˈtoi emˈfeɾmo/ · PT: [me kédo en kása pórke estôi emférmo]
64. Siempre se queja cuando está cansada. — Ela sempre reclama quando está cansada.
IPA: /ˈsjempɾe se ˈkexa ˈkwando esˈta kanˈsaða/ · PT: [siémpre se kérra kuándo está kansáda]
65. El tiempo está enfriando, pero me gusta. — O tempo está esfriando, mas eu gosto.
IPA: /el ˈtjempo esˈta emfɾiˈando ˈpeɾo me ˈɡusta/ · PT: [el tiémpo está emfriándo péro me gústa]
66. Normalmente voy andando, pero hoy cojo el bus. — Eu geralmente vou a pé, mas hoje pego o ônibus.
IPA: /noɾˈmalmente boi anˈdando ˈpeɾo oi ˈkoxo el bus/ · PT: [normalménte bôi andándo péro ôi kórro el bus]
67. Siempre pierde cosas porque es despistado. — Ele está sempre perdendo coisas porque é distraído.
IPA: /ˈsjempɾe ˈpjeɾðe ˈkosas ˈpoɾke es despisˈtaðo/ · PT: [siémpre piérde kósas pórke és despistádo]
As mais ricas
68. Te prometo que te llamo cuando llegue. — Eu prometo que te ligo quando chegar.
IPA: /te pɾoˈmeto ke te ˈʎamo ˈkwando ˈʎeɣe/ · PT: [te prométo ke te lhámo kuándo lhégue]
69. Mañana quedamos con los clientes, así que prepara el informe. — Amanhã encontramos os clientes, então prepare o relatório.
IPA: /maˈɲana keˈðamos kon los ˈkljentes aˈsi ke pɾeˈpaɾa el imˈfoɾme/ · PT: [manhána kedámos kon los kliéntes así ke prepára el imfórme]
70. La economía está cambiando y mucha gente pierde su trabajo. — A economia está mudando e muita gente perde o emprego.
IPA: /la ekonoˈmia esˈta kamˈbjando i ˈmutʃa ˈxente ˈpjeɾðe su tɾaˈβaxo/ · PT: [la ekonomía está kambiándo i mútcha rrénte piérde su trabárro]
71. Me pregunto si podrías ayudarme con esto. — Estou me perguntando se você poderia me ajudar com isso.
IPA: /me pɾeˈɣunto si poˈðɾias aʝuˈðaɾme kon ˈesto/ · PT: [me pregúnto si podrías aiudárme kon ésto]
72. Normalmente cocina ella, pero esta noche cocina su marido. — Ela normalmente cozinha, mas hoje à noite o marido cozinha.
IPA: /noɾˈmalmente koˈθina ˈeʎa ˈpeɾo ˈesta ˈnotʃe koˈθina su maˈɾiðo/ · PT: [normalménte kothína élha péro ésta nótche kothína su marído]
73. Me dicen que te mudas a otra ciudad; ¿cuándo te vas? — Me dizem que você está se mudando para outra cidade; quando você vai?
IPA: /me ˈðiθen ke te ˈmuðas a ˈotɾa θjuˈðað ˈkwando te bas/ · PT: [me díthen ke te múdas a ótra thiudád kuándo te bas]
74. El agua se congela a cero, pero el lago aún no se congela. — A água congela a zero, mas o lago ainda não congela.
IPA: /el ˈaɣwa se konˈxela a ˈθeɾo ˈpeɾo el ˈlaɣo awn no se konˈxela/ · PT: [el água se konrréla a théro péro el lágo áun no se konrréla]
75. Me encanta este libro, aunque normalmente prefiero las películas. — Estou amando este livro, embora eu geralmente prefira filmes.
IPA: /me eŋˈkanta ˈeste ˈliβɾo ˈawŋke noɾˈmalmente pɾeˈfjeɾo las peˈlikulas/ · PT: [me enkánta éste líbro áunke normalménte prefiéro las pelíkulas]
«¿A qué te dedicas?» / «Soy profesor.» — "O que você faz?" / "Sou professor."
IPA: /a ke te deˈðikas · soi pɾofeˈsoɾ/ · PT: [a ke te dedíkas · sôi profesór]
«¿Qué estás haciendo?» / «Estoy cocinando.» — "O que você está fazendo?" / "Estou cozinhando."
IPA: /ke esˈtas aˈθjendo · esˈtoi koθiˈnando/ · PT: [ke estás athiéndo · estôi kothinándo]
«¿Vives aquí?» / «Sí.» — "Você mora aqui?" / "Sim."
IPA: /ˈbiβes aˈki · si/ · PT: [bíbes akí · sí]
«¿Te quedas mucho tiempo?» / «Solo esta semana.» — "Você vai ficar muito tempo?" / "Só esta semana."
IPA: /te ˈkeðas ˈmutʃo ˈtjempo · ˈsolo ˈesta seˈmana/ · PT: [te kédas mútcho tiémpo · sólo ésta semána]
«¿A qué hora empieza?» / «A las ocho.» — "A que horas começa?" / "Às oito."
IPA: /a ke ˈoɾa emˈpjeθa · a las ˈotʃo/ · PT: [a ke óra empiétha · a las ótcho]
«¿Vienes esta noche?» / «Sí, quedo contigo allí.» — "Você vem hoje à noite?" / "Sim, te encontro lá."
IPA: /ˈbjenes ˈesta ˈnotʃe · si ˈkeðo konˈtiɣo aˈʎi/ · PT: [biénes ésta nótche · sí kédo kontígo alhí]
«¿Por qué coges el bus?» / «Mi coche está averiado.» — "Por que você está pegando o ônibus?" / "Meu carro quebrou."
IPA: /poɾ ke ˈkoxes el bus · mi ˈkotʃe esˈta aβeˈɾjaðo/ · PT: [por ké kórres el bus · mi kótche está aberiádo]
«¿Entiendes?» / «Sí.» — "Você entende?" / "Sim."
IPA: /enˈtjendes · si/ · PT: [entiéndes · sí]
«¿Estás escuchando?» / «Sí.» — "Você está ouvindo?" / "Sim."
IPA: /esˈtas eskuˈtʃando · si/ · PT: [estás eskutchándo · sí]
«¿Trabaja aquí?» / «No.» — "Ela trabalha aqui?" / "Não."
IPA: /tɾaˈβaxa aˈki · no/ · PT: [trabárra akí · no]
«¿Está lloviendo?» / «Sí.» — "Está chovendo?" / "Sim."
IPA: /esˈta ʎoˈβjendo · si/ · PT: [está lhobiéndo · sí]
«¿Quieres café?» / «No, estoy tomando té.» — "Você quer café?" / "Não, estou tomando chá."
IPA: /ˈkjeɾes kaˈfe · no esˈtoi toˈmando te/ · PT: [kiéres kafé · no estôi tomándo té]
«¿Qué pasa?» / «Los precios están subiendo.» — "O que está acontecendo?" / "Os preços estão subindo."
IPA: /ke ˈpasa · los ˈpɾeθjos esˈtan suˈβjendo/ · PT: [ke pása · los préthios estão subiéndo]
«¿Por qué está tan cansado?» / «Está trabajando mucho.» — "Por que ele está tão cansado?" / "Está trabalhando muito."
IPA: /poɾ ke esˈta tan kanˈsaðo · esˈta tɾaβaˈxando ˈmutʃo/ · PT: [por ké está tan kansádo · está trabarrándo mútcho]
«¿La conoces?» / «Sí, muy bien.» — "Você a conhece?" / "Sim, muito bem."
IPA: /la koˈnoθes · si mui bjen/ · PT: [la konóthes · sí múi bién]
«¿Lo estás pensando?» / «Sí.» — "Você está pensando nisso?" / "Sim."
IPA: /lo esˈtas penˈsando · si/ · PT: [lo estás pensándo · sí]
«¿Sale pronto el tren?» / «A las nueve en punto.» — "O trem sai logo?" / "Às nove em ponto."
IPA: /ˈsale ˈpɾonto el tɾen · a las ˈnweβe en ˈpunto/ · PT: [sále prónto el trén · a las nuébe en púnto]
«¿Por qué sonríes?» / «¡Me encanta esta canción!» — "Por que você está sorrindo?" / "Estou amando essa música!"
IPA: /poɾ ke sonˈries · me eŋˈkanta ˈesta kanˈθjon/ · PT: [por ké sonríes · me enkánta ésta kanthión]
«¿Siempre llega tarde?» / «¡Sí, siempre!» — "Ela está sempre atrasada?" / "Sim, sempre!"
IPA: /ˈsjempɾe ˈʎeɣa ˈtaɾðe · si ˈsjempɾe/ · PT: [siémpre lhéga tárde · sí siémpre]
«¿Qué estás leyendo?» / «Una novela genial.» — "O que você está lendo?" / "Um ótimo romance."
IPA: /ke esˈtas leˈʝendo · una noˈβela xeˈnjal/ · PT: [ke estás leiéndo · úna nobéla rrenIál]
«¿Le crees?» / «No mucho.» — "Você acredita nele?" / "Nem tanto."
IPA: /le ˈkɾees · no ˈmutʃo/ · PT: [le krées · no mútcho]
«¿Te encuentras mejor?» / «Sí, mucho mejor.» — "Você está se sentindo melhor?" / "Sim, bem melhor."
IPA: /te eŋˈkwentɾas meˈxoɾ · si ˈmutʃo meˈxoɾ/ · PT: [te enkuéntras merrór · sí mútcho merrór]
«¿Qué haces los domingos?» / «Descanso.» — "O que você faz aos domingos?" / "Descanso."
IPA: /ke ˈaθes los doˈmiŋɡos · desˈkanso/ · PT: [ke áthes los domíngos · deskánso]
«¿Se mudan?» / «Sí, el mes que viene.» — "Eles estão se mudando?" / "Sim, no mês que vem."
IPA: /se ˈmuðan · si el mes ke ˈbjene/ · PT: [se múdan · sí el més ke biéne]
«¿Está lista la sopa?» / «La estoy probando.» — "A sopa está pronta?" / "Estou provando."
IPA: /esˈta ˈlista la ˈsopa · la esˈtoi pɾoˈβando/ · PT: [está lísta la sópa · la estôi probándo]
`;

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const items = [];
let i = 0;
let cardCounter = 1;

while (i < lines.length) {
  let line = lines[i];
  if (line.match(/^([a-zA-ZÀ-ÿ0-9-.]*\s*(Verbos de estado|PRESENTE CONTÍNUO|Temporário|Planos futuros|Fatos|Agora mismo|Agora mesmo|Hábito irritante|Gosto|Um poco mais|Um pouco mais|Perguntas e negações|Conectores e tempos verbais|As mais ricas).*)/i) && !line.includes('—')) {
    i++;
    continue;
  }
  
  if (line.includes('—')) {
    let wordPart = line.split('—')[0].trim();
    let transPart = line.split('—')[1].trim();
    wordPart = wordPart.replace(/^\d+\.\s*/, '').trim();
    if (i + 1 < lines.length && lines[i+1].startsWith('IPA:')) {
      let nextLine = lines[i+1];
      let ipaMatch = nextLine.match(/IPA:\s*(.*?)\s*·\s*PT:\s*(.*)/);
      if (ipaMatch) {
        items.push({
          id: `leccion_1_gramatica_c1_s_es_card_${cardCounter++}`,
          word: wordPart,
          translation: transPart,
          pronunciation: ipaMatch[1].trim(),
          portuguesePhonetic: ipaMatch[2].trim()
        });
        i += 2;
        continue;
      }
    }
  }
  i++;
}

fs.writeFileSync('public/decks/leccion_1_gramatica_c1_s_es.json', JSON.stringify(items, null, 2));
console.log('Created leccion_1_gramatica_c1_s_es.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['leccion_1_gramatica_c1_s']) {
  meta['leccion_1_gramatica_c1_s'] = {};
}
meta['leccion_1_gramatica_c1_s'].es = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
