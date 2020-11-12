import React, { useContext, useState } from 'react'
import { postLogin } from '../../../../services/authService';
import AuthContext from '../../context/authContext';

const AuthLoginScreen = ({ history }) => {

  const { iniciarSesion } = useContext(AuthContext);

  const [formulario, setFormulario] = useState({
    correo: "",
    password: ""
  });

  const handleChange = e => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault();
    postLogin(formulario.correo, formulario.password).then(data => {
      if (data.ok) {
        //TODO llamar a iniciarSesión del context y enviarle el token
        iniciarSesion(data.token);
        history.push("/pos/control");
      }
    });
  }

  return (
    <main className="login">
      <div className="login__form">
        <h1>Inicio de Sesión</h1>
        <form className="formulario" onSubmit={onSubmit}>
          <label htmlFor="">Email:</label>
          <input
            name="correo"
            onChange={handleChange}
            value={formulario.correo}
            type="email"
            className="formulario__input"
            placeholder="Email" />
          <label htmlFor="">Password:</label>
          <input
            value={formulario.password}
            onChange={handleChange}
            name="password"
            type="password"
            className="formulario__input"
            placeholder="Password"
          />
          <button className="formulario__submit" type="submit">
            Iniciar Sesión
          </button>
        </form>
      </div>
    </main>
  )
}

export default AuthLoginScreen
