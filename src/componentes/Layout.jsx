import { Link, Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../Styles/Layout.css'
import Riesgos from './Riesgos'
import Padres from './Padres'
import Recursos from './Recursos'
import Inicio from './Inicio'
import Chat from './Chat'

function Layout (){
    const navigate = useNavigate()
    return(
     <>
      <nav className="Nav">
        <h1><Link to="/Inicio">Navega <span>Seguro</span></Link></h1>
        <div className="listado">
            <ul className="links">
                <li><Link to="/Riesgos">Riesgos</Link></li>
                <li><Link href="">Consejos</Link></li>
                <li><Link to="/Padres">Padres y docentes</Link></li>
                <li><Link to="/Recursos">Recursos</Link></li>
                <li><Link to="/Contacto">Contacto</Link></li>
            </ul>
        </div>
      </nav>
      <Outlet/>
     </>   
    )
}

export default Layout