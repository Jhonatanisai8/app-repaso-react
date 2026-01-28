import React from 'react'

const ListaCursos = () => {
  const cursos = [
    { id: 1, nombre: "Java Developer", lenguaje: "Java" },
    { id: 2, nombre: "React para principiantes", lenguaje: "JavaScript" },
    { id: 3, nombre: "Spring boot Pro", lenguaje: "Java" },
  ]
  return (
    <div>
      <ul>
        {
          cursos.map((curso) => (
            <li key={curso.id}>
              {curso.nombre} - <strong>{curso.lenguaje}</strong>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default ListaCursos