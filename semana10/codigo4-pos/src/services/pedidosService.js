import { URL_BACKEND } from "./../environments/environmets";

export const postPedido = async (objPedido) => {
  const peticion = await fetch(`${URL_BACKEND}/pedido`, {
    method: "POST",
    headers: {
      "Content-type": "application/json"
    },
    body: JSON.stringify(objPedido)
  });
  const data = await peticion.json();
  return data;
}