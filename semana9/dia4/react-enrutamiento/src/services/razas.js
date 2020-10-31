import { URL_BACKEND } from "../environments/environments"

export const getRazaById = async (raza_id) => {

  const peticion = await fetch(`${URL_BACKEND}/raza/${raza_id}`);
  const data = await peticion.json();
  return data;
  
}