import React from 'react'

const ContadorApp = ({ valor }) => {
  function aumentarContador() {
    valor += 1
    console.log(valor);

  }

  return (
    <div>
      <p>{valor}</p>
      <button onClick={() => aumentarContador(valor)}>
        Soy un boton
      </button>
    </div>
  )
}

export default ContadorApp