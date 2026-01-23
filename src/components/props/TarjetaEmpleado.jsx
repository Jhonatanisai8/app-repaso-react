import React from 'react'

const TarjetaEmpleado = (props) => {
  return (
    <div className='card'>
      <h2>Nombre: {props.nombre}</h2>
      <p>Puesto: {props.puesto}</p>
    </div>
  )
}

export default TarjetaEmpleado