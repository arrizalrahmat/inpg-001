console.log(30 + 27);
var num = 83;
console.log(num);
var name = 'Arrizal';
var domicile = 'Jakarta';
var panjang = 10;
var tinggi = 12;

//selector
var nameElement = document.getElementById('name');
var domicileElement = document.getElementById('domicile');
var container = document.getElementById('container');
var li = document.getElementsByTagName('li');

for (let i = 0; i < li.length; i++) {
  li[i].innerHTML = 'hehehe' + i;
}

//element creator
var paragraph = document.createElement('p');
paragraph.setAttribute('id', 'paragraph');
paragraph.innerText =
  'asdkjfgnfkjgndfjkgmdfjigndfopkgndfkjgmfdkogndfklgndfjkml';

var h1 = document.createElement('h1');
h1.innerText = panjang * tinggi;

//append / tempel nilai ke dalam selctor
nameElement.innerHTML = name;
domicileElement.innerHTML = domicile;
container.innerText = paragraph;
container.appendChild(paragraph);
container.appendChild(h1);
container.innerHTML = '<h1>Halo brother</h1>';
// container.innerText = '<h1>Halo brother</h1>';
// var newParagraph = document.getElementById('paragraph');
// newParagraph.innerHTML = 'Hello Arrizal Rahmat Kurniawan';

for (var i = 1; i <= 10; i++) {
  var h2 = document.createElement('h2');
  h2.innerText = i;
  container.appendChild(h2);
}

// alert('Halo aku dari javascript');
