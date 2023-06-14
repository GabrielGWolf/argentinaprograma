const readlineSync = require('readline-sync');
let numeroDado = parseInt(readlineSync.question("Ingrese un numero cualquiera: "));

if(numeroDado > 0 && numeroDado %2==0) {
    console.log("El numero es positivo y par")
} else if (numeroDado > 0 && !numeroDado%2==0){
    console.log("El numero es positivo e impar")
} else if (numeroDado<0) {
    console.log("El numero es negativo")
} else if (numeroDado === 0) {
    console.log("El numero es 0")
}
