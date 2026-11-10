import { ICONOS } from "./iconos";

// Ícono de línea de Lucide con trazo redondeado.
export default function Icono({ n, className = "ico" }: { n: string; className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" dangerouslySetInnerHTML={{ __html: ICONOS[n] ?? "" }} />
  );
}
