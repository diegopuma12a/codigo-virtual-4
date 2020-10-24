/**
 * Creando una función exportable individualmente
 */

export const Persona = (nombre, edad, apellido, dni) => {
  return {
    nombre: nombre,
    edad: edad,
    apellido: apellido,
    dni: dni,
    // la palabra reservada "this" hace referencia al objeto en el que 
    // es usado, y con ella se puede acceder a los diferentes atributos
    // que tiene el objeto
    asignarEdad: function (nuevaEdad) {
      this.edad = nuevaEdad;
    }
  }
}