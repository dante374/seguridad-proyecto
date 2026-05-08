import '../Styles/Recursos.css'
const recursos = [
    {
        icono: '🎥',
        tipo: 'Video',
        titulo: '¿Qué es el phishing y cómo evitarlo?',
        desc: 'Explicación visual y práctica sobre las estafas más comunes por correo y mensajería.',
        link: 'https://www.youtube.com/watch?v=aO858HyFbKI',
    },
    {
        icono: '🌐',
        tipo: 'Enlace',
        titulo: 'Portal de Ciberseguridad — Argentina.gob.ar',
        desc: 'Recursos oficiales del gobierno argentino sobre seguridad digital y delitos informáticos.',
        link: 'https://www.argentina.gob.ar/jefatura/innovacion-publica/ssdi/ciberseguridad',
    },
    {
        icono: '📘',
        tipo: 'Guía',
        titulo: 'UNICEF Argentina — Infancia y Tecnología',
        desc: 'Recursos para familias y docentes sobre derechos digitales y uso seguro de internet.',
        link: 'https://www.unicef.org/argentina/infancia-y-tecnologia',
    },
    {
        icono: '🎬',
        tipo: 'Video',
        titulo: 'Ciberbullying: cómo actuar si lo sufrís o lo ves',
        desc: 'Para adolescentes: qué hacer cuando sos víctima o testigo de acoso digital.',
        link: 'https://www.youtube.com/watch?v=2VPe3-pBkbg',
    },
    {
        icono: '📗',
        tipo: 'Guía',
        titulo: 'OSI — Seguridad en Internet para Menores',
        desc: 'Guías prácticas sobre riesgos para menores y cómo prevenirlos, de la Oficina de Seguridad del Internauta.',
        link: 'https://www.osi.es/es/menores',
    },
    {
        icono: '🔍',
        tipo: 'Herramienta',
        titulo: 'Have I Been Pwned?',
        desc: 'Verificá si tu e-mail o contraseña fue parte de una filtración de datos. Gratuito y fácil de usar.',
        link: 'https://haveibeenpwned.com',
    },
]

function Recursos(){
    return(
        <>
          <div className="recursos">
            <div className='recursos-titulo'>
                <h2>Videos, guías y enlaces<br />para seguir aprendiendo</h2>
                <p>Material seleccionado para distintas edades y niveles de conocimiento.</p>
             </div>
            <div className="recursos-container">
                <div className="row g-4">
                    { recursos.map(item =>(
                        <div className="col 6">
                         <div className={`card-recurso card-${item.tipo.toLocaleLowerCase()}`}>
                            <div className="recurso-titulo">
                              <span className="recurso-icono">{item.icono}</span>
                              <span className={`recurso-tipo tipo-${item.tipo.toLowerCase()}`}>{item.tipo}</span>  
                            </div>
                            <span className='titulo-recurso'>{item.titulo}</span>
                            <p className='recurso-desc'>{item.desc}</p>
                            <a href={item.link}>{item.link}</a>
                         </div>
                        </div>
                    ))}
                </div>
            </div>
          </div>
        </>
    )
}
export default Recursos