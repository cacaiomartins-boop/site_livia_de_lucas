import { useState } from "react";
import { clinic } from "../data/clinic";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#trabalho", label: "Meu trabalho" },
  { href: "#consultorio", label: "Consultório" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [aberto, setAberto] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-oliva text-creme shadow-md">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-5">
        <a href="#inicio" className="text-sm font-semibold uppercase tracking-[0.3em] sm:text-base">
          {clinic.nome}
        </a>

        <nav className="hidden gap-8 text-sm uppercase tracking-[0.2em] lg:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-mostarda">
              {l.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          aria-label="Abrir menu"
          aria-expanded={aberto}
          onClick={() => setAberto(!aberto)}
          className="lg:hidden"
        >
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
            {aberto ? (
              <path d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {aberto && (
        <nav className="flex flex-col border-t border-creme/20 bg-oliva px-5 pb-4 lg:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setAberto(false)}
              className="py-3 text-sm uppercase tracking-[0.2em]"
            >
              {l.label}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
}
