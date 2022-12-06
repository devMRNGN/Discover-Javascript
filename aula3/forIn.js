// for...in -- Cria um loop em cima das propriedades de um objeto

let person = {name: 'jhon', age: 18, weight: 88.6}

for(let property in person){
    console.log(property);
   // metodo para acessar uma propriedade console.log(person["age"]);
   // outro metodo para acessar uma propriedade console.log(person.name);
   console.log(person[property]); // outro metodo
}