function oddOrEven(num) {
  if (typeof num !== 'number') {
    return 'invalid data';
  }

  if (num % 2 === 0) {
    return 'genap';
  }

  return 'ganjil';
}

console.log(oddOrEven(8));
console.log(oddOrEven('rumput laut'));
