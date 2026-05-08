import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import '../Styles/Layout.css'
import Riesgos from '../pages/Riesgos'
import Padres from '../pages/Padres'
import Recursos from '../pages/Recursos'
import Inicio from '../pages/Inicio'
import Chat from './Chat'
import Contacto from '../pages/Contacto'
import { FaRegMoon } from "react-icons/fa";

function Layout (){
    const navigate = useNavigate()
    return(
     <>
      <nav className="navbar">

        <div className='nav-izquierda'>
            <NavLink className='titulo-nav' to="/"><h1>Navegar<span>Seguro</span></h1></NavLink>
        </div>
        <div className="nav-centro">
            <ul className="links">
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Riesgos">Riesgos de internet</NavLink></li>
                <li><NavLink to="/Consejos">Consejos</NavLink></li>
                <li><NavLink to="/Padres">Padres y docentes</NavLink></li>
                <li><NavLink to="/Recursos">Recursos</NavLink></li>
            </ul>
        </div>
       <div className='nav-derecha'>
            <button className='btn-moon'><FaRegMoon /></button>
            <NavLink id='contacto-boton' to="/Contacto">Contacto</NavLink>
        </div>
      </nav>
      <Outlet/>
     </>   
    )
}

export default Layout