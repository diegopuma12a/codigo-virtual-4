/**
 * Importando variables que han sido exportadas
 * individualmente
 * NOTA: se usa {} cuando las variables son exportadas individualmente
 */

import { URL_BACKEND, API_KEY } from "./variables.js";

/**
 * Importando un elemento por defecto del archivo funciones.js
 * NOTA: los elementos exportados como "default" no llevan el signo {}
 * NOTA: pueden ser recibidos con cualquier nombre
 */
import funcionDespedida, { saludar } from "./funciones.js";

/**
 * Importando una función exportada individualmente asignándole un nuevo
 * nombre
 */

import { Persona as construirPersona } from "./Persona.js"

let objPersona = construirPersona("Jorgito", 29, "Garnica", "01020304");
console.log(objPersona);

objPersona.asignarEdad(19);
console.log(objPersona);






console.log(URL_BACKEND);
console.log(API_KEY);

saludar();
funcionDespedida();