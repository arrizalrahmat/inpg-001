function loadDoc() {
  //   const ajax = new XMLHttpRequest();
  //   ajax.onload = function () {
  //     const payload = JSON.parse(this.response, 'utf-8').data
  //       .products;
  //     displayData(payload);
  //   };
  //   ajax.open(
  //     'GET',
  //     'https://www.blibli.com/backend/search/products?searchTerm=android',
  //     true
  //   );
  //   ajax.send();
  fetch('https://pokeapi.co/api/v2/pokemon/')
    .then((res) => res.json())
    .then((data) => {
      //   console.log(data.data.products);
      const payload = data.results;
      displayData(payload);
      console.log(payload);
    });
}

function displayData(data) {
  const tableBody = document.getElementById('table-body');

  data.forEach((product) => {
    const tr = document.createElement('tr');
    const tdNama = document.createElement('td');
    const tdHarga = document.createElement('td');

    tdNama.innerText = product.name;
    let number = product.url.split('/');
    console.log(number);
    tdHarga.innerText = number[number.length - 2];

    tr.appendChild(tdNama);
    tr.appendChild(tdHarga);
    tableBody.appendChild(tr);
  });
}
