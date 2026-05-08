// Chat.jsx

import { useEffect, useRef, useState } from "react";
import Worker from "../mlc-worker.js?worker";
import { useLocation } from "react-router-dom";
import "../Styles/Chat.css";

import {
    MessageCircle,
    Send,
    X,
    Bot,
    ShieldCheck,
} from "lucide-react";

export default function Chat() {
    const location = useLocation();
    const workerRef = useRef(null);

    const [progress, setProgress] = useState(0);
    const [messages, setMessages] = useState([
        {
            role: "bot",
            content:
                "¡Hola! Soy Marcelo 🤖. Puedo ayudarte con seguridad digital, privacidad y riesgos en internet.",
        },
    ]);

    const [input, setInput] = useState("");
    const [ready, setReady] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const worker = new Worker();
        workerRef.current = worker;

        worker.onmessage = (event) => {
            const { type, report, content } = event.data;

            if (type === "progress" && report?.progress) {
                setProgress(Math.round(report.progress * 100));
            }

            if (type === "ready") {
                setReady(true);

                setMessages((prev) => [
                    ...prev,
                    {
                        role: "bot",
                        content: "El asistente ya está listo para ayudarte 🚀",
                    },
                ]);
            }

            if (type === "reply") {
                setMessages((prev) => {
                    const updated = [...prev];

                    if (updated.length > 0 && updated[updated.length - 1].role === "bot") {
                        updated[updated.length - 1] = {
                            ...updated[updated.length - 1],
                            content:
                                updated[updated.length - 1].content + content,
                        };

                        return updated;
                    }

                    return [
                        ...updated,
                        {
                            role: "bot",
                            content,
                        },
                    ];
                });
            }
        };

        worker.postMessage({ type: "init" });

        return () => worker.terminate();
    }, []);

    const sendMessage = () => {
        if (!input.trim()) return;

        const userMessage = input;

        setMessages((prev) => [
            ...prev,
            {
                role: "user",
                content: userMessage,
            },
        ]);

        workerRef.current.postMessage({
            type: "chat",
            data: {
                messages: [
                    {
                        role: "system",
                        content: `
Sos Marcelo, un asistente especializado en seguridad online para niños y adolescentes.

El usuario está actualmente en la sección:
"${location.pathname}"

Reglas:
- Respondé de forma clara y amigable.
- Explicá conceptos simples.
- Da consejos prácticos.
- Si preguntan dónde están, no muestres rutas.
- Si la pregunta no tiene relación con seguridad online, privacidad, riesgos digitales o ciudadanía digital, respondé amablemente que solo podés ayudar en esos temas.
            `,
                    },
                    {
                        role: "user",
                        content: userMessage,
                    },
                ],
            },
        });

        setInput("");
    };

    return (
        <>
            {/* BOTON FLOTANTE */}
            <button
                className={`chat-toggle ${open ? "hidden" : ""}`}
                onClick={() => setOpen(true)}
            >
                <MessageCircle size={28} />
            </button>

            {/* CHAT */}
            <div className={`chat-panel ${open ? "open" : ""}`}>
                {/* HEADER */}
                <div className="chat-header">
                    <div className="chat-header-info">
                        <div className="chat-avatar">
                            <Bot size={22} />
                        </div>

                        <div>
                            <h3>Marcelo</h3>

                            <p>
                                <ShieldCheck size={14} />
                                Asistente de seguridad digital
                            </p>
                        </div>
                    </div>

                    <button
                        className="close-btn"
                        onClick={() => setOpen(false)}
                    >
                        <X size={20} />
                    </button>
                </div>

                {/* PROGRESS */}
                <div className="progress-container">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    />

                    <span>{ready ? "Modelo listo" : `Cargando ${progress}%`}</span>
                </div>

                {/* MENSAJES */}
                <div className="chat-messages">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`message ${msg.role}`}
                        >
                            {msg.content}
                        </div>
                    ))}
                </div>

                {/* INPUT */}
                <div className="chat-input-area">
                    <input
                        type="text"
                        value={input}
                        placeholder="Preguntá algo..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) =>
                            e.key === "Enter" && sendMessage()
                        }
                    />

                    <button
                        onClick={sendMessage}
                        disabled={!ready}
                    >
                        <Send size={18} />
                    </button>
                </div>
            </div>
        </>
    );
}