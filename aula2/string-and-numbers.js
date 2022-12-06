// Manipulando Strings e Números

// Transformar String em Número em String

let string = "123";
console.log(Number(string));
let number = 321;
console.log(String(number));

// Contar quantos caracteres tem uma palavra e quantos dígitos tem um número

let word = "Paralelepipedo";
console.log(word.length);
let number2 = 1234;
// console.log(number.length); <<<<<< não funciona pq o tipo number não recebe length

// Mas podemos transforma-lo em string usando a função "String" e assim ver o length dele

console.log(String(number2).length);

// Transformar um número quebrado em 2 casas decimais e trocar ponto por vírgula

let number3 = 454.65454845;
console.log(number3.toFixed(2).replace(".",",")); /* toFixed() é uma função atrelada ao tipo "Number" 
 qnd as funções são atreladas tbm chamamos elas de Metodos. o valor que ele recebe
 é o número de casas decimais que voce quer que mostre.
 O método "replace()" ele vai trocar algo, no caso ele está trocando . por ,
 por conta disso, ele recebe primeiro oq tem que ser trocado e em seguida oq vai ir no lugar.*/

// Transformar letras minúsculas em maiúsculas. Faça o contrário disso também

let word2 = "Programar é muito bacana!";

console.log(word2.toLowerCase().toUpperCase());
// toLowerCase método que transforma tudo em minusculo e toUpperCase transforma tudo para maiusculo

/* Separe um texto que contem espaços, em um novo array onde cada texto é uma posição do array.
Depois disso, transforme o array em um texto e onde eram espaços, coloque _ */

let phrase = "Eu quero viver o Amor!";
let myArray = phrase.split(" "); /* Split() recebe como argumento o que voce quer separar,
no caso estamos separando os itens num array apartir dos espaços, sempre que encontrar um
espaço, ele cortara o pedaço e transformara em um indice do array. */
let phraseWithUnderScore = myArray.join("_"); /* O método join(""); ele vai juntar o array novamente 
transformando em string e recebe como argumento algo que separe cada indice */
console.log(phraseWithUnderScore.toLowerCase());

// Verificar se o texto contém a palavra Amor

let phrase2 = "Eu quero viver!";
console.log(phrase.includes("viver")); 
/* Esse método "includes()" verifica se tem algo dentro de uma string 
o argumento dele é o que voce deseja verificar na string */

// Criar Array com construtor
let myArray2 = new Array('a', 'b', 'c');
console.log(myArray2);

// Contar elementos de um Array

console.log([
    "a",
    {type: "array"},
    function() { return "alo"},
].length);
console.log(["a", "b", "c"].length);
/* Um array pode ter varios tipos de dados diferentes, funções, objetos e qualquer coisa
Mas para verificar quantas coisas tem dentro de um array basta usar length */

// Transformar uma cadeia de caracteres em elementos de um array

let word3 = "manipulação";
console.log(Array.from(word3)); /* Transformando uma string em elementos de um array
Array.from(string) recebe a string que deseja transformar em um array */

let newArray = Array.from(word3);
newArray = newArray.join(" ").toUpperCase();
console.log(newArray);

