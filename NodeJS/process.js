// Lista de argumentos
// console.log(process.argv);

// Conseguimos pegar os argumentos e colocar dentro do nosso programa

const firstName = process.argv[2];
const lastName = process.argv[3];
console.log(`Seu nome é ${firstName} ${lastName}`);

// Outra maneira de executar processos

// node process --name "João Marangoni" --greeting "Tudo bem com voce?"