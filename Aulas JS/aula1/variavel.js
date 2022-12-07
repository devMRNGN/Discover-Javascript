// var

var clima = "Quente";
clima = "Frio";

console.log(clima);

// let

let clima1 = "Frio";
clima1 = "Quente";

console.log(clima1);

// const (não é alteravel, não consegue substituir seu valor futuramente)

const clima2 = "Quente";

console.log(clima2);

/* linguagem fortemente tipada
let clima:String = true <<< daria erro pq esperava receber um valor string
Porém o JS é uma linguagem fracamente tipada então não precisa declarar na variavel em si o tipo dela, pois uma variavel aceita varios tipos
diferente de C por exemplo que tem um para cada tipo >>>>>>>>>> Char - string >>>>>>>> Int - inteiro >>>>>>> float - real>>>>>>>>>
*/

console.log(typeof clima); // "typeof" verifica o tipo da string