class Biscoito {
    constructor(recheio, massa) {
        this.recheio = recheio;
        this.massa = massa;
    }

    criarBiscoito() {
        return `Voce criou um biscoito de ${this.massa} com recheio de ${this.recheio} aproveite essa delicia!!`;
    }
}

const biscoito = new Biscoito('Chocolate','Polvilho');

console.log(biscoito.criarBiscoito());