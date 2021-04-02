import os from 'os';

function generateOmnivoxCSV(marks) {
  return marks.reduce((csv, { studentID, mark }) => `${csv}${studentID},${mark}${os.EOL}`, '');
}

export default generateOmnivoxCSV;
