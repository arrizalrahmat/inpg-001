const isArithmeticProgression = (numbers) => {
  let difference = 0;
  for (let i = 1; i < numbers.length; i++) {
    if (i === 1) {
      difference = numbers[i] - numbers[i - 1];
    }

    if (difference !== numbers[i] - numbers[i - 1]) {
      return false;
    }
  }
  return true;
};

console.log(isArithmeticProgression([1, 2, 3, 4, 5]));
console.log(isArithmeticProgression([2, 4, 6, 8]));
console.log(isArithmeticProgression([2, 4, 6, 6]));
