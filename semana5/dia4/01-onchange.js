let paises = [
  { id: 1, nombre: "Perú" },
  { id: 2, nombre: "Bolivia" },
  { id: 3, nombre: "Chile" },
  { id: 4, nombre: "Argentina" },
];
let departamentos = [
  { id: 1, nombre: "Lima", paisId: 1 },
  { id: 2, nombre: "Arequipa", paisId: 1 },
  { id: 3, nombre: "Puno", paisId: 1 },
  { id: 4, nombre: "La Paz", paisId: 2 },
  { id: 5, nombre: "Cochabamba", paisId: 2 },
  { id: 6, nombre: "Santa Cruz", paisId: 2 },
];

const selectPais = document.getElementById("selectPais");
const selectDpto = document.getElementById("selectDpto");

const llenarDptosPorIdPais = (id) => {
  selectDpto.innerHTML = "<option value='0'>-- Seleccione --</option>";
  const dptosFiltrados = departamentos.filter((dpto) => {
    if (id === dpto.paisId) {
      return dpto;
    }
  });
  dptosFiltrados.forEach((dpto) => {
    const option = document.createElement("option");
    option.innerText = dpto.nombre;
    option.value = dpto.id;
    selectDpto.appendChild(option);
  });
};

const llenarPaises = () => {
  let options = `<option value="0"> --Seleccione-- </option>`;
  paises.forEach((pais) => {
    options += `<option value="${pais.id}">${pais.nombre}</option>`;
  });
  selectPais.innerHTML = options;
};
llenarPaises();

selectPais.onchange = () => {
  let id = +selectPais.value;
  llenarDptosPorIdPais(id);
};

//----convertir un string a numero------
// let numero = "2";
// let copia = +numero;
// let copia = parseInt(numero);


