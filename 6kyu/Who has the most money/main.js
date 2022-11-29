/*

You're going on a trip with some students and it's up to you to keep track of how much money each Student has. A student is defined like this:

class Student {
  constructor(name, fives, tens, twenties) {
    this.name = name;
    this.fives = fives;
    this.tens = tens;
    this.twenties = twenties;
  }
}
As you can tell, each Student has some fives, tens, and twenties. Your job is to return the name of the student with the most money. If every student has the same amount, then return "all".

Notes:

Each student will have a unique name
There will always be a clear winner: either one person has the most, or everyone has the same amount
If there is only one student, then that student has the most money

*/

// solution

function mostMoney(students) {
  let student = [],
    nom = [5, 10, 20];
  students.map((v) =>
    student.push([
      ...Object.values(v)
        .slice(0, 1)
        .concat(
          Object.values(v)
            .slice(1)
            .reduce((sum, val, ndx) => sum + val * nom[ndx], 0)
        ),
    ])
  );
  let most = Math.max(...student.map((c) => c[1]));
  student = student.filter((c) => c[1] === most);
  return student.length > 1 ? "all" : student[0][0];
}
