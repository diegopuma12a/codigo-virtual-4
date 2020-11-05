const MesaReducer = (stateActual, action) => {

  switch (action.type) {
    case "SELECCIONAR_MESA":
      return {
        ...stateActual,
        globalObjMesa: { ...action.data }
      }
    case "SELECCIONAR_CATEGORIA":
      return {
        ...stateActual,
        globalObjCategoria: { ...action.data }
      }
  }

}
export default MesaReducer;