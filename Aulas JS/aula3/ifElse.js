// if...else...

let temperature = 37.5;

// Else if comum
if(temperature >= 37) {
    console.log("Febre.");
} else {
    console.log("Saúdavel.");
} 
// Else if encadeado
if(temperature >= 37.5){
    console.log("Febre alta.");
} else if(temperature > 37 && temperature < 37.5){
    console.log("Febre.");
} else {
    console.log("Saúdavel.")
}
// outro método para fazer if
let highTemperature = temperature >= 37.5;
let mediumTemperature = temperature < 37.5 && temperature >= 37;

if(highTemperature){
    console.log("Febre alta.");
} else if(mediumTemperature) {
    console.log("Febre.")
} else {
    console.log("Saúdavel.");
}