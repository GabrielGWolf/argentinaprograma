let arreglo = [100,22,5454,34,546,-23,342,5,23,756,132,54,890,5700]
let mayor = arreglo[0];
let menor = arreglo[0];
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
         mayor = arreglo[i];
    }
}
for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] < menor) {
         menor = arreglo[i];
    }
}
console.log(mayor)
console.log(menor)