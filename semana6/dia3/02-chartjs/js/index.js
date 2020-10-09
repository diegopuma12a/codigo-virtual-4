var ctx = document.getElementById("myChart").getContext("2d");
var chart = new Chart(ctx, {
  // The type of chart we want to create
  type: "bar",

  // The data for our dataset
  data: {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Pedidos",
        backgroundColor: "rgb(255, 99, 132)",
        borderColor: "rgb(255, 99, 132)",
        data: [0, 10, 5, 2, 20, 30, 45],
      },
      {
        label: "Cancelaciones",
        backgroundColor: "rgb(98, 155, 221)",
        borderColor: "rgb(72, 120, 175)",
        data: [15, 20, 50, 80, 0, 3, 10],
      },
    ],
  },

  // Configuration options go here
  options: {},
});
