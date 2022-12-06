/* 
    Operadores unários
    typeof
    delete
*/

const person = {
    name: "Mayk",
    age: 25,
};
delete person.age; // deleta uma propriedade de um objeto
console.log(person);
console.log(typeof person);