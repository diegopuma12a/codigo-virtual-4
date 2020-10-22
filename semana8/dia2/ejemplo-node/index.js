import axios from "axios";

const saludar = () => {
  axios.get("https://pokeapi.co/api/v2/type/1/").then((data) => {
    console.log(data);
    console.log("adios!");
  });
};
saludar();
