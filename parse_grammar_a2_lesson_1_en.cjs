const fs = require('fs');

const rawText = `Do you like pizza? — Você gosta de pizza? | IPA: /du jə laɪk ˈpiːtsə/ | PT: dú iâ láik pítsa?
What time does he get up? — A que horas ele se levanta? | IPA: /wʌt taɪm dəz hi ɡɛt ʌp/ | PT: uót táim dâz rí guét âp?
How much did you pay for it? — Quanto você pagou por isso? | IPA: /haʊ mʌtʃ dɪd jə peɪ fɔr ɪt/ | PT: ráu mâtch did iâ pêi fór it?
Where is she working? — Onde ela está trabalhando? | IPA: /wɛr ɪz ʃi ˈwɝkɪŋ/ | PT: uér iz shi uârkin?
What car do you have? — Que carro você tem? | IPA: /wʌt kɑr du jə hæv/ | PT: uót car dú iâ rév?
Is Sharon from the US? — Sharon é dos Estados Unidos? | IPA: /ɪz ˈʃɛrən frəm ðə juˈɛs/ | PT: iz shérân frâm dâ iú-és?
How old are you? — Quantos anos você tem? | IPA: /haʊ oʊld ɑr ju/ | PT: ráu ôuld ar iú?
Where were you yesterday? — Onde você estava ontem? | IPA: /wɛr wɝ ju ˈjɛstərdeɪ/ | PT: uér uâr iú iésterdêi?
When was she born? — Quando ela nasceu? | IPA: /wɛn wəz ʃi bɔrn/ | PT: uén uâz shi bórn?
Who’s that man? / That’s Peter. — Quem é aquele homem? / É o Peter. | IPA: /huz ðæt mæn | ðæts ˈpiːtər/ | PT: rúz dhét mén? / dhéts píter.
Where do you live? / In London. — Onde você mora? / Em Londres. | IPA: /wɛr du jə lɪv | ɪn ˈlʌndən/ | PT: uér dú iâ liv? / in lândan.
When did he arrive? / In the afternoon. — Quando ele chegou? / À tarde. | IPA: /wɛn dɪd hi əˈraɪv | ɪn ði ˌæftərˈnun/ | PT: uén did rí arráiv? / in dhi éfter-nún.
Why did you leave? / Because I was tired. — Por que você foi embora? / Porque eu estava cansado. | IPA: /waɪ dɪd jə liv | bɪˈkʌz aɪ wəz ˈtaɪərd/ | PT: uái did iâ lív? / bicâz ái uâz táierd.
How did you go? / By car. — Como você foi? / De carro. | IPA: /haʊ dɪd jə ɡoʊ | baɪ kɑr/ | PT: ráu did iâ gôu? / bái car.
What are you doing? / Nothing. — O que você está fazendo? / Nada. | IPA: /wʌt ɑr jə ˈduɪŋ | ˈnʌθɪŋ/ | PT: uót ar iâ dúin? / nâthin.
Which car is better? / The red one. — Qual carro é melhor? / O vermelho. | IPA: /wɪtʃ kɑr ɪz ˈbɛtər | ðə rɛd wʌn/ | PT: uítch car iz béter? / dâ réd uân.
Whose book is this? / It’s mine. — De quem é este livro? / É meu. | IPA: /huz bʊk ɪz ðɪs | ɪts maɪn/ | PT: rúz búk iz dhis? / its máin.
What time did he call? / At seven. — A que horas ele ligou? / Às sete. | IPA: /wʌt taɪm dɪd hi kɔl | æt ˈsɛvən/ | PT: uót táim did rí cól? / ét séven.
What kind of car is it? / A hybrid. — Que tipo de carro é? / Um híbrido. | IPA: /wʌt kaɪnd əv kɑr ɪz ɪt | ə ˈhaɪbrɪd/ | PT: uót káind âv car iz it? / â ráibrid.
How many beds are there? / Three. — Quantas camas há? / Três. | IPA: /haʊ ˈmɛni bɛdz ɑr ðɛr | θri/ | PT: ráu méni bédz ar dér? / thrí.
How much tea is there? / A lot. — Quanto chá há? / Muito. | IPA: /haʊ mʌtʃ ti ɪz ðɛr | ə lɑt/ | PT: ráu mâtch tí iz dér? / â lát.
How long did you stay? / Two weeks. — Quanto tempo você ficou? / Duas semanas. | IPA: /haʊ lɔŋ dɪd jə steɪ | tu wiks/ | PT: ráu lóng did iâ stêi? / tú uíks.
How often do you go? / Every day. — Com que frequência você vai? / Todos os dias. | IPA: /haʊ ˈɔfən du jə ɡoʊ | ˈɛvri deɪ/ | PT: ráu ófen dú iâ gôu? / évri dêi.
How far is the town? / One mile away. — A que distância fica a cidade? / A uma milha. | IPA: /haʊ fɑr ɪz ðə taʊn | wʌn maɪl əˈweɪ/ | PT: ráu fár iz dâ táun? / uân máil auêi.
How old is your sister? / She’s twenty-seven. — Quantos anos sua irmã tem? / Ela tem 27. | IPA: /haʊ oʊld ɪz jər ˈsɪstər | ʃiz ˌtwɛnti ˈsɛvən/ | PT: ráu ôuld iz iór síster? / shíz tuênti séven.

Where is my passport? — Onde está meu passaporte? | IPA: /wɛr ɪz maɪ ˈpæspɔrt/ | PT: uér iz mái péspórt?
What time does the airport shuttle leave? — A que horas sai o transporte para o aeroporto? | IPA: /wʌt taɪm dəz ði ˈɛrˌpɔrt ˈʃʌtəl liv/ | PT: uót táim dâz dhi érport shâtol lív?
Which terminal do we need? — De qual terminal precisamos? | IPA: /wɪtʃ ˈtɝmənəl du wi nid/ | PT: uítch târmanâl dú uí níd?
How far is the airport? — A que distância fica o aeroporto? | IPA: /haʊ fɑr ɪz ði ˈɛrˌpɔrt/ | PT: ráu fár iz dhi érport?
How long does the ride take? — Quanto tempo dura o trajeto? | IPA: /haʊ lɔŋ dəz ðə raɪd teɪk/ | PT: ráu lóng dâz dâ ráid têik?
Who is checking the bags? — Quem está despachando as malas? | IPA: /hu ɪz ˈtʃɛkɪŋ ðə bæɡz/ | PT: rú iz tchékin dâ bégz?
How many suitcases do you have? — Quantas malas você tem? | IPA: /haʊ ˈmɛni ˈsutˌkeɪsɪz du jə hæv/ | PT: ráu méni sút-kêissiz dú iâ rév?
How much does this bag weigh? — Quanto pesa esta mala? | IPA: /haʊ mʌtʃ dəz ðɪs bæɡ weɪ/ | PT: ráu mâtch dâz dhis bég uêi?
Why is the line so long? — Por que a fila está tão longa? | IPA: /waɪ ɪz ðə laɪn soʊ lɔŋ/ | PT: uái iz dâ láin sôu lóng?
What kind of ID do I need? — Que tipo de documento de identificação eu preciso? | IPA: /wʌt kaɪnd əv aɪˈdi du aɪ nid/ | PT: uót káind âv ai-dí dú ái níd?
Where can I check in? — Onde posso fazer o check-in? | IPA: /wɛr kæn aɪ tʃɛk ɪn/ | PT: uér kén ái tchék in?
When does boarding start? — Quando começa o embarque? | IPA: /wɛn dəz ˈbɔrdɪŋ stɑrt/ | PT: uén dâz bórdin stárt?
Which gate are we using? — Qual portão vamos usar? | IPA: /wɪtʃ ɡeɪt ɑr wi ˈjuzɪŋ/ | PT: uítch gêit ar uí iúzin?
Whose backpack is this? — De quem é esta mochila? | IPA: /huz ˈbækˌpæk ɪz ðɪs/ | PT: rúz bék-pék iz dhis?
How often do flights get delayed? — Com que frequência os voos atrasam? | IPA: /haʊ ˈɔfən du flaɪts ɡɛt dɪˈleɪd/ | PT: ráu ófen dú fláits guét dilêid?
What are you looking for? — O que você está procurando? | IPA: /wʌt ɑr jə ˈlʊkɪŋ fɔr/ | PT: uót ar iâ lúkin fór?
Who is sitting by the window? — Quem está sentado perto da janela? | IPA: /hu ɪz ˈsɪtɪŋ baɪ ðə ˈwɪndoʊ/ | PT: rú iz sítin bái dâ uíndou?
Why did they change our gate? — Por que eles mudaram nosso portão? | IPA: /waɪ dɪd ðeɪ tʃeɪndʒ aʊər ɡeɪt/ | PT: uái did dhêi tchêindj áuer gêit?
How did you book the tickets? — Como você reservou as passagens? | IPA: /haʊ dɪd jə bʊk ðə ˈtɪkəts/ | PT: ráu did iâ búk dâ tíkets?
What time are we landing? — A que horas vamos aterrissar? | IPA: /wʌt taɪm ɑr wi ˈlændɪŋ/ | PT: uót táim ar uí léndin?
Where are we staying? — Onde vamos nos hospedar? | IPA: /wɛr ɑr wi ˈsteɪɪŋ/ | PT: uér ar uí stêiin?
How much is a taxi to downtown? — Quanto custa um táxi até o centro? | IPA: /haʊ mʌtʃ ɪz ə ˈtæksi tə ˈdaʊnˌtaʊn/ | PT: ráu mâtch iz â téksi tâ dáun-táun?
How long are we staying? — Quanto tempo vamos ficar? | IPA: /haʊ lɔŋ ɑr wi ˈsteɪɪŋ/ | PT: ráu lóng ar uí stêiin?
What do you want to visit first? — O que você quer visitar primeiro? | IPA: /wʌt du jə wɑnt tə ˈvɪzɪt fɝst/ | PT: uót dú iâ uánt tâ vízit fârst?
When should we come back to the airport? — Quando devemos voltar ao aeroporto? | IPA: /wɛn ʃʊd wi kʌm bæk tə ði ˈɛrˌpɔrt/ | PT: uén shud uí câm bék tâ dhi érport?

Who called you? — Quem ligou para você? | IPA: /hu kɔld ju/ | PT: rú cóld iú?
Where do you work? — Onde você trabalha? | IPA: /wɛr du jə wɝk/ | PT: uér dú iâ uârk?
What do you need? — Do que você precisa? | IPA: /wʌt du jə nid/ | PT: uót dú iâ níd?
When does the store open? — Quando a loja abre? | IPA: /wɛn dəz ðə stɔr ˈoʊpən/ | PT: uén dâz dâ stór ôupen?
Why are you upset? — Por que você está chateado? | IPA: /waɪ ɑr jə ʌpˈsɛt/ | PT: uái ar iâ apsét?
How can I help? — Como posso ajudar? | IPA: /haʊ kæn aɪ hɛlp/ | PT: ráu kén ái rélp?
Which bus goes downtown? — Qual ônibus vai para o centro? | IPA: /wɪtʃ bʌs ɡoʊz ˈdaʊnˌtaʊn/ | PT: uítch bâs gôuz dáun-táun?
Whose phone is ringing? — O telefone de quem está tocando? | IPA: /huz foʊn ɪz ˈrɪŋɪŋ/ | PT: rúz fôun iz rínguin?
How many tickets do we need? — De quantas passagens precisamos? | IPA: /haʊ ˈmɛni ˈtɪkəts du wi nid/ | PT: ráu méni tíkets dú uí níd?
How much does it cost? — Quanto custa? | IPA: /haʊ mʌtʃ dəz ɪt kɔst/ | PT: ráu mâtch dâz it cóst?
Where did you put the keys? — Onde você colocou as chaves? | IPA: /wɛr dɪd jə pʊt ðə kiz/ | PT: uér did iâ put dâ kíz?
What time were you supposed to arrive? — A que horas você deveria chegar? | IPA: /wʌt taɪm wɝ jə səˈpoʊzd tə əˈraɪv/ | PT: uót táim uâr iâ sapôuzd tâ arráiv?
How long have you lived here? — Há quanto tempo você mora aqui? | IPA: /haʊ lɔŋ hæv jə lɪvd hɪr/ | PT: ráu lóng rév iâ livd rír?
How often have you traveled alone? — Com que frequência você viajou sozinho? | IPA: /haʊ ˈɔfən hæv jə ˈtrævəld əˈloʊn/ | PT: ráu ófen rév iâ tréveld alôun?
Why didn’t you call me? — Por que você não me ligou? | IPA: /waɪ ˈdɪdənt jə kɔl mi/ | PT: uái dídânt iâ cól mí?
Who were you talking to when I arrived? — Com quem você estava falando quando eu cheguei? | IPA: /hu wɝ jə ˈtɔkɪŋ tu wɛn aɪ əˈraɪvd/ | PT: rú uâr iâ tókin tú uén ái arráivd?
Which restaurant would you choose if both were open? — Qual restaurante você escolheria se os dois estivessem abertos? | IPA: /wɪtʃ ˈrɛstəˌrɑnt wʊd jə tʃuz ɪf boʊθ wɝ ˈoʊpən/ | PT: uítch réstârânt ud iâ tchúz if bôuth uâr ôupen?
How much extra did you spend because the hotel was full? — Quanto a mais você gastou porque o hotel estava lotado? | IPA: /haʊ mʌtʃ ˈɛkstrə dɪd jə spɛnd bɪˈkʌz ðə hoʊˈtɛl wəz fʊl/ | PT: ráu mâtch ékstra did iâ spénd bicâz dâ routél uâz ful?
Where will you stay when you get to Madrid? — Onde você ficará quando chegar a Madri? | IPA: /wɛr wɪl jə steɪ wɛn jə ɡɛt tə məˈdrɪd/ | PT: uér uil iâ stêi uén iâ guét tâ madríd?
What kind of job are you looking for now? — Que tipo de emprego você está procurando agora? | IPA: /wʌt kaɪnd əv dʒɑb ɑr jə ˈlʊkɪŋ fɔr naʊ/ | PT: uót káind âv djób ar iâ lúkin fór náu?
Why haven’t they answered us yet? — Por que eles ainda não nos responderam? | IPA: /waɪ ˈhævənt ðeɪ ˈænsərd ʌs jɛt/ | PT: uái révânt dhêi énserd âs iét?
How far had you walked before it started raining? — Que distância você tinha caminhado antes de começar a chover? | IPA: /haʊ fɑr hæd jə wɔkt bɪˈfɔr ɪt ˈstɑrtəd ˈreɪnɪŋ/ | PT: ráu fár réd iâ uókt bifór it stárted rêinin?
When will you decide whether to accept the offer? — Quando você decidirá se aceitará a oferta? | IPA: /wɛn wɪl jə dɪˈsaɪd ˈwɛðər tə əkˈsɛpt ði ˈɔfər/ | PT: uén uil iâ dissáid uédher tâ aksépt dhi ófer?
Who would you ask for help if the system stopped working? — A quem você pediria ajuda se o sistema parasse de funcionar? | IPA: /hu wʊd jə æsk fɔr hɛlp ɪf ðə ˈsɪstəm stɑpt ˈwɝkɪŋ/ | PT: rú ud iâ ésk fór rélp if dâ sístem stápt uârkin?
What would you have done if you had missed the last train? — O que você teria feito se tivesse perdido o último trem? | IPA: /wʌt wʊd jə hæv dʌn ɪf jə hæd mɪst ðə læst treɪn/ | PT: uót ud iâ rév dân if iâ réd mist dâ lést trêin?

Where are my keys? / They’re on the table. — Onde estão minhas chaves? / Elas estão sobre a mesa. | IPA: /wɛr ɑr maɪ kiz | ðɛr ɑn ðə ˈteɪbəl/ | PT: uér ar mái kíz? / dér ón dâ têibol.
Who’s at the door? / It’s the delivery driver. — Quem está na porta? / É o entregador. | IPA: /huz æt ðə dɔr | ɪts ðə dɪˈlɪvəri ˈdraɪvər/ | PT: rúz ét dâ dór? / its dâ dilíveri dráiver.
What time is the meeting? / At nine thirty. — A que horas é a reunião? / Às nove e meia. | IPA: /wʌt taɪm ɪz ðə ˈmitɪŋ | æt naɪn ˈθɝti/ | PT: uót táim iz dâ mírin? / ét náin thârti.
Which shirt do you prefer? / The blue one. — Qual camisa você prefere? / A azul. | IPA: /wɪtʃ ʃɝt du jə prɪˈfɝ | ðə blu wʌn/ | PT: uítch shârt dú iâ prifâr? / dâ blú uân.
Whose umbrella is this? / It’s mine. — De quem é este guarda-chuva? / É meu. | IPA: /huz ʌmˈbrɛlə ɪz ðɪs | ɪts maɪn/ | PT: rúz ambréla iz dhis? / its máin.
How many eggs do we need? / Six. — De quantos ovos precisamos? / Seis. | IPA: /haʊ ˈmɛni ɛɡz du wi nid | sɪks/ | PT: ráu méni égz dú uí níd? / siks.
How much milk is left? / About half a carton. — Quanto leite resta? / Cerca de meia caixa. | IPA: /haʊ mʌtʃ mɪlk ɪz lɛft | əˈbaʊt hæf ə ˈkɑrtən/ | PT: ráu mâtch milk iz léft? / abáut réf â cártan.
Why is the baby crying? / Because she’s hungry. — Por que o bebê está chorando? / Porque ela está com fome. | IPA: /waɪ ɪz ðə ˈbeɪbi ˈkraɪɪŋ | bɪˈkʌz ʃiz ˈhʌŋɡri/ | PT: uái iz dâ bêibi cráiin? / bicâz shíz rângri.
How often do you exercise? / Three times a week. — Com que frequência você se exercita? / Três vezes por semana. | IPA: /haʊ ˈɔfən du jə ˈɛksərˌsaɪz | θri taɪmz ə wik/ | PT: ráu ófen dú iâ éksersáiz? / thrí táimz â uík.
How far is the station? / Ten minutes on foot. — A que distância fica a estação? / A dez minutos a pé. | IPA: /haʊ fɑr ɪz ðə ˈsteɪʃən | tɛn ˈmɪnəts ɑn fʊt/ | PT: ráu fár iz dâ stêishan? / tén mínits ón fut.
Where did you park? / Across from the bank. — Onde você estacionou? / Em frente ao banco. | IPA: /wɛr dɪd jə pɑrk | əˈkrɔs frəm ðə bæŋk/ | PT: uér did iâ párk? / acróss frâm dâ bénk.
When are you coming home? / Around eight. — Quando você volta para casa? / Por volta das oito. | IPA: /wɛn ɑr jə ˈkʌmɪŋ hoʊm | əˈraʊnd eɪt/ | PT: uén ar iâ câmin rôum? / aráund êit.
What kind of music do you like? / Mostly jazz. — Que tipo de música você gosta? / Principalmente jazz. | IPA: /wʌt kaɪnd əv ˈmjuzɪk du jə laɪk | ˈmoʊstli dʒæz/ | PT: uót káind âv miúzik dú iâ láik? / môustli djéz.
How long have you been waiting? / About twenty minutes. — Há quanto tempo você está esperando? / Cerca de vinte minutos. | IPA: /haʊ lɔŋ hæv jə bɪn ˈweɪtɪŋ | əˈbaʊt ˈtwɛnti ˈmɪnəts/ | PT: ráu lóng rév iâ bin uêitin? / abáut tuênti mínits.
Who did you invite? / A few friends from work. — Quem você convidou? / Alguns amigos do trabalho. | IPA: /hu dɪd jə ɪnˈvaɪt | ə fju frɛndz frəm wɝk/ | PT: rú did iâ inváit? / â fiú fréndz frâm uârk.
Why didn’t the printer work? / It was out of paper. — Por que a impressora não funcionou? / Ela estava sem papel. | IPA: /waɪ ˈdɪdənt ðə ˈprɪntər wɝk | ɪt wəz aʊt əv ˈpeɪpər/ | PT: uái dídânt dâ prínter uârk? / it uâz áut âv pêiper.
Which train should we take? / The express train. — Qual trem devemos pegar? / O trem expresso. | IPA: /wɪtʃ treɪn ʃʊd wi teɪk | ði ɪkˈsprɛs treɪn/ | PT: uítch trêin shud uí têik? / dhi expréss trêin.
How did you learn Spanish? / I took classes online. — Como você aprendeu espanhol? / Fiz aulas pela internet. | IPA: /haʊ dɪd jə lɝn ˈspænɪʃ | aɪ tʊk ˈklæsɪz ɑnˈlaɪn/ | PT: ráu did iâ lârn spénish? / ái tuk cléssiz on-láin.
What were you doing when I called? / I was cooking dinner. — O que você estava fazendo quando liguei? / Eu estava preparando o jantar. | IPA: /wʌt wɝ jə ˈduɪŋ wɛn aɪ kɔld | aɪ wəz ˈkʊkɪŋ ˈdɪnər/ | PT: uót uâr iâ dúin uén ái cóld? / ái uâz kúkin díner.
Where will we meet if it rains? / Inside the café. — Onde nos encontraremos se chover? / Dentro do café. | IPA: /wɛr wɪl wi mit ɪf ɪt reɪnz | ɪnˈsaɪd ðə kæˈfeɪ/ | PT: uér uil uí mít if it rêinz? / insáid dâ caféi.
How much would it cost to repair it? / Around two hundred dollars. — Quanto custaria para consertá-lo? / Cerca de duzentos dólares. | IPA: /haʊ mʌtʃ wʊd ɪt kɔst tə rɪˈpɛr ɪt | əˈraʊnd tu ˈhʌndrəd ˈdɑlərz/ | PT: ráu mâtch ud it cóst tâ ripér it? / aráund tú rândred dálars.
When did you realize you had lost your wallet? / After I left the store. — Quando você percebeu que havia perdido a carteira? / Depois que saí da loja. | IPA: /wɛn dɪd jə ˈriəˌlaɪz jə hæd lɔst jər ˈwɑlət | ˈæftər aɪ lɛft ðə stɔr/ | PT: uén did iâ ríaláiz iâ réd lóst iór uólet? / éfter ái léft dâ stór.
Who can help us if the server goes down? / The network team. — Quem pode nos ajudar se o servidor ficar indisponível? / A equipe de redes. | IPA: /hu kæn hɛlp ʌs ɪf ðə ˈsɝvər ɡoʊz daʊn | ðə ˈnɛtˌwɝk tim/ | PT: rú kén rélp âs if dâ sârver gôuz dáun? / dâ nét-uârk tím.
Why would she turn down the offer? / Because the schedule is inflexible. — Por que ela recusaria a oferta? / Porque o horário é inflexível. | IPA: /waɪ wʊd ʃi tɝn daʊn ði ˈɔfər | bɪˈkʌz ðə ˈskɛdʒul ɪz ɪnˈflɛksəbəl/ | PT: uái ud shi târn dáun dhi ófer? / bicâz dâ skédjul iz infléksibol.
What would you do if your flight were canceled? / I’d call the airline and rebook. — O que você faria se seu voo fosse cancelado? / Eu ligaria para a companhia aérea e faria uma nova reserva. | IPA: /wʌt wʊd jə du ɪf jər flaɪt wɝ ˈkænsəld | aɪd kɔl ði ˈɛrlaɪn ænd ˌriˈbʊk/ | PT: uót ud iâ dú if iór fláit uâr kénseld? / áid cól dhi ér-láin end ribúk.
`;

const lines = rawText.split('\n').map(l => l.trim()).filter(l => l);
const items = [];
let cardCounter = 1;

for (let line of lines) {
    if (!line.includes('—')) continue;
    
    const parts = line.split('|');
    if (parts.length >= 3) {
         const wordTrans = parts[0].trim();
         const ipaPart = parts[1].trim();
         const ptPart = parts[2].trim();

         const wtParts = wordTrans.split('—');
         if (wtParts.length >= 2) {
              const word = wtParts[0].trim();
              const trans = wtParts.slice(1).join('—').trim();
              let ipa = ipaPart.replace(/^IPA:\s*/, '').trim();
              let pt = ptPart.replace(/^PT:\s*/, '').trim();
              
              items.push({
                  id: 'lesson_1_grammar_a2_en_card_' + (cardCounter++),
                  word: word,
                  translation: trans,
                  pronunciation: ipa,
                  portuguesePhonetic: pt
              });
         }
    }
}

fs.writeFileSync('public/decks/lesson_1_grammar_a2_en.json', JSON.stringify(items, null, 2));
console.log('Created lesson_1_grammar_a2_en.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['lesson_1_grammar_a2']) {
  meta['lesson_1_grammar_a2'] = {};
}
meta['lesson_1_grammar_a2'].en = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
