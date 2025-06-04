//Con esta linea de codigo requiero la libreria con npm
const prompt = require("prompt-sync")()
const limpiarPantalla = require("clear")()

// declarar variable para almacenar 
const nombre = prompt("Ingresa tu nombre:")
const edad = Number(prompt("Ingrese su edad:"))
limpiarPantalla()
//WARNING edad es tipo STRING
//Si voy a tratar esta variable edad como NUMERO debo convertir

//Mostrar el valor para mi como programador
console.log('Hola', nombre, 'que lindo que tengas', edad, 'años')