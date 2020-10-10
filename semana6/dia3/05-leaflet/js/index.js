const btnMarkerArequipa = document.getElementById("btnMarkerArequipa");
const btnMarkerArequipaEliminar = document.getElementById(
  "btnMarkerArequipaEliminar"
);
const btnPolylineArequipa = document.getElementById("btnPolylineArequipa");
const btnEnfocarPuno = document.getElementById("btnEnfocarPuno");

let markerArequipa;

let mymap = L.map("mapid").setView([-16.409046, -71.537453], 13);

L.tileLayer(
  "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw",
  {
    attribution:
      'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: "mapbox/streets-v11",
    tileSize: 512,
    zoomOffset: -1,
    accessToken:
      "pk.eyJ1Ijoiam9yZ2VnYXJiYSIsImEiOiJja2FuNWQzeHAwZTlvMnlybWZ5emxta2NsIn0.LPjKqyhLy6KFxFLTKcRNWw",
  }
).addTo(mymap);

// metodo click en el mapa
mymap.on("click", (e) => {
  // colocar un marcador nuevo cada vez que se haga click en el mapa
  const marcador = L.marker([e.latlng.lat, e.latlng.lng]).addTo(mymap);
  // contextmenu es el evento del click derecho o anticlick
  marcador.on("contextmenu", () => {
    console.log("click derecho en un marcador");
    mymap.removeLayer(marcador);
  });
});

// navigator.geolocation.

btnMarkerArequipa.onclick = () => {
  // crear un ícono para colocarlo en el marcador
  let iconoDelivery = L.icon({
    iconUrl: "./img/delivery.svg",
    iconSize: [32, 32],
  });

  // colocar un marcador situado en Arequipa
  markerArequipa = L.marker([-16.409046, -71.537453], {
    icon: iconoDelivery,
  }).addTo(mymap);
};

btnMarkerArequipaEliminar.onclick = () => {
  // eliminar un marcador del mapa teniendo su referencia
  mymap.removeLayer(markerArequipa);
};

btnPolylineArequipa.onclick = () => {
  // dibujar una ruta en Arequipa
  let rutaArequipa = [
    [-16.41614133217009, -71.53874158859254],
    [-16.415873753803165, -71.53822660446168],
    [-16.41638832725895, -71.5379047393799],
    [-16.417005813608597, -71.53756141662599],
    [-16.41673823643115, -71.53664946556093],
    [-16.416172206573364, -71.53576970100404],
    [-16.416676487799453, -71.5354371070862],
    [-16.417077853555007, -71.53515815734865],
    [-16.417736503256116, -71.53476119041444],
    [-16.418312819914494, -71.53560876846315],
    [-16.420144672234677, -71.53814077377321],
  ];
  let polylineArequipa = L.polyline(rutaArequipa, { color: "#ff0000" }).addTo(
    mymap
  );
  // forma 1 para centrar el mapa luego de dibujar el polyline
  // mymap.fitBounds(rutaArequipa);
  // forma 2
  mymap.fitBounds(polylineArequipa.getBounds(), {animate: true,duration: 3});
};

btnEnfocarPuno.onclick = () => {
  // mover la cámara o enfocar el área de Puno
  // fitBounds = recibe un arreglo de LatLng, es decir un arreglo
  // de coordenadas que en conjunto, queremos visualizar en el área del mapa
  // esto quiere decir que si mandamos más de una coordenada, el área de visualización del mapa
  // va a contener todas esas coordenadas
  mymap.fitBounds([[-15.840222, -70.021881]]);
};
