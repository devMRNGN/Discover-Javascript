// Estrutural 

let altura = 60;
let largura = 50;

calcularArea = () => altura * largura;

let area = calcularArea();

// Orientado a Objetos

class Poligono {
    constructor(altura, largura) {
        this.altura = altura;
        this.largura = largura;
    }

    getArea() {
        return this.#calculaArea();
    }

    #calculaArea(){
        return this.altura * this.largura;
    }
}

const poligono = new Poligono(60, 50);

console.log(poligono.getArea());