import axios from "axios";
import { URL_BACKEND } from "../environments/environments";

export const getMascotas = async () => {
  const resultado = await axios.get(`${URL_BACKEND}/mascota`);
  return resultado.data;
}