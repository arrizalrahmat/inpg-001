const arrizal = {
  firstName: 'Arrizal',
  lastName: 'Kurniawan',
  hobbies: ['gaming', 'painting', 'shopping'],
  favoriteNumber: 7,
  isGlasses: true,
  prop: 'propesor',
};

// console.log(
//   `${arrizal.firstName} ${2 + 2} ${arrizal.lastName}`
//   //   arrizal.firstName + ' ' + arrizal.lastName
// );

arrizal.favoriteNumber = 8;
// console.log(arrizal);

arrizal.hobbies.push('coding');
// console.log(arrizal);

arrizal.graduatedFrom = 'Hacktiv8';
// console.log(arrizal);

for (let i = 0; i < arrizal.hobbies.length; i++) {
  //   console.log(arrizal.hobbies[i]);
}

// arrizal.hobbies.forEach((el) => console.log(el));
const newArrizal = arrizal.hobbies.map((el) => {
  return el.toUpperCase();
}); // punya return value di setiap iterasinya
// console.log(arrizal.hobbies);
// console.log(newArrizal);

//cara loop object 1 (for in)
for (let prop in arrizal) {
  console.log(prop, ':', arrizal[prop]);
}

// cara loop object 2 (Object.keys)
const keys = Object.keys(arrizal);
// const values = Object.values(arrizal)

for (let i = 0; i < keys.length; i++) {
  console.log(keys[i], ':', arrizal[keys[i]]);
}
