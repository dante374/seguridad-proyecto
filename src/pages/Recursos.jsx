import "../styles/Recursos.css";
import {
    PlayCircle,
    Globe,
    BookOpen,
    ShieldCheck,
    ExternalLink,
} from "lucide-react";

export default function Recursos() {
    const videos = [
        {
            title: "Seguridad digital general",
            desc: "Aprendé conceptos clave sobre la privacidad y las configuraciones básicas en las redes.",
            link: "https://www.youtube.com/watch?v=UHREmmkbrvM",
        },
        {
            title: "Phishing ¿Qué es?",
            desc: "Conocé uno de los riesgos más comunes de internet y cómo prevenirlo.",
            link: "https://www.youtube.com/watch?v=XXUgt-Z8uZk",
        },
        {
            title: "Ciberseguridad: El objetivo sos vos",
            desc: "Además de internet, las amenazas están en todos lados, conocelas y prevenilas.",
            link: "https://www.youtube.com/watch?v=ByrLPojJYzM",
        },
        {
            title: "Suplantación de identidad",
            desc: "Cómo evitar las estafas y el robo de nuestros datos por parte de los ciberdelincuentes.",
            link: "https://www.youtube.com/watch?v=qkpQMddCrrk",
        },
    ];

    const sitios = [
        {
            title: "Con vos en la web",
            desc: "Programa 'Con Vos en la Web', con guías, derechos digitales y cómo actuar ante problemas en las redes o internet.",
            link: "https://www.argentina.gob.ar/justicia/convosenlaweb",
        },
        {
            title: "Pará, Pensá, Conectate Argentina",
            desc: "Campaña con consejos y estrategias para prevenir delitos digitales.",
            link: "https://www.argentina.gob.ar/seguridad/ciberdelito/para-pensa-conectate-argentina",
        },
        {
            title: "Incibe.es",
            desc: "Web del instituto nacional de ciberseguridad de España, es una plataforma con artículos, videos y material educativo.",
            link: "https://www.staysafeonline.org/es/recursos/seguridad-en-linea-y-privacidad",
        },
    ];

    const guias = [
        {
            title: "¿Cómo me protejo?",
            subtitle: "De Argentina.gob.ar",
            desc: "Consejos claros para las contraseñas, actualizaciones, phishing, privacidad etc.",
            link: "https://www.argentina.gob.ar/como-me-protejo-de-las-amenazas-en-internet",
        },
        {
            title: "Ciberseguridad",
            subtitle: "De Incibe.es",
            desc: "Cómo crear contraseñas robustas y cómo configurar el celular verificando amenazas.",
            link: "https://www.incibe.es/ciudadania/formacion/guias/guia-de-ciberseguridad-la-ciberseguridad-al-alcance-de-todos",
        },
        {
            title: "Guía de privacidad",
            subtitle: "PDF de Incibe.es",
            desc: "Un PDF muy completo sobre privacidad y cómo cuidarnos en redes, contraseñas y datos.",
            link: "https://www.aepd.es/sites/default/files/2019-09/guia-privacidad-y-seguridad-en-internet.pdf",
        },
        {
            title: "Zamba y Tina",
            subtitle: "De Argentina.gob.ar",
            desc: "Una herramienta educativa destinada a concientizar a las infancias sobre la importancia de la ciberseguridad.",
            link: "https://www.argentina.gob.ar/jefatura/innovacion-publica/informes-y-documentos-de-trabajo-de-la-secretaria-innovacion-publica-1",
        },
    ];

    const organizaciones = [
        {
            title: "Grooming Argentina",
            desc: "ONG especializada en grooming y delitos digitales contra menores.",
            link: "https://groomingarg.org",
        },
        {
            title: "RedSegura",
            desc: "Educación y prevención sobre grooming, sexting y cyberbullying.",
            link: "https://redseguraonline.com.ar",
        },
        {
            title: "INHOPE",
            desc: "Red global para reportar contenido ilegal y abuso infantil en internet.",
            link: "https://www.inhope.org/es/",
        },
    ];

    return (
        <div className="recursos-page">
            <div className="recursos-container">
                <h1>Recursos</h1>

                <p className="recursos-subtitle">
                    Materiales como <strong>sitios web, videos, guías y herramientas</strong> para profundizar los
                    <br />
                    conocimientos y saber cómo actuar bajo ciertas situaciones.
                </p>

                {/* VIDEOS */}
                <section className="resource-section">
                    <div className="section-header red">
                        <PlayCircle size={18} />
                        <span>Videos</span>
                    </div>

                    <span className="see-all">Ver todos →</span>

                    <div className="videos-grid">
                        {videos.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="video-card"
                            >
                                <div className="video-preview"></div>

                                <div className="video-content">
                                    <h4>{item.title}</h4>
                                    <p>{item.desc}</p>
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                {/* SITIOS */}
                <section className="resource-section">
                    <div className="section-header orange">
                        <Globe size={18} />
                        <span>Sitios web</span>
                    </div>

                    <div className="sites-grid">
                        {sitios.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="site-card"
                            >
                                <h4>
                                    {item.title}
                                    <ExternalLink size={13} />
                                </h4>

                                <p>{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* GUIAS */}
                <section className="resource-section">
                    <div className="section-header green">
                        <BookOpen size={18} />
                        <span>Guías</span>
                    </div>

                    <div className="guides-grid">
                        {guias.map((item, index) => (
                            <a
                                key={index}
                                href={item.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="guide-card"
                            >
                                <h4>
                                    {item.title}
                                    <ExternalLink size={13} />
                                </h4>

                                <small>{item.subtitle}</small>

                                <p>{item.desc}</p>
                            </a>
                        ))}
                    </div>
                </section>

                {/* ORGANIZACIONES */}
                <div className="bottom-grid">
                    <section className="resource-section organizations">
                        <div className="section-header purple">
                            <ShieldCheck size={18} />
                            <span>Organizaciones confiables</span>
                        </div>

                        <div className="organizations-grid">
                            {organizaciones.map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="org-card"
                                >
                                    <h4>
                                        {item.title}
                                        <ExternalLink size={13} />
                                    </h4>

                                    <p>{item.desc}</p>
                                </a>
                            ))}
                        </div>
                    </section>

                    <div className="help-card">
                        <div className="help-title">Líneas de ayuda (ARG)</div>

                        <ul>
                            <li>
                                Línea 104: Atención gratuita para situaciones de violencia,
                                acoso o vulneración de derechos.
                            </li>

                            <li>
                                Línea 137: Brinda contención, asesoramiento y acompañamiento
                                las 24h.
                            </li>

                            <li>
                                Línea 144: Asistencia confidencial en casos de violencia
                                (incluye digital).
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}