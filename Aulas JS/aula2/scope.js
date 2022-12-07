// Function Scope
let subject;

/* 
    Se a variavel subject for passada como argumento para a função a função criará um proprio subject novo e reescreverá ele!
    Fazendo assim com que existem dois subjects diferentes, um dentro da função e um fora dela
    Porém, cuidado, se o subject não for passado como argumento para a função, a função irá sobreescrever a VARIAVEL que está fora do escopo
    fazendo com que só exista uma variavel subject e alterando o nome dela fora do escopo!
*/
function createThink(){
    subject = "study";
    return subject;
}
console.log(subject); // undefined pois a função ainda não foi chamada, e a variavel subject ainda é undefined
console.log(createThink()); // aqui o bloco da função já foi chamado, e passou o valor para a variavel subject ou seja já vale "study"
console.log(subject); // aqui voce esta imprimindo a variavel que agora vale "study", pois a função deu valor a ela