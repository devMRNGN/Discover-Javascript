/* Transform School Grades

    Crie um algoritmo que transforme as notas do sistema numérico
    para sistema de notas em carácteres tipo A B C

    * de 90 para cima - A
    * entre 80 - 89 --  B
    * entre 70 - 79 --  C
    * entre 60 - 69 --  D
    * menor que 60 --   F
*/ 
// Solução que eu pensei baseando que iria receber as notas de uma sala toda e transforma-las em caracteres

let schoolGrades = [80,80,80,80,-1];

function transformSchoolGrades(schoolGrades){
    let newGrades = [];
    for(let grade of schoolGrades){
        if(grade >= 90 && grade <= 100){
            newGrades.push('A');
        } else if(grade > 79 && grade < 90){
            newGrades.push('B');
        } else if(grade > 69 && grade < 80){
            newGrades.push('C');
        } else if(grade > 59 && grade < 70){
            newGrades.push('D');
        } else if(grade <= 60 && grade >= 0) {
            newGrades.push('F');
        } else {
            newGrades.push('Nota inválida');
        }
    }
return newGrades;
}

console.log(transformSchoolGrades(schoolGrades));

// Outra resolução

let score = 10;

function getScore(score){

    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score <= 60 && score >= 0;
    let scoreFinal;

    if (scoreA){
        scoreFinal = "A";
    } else if (scoreB){
        scoreFinal = "B";
    } else if (scoreC){
        scoreFinal = "C";
    } else if (scoreD){
        scoreFinal = "D";
    } else if (scoreF){
        scoreFinal = "F";
    } else {
        scoreFinal = "Nota inválida";
    }

     return scoreFinal;
}

console.log(getScore(score));