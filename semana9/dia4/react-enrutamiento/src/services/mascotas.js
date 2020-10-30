import { URL_BACKEND } from "../environments/environments"


export const getMascotas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/mascota`);
  const data = await peticion.json();
  return data;
}