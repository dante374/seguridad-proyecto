import { useEffect, useRef, useState } from "react";
import Worker from "../mlc-worker.js?worker";
import { useLocation } from "react-router-dom";

export default function Chat() {
  const location = useLocation();
  const workerRef = useRef(null);

  const [progress, setProgress] = useState(0);
  const [result, setResult] = useState("");
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
        setResult((prev) => prev + "\n[Modelo listo]\n");
        setReady(true);
      }

      if (type === "reply") {
        setResult((prev) => prev + content);
      }
    };

    worker.postMessage({ type: "init" });

    return () => worker.terminate();
  }, []);

  const sendMessage = () => {
    if (!input.trim()) return;

    setResult((prev) => prev + `\n👤: ${input}\n🤖: `);

    //console.log(location.pathname);

    workerRef.current.postMessage({
      type: "chat",
      data: {
        messages: [
          {
            role: "system",
            content:
              `sos un asistente de seguridad online para niños y adolescentes llamado Marcelo... El usuario está actualmente en la sección: "${location.pathname}". Cuando te pregunten en que parte del sitio estan no muestres las rutas. Respondé siempre con consejos prácticos, ejemplos y recursos útiles relacionados a esa sección. Si el usuario hace una pregunta que no tiene que ver con seguridad online, respondé amablemente que solo podés ayudar con temas de seguridad online.`,
          },
          { role: "user", content: input },
        ],
      },
    });

    setInput("");
  };

  return (
    <>
      <button
        onClick={() => setOpen(!open)}
        style={{
          position: "fixed",
          bottom: 20,
          right: 20,
          zIndex: 1000,
        }}
      >
        💬
      </button>

      <div
        style={{
          position: "fixed",
          top: 0,
          right: open ? 0 : "-350px",
          width: 350,
          height: "100%",
          background: "white",
          boxShadow: "-2px 0 5px rgba(0,0,0,0.2)",
          padding: 15,
          transition: "right 0.3s ease",
          zIndex: 999,
        }}
      >
        <h3>Marcelo 🤖</h3>

        {/* progreso */}
        <div style={{ background: "#eee", marginBottom: 10 }}>
          <div
            style={{
              width: `${progress}%`,
              height: 10,
              background: "#4caf50",
            }}
          />
        </div>

        <textarea
          value={result}
          readOnly
          style={{ width: "100%", height: "60%" }}
        />

        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Preguntá algo..."
          style={{ width: "70%" }}
        />

        <button onClick={sendMessage} disabled={!ready}>
          Enviar
        </button>
      </div>
    </>
  );
}