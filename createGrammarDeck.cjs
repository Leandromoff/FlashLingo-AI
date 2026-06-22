const fs = require('fs');

const vocabFile = 'public/decks/lesson_1_vocabulary_a1_en.json';
const grammarFile = 'public/decks/lesson_1_grammar_a1_en.json';
const metadataFile = 'data/decksMetadata.json';

// read vocabulary array
const vocabData = JSON.parse(fs.readFileSync(vocabFile, 'utf8'));

// modify ids
const grammarData = vocabData.map(item => ({
  ...item,
  id: item.id.replace('lesson_1_vocabulary_a1_', 'lesson_1_grammar_a1_')
}));

// save grammar file
fs.writeFileSync(grammarFile, JSON.stringify(grammarData, null, 2));

// update metadata
const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
if (!metadata['lesson_1_grammar_a1']) {
  metadata['lesson_1_grammar_a1'] = {};
}
metadata['lesson_1_grammar_a1']['en'] = grammarData.length;
fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

console.log('Successfully created grammar deck and updated metadata');
