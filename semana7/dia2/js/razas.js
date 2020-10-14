import { URL_BACKEND } from "./variables.js";
import { postRaza } from "./services/raza-service.js";
const tbodyRazas = document.getElementById("tbody-razas");
const formRaza = document.getElementById("formRaza");
const inputNombre = document.getElementById("inputNombre");

let razas = [];

const getRazas = () => {
  fetch(`${URL_BACKEND}/raza`).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
      razas = [...data];
      dibujarTabla();
    });
  });
};
getRazas();

formRaza.onsubmit = (e) => {
  e.preventDefault();
  // TO DO: Validar el formulario
  let objRaza = {
    raza_nombre: inputNombre.value.trim(),
  };
  postRaza(objRaza).then((peticion) => {
    peticion.json().then((data) => {
      console.log(data);
      getRazas();
    });
  });
};

const dibujarTabla = () => {
  tbodyRazas.innerHTML = "";

  razas.forEach((raza) => {
    let tr = document.createElement("tr");
    tr.innerHTML = `<td>${raza.raza_id}</td>
                    <td>${raza.raza_nombre}</td>`;
    let tdBotones = document.createElement("td");

    let btnEditar = document.createElement("button");
    btnEditar.classList.add("btn", "btn-warning", "mr-2");
    btnEditar.innerText = "Editar";

    let btnEliminar = document.createElement("button");
    btnEliminar.classList.add("btn", "btn-danger");
    btnEliminar.innerText = "Eliminar";

    tdBotones.appendChild(btnEditar);
    tdBotones.appendChild(btnEliminar);

    tr.appendChild(tdBotones);
    tbodyRazas.appendChild(tr);
  });
};
