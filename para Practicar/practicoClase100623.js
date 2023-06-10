//1: Crear el arreglo de nombres llamado invitados

let invitados = ["Carla", "Pedro", "Daiana", "Ivan", "Ivette", "Mario", "Vanesa"];

//2: Imprimir los nombres que terminen con "a"

console.log("Nombres que terminan con 'a':");
for (let i = 0; i < invitados.length; i++) {
    let nombre = invitados[i];
    //if (nombre.charAt(nombre.length - 1) === "a") {
    if (nombre.endsWith("a")) {
      console.log(nombre);
    }
  }
console.log("-----------------------------------------------------------")

//3: Crear el arreglo de apellidos

let apellidos = ["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"];

//4: Imprimir las personas que cuyo nombre termine en "a" y cuyo apellido empiece con "G"
console.log("Apellidos que empiezan con 'G':");
for (let i = 0; i < apellidos.length; i++) {
    let apellido = apellidos[i];
    if (apellido.charAt(0) === "G") {
      console.log(apellido);
    }
  }

console.log("Personas con nombre terminado en 'a' y apellido que empieza con 'G':");
for (let i = 0; i < invitados.length; i++) {
  let nombre = invitados[i];
  let apellido = apellidos[i];
  if (nombre.charAt(nombre.length - 1) === "a" && apellido.charAt(0) === "G") {
    console.log(nombre + " " + apellido);
  }
}
console.log("-----------------------------------------------------------")

// 5: Crear arreglo "estadoDeInvitacion"

let estadoInvitacion = [true, false, true, true, true, false, true, false]

// 6: Imprimir todas las personas invitadas (inicial del nombre y apellido) que tienen la invitacion validada

console.log("Personas con invitación validada (inicial del nombre y apellido):");
for (let i = 0; i < invitados.length; i++) {
  if (estadoInvitacion[i]) {
    let nombreInicial = invitados[i].charAt(0);
    let apellidoInicial = apellidos[i];
    console.log(nombreInicial + ". " + apellidoInicial);
  }
}
console.log("-----------------------------------------------------------")

// 7. Imprimir todas las personas (inicial del nombre, apellido y estado de la invitacion) que cumplan con las condiciones del ejercicio 3, 4 y 6.
console.log("Personas que cumplen condiciones: de Nombre termina con 'a',  apellido inicia con 'G' y tiene invitacion en 'true'");
for (let i = 0; i < invitados.length; i++) {
    let nombre = invitados[i];
    let apellido = apellidos[i];
    if (
      nombre.charAt(nombre.length - 1) === "a" && 
      apellido.charAt(0) === "G" &&
      estadoInvitacion[i]
    ) {
      console.log(nombre.charAt(0) + ". " + apellido + " Invitación 'true'");
    }
  }
  console.log("-----------------------------------------------------------")