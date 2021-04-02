import xlsx from 'node-xlsx';

function getAllDataFromFiles(fileList) {
  return fileList.map((filePath) => xlsx.parse(filePath));
}

function getMarksFromData(allData) {
  return allData.map((studentData) => {
    const summarySheetData = studentData[studentData.length - 1].data;
    const studentName = summarySheetData[0][1];
    const studentID = summarySheetData[1][1];
    const mark = summarySheetData[summarySheetData.length - 1][1];
    return {
      studentID,
      studentName,
      mark,
    };
  });
}

function extractMarksFromFiles(fileList) {
  const allData = getAllDataFromFiles(fileList);
  const marks = getMarksFromData(allData);
  return marks;
}

export default extractMarksFromFiles;