const fs = require('fs');

const fileBuffer = fs.readFileSync('data/staticDecks.ts', 'utf8');

const searchStr = `  {\n    id: 'to_be_interrogative_34',\n    word: "Are the students there?",`;
const startIdx = fileBuffer.indexOf(searchStr);

if (startIdx === -1) {
  console.error("Could not find start index");
  process.exit(1);
}

const endStr = `];\n\n\n\nexport const TO_MAKE_GIVE_DECK`;
let endIdx = fileBuffer.indexOf(endStr, startIdx);

if (endIdx === -1) {
  endIdx = fileBuffer.indexOf(`];\n\n\nexport const TO_MAKE_GIVE_DECK`, startIdx);
}
if (endIdx === -1) {
    endIdx = fileBuffer.indexOf(`];`, startIdx);
    if (endIdx !== -1) {
      endIdx = endIdx; // points to ];
    }
}

if (endIdx === -1) {
  console.error("Could not find end index");
  process.exit(1);
}

const newFileBuffer = fileBuffer.substring(0, startIdx) + fileBuffer.substring(endIdx);
fs.writeFileSync('data/staticDecks.ts', newFileBuffer);

console.log("Deck truncated successfully.");
