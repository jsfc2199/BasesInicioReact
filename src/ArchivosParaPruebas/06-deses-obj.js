
// Desestructuración
const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
};

//desestructuramos la data de persona y así no escribimos persona.nombre, persona.edad, etc
const { edad, clave, nombre, } = persona; 
 
console.log( nombre );
console.log( edad );
console.log( clave );

//desestructuración dentro del argumento
const usarContext = ({ clave, nombre, edad, rango = 'Capitán' }) => {

    // console.log( nombre, edad, rango );
    
    return {
        nombre,
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.1232,
            lng: -12.3232
        }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = usarContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );


