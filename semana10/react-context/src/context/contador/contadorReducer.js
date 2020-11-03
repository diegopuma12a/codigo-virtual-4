/**
 * ContadoReducer es una función de tipo !reducer! que lo que hace
 * es recibir 2 parámetros:
 * @param {*} estadoActual el state actual
 * @param {*} action la data que me envía la función
 * que intenta modificar el state (en este caso "dispatch"),
 * 
 * COMENTARIO: El reducer es quien toma la decisión de modificar o no una
 * variable de estado
 * 
 * IMPORTANTE:
 * Cualquier cosa que retorne el reducer, será el nuevo state
 * de la aplicación.
 */

const ContadorReducer = (estadoActual, action) => {
  if (action.type === "SUMAR") {
    return estadoActual + 1;
  }
  if (action.type === "RESTAR") {
    return estadoActual - 1;
  }
  return estadoActual;
}
export default ContadorReducer;