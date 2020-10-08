const formDetalle = document.getElementById("formDetalle");
const inputCantidad = document.getElementById("inputCantidad");
const selectDescripcion = document.getElementById("selectDescripcion");
const inputPUnitario = document.getElementById("inputPUnitario");
const inputPTotal = document.getElementById("inputPTotal");
const cuerpoTabla = document.getElementById("cuerpoTabla");
const btnGuardar = document.getElementById("btnGuardar");
const inputNombre = document.getElementById("inputNombre");
const inputRuc = document.getElementById("inputRuc");
const inputNro = document.getElementById("inputNro");
const inputDireccion = document.getElementById("inputDireccion");
const inputFecha = document.getElementById("inputFecha");
const formCabecera = document.getElementById("formCabecera");
let facturas = [];
let arregloDetalle = [];
let arregloProductos = [
  { id: 1, nombre: "Mouse Katana Gamer", precio: 100.0 },
  { id: 2, nombre: "Cámara IP 1080p", precio: 52.0 },
  { id: 3, nombre: "USB 8GB", precio: 16.9 },
  { id: 4, nombre: "Tecla retroiluminadio HP", precio: 25.8 },
];

const llenarProductos = () => {
  arregloProductos.forEach((p) => {
    const option = document.createElement("option");
    option.value = p.id;
    option.innerText = p.nombre;
    selectDescripcion.appendChild(option);
  });
};
llenarProductos();

const getNombreProductoById = (id) => {
  const objProducto = arregloProductos.find((p) => {
    if (p.id === +id) {
      return p;
    }
  });
  return objProducto.nombre;
};

const getPrecioProductoById = (id) => {
  const objProducto = arregloProductos.find((p) => {
    if (p.id === +id) {
      return p;
    }
  });
  return objProducto.precio;
};

const redibujarTabla = () => {
  cuerpoTabla.innerHTML = "";
  arregloDetalle.forEach((detalle) => {
    let fila = document.createElement("tr");
    fila.innerHTML = `<td>${detalle.cant}</td>

                      <td>${getNombreProductoById(detalle.descripcion)}</td>
                      
                      <td>${detalle.pUnit}</td>
                      <td>${detalle.pTotal}</td>`;
    let tdEliminar = document.createElement("td");
    let botonEliminar = document.createElement("button");
    botonEliminar.classList.add("btn", "btn-danger");
    botonEliminar.innerText = "Eliminar";
    tdEliminar.appendChild(botonEliminar);
    fila.appendChild(tdEliminar);
    cuerpoTabla.appendChild(fila);
  });
};

formDetalle.onsubmit = (e) => {
  e.preventDefault();
  // Creando objeto detalle
  const objDetalle = {
    cant: inputCantidad.value,
    descripcion: selectDescripcion.value,
    pUnit: inputPUnitario.value,
    pTotal: inputPTotal.value,
  };
  arregloDetalle.push(objDetalle);
  console.log(arregloDetalle);
  redibujarTabla();
};

btnGuardar.onclick = () => {
  //crear el objeto de la cabecera de la factura
  let objFactura = {
    nombre: inputNombre.value,
    direccion: inputDireccion.value,
    fecha: inputFecha.value,
    nro: inputNro.value,
    ruc: inputRuc.value,
    detalle: arregloDetalle,
  };
  facturas.push(objFactura);
  // limpiar campos
  formCabecera.reset();
  formDetalle.reset();
  // guardarlo en el localStorage
  localStorage.setItem("facturas", JSON.stringify(facturas));
};

selectDescripcion.onchange = () => {
  if (selectDescripcion.value == "0") {
    formDetalle.reset();
    return;
  }

  const precio = getPrecioProductoById(selectDescripcion.value);

  if (precio) {
    inputPUnitario.value = precio;
  }
};
