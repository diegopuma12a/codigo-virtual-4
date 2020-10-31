import { URL_BACKEND } from "../environments/environments"

export const getTipoById = async (tipo_id) => {

  const peticion = await fetch(`${URL_BACKEND}/tipo/${tipo_id}`);
  const data = await peticion.json();
  return data;

}