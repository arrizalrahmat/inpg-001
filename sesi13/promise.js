// const janji = new Promise((resolve, reject) => {
//   resolve('halo semuanya');
// });

// janji.then((greeting) => console.log(greeting));

function pesanMakanan(uang) {
  return new Promise((resolve, reject) => {
    if (uang > 100000) {
      resolve('Silahkan masuk');
    } else {
      reject('pulang aja, kamu ga punya duit');
    }
  });
}

pesanMakanan(10)
  .then((data) => console.log(data))
  .catch((err) => console.log(err))
  .finally(() => console.log('selesai'));
