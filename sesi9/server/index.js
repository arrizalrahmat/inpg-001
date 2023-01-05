const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/pokemonList', (req, res) => {
  //proses ngambil data ke database
  // data dibentuk jadi yang diinginkan

  //mengembalikan data ke interface
  res.status(200).send(
    JSON.stringify(
      {
        name: 'pikachu',
        HP: 300,
      },
      {
        name: 'Arbok',
        HP: 380,
      },
      null,
      2
    )
  );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
