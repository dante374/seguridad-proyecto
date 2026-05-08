import "../styles/Padres.css";

import {
    MessageCircle,
    ShieldCheck,
    Search,
    Users,
    Eye,
    Clock3,
    Presentation,
    BookOpen,
    GraduationCap,
    ClipboardList,
} from "lucide-react";

export default function PadresDocentes() {
    return (
        <div className="pd-page">
            <div className="pd-container">
                <h1>Padres y docentes</h1>

                <p className="pd-subtitle">
                    Acá encontrás <strong>herramientas, temas de conversación y conocimientos técnicos</strong>
                    <br />
                    para guiar a los niños de forma segura por el mundo digital.
                </p>

                {/* TOP SECTION */}
                <div className="pd-top-grid">
                    {/* LEFT */}
                    <div className="pd-card large">
                        <h2>💬 ¿Qué hacer como padre?</h2>

                        <div className="mini-grid">
                            <div className="mini-card purple">
                                <div className="mini-title">
                                    <MessageCircle size={16} />
                                    <span>Hablar sin juzgar</span>
                                </div>

                                <p>
                                    Es importante crear un espacio donde los menores puedan
                                    contarte cualquier situación incómoda sucedida online,
                                    sin miedo a que les quiten el teléfono o sean castigados.
                                </p>
                            </div>

                            <div className="mini-card orange">
                                <div className="mini-title">
                                    <ShieldCheck size={16} />
                                    <span>Usá controles parentales</span>
                                </div>

                                <p>
                                    No necesitás espiar, pero sí informarte. Instalá las mismas apps
                                    que usan tus hijos para entender su funcionamiento y los riesgos.
                                </p>
                            </div>
                        </div>

                        <div className="wide-tip">
                            <div className="mini-title">
                                <Search size={16} />
                                <span>Conocé las apps que más usan</span>
                            </div>

                            <p>
                                Instalá las mismas apps que usan tus hijos para entender su
                                funcionamiento y los riesgos que presentan. Revisá ajustes
                                de privacidad, términos y opciones de comunicación.
                            </p>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="pd-card tips-card">
                        <h2>Más tips</h2>

                        <div className="tips-list">
                            <div className="tip-item">
                                <Users size={16} />

                                <div>
                                    <strong>Navegar juntos</strong>

                                    <p>
                                        Especialmente con los más chicos, compartir tiempo de pantalla
                                        es una oportunidad de enseñar y aprender.
                                    </p>
                                </div>
                            </div>

                            <div className="tip-item">
                                <Eye size={16} />

                                <div>
                                    <strong>¿Qué hacer en una crisis?</strong>

                                    <p>
                                        Si descubrís una situación de acoso o grooming,
                                        no borres las pruebas. Guardá capturas y realizá la denuncia.
                                    </p>
                                </div>
                            </div>

                            <div className="tip-item">
                                <Clock3 size={16} />

                                <div>
                                    <strong>Acordá reglas juntos</strong>

                                    <p>
                                        Establecé reglas claras sobre horarios de uso y privacidad.
                                        Hacelo en diálogo, no como imposición.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* BOTTOM SECTION */}
                <div className="pd-bottom-grid">
                    {/* LEFT */}
                    <div className="pd-card tips-card">
                        <h2>Más tips</h2>

                        <div className="tips-list">
                            <div className="tip-item">
                                <Presentation size={16} />

                                <div>
                                    <strong>Incluí a las familias</strong>

                                    <p>
                                        Organizá talleres o charlas informativas para madres y padres.
                                        El trabajo conjunto escuela-familia es más efectivo.
                                    </p>
                                </div>
                            </div>

                            <div className="tip-item">
                                <BookOpen size={16} />

                                <div>
                                    <strong>Enseñá verificación de fuentes</strong>

                                    <p>
                                        El pensamiento crítico frente a la información es clave.
                                        Enseñá a identificar noticias falsas y fuentes confiables.
                                    </p>
                                </div>
                            </div>

                            <div className="tip-item">
                                <ShieldCheck size={16} />

                                <div>
                                    <strong>Protegé los datos de tus alumnos</strong>

                                    <p>
                                        Usá plataformas educativas seguras y evitá compartir
                                        información de menores sin consentimiento.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT */}
                    <div className="pd-card large">
                        <h2>🎓 ¿Qué hacer como docente?</h2>

                        <div className="mini-grid">
                            <div className="mini-card green">
                                <div className="mini-title">
                                    <GraduationCap size={16} />
                                    <span>Integrá la ciudadanía digital</span>
                                </div>

                                <p>
                                    Incorporá temas de seguridad digital de forma transversal
                                    en distintas materias y actividades escolares.
                                </p>
                            </div>

                            <div className="mini-card purple">
                                <div className="mini-title">
                                    <Users size={16} />
                                    <span>Usá dinámicas participativas</span>
                                </div>

                                <p>
                                    Juegos de roles, debates y simulaciones ayudan
                                    a que los alumnos interioricen mejor estos temas.
                                </p>
                            </div>
                        </div>

                        <div className="wide-tip orange-bg">
                            <div className="mini-title">
                                <ClipboardList size={16} />
                                <span>Elaborá un protocolo de actuación</span>
                            </div>

                            <p>
                                La institución debe tener procedimientos claros para casos
                                de cyberbullying o grooming. Definí cómo actuar, investigar
                                y acompañar a los estudiantes.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}