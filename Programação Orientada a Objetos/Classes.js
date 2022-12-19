// Definir classe
class Pessoa {
    constructor(name) {
        this.id = ~~(Math.random() * 100000);
        this.name = name;
    }

    dizerNome() {
        console.log(this.name);
    }
}

// Criar um Objeto
const pessoa = new Pessoa('João');

console.log(pessoa.dizerNome());