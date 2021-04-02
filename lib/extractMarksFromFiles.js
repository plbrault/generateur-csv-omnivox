import xlsx from 'node-xlsx';

function getDataFromFiles(fileList) {
  return fileList.map((filePath) => xlsx.parse(filePath));
}

function extractMarksFromFiles(fileList) {
  const data = getDataFromFiles(fileList);

  console.log(data);
}

export default extractMarksFromFiles;