const { passwordEncryptor } = require('./helper');

const password = 'orang orangan sawah';
const encrypted = passwordEncryptor(password);

console.log(encrypted);
