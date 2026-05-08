// Encuesta.jsx

import { useMemo, useState } from "react";
import "../Styles/Encuesta.css";

import {
    ShieldCheck,
    TriangleAlert,
    BadgeHelp,
    Lock,
    Smartphone,
    Fish,
    UserRoundX,
    Globe,
    Eye,
    CheckCircle2,
} from "lucide-react";

const preguntas = [
    {
        pregunta: "¿Usás la misma contraseña en varias cuentas?",
        icon: <Lock size={22} />,
        opciones: [
            { texto: "Sí, en casi todas", puntos: 0 },
            { texto: "En algunas", puntos: 1 },
            { texto: "No, uso distintas", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Aceptás solicitudes de desconocidos en redes sociales?",
        icon: <UserRoundX size={22} />,
        opciones: [
            { texto: "Sí, normalmente", puntos: 0 },
            { texto: "A veces", puntos: 1 },
            { texto: "No", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Verificás los enlaces antes de hacer clic?",
        icon: <Fish size={22} />,
        opciones: [
            { texto: "Nunca", puntos: 0 },
            { texto: "A veces", puntos: 1 },
            { texto: "Siempre", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Compartís información personal públicamente?",
        icon: <Eye size={22} />,
        opciones: [
            { texto: "Sí", puntos: 0 },
            { texto: "Solo algunas cosas", puntos: 1 },
            { texto: "No", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Tenés activada la verificación en dos pasos?",
        icon: <ShieldCheck size={22} />,
        opciones: [
            { texto: "No", puntos: 0 },
            { texto: "Solo en algunas cuentas", puntos: 1 },
            { texto: "Sí", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Descargás archivos o apps de sitios desconocidos?",
        icon: <TriangleAlert size={22} />,
        opciones: [
            { texto: "Sí", puntos: 0 },
            { texto: "A veces", puntos: 1 },
            { texto: "Nunca", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Leés los permisos que pide una aplicación?",
        icon: <Smartphone size={22} />,
        opciones: [
            { texto: "Nunca", puntos: 0 },
            { texto: "A veces", puntos: 1 },
            { texto: "Siempre", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Sabés reconocer un intento de phishing?",
        icon: <Fish size={22} />,
        opciones: [
            { texto: "No", puntos: 0 },
            { texto: "Más o menos", puntos: 1 },
            { texto: "Sí", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Configuraste la privacidad de tus redes sociales?",
        icon: <Globe size={22} />,
        opciones: [
            { texto: "No", puntos: 0 },
            { texto: "Parcialmente", puntos: 1 },
            { texto: "Sí", puntos: 2 },
        ],
    },

    {
        pregunta: "¿Hablás con adultos o personas de confianza si algo online te incomoda?",
        icon: <BadgeHelp size={22} />,
        opciones: [
            { texto: "No", puntos: 0 },
            { texto: "A veces", puntos: 1 },
            { texto: "Sí", puntos: 2 },
        ],
    },
];

function Encuesta() {
    const [respuestas, setRespuestas] = useState({});
    const [mostrarResultado, setMostrarResultado] = useState(false);

    const responder = (preguntaIndex, puntos) => {
        setRespuestas({
            ...respuestas,
            [preguntaIndex]: puntos,
        });
    };

    const resultado = useMemo(() => {
        const total = Object.values(respuestas).reduce(
            (acc, val) => acc + val,
            0
        );

        const porcentaje = Math.round((total / 20) * 100);

        if (porcentaje >= 80) {
            return {
                nivel: "Nivel seguro 🟢",
                color: "green",
                mensaje:
                    "Tenés buenos hábitos digitales y sabés cómo protegerte online.",
            };
        }

        if (porcentaje >= 50) {
            return {
                nivel: "Nivel moderado 🟡",
                color: "yellow",
                mensaje:
                    "Tenés conocimientos básicos, pero todavía hay hábitos que mejorar.",
            };
        }

        return {
            nivel: "Nivel vulnerable 🔴",
            color: "red",
            mensaje:
                "Hay varios hábitos digitales que podrían ponerte en riesgo online.",
        };
    }, [respuestas]);

    const preguntasRespondidas =
        Object.keys(respuestas).length === preguntas.length;

    return (
        <section className="encuesta">
            {/* HEADER */}
            <div className="encuesta-header">
                <div className="encuesta-badge">
                    <ShieldCheck size={16} />
                    <span>PERFIL DE SEGURIDAD DIGITAL</span>
                </div>

                <h1>¿Qué tan seguro sos en internet?</h1>

                <p>
                    Respondé estas preguntas para descubrir tu nivel de seguridad digital
                    y recibir recomendaciones para navegar más seguro.
                </p>
            </div>

            {/* PREGUNTAS */}
            <div className="preguntas-container">
                {preguntas.map((item, index) => (
                    <div className="pregunta-card" key={index}>
                        <div className="pregunta-top">
                            <div className="pregunta-icon">
                                {item.icon}
                            </div>

                            <h2>
                                {index + 1}. {item.pregunta}
                            </h2>
                        </div>

                        <div className="opciones">
                            {item.opciones.map((opcion, i) => (
                                <button
                                    key={i}
                                    className={`opcion ${respuestas[index] === opcion.puntos
                                        ? "selected"
                                        : ""
                                        }`}
                                    onClick={() =>
                                        responder(index, opcion.puntos)
                                    }
                                >
                                    {opcion.texto}
                                </button>
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {/* BOTON */}
            <div className="resultado-btn-container">
                <button
                    className="resultado-btn"
                    disabled={!preguntasRespondidas}
                    onClick={() => setMostrarResultado(true)}
                >
                    Ver resultado
                </button>
            </div>

            {/* RESULTADO */}
            {mostrarResultado && (
                <div className={`resultado-card ${resultado.color}`}>
                    <div className="resultado-icon">
                        <CheckCircle2 size={40} />
                    </div>

                    <h2>{resultado.nivel}</h2>

                    <p>{resultado.mensaje}</p>

                    <div className="resultado-bar">
                        <div
                            className="resultado-fill"
                            style={{
                                width: `${Math.round(
                                    (Object.values(respuestas).reduce(
                                        (acc, val) => acc + val,
                                        0
                                    ) /
                                        20) *
                                    100
                                )
                                    }%`,
                            }}
                        />
                    </div>
                </div>
            )}
        </section>
    );
}

export default Encuesta;