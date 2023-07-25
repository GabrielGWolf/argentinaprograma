
const readlineSync = require('readline-sync');

function operaciones() {
let option = parseInt(readlineSync.question(
    "Elija una de las siguientes opciones: " + 
    "(1) suma,  \n " + 
    "(2) resta, \n " + 
    "(3) multiplicacion \n" +
    "(4) division. \n" +
    "Por favor, ingrese el numero de la operación que dese a realizar: "));
    return option
}

let option = operaciones()

while (option <0 && option >4) { 
    console.clear;
    console.log("el numero ingresado no es correcto, por favor ingrese nuevamente");
    operaciones
    return option
}

let num1 = readlineSync.questionFloat("por favor ingrese el primer numero con el que quiere operar.");
let num2 = readlineSync.questionFloat("por favor ingrese el segundo numero con el que quiere operar.");

var resultado; 

function suma (num1, num2) { 
    resultado = (num1 + num2)
    return console.log("La suma de " + num1 + "+" + num2 + "es " + resultado)
}
 function resta (num1, num2) {
     resultado = (num1 - num2);
    return console.log("La resta de " + num1 + "-" + num2 + "es " + resultado)
}
 function multiplicacion (num1, num2) {
    resultado = (num1 * num2)
    return console.log("La division de " + num1 + "/" + num2 + "es " + resultado);
}
 function division (num1, num2) {
    resultado = (num1 / num2);
    return console.log("La multiplicacion de " + num1 + "x" + num2 + "es " + resultado)
}


function calculadora(operacion, num1, num2) {
switch (operacion) {
    case 1:
        resultado = suma(num1, num2)
        break;
    case 2:
        resultado = resta(num1, num2)
        break;
    case 3:
        resultado = multiplicacion(num1, num2)
        break;
    case 4:
        resultado = division(num1, num2)
        ;
        break;
    }
}

calculadora()
console.log("el resultado es " + resultado);
