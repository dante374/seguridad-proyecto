import { NavLink } from 'react-router-dom'
import { TbAlertOctagonFilled } from "react-icons/tb"
import { FaShieldAlt } from "react-icons/fa"        // ejemplo para las otras tarjetas
import { MdMenuBook } from "react-icons/md"          // ejemplo para las otras tarjetas
import Tarjeta from './Tarjeta'
import '../Styles/Tarjetas.css'

const tarjetas = [
  {
    variante: 'roja',
    Icono: TbAlertOctagonFilled,
    etiqueta: 'CONSEJOS PRÁCTICOS',
    titulo: 'Riesgos reales de la web',
    texto: 'Aprende a identificar el acoso, a tomar medidas, a bloquear a los usuarios tóxicos y a encontrar apoyo cuando tú o un amigo sean víctimas de acoso en línea.',
    linkTexto: 'Ver riesgos',
    linkTo: '/Riesgos',
  },
  {
    variante: 'azul',
    Icono: FaShieldAlt,
    etiqueta: 'PROTECCIÓN',
    titulo: 'Título tarjeta azul',
    texto: 'Descripción de la tarjeta azul.',
    linkTexto: 'Ver consejos',
    linkTo: '/Consejos',
  },
  {
    variante: 'blanca',
    Icono: MdMenuBook,
    etiqueta: 'RECURSOS',
    titulo: 'Título tarjeta blanca',
    texto: 'Descripción de la tarjeta blanca.',
    linkTexto: 'Ver recursos',
    linkTo: '/Recursos',
  },
]

function ContenedorTarjetas() {
  return (
    <div className='contenedor-tarjetas'>
      {tarjetas.map((t) => (
        <Tarjeta key={t.variante} {...t} />
      ))}
    </div>
  )
}

export default ContenedorTarjetas