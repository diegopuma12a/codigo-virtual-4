import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import PosRouter from './modules/pos/PosRouter';
const AppRouter = () => {
  return (

    <Router>
      <Switch>
        <Route path={"/pos"} component={PosRouter} />
        <Route path={"/admin"} component={AdminRouter} />
      </Switch>
    </Router>

  )
}

export default AppRouter
