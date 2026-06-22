const fs = require('fs');

const meta = JSON.parse(fs.readFileSync('data/decksMetadata.json', 'utf8'));

if (meta['lesson_3_vocabulary_a1']) {
  meta['lesson_2_vocabulary_a1'] = meta['lesson_3_vocabulary_a1'];
  delete meta['lesson_3_vocabulary_a1'];
}

fs.writeFileSync('data/decksMetadata.json', JSON.stringify(meta, null, 2));

const oldFile = 'public/decks/lesson_3_vocabulary_a1_en.json';
const newFile = 'public/decks/lesson_2_vocabulary_a1_en.json';

if (fs.existsSync(oldFile)) {
  let deck = JSON.parse(fs.readFileSync(oldFile, 'utf8'));
  for (let card of deck) {
    if (card.id) {
       card.id = card.id.replace('lesson_3_vocabulary_a1', 'lesson_2_vocabulary_a1');
    }
  }
  fs.writeFileSync(newFile, JSON.stringify(deck, null, 2));
  fs.unlinkSync(oldFile);
}
