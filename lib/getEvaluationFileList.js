import path from 'path';
import shell from 'shelljs';

function getEvaluationFileList(directoryName) {
  const allFiles = shell.ls('-R', directoryName);
  return allFiles
    .filter((filePath) => filePath.endsWith('.xlsx'))
    .map((filePath) => path.join(directoryName, filePath));
}

export default getEvaluationFileList;
