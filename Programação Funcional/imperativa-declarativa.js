// Função que eleva o número ao quadrado

// imperativo: Faça da seguinte forma, É feito sempre como um passo a passo e é pensado com antecedencia EX: POO
let number = 2;

function square() {
    return number * number;
}

number = square();

// Declarativa: O que fazer e não como fazer, apenas faz oq é pedido independentemente do modo, o importante é funcionar EX: Programação Funcional
const square = number => number * number;