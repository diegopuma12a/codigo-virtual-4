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

const verificarFacturasLocalStorage = () => {
  const facturasLS = JSON.parse(localStorage.getItem("facturas"));
  // if (facturasLS) {
  //   facturas = facturasLS;
  // }

  // forma 2

  facturas = facturasLS || [];
};
verificarFacturasLocalStorage();

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
    botonEliminar.onclick = () => {
      eliminarDetalleById(detalle.descripcion);
    };

    tdEliminar.appendChild(botonEliminar);
    fila.appendChild(tdEliminar);
    cuerpoTabla.appendChild(fila);
  });
};

const eliminarDetalleById = (id) => {
  arregloDetalle = arregloDetalle.filter((detalle) => {
    if (+id !== +detalle.descripcion) {
      return detalle;
    }
  });
  redibujarTabla();
};

const agregarDetalle = (objDetalle) => {
  // buscar si el objeto detalle ya existía en el arregloDetalle
  // de ser así, sumar las cantidad para sólo aparezca una vez en el arreglo

  const resultado = arregloDetalle.find((detalle) => {
    if (+objDetalle.descripcion === +detalle.descripcion) {
      return detalle;
    }
  });

  if (resultado) {
    arregloDetalle = arregloDetalle.map((detalle) => {
      if (+detalle.descripcion === +objDetalle.descripcion) {
        return {
          cant: +detalle.cant + +objDetalle.cant,
          descripcion: detalle.descripcion,
          pTotal: (+detalle.cant + +objDetalle.cant) * +detalle.pUnit,
          pUnit: +detalle.pUnit,
        };
      }
      return detalle;
    });
  } else {
    arregloDetalle.push(objDetalle);
  }
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

  agregarDetalle(objDetalle);

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
  //borrar la tabla del tbody
  arregloDetalle = [];
  redibujarTabla();
};

selectDescripcion.onchange = () => {
  if (selectDescripcion.value == "0") {
    formDetalle.reset();
    return;
  }

  const precio = getPrecioProductoById(selectDescripcion.value);

  if (precio) {
    inputPUnitario.value = precio;
    calcularTotal();
  }
};

const calcularTotal = () => {
  const cantidad = +inputCantidad.value;
  const pUnit = +inputPUnitario.value;
  const total = cantidad * pUnit;
  inputPTotal.value = total.toFixed(2);
};

inputCantidad.onkeyup = () => {
  calcularTotal();
};
inputCantidad.onchange = () => {
  calcularTotal();
};
