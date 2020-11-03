import React from 'react'

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AdminRouter from './modules/admin/AdminRouter';
import ClienteRouter from './modules/cliente/ClienteRouter';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/admin"} component={AdminRouter} />
        <Route path={"/cliente"} component={ClienteRouter} />
        {/* <Route path={"/"} exact component={} />
        <Route component={} /> */}
      </Switch>
    </Router>
  )
}

export default App
