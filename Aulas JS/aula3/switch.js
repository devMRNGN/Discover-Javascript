// switch

/* let expression = 'a';
switch (expression) {
    case 'a':
        // código
        break;
    case 'b':
        //código para b
        break;
    default: 
        // caso nao passe em nenhum outro caso, faça esse
        break;
} Sintaxe do switch*/

function calculate(number1, operator,  number2){
    let result;

    switch(operator){
        case '+': 
            result = number1 + number2;
            break;
        case '-':
            result = number1 - number2;
            break;
        case '*':
            result = number1 * number2;
            break;
        case '/':
            result = number1 / number2;
            break;
        default:
            console.log("Não implementado");
            break;
    }
    return result;
}

console.log(calculate(10,"/",10));