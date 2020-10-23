import React, { useState } from "react";

const Contador = () => {
	const [c, actualizarC] = useState(0);

	console.log("Ejecutando el componente Contador");

	const restar = () => {
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
