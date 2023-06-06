// Cita y substring dados en la consigna
let cita = "tres tristes tigres comen trigo en un trigal"
let subString= "tigres comen trigo"
// calculo de tamaño total de la cita
let tamañoDeCita = cita.length
console.log(tamañoDeCita)
// tamaño del indice
let indice = cita.indexOf(subString)
console.log(indice)
// citaRevisada
let citaRevisada = cita.slice(0, tamañoDeCita - indice)
console.log(citaRevisada)