const gcd = (a, b) => {
  const factorA = [];
  const factorB = [];

  for (let i = 1; i < a; i++) {
    if (a % i === 0) {
      factorA.push(i);
    }
  }

  for (let i = 1; i < b; i++) {
    if (b % i === 0) {
      factorB.push(i);
    }
  }

  let fpb = 0;

  for (let i = 0; i < factorA.length; i++) {
    for (let j = 0; j < factorB.length; j++) {
      if (factorA[i] === factorB[j]) {
        fpb = factorA[i];
      }
      //   console.log(factorA[i], factorB[j]);
    }
  }

  return fpb;
};

console.log(gcd(12, 16));
console.log(gcd(50, 40));
console.log(gcd(22, 99));
console.log(gcd(24, 36));
