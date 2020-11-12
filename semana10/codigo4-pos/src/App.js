import React from 'react'
import AppRouter from './AppRouter'
import AuthState from './modules/auth/context/authState'

const App = () => {
  return (

    <AuthState>
      <AppRouter />
    </AuthState>
  )
}

export default App
