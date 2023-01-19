const listPrima = (a, b) => {
  let result = [];
  for (let i = a; i <= b; i++) {
    if (i !== 1) {
      for (let j = 2; j < i; j++) {
        if (i % j === 0) {
          break;
        } else {
          if (j === i - 1) {
            result.push(i);
          }
        }
      }
    }
  }
  if (a <= 2) {
    result.unshift(2);
  }
  return result;
};

console.log(listPrima(1, 5));
console.log(listPrima(1, 50));
console.log(listPrima(5, 10));
console.log(listPrima(10, 20));
