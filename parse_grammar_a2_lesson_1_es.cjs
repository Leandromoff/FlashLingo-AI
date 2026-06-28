const fs = require('fs');

const rawText = `¿Te gusta la pizza? — Você gosta de pizza? | IPA: /te ˈɡusta la ˈpitsa/ | PT: tê gústa la pítsa?
¿A qué hora se levanta? — A que horas ele se levanta? | IPA: /a ke ˈoɾa se leˈbanta/ | PT: a kê óra sê lebánta?
¿Cuánto pagaste por eso? — Quanto você pagou por isso? | IPA: /ˈkwanto paˈɣaste poɾ ˈeso/ | PT: cuánto pagáste por êso?
¿Dónde trabaja ella? — Onde ela trabalha? | IPA: /ˈdonde tɾaˈbaxa ˈeʝa/ | PT: dónde trabárra êia?
¿Qué coche tienes? — Que carro você tem? | IPA: /ke ˈkotʃe ˈtjenes/ | PT: kê côtche tiênes?
¿Sharon es de Estados Unidos? — Sharon é dos Estados Unidos? | IPA: /ˈʃeɾon es de esˈtaðos uˈniðos/ | PT: xéron es dê estádos unídos?
¿Cuántos años tienes? — Quantos anos você tem? | IPA: /ˈkwantos ˈaɲos ˈtjenes/ | PT: cuántos ánhos tiênes?
¿Dónde estabas ayer? — Onde você estava ontem? | IPA: /ˈdonde esˈtabas aˈʝeɾ/ | PT: dónde estábas aiér?
¿Cuándo nació ella? — Quando ela nasceu? | IPA: /ˈkwando naˈθjo ˈeʝa/ | PT: cuándo nathió êia?
¿Quién es ese hombre? / Es Peter. — Quem é aquele homem? / É o Peter. | IPA: /ˈkjen es ˈese ˈombɾe | es ˈpiteɾ/ | PT: quién es êse ômbre? / es píter.
¿Dónde vives? / En Londres. — Onde você mora? / Em Londres. | IPA: /ˈdonde ˈbiβes | en ˈlondɾes/ | PT: dónde bíbes? / en lôndres.
¿Cuándo llegó? / Por la tarde. — Quando ele chegou? / À tarde. | IPA: /ˈkwando ʝeˈɣo | poɾ la ˈtaɾde/ | PT: cuándo iegô? / por la tárde.
¿Por qué te fuiste? / Porque estaba cansado. — Por que você foi embora? / Porque estava cansado. | IPA: /poɾ ˈke te ˈfwiste | poɾˈke esˈtaba kanˈsaðo/ | PT: por kê tê fuíste? / porkê estába cansádo.
¿Cómo fuiste? / En coche. — Como você foi? / De carro. | IPA: /ˈkomo ˈfwiste | en ˈkotʃe/ | PT: cómo fuíste? / en côtche.
¿Qué estás haciendo? / Nada. — O que você está fazendo? / Nada. | IPA: /ke esˈtas aˈθjendo | ˈnaða/ | PT: kê estás athiêndo? / náda.
¿Qué coche es mejor? / El rojo. — Qual carro é melhor? / O vermelho. | IPA: /ke ˈkotʃe es meˈxoɾ | el ˈroxo/ | PT: kê côtche es merrór? / el rôrro.
¿De quién es este libro? / Es mío. — De quem é este livro? / É meu. | IPA: /de ˈkjen es ˈeste ˈliβɾo | es ˈmio/ | PT: dê quién es êste líbro? / es mío.
¿A qué hora llamó? / A las siete. — A que horas ele ligou? / Às sete. | IPA: /a ke ˈoɾa ʝaˈmo | a las ˈsjete/ | PT: a kê óra iamô? / a las siête.
¿Qué tipo de coche es? / Un híbrido. — Que tipo de carro é? / Um híbrido. | IPA: /ke ˈtipo de ˈkotʃe es | un ˈiβɾiðo/ | PT: kê típo dê côtche es? / un íbrido.
¿Cuántas camas hay? / Tres. — Quantas camas há? / Três. | IPA: /ˈkwantas ˈkamas aj | tɾes/ | PT: cuántas cámas ai? / três.
¿Cuánto té hay? / Mucho. — Quanto chá há? / Muito. | IPA: /ˈkwanto te aj | ˈmutʃo/ | PT: cuánto tê ai? / mútcho.
¿Cuánto tiempo te quedaste? / Dos semanas. — Quanto tempo você ficou? / Duas semanas. | IPA: /ˈkwanto ˈtjempo te keˈðaste | dos seˈmanas/ | PT: cuánto tiêmpo tê quedáste? / dôs semánas.
¿Cada cuánto vas? / Todos los días. — Com que frequência você vai? / Todos os dias. | IPA: /ˈkaða ˈkwanto bas | ˈtoðos los ˈdias/ | PT: cáda cuánto bas? / tódos los días.
¿A qué distancia está el pueblo? / A una milla. — A que distância fica a cidade? / A uma milha. | IPA: /a ke disˈtanθja esˈta el ˈpweβlo | a una ˈmiʝa/ | PT: a kê distánthia está el puêblo? / a una míia.
¿Cuántos años tiene tu hermana? / Tiene veintisiete. — Quantos anos sua irmã tem? / Ela tem 27. | IPA: /ˈkwantos ˈaɲos ˈtjene tu eɾˈmana | ˈtjene bejntiˈsjete/ | PT: cuántos ánhos tiêne tu ermána? / tiêne bêinti-siête.

¿Dónde está mi pasaporte? — Onde está meu passaporte? | IPA: /ˈdonde esˈta mi pasaˈpoɾte/ | PT: dónde está mi passapórte?
¿A qué hora sale el autobús lanzadera al aeropuerto? — A que horas sai o ônibus de traslado para o aeroporto? | IPA: /a ke ˈoɾa ˈsale el autoˈβus lanθaˈðeɾa al aeɾoˈpweɾto/ | PT: a kê óra sále el autobús lansadéra al aeropuérto?
¿Qué terminal necesitamos? — De qual terminal precisamos? | IPA: /ke teɾmiˈnal neθesiˈtamos/ | PT: kê terminál nethessitámos?
¿A qué distancia está el aeropuerto? — A que distância fica o aeroporto? | IPA: /a ke disˈtanθja esˈta el aeɾoˈpweɾto/ | PT: a kê distánthia está el aeropuérto?
¿Cuánto dura el trayecto? — Quanto tempo dura o trajeto? | IPA: /ˈkwanto ˈðuɾa el tɾaˈʝekto/ | PT: cuánto dúra el traiécto?
¿Quién está facturando las maletas? — Quem está despachando as malas? | IPA: /ˈkjen esˈta faktuˈɾando las maˈletas/ | PT: quién está facturándo las malêtas?
¿Cuántas maletas tienes? — Quantas malas você tem? | IPA: /ˈkwantas maˈletas ˈtjenes/ | PT: cuántas malêtas tiênes?
¿Cuánto pesa esta maleta? — Quanto pesa esta mala? | IPA: /ˈkwanto ˈpesa ˈesta maˈleta/ | PT: cuánto pêsa êsta malêta?
¿Por qué es tan larga la cola? — Por que a fila está tão longa? | IPA: /poɾ ˈke es tan ˈlaɾɣa la ˈkola/ | PT: por kê es tan lárga la côla?
¿Qué tipo de documento necesito? — Que tipo de documento eu preciso? | IPA: /ke ˈtipo de dokuˈmento neθeˈsito/ | PT: kê típo dê documênto nethessíto?
¿Dónde puedo facturar? — Onde posso despachar a bagagem? | IPA: /ˈdonde ˈpweðo faktuˈɾaɾ/ | PT: dónde puêdo facturár?
¿Cuándo empieza el embarque? — Quando começa o embarque? | IPA: /ˈkwando emˈpjeθa el emˈbaɾke/ | PT: cuándo empiêtha el embárque?
¿Qué puerta vamos a usar? — Qual portão vamos usar? | IPA: /ke ˈpweɾta ˈbamos a uˈsaɾ/ | PT: kê puérta bámos a usár?
¿De quién es esta mochila? — De quem é esta mochila? | IPA: /de ˈkjen es ˈesta moˈtʃila/ | PT: dê quién es êsta motchíla?
¿Cada cuánto se retrasan los vuelos? — Com que frequência os voos atrasam? | IPA: /ˈkaða ˈkwanto se reˈtɾasan los ˈbwelos/ | PT: cáda cuánto sê retrássan los buêlos?
¿Qué estás buscando? — O que você está procurando? | IPA: /ke esˈtas busˈkando/ | PT: kê estás buscándo?
¿Quién está sentado junto a la ventanilla? — Quem está sentado perto da janela? | IPA: /ˈkjen esˈta senˈtaðo ˈxunto a la bentaˈniʝa/ | PT: quién está sentádo rrúnto a la bentaníia?
¿Por qué han cambiado nuestra puerta? — Por que mudaram nosso portão? | IPA: /poɾ ˈke an kamˈbjaðo ˈnwestɾa ˈpweɾta/ | PT: por kê an cambiádo nuêstra puérta?
¿Cómo reservaste los billetes? — Como você reservou as passagens? | IPA: /ˈkomo reserˈβaste los biˈʝetes/ | PT: cómo reserbáste los biiêtes?
¿A qué hora aterrizamos? — A que horas aterrissamos? | IPA: /a ke ˈoɾa ateriˈθamos/ | PT: a kê óra aterrithámos?
¿Dónde nos alojamos? — Onde vamos nos hospedar? | IPA: /ˈdonde nos aloˈxamos/ | PT: dónde nos alorrámos?
¿Cuánto cuesta un taxi hasta el centro? — Quanto custa um táxi até o centro? | IPA: /ˈkwanto ˈkwesta un ˈtaksi ˈasta el ˈθentɾo/ | PT: cuánto cuêsta un táksi ásta el thêntro?
¿Cuánto tiempo nos quedamos? — Quanto tiempo vamos ficar? | IPA: /ˈkwanto ˈtjempo nos keˈðamos/ | PT: cuánto tiêmpo nos quedámos?
¿Qué quieres visitar primero? — O que você quer visitar primeiro? | IPA: /ke ˈkjeɾes βisiˈtaɾ pɾiˈmeɾo/ | PT: kê quiêres bissitár primêro?
¿Cuándo debemos volver al aeropuerto? — Quando devemos voltar ao aeroporto? | IPA: /ˈkwando deˈβemos βolˈβeɾ al aeɾoˈpweɾto/ | PT: cuándo debêmos bolbér al aeropuérto?

¿Quién te llamó? — Quem ligou para você? | IPA: /ˈkjen te ʝaˈmo/ | PT: quién tê iamô?
¿Dónde trabajas? — Onde você trabalha? | IPA: /ˈdonde tɾaˈβaxas/ | PT: dónde trabárras?
¿Qué necesitas? — Do que você precisa? | IPA: /ke neθeˈsitas/ | PT: kê nethessítas?
¿Cuándo abre la tienda? — Quando a loja abre? | IPA: /ˈkwando ˈaβɾe la ˈtjenda/ | PT: cuándo ábre la tiênda?
¿Por qué estás enfadado? — Por que você está chateado? | IPA: /poɾ ˈke esˈtas emfaˈðaðo/ | PT: por kê estás enfadádo?
¿Cómo puedo ayudarte? — Como posso ajudar você? | IPA: /ˈkomo ˈpweðo aʝuˈðaɾte/ | PT: cómo puêdo aiudárte?
¿Qué autobús va al centro? — Qual ônibus vai para o centro? | IPA: /ke autoˈβus βa al ˈθentɾo/ | PT: kê autobús ba al thêntro?
¿De quién es el móvil que está sonando? — De quem é o celular que está tocando? | IPA: /de ˈkjen es el ˈmoβil ke esˈta soˈnando/ | PT: dê quién es el móbil kê está sonándo?
¿Cuántos billetes necesitamos? — De quantas passagens precisamos? | IPA: /ˈkwantos biˈʝetes neθesiˈtamos/ | PT: cuántos biiêtes nethessitámos?
¿Cuánto cuesta? — Quanto custa? | IPA: /ˈkwanto ˈkwesta/ | PT: cuánto cuêsta?
¿Dónde pusiste las llaves? — Onde você colocou as chaves? | IPA: /ˈdonde puˈsiste las ˈʝaβes/ | PT: dónde pussíste las iábes?
¿A qué hora se suponía que debías llegar? — A que horas você deveria chegar? | IPA: /a ke ˈoɾa se supoˈnia ke deˈβias ʝeˈɣaɾ/ | PT: a kê óra sê suponía kê debías iegár?
¿Cuánto tiempo llevas viviendo aquí? — Há quanto tempo você mora aqui? | IPA: /ˈkwanto ˈtjempo ˈʝeβas βiˈβjendo aˈki/ | PT: cuánto tiêmpo iêbas bibiêndo aquí?
¿Con qué frecuencia has viajado solo? — Com que frequência você tem viajado sozinho? | IPA: /kon ke fɾeˈkwenθja as βjaˈxaðo ˈsolo/ | PT: con kê frecuênthia as biarrádo sólo?
¿Por qué no me llamaste? — Por que você não me ligou? | IPA: /poɾ ˈke no me ʝaˈmaste/ | PT: por kê no mê iamáste?
¿Con quién hablabas cuando llegué? — Com quem você estava falando quando eu cheguei? | IPA: /kon ˈkjen aˈβlaβas ˈkwando ʝeˈɣe/ | PT: con quién ablábas cuándo ieguê?
¿Qué restaurante elegirías si los dos estuvieran abiertos? — Qual restaurante você escolheria se os dois estivessem abertos? | IPA: /ke restauˈɾante eleɣiˈɾias si los dos estuˈβjeɾan aˈβjeɾtos/ | PT: kê restauránte elegirías si los dôs estubiêran abiêrtos?
¿Cuánto más gastaste porque el hotel estaba lleno? — Quanto a mais você gastou porque o hotel estaba lotado? | IPA: /ˈkwanto mas ɣasˈtaste poɾˈke el oˈtel esˈtaba ˈʝeno/ | PT: cuánto más gastáste porkê el otél estába iêno?
¿Dónde te alojarás cuando llegues a Madrid? — Onde você ficará quando chegar a Madri? | IPA: /ˈdonde te aloxaˈɾas ˈkwando ˈʝeɣes a maˈðɾið/ | PT: dónde tê alorrarás cuándo iêgues a madríd?
¿Qué tipo de trabajo estás buscando ahora? — Que tipo de emprego você está procurando agora? | IPA: /ke ˈtipo de tɾaˈβaxo esˈtas busˈkando aˈoɾa/ | PT: kê típo dê trabárro estás buscándo aóra?
¿Por qué todavía no nos han respondido? — Por que ainda não nos responderam? | IPA: /poɾ ˈke todaˈβia no nos an responˈdiðo/ | PT: por kê todabía no nos an respondído?
¿Qué distancia habías caminado antes de que empezara a llover? — Que distância você tinha caminhado antes de começar a chover? | IPA: /ke disˈtanθja aˈβias kamiˈnaðo ˈantes de ke empeˈθaɾa a ʝoˈβeɾ/ | PT: kê distánthia abías caminádo ántes dê kê empethára a iobér?
¿Cuándo decidirás si aceptas la oferta? — Quando você decidirá se aceita a oferta? | IPA: /ˈkwando deθiðiˈɾas si aˈθeptas la oˈfeɾta/ | PT: cuándo dethidirás si athéptas la oférta?
¿A quién pedirías ayuda si el sistema dejara de funcionar? — A quem você pediria ajuda se o sistema parasse de funcionar? | IPA: /a ˈkjen peðiˈɾias aˈʝuða si el sisˈtema deˈxaɾa de funθjoˈnaɾ/ | PT: a quién pedirías aiúda si el sistêma derrára dê funthionár?
¿Qué habrías hecho si hubieras perdido el último tren? — O que você teria feito se tivesse perdido o último trem? | IPA: /ke aˈβɾias ˈetʃo si uˈβjeɾas peɾˈðiðo el ˈultimo tɾen/ | PT: kê abrías êtcho si ubiêras perdído el último tren?

¿Dónde están mis llaves? / Están sobre la mesa. — Onde estão minhas chaves? / Estão sobre a mesa. | IPA: /ˈdonde esˈtan mis ˈʝaβes | esˈtan ˈsoβɾe la ˈmesa/ | PT: dónde están mis iábes? / están sóbre la mêsa.
¿Quién está en la puerta? / Es el repartidor. — Quem está na porta? / É o entregador. | IPA: /ˈkjen esˈta en la ˈpweɾta | es el repaɾtiˈðoɾ/ | PT: quién está en la puérta? / es el repartidór.
¿A qué hora es la reunión? / A las nueve y media. — A que horas é a reunião? / Às nove e meia. | IPA: /a ke ˈoɾa es la reunˈjon | a las ˈnweβe i ˈmeðja/ | PT: a kê óra es la reunión? / a las nuêbe i mêdia.
¿Qué camisa prefieres? / La azul. — Qual camisa você prefere? / A azul. | IPA: /ke kaˈmisa pɾeˈfjeɾes | la aˈθul/ | PT: kê camíssa prefiêres? / la athúl.
¿De quién es este paraguas? / Es mío. — De quem é este guarda-chuva? / É meu. | IPA: /de ˈkjen es ˈeste paɾaˈɣwas | es ˈmio/ | PT: dê quién es êste paraguás? / es mío.
¿Cuántos huevos necesitamos? / Seis. — De quantos ovos precisamos? / Seis. | IPA: /ˈkwantos ˈweβos neθesiˈtamos | sejs/ | PT: cuántos uêbos nethessitámos? / sêis.
¿Cuánta leche queda? / Aproximadamente medio cartón. — Quanto leite resta? / Aproximadamente meia caixa. | IPA: /ˈkwanta ˈletʃe ˈkeða | apɾoksimaðaˈmente ˈmeðjo kaɾˈton/ | PT: cuánta lêtche quêda? / aproximadamênte mêdio cartón.
¿Por qué llora el bebé? / Porque tiene hambre. — Por que o bebê está chorando? / Porque está com fome. | IPA: /poɾ ˈke ˈʝoɾa el beˈβe | poɾˈke ˈtjene ˈambɾe/ | PT: por kê ióra el bebê? / porkê tiêne ámbre.
¿Con qué frecuencia haces ejercicio? / Tres veces por semana. — Com que frequência você se exercita? / Três vezes por semana. | IPA: /kon ke fɾeˈkwenθja ˈaθes exeɾˈθiθjo | tɾes ˈbeθes poɾ seˈmana/ | PT: con kê frecuênthia áthes errerthíthio? / três bêthes por semána.
¿A qué distancia está la estación? / A diez minutos andando. — A que distância fica a estação? / A dez minutos a pé. | IPA: /a ke disˈtanθja esˈta la estaˈθjon | a ˈdjeθ miˈnutos anˈdando/ | PT: a kê distánthia está la estathión? / a diêth minútos andándo.
¿Dónde aparcaste? / Enfrente del banco. — Onde você estacionou? / Em frente ao banco. | IPA: /ˈdonde apaɾˈkaste | emˈfɾente del ˈbaŋko/ | PT: dónde aparcáste? / enfrênte del bánco.
¿Cuándo vuelves a casa? / Sobre las ocho. — Quando você volta para casa? / Por volta das oito. | IPA: /ˈkwando ˈβwelβes a ˈkasa | ˈsoβɾe las ˈotʃo/ | PT: cuándo buêlbes a cássa? / sóbre las ótcho.
¿Qué tipo de música te gusta? / Sobre todo, el jazz. — Que tipo de música você gosta? / Principalmente jazz. | IPA: /ke ˈtipo de ˈmusika te ˈɣusta | ˈsoβɾe ˈtoðo el ʝas/ | PT: kê típo dê música tê gústa? / sóbre tôdo el iás.
¿Cuánto tiempo llevas esperando? / Unos veinte minutos. — Há quanto tempo você está esperando? / Uns vinte minutos. | IPA: /ˈkwanto ˈtjempo ˈʝeβas espeˈɾando | ˈunos ˈbeinte miˈnutos/ | PT: cuánto tiêmpo iêbas esperándo? / únos bêinte minútos.
¿A quién invitaste? / A unos amigos del trabajo. — Quem você convidou? / Alguns amigos do trabalho. | IPA: /a ˈkjen imbiˈtaste | a ˈunos aˈmiɣos del tɾaˈβaxo/ | PT: a quién imbitáste? / a únos amígos del trabárro.
¿Por qué no funcionaba la impresora? / Se había quedado sin papel. — Por que a impressora não funcionava? / Ela estava sem papel. | IPA: /poɾ ˈke no funθjoˈnaβa la impɾeˈsoɾa | se aˈβia keˈðaðo sim paˈpel/ | PT: por kê no funthionába la impressóra? / sê abía quedádo sin papél.
¿Qué tren debemos coger? / El tren exprés. — Qual trem devemos pegar? / O trem expresso. | IPA: /ke tɾen deˈβemos koˈxeɾ | el tɾen eksˈpɾes/ | PT: kê tren debêmos corrér? / el tren exprés.
¿Cómo aprendiste español? / Hice un curso por internet. — Como você aprendeu espanhol? / Fiz um curso pela internet. | IPA: /ˈkomo apɾenˈdiste espaˈɲol | ˈiθe un ˈkuɾso poɾ inteɾˈnet/ | PT: cómo aprendíste espanhol? / íthe un cúrso por internét.
¿Qué hacías cuando te llamé? / Estaba preparando la cena. — O que você estava fazendo quando liguei? / Eu estava preparando o jantar. | IPA: /ke aˈθias ˈkwando te ʝaˈme | esˈtaba pɾepaˈɾando la ˈθena/ | PT: kê athías cuándo tê iamê? / estába preparándo la thêna.
¿Dónde nos veremos si llueve? / Dentro de la cafetería. — Onde nos encontraremos se chover? / Dentro da cafeteria. | IPA: /ˈdonde nos βeˈɾemos si ˈʝweβe | ˈdentɾo de la kafeteˈɾia/ | PT: dónde nos berêmos si iuêbe? / dêntro dê la cafetería.
¿Cuánto costaría repararlo? / Unos doscientos euros. — Quanto custaria para consertá-lo? / Cerca de duzentos euros. | IPA: /ˈkwanto kostaˈɾia repaˈɾaɾlo | ˈunos dosˈθjentos ˈewɾos/ | PT: cuánto costaría reparárlo? / únos dosthiêntos êuros.
¿Cuándo te diste cuenta de que habías perdido la cartera? / Después de salir de la tienda. — Quando você percebeu que havia perdido a carteira? / Depois de sair da loja. | IPA: /ˈkwando te ˈðiste ˈkwenta de ke aˈβias peɾˈðiðo la kaɾˈteɾa | desˈpwes de saˈliɾ de la ˈtjenda/ | PT: cuándo tê díste cuênta dê kê abías perdído la cartêra? / despuês dê salír dê la tiênda.
¿Quién puede ayudarnos si el servidor se cae? / El equipo de redes. — Quem pode nos ajudar se o servidor ficar indisponível? / A equipe de redes. | IPA: /ˈkjen ˈpweðe aʝuˈðaɾnos si el seɾβiˈðoɾ se ˈkae | el eˈkipo de ˈreðes/ | PT: quién puêde aiudárnos si el serbidór sê cáe? / el equípo dê rêdes.
¿Por qué rechazaría ella la oferta? / Porque el horario es poco flexible. — Por que ela recusaria a oferta? / Porque o horário é pouco flexível. | IPA: /poɾ ˈke retʃaθaˈɾia ˈeʝa la oˈfeɾta | poɾˈke el oˈɾaɾjo es ˈpoko flekˈsiβle/ | PT: por kê retchatharía êia la oférta? / porkê el orário es pôco flexíble.
¿Qué harías si cancelaran tu vuelo? / Llamaría a la compañía aérea y cambiaría la reserva. — O que você faria se cancelassem seu voo? / Eu ligaria para a companhia aérea e alteraria a reserva. | IPA: /ke aˈɾias si kanθeˈlaɾan tu ˈbwelo | ʝamaˈɾia a la kompaˈɲia aˈeɾea i kambiaˈɾia la reˈseɾβa/ | PT: kê arías si cantheláran tu buêlo? / iamaría a la companhía aérea i cambiaría la resérba.
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
                  id: 'leccion_1_gramatica_a2_s_es_card_' + (cardCounter++),
                  word: word,
                  translation: trans,
                  pronunciation: ipa,
                  portuguesePhonetic: pt
              });
         }
    }
}

fs.writeFileSync('public/decks/leccion_1_gramatica_a2_s_es.json', JSON.stringify(items, null, 2));
console.log('Created leccion_1_gramatica_a2_s_es.json with ' + items.length + ' cards');

let meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (!meta['leccion_1_gramatica_a2_s']) {
  meta['leccion_1_gramatica_a2_s'] = {};
}
meta['leccion_1_gramatica_a2_s'].es = items.length;

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));
console.log('Updated metadata');
