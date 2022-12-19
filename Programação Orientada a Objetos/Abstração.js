// Definir 
class Parafuso { // Superclasse - Abstrata
    constructor() {
        if (this.constructor === Parafuso)
            throw new Error('Classe abstrata não pode ser instânciada');
    }
    get tipo() {
        throw new Error('Método "Get tipo()" precisa ser implementado');
    }
}

class Fenda extends Parafuso {
    constructor() {super() }

    get tipo() {
        return 'Fenda';
    }
}

class Philips extends Parafuso {
    constructor() {super() }

    get tipo() {
        return 'Philips';
    }
}

class Allen extends Parafuso {}

// criar e usar
// new Parafuso() 'Classe abstrata não pode ser instânciada'
let fenda = new Fenda();
let philips = new Philips();
let allen = new Allen();

console.log(fenda.tipo, philips.tipo);
// console.log(allen.tipo); // 'Método "get tipo()" Precisa ser implementado