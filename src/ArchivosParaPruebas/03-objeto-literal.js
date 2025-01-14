
//objeto de una persona un objeto literal tiene {}, se caracterizan por tener llave: valor
const persona = {
    nombre: 'Tony',
    apellido: 'Stark',
    edad: 45,
    direction: {
        ciudad: 'New York',
        zip: 55321321,
        lat: 14.3232,
        lng: 34.9233321
    }
};

// console.table( persona ); //una forma de imprimir mas cool

const persona2 = { ...persona }; //esto es el operador spread que propaga los mismos datos de persona en persona2 así rompemos la referecencia con un shallow copy
persona2.nombre = 'Peter';


console.log( persona );
console.log( persona2 )







