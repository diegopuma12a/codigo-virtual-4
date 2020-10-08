const btnAnterior = document.getElementById("btnAnterior");
const btnPause = document.getElementById("btnPause");
const btnSiguiente = document.getElementById("btnSiguiente");
const btnIr3 = document.getElementById("btnIr3");
const btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = () => {
  $("#carouselId").carousel("cycle");
};
btnAnterior.onclick = () => {
  $("#carouselId").carousel("prev");
};
btnPause.onclick = () => {
  $("#carouselId").carousel("pause");
};
btnSiguiente.onclick = () => {
  $("#carouselId").carousel("next");
};
btnIr3.onclick = () => {
  $("#carouselId").carousel(2);
};



// slider.onmouseover = ()=>{
//   $("slider").carouse("pause");
// }

// slider.onmouseout = ()=>{
//   $("slider").carouse("cycle");
// }