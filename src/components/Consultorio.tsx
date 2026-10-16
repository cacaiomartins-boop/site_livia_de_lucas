import { clinic, mapaEmbed, mapaLink } from "../data/clinic";

export default function Consultorio() {
  return (
    <section id="consultorio" className="px-5 py-16 sm:py-20">
      <div className="mx-auto max-w-5xl">
        <h2 className="titulo-secao">Consultório</h2>

        <div className="grid gap-4 sm:grid-cols-3">
          {clinic.imagens.consultorio.map((img) => (
            <img
              key={img.src}
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="aspect-[4/3] w-full sm:aspect-[3/4] object-cover shadow-md"
            />
          ))}
        </div>

        <p className="mt-10 text-center text-lg leading-relaxed">
          {clinic.endereco}
          <br />
          <a
            href={mapaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm uppercase tracking-[0.2em] text-oliva underline underline-offset-4 hover:text-terracota"
          >
            Abrir no Google Maps
          </a>
        </p>

        <div className="mt-6 overflow-hidden border border-oliva/30 shadow-md">
          <iframe
            title="Mapa do consultório"
            src={mapaEmbed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-80 w-full border-0 sm:h-96"
          />
        </div>
      </div>
    </section>
  );
}
