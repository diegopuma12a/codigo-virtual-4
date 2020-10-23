import React from "react";
import Producto from "./Producto";

const Productos = ({ productos, agregarCanasta }) => {
	return (

		<section className="productos">
			{productos.map((prod) => {
				return (
					<Producto
						producto={prod}
						key={prod.id}
						agregarCanasta={agregarCanasta}
					/>
				);
			})}
		</section>

	);
};

export default Productos;
