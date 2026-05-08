import "../styles/Riesgos.css";

import {
    ShieldAlert,
    Fish,
    Monitor,
    UserRoundPlus,
    Images,
    Headset,
} from "lucide-react";

export default function InternetRisks() {
    const cards = [
        {
            title: "Cyberbullying",
            icon: <ShieldAlert size={18} />,
            color: "red",
            description:
                "Es cuando alguien usa dispositivos digitales para amenazar, avergonzar o acosar a otra persona.",
            detail:
                "Esto puede ocurrir en redes sociales, en juegos o mediante aplicaciones de mensajería.",
            action:
                "No respondas, guardá las pruebas, bloqueá a la persona y buscá ayuda de confianza.",
        },
        {
            title: "Phishing y scams",
            icon: <Fish size={18} />,
            color: "blue",
            description:
                "Son trucos que utilizan los ciberdelincuentes para robar tu información personal.",
            detail:
                "A menudo se hacen pasar por una empresa o persona de tu confianza para lograrlo.",
            action:
                "Nunca hagas clic en enlaces sospechosos. No compartas datos personales con desconocidos.",
        },
        {
            title: "Exceso de pantallas",
            icon: <Monitor size={18} />,
            color: "purple",
            description:
                "Pasar demasiado tiempo frente a dispositivos puede afectar tu sueño, tu estado de ánimo y tu salud física.",
            detail:
                "Es importante equilibrar la vida digital con actividades del mundo real.",
            action:
                "Establecé límites claros, tomá descansos y evitá usar dispositivos antes de dormir.",
        },
    ];

    return (
        <div className="internet-page">
            <div className="internet-container">
                <div className="top-badge">GUÍA EDUCACIONAL</div>

                <h1>Comprender los riesgos de Internet</h1>

                <p className="subtitle">
                    Internet es un lugar inmenso y fascinante, pero como cualquier gran
                    ciudad, tiene zonas donde hay que tener cuidado.
                    <br />
                    Aprendamos sobre los riesgos comunes y cómo mantenerse a salvo.
                </p>

                {/* TOP CARDS */}
                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="risk-card">
                            <div className={`card-header ${card.color}`}>
                                {card.icon}
                                <span>{card.title}</span>
                            </div>

                            <div className="card-body">
                                <h4>¿Qué es?</h4>

                                <p>{card.description}</p>

                                <p>{card.detail}</p>

                                <div className="action-box">
                                    <h5>¿Qué hago?</h5>
                                    <p>{card.action}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* BIG CARDS */}
                <div className="bottom-grid">
                    <div className="big-card">
                        <div className="big-top blue-soft">
                            <UserRoundPlus size={46} />
                        </div>

                        <div className="big-content">
                            <h3>⚠ Grooming</h3>

                            <p>
                                Cuando los adultos establecen una conexión emocional con un
                                joven en línea para ganarse su confianza con fines dañinos, a
                                menudo fingen ser otra persona o compartir intereses similares.
                            </p>

                            <div className="warning-box">
                                <strong>Regla de seguridad:</strong>
                                <p>
                                    Nunca te reúnas en persona con alguien que conocés por
                                    internet. Si alguien en línea te pide que guardes secretos o
                                    te pide fotos, avisale a un adulto.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="big-card">
                        <div className="big-top beige-soft">
                            <Images size={46} />
                        </div>

                        <div className="big-content">
                            <h3>↗ Compartir imágenes</h3>

                            <p>
                                Compartir información privada, ubicación o fotos íntimas en
                                línea puede poner en riesgo tu privacidad y tu seguridad. Una
                                vez que algo se envía o publica, se pierde el control sobre
                                quién lo ve o dónde termina.
                            </p>

                            <div className="warning-box orange">
                                <strong>Regla de seguridad:</strong>

                                <p>
                                    Pensá antes de publicar. Nunca envíes imágenes íntimas y
                                    revisá siempre la configuración de privacidad.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="help-section">
                    <Headset size={42} />

                    <h2>¿Necesitás hablar con alguien?</h2>

                    <p>
                        Si algo en internet te hizo sentir asustado, incómodo o preocupado,
                        nunca es tarde para pedir ayuda.
                    </p>

                    <div className="help-buttons">
                        <button className="primary-btn">BUSCAR RECURSOS</button>

                        <button className="secondary-btn">
                            REPORTAR INCIDENTE
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}