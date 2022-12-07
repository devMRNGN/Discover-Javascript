// Callback function
/*
    Callback pra simplificar é passar uma função como parametro e em algum momento essa função será rodada dentro da outra função
    chamar uma função e dentro dessa função vai chamar outra função em algum momento
*/
function sayMyName(name){
    console.log('antes de executar a função callback');
    name();
    console.log('depois de executar a função callback');
}

sayMyName(
    () => {
        console.log('estou em uma callback');
    }
);