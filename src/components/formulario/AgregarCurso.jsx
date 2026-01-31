import React from 'react'
import { useState } from 'react'

const AgregarCurso = ({ nuevoCurso }) => {

  const [curso, setCurso] = useState({ nombre: "", lenguaje: "" })

  const manejarCambio = (e) => {
    setCurso({
      ...curso, [e.target.name]: e.target.value
    })
  }

  const manejarEnvio = (e) => {
    // evita que la pagina se recargue 
    e.preventDefault();

    if (curso.nombre.trim() === "" || curso.lenguaje.trim() === "") {
      alert("Por favor llena ambos campos")
      return;
    }
    // enviamos el objeto + id 
    nuevoCurso({ ...curso, id: Date.now() })

    // limpiamos el objeto
    setCurso({ nombre: "", lenguaje: "" })

  }

  return (
    <div>
      <form onSubmit={manejarEnvio}>
        <h2>Agregar Nuevo Curso</h2>
        <div>
          <input
            type="text"
            name='nombre'
            placeholder='Nombre del curso'
            value={curso.nombre}
            onChange={manejarCambio}
          />
        </div>
        <div>
          <input
            type="text"
            name='lenguaje'
            placeholder='Nombre del lenguaje'
            value={curso.lenguaje}
            onChange={manejarCambio}
          />
        </div>
        <button type='submit'>Guardar Curso</button>
      </form>
    </div>
  )
}

export default AgregarCurso