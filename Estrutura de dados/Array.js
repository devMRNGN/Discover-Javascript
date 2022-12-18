const pilotos = ['Senna', 'Prost', 'Schumacher', 'Hamilton'];

// a indexação (index) começa pelo número 0
console.log(pilotos[0]); // Senna
console.log(pilotos[1]); // Prost


// acessar o tamanho do array
console.log(pilotos.length); // 4

// iterável
for(let piloto of pilotos) {
    console.log(piloto);
}

// adicionar elemento
pilotos.push("Alonso");
console.log(pilotos);

// encontrar um elemento

const senna = pilotos.find(piloto => piloto === 'Senna');

console.log(senna);

// deletar um elemento

pilotos.splice(1,1);

console.log(pilotos);