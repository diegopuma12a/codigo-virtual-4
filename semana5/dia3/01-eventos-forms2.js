const mensaje = document.getElementById("mensaje");
const pais = document.getElementById("pais");
const helper = document.getElementById("helper");
/**
 * Todos estos eventos se dan con el uso del teclado
 * onkeyup = Evento que se dispara cuando una tecla es soltada luego de presionarla
 *
 * onkeydown = Evento que se dispara cuando una tecla presionada
 * onkeypress = la union de ambos eventos
 */

mensaje.onkeyup = (evento) => {
  if (mensaje.value.length >= 130) {
    mensaje.value = mensaje.value.substr(0, 130);
  }

  const cantidad = 130 - mensaje.value.length;
  helper.innerText = `${cantidad} caracteres`;
};

/**
 * onchange
 * Función que se ejecuta cada vez que un elemento cambiar de valor
 */

pais.onchange = (evento) => {
  console.log(evento);

  console.log(pais.value);

  // pais.childNodes[pais.selectedItem]
};
