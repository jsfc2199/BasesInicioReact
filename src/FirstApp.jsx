import PropTypes from "prop-types";
import React from "react";

//si hay objetos que no se van a cambiar para nada ni hacen parte de hooks podemos sacarlo del functional component
const objeto = {
  title: "esto es un título",
  objeto: "esto es un objeto",
};

const getResult = () => {
  return 4 + 4;
};

//podemos tener (props) o desestructuras las props (properties)
//podemos enviar por defecto si no envían nada así title = 'Hola Soy Goku'
export const FirstApp = ({title, subtitle}) => {
  //variables
  const nombre = "Juan";

  return (
    // si mandamos <> </> es un fragment
    //también se puede usar <Fragment></Fragment>
    <>
    {/* add data attribute  */}
    <h2 data-testid='test-title'>{title}</h2>
    <h2>{subtitle}</h2>

      <div>FirstApp</div>
      <p>párrafo</p>

      {/* imprimir variables en el html */}
      <h3>Tu nombre es: {nombre}</h3>
      <h3>La suma de 1+1 es: {1 + 1}</h3>
      <div>{objeto.title}</div>
      <div>{objeto.objeto}</div>
      <div>el resultado de getResult es: {getResult()}</div>

      {/* Booleanos no se imprimen */}
      <div>el resultado de un booleano es: {false}</div>

    </>
  );
};

//Para tipar usamos los propTypes usando npm install prop-types
FirstApp.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.number.isRequired, //podemos hacer que sea requerido
}

FirstApp.defaultProps = {
    title: 'no hay título',
    subtitle: 'no hay subtitulo'
}
