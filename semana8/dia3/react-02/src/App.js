import React, { useState } from "react";
import Contador from "./components/Contador";
import "./App.css";
import Productos from "./components/Productos";
import Carrito from "./components/Carrito";
const App = () => {
	const [canasta, setCanasta] = useState([]);

	const agregarCanasta = (id) => {
		console.log("Agregando a canasta");
		console.log(`ID : ${id}`);
		let objProducto = productos.find(p => p.id === id);
		console.log(objProducto);

		let copiaCanasta = [...canasta];
		copiaCanasta.push(objProducto);

		setCanasta(copiaCanasta);
	};

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
			<Carrito canasta={canasta} />
		</div>
	);
};

export default App;
