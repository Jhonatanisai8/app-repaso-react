import React, {useState} from "react";

const FormEmpleado = ({agregarEmpleado}) => {
  const [inputValue, setInputValue] = useState('');
  const manejarNombreEmpleado = (event) => {
    setInputValue(event.target.value);
  }
  const enviarDataEmpleado = (event) => {
    const enviarEmpleado = {
      nombre: inputValue,
      apellido: "Test de Apellido"
    }
    event.preventDefault();
    agregarEmpleado(empleados => [...empleados, enviarEmpleado])
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