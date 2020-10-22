import React from "react";

const Articulo = ({ art }) => {
  return (
    <div>
      <p>
        <small>{art.id}</small>
      </p>
      <p>{art.titulo}</p>
    </div>
  );
};

export default Articulo;
