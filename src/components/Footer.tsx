import { clinic } from "../data/clinic";

export default function Footer() {
  return (
    <footer className="bg-oliva px-5 py-10 text-center text-creme">
      <p className="text-sm font-medium uppercase tracking-[0.2em]">Aviso: {clinic.aviso[0]}</p>
      <p className="mt-1 text-sm tracking-wide text-creme/85">{clinic.aviso[1]}</p>
      <p className="mt-6 text-xs uppercase tracking-[0.25em] text-creme/70">
        {clinic.nome} · {clinic.titulo} · {clinic.cidadeCurta}
      </p>
      <p className="mt-2 text-xs text-creme/60">© {new Date().getFullYear()} {clinic.nome}</p>
    </footer>
  );
}
