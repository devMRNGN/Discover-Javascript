/*
    Function() constructor

    * expressão new
    * criar um novo objeto
    * this keyword
    * Sempre por primeira letra da função construtora como maiuscula por boa pratica
*/

function Person(name){
    this.name = name;
    this.walk = () => {
        return this.name + " Está andando";
    }
}
const joao = new Person("João");
const mayk = new Person("Mayk");
console.log(mayk.walk());
console.log(joao.walk());