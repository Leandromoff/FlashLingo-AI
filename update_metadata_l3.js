const fs = require('fs');
const metadataPath = 'data/decksMetadata.json';
let metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf8'));

// Get the counts for English lesson 3
if (!metadata['lesson_3_grammar_a2']) {
  metadata['lesson_3_grammar_a2'] = {
    cardCount: 0,
    en: 0
  };
}

const enL3Path = 'public/decks/lesson_3_grammar_a2_en.json';
if (fs.existsSync(enL3Path)) {
  const deck = JSON.parse(fs.readFileSync(enL3Path, 'utf8'));
  metadata['lesson_3_grammar_a2'].cardCount = deck.length;
  metadata['lesson_3_grammar_a2'].en = deck.length;
}

fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));
