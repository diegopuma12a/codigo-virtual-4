import React from 'react'
import {
  BrowserRouter as Router,
  HashRouter,
  Route,
  Switch
} from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import AuthRouter from './modules/auth/AuthRouter';
import InvitadoRouter from './modules/invitado/InvitadoRouter';
import PosRouter from './modules/pos/PosRouter';
const AppRouter = () => {
  return (

    <HashRouter>
      <Switch>
        <Route path={"/pos"} component={PosRouter} />
        <Route path={"/admin"} component={AdminRouter} />
        <Route path={"/auth"} component={AuthRouter} />
        <Route path={"/"} exact component={InvitadoRouter} />
      </Switch>
    </HashRouter>

  )
}

export default AppRouter
