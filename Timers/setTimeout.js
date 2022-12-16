// setTimeout rodar uma função depois de X milissegundos 
const timeOut = 3000;
const finished = () => console.log("Done!");

setTimeout(finished, timeOut); // Argumentos primeiro uma função CALLBACK e segundo o tempo que vai esperar pra executa lá
console.log('Mostrar'); // Assíncronismo, apesar da linha estar abaixo da função setTimeout() ela é mostrada primeiro, pois a função CALLBACK está na lista de espera
