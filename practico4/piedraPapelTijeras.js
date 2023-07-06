const readlineSync = require('readline-sync');

function obtenerJugadaComputadora() {
    let opciones = ["piedra", "papel" , "tijera"];
    let numeroRandom = Math.floor(Math.random() * 3);
    return opciones[numeroRandom];
};
let jugadaComputadora = obtenerJugadaComputadora()

function obtenerJugadaUsusario() {
    let jugada = readlineSync.question("Por favor, ingrese: piedra, papel o tijera: ")
    jugada = jugada.toLowerCase()
    jugada = jugada.trim()
    if (!(jugada === "piedra" || jugada === "papel" || jugada === "tijera")) { 
        while (!(jugada === "piedra" || jugada === "papel" || jugada === "tijera")) { 
            jugada = readlineSync.question("La opcion ingresada no es correcta." +  
            "Por favor, ingrese solo una palabra de las siguientes opciones: piedra, papel o tijera: ")
            jugada = jugada.toLocaleLowerCase()
            jugada = jugada.trim()
            }
        return jugada.toLocaleLowerCase()        
        } else {
        return jugada.toLowerCase().trim()
    }
};
let jugadaUsuario = obtenerJugadaUsusario()

function determinarGanador(jugadaComputadora, jugadaUsuario) {
    if (
      (jugadaComputadora === "piedra" && jugadaUsuario === "tijera") ||
      (jugadaComputadora === "tijera" && jugadaUsuario === "papel") ||
      (jugadaComputadora === "papel" && jugadaUsuario === "piedra")
    ) {
      return "Gana la computadora";
    } else if (
      (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
      (jugadaUsuario === "tijera" && jugadaComputadora === "papel") ||
      (jugadaUsuario === "papel" && jugadaComputadora === "piedra")
    ) {
      return "Gana el usuario";
    } else {
      return "Empate";
    }
};
const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

console.log("El usuario eligió " + jugadaUsuario)
console.log("La computadora eligió " + jugadaComputadora);
console.log("El resultado es: " + resultado);


