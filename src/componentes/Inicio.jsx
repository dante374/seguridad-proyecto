import '../Styles/Inicio.css'
import { Link } from 'react-router-dom'
import Riesgos from './Riesgos'
function Inicio(){
    return(
        <>
          <div className='Inicio'>
            <div className='Inicio-texto'>
                <div className='inicio-tag'>
                    <h1>Internet es poderoso <br/> <span>Usándolo Bien</span><br /> Tambien lo sos.</h1>
                    <p>
                    Conocé los riesgos que existen en línea, aprendé a protegerte
                    y ayudá a quienes te rodean a navegar de forma más segura.
                    Para niños, jóvenes, padres y docentes.
                </p>
                </div>
                <div className='inicio-btn'>
                    <Link to="/Riesgos" className='btn-riesgo'>Riesgos</Link>
                    <Link to="/Consejos" className='btn-consejo'>Ver consejos</Link>
                </div>
            </div>

            <div className='inicio-cards'>
                <div className='cards'>
                    <div className='num'> 1 de cada 3 niños</div>
                    <div className='label'>fue contactado por desconocidos en línea</div>
                </div>
                <div className='cards'>
                    <div className='num'> El 72%</div>
                    <div className='label'>de los adolescentes usa la misma contraseña en múltiples sitios</div>
                </div>
                <div className='cards'>
                    <div className='num'> +80%</div>
                    <div className='label'>de los ataques se pueden prevenir con hábitos básicos</div>
                </div>
            </div>
          </div>
        </>
    )
}

export default Inicio