import { GoogleGenAI, Type } from "@google/genai";
import * as fs from "fs";

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
  const result: Record<string, any[]> = {};
  const entries = Object.entries(inputDecks);
  
  for (let i = 0; i < entries.length; i++) {
    const [deckId, cards] = entries[i];
    let success = false;
    let attempts = 0;
    while (!success && attempts < 3) {
      try {
        attempts++;
        const generated = await generateDeckData(deckId, cards);
        result[deckId] = generated;
        console.log(`Successfully generated ${generated.length} cards for ${deckId}.`);
        success = true;
      } catch (err: any) {
        console.warn(`Error generating ${deckId} (attempt ${attempts}):`, err?.message || err);
        if (attempts < 3) {
          console.log("Waiting 32 seconds to clear quota before retrying...");
          await wait(32000);
        } else {
          process.exit(1);
        }
      }
    }
    if (i < entries.length - 1) {
      console.log("Waiting 6.5 seconds for rate limit spacing...");
      await wait(6500);
    }
  }

  fs.writeFileSync("decks_batch1.json", JSON.stringify(result, null, 2));
  console.log("Successfully wrote Batch 1 to decks_batch1.json");
}

run();
