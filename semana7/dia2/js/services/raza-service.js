import { URL_BACKEND } from "./../variables.js";
export const postRaza = (objRaza) => {
  return fetch(`${URL_BACKEND}/raza`, {
    method: "POST",
    body: JSON.stringify(objRaza),
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const putRaza = (objRaza) => {
  let objRazaNuevo = {
    raza_nombre: objRaza.raza_nombre,
  };

  return fetch(`${URL_BACKEND}/raza/${objRaza.raza_id}`, {
    method: "PUT",
    body: JSON.stringify(objRazaNuevo),
    headers: {
      "Content-type": "Application/json",
    },
  });
};
