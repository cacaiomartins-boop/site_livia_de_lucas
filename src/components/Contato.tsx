import { FormEvent, useState } from "react";
import { clinic, whatsappLink } from "../data/clinic";
import { IconeWhatsApp } from "./WhatsAppFlutuante";

type Estado = "parado" | "enviando" | "ok" | "erro";

export default function Contato() {
  const [estado, setEstado] = useState<Estado>("parado");

  async function enviar(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const dados = Object.fromEntries(new FormData(form).entries());
    setEstado("enviando");
    try {
      const resp = await fetch(`https://formsubmit.co/ajax/${clinic.email}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...dados,
          _subject: "Nova mensagem pelo site",
          _template: "table",
          _captcha: "false",
        }),
      });
      if (!resp.ok) throw new Error("falha");
      form.reset();
      setEstado("ok");
    } catch {
      setEstado("erro");
    }
  }

  return (
    <section id="contato" className="bg-creme/60 px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="titulo-secao">Contato</h2>

        <div className="flex flex-col items-center gap-3 text-center text-lg">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="botao"
          >
            <IconeWhatsApp className="h-5 w-5" />
            WhatsApp {clinic.telefone}
          </a>
          <a href={`mailto:${clinic.email}`} className="mt-2 hover:text-terracota">
            {clinic.email}
          </a>
        </div>

        <form onSubmit={enviar} className="mt-12 space-y-4">
          <p className="text-center text-base text-tinta/80">
            Ou envie uma mensagem por aqui:
          </p>
          {/* campo escondido anti-spam */}
          <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <div className="grid gap-4 sm:grid-cols-2">
            <input className="campo" name="nome" placeholder="Nome" aria-label="Nome" required autoComplete="name" />
            <input
              className="campo"
              name="email"
              type="email"
              placeholder="E-mail"
              aria-label="E-mail"
              required
              autoComplete="email"
            />
          </div>
          <input className="campo" name="telefone" placeholder="Telefone (opcional)" aria-label="Telefone (opcional)" autoComplete="tel" />
          <textarea className="campo min-h-36" name="mensagem" placeholder="Mensagem" aria-label="Mensagem" required />

          <div className="text-center">
            <button type="submit" disabled={estado === "enviando"} className="botao disabled:opacity-60">
              {estado === "enviando" ? "Enviando..." : "Enviar"}
            </button>
          </div>

          {estado === "ok" && (
            <p role="status" className="text-center text-oliva">
              Mensagem enviada! Em breve entro em contato.
            </p>
          )}
          {estado === "erro" && (
            <p role="alert" className="text-center text-terracota">
              Não foi possível enviar. Por favor, escreva para {clinic.email} ou pelo WhatsApp.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
