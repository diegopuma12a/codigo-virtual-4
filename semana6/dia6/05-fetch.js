/**
 * fetch es una función que consume datos de un endpoint
 * que es pasado como parámetro.
 * La función fetch, retorna una promesa cuando el resultado
 * está listo para mostrar
 */

fetch("https://reqres.in/api/users").then((peticion) => {

  console.log(peticion);

  peticion.json().then((json) => {
    console.log(json);
  });
});
