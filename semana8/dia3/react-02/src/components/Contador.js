import React, { useState } from "react";

const Contador = () => {
  const [c, actualizarC] = useState(0);

  const restar = () => {
    // c = c - 1; es un error
    actualizarC(c - 1);
  };
  const sumar = () => {
    actualizarC(c + 1);
  };

  return (
    <div>
      <button
        onClick={() => {
          restar();
        }}
      >
        -1
      </button>
      {c}
      <button
        onClick={() => {
          sumar();
        }}
      >
        +1
      </button>
    </div>
  );
};

export default Contador;
