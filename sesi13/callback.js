// // function juicer(choppedFruits) {
// //   console.log(
// //     choppedFruits,
// //     'buahnya sudah di dalam juicer'
// //   );
// //   setTimeout(() => {
// //     const juices = choppedFruits.map((choppedFruit) => {
// //       return `${choppedFruit.split('-')[0]}-juice`;
// //     });
// //     console.log(
// //       `juice ${juices.join(' ')}. siap dihidangkan`
// //     );
// //   }, 1000);
// // }

// // function chopper(fruits, cb) {
// //   //   console.log(fruits, 'di dalam chopper');
// //   console.log('chopping fruits.... please wait....');
// //   setTimeout(() => {
// //     const choppedFruits = fruits.map((fruit) => {
// //       return `${fruit}-chopped`;
// //     });
// //     cb(choppedFruits);
// //   }, 1000);
// // }

// // function makeJuice(fruits) {
// //   chopper(fruits, juicer);
// // }

// // const fruits = ['mango', 'apple', 'papaya'];
// // makeJuice(fruits);

// function calculate(num1, num2, cb) {
//   const result = num1 + num2;

//   //   console.log(result, 'Rp');
//   cb(result, '$');
// }

// function addPrefix(num, prefix) {
//   return `${prefix} ${num}`;
// }

// const result1 = calculate(5000, 12000, (result) => {
//   console.log(`$ ${result}`);
// });

// const result2 = calculate(100000, 3000, (result) => {
//   console.log(`Rp ${result}`);
// });

// // console.log(result1);
function calculate(num1, num2, cb) {
  result = num1 + num2;

  //   console.log();
  if (typeof cb === 'function') {
    //ga masuk ke kondisi ini karena tidak ada callback
    result = cb(num1, num2);
  }

  return result;
}

const a = calculate(10000, 2000, (x, y) => `Rp ${x + y}`);
const b = calculate(3000, 2000, (x, y) => `$ ${x - y}`);
const c = calculate(1000, 2000, function something(x, y) {
  return `$ ${x - y}`;
});

console.log(a);
console.log(b);
console.log(c);
