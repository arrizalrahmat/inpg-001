let animals = ['lion', 'fish', 'goat', 'tiger', 'whale'];

// console.log(animals);
// console.log(animals[1]);
animals[2] = 'sheep';
// cara manual untuk nambah data pada array di belakang
animals[animals.length] = 'penguin';
animals[animals.length] = 'shark';
// cara yang sudah tersedia di javascript
animals.push('ant');
// nambah data pada array di depan
animals.unshift('polar bear');
// hapus data pada array pertama
animals.shift();
// animals[100] = 'cat';
animals.pop();

// for (let i = 0; i < animals.length; i++) {
//   console.log(animals[i]);
// }
// console.log(animals, 'sebelum di sort');
// animals = animals.sort((a, b) => (a < b ? -1 : 1));
// console.log(animals, 'sebelum di splice');

// console.log(animals);
// // console.log(animals.join(', ').split(', '));
// const sentence = 'aku seorang pelaut yang rajin menabung';
// console.log(sentence.split(' ').join('_'));

// const deletedAnimals = animals.splice(1, 1, 'dog');

animals = animals.slice(1, 4);
// console.log(animals);

// console.log(deletedAnimals, 'deleted animals');

let listOfStudents = [
  {
    name: 'arrizal',
    grades: [90, 80, 90],
  },
  {
    name: 'markonah',
    grades: [70, 30, 80],
  },
  {
    name: 'cucung sukardi',
    grades: [80, 90, 100],
  },
  {
    name: 'manohara',
    grades: [10, 10, 10],
  },
];
// filter student yang nilai rata2nya > 70 dari data students diatas

function studentFilter(students) {
  const result = [];
  for (let i = 0; i < students.length; i++) {
    const student = students[i];
    const grades = student.grades;

    let total = 0;
    for (let j = 0; j < grades.length; j++) {
      const nilai = grades[j];
      total += nilai;
    }
    const average = total / grades.length;

    if (average > 70) {
      result.push(student);
    }
  }

  return result;

  // cara manual
  //   // cara magic
  //   return students.filter(
  //     (student) =>
  //       student.grades.reduce((a, b) => a + b, 0) /
  //         student.grades.length >
  //       70
  //   );
}

console.log(studentFilter(listOfStudents));

// students = students.filter((val) => {
//   console.log(val.grade);
//   if (val.grade > 70) {
//     return val;
//   }
// });

// students = students.filter((student) => student.grade > 70);

// console.log(students);
