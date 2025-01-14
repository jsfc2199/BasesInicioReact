
// Variables y Constantes

const nombre = 'Juan'; //const es inmutable
const apellido = 'Franco'; 

let valorDado = 5; //puede mutar
valorDado = 4;

console.log( nombre, apellido, valorDado ) //valor dado tomara valor de 4

// var No se debe de usar...
if ( true ) {
    const nombre = 'Peter'; //variable en un ámbito dado (ámbito de if)
    console.log(nombre)
}

console.log( valorDado );

