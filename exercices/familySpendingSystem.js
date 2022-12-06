/* ### Sistema de gasto familiar 


Crie um objeto que possuirá 2 propriedades, ambas do tipo array:
    * receitas: [];
    * despesas: [];

Agora, crie uma função que irá calcular o total de receitas e despesas e irá mostrar uma mensagem se a família está com saldo
positivo ou negativo, seguido do valor do saldo

*/

let familyExpenses = {
    revenues: [200,200,300],
    expenses: [100,300,200]
}

function calculateFamilyExpenses(family){
    let revenues = 0;
    let count = 0;
    for(let revenue of family.revenues){
        revenues += revenue;
    }
    for(let expense of family.expenses){
        count += expense;
    }
    let balance = revenues - count;
    let negativeBalance = balance < 0;
    let positiveBalance = balance > 0;
    if(negativeBalance){
        return (`Family with negative balance\nBalance: R$ ${balance.toFixed(2)}`);
    } else if(positiveBalance){
        return (`Family with positive balance\nBalance: R$ ${balance.toFixed(2)}`);
    } else {
        return (`Family with zero balance\nBalance: R$ ${balance.toFixed(2)}`);
    }
}

console.log(calculateFamilyExpenses(familyExpenses));

// outra solução

let familia = {incomes: [500,300,500], expenses: [130,230,250.2,300]}


function sum(array){
    let total = 0;
    for(let value of array){
        total += value;
    }
    return total;
}

function calculateBalance() {
    const calculateIncomes = sum(familia.incomes);
    const calculateExpenses = sum(familia.expenses);

    const total = calculateIncomes - calculateExpenses;

    const itsOk = total >= 0;

    let balanceText = "Negativo";

    if(itsOk){
        balanceText = "Positivo";
    }

    console.log(`Seu saldo é ${balanceText}: ${total.toFixed(2)}`);
}

calculateBalance();