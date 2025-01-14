

// Arreglos en JS
// const arreglo = new Array( 100 ); //no se recomienda a menos de que se necesite de un tamaño fijo
const arreglo = [1,2,3,4];
// arreglo.push(1) //añadimos elementos con el push
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)

let arreglo2 = [ ...arreglo, 5 ]; //copiamos los elementos del arreglo y le añadimos el 5

//transformamos la respuesta con el map y devolvemos un nuevo arreglo
const arreglo3 = arreglo2.map( function(numero) {
    return numero * 2;
});

const arreglo4 = arreglo2.map((number) => {
    return number*3
})

console.log( arreglo );
console.log( arreglo2 );
console.log( arreglo3 );
console.log( arreglo4 );









