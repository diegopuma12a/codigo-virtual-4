
import { URL_BACKEND } from "./../environments/environmets";

export const getMesas = async () => {
  const peticion = await fetch(`${URL_BACKEND}/mesa`);
  const data = await peticion.json();
  return data;
}