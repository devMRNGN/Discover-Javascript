const { inherits } = require('util');
const { eventEmitter } = require('events');
const { EventEmitter } = require('stream');

function Character(name) {
    this.name = name;
}

inherits(Character, EventEmitter);

const chapolin = new Character('Chapolin');
chapolin.on('help', () => console.log(`Eu! O ${chapolin.name} colorado`));

console.log("\nOh! E agora, quem poderá me defender? \n");

chapolin.emit('help');