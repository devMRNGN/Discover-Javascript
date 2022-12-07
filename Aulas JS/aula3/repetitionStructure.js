// Estrutura de repetição
// for
//break - para a execução do loop
// continue - pula a execução do momento

for(let i = 0; i < 10; i++){ // 0 a 9
    console.log(i);
}   
for(let i = 1; i <= 10; i++){ // 1 a 10
    console.log(i);
}
for(let i = 100; i >= 0; i--){ // 100 a 0 e parando loop em 49
    if(i == 50){
        break;
    }
    console.log(i);
}
for(let i = 10; i >= 0; i--){ // mostra de 10 a 0 ignorando o 5 por conta do continue
    if(i == 5){
        continue;
    }
    console.log(i);
}