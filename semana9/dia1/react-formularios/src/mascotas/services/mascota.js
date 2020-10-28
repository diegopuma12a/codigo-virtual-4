import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getMascotas = async () => {
  const resultado = await axios.get(`${URL_BACKEND}/mascota`);
  return resultado.data;
}

export const postMascota = async (objMascota) => {

  // const peticion = await fetch(`${URL_BACKEND}/mascota`, {
  //   method: "POST",
  //   body: JSON.stringify(objMascota),
  //   headers: {
  //     "Content-type": "application/json"
  //   }
  // });
  // El código de arriba, es la misma petición sin usar AXIOS

  const resultado = await axios.post(`${URL_BACKEND}/mascota`,
    JSON.stringify(objMascota), {
    headers: {
      "Content-type": "application/json"
    }
  });
  return resultado.data;
}