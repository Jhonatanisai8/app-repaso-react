import React from 'react'

const BotonAcceso = ({ estaLogueado }) => {
  return (
    <div>
      <button>
        {estaLogueado ? "Cerrar Sesion" : "Iniciar Sesion"}
      </button>
    </div>
  )
}

export default BotonAcceso