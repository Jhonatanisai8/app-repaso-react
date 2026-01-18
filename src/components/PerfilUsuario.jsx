import React from 'react'
import "../styles/PerfilUsuario.css"

const nombre = "Dev Jhona"
const experiencia = 2
const tecnologias = ["Java", "Spring", "React"];
const PerfilUsuario = () => {
    return (
        <div>
            <h1>Hola, <strong>Soy {nombre}</strong></h1>
            <p>Tengo <strong>{experiencia}</strong> años de experiencia.</p>
            <h2>Mis Tecnologias:</h2>
            <ul>
                {tecnologias.map((tech) => (
                    <li key={tech}>{tech}</li>
                ))}
            </ul>
        </div>
    )
}

export default PerfilUsuario