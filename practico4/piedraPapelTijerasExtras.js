const readlineSync = require('readline-sync');
let veces = parseInt(readlineSync.question("Por favor, ingrese cuantas veces quiere jugar: "));

function obtenerJugadaComputadora() {
    let opciones = ["piedra", "papel" , "tijera"];
    let numeroRandom = Math.floor(Math.random() * 3);
    return opciones[numeroRandom];
};

let jugadaComputadora = obtenerJugadaComputadora()

function obtenerJugadaUsuario() {
    let jugada = readlineSync.question("Por favor, ingrese: piedra, papel o tijera: ")
    jugada.toLowerCase()
    jugada.trim()
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
let jugadaUsuario = obtenerJugadaUsuario()
let contador = 0;

function determinarGanador(jugadaComputadora, jugadaUsuario) {
  if (
    (jugadaComputadora === "piedra" && jugadaUsuario === "tijera") ||
    (jugadaComputadora === "tijera" && jugadaUsuario === "papel") ||
    (jugadaComputadora === "papel" && jugadaUsuario === "piedra")) { 
    return contador = contador-- 
    console.log("Esta mano la gana la computadora")
    } else if (
    (jugadaUsuario === "piedra" && jugadaComputadora === "tijera") ||
    (jugadaUsuario === "tijera" && jugadaComputadora === "papel") ||
    (jugadaUsuario === "papel" && jugadaComputadora === "piedra")) {
    return contador = contador++
    console.log("Esta mano la gana el usuario");
    } else {
    return contador = contador
    console.log("Esta mano es un empate");
  }
};

let resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

function jugarVariasVeces(veces) {
  for (let i = 0; i < (veces-1); i++) {
    console.log("Partida " + (i + 1));
    const jugadaComputadora = obtenerJugadaComputadora();
    const jugadaUsuario = obtenerJugadaUsuario();
    const resultado = determinarGanador(jugadaComputadora, jugadaUsuario);

    console.log("El usuario eligió: " + jugadaUsuario);
    console.log("La computadora eligió: " + jugadaComputadora);
    console.log("El resultado de este partido es: " + resultado);
    console.log("Contador actual: " + contador);
  }
  if (contador < 0) {
    console.log("El ganador global es la computadora");
  } else if (contador > 0) {
    console.log("El ganador global es el usuario");
  } else {
    console.log("El resultado global es Empate");
  }
}

jugarVariasVeces(veces)