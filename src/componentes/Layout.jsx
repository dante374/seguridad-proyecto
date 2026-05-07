import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
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
        <div className='contenido'>
            <NavLink className='titulo-nav' to="/"><h1>Navegar<span>Seguro</span></h1></NavLink>
            <div className="listado">
                <ul className="links">
                    <li><NavLink to="/">Inicio</NavLink></li>
                    <li><NavLink to="/Riesgos">Riesgos de internet</NavLink></li>
                    <li><NavLink to="/Consejos">Consejos</NavLink></li>
                    <li><NavLink to="/Padres">Padres y docentes</NavLink></li>
                    <li><NavLink to="/Recursos">Recursos</NavLink></li>
                </ul>
            </div>
            <div>
                <ul className='izquierda'>
                    <li><FaRegMoon /></li>
                    <li id='contacto-boton'><NavLink to="/Contacto">Contacto</NavLink></li>
                </ul>
                
            </div>
        </div>
      </nav>
      <Outlet/>
     </>   
    )
}

export default Layout