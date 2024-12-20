import React from "react";

//si hay objetos que no se van a cambiar para nada ni hacen parte de hooks podemos sacarlo del functional component
const objeto = {
  title: "esto es un título",
  objeto: "esto es un objeto",
};

const getResult = () => {
  return 4 + 4;
};
export const FirstApp = () => {
  //variables
  const nombre = "Juan";

  return (
    // si mandamos <> </> es un fragment
    //también se puede usar <Fragment></Fragment>
    <>
      <div>FirstApp</div>
      <p>párrafo</p>

      {/* imprimir variables en el html */}
      <h3>Tu nombre es: {nombre}</h3>
      <h3>La suma de 1+1 es: {1 + 1}</h3>
      <div>{objeto.title}</div>
      <div>{objeto.objeto}</div>
      <div>el resultado de getResult es: {getResult()}</div>

      {/* Booleanos no se imprimen */}
      <div>el resultado de getResult es: {false}</div>

    </>
  );
};
