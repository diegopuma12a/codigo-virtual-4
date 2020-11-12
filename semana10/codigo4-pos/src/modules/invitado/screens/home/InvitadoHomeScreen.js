import React from 'react'
import { Link } from "react-router-dom";

const InvitadoHomeScreen = () => {
  return (
    <div className="bg-dark" style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    }}>
      <h1 className="display-1 text-white">Home de CodiGo - POS</h1>
      <Link className="btn btn-outline-success btn-lg" to={"/auth"}>
        Ir a Login
      </Link>
    </div>
  )
}

export default InvitadoHomeScreen
