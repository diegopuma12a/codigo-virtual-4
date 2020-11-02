import { URL_BACKEND } from "../environments/environments"

export const postCita = async (objCita) => {

  const peticion = await fetch(`${URL_BACKEND}/cita`, {
    method: "POST",
    body: JSON.stringify(objCita),
    headers: {
      "Content-type": "application/json"
    }
  });
  const data = await peticion.json();
  return data;
}