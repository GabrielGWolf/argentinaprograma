let frutas = [];

console.log(frutas)

frutas.push("Sandia");
frutas.push("Melon");
frutas.push("Manzana");
frutas.push("Banana");
frutas.push("Uva");
console.log(frutas)
let ultima = frutas.pop();
console.log("la ultima fruta agregada fue " + ultima);
let saturfs = frutas.reverse();
let primera = saturfs.pop();
console.log("la primera fruta agregada fue " + primera);
console.log(frutas);
console.log("Lo primero fue crear el arreglo llamado *frutas* vacio y agregar 5 elementos, luego extraer el ultimo elemento, y finalmente extraer el primer elemento. Elegí ir imprimiendo por consola todo el proceso para poder ver como funcionaba.");