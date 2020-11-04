import { URL_BACKEND } from "../environments/environmets"

export const getCategorias = async () => {
  const peticion = await fetch(`${URL_BACKEND}/categoria`);
  const data = await peticion.json();
  return data;
}