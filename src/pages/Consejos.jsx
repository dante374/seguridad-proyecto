import '../Styles/Consejos.css'

const consejos = [
    {
        titulo: 'Ciberbullying',
        desc: 'No respondas con agresión. Guardá pruebas, bloqueá y denunciá.',
        img: '/img/Ciberbullying.webp'
    },
    {
        titulo: 'Grooming',
        desc: 'No hables con desconocidos ni compartas información personal.',
        img: '/img/Grooming.webp'
    },
    {
        titulo: 'Phishing',
        desc: 'No hagas clic en enlaces sospechosos.',
        img: '/img/phishing.webp'
    }
]

function Consejos(){
    return(
        <div className='consejos'>
            <div className='consejos-titulo'>
                <h2>Consejos de seguridad digital</h2>
                <p>Pequeñas acciones pueden evitar grandes problemas.</p>
            </div>
            <div className='consejos-contenido'>
                {consejos.map((item, index) =>(
                    <div className={`fila ${index % 2 === 0 ? '' : 'reverse'}`}>
                        
                        <div className='imagen'>
                            <img src={item.img} alt={item.titulo} />
                        </div>

                        <div className='texto'>
                            <h3>{item.titulo}</h3>
                            <p>{item.desc}</p>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    )
}

export default Consejos