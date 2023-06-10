let superArreglo = [["Carla", "Pedro", "Daiana", "Ivan", "Ivette", "Mario", "Vanesa"], ["Gomez","Gonzales","Hernandez","Suarez","Gimenez","Gomez","Mendez"], [true, false, true, true, true, false, true]]

console.log(superArreglo)

console.log("-------------- ejercicio 1 y 2 ---------------------------------------------")
console.log("2. Nombres que terminan con 'a':");
for (let i = 0; i < superArreglo[0].length; i++) {
    let nombre = superArreglo[0][i];
    if (nombre.endsWith("a")) {
      console.log(nombre);
    }
  }
console.log("--------------- ejercicios 3 y 4--------------------------------------------")

console.log("Apellidos que empiezan con 'G':");
for (let i = 0; i < superArreglo[1].length; i++) {
    let apellido = superArreglo[1][i];
    if (apellido.startsWith("G")) {
      console.log(apellido);
    }
  }

console.log("4. Personas con nombre terminado en 'a' y apellido que empieza con 'G':");
for (let i = 0; i < superArreglo[1].length; i++) {
  let nombre = superArreglo[0][i];
  let apellido = superArreglo[1][i];
  if (nombre.endsWith("a") && apellido.startsWith("G")) {
    console.log(nombre + " " + apellido);
  }
}
console.log("--------------- ejercicios 5 y 6 --------------------------------------------")

console.log("Personas con invitación validada (inicial del nombre y apellido):");
for (let i = 0; i < superArreglo[2].length; i++) {
  if (superArreglo[2][i]) {
    let nombreInicial = superArreglo[0][i].charAt(0);
    let apellidoInicial = superArreglo[1][i];
    console.log(nombreInicial + ". " + apellidoInicial);
  }
}
console.log("----------------- ejercicio 7 ------------------------------------------")

console.log("Personas que cumplen condiciones: de Nombre termina con 'a',  apellido inicia con 'G' y tiene invitacion en 'true'");
for (let i = 0; i < superArreglo[0].length; i++) {
    let nombre = superArreglo[0][i];
    let apellido = superArreglo[1][i];
    if (
      nombre.endsWith("a") &&
      apellido.startsWith("G") &&
      superArreglo[2][i]
    ) {
      console.log(nombre.charAt(0) + ". " + apellido + " Invitación 'true'");
    }
  }
  console.log("----------------------- fin ------------------------------------")