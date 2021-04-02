/* eslint-disable no-console */

import shell from 'shelljs';

import generateOmnivoxCSV from './lib/generateOmnivoxCSV.js';
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

console.log(`${evaluationFileList.length} grilles d'évaluation trouvées.`);
console.log(evaluationFileList);

const marks = extractMarksFromFiles(evaluationFileList);

console.log('Notes extraites:');
console.log(marks);

const csvData = generateOmnivoxCSV(marks);

console.log('');
console.log('Données CSV:');
console.log('');

shell.echo(csvData).to('omnivox.csv');
console.log('Données exportées vers omnivox.csv.');
