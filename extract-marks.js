/* eslint-disable no-console */

import shell from 'shelljs';

import getEvaluationFileList from './lib/getEvaluationFileList.js';
import extractMarksFromFiles from './lib/extractMarksFromFiles.js';

const [,, directoryName] = process.argv;

if (!directoryName) {
  console.error('ERREUR: Répertoire non spécifié (Syntaxe: `extraire-notes.js nomDuRepertoire`)');
  process.exit();
}
if (!shell.test('-d', directoryName)) {
  console.error(`ERREUR: "${directoryName}" n'est pas un répertoire.`);
  process.exit();
}

const evaluationFileList = getEvaluationFileList(directoryName);

console.log(`Found ${evaluationFileList.length} evaluation files:`);
console.log(evaluationFileList);

const marks = extractMarksFromFiles(evaluationFileList);

console.log('Extracted marks:');
console.log(marks);
