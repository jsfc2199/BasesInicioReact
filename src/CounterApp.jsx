import PropTypes from "prop-types";
import React, { useState } from "react";

export const CounterApp = ({ value }) => {

  //Primer hook useState
  const [counter, setCounter] = useState(value) //sirve para modificar el estado de algo, tiene un valor inicial

  //funciones
  function sumarUno(event) {
    setCounter(counter + 1)

    // setCounter((c) => c+1) otra forma de hacerlo
  }

  function restarUno() {
    setCounter(counter - 1)
  }

  function reset() {
    setCounter(value)
  }

//   lo mismo pero como arrow function
//   const sumarUno = (event) => {
//     console.log(event);
//   }

  return (
    <>
      <h1>Counter App</h1>

      {/* uso el counter del useState */}
      <h2>{counter}</h2>

      {/* evento onClick */}
      <button onClick={(event) => sumarUno(event)}>+1</button>
      <button onClick={(event) => restarUno(event)}>-1</button>
      <button onClick={reset}>reset</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
