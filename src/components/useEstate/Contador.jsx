import React, { useState } from 'react'

const Contador = ({ valor = 0 }) => {
  const [cuenta, setCuenta] = useState(valor)

  function actualizarContador() {
    setCuenta(cuenta + 1)
  }
  function desminuirContador() {
    setCuenta(cuenta - 1)
  }

  return (
    <div>
      <p>Has click {cuenta} veces</p>
      <button onClick={actualizarContador}>Aumentar</button>
      <button onClick={desminuirContador}>Desminuir</button>
    </div>
  )
}

export default Contador