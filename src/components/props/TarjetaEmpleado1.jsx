import React from 'react'

const TarjetaEmpleado1 = ({ nombre, puesto = "Developer Java React" }) => {
  return (
    <div className='card'>
      <h2>{nombre}</h2>
      <p>{puesto}</p>
    </div>
  )
}

export default TarjetaEmpleado1 