import React, { useState, useEffect } from 'react'

const HookEffect = () => {

  console.log("Ejecutando componente HookEffect");

  const [contador, setContador] = useState(0);
  const [iterador, setIterador] = useState(0);
  const [type, setType] = useState(1);

  const hacerFetch = () => {
    console.log(`https://pokemon/type/${type}`);
  }
  /**
   * useEffect es un hook que recibe 2 parametros
   * 1. callback, en el cual vamos a colocar el código que querramos
   * que se ejecute independientemente del cambio de las variables de estado
   * 2. Arreglo de dependencias.
   * - Si el arreglo está vacío, el código dentro del useEffect, sólo se ejecutará
   * una sola vez
   * - En el arreglo, podemos mandar variables que cuando modifiquen su valor, 
   * el contenido de useEffect, se volverá a ejecutar
   * NOTA:
   * - useEffect se ejecuta como mínimo 1 vez (la vez que el componente se cargue)
   * - Pueden haber varios useEffect en un mismo componente.
   */
  useEffect(() => {
    hacerFetch();
  }, [type]);



  const sumarContador = () => {
    setContador(contador + 1);
  }
  const restarContador = () => {
    setContador(contador - 1);
  }
  const sumarIterador = () => {
    setIterador(iterador + 1);
  }
  const restarIterador = () => {
    setIterador(iterador - 1);
  }

  const modificarTipo = (nuevoTipo) => {
    setType(nuevoTipo);
  }

  return (
    <div>
      <h4>Contador: {contador}</h4>
      <button onClick={() => { restarContador(); }}>-1</button>
      <button onClick={() => { sumarContador(); }}>+1</button>
      <hr />
      <h4>Iterador: {iterador}</h4>
      <button onClick={() => { restarIterador(); }}>-1</button>
      <button onClick={() => { sumarIterador(); }}>+1</button>
      <hr />
      <button onClick={() => { modificarTipo(45); }}>Tipo Roca</button>
      <button onClick={() => { modificarTipo(98); }}>Tipo Hielo</button>
      <button onClick={() => { modificarTipo(21); }}>Tipo Eléctrico</button>
    </div>
  )
}

export default HookEffect
