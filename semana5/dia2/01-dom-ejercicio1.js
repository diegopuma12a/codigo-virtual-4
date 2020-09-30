const navLista = document.getElementById("navLista");
const tbody = document.getElementById("tbody");

const links = ["Nosotros", "Proyetos", "Contacto", "Anuncios"];
const usuarios = [
  {
    id: 7,
    email: "michael.lawson@reqres.in",
    first_name: "Michael",
    last_name: "Lawson",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg",
  },
  {
    id: 8,
    email: "lindsay.ferguson@reqres.in",
    first_name: "Lindsay",
    last_name: "Ferguson",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg",
  },
  {
    id: 9,
    email: "tobias.funke@reqres.in",
    first_name: "Tobias",
    last_name: "Funke",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg",
  },
  {
    id: 10,
    email: "byron.fields@reqres.in",
    first_name: "Byron",
    last_name: "Fields",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg",
  },
  {
    id: 11,
    email: "george.edwards@reqres.in",
    first_name: "George",
    last_name: "Edwards",
    avatar: "https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg",
  },
  {
    id: 12,
    email: "rachel.howell@reqres.in",
    first_name: "Rachel",
    last_name: "Howell",
    avatar:
      "https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg",
  },
];
/**
 * Función que agrega mediante un string
 * todos los links de la lista
 */
const llenarLinks = () => {
  let stringLinks = "";
  links.forEach((link) => {
    stringLinks = stringLinks + `<li><a href="#">${link}</a></li>`;
  });
  navLista.innerHTML = stringLinks;
};
llenarLinks();

const llenarUsuarios = () => {
  //1. Crear el string vacío
  let filas = "";
  //2. Recorrer el arreglo de usuarios con un forEach
  usuarios.forEach((usu)=>{
    //3. en cada iteración sumar al string del paso 1
    //   un tr con 5 td's con la data del objeto usuario
    filas = filas + `<tr>
                        <td class="borde">${usu.id}</td>
                        <td class="borde">${usu.email}</td>
                        <td class="borde">${usu.first_name}</td>
                        <td class="borde">${usu.last_name}</td>
                        <td class="borde">
                          <img src="${usu.avatar}" alt="foto del usuario"/>
                        </td>
                        <td class="borde">
                          <button>Eliminar</button>
                        </td>
                      </tr>`;
  })
  //4. luego de todas iteraciones, hacer un innerHTML con el
  //   string creado
  tbody.innerHTML = filas;
};
llenarUsuarios();

// con un iterador recorrer los links y llenar el navLista
