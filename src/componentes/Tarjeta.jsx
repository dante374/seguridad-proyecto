import { NavLink } from 'react-router-dom'

function Tarjeta({ variante, Icono, etiqueta, titulo, texto, linkTexto, linkTo }) {
  return (
    <article className={`tarjeta tarjeta--${variante}`}>

      <span className='tarjeta__etiqueta'>
        <Icono aria-hidden="true" />
        {etiqueta}
      </span>

      <h3 className='tarjeta__titulo'>{titulo}</h3>

      <p className='tarjeta__texto'>{texto}</p>

      <NavLink className='tarjeta__link' to={linkTo}>
        {linkTexto} →
      </NavLink>

    </article>
  )
}

export default Tarjeta