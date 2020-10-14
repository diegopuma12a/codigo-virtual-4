let iconURL = "http://openweathermap.org/img/wn/";
let endpoint =
  "https://api.openweathermap.org/data/2.5/weather?appid=f216cdc5ffb3839b7ebdb07394220bc1&units=metric&q=";

const formBusqueda = document.getElementById("formBusqueda");
const inputBusqueda = document.getElementById("inputBusqueda");
const infoCiudad = document.getElementById("infoCiudad");
const infoImagen = document.getElementById("infoImagen");
const infoTemp = document.getElementById("infoTemp");
const infoTempMin = document.getElementById("infoTempMin");
const infoTempMax = document.getElementById("infoTempMax");
const cargando = document.getElementById("cargando");

// const setInfo = ({ main: { temp, temp_min, temp_max }, weather: [{icon}] }) => {
const setInfo = (data) => {
  const icono = data.weather[0].icon;
  infoImagen.src = `${iconURL}${icono}@4x.png`;
  infoTemp.innerText = data.main.temp;
  infoTempMin.innerText = data.main.temp_min;
  infoTempMax.innerText = data.main.temp_max;
  infoCiudad.innerText = data.name;
};

const getClima = () => {
  const busqueda = inputBusqueda.value.trim();
  // TO DO: Colocar pantalla cargando
  fetch(`${endpoint}${busqueda}`).then((response) => {
    response.json().then((data) => {
      console.log(data);
      if (data.cod !== 200) {
        Swal.fire({
          position: "top-end",
          icon: "error",
          title: "Ups!",
          text: "Ciudad no encontrada",
          timer: 1500,
          showConfirmButton: false,
        });
      } else {
        setInfo(data);
      }
      cargando.setAttribute("hidden", true);
    });
  });
};

formBusqueda.onsubmit = (e) => {
  e.preventDefault();
  cargando.removeAttribute("hidden");
  // TO DO: Validar que el input de búsqueda tenga texto interno.
  getClima();
};
