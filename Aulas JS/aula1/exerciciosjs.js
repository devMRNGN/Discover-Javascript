// Exercicios para treinar

// 1* Declare uma variavel de nome weight

//let weight = 10.5;

// 2* Que tipo de dado é a variavel acima??? resp: Number type float

//console.log(typeof weight);

/* 
    3* Declare uma variavel e atribua valores para cada um dos dados:
        * name: String
        * age: Number(integer)
        * stars: Number(float)
        * isSubscribed: Boolean
        * 
            let name = "João";
            let age = 20;
            let stars = 15.5;
            let isSubscribed = true;
*/



/*
    4* A variavel student abaixo é de que tipo de dado?
        let student = {};
        console.log(typeof student); // É do tipo Object
    
    4.1* Atribua a ela as mesmas propriedades e valores do exercicio 3.

    4.2* Mostre no console a seguinte mensagem:

    <name> de idade <age> pesa <weight> kg

    Atenção, substitua <name> <age> e <weight> pelos valores de cada propriedade do objeto

        console.log(`${student.name} de idade ${student.age} anos e pesa ${student.weight} kg`);
*/
const student = {
    name: 'João',
    age: 20,
    stars: 15.5,
    isSubscribed: true,
    weight: 60.5
};

const jhon = {
    name: "jhon",
    age: 20,
    weight: 80.2,
    isSubscribed: false,
    height: 1.80
};
/*
    5* Declare uma variavel do tipo array, de nome students e atribua a ela nenhum valor, ou seja, somente um Array vazio!
        const students = [];
    
    6* Reatribua valor para a váriavel acima, colocando dentro dela o objeto students
    (Não copiar e colar o objeto, mas usar o objeto criado e inserir ele no array)

*/

let students = [
    student,
    jhon
];


/* 
    7* Coloque no console o valor da posição zero do Array acima 

*/

console.log(students[0]);

/* 
    *8 Crie um novo student e coloque na posição 1 do Array students
*/

console.log(students[1]);

/*
    9* Sem rodar o código responda qual é a resposta do código abaixo e por que? 
    Após sua resposta, rode o código e veja se você acertou.

    console.log(a)
    var a = 1;

    resp: O código vai dar erro "a undefined" porque o Javascript lê linha a linha e como o console aparece antes da variavel
    ser declarada, ela não existe ainda pra ele logo "Undefined" e ela vai sofrer o Hoisting aonde o JS jogara a variavel a 
    para cima do console log e deixando ela undefined
*/

