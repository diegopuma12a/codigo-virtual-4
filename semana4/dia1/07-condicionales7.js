let sueldoSemanal = 0;
let horasTrabajadas = 42;
let pagoPorHora = 35;

if (horasTrabajadas > 40) {
  sueldoSemanal = 40 * pagoPorHora + (horasTrabajadas - 40) * 2 * pagoPorHora;
} else {
  sueldoSemanal = horasTrabajadas * pagoPorHora;
}

console.log(`Total a pagar ${sueldoSemanal} por la semana cumplida 💰💰`);
