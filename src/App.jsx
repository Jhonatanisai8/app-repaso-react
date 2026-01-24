// import ContadorApp from './components/events/ContadorApp'
import BotonAcceso from './components/condiciones/BotonAcceso'
import MiBoton from './components/events/MiBoton'
import PerfilUsuario from './components/PerfilUsuario'
import TarjetaEmpleado from './components/props/TarjetaEmpleado'
import TarjetaEmpleado1 from './components/props/TarjetaEmpleado1'
import Contador from './components/useEstate/Contador'
// import Saludo from './components/Saludo'

function App() {
  return (
    // <Saludo nombre="Jhonatan"></Saludo>
    // <PerfilUsuario></PerfilUsuario>
    <div>
      {/* <TarjetaEmpleado
        nombre="Jhonatan"
        puesto="Java Developer"
      ></TarjetaEmpleado>

      <TarjetaEmpleado
        nombre="Ana"
        puesto="Java Developer"
      ></TarjetaEmpleado> */}
      {/* <TarjetaEmpleado1
        nombre={"Eli"}
        puesto={"Dev Pyton"}
      >
      </TarjetaEmpleado1>
      <TarjetaEmpleado1
        nombre={"Eli"}
      >
      </TarjetaEmpleado1> */}
      {/* <MiBoton></MiBoton> */}
      {/* <ContadorApp
        valor={0}
      >
      </ContadorApp> */}
      {/* <Contador valor={5}>
        Soy un Boton
      </Contador> */}

      <BotonAcceso
        estaLogueado={true}>
      </BotonAcceso>
      <BotonAcceso
        estaLogueado={false}>
      </BotonAcceso>
      <BotonAcceso
        estaLogueado={true}>
      </BotonAcceso>
    </div>
  )
}

export default App
