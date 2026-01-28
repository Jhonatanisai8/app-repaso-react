import React from 'react'

const Item = ({nombre, lenguaje}) => {
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
  return (
    <div>
      <ul>
        {
          cursos.map((curso) => (
            <Item key={curso.id} nombre={curso.nombre} lenguaje={curso.lenguaje}></Item>
          ))
        }
      </ul>


    </div>
  )
}

export default ListaCursos