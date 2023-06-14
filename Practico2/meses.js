const readlineSync = require('readline-sync');
let numero = parseInt(readlineSync.question("Ingrese el numero del mes (de 1 a 12): "));

let meses = {1: 'enero',
    2: 'febrero',
    3: 'marzo',
    4: 'abril',
    5: 'mayo',
    6: 'junio',
    7: 'julio',
    8: 'agosto',
    9: 'septiembre',
    10: 'octubre',
    11: 'noviembre',
    12: 'diciembre'
};

let mes = meses[numero]
var cantidadDeDias = 0
if (numero === 2) {
    var cantidadDeDias = 28; // febrero tiene siempre 28 días
    } else if (numero === 4 || numero === 6 || numero === 9 || numero === 11) {
    var cantidadDeDias = 30; 
    } else {
    var cantidadDeDias = 31; 
    }
    console.log("La cantidad de días del mes de %s es %i", meses[numero], cantidadDeDias)