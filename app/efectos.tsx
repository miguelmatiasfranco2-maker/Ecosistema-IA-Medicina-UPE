"use client";

import { useEffect } from "react";

// Animaciones de la presentación: entrada de bloques, contadores, barra de avance,
// capítulo activo en el menú y recorridos que se dibujan al bajar.
// Sin JavaScript todo se ve completo; con movimiento reducido no se anima nada.
export default function Efectos() {
  useEffect(() => {
    const quieto = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const raiz = document.documentElement;

    const barra = document.querySelector<HTMLElement>(".progress-bar");
    const alDesplazar = () => {
      const total = raiz.scrollHeight - window.innerHeight;
      if (barra) barra.style.transform = `scaleX(${total > 0 ? window.scrollY / total : 0})`;
    };
    alDesplazar();
    window.addEventListener("scroll", alDesplazar, { passive: true });

    // Los enlaces internos (#capitulo-…) se resuelven acá: si los toma el enrutador,
    // pide datos .rsc que no existen en GitHub Pages y repite la petición cientos de veces.
    const alClic = (e: MouseEvent) => {
      const a = (e.target as Element | null)?.closest?.("a[href^='#']");
      if (!a || e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      const id = a.getAttribute("href")!.slice(1);
      const destino = id ? document.getElementById(id) : document.body;
      if (!destino) return;
      e.preventDefault();
      e.stopPropagation();
      destino.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      history.replaceState(history.state, "", `#${id}`);
    };
    document.addEventListener("click", alClic, true);

    const enlaces = Array.from(document.querySelectorAll<HTMLAnchorElement>(".topbar nav a"));
    const menu = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        enlaces.forEach((a) => a.classList.toggle("active", a.getAttribute("href") === `#${e.target.id}`));
      }
    }, { rootMargin: "-45% 0px -50% 0px" });
    document.querySelectorAll("section[id^='capitulo-']").forEach((s) => menu.observe(s));

    if (quieto) return () => { window.removeEventListener("scroll", alDesplazar); document.removeEventListener("click", alClic, true); menu.disconnect(); };

    raiz.classList.add("anima");

    const contar = (el: HTMLElement) => {
      const final = Number(el.dataset.count);
      const prefijo = el.dataset.prefix ?? "";
      const inicio = performance.now();
      const paso = (t: number) => {
        const k = Math.min(1, (t - inicio) / 1600);
        el.textContent = prefijo + Math.round(final * (1 - Math.pow(1 - k, 3))).toLocaleString("es-PY");
        if (k < 1) requestAnimationFrame(paso);
      };
      requestAnimationFrame(paso);
    };

    const vista = new IntersectionObserver((entradas) => {
      for (const e of entradas) {
        if (!e.isIntersecting) continue;
        const el = e.target as HTMLElement;
        el.classList.add("visible");
        el.querySelectorAll<HTMLElement>("[data-count]").forEach(contar);
        if (el.dataset.count) contar(el);
        vista.unobserve(el);
      }
    }, { threshold: 0.18, rootMargin: "0px 0px -6% 0px" });
    document.querySelectorAll("[data-reveal], [data-draw], .section-head, .timeline article, .eco-card, .survey-block, .results").forEach((el) => vista.observe(el));

    return () => {
      window.removeEventListener("scroll", alDesplazar);
      document.removeEventListener("click", alClic, true);
      menu.disconnect();
      vista.disconnect();
      raiz.classList.remove("anima");
    };
  }, []);

  return <div className="progress-bar" aria-hidden="true" />;
}
