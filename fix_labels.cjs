const fs = require('fs');

let text = fs.readFileSync('types.ts', 'utf8');

const replacements = [
  ['Lesson  Começar & Terminar', 'Lesson 31 Começar & Terminar'],
  ['Lesson  Escrever, Pensar & Achar', 'Lesson 35 Escrever, Pensar & Achar'],
  ['Lesson  Ser, Estar', 'Lesson 37 Ser, Estar'],
  ['Lesson  to be | ser, estar (forma negativa)', 'Lesson 39 to be | ser, estar (forma negativa)'],
  ['Lesson  to be | ser, estar (forma interrogativa)', 'Lesson 41 to be | ser, estar (forma interrogativa)'],
  ['Lesson  to make | fazer to give | dar', 'Lesson 43 to make | fazer to give | dar'],
  ['Lesson  to open | abrir to close | fechar', 'Lesson 45 to open | abrir to close | fechar'],
  ['Lesson  to call | chamar, ligar to wait | esperar', 'Lesson 47 to call | chamar, ligar to wait | esperar'],
  ['Lesson  to wear | vestir, usar to change | trocar, mudar', 'Lesson 49 to wear | vestir, usar to change | trocar, mudar'],
  ['Lesson  Dividir, Compartilhar & Alugar', 'Lesson 63 Dividir, Compartilhar & Alugar'],
  ['Lesson  Perder, Encontrar & Achar', 'Lesson 65 Perder, Encontrar & Achar'],
  ['Lesson  Ser, Estar I', 'Lesson 67 Ser, Estar I'],
  ['Lesson  Ser, Estar II', 'Lesson 69 Ser, Estar II'],
  ['Lesson  Ser, Estar III', 'Lesson 71 Ser, Estar III'],
  ['Lesson  Iniciar, Começar & Escolher', 'Lesson 73 Iniciar, Começar & Escolher'],
  ['Lesson  Ouvir & Assistir', 'Lesson 75 Ouvir & Assistir'],
  ['Lesson  Postar & Seguir', 'Lesson 77 Postar & Seguir'],
  ['Lesson  Comer, Beber & Querer', 'Lesson 79 Comer, Beber & Querer'],
  ['Lesson  Ir, Ter & Visitar', 'Lesson 81 Ir, Ter & Visitar'],
  ['Lesson  Viajar, Ficar & Precisar', 'Lesson 83 Viajar, Ficar & Precisar'],
  ['Lesson  Saber, Trabalhar & Morar', 'Lesson 85 Saber, Trabalhar & Morar'],
];

for (const [oldStr, newStr] of replacements) {
  text = text.replace(oldStr, newStr);
}

fs.writeFileSync('types.ts', text);
console.log('Fixed labels.');
