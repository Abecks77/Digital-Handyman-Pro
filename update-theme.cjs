const fs = require('fs');
const path = require('path');

const filePath = path.join(process.cwd(), 'src', 'App.tsx');
let content = fs.readFileSync(filePath, 'utf8');

const mappings = [
  [/99,102,241/g, '59,130,246'], // indigo-500 -> blue-500
  [/168,85,247/g, '6,182,212'],  // purple-500 -> cyan-500
  [/236,72,153/g, '100,116,139'], // pink-500 -> slate-500
  [/129,140,248/g, '96,165,250'], // indigo-400 -> blue-400
  [/indigo-/g, 'blue-'],
  [/purple-/g, 'cyan-'],
  [/pink-/g, 'slate-']
];

mappings.forEach(([regex, replacement]) => {
  content = content.replace(regex, replacement);
});

fs.writeFileSync(filePath, content, 'utf8');
console.log('Theme updated successfully.');
