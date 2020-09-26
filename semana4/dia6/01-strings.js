/**
 * Los strings y sus propiedades
 */
let frase = "Mas sabe el diablo por diablo viejo diablo que por diablo";
console.log(frase);

console.log("*******************");
/**
 * string.length
 * obtiene el tamaño de caracteres que tiene una cadena
 */
let longitud = frase.length;
console.log(`Longitud: ${longitud}`);

/**
 * string.toLowerCase()
 * retorna la misma cadena con todos sus caracteres en minúsculas
 * OJO: no transforma la cadena inicial
 */
console.log("*********************");
let enMinuscula = frase.toLowerCase();
console.log(`En minúsculas: `);
console.log(enMinuscula);
/**
 * string.toUpperCase()
 * retorna la misma cadena con todos sus caracteres en mayúsculas
 * OJO: no transforma la cadena inicial
 */
console.log("*********************");
let enMayuscula = frase.toUpperCase();
console.log(`En mayúscula`);
console.log(enMayuscula);
/**
 * string[posicion]
 * se puede manejar a un string como un arreglo
 * es decir, podemos acceder a sus posiciones
 * con un valor numérico
 */
console.log("*********************");
let posicion5 = frase[5];
console.log(`Posición 5: ${posicion5}`);

/**
 * string.substr(posicion_inicial, cantidad_de_caracteres)
 * retorna una sub-cadena desde la posicion_inicial, se cuenta una cantidad_de_caracteres
 * a la derecha
 */
console.log("**********************");
let subcadena = frase.substr(5, 2);
console.log(`Subcadena: ${subcadena}`);

/**
 * string.substring(posicion_inicial, posicion_final)
 * retorna una subcadena desde la posicion_inciial hasta un caracter antes de la
 * posicion_final
 */

console.log("*********************");
let subcadena2 = frase.substring(5, 10);
console.log(`Subcadena: substring(5,10)`);
console.log(subcadena2);

/**
 * string.includes("cadena");
 * retorna true si es que la cadena pasada por parámetros está dentro de la cadena
 * completa, y false, si la cadena no es parte de la frase completa
 */

console.log("****************************");
let existeDiablo = frase.includes("diablo");
console.log(`Inlcluye la palabra "diablo": ${existeDiablo}`);

/**
 * string.indexOf("cadena",opcional_posicion_inicial)
 * Retorna la posición en la que la "cadena" inicia dentro de la frase,
 * en caso de que no exista dicha sub-cadena, retorna -1
 * OPCIONALMENTE: si se envía un segundo parametro (opcional_posicion_inicial)
 * la subcadena se busca desde la posicón de dicho parametro
 */

console.log("**************************");
let posicionDiablo = frase.indexOf("diablo");
console.log(`Posición de la palabra "diablo": ${posicionDiablo}`);

const posicionesDeDiablo = () => {
  let posicionEncontrada = 0;
  while (true) {
    posicionEncontrada = frase.indexOf("diablo", posicionEncontrada);
    if (posicionEncontrada !== -1) {
      console.log(`Encontrado en posición: ${posicionEncontrada}`);
      posicionEncontrada++;
    } else {
      break;
    }
  }
};
posicionesDeDiablo();

const posicionesDeDiablo2 = () => {
  for (let pos = 0; pos < frase.length; pos++) {
    pos = frase.indexOf("diablo", pos);
    if (pos !== -1) {
      console.log(`Encontrado en la posición: ${pos}`);
    } else {
      break;
    }
  }
};
posicionesDeDiablo2();

/**
 * Función que imprime la cantidad de vocales de la frase
 * sin importar que sean mayuscuclas o minusculas
 */

/**
 * Función que imprime la cantidad de palabras que tenga una frase
 */

/**
 *Función que imprime si una frase es un palíndromo
 ¿qué es un palíndromo?
 una frase que se lee igual al derecho y al revés
 ejemplo:
  anita lava la tina (si consideramos qutiar los espacios en blanco, la frase se lee igual)
  radar
  amor a roma
  la ruta natural

  HINT:
  -- antes de cualqueiera de las dos formas, quitarle los espacios intermedios
  ¿cómo?
  recorrer toda la cadena e ir sumando letra a letra un nuevo string
  y cada vez que se encuentre un espacio en blanco, saltar a la sigueinte
  iteración

  forma 1: 
  - Recorrer toda la cadena de caracteres desde el final hasta el inicio,
    en cada iteración, ir sumando un string que incialmene esté vacío con 
    cada nuevo caracter. Al final de todas las iteraciones, comparar el 
    string original con el string creado en el ciclo for
  forma 2:
  - Recorrer toda la cadena de caracteres, desde el inicio hasta la mitad
  de la cadena y comparar en cada iteración por ejemplo lo siguiente:
  Iteración 1:
  posición 0 con posición length-0
  Iteración 2:
  posición 1 con posición length-1
  Iteración 3:
  posición 2 con posición lentgh-2
  y así sucesivamente... en cada iteración deben de compararse que ambos
  caracteres son iguales.
*/

/**
 * string.trim()
 * retorna la misma cadena sin incluir los espacios en blanco
 * TANTO AL FINAL COMO AL INICIO
 * NO LOS ESPACIOS INTERMEDIOS
 * */

let frase2 = "  cualquier frase interna ";
console.log(frase2);
console.log(`${frase2.trim()}`);

// string.chartAt(9)
// string[9]
