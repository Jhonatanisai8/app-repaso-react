import PerfilUsuario from './components/PerfilUsuario'
import TarjetaEmpleado from './components/props/TarjetaEmpleado'
// import Saludo from './components/Saludo'

function App() {
  return (
    // <Saludo nombre="Jhonatan"></Saludo>
    // <PerfilUsuario></PerfilUsuario>
    <div>
      <TarjetaEmpleado
        nombre="Jhonatan"
        puesto="Java Developer"
      ></TarjetaEmpleado>

      <TarjetaEmpleado
        nombre="Ana"
        puesto="Java Developer"
      ></TarjetaEmpleado>
    </div>
  )
}

export default App
