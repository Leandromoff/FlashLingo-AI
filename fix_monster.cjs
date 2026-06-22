const fs = require('fs');

function replaceTerms(filePath, lang) {
  const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  for (let card of data) {
    if (lang === 'en') {
      // English replacements
      card.word = card.word
        .replace(/a monster/g, 'a book')
        .replace(/monsters/g, 'books')
        .replace(/It's a monster/gi, "It's a book");
      
      card.translation = card.translation
        .replace(/um monstro/gi, 'um livro')
        .replace(/monstros/gi, 'livros');

      card.pronunciation = card.pronunciation
        .replace(/ə ˈmɑːnstər/g, 'ə bʊk')
        .replace(/ˈmɑːnstərz/g, 'bʊks');

      card.portuguesePhonetic = card.portuguesePhonetic
        .replace(/a mánster/g, 'a búk')
        .replace(/mánsterz/g, 'búks');
    } else if (lang === 'es') {
      // Spanish replacements
      card.word = card.word
        .replace(/un monstruo/gi, 'un libro')
        .replace(/monstruos/gi, 'libros')
        .replace(/monstruo/gi, 'libro');
      
      card.translation = card.translation
        .replace(/um monstro/gi, 'um livro')
        .replace(/monstros/gi, 'livros');

      card.pronunciation = card.pronunciation
        .replace(/un ˈmonstɾwo/g, 'un ˈliβɾo')
        .replace(/ˈmonstɾwos/g, 'ˈliβɾos')
        .replace(/ˈmonstɾwo/g, 'ˈliβɾo');

      card.portuguesePhonetic = card.portuguesePhonetic
        .replace(/un mónstruo/g, 'un líbro')
        .replace(/mónstruos/g, 'líbros')
        .replace(/mónstruo/g, 'líbro');
    }
  }

  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
}

replaceTerms('public/decks/lesson_2_grammar_a1_en.json', 'en');
replaceTerms('public/decks/leccion_2_gramatica_a1_s_es.json', 'es');

console.log('Fixed monsters in both decks');
