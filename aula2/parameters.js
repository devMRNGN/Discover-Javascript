// function expression ou function anonymous
const sum = function(number1, number2) /* Parametros ou parameters */{
    let total = number1 + number2; // Se o total não for definido como uma variavel, ele pode ser chamado fora do escopo da função
    return total;
};

sum(5,10); // arguments ou argumentos
let number1 = 20;
let number2 = 10;
sum(number1, number2);

console.log(`O numero 1 é ${number1}`);
console.log(`O numero 2 é ${number2}`);
console.log(`A soma é ${sum(number1, number2)}`);
//ex
console.log(total); // JAMAIS FAZER ISSO, PQ PODE DAR PROBLEMA NO PROGRAMA, não deixe variaveis vazar dos seus escopos