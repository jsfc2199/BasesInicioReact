import PropTypes from "prop-types";
import React from "react";

export const CounterApp = ({ value }) => {
  //funciones
  function sumarUno(event) {
    console.log(event);
  }

  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>

      {/* evento onClick */}
      <button onClick={(event) => sumarUno(event)}>+1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number.isRequired,
};
