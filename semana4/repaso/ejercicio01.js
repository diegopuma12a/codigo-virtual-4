// Ejercicio 01 => Traer los usuarios activos

let usuariosActivos = users.filter((user)=>{
    return user.active === true
})

let usuariosActivos2 = users.filter((user) => user.active === true)

message('Ejercicio 1 :')
console.table(usuariosActivos)



//repaso callbacks Ejemplo
// console.table(users)

// function sum(a, b) {
//   return a + b;
// }


// function sum2(a, b, f) {
//     f(a + b);
// }
// console.log(sum(1, 3));

// sum2(1, 2, (value) => {
//   console.log(value);
// });


