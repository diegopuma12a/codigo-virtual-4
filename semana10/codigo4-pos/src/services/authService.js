
import { URL_BACKEND } from "./../environments/environmets"

export const postLogin = async (correo, password) => {

  const peticion = await fetch(`${URL_BACKEND}/login`, {
    method: "POST",
    body: JSON.stringify({
      correo: correo, password: password
    }),
    headers: {
      "Content-type": "application/json"
    }
  });

  const data = await peticion.json();
  return data;

}

export const verificarToken = async (token) => {
  const peticion = await fetch(`${URL_BACKEND}/verificar`, {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`
    }
  });
  const data = await peticion.json();
  return data;
}