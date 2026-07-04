const fs = require('fs');

const fixFile = (path) => {
  const data = JSON.parse(fs.readFileSync(path, 'utf8'));
  const filtered = data.filter(c => c.word !== 'Palavras interrogativas');
  fs.writeFileSync(path, JSON.stringify(filtered, null, 2));
  return filtered.length;
};

const countEn = fixFile('public/decks/lesson_1_grammar_a2_en.json');
const countEs = fixFile('public/decks/leccion_1_gramatica_a2_s_es.json');

const metaPath = 'data/decksMetadata.json';
const metadata = JSON.parse(fs.readFileSync(metaPath, 'utf8'));

metadata['lesson_1_grammar_a2'] = { en: countEn };
metadata['leccion_1_gramatica_a2_s'] = { es: countEs };

fs.writeFileSync(metaPath, JSON.stringify(metadata, null, 2));

console.log('Fixed files! New counts:', countEn, countEs);
