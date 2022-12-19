class Atleta {
    peso;
    categoria;

    constructor(peso) {
        this.peso = peso;
    }

    definirCategoria(){
        if (this.peso <= 50) {
            this.categoria = 'infantil';
        } else if (this.peso <= 65) {
            this.categoria = 'juvenil';
        } else {
            this.categoria = 'adulto';
        }
    }
}

class Lutador extends Atleta {
    constructor(peso) {
        super(peso); // Herdando apenas o peso da classe Atleta
    }

    definirCategoria() {
        if(this.peso <= 54) {
            this.categoria = 'pluma';
        } else if(this.peso <= 60) {
            this.categoria = 'meio-leve';
        } else if(this.peso <= 75) {
            this.categoria = 'medio-leve';
        } else {
            this.categoria = 'pesado';
        }
    }
}
