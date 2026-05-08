import '../Styles/Inicio.css'
import { LuBadgeCheck } from "react-icons/lu";
import { TbAlertOctagonFilled } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import ContenedorTarjetas from '../componentes/Tarjetas'
import { Link } from 'react-router-dom'

function Inicio(){
    return(
        <>
        <div className='head'>

            {/* Lado izquierdo */}
            <div className='izquierda'>
                <div className='texto'>
                    <div className='badge'>
                        <LuBadgeCheck /><p>CONTENIDO APROBADO POR PROFESORES</p>
                    </div>
                    <div className='titulo'>
                        <p>Navegá por el <br /><span>Mundo Digital</span><br /> con confianza</p>
                    </div>
                    <div className='subtitulo'>
                        <p>Aprendé a identificar riesgos, proteger tu privacidad <br />y construir una huella digital positiva.</p>
                    </div>
                    <div className='botones'>
                        <button className='aprender'>Aprendé ahora</button>
                        <button className='probar'>Probá tu conocimiento</button>
                    </div>
                </div>
            </div>

            { /* Lado derecho */}
            <div className='derecha'>
                <img src="/img/Estudiante.png" alt="Imagen de estudiante" />
            </div>
        </div>

        </>
    )
}

export default Inicio