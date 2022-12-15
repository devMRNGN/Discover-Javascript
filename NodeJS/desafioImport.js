// Pegando  o express do desafio (no caso função getFlag e trazendo para esse arquivo);


// Parte dois

const getFlag = require('./desafio');

console.log(`Oi ${getFlag('--name')}. ${getFlag('--greeting')}`);