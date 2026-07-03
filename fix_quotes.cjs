const fs = require('fs');
const path = require('path');

const dir = 'public/decks';
const files = fs.readdirSync(dir);

const targetFiles = files.filter(f => 
  (f.match(/^lesson_([1-9]|10|11)_grammar_a1_en\.json$/) || 
   f.match(/^leccion_([1-9]|10|11)_gramatica_a1_s_es\.json$/))
);

targetFiles.forEach(file => {
  const p = path.join(dir, file);
  const data = JSON.parse(fs.readFileSync(p, 'utf8'));
  let modified = false;

  data.forEach(item => {
    if (item.word && typeof item.word === 'string' && item.word.includes('"')) {
      item.word = item.word.replace(/"/g, '');
      modified = true;
    }
    if (item.translation && typeof item.translation === 'string' && item.translation.includes('"')) {
      item.translation = item.translation.replace(/"/g, '');
      modified = true;
    }
    if (item.syllables && Array.isArray(item.syllables)) {
      item.syllables = item.syllables.map(s => {
        if (typeof s === 'string' && s.includes('"')) {
          modified = true;
          return s.replace(/"/g, '');
        }
        return s;
      });
    }
    if (item.exampleSentence && typeof item.exampleSentence === 'string' && item.exampleSentence.includes('"')) {
      item.exampleSentence = item.exampleSentence.replace(/"/g, '');
      modified = true;
    }
    if (item.exampleTranslation && typeof item.exampleTranslation === 'string' && item.exampleTranslation.includes('"')) {
      item.exampleTranslation = item.exampleTranslation.replace(/"/g, '');
      modified = true;
    }
  });

  if (modified) {
    fs.writeFileSync(p, JSON.stringify(data, null, 2));
    console.log(`Updated ${file}`);
  }
});
console.log('Done');
