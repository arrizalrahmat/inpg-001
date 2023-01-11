const apiUrl = 'https://pokeapi.co/api/v2/pokemon';
const imageUrl =
  'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png';
let nextUrl = '';
let prevUrl = '';

function displayContent(url) {
  console.log('jalan', nextUrl);
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      nextUrl = data.next;
      prevUrl = data.previous;
      const cardContainer =
        document.getElementById('cardContainer');
      const pokemons = data.results;

      for (let i = 0; i < pokemons.length; i++) {
        const card = document.createElement('div');
        const image = document.createElement('img');
        const namaPokemon = document.createElement('p');
        //   const name = pokemons[i].name;
        //   const url = pokemons[i].url;
        const { name, url } = pokemons[i];
        const pokemonUrl = url.split('/');
        const pokemonNumber =
          pokemonUrl[pokemonUrl.length - 2];

        namaPokemon.innerText = name;
        card.classList.add('card');
        image.classList.add('image');
        image.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonNumber}.png`;
        namaPokemon.classList.add('name');

        card.appendChild(image);
        card.appendChild(namaPokemon);
        cardContainer.appendChild(card);
      }
    });
}

displayContent(apiUrl);

const nextButton = document.getElementById('nextButton');
function handleNext(e) {
  e.preventDefault();
  displayContent(nextUrl);
}
nextButton.addEventListener('click', handleNext);
