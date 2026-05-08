import "../Styles/Inicio.css";
import { LuBadgeCheck } from "react-icons/lu";
import Tarjetas from "../componentes/Tarjetas";

function Inicio() {
    return (
        <>
            <section className="head">
                {/* IZQUIERDA */}
                <div className="izquierda">
                    <div className="texto">
                        <div className="badge">
                            <LuBadgeCheck />
                            <p>CONTENIDO APROBADO POR PROFESORES</p>
                        </div>

                        <div className="titulo">
                            <h1>
                                Navegá por el <br />
                                <span>Mundo Digital</span>
                                <br />
                                con confianza
                            </h1>
                        </div>

                        <div className="subtitulo">
                            <p>
                                Aprendé a identificar riesgos, proteger tu privacidad
                                y construir una huella digital positiva.
                            </p>
                        </div>

                        <div className="botones">
                            <button className="aprender">
                                Aprendé ahora
                            </button>

                            <button className="probar">
                                Probá tu conocimiento
                            </button>
                        </div>
                    </div>
                </div>

                {/* DERECHA */}
                <div className="derecha">
                    <img
                        src="/img/Estudiante.png"
                        alt="Estudiante usando una computadora"
                    />
                </div>
            </section>

            <Tarjetas />
        </>
    );
}

export default Inicio;