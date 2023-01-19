const urutHuruf = (str) => {
  let result = '';
  const kamus = '0123456789abcdefghijklmnopqrstuvwxyz';

  for (let i = 0; i < kamus.length; i++) {
    for (let j = 0; j < str.length; j++) {
      if (kamus[i] === str[j]) {
        result += str[j];
      }
      //   console.log(kamus[i], str[j]);
    }
  }

  return result;
};

console.log(urutHuruf('halo'));
console.log(urutHuruf('qwerty'));
console.log(urutHuruf('barabere'));
console.log(urutHuruf('hacktiv8'));
