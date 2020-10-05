const formulario = document.getElementById("formulario");
const link = document.getElementById("link");
const inputNombre = document.getElementById("inputNombre");
const inputApellido = document.getElementById("inputApellido");
const tbody = document.getElementById("tbody");
const helper = document.getElementById("helper");

let usuarios = [];

const limpiarErrores = () => {
  // quitar el estilo del brode roojo al formulario

  formulario.classList.remove("borde-rojo");

  // ocultar el small (helper)
  helper.setAttribute("hidden", true);

  // OJO, si el helper ya estaba oculto, que lo oculte nuevamente
  // no va generar ningún error en el sistema
};
const generarError = () => {
  // va a hacer mostrar el texto de error
  // elemento.removeAttribute("atributo"), eliminar un atributo de un elemento
  helper.removeAttribute("hidden");
  // le va a colocar el borde rojo al formulario
  formulario.classList.add("borde-rojo");
};
const eliminarUsuario = (posicion) => {
  console.log("Eliminando " + posicion);

  usuarios = usuarios.filter((usu, i) => {
    if (i !== posicion) {
      return usu;
    }
  });

  redibujarTbody();
};
const redibujarTbody = () => {
  /**
   *  1. Limpiar el tbody (borrar todo el innerHTML del tbody)
   *     tbody.innerHTML = "";
   *  2. Crear una variable string vacía
   *  3. Recorrer el arreglo de usuarios (ejm forEach)
   *  4. En el forEach ir agregando al string vacío la estructura
   *     de la fila por cada usuario (concatenar STRINGS)
   *  5. Luego del forEach ó for, settear el innerHTML del tbody
   *     con el string creado
   *  6. Reto: darle estilos a las tablas
   */
  tbody.innerHTML = "";

  // <> </>
  let tbodyFalso = new DocumentFragment();

  usuarios.forEach((usu, i) => {
    let tr = document.createElement("tr");

    let tdNro = document.createElement("td");
    tdNro.innerText = i + 1;

    let tdNombre = document.createElement("td");
    tdNombre.innerText = usu.nombre;

    let tdApellido = document.createElement("td");
    tdApellido.innerText = usu.apellido;

    let tdAcciones = document.createElement("td");
    let btnEliminar = document.createElement("button");
    btnEliminar.innerText = "Eliminar";
    btnEliminar.onclick = () => {
      console.log("se hizo click en eliminar");
      console.log(`Elimando el registro de: ${usu.nombre}`);
      eliminarUsuario(i);
    };

    tdAcciones.appendChild(btnEliminar);

    tr.appendChild(tdNro);
    tr.appendChild(tdNombre);
    tr.appendChild(tdApellido);
    tr.appendChild(tdAcciones);

    tbodyFalso.appendChild(tr);
  });

  tbody.appendChild(tbodyFalso);

  // aquí guardaremos a todos los usuarios en el localStorage
  // JSON = es una clase (tipo Math) que sirve para trabajar
  // con estrucutras JSON, las convierte a string y también
  // convierte de un string a un objeto JSON
  // 1. convirtiendo un arreglo de objetos a un string
  const usuariosString = JSON.stringify(usuarios);
  console.log(usuariosString);
  // 2. guardar los usuarios string en el localstorage
  localStorage.setItem("usuarios", usuariosString);

  // colocar el cursor nuevamente en el campo del nombre para que el usaurio
  // esté listo para ingresar un siguiente registro
  inputNombre.focus();
};
/**
 * form.onsubmit = evento que se desencadena cuando queremos
 * procesar o enviar el formulario
 */
formulario.addEventListener("submit", (evento) => {
  /**
   * ¿Por qué se actualiza la página con el submit?
   * Porque es el comportamiento por defecto de dicho evento
   * ¿Cómo detener el comporatmiento por defecto de un evento?
   * evento.preventDefault();
   */
  evento.preventDefault();
  console.log("Procesando el formulario...");

  // validar si los campos están llenos
  if (inputNombre.value.trim() === "" || inputApellido.value.trim() === "") {
    // indicar un error de ingreso de datos

    generarError();

    return;
  }

  let objUsuario = {
    nombre: inputNombre.value,
    apellido: inputApellido.value,
  };

  usuarios.push(objUsuario);
  // limpiar los campos del formulario
  inputNombre.value = "";
  inputApellido.value = "";

  // limpiar los errores
  // OJO, si no tenían errores previamente, no importa, igual no afecta
  // los estilos de la aplicación
  limpiarErrores();

  console.log(usuarios);
  //RETO: llamar a una función que redibuje el tbody cada vez
  // que nuestro arreglo de usuarios es alterado (cambia de elementos)
  redibujarTbody();
});
link.onclick = (evento) => {
  evento.preventDefault();
  console.log("Dieron clic al hipervinculo");
};

const verificarStorage = () => {
  // funcion que verifica si tenemos usuarios en el localstorge
  // para settear el arreglo de usuarios
  const usuariosStorage = localStorage.getItem("usuarios");
  if (usuariosStorage !== null) {
    // que sí existe la clave "usuarios"
    // 1. convertir un STRING a un objeto JSON
    usuarios = JSON.parse(usuariosStorage);
    console.log(usuarios);
    redibujarTbody();
  }
};
verificarStorage();

