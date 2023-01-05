//cara tulis function 1
// function printDate() {
//   console.log(new Date());
// }
// printDate();

//cara tulis function 2
// const printDate = function () {
//   console.log(new Date());
// };
// printDate();

//cara tulis function 3
// const printDate = () => {
//   console.log(new Date());
// };
// printDate();

const getToday = () => {
  return new Date();
};

const getDifference = (num1, num2) => {
  return Math.abs(num1 - num2);
};

const difference = getDifference(4, 9);
console.log(difference);

// const today = getToday();
// console.log(today);
