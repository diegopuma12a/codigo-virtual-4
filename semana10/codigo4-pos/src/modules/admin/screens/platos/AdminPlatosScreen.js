import React, { useEffect, useState } from 'react'
import { getPlatos } from '../../../../services/platosService';
import AdminPlatosForm from './components/AdminPlatosForm'
import AdminPlatosTabla from './components/AdminPlatosTabla'

const AdminPlatosScreen = () => {

  const [platos, setPlatos] = useState([]);

  const traerPlatos = async () => {
    const data = await getPlatos();
    if (data.ok) {
      setPlatos(data.content);
    }
  }

  useEffect(() => {
    traerPlatos();
  }, [])


  return (
    <>
      <AdminPlatosForm traerPlatos={traerPlatos} />
      <AdminPlatosTabla platos={platos} />
    </>
  )
}

export default AdminPlatosScreen
