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
