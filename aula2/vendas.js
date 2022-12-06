function retornaMenorEMaiorValorDeVendas(tickets) {
    let maior = '';
    for(let i = 0; i < tickets.length; i++){
        for(let j = 0; j < tickets[i].length; j++){
            if(tickets[i][j] > maior || maior === ''){
              if(tickets[i][j] <= 500){
                maior = tickets[i][j];      
              }
            }
        }
    }
    let menor = '';
    for(let i = 0; i < tickets.length; i++){
        for(let j = 0; j < tickets[i].length; j++){
            if(tickets[i][j] < menor || menor === ''){
              if(tickets[i][j] >= 20){
                menor = tickets[i][j];
              }
            }
        }
    }
    let MenoreMaior = [menor, maior];
    return MenoreMaior;
}

console.log(retornaMenorEMaiorValorDeVendas([[200,100],[300]]));