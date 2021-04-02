function generateOmnivoxCSV(marks) {
  return marks.reduce((csv, { studentID, mark }) => `${csv}${studentID},${mark}\n`, '');
}

export default generateOmnivoxCSV;
