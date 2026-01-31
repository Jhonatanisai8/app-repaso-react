import React, {useState} from "react";
import FormEmpleado from "../formulario/FormEmpleado.jsx";

const Item = ({nombre, apellido}) => {
  return (
    <li>{nombre} {apellido}</li>)
}

const ListadoEmpleado = () => {
  let listadoEmpleados = [
    {id: 1, nombre: "Juan Daniel", apellido: "Perez Elias"},
    {id: 2, nombre: "Eli Florentino", apellido: "Rivas Florez"},
    {id: 3, nombre: "Gladiz Juliana", apellido: "Quispe Pereda"},
    {id: 4, nombre: "Samir Eli", apellido: "Florentino"},
    {id: 5, nombre: "Walter Daniel", apellido: "Elias Florez"}
  ]
  const [arregloEmpleados, setArregloEmpleados] = useState(listadoEmpleados)
  return (
    <div>
      <FormEmpleado agregarEmpleado={setArregloEmpleados}></FormEmpleado>
      <h1>Lista de Empleados</h1>
      <ol>
        {arregloEmpleados.map((empleado) => (
          <Item key={empleado.id}
                nombre={empleado.nombre}
                apellido={empleado.apellido}></Item>
        ))}
      </ol>
    </div>
  )

}

export default ListadoEmpleado;