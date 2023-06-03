let unStringDeNumeros = "12345678910111213141516171181916131651321561651654"
let unStringConLetras = "123132165asd1asd132165132a1sd65132165asd1321651"

let miArregloDesdeStringDeNumeros = unStringDeNumeros.split("")
let miArregloDesdeStringConLetras = unStringConLetras.split("")

let soloNumeros = miArregloDesdeStringDeNumeros.map(e => !isNaN(e))
let conLetras = miArregloDesdeStringConLetras.map(e => !isNaN(e))

let respuestaSoloNumeros = soloNumeros.includes(false)
let respuestaConLetras = conLetras.includes(false)

