// calculate media of student

const calculateMedia = (grades) => {
    let numberOfNotes = 0;
    let studentAverage = 0;
    for(let i = 0; i < grades.length; i++){
        numberOfNotes++;
        studentAverage += grades[i];
    }
    studentAverage = studentAverage / numberOfNotes;
    return studentAverage;
};

let alunoGrades = [7,5,6,7,5,6,8];
let media = calculateMedia(alunoGrades);
console.log(media);