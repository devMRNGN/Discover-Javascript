// vamos iniciar um bloco
{
    let x = 0;
    console.log(x);
    // aqui dentro é um bloco e posso colocar qualquer código
} // aqui o codigo acaba

// var é global e poderá funcionar fora de um escopo de bloco

/* HOISTING variavel tipo VAR
console.log('> existe x antes do bloco? ',x1); // existe mas não esta definido (undefined)

{
    var x1 = 0;
}

console.log('> existe x depois do bloco? ',x1); // existe (0)
*/


// const e let são locais e só funcionam no escopo aonde foi criadas
//console.log('>existe y antes do bloco? ',y); // Não existe, porque essas variaveis só funcionam dentro do escopo

{
    let y = 0;
    console.log('>existe y depois do bloco? ',y); /*existe y dentro do bloco e depois da declaração, 
    antes ja existe mas ainda não tem valor ent da erro e FORA DO BLOCO, jamais essa variavel existirá */
}

/* const é constante IMPOSSIVEL DE MUDAR... no mesmo escopo, porém voce pode ter varias variaveis com o mesmo nome constantes em escopos diferentes
que ela terá valroes diferentes dentro de cada escopo */