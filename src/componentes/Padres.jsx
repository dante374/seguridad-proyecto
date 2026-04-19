import '../Styles/Padres.css'

const parapadres = [
    {
        icono: '💬',
        titulo: 'Hablá sin juzgar',
        desc: 'Creá un espacio donde tus hijos puedan contarte cualquier situación incómoda online sin miedo a que les quiten el teléfono. La confianza salva vidas.',
    },
    {
        icono: '📍',
        titulo: 'Acordá reglas juntos',
        desc: 'Establecé reglas claras sobre horarios de uso, qué redes están permitidas y qué información jamás debe compartirse. Hacelo en diálogo, no como imposición.',
    },
    {
        icono: '🔎',
        titulo: 'Conocé las apps que usan',
        desc: 'No necesitás espiar, pero sí informarte. Instalá las mismas apps que usan tus hijos para entender su funcionamiento y los riesgos que presentan.',
    },
    {
        icono: '⏰',
        titulo: 'Usá controles parentales',
        desc: 'Herramientas como Google Family Link o Apple Screen Time permiten limitar el acceso a contenidos inapropiados según la edad.',
    },
    {
        icono: '🤝',
        titulo: 'Naveguen juntos',
        desc: 'Especialmente con los más chicos, compartir tiempo de pantalla es una oportunidad de enseñar y aprender. Preguntales qué ven y a quién siguen.',
    },
    {
        icono: '🚨',
        titulo: 'Sabé qué hacer en crisis',
        desc: 'Si descubrís una situación de acoso o grooming, no borres las pruebas. Guardá capturas de pantalla y realizá la denuncia correspondiente.',
    },
]

const paradocentes = [
    {
        icono: '📚',
        titulo: 'Integrá la ciudadanía digital',
        desc: 'Incorporá temas de seguridad digital de forma transversal en distintas materias. Es un contenido de formación ciudadana, no solo de Tecnología.',
    },
    {
        icono: '🎮',
        titulo: 'Usá dinámicas participativas',
        desc: 'Juegos de roles, debates y simulaciones de phishing son más efectivos que la clase magistral para que los alumnos internalicen estos temas.',
    },
    {
        icono: '📋',
        titulo: 'Elaborá un protocolo de actuación',
        desc: 'La institución debe tener un procedimiento claro para casos de ciberbullying o grooming. Asegurate de conocerlo y difundirlo entre tus alumnos.',
    },
    {
        icono: '👥',
        titulo: 'Incluí a las familias',
        desc: 'Organizá talleres o charlas informativas para padres y madres. El trabajo conjunto escuela-familia es más efectivo que cualquier acción aislada.',
    },
    {
        icono: '🌐',
        titulo: 'Enseñá verificación de fuentes',
        desc: 'El pensamiento crítico frente a la desinformación es clave. Enseñá a tus estudiantes a identificar noticias falsas y a reconocer fuentes confiables.',
    },
    {
        icono: '🔐',
        titulo: 'Protegé los datos de tus alumnos',
        desc: 'Usá solo plataformas educativas que cumplan con la legislación de protección de datos. Evitá compartir información de menores sin consentimiento.',
    },
]
function Padres(){
    return(
        <>
          <div className='padres'>
            <div className='padres-titulo'>
                <h2>👨‍👩‍👧 Para padres</h2>
                <p>La mejor protección es el diálogo abierto. Aquí encontrás estrategias adaptadas para cada rol.</p>
             </div>
             <div className='container'>
                <div className='row g-5'>
                {parapadres.map(item =>(
                    <div className='columna col-6'>
                        <div className='card-padre'>
                            <div className='card-padre-titulo'>
                                <span className='card-icono'>{item.icono}</span>
                                <span className='card-titulo'>{item.titulo}</span>
                            </div>
                            <p className='padre-desc'>{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
             </div>
            </div>

            <div className='docentes'>
            <div className='docentes-titulo'>
                <h2>🏫 Para docentes</h2>
                <p>El aprendizaje sobre nuestro hacer, es la primera piedra del bienestar general.</p>
             </div>
             <div className='container'>
                <div className='row g-5'>
                {paradocentes.map(item =>(
                    <div className='columna col-6'>
                        <div className='card-docente'>
                            <div className='card-pdocente-titulo'>
                                <span className='card-icono'>{item.icono}</span>
                                <span className='card-titulo'>{item.titulo}</span>
                            </div>
                            <p className='docente-desc'>{item.desc}</p>
                        </div>
                    </div>
                ))}
              </div>
             </div>
            </div>
        </>
    )
}

export default Padres