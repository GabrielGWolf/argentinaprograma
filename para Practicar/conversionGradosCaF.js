//let Farnheit1 = 50;
//let Celcius1 = (Farnheit1-32) * 5/9;
//console.log ("75°F en Celcius es " + (Celcius1));

//let Farnheit2 = 75;
//let Celcius2 = (Farnheit2-32) * 5/9;
//console.log ("75°F en Celcius es " + Celcius2);

// Para 50°F,  10°Celcius
// Para 75°F, 23.888° Celcius

let gradosCelcius = 23.88888
let conversionFarenheit = gradosCelcius * (9/5) + 32
console.log ("La conversión de x grados Farneheit es a Celcius es " + conversionFarenheit)

let ene = 130;
let feb = 120;
let mar = 100;
let abr = 80;
let may = 80;
let jun = 80;
let jul = 70;
let ago = 70;
let sep = 80;
let oct = 90;
let nov = 100;
let dic = 120; 

let tabla12Meses = [ene, feb, mar, abr, may, jun, jul, ago, sep, oct, nov, dic]

let sumatoriaGrados = 0;
sumatoriaGrados = sumatoriaGrados + tabla12Meses[0];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[1];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[2];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[3];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[4];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[5];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[6];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[7];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[8];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[9];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[10];
sumatoriaGrados = sumatoriaGrados + tabla12Meses[11];

let promedioTemperatura = (sumatoriaGrados/12)
let promdedioTemperaturaEnCelcius = (promedioTemperatura-32) * 5/9 
console.log("El promedio anual de temperatura en °C es " + promdedioTemperaturaEnCelcius)

