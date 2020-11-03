import React from 'react'

import { Route, Switch } from 'react-router-dom'
import AdminHeader from './components/AdminHeader'
import ClientesScreen from './screens/clientes/ClientesScreen'
import ProductosScreen from './screens/productos/ProductosScreen'
import VentasScreen from './screens/ventas/VentasScreen'
import DashboardScreen from './screens/dashboard/DashboardScreen'

import "./AdminRouter.scss";

const AdminRouter = () => {
  return (
    <>
      <AdminHeader />
      <div className="bg-dark altura-100">
        <main className="container text-light">
          <Switch>
            <Route path={"/admin/productos"} component={ProductosScreen} />
            <Route path={"/admin/clientes"} component={ClientesScreen} />
            <Route path={"/admin/ventas"} component={VentasScreen} />
            <Route path={"/admin"} component={DashboardScreen} />
          </Switch>
        </main>
      </div>
    </>
  )
}

export default AdminRouter
