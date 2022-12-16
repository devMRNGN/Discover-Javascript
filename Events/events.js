const { EventEmitter } = require('events');

const event = new EventEmitter();

event.on('Say something', (message) => console.log("Eu ouvi você! \n", message)); // .on() ouve quantos eventos forem emitidos
event.once('Say something', (message) => console.log("Eu ouvi você! \n", message)); // .once() ouve APENAS uma vez, ou seja o primeiro evento emitido e ignora o resto

event.emit('Say something' , "João"); // EMITINDO UM EVENTO! somente usar .emite("Evento")
event.emit('Say something', "Myke");