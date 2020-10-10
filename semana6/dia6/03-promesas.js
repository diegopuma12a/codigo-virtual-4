/**
 * Una promesa es un objeto que sirve para esperar
 * a que termine un proceso asíncrono, y depende de la respuesta
 * del proceso asíncrono de cómo se resuelva la promesa
 */

// Creando una promesa

const miPromesa = new Promise((resolve, reject) => {
  setTimeout(() => {
    let x = 100;

    // yo necesito retornar el valor de x
    // resolve(x);

    if (x % 2 === 0) {
      resolve(x);
    } else {
      reject("error, no es par");
    }
    // resolve sirve para transmitir un valor a través de la promesa
    // luego de que un proceso asíncrono se haya ejecutado
  }, 3000);
});

// ejecutando una promesa
// then se ejecuta cuando la promesa invoca a la función resolve
// y en un callback recibo la respuesta
miPromesa
  .then((respuesta) => {
    console.log(respuesta);
  })
  .catch((error) => {
    console.log(error);
  });
