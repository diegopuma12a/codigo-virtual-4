import { URL_BACKEND } from "../environments/environmets"

export const getPlatos = async () => {
  const peticion = await fetch(`${URL_BACKEND}/plato`);
  const data = await peticion.json();
  return data;
}