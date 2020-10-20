/**
 * las funciones async (asíncronas) tienen la posibilidad
 * de hacer síncroas varías tareas asíncronas en su interior
 */
/**
 * Toda función async (asíncrona) en su apartado "return", retorna
 * una promesa
 */
/**
 * Si deseamos usar la palabra reservada "await", la función contenedora
 * debe ser "async"(asincrona).
 */
const getUsuarios = async () => {
  const peticion = await fetch("https://reqres.in/api/users?page=2");
  const data = await peticion.json();
  return data;
};
getUsuarios().then((rpta) => {
  console.log(rpta);
});

//////////////////
/**
 * Función asíncrona que retorna la información
 * de los N primeros pokemones de la API DE POKEMON
 * @param {number} n es el número de pokemones a buscar
 */
const getPokemones = async (n) => {
  const URL_BACKEND = "https://pokeapi.co/api/v2/pokemon";
  let pokemones = [];
  for (let i = 1; i <= n; i++) {
    const peticion = await fetch(`${URL_BACKEND}/${i}`);
    const data = await peticion.json();
    pokemones.push(data.name);
  }
  return pokemones;
};

console.log(1);

getPokemones(15).then((rpta) => {
  console.log(rpta);
  console.log(2);
});

console.log(3);