import { Seq } from 'immutable';

function printBestStudents(students) {
  const fStudents = Seq(students)
    .filter((student) => student.score >= 70)
    .map((fstudent) => ({
      ...fstudent,
      firstName: fstudent.firstName[0].toUpperCase() + fstudent.firstName.slice(1),
      lastName: fstudent.lastName[0].toUpperCase() + fstudent.lastName.slice(1),
    })).toObject();

  console.log(fStudents);
}

export default printBestStudents;
