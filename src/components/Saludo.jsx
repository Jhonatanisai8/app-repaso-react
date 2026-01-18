import React from 'react'
import "../styles/Saludo.css"
const Saludo = (props) => {
  return (
    <h1>Hola, {props.nombre}</h1>
  )
}

export default Saludo