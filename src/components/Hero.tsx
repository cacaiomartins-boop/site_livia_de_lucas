import { clinic, whatsappLink } from "../data/clinic";
import { IconeWhatsApp } from "./WhatsAppFlutuante";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="bg-cover bg-center px-5 py-16 sm:py-24"
      style={{ backgroundImage: `url(${clinic.imagens.arte})` }}
    >
      <div className="mx-auto max-w-md bg-oliva px-6 py-14 text-center text-creme shadow-xl sm:px-10 sm:py-16">
        <h1 className="text-2xl font-semibold uppercase tracking-[0.3em] sm:text-3xl">
          {clinic.nome}
        </h1>
        <p className="mt-5 text-lg tracking-[0.25em]">{clinic.titulo}</p>
        <p className="mt-1 text-base tracking-[0.2em] text-creme/80">{clinic.orientacao}</p>

        <p className="mx-auto mt-10 max-w-xs text-sm leading-relaxed tracking-[0.12em] text-creme/90">
          {clinic.atendimento}
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-10 inline-flex items-center gap-2 border border-creme px-6 py-3 text-sm uppercase tracking-[0.2em] transition hover:bg-creme hover:text-oliva"
        >
          <IconeWhatsApp className="h-5 w-5" />
          Agendar pelo WhatsApp
        </a>
      </div>
    </section>
  );
}
