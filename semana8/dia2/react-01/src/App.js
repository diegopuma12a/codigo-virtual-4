import React from "react";
import Header from "./components/Header";
import Articulos from "./components/Articulos";
import "./App.css"

const App = () => {
  const titulo = "Mi primer curso de React";
  const proximosCursos = ["Angular", "Webpack", "NextJS"];
  const articulos = [
    { id: 783, titulo: "¿Cómo desestructurar objetos?" },
    { id: 33, titulo: "Aprende Babel en 10 minutos" },
    { id: 842, titulo: "¿Qué significa DevOps?" },
  ];
  
  return (
    <>
      <Header />
      <main>
        <h1>{titulo}</h1>
        <hr />
        <h2>Próximos cursos:</h2>
        <ul>
          {
            proximosCursos.map((c, i) => (
              <li key={i+c}>{c}</li>
            ))
          }
        </ul>
        <hr />
        <Articulos blog={articulos} />
      </main>
    </>
  );
};

export default App;
