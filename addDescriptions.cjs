const fs = require('fs');
let code = fs.readFileSync('types.ts', 'utf8');

const descriptions = {
  // English Grammar
  "lesson_1_grammar_a1": "Verb 'To be' (Present)",
  "lesson_2_grammar_a1": "Demonstratives (this, that, etc.)",
  "lesson_3_grammar_a1": "Subject Pronouns",
  "lesson_4_grammar_a1": "Plural Nouns",
  "lesson_5_grammar_a1": "Adjectives (Order & Usage)",
  "lesson_6_grammar_a1": "Present Simple",
  
  // English Vocabulary
  "lesson_1_vocabulary_a1": "Everyday Objects",
  "lesson_2_vocabulary_a1": "Common Actions",
  "lesson_3_vocabulary_a1": "Family Members",
  "lesson_4_vocabulary_a1": "Basic Adjectives",
  "lesson_5_vocabulary_a1": "Daily Routine",
  "lesson_6_vocabulary_a1": "Days, Months & Seasons",

  // Spanish Grammar
  "leccion_1_gramatica_a1_s": "Verbos 'Ser' y 'Estar'",
  "leccion_2_gramatica_a1_s": "Demostrativos (este, ese, etc.)",
  "leccion_3_gramatica_a1_s": "Pronombres Personales",
  "leccion_4_gramatica_a1_s": "Los Plurales",
  "leccion_5_gramatica_a1_s": "El uso de Adjetivos",
  "leccion_6_gramatica_a1_s": "Presente de Indicativo",

  // Spanish Vocabulary
  "leccion_1_vocabulario_a1_s": "Objetos Cotidianos",
  "leccion_2_vocabulario_a1_s": "Acciones Comunes",
  "leccion_3_vocabulario_a1_s": "Miembros de la Familia",
  "leccion_4_vocabulario_a1_s": "Adjetivos Básicos",
  "leccion_5_vocabulario_a1_s": "Rutina Diaria",
  "leccion_6_vocabulario_a1_s": "Días, Meses y Estaciones",
};

for (const [id, desc] of Object.entries(descriptions)) {
    const regex = new RegExp(`({\\s*id: "${id}"[^{}]*)`, 'g');
    code = code.replace(regex, `$1, description: "${desc}"`);
}

fs.writeFileSync('types.ts', code);
console.log('Descriptions added to types.ts');
