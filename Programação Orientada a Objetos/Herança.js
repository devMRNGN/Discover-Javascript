class Veiculo {
    rodas = 4;

    mover(direcao){}
    virar(direcao){}
}

class Moto extends Veiculo {
    constructor() {
        super() // Puxar atributos e métodos do pai (mover() e virar())
        this.rodas = 2;
    }
}