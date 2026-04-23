import '../Styles/Contacto.css'

function Contacto() {
    return (
        <div className="contacto-container">
            <div className="contacto-form">

                <div className="contacto-titulo">
                    <h2>Contacto 📩</h2>
                    <p>Dejanos tu mensaje y te respondemos lo antes posible.</p>
                </div>

                <form>
                    <div className="input-group">
                        <label htmlFor="nombre">Nombre</label>
                        <input id="nombre" type="text" placeholder="Tu nombre" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="apellido">Apellido</label>
                        <input id="apellido" type="text" placeholder="Tu apellido" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="nacimiento">Fecha de nacimiento</label>
                        <input id="nacimiento" type="date" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" placeholder="ejemplo@email.com" />
                    </div>

                    <div className="input-group">
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" placeholder="Escribí tu mensaje..."></textarea>
                    </div>

                    <button className="boton-submit" type="submit">
                        Enviar
                    </button>
                </form>

            </div>
        </div>
    )
}

export default Contacto