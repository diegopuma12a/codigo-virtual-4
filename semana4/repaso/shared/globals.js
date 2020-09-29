/**
 *
 * @param {String} message el mensaje
 * @param {String} background color de fondo del texto
 * @param {String} color color del texto
 * @param {String} tamanio tamaño del texto
 */

function message(
  message,
  background = "green",
  color = "white",
  tamanio = "x-large"
) {
  console.log(
    `%c${message}`,
    `background:${background};color:${color};font-size:${tamanio}`
  );
}
