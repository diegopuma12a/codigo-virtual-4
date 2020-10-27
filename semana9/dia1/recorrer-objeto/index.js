let objProducto = {
  nombre: "Smartphone",
  marca: "Xiaomi",
  modelo: "Mate 10 pro",
  caracteristicas: {
    color: "Azul",
    imei: "1520215651325",
    ram: "6gb",
    memoria: "128gb"
  }
}

for (const clave in objProducto) {
  
  let claveMostrar = clave.charAt(0).toUpperCase() + clave.substring(1);

  console.log(claveMostrar + " " + objProducto[clave]);
}
