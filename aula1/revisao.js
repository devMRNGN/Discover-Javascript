// Object {} <<<<<<<<<<< >>>>>>>>>> Array [] <<<<<<<<<<<<

const person = {
    name: 'João',
    age: 20,
    wight: 1.88,
    isAdmin: true
};

// interpolar valores especificos de um objeto
console.log(`${person.name} tem ${person.age} anos`);

// Arrays

const animals = [
    'Lion',
    'Monkeys',
    'Cat',
    {
        name: 'dog',
        age: 5
    }
]

// acessar valores de array >>>>>>>>> array é acessado por indices começando sempre por 0 - 1 - 2.... n indices

console.log(animals[1]);

// Acessar valores de um array que possui objeto dentro, é só somar as duas coisas

console.log(animals[3].name + " tem " + animals[3].age + " anos ");

// Como saber quantos itens tem no array? usando >>>>>>>> LENGTH = comprimento