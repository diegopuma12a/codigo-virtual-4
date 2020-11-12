import React from 'react'
import { Route, Switch } from 'react-router-dom'
import InvitadoHomeScreen from './screens/home/InvitadoHomeScreen'

const InvitadoRouter = () => {
  return (
    <Switch>
      
      <Route path={"/"} component={InvitadoHomeScreen} />

    </Switch>
  )
}

export default InvitadoRouter
