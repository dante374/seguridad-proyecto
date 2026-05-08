import "../Styles/Consejos.css";
import {
    ShieldAlert,
    Fish,
    UserRoundX,
    CheckCircle2,
    TriangleAlert,
    Lock,
} from "lucide-react";

const consejos = [
    {
        titulo: "Ciberbullying",
        desc: "No respondas con agresión. Guardá capturas, bloqueá a la persona y buscá ayuda de un adulto o institución.",
        extra:
            "El silencio y el apoyo emocional son importantes. Nunca enfrentes la situación solo.",
        img: "/img/Ciberbullying.webp",
        icon: <ShieldAlert size={22} />,
        color: "red",
        tips: [
            "Guardá evidencia",
            "Bloqueá usuarios",
            "Denunciá el contenido",
        ],
    },
    {
        titulo: "Grooming",
        desc: "No compartas información personal ni fotos con desconocidos en internet.",
        extra:
            "Si alguien insiste en mantener secretos, pide imágenes o intenta manipularte, contáselo a un adulto de confianza.",
        img: "/img/Grooming.webp",
        icon: <UserRoundX size={22} />,
        color: "purple",
        tips: [
            "No enviar fotos",
            "No compartir ubicación",
            "Avisar a un adulto",
        ],
    },
    {
        titulo: "Phishing",
        desc: "No hagas clic en enlaces sospechosos ni ingreses datos personales en páginas desconocidas.",
        extra:
            "Los ciberdelincuentes suelen hacerse pasar por bancos, empresas o sorteos para robar información.",
        img: "/img/phishing.webp",
        icon: <Fish size={22} />,
        color: "blue",
        tips: [
            "Verificá URLs",
            "Desconfiá de urgencias",
            "Usá doble verificación",
        ],
    },
];

function Consejos() {
    return (
        <section className="consejos">
            {/* HEADER */}
            <div className="consejos-header">
                <div className="mini-badge">
                    <Lock size={16} />
                    <span>SEGURIDAD DIGITAL</span>
                </div>

                <h1>Consejos para navegar más seguro</h1>

                <p>
                    Internet puede ser un lugar increíble para aprender y comunicarse,
                    pero también es importante saber reconocer riesgos y actuar de forma segura.
                </p>
            </div>

            {/* CARDS */}
            <div className="consejos-contenido">
                {consejos.map((item, index) => (
                    <article
                        key={index}
                        className={`fila ${index % 2 !== 0 ? "reverse" : ""}`}
                    >
                        {/* IMAGEN */}
                        <div className="imagen">
                            <img src={item.img} alt={item.titulo} />
                        </div>

                        {/* TEXTO */}
                        <div className="texto">
                            <div className={`categoria ${item.color}`}>
                                {item.icon}
                                <span>{item.titulo}</span>
                            </div>

                            <h2>{item.titulo}</h2>

                            <p className="descripcion">{item.desc}</p>

                            <p className="extra">{item.extra}</p>

                            <div className="tips">
                                {item.tips.map((tip, i) => (
                                    <div className="tip" key={i}>
                                        <CheckCircle2 size={16} />
                                        <span>{tip}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="warning">
                                <TriangleAlert size={18} />
                                <p>
                                    Ante cualquier situación incómoda en internet, hablá con un
                                    adulto o persona de confianza.
                                </p>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}

export default Consejos;