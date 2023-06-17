//datos iniciales
let personas = ["Jose", "Maria", "Juan", "Andres", "Lionel","Sofia", "Leandro", "Emilia"]
let codiciososYGroseros = ["Jose","Sofia"]

//dividir permitidos de rechazados
let rechazados = []
let permitidos = []
for (let i = 0; i < personas.length; i++) {
    let nombre = personas[i];
    if (nombre === "Jose" || nombre == "Sofia") {
        rechazados.push(nombre);
        } else {
        permitidos.push(nombre);
    }
}

//imprimir lista de admitidos y lista de rechazados
console.log("la lista de invitados admitidos es: ")
for(let i = 0; i <permitidos.length; i++) {
    console.log(permitidos[i])
}
console.log("La lista de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}

//imprimir lista ordenada de admitidos y rechazados
permitidos.sort()
console.log("la lista ordenada de invitados admitidos es: ")
for(let i = 0; i <permitidos.length; i++) {
    console.log(permitidos[i])
}

rechazados.sort()
console.log("La lista ordenada de invitados rechazados es:");
for (let i = 0; i < rechazados.length; i++) {
  console.log(rechazados[i]);
}
