import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
// Para probar el uso del hook useEffect, quitar el comentario
// de la siguiente línea y llamar al componente HookEffect
// import HookEffect from './components/HookEffect';

const App = () => {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
        <a className="navbar-brand" href="#">POKEMON</a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item active">
              <a className="nav-link" href="#"
              >Home <span className="sr-only">(current)</span></a
              >
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Link</a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="dropdownId"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >Dropdown</a
              >
              <div className="dropdown-menu" aria-labelledby="dropdownId">
                <a className="dropdown-item" href="#">Action 1</a>
                <a className="dropdown-item" href="#">Action 2</a>
              </div>
            </li>
          </ul>
        </div>
      </nav>
      <main className="container-fluid mt-5">
        <div className="row">
          <aside className="col-md-2 tipos">
            <div className="tipos__tipo text-center mb-2 px-3 py-3">Electrico</div>
            <div className="tipos__tipo text-center mb-2 px-3 py-3">Fuego</div>
            <div className="tipos__tipo text-center mb-2 px-3 py-3">Tierra</div>
          </aside>
          <section className="col-md-10 filas">
            <div className="row">
              <div className="col-md-6 p-5">
                <div className="card border-0 shadow">
                  <div className="altura shadow">2.3m</div>
                  <div className="peso shadow">127.0kg</div>
                  <div className="card-body text-center">
                    <figure>
                      <img
                        src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png"
                        alt=""
                      />
                    </figure>
                    <h3 className="card-title my-0">Charizard</h3>
                    <p className="card-text my-0">Tipo de Pokemón</p>
                    <p className="card-text my-0">TIPO</p>
                    <p className="card-text my-0">Característica</p>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="row align-items-center" style={{ height: "100%" }}>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-success"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-warning"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-primary"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="progress">
                      <div
                        className="progress-bar bg-dark"
                        role="progressbar"
                        style={{ width: "25%" }}
                        aria-valuenow="25"
                        aria-valuemin="0"
                        aria-valuemax="100"
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}

export default App
