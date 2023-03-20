const prompt = require("prompt-sync")(); //define window object
const totalProgramSpots = 5;  //original total spots: 25 
const studentsInformation = [];
const legalAge = 18;
const olderStudents = [];
const youngerStudents = [];

for (let spot = 0; spot < totalProgramSpots; spot += 1) {
    let student = {};
    student.name = prompt("Enter student name: ");
    student.age = prompt("Enter student age: ");
    studentsInformation.push(student);
    if (student.age >= legalAge) {
        olderStudents.push(student);
    } else {
        youngerStudents.push(student);
    }
}

console.log(`There are ${olderStudents.length} older students: `);
console.log(olderStudents);
console.log(`And ${youngerStudents.length} younger students: `);
console.log(youngerStudents);
