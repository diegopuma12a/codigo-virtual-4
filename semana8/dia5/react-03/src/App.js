import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from './pokeapi/Header';
import Tipos from "./pokeapi/Tipos";
import Pokemones from './pokeapi/Pokemones';
// Para probar el uso del hook useEffect, quitar el comentario
// de la siguiente línea y llamar al componente HookEffect
// import HookEffect from './components/HookEffect';

const App = () => {
  return (
    <>
      <Header />
      <main className="container-fluid mt-5">
        <div className="row">
          <Tipos />
          <Pokemones />
        </div>
      </main>
    </>
  )
}

export default App
