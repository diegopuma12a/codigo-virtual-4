import React from "react";

const Articulo = ({ art }) => {
  return (
    <div className="articulos__articulo">
      <p>
        <small>{art.id}</small>
      </p>
      <p>{art.titulo}</p>
    </div>
  );
};

export default Articulo;
