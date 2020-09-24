// debugger;
const areaCirculo = (r) => {
  const PI = 3.1416;

  const cuadrado = (n) => {
    return n * n;
  };

  return PI * cuadrado(r);
};

console.log(areaCirculo(15));
