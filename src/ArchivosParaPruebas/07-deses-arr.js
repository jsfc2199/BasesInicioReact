const personajes = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = personajes;
console.log(p3); //imprime trunks

const retornaArreglo = () => {
  return ["ABC", 123];
};

const [letras, numeros] = retornaArreglo();
console.log(letras, numeros); //imprime ABC, 123

// Tarea (simular el use State)
// 1. el primer valor del arr se llamará nombre
// 2. se llamará setNombre
const usarState = (valor) => {
  return [ valor, () => { console.log("Hola Mundo"); }]; //retornamos el valor y una función
};

const [nombre, setNombre] = usarState("Goku");

console.log(nombre); //imprime goku
setNombre(); //imprime hola mundo
