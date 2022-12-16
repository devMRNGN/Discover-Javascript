// clearTimeout cancelar um timeOut
const timeOut = 3000;
const finished = () => console.log("Done!");

let timer = setTimeout(finished, timeOut); 
clearTimeout(timer); // cancela o setTimeout, fazendo com que o objeto que ele retorne seja desfeito, não retornando nada! como se nunca existisse timeout

