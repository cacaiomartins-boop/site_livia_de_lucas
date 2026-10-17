import { clinic } from "../data/clinic";

export default function Sobre() {
  return (
    <section id="sobre" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <div className="grid items-start gap-10 md:grid-cols-[2fr_3fr]">
          <img
            src={clinic.imagens.retrato}
            alt={`Retrato de ${clinic.nome}`}
            className="mx-auto w-full max-w-sm object-cover shadow-lg"
          />

          <div className="space-y-4 text-lg leading-relaxed">
            <p className="text-xl font-normal text-terracota">{clinic.saudacao}</p>
            {clinic.bio.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>

        <div className="mt-14 bg-creme/60 px-6 py-10 sm:px-12">
          <h3 className="mb-6 text-center text-base font-semibold uppercase tracking-[0.3em] text-marrom">
            Formação
          </h3>
          <ul className="mx-auto max-w-2xl space-y-3 text-base leading-relaxed">
            {clinic.formacao.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-terracota" />
                <span>{f}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-8">
            <a
              href={clinic.lattes}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.2em] text-oliva underline underline-offset-4 hover:text-terracota"
            >
              Currículo Lattes
            </a>
            <a
              href={clinic.doctoralia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm uppercase tracking-[0.2em] text-oliva underline underline-offset-4 hover:text-terracota"
            >
              Perfil no Doctoralia
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
