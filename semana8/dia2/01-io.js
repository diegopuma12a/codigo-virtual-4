const seccion6 = document.getElementById("seccion-6");
const seccion7 = document.getElementById("seccion-7");

let io = new IntersectionObserver(
  (entries) => {
    console.log(entries);
  },
  {
    threshold: [1],
  }
);

io.observe(seccion6);
io.observe(seccion7);
