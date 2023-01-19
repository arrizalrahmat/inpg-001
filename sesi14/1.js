const compareNumbers = (num1, num2) => {
  //   if (num2 > num1) {
  //     return true;
  //   } else if (num1 > num2) {
  //     return false;
  //   } else {
  //     return -1;
  //   }
  return num2 === num1 ? -1 : num2 > num1;
};

console.log(compareNumbers(4, 9));
console.log(compareNumbers(6, 3));
console.log(compareNumbers(3, 3));
