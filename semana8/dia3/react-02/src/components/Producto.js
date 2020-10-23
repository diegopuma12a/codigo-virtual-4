import React from "react";

const Producto = ({ producto, agregarCanasta }) => {
	return (
		<div className="productos__producto">
			<h4>{producto.nombre}</h4>
			<p>S/ {producto.precio}</p>
			<p>
				<button
					onClick={() => {
						agregarCanasta(producto.id);
					}}
				>
					Agregar +1
				</button>
			</p>
		</div>
	);
};

export default Producto;
