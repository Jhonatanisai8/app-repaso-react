import React, { useState } from 'react'
import AgregarCurso from '../formulario/AgregarCurso'


const Item = ({ nombre, lenguaje }) => {
  return (
    <li>
      {nombre} - <strong>{lenguaje}</strong>
    </li>
  )
}

const ListaCursos = () => {

  const cursos = [
    { id: 1, nombre: "Java Developer", lenguaje: "Java" },
    { id: 2, nombre: "React para principiantes", lenguaje: "JavaScript" },
    { id: 3, nombre: "Spring boot Pro", lenguaje: "Java" },
  ]
  const [arreglo, setArreglo] = useState(cursos)
  // const agregarTarea = newFunction()

  const agregarTarea = (cursoDesdeFormulario) => {
    setArreglo([...arreglo, cursoDesdeFormulario])
  }

  return (
    <div>
      <AgregarCurso nuevoCurso={agregarTarea}></AgregarCurso>
      <ul>
        {
          arreglo.map((curso) => (
            <Item key={curso.id} nombre={curso.nombre} lenguaje={curso.lenguaje}></Item>
          ))
        }
      </ul>
      {/* <button onClick={() => agregarTarea()}>Agregar Curso</button> */}
    </div>
  )

  function agregarCurso() {
    return () => {
      const nuevoCurso = { id: Date.now(), nombre: "Python Developer", lenguaje: "Python" }
      setArreglo([...arreglo, nuevoCurso])
    }
  }
}

export default ListaCursos