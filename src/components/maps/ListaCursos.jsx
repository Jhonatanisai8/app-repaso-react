import React, { useState } from 'react'


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
  const agregarTarea = () => {
    const nuevoCurso = { id: Date.now(), nombre: "Python Developer", lenguaje: "Python" }
    setArreglo([...arreglo, nuevoCurso])
  }

  return (
    <div>
      <ul>
        {
          arreglo.map((curso) => (
            <Item key={curso.id} nombre={curso.nombre} lenguaje={curso.lenguaje}></Item>
          ))
        }
      </ul>
      <button onClick={() => agregarTarea()}>Agregar Curso</button>
    </div>
  )
}

export default ListaCursos