/**
 * Creando una función exportable individualmente
 */
export const saludar = () => {
  console.log("Hola bienvenidos a todos!");
}

const despedida = () => {
  console.log("Este es un mensaje de despedida");
}

/**
 * export default exporta un elemento (ejm. variable, clase, funcion, etc)
 * que cuando sea importado en otro archivo, puede ser renombrado
 * NOTA: sólo puede haber un "export default" por cada archivo
 */
export default despedida;