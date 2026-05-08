import '../Styles/Riesgo.css'
const riesgos = [
    {
        icono: '🎣',
        titulo: 'Phishing',
        nivel: 'Alto',
        desc: 'Correos, mensajes o sitios falsos que imitan entidades reales (bancos, redes sociales) para robarte datos personales o contraseñas.',
        alertas: [
            'Remitente con dirección extraña',
            'Links que no coinciden con el sitio real',
            'Urgencia exagerada ("tu cuenta será bloqueada")',
        ],
    },
    {
        icono: '😰',
        titulo: 'Ciberbullying',
        nivel: 'Alto',
        desc: 'Acoso, humillación o amenazas repetidas a través de internet, redes sociales, mensajería o videojuegos. Afecta especialmente a niños y adolescentes.',
        alertas: [
            'Insultos y comentarios hirientes en redes',
            'Difusión de fotos o videos sin consentimiento',
            'Exclusión deliberada de grupos digitales',
        ],
    },
    {
        icono: '🦠',
        titulo: 'Virus',
        nivel: 'Alto',
        desc: 'Software malicioso que se instala sin tu permiso para robar información, bloquear tu equipo (ransomware) o espiarte.',
        alertas: [
            'Descargar archivos de sitios no confiables',
            'Abrir adjuntos de e-mails desconocidos',
            'Instalar programas pirata',
        ],
    },
    {
        icono: '🎭',
        titulo: 'Grooming',
        nivel: 'Alto',
        desc: 'Adultos que se hacen pasar por menores para ganarse la confianza de niños y adolescentes con fines de manipulación o abuso.',
        alertas: [
            'Pedir fotos personales o íntimas',
            'Insistir en mantener la relación en secreto',
            'Proponer encontrarse en persona',
        ],
    },
    {
        icono: '📢',
        titulo: 'Desinformación',
        nivel: 'Medio',
        desc: 'Noticias falsas, teorías conspirativas y contenido manipulado que se viraliza y puede influir en creencias y decisiones.',
        alertas: [
            'Verificar la fuente antes de compartir',
            'Buscar la misma noticia en otros medios',
            'Desconfiar de titulares muy impactantes',
        ],
    },
    {
        icono: '🔓',
        titulo: 'Robo identidad',
        nivel: 'Medio',
        desc: 'Cuando alguien usa tus datos personales (nombre, DNI, fotos) para suplantar tu identidad o cometer fraudes en tu nombre.',
        alertas: [
            'No publicar datos sensibles en redes',
            'Usar autenticación de dos factores',
            'Revisar la configuración de privacidad',
        ],
    },
]



function Riesgos(){
    return(
        <>
          <div className='riesgos'>
            <div className='riesgos-titulo'>
                <h2>¿A que nos enfrentamos<br />cuando navegamos?</h2>
                <p>Conocer los riesgos es el primer paso para evitarlos. Estos son los más frecuentes en el entorno digital actual.</p>
            </div>
            <div className='container'>
                <div className='row g-5'>
                {riesgos.map(item =>(
                    <div className='columna col-6'>
                        <div className='card'>
                            <div className='riesgo-top'>
                                <span className='riesgo-icono'>{item.icono}</span>
                                <span className="riesgo-card-titulo">{item.titulo}</span>
                                <span className={`riesgo-nivel ${item.nivel === 'Alto' ?'nivel-alto' : 'nivel-medio'}`}>
                                  {item.nivel}
                                </span>
                            </div>
                            <p className='riesgo-desc'>{item.desc}</p>
                            <div className='riesgo-alertas'>
                                <ul>
                                    {item.alertas.map(alerta=>(
                                        <li>{alerta}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
              </div>
             </div>
            </div>
        </>
    )
}
export default Riesgos