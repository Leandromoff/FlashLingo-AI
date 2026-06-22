const fs = require('fs');

const vocabFile = 'public/decks/leccion_1_vocabulario_a1_s_es.json';
const grammarFile = 'public/decks/leccion_1_gramatica_a1_s_es.json';
const metadataFile = 'data/decksMetadata.json';

// read vocabulary array
const vocabData = JSON.parse(fs.readFileSync(vocabFile, 'utf8'));

// modify ids
const grammarData = vocabData.map(item => ({
  ...item,
  id: item.id.replace('leccion_1_vocabulario_a1_s_', 'leccion_1_gramatica_a1_s_')
}));

// save grammar file
fs.writeFileSync(grammarFile, JSON.stringify(grammarData, null, 2));

// update metadata
const metadata = JSON.parse(fs.readFileSync(metadataFile, 'utf8'));
if (!metadata['leccion_1_gramatica_a1_s']) {
  metadata['leccion_1_gramatica_a1_s'] = {};
}
metadata['leccion_1_gramatica_a1_s']['es'] = grammarData.length;
fs.writeFileSync(metadataFile, JSON.stringify(metadata, null, 2));

console.log('Successfully created ES grammar deck and updated metadata');
