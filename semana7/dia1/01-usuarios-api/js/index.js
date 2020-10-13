const tablaCargando = document.getElementById("tabla-cargando");
const tablaCuerpo = document.getElementById("tabla-cuerpo");
const cargando = document.getElementById("cargando");
const btnAnterior = document.getElementById("btnAnterior");
const btnSiguiente = document.getElementById("btnSiguiente");
const endpoint = "https://reqres.in/api/users";
let page = 1;
let usuarios = [];

const dijubarTabla = () => {
  let cadena = "";
  usuarios.forEach((usu) => {
    cadena += `<tr>
                  <td>${usu.id}</td>
                  <td>${usu.email}</td>
                  <td>${usu.first_name}</td>
                  <td>${usu.last_name}</td>
                  <td>
                    <img src="${usu.avatar}" />
                  </td>
                </tr>`;
  });
  tablaCuerpo.innerHTML = cadena;
};

/**
 * Función que trae los datos del endpoint
 */
const getData = () => {
  // TO DO: colocar el texto o el efecto cargando...
  cargando.removeAttribute("hidden");
  // TO DO: ocultar la tabla
  tablaCargando.setAttribute("hidden", true);

  fetch(`${endpoint}?page=${page}`).then((response) => {
    response.json().then((data) => {
      usuarios = data.data;

      dijubarTabla();

      // TO DO: Mostrar la tabla
      tablaCargando.removeAttribute("hidden");
      // TO DO: borrar el efecto cargando...
      cargando.setAttribute("hidden", true);
    });
  });
};

getData();

btnSiguiente.onclick = () => {
  page += 1;
  getData();
};
btnAnterior.onclick = () => {
  if (page === 1) {
    return;
  }
  page -= 1;
  getData();
};
