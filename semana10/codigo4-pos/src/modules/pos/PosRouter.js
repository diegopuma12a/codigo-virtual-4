import React from 'react'
import { Route, Switch } from 'react-router-dom'
import PosControlScreen from './screens/control/PosControlScreen'
import "./../../sass/pos.scss";
import MesaState from './context/mesa/mesaState';

const PosRouter = () => {
  return (
    <MesaState>
      <Switch>
        <Route path={"/pos/control"} component={PosControlScreen} />
      </Switch >
    </MesaState >

  )
}

export default PosRouter
