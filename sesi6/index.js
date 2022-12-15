// const nama = 'a';
// let umur = 13;
/*
number => 0, NaN
string => ''
boolean => false
undefined, null
*/

// console.log(umur < 18, 'line 10');
// if (umur > 18) {
//   console.log('boleh merokok');
// } else {
//   console.log(umur);
//   console.log('ga boleh merokok');
// }

// let uang = 100000;
// let umur = 3;

// if (uang > 20000) {
//   console.log('beli shampoo');
//   uang -= 20000;
// } else if (uang > 10000) {
//   console.log('beli sabun');
//   uang -= 10000;
// } else if (uang > 30000) {
//   console.log('beli telur');
//   uang -= 30000;
// }

// if (uang > 20000) {
//   console.log('beli shampoo');
//   uang -= 20000;
// }
// if (uang > 10000) {
//   console.log('beli sabun');
//   uang -= 10000;
// }
// if (uang > 80000) {
//   console.log('beli telur');
//   uang -= 30000;
// }

// if (
//   (umur > 18 && uang > 80000) ||
//   (umur > 19 && uang > 100000000 && uang < 30000)
// ) {
//   console.log('boleh beli wine');
// } else if (umur < 18 && uang > 50000) {
//   console.log('bisa beli jus');
// }

// if (umur > 18 || uang > 50000) {
//   console.log('bisa beli rokok');
// }

// const gender = 'kudanil';

// gender === 'male'
//   ? console.log('laki laki')
//   : gender === 'female'
//   ? console.log('perempuan')
//   : console.log('gender invalid');

// if (gender === 'male') {
//   console.log('laki laki');
// } else {
//   if (gender === 'female') {
//     console.log('perempuan');
//   } else {
//     console.log('gender invalid');
//   }
// }

// console.log(label);

// console.log('sisa uangku', uang);

// const password = 'arrizal12sdsdsdsd3';
// const correctPassword = 'arrizal123';

// if (password === correctPassword) {
//   console.log('password benar');
// } else {
//   console.log('password salah');
// }

// const nilai = -20;

// if (nilai < 0) {
//   console.log('invalid');
// } else if (nilai < 40) {
//   console.log('D');
// } else if (nilai <= 60 && nilai >= 40) {
//   console.log('C');
// } else if (nilai <= 80 && nilai > 60) {
//   console.log('B');
// } else if (nilai > 80 && nilai <= 100) {
//   console.log('A');
// } else {
//   console.log('invalid');
// }

// if (nilai < 0 || nilai > 100) {
//   console.log('invalid');
// } else if (nilai >= 80) {
//   console.log('A');
// } else if (nilai >= 60) {
//   console.log('B');
// } else if (nilai >= 40) {
//   console.log('C');
// } else if (nilai > 0) {
//   console.log('D');
// }

let index = 5000000;

//while
// while (index < 100000) {
//   console.log(index);
//   index++;
// }

//do while
// do {
//   console.log(index);
//   index++;
// } while (index < 10);

// for (let i = 10; i >= 0; i--) {
//   console.log('halo semua', i);
//   if (i === 5) {
//     break;
//   }
// }

//buat perulangan untuk print semua angka genap antara 0 - 10
// cara 1
// for (let i = 0; i <= 10; i += 2) {
//   console.log(i);
// }

//cara 2
for (let i = 0; i <= 10; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

// cara 3
for (let i = 0; i <= 10; i++) {
  const hasilBagi = Math.floor(i / 2);
  const hasilKali = hasilBagi * 2;
  if (i === hasilKali) {
    console.log(i, 'ini ganjil');
  }
}
