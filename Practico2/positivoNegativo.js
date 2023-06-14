const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question("Ingrese un numero cualquiera: "));

if (numero > 0) {
    console.log ("el numero es positivo")
} else if ( numero < 0) {
    console.log ("el numero es negativo")
} else if (numero === 0) {
    console.log("el numero es 0")
}

