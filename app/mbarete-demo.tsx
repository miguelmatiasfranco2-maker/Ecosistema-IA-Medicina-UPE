"use client";

import { useEffect, useRef, useState } from "react";

// Demostración animada de cómo responde Mbarete: recibe la pregunta, busca en los
// documentos de la institución y responde citando la fuente. Es un ejemplo ilustrativo.
const pregunta = "¿Cuántos equipos participaron del Desafío UPE Innovación 2026 y quién ganó?";
const fuentes = [
  ["Lista final de inscripciones", "Planilla · 30/10/2026"],
  ["Resultados del jurado", "Planilla · 08/11/2026"],
  ["Manual de participación", "PDF · Bases del Desafío"],
];
const respuesta = [
  { t: "Se inscribieron 45 equipos, con 117 participantes ", c: 1 },
  { t: "Ganó Prometheus, con 41,20 de 50 puntos y un premio de Gs. 10.000.000 ", c: 2 },
  { t: "El manual explica cómo evaluó el jurado ", c: 3 },
];

export default function MbareteDemo() {
  const caja = useRef<HTMLDivElement>(null);
  const [fase, setFase] = useState(4);
  const [letras, setLetras] = useState(pregunta.length);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let visible = false;
    let reloj: ReturnType<typeof setTimeout> | undefined;
    const ciclo = (f: number) => {
      if (!visible) return;
      setFase(f);
      if (f === 0) {
        let n = 0;
        const escribir = () => {
          n += 2;
          setLetras(Math.min(n, pregunta.length));
          if (n < pregunta.length) reloj = setTimeout(escribir, 28);
          else reloj = setTimeout(() => ciclo(1), 500);
        };
        setLetras(0);
        escribir();
        return;
      }
      const espera = [0, 1700, 1300, 1100, 6500][f];
      reloj = setTimeout(() => ciclo(f === 4 ? 0 : f + 1), espera);
    };
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
      clearTimeout(reloj);
      if (visible) ciclo(0);
    }, { threshold: 0.35 });
    if (caja.current) io.observe(caja.current);
    return () => { io.disconnect(); clearTimeout(reloj); };
  }, []);

  return (
    <div className="mbarete-demo" ref={caja} aria-label="Ejemplo ilustrativo de una consulta a Mbarete">
      <div className="demo-bar"><span className="demo-dot" /><b>Mbarete</b><small>IA local · servidor propio</small><em>Sin conexión a internet</em></div>
      <div className="demo-body">
        <div className="demo-q">{pregunta.slice(0, letras)}<i className={fase === 0 ? "caret" : "caret off"} /></div>
        <div className={`demo-search ${fase >= 1 ? "on" : ""}`}>
          <p>{fase >= 2 ? <span className="found" /> : <span className="spinner" />}{fase >= 2 ? "3 documentos encontrados" : "Buscando en los documentos de la universidad…"}</p>
          <ul>{fuentes.map(([n, d], i) => <li key={n} className={fase >= 2 ? "on" : ""} style={{ transitionDelay: `${i * 160}ms` }}><b>[{i + 1}]</b><span>{n}<small>{d}</small></span></li>)}</ul>
        </div>
        <div className={`demo-a ${fase >= 3 ? "on" : ""}`}>
          {respuesta.map((r, i) => <span key={r.c} style={{ transitionDelay: `${i * 450}ms` }}>{r.t}<sup>[{r.c}]</sup>{i < 2 ? ". " : "."}</span>)}
          <div className={`demo-foot ${fase >= 4 ? "on" : ""}`}><span>Respuesta con fuentes</span><span>Procesamiento local de la consulta</span></div>
        </div>
      </div>
      <p className="demo-note">Recreación animada de una consulta, con datos reales del Desafío.</p>
    </div>
  );
}
