import React from 'react'

const MiBoton = () => {

  const manejarClick = () => {
    alert("Hiciste click!")
  }

  return (
    <div>
      <button onClick={manejarClick}>
        Has Click aqui
      </button>
    </div>
  )
}

export default MiBoton  