let number = 2;

// stateful function USA VARIAVEIS QUE ESTÃO FORA DELA  
function squaree() {
    return number * number;
}

// stateless function NÃO GUARDA ESTADO NENHUM, APENAS USA E RETORNA O VALOR E NA PROXIMA VEZ RESETA
const square = number => number * number;

