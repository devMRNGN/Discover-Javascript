
const input = document.querySelector('input');

// onkeydown = qnd a tecla esta descendo -> onkeyup = quando a tecla levantar
/* onkeypress = quando voce pressionar a tecla
input.onkeypress = function() {
    console.log('rodei');
}
*/

const h1 = document.querySelector('h1');

h1.addEventListener('mouseover', print); // função recebe dois argumento 1 = tipo do evento, 2 = o que ele fará ao acontecer o evento

function print() {
    console.log('print');
}

// OUTRO METODO de adicionar evento pelo JS

h1.ondblclick = print;

// se voce  redefinir o evento do h1 novamente, ele ignora o anterior consideradno apenas o posterior
h1.ondblclick = function(){
    console.log('outro momento');
}

// ARGUMENTO EVENT
/* event é interessante pq ele pega o tipo do evento, fazendo com que exista opções de pegar outras coisas
além do evento em si, voce consegue pegar qual foi o "target", o que foi pressionado "key" e o mais importante
pegar o valor do que foi colocado no input no caso pegando o event.currentTarget.value */
input.onkeypress = function(event){
    console.log(event.currentTarget.value);
}