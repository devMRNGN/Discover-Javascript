/* Crie dois arquivos JavaScript.
* O primeiro, irá exportar um função chamada getFlag()
* Que receberá um argumento do tipo string
* Essa função deverá buscar dentro do array process.argv a flag e retornar o valor da flag
*
* O segundo irá importar a função e passar a flag desejada.
*
* Iremos rodar no terminal o segundo arquivo passando as flags --name e --greeting 
* para que seja impresso no terminal a saudação e o nome da pessoa
*/

// Primeira parte

module.exports = function getFlag(string) {
    for(let i = 0; i < process.argv.length; i++){
        if(process.argv[i] == string){
            console.log(process.argv[i+1]);
        }
    }
};

function getFlag(string) {
    for(let i = 0; i < process.argv.length; i++){
        if(process.argv[i] == string){
            console.log(process.argv[i+1]);
        }
    }
}
