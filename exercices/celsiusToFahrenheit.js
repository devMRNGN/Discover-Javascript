/* ### Celius em fahrenheit

    Crie uma função que receba uma string em celsius ou fahrenheit e faça a transformação 
    de uma unidade para outra

    c = (f - 32) * 5/9;
    f = c * 9/5 + 32;
*/

let temperature = "10F";
let temperatureInCelsius = temperature.toUpperCase().includes("C"); 
let temperatureInFahrenheit = temperature.toUpperCase().includes("F");

if(!temperatureInCelsius && !temperatureInFahrenheit){
	throw new Error ("Grau não identificado");
} else if(temperatureInCelsius){
	let convert = toFahrenheit(temperature);
	console.log(convert);
} else if(temperatureInFahrenheit){
	let convert = toCelsius(temperature);
 	console.log(convert);
}

function toNumber(temperature){
	if(temperature.length == 2){
		let temperatura = temperature.slice(0,1);
		return Number(temperatura);
	} else if(temperature.length == 3){
		let temperatura =     temperature.slice(0,2);
		return Number(temperatura);
	} else if(temperature.length == 4){
		let temperatura = temperature.slice(0,3);
		return Number(temperatura);
	}
	return "High";
}

function toCelsius(temperatura){
		let inNumber = toNumber(temperatura);
		if(inNumber === "High"){
			return "Very high temperature to convert";
		} else {
			let resultado = ((inNumber - 32) * 5/9).toFixed(1);
	resultado += "C";
	return (`${temperatura} converted to Celsius: ${resultado}`);
		}
}

function toFahrenheit(temperatura){
	let inNumber = toNumber(temperatura);
	if(inNumber === "High"){
		return "Very high temperature to convert";
	} else {
		let resultado = ((inNumber * 9/5) + 32).toFixed(1);
		resultado += "F"; 
		return (`${temperatura} converted to Fahrenheit: ${resultado}`);
	}
}

