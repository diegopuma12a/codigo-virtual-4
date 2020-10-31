import React from 'react'
import Header from './components/Header';
import Mascotas from './screens/mascotas/Mascotas';
import Razas from './screens/razas/Razas';
import Tipos from './screens/tipos/Tipos';
import Home from './screens/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NotFound from './screens/404/NotFound';
import MascotaVer from './screens/mascotas/MascotaVer';
import Citas from './screens/citas/Citas';


const App = () => {
  return (
    /**Router > componente de envoltura para activar el sistema de enrutamiento */
    <Router>
      <Header />
      {/* Switch > componente de envoltura para las diferentes rutas que se van a mostrar
      en la aplicación 
      Nota: No se van a mostrar todas al mismo tiempo*/}
      <Switch>
        {/* Route > Componente que indica la ruta y el componente que se va a renderizar
        a partir del    localhost:3000 */}
        {/* El orden de las rutas del compoente Route, deben estar ordenadas de más específicas
        a más generales
        Donde: 
         / es más general que /mascotas
         /mascotas es más general que /mascotas/crear
         */}

        <Route path={"/mascotas/:mascota_id"} component={MascotaVer} />
        <Route path={"/mascotas"} component={Mascotas} />
        <Route path={"/citas"} component={Citas} />
        <Route path={"/razas"} component={Razas} />
        <Route path={"/tipos"} component={Tipos} />
        {/* La sigueinte ruta ( / ) indica que el componente Home, responderá sólo cuando
        la dirección  esté con el valor (localhost:3000) */}
        <Route exact path={"/"} component={Home} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  )
}

export default App
