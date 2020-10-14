import { URL_BACKEND } from "./variables.js";

const tbodyRazas = document.getElementById("tbody-razas");
let razas = [];

const dibujarTabla = () => {
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
