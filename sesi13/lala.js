// const axios = require('axios');
//promise
// const fetchData = (url) => {
//   axios.get(url).then((data) => {
//     console.log(data);
//   });
// };

//async await
const fetchData = async (url) => {
  try {
    console.log(12);
    const res = await fetch(url);
    console.log(res);
    console.log(14);
    const data = await res.json();
    console.log(data, 16);
  } catch (error) {
    console.log('error bro');
  }
};

fetchData('https://randomuser.me/apasi/');
