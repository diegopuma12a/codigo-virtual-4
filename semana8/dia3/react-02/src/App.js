import React, { useState } from "react";
import Contador from "./components/Contador";
import "./App.css";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
const App = () => {
	const [canasta, setCanasta] = useState([]);

	const agregarCanasta = (id) => {

		let objProducto = productos.find(p => p.id === id);
		let copiaCanasta = [...canasta];
		// revisar si el producto ya existía en la canasta de productos
		let productoExistente = canasta.find(p => p.id === id);

		if (productoExistente) {
			copiaCanasta = copiaCanasta.map((p) => {
				if (p.id === id) {
					p.cantidad += 1;
					return p;
				} else {
					return p;
				}
			})
		} else {
			copiaCanasta.push({
				...objProducto,
				cantidad: 1
			});
		}
		setCanasta(copiaCanasta);
	};

	const eliminarProducto = (id) => {
		/**
		 * 1. obtener una copia de la canasta
		 * 2. en la copia de la canasta, filtrar todos los elementos con id diferente al que recibo
		 * por parámetros
		 * 3. finalmanete, actualizar la canasta con la función setCanasta, con los nuevos valores
		 * 4. no olvidar pasar como prop al Carrito, la función eliminarProducto
		 */
		let canastaCopia = [...canasta];
		canastaCopia = canastaCopia.filter(p => p.id !== id);
		setCanasta(canastaCopia)
	}

	const productos = [

		{ id: 2343, nombre: "Play Station 5", precio: 34454.38 },
		{ id: 542, nombre: "Laptopr Razer", precio: 7000.38 },
		{ id: 44, nombre: "Monitor LG", precio: 500 },
		{ id: 243, nombre: "Mouse gamer", precio: 80 },
	];

	console.log("Ejecutando componente App");
	return (
		<div>
			<Contador />
			<hr />
			<Productos productos={productos} agregarCanasta={agregarCanasta} />
			<Carrito canasta={canasta} eliminarProducto={eliminarProducto} />
		</div>
	);
};

export default App;
