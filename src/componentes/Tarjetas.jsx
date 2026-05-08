import { NavLink } from 'react-router-dom'
import { TbAlertOctagonFilled } from "react-icons/tb"
import { MdFamilyRestroom } from "react-icons/md";        // ejemplo para las otras tarjetas
import { FaListCheck } from "react-icons/fa6";
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
    Icono: MdFamilyRestroom,
    etiqueta: 'HERRAMIENTAS',
    titulo: 'Para padres y docentes',
    texto: 'Ayudas, temas de conversación y herramientas para guiar a los más jóvenes en el mundo digital.',
    linkTexto: 'Ver herramientas',
    linkTo: '/Consejos',
  },
  {
    variante: 'blanca',
    Icono: FaListCheck,
    etiqueta: 'RECURSOS',
    titulo: 'Para niños y adolescentes',
    texto: 'Videos, consejos y tutoriales para navegar de manera más cómoda y segura por internet.',
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