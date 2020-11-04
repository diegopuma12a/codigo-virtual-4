import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom";
import PosRouter from './modules/pos/PosRouter';
const AppRouter = () => {
  return (
    <Router>


      <Switch>
        <Route path={"/pos"} component={PosRouter} />
      </Switch>

    </Router>
  )
}

export default AppRouter
