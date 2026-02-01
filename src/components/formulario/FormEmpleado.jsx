import React, {useState} from "react";

const FormEmpleado = ({agregarEmpleado}) => {

  const [inputValue, setInputValue] = useState('')

  const manejarNombreEmpleado = (event) => {
    setInputValue(event.target.value);
  }

  const enviarDataEmpleado = (event) => {
    event.preventDefault()
    agregarEmpleado(inputValue)
    setInputValue("")
  }

  return (
    <form onSubmit={enviarDataEmpleado}>
      <input type="text"
             placeholder="Ingresa el nombre del empleado"
             value={inputValue}
             onChange={manejarNombreEmpleado}/>
    </form>
  )
}

export default FormEmpleado