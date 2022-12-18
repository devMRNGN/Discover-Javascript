const students = [['Joseph', 23, 'MG'],['Briana', 22, 'SP'],['Priscila', 23, 'PR']];

console.log(students[0][1]); // Pegando a idade


// Percorrendo a matriz toda

for(let row = 0; row < students.length; row++){
    for(let column = 0; column < students[row].length; column++){
        console.log(students[row][column]);
    }
}