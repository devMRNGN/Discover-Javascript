// hoisting of functions
// As funções que não são anonymous ela sofre o hoisting, ou seja automaticamente ela eleva a function acima do codigo e executa
// Agora se a função for anonima, ela não sofrerá o hoisting


sayMyName();  // sofrendo elevação

function sayMyName(){
    console.log("João");
}


sayMyName2(); // não sofre hoisting por ser anonima


const sayMyName2 = function(){
    console.log("Maria");
}