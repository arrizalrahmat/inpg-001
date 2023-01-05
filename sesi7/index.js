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

// console.log(studentFilter(listOfStudents));

// students = students.filter((val) => {
//   console.log(val.grade);
//   if (val.grade > 70) {
//     return val;
//   }
// });

// students = students.filter((student) => student.grade > 70);

// console.log(students);

// let arr = [20, 1, 90, 100, 130, 265, 300];

// map
// arr = arr.map((el, i) => {
//   if (el > 30) {
//     return el;
//   }
// });
// console.log(arr);

// let newArr = [];
// // forEach
// arr.forEach((el, i) => {
//   // const letter = `aku makan ${el} buah telur`;
//   // console.log(letter);
//   newArr.push(el * 2);
// });

// console.log(arr);

let fruits = [
  'orange',
  'apple',
  'mango',
  'banana',
  'pineapple',
];

const juices = fruits.map((fruit) => {
  return fruit + '-juice';
});

const smoothies = juices
  .map((juice, i, array) => {
    // console.log(juice);
    // cara 1
    // console.log(juice.split('-')[0] + '-smoothies');
    return juice.split('-')[0] + '-smoothies';

    // cara 2
    // console.log(juice.replace(/-juice/, '-smoothies'));
    // return juice + '-smoothies';
  })
  .join(', ');

console.log(smoothies);
// const newFruits = juices.map((juice) => {
//   // console.log(juice.split('-')[0]);
//   return juice.split('-')[0];
// });

// console.log(newFruits);
// console.log(juices);
// fruits.map(function (el) {
//   console.log(el);
// });

// fruits.map((el) => {
//   console.log(el);
// });

// function handler(el) {
//   console.log(el);
// }

// fruits.map(handler);

function sesuatu(param1, param2, param3) {}

sesuatu();
