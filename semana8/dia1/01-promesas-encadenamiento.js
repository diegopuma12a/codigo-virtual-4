/**
 * Encadenar promesas con la finalidad de que el código,
 * no crezca indentado a la derecha
 * NOTA: Ocurre cuando consumo más de una promesa a la vez
 */

const encadenarPromesas = () => {
  fetch("https://reqres.in/api/users?page=2")
    .then((peticion) => {
      return peticion.json();
    })
    .then((data) => {
      console.log(data);
    });
};

encadenarPromesas();
