import React from 'react'

const Pokemones = () => {
  return (
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
  )
}

export default Pokemones
