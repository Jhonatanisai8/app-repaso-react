import React, {useEffect, useState} from "react";

const UsersApp = () => {
  const [usuarios, setUsuarios] = useState([])

  async function fetchUsers() {
    const url = "https://jsonplaceholder.typicode.com/users";
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const result = await response.json();
      console.log(result);
      setUsuarios(result)
    } catch (error) {
      console.error(error.message);
    }
  }

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Lista de Usuarios</h1>
      <ul>
        {usuarios.map(usuario => (
          <li key={usuario.id}>
            <h2>{usuario.name}</h2>
            <p>{usuario.username}</p>
            <span>{usuario.email}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default UsersApp;