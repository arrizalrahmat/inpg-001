function removeSpaces(text) {
  //cara manual
  //   let result = '';
  //   for (let i = 0; i < text.length; i++) {
  //     if (text[i] !== ' ') {
  //       result += text[i];
  //     }
  //   }
  //   return result;

  //cara otomatis
  return text.split(' ').join('');
}

function reverseText(text) {
  let result = '';
  for (let i = text.length - 1; i >= 0; i--) {
    result += text[i];
  }

  return result;
}

function updateVowels(text) {
  // cara 1
  let result = '';
  //   for (let i = 0; i < text.length; i++) {
  //     if (text[i] === 'a') {
  //       result += 4;
  //     } else if (text[i] === 'i') {
  //       result += 1;
  //     } else if (text[i] === 'u') {
  //       result += 2;
  //     } else if (text[i] === 'e') {
  //       result += 3;
  //     } else if (text[i] === 'o') {
  //       result += 0;
  //     } else {
  //       result += text[i];
  //     }
  //   }

  // cara 2
  //   let vokal = ['a', 'i', 'u', 'e', 'o', 's'];
  //   let alay = [4, 1, 2, 3, 0, 5];

  //   for (let i = 0; i < text.length; i++) {
  //     for (let j = 0; j < vokal.length; j++) {
  //       if (text[i] === vokal[j]) {
  //         // console.log(
  //         //   text[i],
  //         //   'sama dengan',
  //         //   vokal[j],
  //         //   'berubah menjadi',
  //         //   alay[j]
  //         // );
  //         result += alay[j];
  //         break;
  //       }

  //       if (j === vokal.length - 1) {
  //         // console.log(text[i], 'tidak sama dengan', vokal[j]);
  //         result += text[i];
  //       }
  //     }
  //   }

  // cara 3
  const kamus = {
    a: 4,
    i: 1,
    u: 2,
    e: 3,
    o: 0,
    s: 5,
  };

  for (let i = 0; i < text.length; i++) {
    const key = text[i];
    if (kamus[key]) {
      result += kamus[key];
    } else {
      result += text[i];
    }
  }

  return result;
}

function passwordEncryptor(text) {
  const spaceRemoved = removeSpaces(text);
  const reversed = reverseText(spaceRemoved);
  const encryptedPassword = updateVowels(reversed);
  return encryptedPassword;
}

// const password = 'aku anak indonesia';

// console.log(passwordEncryptor(password));
/*
a jadi 4
i jadi 1
u jadi 2
e jadi 3
o jadi 0
*/
module.exports = { passwordEncryptor, updateVowels };
