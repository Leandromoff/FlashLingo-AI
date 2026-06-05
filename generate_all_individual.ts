import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";
import * as path from "path";

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    }
  }
});

interface SentenceInput {
  word: string;
  translation: string;
}

const inputDecks: Record<string, SentenceInput[]> = {
  homework_25: [
    { word: "Hello! I need to buy a present for my brother.", translation: "Olá! Eu preciso comprar um presente para meu irmão." },
    { word: "I usually have to buy many things on weekends. And you?", translation: "Eu geralmente tenho que comprar muitas coisas nos fins de semana. E você?" },
    { word: "Does he need to send the e-mails in the morning?", translation: "Ele precisa enviar os e-mails de manhã?" },
    { word: "She needs to buy a ticket to go to France.", translation: "Ela precisa comprar uma passagem para ir à França." },
    { word: "He likes to buy presents at the mall. Does he like this store?", translation: "Ele gosta de comprar presentes no shopping. Ele gosta desta loja?" },
    { word: "I take my cell phone and my computer to work every day.", translation: "Eu levo meu celular e meu computador para o trabalho todos os dias." },
    { word: "I like to buy souvenirs for my friends.", translation: "Eu gosto de comprar lembrancinhas para os meus amigos." },
    { word: "What does she take to school?", translation: "O que ela leva para a escola?" },
    { word: "She takes a backpack and many books.", translation: "Ela leva uma mochila e muitos livros." },
    { word: "Do you know the price of this medicine?", translation: "Você sabe o preço deste remédio?" },
    { word: "It’s 35 dollars.", translation: "São 35 dólares." },
    { word: "I prefer to eat at the restaurant. It’s good and cheap.", translation: "Eu prefiro comer no restaurante. É bom e barato." },
    { word: "Does she eat Italian food in Germany?", translation: "Ela come comida italiana na Alemanha?" },
    { word: "I need to send an e-mail to my boss now.", translation: "Eu preciso enviar um e-mail para meu chefe agora." },
    { word: "I want to buy a gift for my brother.", translation: "Eu quero comprar um presente para meu irmão." },
    { word: "Does he know how to speak English?", translation: "Ele sabe falar inglês?" },
    { word: "Does she come to the countryside on Saturdays?", translation: "Ela vem para o interior aos sábados?" },
    { word: "She wants to buy a ticket to go to Italy this year.", translation: "Ela quer comprar uma passagem para ir à Itália este ano." }
  ],
  homework_27: [
    { word: "How many places do you want to visit in Spain?", translation: "Quantos lugares você quer visitar na Espanha?" },
    { word: "I visit my cousins and my grandparents on Sundays.", translation: "Eu visito meus primos e meus avós aos domingos." },
    { word: "My aunt prefers to go to the museum. She doesn’t like to go to the park.", translation: "Minha tia prefere ir ao museu. Ela não gosta de ir ao parque." },
    { word: "I love visiting my relatives on my vacation.", translation: "Eu amo visitar meus parentes nas minhas férias." },
    { word: "I like to go to the park near my house on weekends.", translation: "Eu gosto de ir ao parque perto da minha casa nos fins de semana." },
    { word: "How many books do you have on your tablet?", translation: "Quantos livros você tem no seu tablet?" },
    { word: "I need a ticket to go to the museum.", translation: "Eu preciso de um ingresso para ir ao museu." },
    { word: "How much is it?", translation: "Quanto custa?" },
    { word: "They don’t live far from the university.", translation: "Eles não moram longe da universidade." },
    { word: "Does she like to go to the movies during the week?", translation: "Ela gosta de ir ao cinema durante a semana?" },
    { word: "How many places do you want to visit in France?", translation: "Quantos lugares você quer visitar na França?" },
    { word: "I have a mirror in my bedroom.", translation: "Eu tenho um espelho no meu quarto." },
    { word: "I saw a squirrel in the park.", translation: "Eu vi um esquilo no parque." },
    { word: "I like to visit the museum on weekends.", translation: "Eu gosto de visitar o museu nos fins de semana." },
    { word: "My mother works at a clinic.", translation: "Minha mãe trabalha em uma clínica." },
    { word: "I need to send an invitation to my friend.", translation: "Eu preciso enviar um convite para meu amigo." },
    { word: "I visit my relatives on Sundays.", translation: "Eu visito meus parentes aos domingos." }
  ],
  homework_29: [
    { word: "We want to go home by bus and we need to buy two tickets.", translation: "Nós queremos ir para casa de ônibus e precisamos comprar dois bilhetes." },
    { word: "Walk two blocks and take the subway on Melvin Street.", translation: "Ande dois quarteirões e pegue o metrô na rua Melvin." },
    { word: "You need to take the train to go downtown.", translation: "Você precisa pegar o trem para ir ao centro." },
    { word: "I go to school with my cousins by bike.", translation: "Eu vou para a escola com meus primos de bicicleta." },
    { word: "How can I get to the mall, please?", translation: "Como eu faço para chegar ao shopping, por favor?" },
    { word: "Go straight ahead and turn right.", translation: "Siga em frente e vire à direita." },
    { word: "We need to take the subway at 5:30. Meet me at the station.", translation: "Nós precisamos pegar o metrô às 5:30. Me encontre na estação." },
    { word: "He doesn’t go to the park by bike; he goes there by bus.", translation: "Ele não vai ao parque de bicicleta; ele vai lá de ônibus." },
    { word: "My uncle takes me to the office by car.", translation: "Meu tio me leva de carro para o escritório." },
    { word: "Does she know how to drive?", translation: "Ela sabe dirigir?" },
    { word: "Yes, she knows how to drive very well.", translation: "Sim, ela sabe dirigir muito bem." },
    { word: "She doesn’t live downtown. She lives on that avenue.", translation: "Ela não mora no centro da cidade. Ela mora naquela avenida." },
    { word: "Don’t take the subway on that avenue.", translation: "Não pegue o metrô naquela avenida." },
    { word: "Don’t drink coffee at night.", translation: "Não beba café à noite." },
    { word: "Don’t go downtown by car.", translation: "Não vá ao centro de carro." },
    { word: "Don’t go to bed late.", translation: "Não vá para a cama tarde." },
    { word: "Don’t take that bus to go to the museum.", translation: "Não pegue aquele ônibus para ir ao museu." },
    { word: "Don’t buy the tickets before Saturday.", translation: "Não compre os ingressos antes de sábado." },
    { word: "Don’t send that e-mail now.", translation: "Não envie aquele e-mail agora." },
    { word: "Don’t drive the children to school tomorrow.", translation: "Não leve as crianças de carro para a escola amanhã." },
    { word: "Excuse me. How can I get to the museum?", translation: "Com licença. Como posso chegar ao museu?" },
    { word: "Oh, it’s near here.", translation: "Ah, é perto daqui." },
    { word: "Do I need to take the bus?", translation: "Eu preciso pegar o ônibus?" },
    { word: "No, you don’t. Go straight ahead on this street and turn left at the coffee shop.", translation: "Não, você não precisa. Siga em frente nesta rua e vire à esquerda na cafeteria." },
    { word: "OK! And how much is the ticket for the museum?", translation: "Ok! E quanto custa o ingresso para o museu?" },
    { word: "It’s US$30.", translation: "Custa 30 dólares." },
    { word: "Really? It’s expensive, but OK. Thank you very much.", translation: "Sério? É caro, mas tudo bem. Muito obrigado." },
    { word: "You’re welcome.", translation: "De nada." }
  ],
  homework_41: [
    { word: "Are you British or American?", translation: "Vocês são britânicos ou americanos?" },
    { word: "We are American.", translation: "Nós somos americanos." },
    { word: "Is the sales clerk busy now?", translation: "A vendedora está ocupada agora?" },
    { word: "No, she isn’t.", translation: "Não, ela não está." },
    { word: "How old are you?", translation: "Quantos anos você tem?" },
    { word: "I’m 23 years old.", translation: "Eu tenho 23 anos." },
    { word: "Who is she?", translation: "Quem é ela?" },
    { word: "She is my mother. Her name is Kim.", translation: "She is my mother. Her name is Kim." },
    { word: "Who are those children?", translation: "Quem são aquelas crianças?" },
    { word: "They are my brothers. They live with my father.", translation: "Eles são meus irmãos. Eles moram com meu pai." },
    { word: "Are you ready to start the class?", translation: "Vocês estão prontos para começar a aula?" },
    { word: "Yes, we are!", translation: "Sim, nós estamos!" },
    { word: "When is your birthday?", translation: "Quando é seu aniversário?" },
    { word: "My birthday is in February.", translation: "Meu aniversário é em fevereiro." },
    { word: "Is your uncle an engineer?", translation: "Seu tio é engenheiro?" },
    { word: "No, he is a doctor.", translation: "Não, ele é médico." },
    { word: "Is the restaurant good?", translation: "O restaurante é bom?" },
    { word: "Yes, it is very good.", translation: "Sim, é muito bom." },
    { word: "He is Brazilian, but he lives in Germany.", translation: "Ele é brasileiro, mas vive na Alemanha." },
    { word: "Who are these children?", translation: "Quem são estas crianças?" },
    { word: "These children are my students.", translation: "Estas crianças são meus alunos." },
    { word: "How old are they?", translation: "Quantos anos eles têm?" },
    { word: "They are seven years old.", translation: "Eles têm sete anos." },
    { word: "Why are they worried?", translation: "Por que eles estão preocupados?" },
    { word: "They are worried because they have an exam tomorrow.", translation: "Eles estão preocupados porque têm uma prova amanhã." },
    { word: "Who is that student?", translation: "Quem é aquele aluno?" },
    { word: "That student is my friend.", translation: "Aquele aluno é meu amigo." },
    { word: "Who are those people at the store?", translation: "Quem são aquelas pessoas na loja?" },
    { word: "Those people at the store are sales clerks.", translation: "Aquelas pessoas na loja são vendedores." },
    { word: "Are you sick?", translation: "Você está doente?" },
    { word: "No, I’m not sick. I’m sad.", translation: "Não, eu não estou doente. Estou triste." },
    { word: "When is your birthday?", translation: "Quando é seu aniversário?" },
    { word: "My birthday is tomorrow.", translation: "Meu aniversário é amanhã." },
    { word: "How old are you?", translation: "Quantos anos você tem?" },
    { word: "I am 61 years old.", translation: "Eu tenho 61 anos." }
  ],
  homework_43: [
    { word: "I usually give tips to the waiters. And you?", translation: "Eu geralmente dou gorjetas aos garçons. E você?" },
    { word: "My mother wants to make my favorite dessert tonight.", translation: "Minha mãe quer fazer minha sobremesa favorita esta noite." },
    { word: "He doesn’t drink soda. He doesn’t think it is healthy.", translation: "Ele não bebe refrigerante. Ele não acha que é saudável." },
    { word: "I don’t have time to cook during the week. I usually eat fast food.", translation: "Eu não tenho tempo para cozinhar durante a semana. Eu geralmente como comida rápida." },
    { word: "We want to eat pizza with our friends today. We want to go to a pizzeria.", translation: "Nós queremos comer pizza com nossos amigos hoje. Nós queremos ir a uma pizzaria." },
    { word: "They don’t want that dish; they prefer to eat hamburgers.", translation: "Elas não querem aquele prato; elas preferem comer hambúrgueres." },
    { word: "I want to make some coffee. Do you drink coffee?", translation: "Eu quero fazer um pouco de café. Você bebe café?" },
    { word: "What do you like to eat at the movies?", translation: "O que você gosta de comer no cinema?" },
    { word: "I love eating popcorn!", translation: "Eu adoro comer pipoca!" },
    { word: "What do you want for dessert?", translation: "O que você quer de sobremesa?" },
    { word: "I want ice cream for dessert.", translation: "Eu quero sorvete de sobremesa." },
    { word: "He loves giving presents to his family. He loves making cakes, too.", translation: "Ele adora dar presentes para a família dele. Ele adora fazer bolos também." },
    { word: "She wants to eat some of these desserts.", translation: "Ela quer comer algumas destas sobremesas." },
    { word: "I’m hungry. I want some pasta.", translation: "Eu estou com fome. Eu quero um pouco de macarrão." },
    { word: "They are thirsty. They want some water.", translation: "Eles estão com sede. Eles querem um pouco de água." },
    { word: "He has some friends in the U.S.A.", translation: "Ele tem alguns amigos nos Estados Unidos." },
    { word: "I need some milk to make the cake.", translation: "Eu preciso de um pouco de leite para fazer o bolo." },
    { word: "They have some money to go to the mall.", translation: "Eles têm algum dinheiro para ir ao shopping." },
    { word: "We make some food for our birthday.", translation: "Nós fazemos alguma comida para o nosso aniversário." },
    { word: "They want to visit their parents.", translation: "Eles querem visitar os pais deles." },
    { word: "We eat at our restaurant every day.", translation: "Nós comemos no nosso restaurante todos os dias." },
    { word: "They usually make their favorite cake on weekends.", translation: "Eles geralmente fazem o bolo favorito deles nos fins de semana." },
    { word: "He thinks his tea is very hot.", translation: "Ele acha que o chá dele está muito quente." },
    { word: "We want to study with our friend tonight.", translation: "Nós queremos estudar com nosso amigo hoje à noite." },
    { word: "She doesn’t eat popcorn when she watches movies at her house.", translation: "Ela não come pipoca quando assiste a filmes na casa dela." },
    { word: "They are at the mall with their parents.", translation: "Eles estão no shopping com os pais deles." }
  ],
  homework_45: [
    { word: "I need to open this bottle. I want to drink some juice.", translation: "Eu preciso abrir esta garrafa. Eu quero beber um pouco de suco." },
    { word: "The ice cream shop closes at ten o’clock on Saturdays.", translation: "A sorveteria fecha às dez horas aos sábados." },
    { word: "I need a fork and a knife, please.", translation: "Eu preciso de um garfo e uma faca, por favor." },
    { word: "Do you want something to drink?", translation: "Você quer alguma coisa para beber?" },
    { word: "A can of soda, please.", translation: "Uma lata de refrigerante, por favor." },
    { word: "They want to have a snack now.", translation: "Eles querem fazer um lanche agora." },
    { word: "I want to have a milkshake at the snack bar.", translation: "Eu quero tomar um milk-shake na lanchonete." },
    { word: "It opens at eight.", translation: "Ela abre às oito." },
    { word: "Where is the ice cream shop?", translation: "Onde é a sorveteria?" },
    { word: "It’s near here.", translation: "É perto daqui." },
    { word: "What time does the Italian restaurant open?", translation: "A que horas o restaurante italiano abre?" },
    { word: "It opens at 7:00 p.m.", translation: "Abre às 7:00 da noite." },
    { word: "Do you need anything?", translation: "Vocês precisam de alguma coisa?" },
    { word: "Yes, we need napkins, please.", translation: "Sim, nós precisamos de guardanapos, por favor." },
    { word: "I’m hungry. Do you want to order anything?", translation: "Eu estou com fome. Você quer pedir alguma coisa?" },
    { word: "I need to rest to feel better.", translation: "Eu preciso descansar para me sentir melhor." },
    { word: "I want to go out tonight.", translation: "Eu quero sair esta noite." },
    { word: "I study English every other day.", translation: "Eu estudo inglês dia sim, dia não." },
    { word: "I’m sure she is at home.", translation: "Eu tenho certeza de que ela está em casa." },
    { word: "I want to order a sandwich.", translation: "Eu quero pedir um sanduíche." },
    { word: "We want to have dessert after lunch.", translation: "Nós queremos comer sobremesa depois do almoço." },
    { word: "Do you need anything?", translation: "Você precisa de alguma coisa?" },
    { word: "I want something to drink.", translation: "Eu quero alguma coisa para beber." },
    { word: "Do you have anything to study today?", translation: "Você tem alguma coisa para estudar hoje?" },
    { word: "We don’t want anything to drink.", translation: "Nós não queremos nada para beber." },
    { word: "You want to give something to your mother on her birthday.", translation: "Você quer dar alguma coisa para sua mãe no aniversário dela." },
    { word: "Do they need anything to open that bottle?", translation: "Eles precisam de alguma coisa para abrir aquela garrafa?" },
    { word: "I don’t want to eat anything different this weekend.", translation: "Eu não quero comer nada diferente neste fim de semana." },
    { word: "I don’t think she needs anything.", translation: "Eu não acho que ela precise de alguma coisa." },
    { word: "Do you want to make anything delicious for the children?", translation: "Você quer fazer alguma coisa deliciosa para as crianças?" },
    { word: "You don’t have to read anything before the exam.", translation: "Você não precisa ler nada antes da prova." }
  ],
  homework_47: [
    { word: "I need to call my husband. I’m in a hurry.", translation: "Eu preciso ligar para o meu marido. Eu estou com pressa." },
    { word: "Does he want to wait for his doctor?", translation: "Ele quer esperar pelo médico dele?" },
    { word: "Why are you always in a hurry?", translation: "Por que você está sempre com pressa?" },
    { word: "Because I’m usually late.", translation: "Porque eu geralmente estou atrasado." },
    { word: "Is she vegetarian?", translation: "Ela é vegetariana?" },
    { word: "No, I think she is vegan.", translation: "Não, eu acho que ela é vegana." },
    { word: "How often do you eat fast food?", translation: "Com que frequência você come comida rápida?" },
    { word: "Wait a little. I need to call my father.", translation: "Espere um pouco. Eu preciso telefonar para meu pai." },
    { word: "Hurry up! Our boss doesn’t like to wait.", translation: "Apressem-se! O nosso chefe não gosta de esperar." },
    { word: "I often go to that bar. My classmates meet me there sometimes.", translation: "Eu vou frequentemente àquele bar. Meus colegas de classe me encontram lá às vezes." },
    { word: "Does anybody study with you at home?", translation: "Alguém estuda com você em casa?" },
    { word: "No, I study alone.", translation: "Não, eu estudo sozinho." },
    { word: "I don’t like this sofa because it isn’t comfortable.", translation: "Eu não gosto deste sofá porque ele não é confortável." },
    { word: "How often do you eat vegetarian food?", translation: "Com que frequência você come comida vegetariana?" },
    { word: "The dessert is almost ready.", translation: "A sobremesa está quase pronta." },
    { word: "Does he want to order more pizzas?", translation: "Ele quer pedir mais pizzas?" },
    { word: "I’m in a hurry, so I need to go now.", translation: "Estou com pressa, então preciso ir agora." },
    { word: "What time does the bar open?", translation: "A que horas o bar abre?" },
    { word: "Let’s go to that vegan restaurant tonight.", translation: "Vamos àquele restaurante vegano hoje à noite." },
    { word: "How often does he cook for his family?", translation: "Com que frequência ele cozinha para a família dele?" },
    { word: "He is often on time for his appointments.", translation: "Ele frequentemente chega no horário para os compromissos dele." },
    { word: "I’m a vegan, so I don’t eat beef.", translation: "Eu sou vegano, então não como carne bovina." },
    { word: "I don’t know anybody in this coffee shop.", translation: "Eu não conheço ninguém nesta cafeteria." },
    { word: "How often do you come to this snack bar?", translation: "Com que frequência você vem a esta lanchonete?" },
    { word: "Why are you in a hurry?", translation: "Por que você está com pressa?" },
    { word: "Somebody wants to speak with you at the office.", translation: "Alguém quer falar com você no escritório." },
    { word: "I need to wait for my co-worker.", translation: "Eu preciso esperar pelo meu colega de trabalho." }
  ],
  homework_49: [
    { word: "Do you have to wear a suit to work every day?", translation: "Você tem que usar um terno para o trabalho todos os dias?" },
    { word: "I want to try on the green T-shirt, please.", translation: "Eu quero provar a camiseta verde, por favor." },
    { word: "She wants to change clothes. She doesn’t want to wear that jacket.", translation: "Ela quer trocar de roupa. Ela não quer usar aquela jaqueta." },
    { word: "What size do you wear?", translation: "Que tamanho você usa?" },
    { word: "I wear medium.", translation: "Eu uso médio." },
    { word: "I am wearing a red skirt and a white shirt.", translation: "Eu estou usando uma saia vermelha e uma camisa branca." },
    { word: "She is trying on the yellow dress.", translation: "Ela está provando o vestido amarelo." },
    { word: "We want to buy new clothes. I need a new pair of jeans and some T-shirts.", translation: "Nós queremos comprar roupas novas. Eu preciso de uma calça jeans nova e de algumas camisetas." },
    { word: "I need to buy a present for my father. I want to buy a watch.", translation: "Eu preciso comprar um presente para meu pai. Eu quero comprar um relógio." },
    { word: "I have to go to the mall this afternoon. Do you need anything?", translation: "Eu tenho que ir ao shopping hoje à tarde. Você precisa de alguma coisa?" },
    { word: "We are here waiting for you. Hurry up!", translation: "Nós estamos aqui esperando por você. Apresse-se!" },
    { word: "She usually wears her favorite pair of sneakers.", translation: "Ela geralmente usa seu par de tênis favorito." },
    { word: "They are at the mall now. They are watching a funny movie.", translation: "Eles estão no shopping agora. Eles estão assistindo a um filme engraçado." },
    { word: "Taylor is changing his clothes to go out with his friends now.", translation: "Taylor está trocando de roupa para sair com os amigos dele agora." },
    { word: "Look! He is wearing a beautiful new watch.", translation: "Olhe! Ele está usando um lindo relógio novo." },
    { word: "They are waiting for me at the restaurant. I’m late.", translation: "Eles estão esperando por mim no restaurante. Estou atrasado." },
    { word: "She makes delicious cakes for her children every week.", translation: "Ela faz bolos deliciosos para os filhos dela toda semana." },
    { word: "I am trying the blue shorts on now.", translation: "Eu estou provando o shorts azul agora." }
  ]
};

async function generateDeckData(deckId: string, cards: SentenceInput[]): Promise<any[]> {
  const prompt = `You are an expert English teacher. I will give you a list of English sentences/phrases and their Portuguese translations.
For each card, generate a complete JSON object with the following fields:

1. id: "${deckId}_\${index}" where index is 1-based sequential number.
2. word: The exactly given English text.
3. translation: The exactly given Portuguese text.
4. pronunciation: The standard American English IPA pronunciation of the English word/sentence/phrase, enclosed in slashes (e.g. "/həˈloʊ/"). Keep it standard, natural, and helpful.
5. portuguesePhonetic: A friendly, conversational Brazilian Portuguese-friendly phonetic representation of the English sentence, so a Brazilian beginner can read it out loud naturally (e.g. for "I like to buy" -> "ai láik tchu bái"). Use phonetic accentuation correctly depending on emphasis.
6. syllables: An array of strings representing the syllables of the sentence.
   CRITICAL SYLLABLE RULE:
   - For a single word (e.g. "chocolate"), split it into syllables: ["choc", "o", "late"]
   - For multi-word phrases or sentences (e.g. "I love cooking eggs"), you must split each word into its syllables, but ALL words (except the very first word in the sentence/phrase) MUST start with a leading space in their first syllable!
   - Example word syllable splits:
     "Hello" -> ["Hel", "lo"]
     "brother" -> ["broth", "er"]
   - Example sentence: "I love cooking eggs." -> ["I", " love", " cook", "ing", " eggs."]
   - Observe that " love", " cook", and " eggs." start with a space, but "ing" does not because it's the second syllable of the word "cooking".
   - Spaces before punctuation are not needed, but a space between words is represented by a leading space on the first syllable of the next word.
7. exampleSentence: Equal to "word"
8. exampleTranslation: Equal to "translation"

IMPORTANT: You MUST return a JSON array containing EXACTLY the same number of cards (${cards.length}), in the exact same sequence as provided.

Input:
${JSON.stringify(cards, null, 2)}
`;

  console.log(`Generating deck ${deckId}...`);
  const response = await ai.models.generateContent({
    model: "gemini-3.5-flash",
    contents: prompt,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.ARRAY,
        items: {
          type: Type.OBJECT,
          properties: {
            id: { type: Type.STRING },
            word: { type: Type.STRING },
            translation: { type: Type.STRING },
            pronunciation: { type: Type.STRING },
            portuguesePhonetic: { type: Type.STRING },
            syllables: {
              type: Type.ARRAY,
              items: { type: Type.STRING }
            },
            exampleSentence: { type: Type.STRING },
            exampleTranslation: { type: Type.STRING },
          },
          required: ["id", "word", "translation", "pronunciation", "portuguesePhonetic", "syllables", "exampleSentence", "exampleTranslation"]
        }
      }
    }
  });

  const text = response.text;
  if (!text) {
    throw new Error(`Empty response from Gemini for ${deckId}`);
  }
  return JSON.parse(text);
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

async function run() {
  const entries = Object.entries(inputDecks);
  const dataDir = path.join(process.cwd(), "data");
  
  console.log("Starting reliable individual card generation to disk...");
  for (let i = 0; i < entries.length; i++) {
    const [deckId, cards] = entries[i];
    const targetFile = path.join(dataDir, `${deckId}.json`);
    
    // Skip if already successfully written
    if (fs.existsSync(targetFile)) {
      console.log(`Skipping ${deckId} as ${deckId}.json already exists.`);
      continue;
    }

    let success = false;
    let attempts = 0;
    while (!success && attempts < 5) {
      try {
        attempts++;
        const generated = await generateDeckData(deckId, cards);
        fs.writeFileSync(targetFile, JSON.stringify(generated, null, 2));
        console.log(`Successfully generated and wrote ${generated.length} cards to ${deckId}.json`);
        success = true;
      } catch (err: any) {
        console.warn(`Error generating ${deckId} (attempt ${attempts}):`, err?.message || err);
        if (attempts < 5) {
          // If 429, wait 35 seconds. Otherwise wait 8 seconds.
          const delayTime = err?.status === 429 ? 35000 : 8000;
          console.log(`Waiting ${delayTime / 1000} seconds before retrying...`);
          await wait(delayTime);
        } else {
          console.error(`Failed to generate ${deckId} after 5 attempts.`);
          process.exit(1);
        }
      }
    }

    // Delay between normal requests
    if (i < entries.length - 1 && success) {
      console.log("Waiting 6.5 seconds style-spacing before next deck...");
      await wait(6500);
    }
  }

  console.log("All requested 8 homework decks generation process initiated/completed successfully!");
}

run();
