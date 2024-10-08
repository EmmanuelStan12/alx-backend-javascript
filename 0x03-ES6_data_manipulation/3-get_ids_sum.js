export default function getStudentIdsSum(arr) {
  return arr.reduce((student, acc) => acc + student.id, 0);
}
