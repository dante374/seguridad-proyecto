import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Styles/Layout.css'
import Riesgos from './Riesgos'
import Padres from './Padres'
import Recursos from './Recursos'
import Inicio from './Inicio'
import Chat from './Chat'
import Contacto from './Contacto'
import { FaRegMoon } from "react-icons/fa";

function Layout (){
    const navigate = useNavigate()
    return(
     <>
      <nav className="Nav">
        <div className='titulo-nav' to="/"><h1>Navega<span>Seguro</span></h1></div>
        <div className="listado">
            <ul className="links">
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/Riesgos">Riesgos de internet</Link></li>
                <li><Link to="/Consejos">Consejos</Link></li>
                <li><Link to="/Padres">Padres y docentes</Link></li>
                <li><Link to="/Recursos">Recursos</Link></li>
            </ul>
        </div>
        <div>
            <ul className='izquierda'>
                <li><FaRegMoon /></li>
                <li id='contacto-boton'><Link to="/Contacto">Contacto</Link></li>
            </ul>
            
        </div>
      </nav>
      <Outlet/>
     </>   
    )
}

export default Layout