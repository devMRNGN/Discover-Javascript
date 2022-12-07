// Operador condicional (ternário)

// Dependendo da condição, nós receberemos valores diferentes

// Condição então valor 1 se não valor 2
// condition ? value1 : value2

// Exemplos
// Café da manhã top
let bread = true;
let cheese = true;

const niceBreakFast = bread&&cheese ? "Café top" : "Café ruim";
console.log(niceBreakFast);

// Maior de 18

let age = 18;
const canDrive = age>=18 ? 'can drive' : "can't drive";
console.log(canDrive);