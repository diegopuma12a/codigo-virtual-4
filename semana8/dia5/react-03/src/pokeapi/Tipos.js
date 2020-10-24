import React, { useEffect, useState } from 'react'
import { URL_BACKEND } from './../environments/environments';

const Tipos = ({ modificarUrl, url }) => {

	console.log("Mostrando componente TIPOS");
	const [types, setTypes] = useState([]);
	const getTipos = async () => {
		console.log("ejecutando llamada asincrona en función getTipos");
		const peticion = await fetch(`${URL_BACKEND}/type`);
		const data = await peticion.json();
		setTypes(data.results);
	}
	useEffect(() => {
		console.log("Ejecutando efecto");
		getTipos();
	}, []);
	console.log("Antes de mostrar la vista");
	return (
		<aside className="col-md-2 tipos">
			{
				types.map((tipo) => {

					let clase = tipo.url === url ?
						"tipos__tipo text-center mb-2 px-3 py-3 active" :
						"tipos__tipo text-center mb-2 px-3 py-3";
					return (
						<div className={clase}
							key={tipo.name}
							onClick={() => {
								modificarUrl(tipo.url);
							}}>
							{tipo.name}
						</div>
					)
				})
			}
		</aside>
	)
}
export default Tipos
