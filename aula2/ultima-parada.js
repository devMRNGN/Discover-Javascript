function ultimaParada(combustivel, consumo, postosDeGasolina) {
    let media = combustivel * consumo;
    let postoproximo = -1;
    for (let i = 0; i < postosDeGasolina.length; i++) {
        if (postosDeGasolina[i] <= media && postosDeGasolina[i] != 0) {
            let posto = postosDeGasolina[i];
            if (postoproximo < posto) {
                postoproximo = posto;
            }
        }
    }
    return postoproximo;
}
let postosdeGasolina = [2,15,3,10,16];
let viagem = (ultimaParada(2, 8, postosdeGasolina));
console.log(viagem);