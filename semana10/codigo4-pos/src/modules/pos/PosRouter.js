import React from 'react'
import { Switch } from 'react-router-dom'
import PosControlScreen from './screens/control/PosControlScreen'
import "./../../sass/pos.scss";
import MesaState from './context/mesa/mesaState';
import RutaPrivada from '../../RutaPrivada';

const PosRouter = () => {
  return (
    <MesaState>
      <Switch>
        <RutaPrivada path={"/pos/control"} componente={PosControlScreen} />
      </Switch >
    </MesaState >

  )
}

export default PosRouter
