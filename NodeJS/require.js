// Usamos a função require() para usar módulos 


// Módulos nativos do node 

const path = require('path');

console.log(path.basename(__filename));

// Meus módulos, para acessar um módulo seu voce pode usar o require() que receberá como argumento a localização remota da sua maquina
const myModule = require('./exports');

console.log(myModule);