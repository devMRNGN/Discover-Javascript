// Manipulando Arrays

let techs = ["html", "css", "js"];

// adicionar um item no fim
techs.push("nodejs"); // adiciona no final o item que passar como argumento
// adicionar no começo
techs.unshift("sql"); // adiciona no começo o item que passar como argumetno
// remover do fim
techs.pop(); // remove o ultimo item do array, não necessita de argumento
// remover do começo
techs.shift(); // remove do começo, não necessita argumento tbm
// pegar somente alguns elementos do array
// console.log(techs.slice(1, 3));  o primeiro argumento é de qual indice ele começa a pegar os itens e o segundo é até qual ele irá pegar
// no caso ele ta pegando apartir do indice 1 e indo até o indice 3 (Final do array)
// remover 1 ou mais items em qualquer posição do array
// console.log(techs.splice(1, 1));  funciona como o slice, mas ao inves de pegar os itens, ele retira do array
// encontrar a posição de um elemento no array
let index = techs.indexOf('css'); // qual o index do css?
techs.splice(index, 1); // estou removendo do array o item "css" do array

console.log(techs);