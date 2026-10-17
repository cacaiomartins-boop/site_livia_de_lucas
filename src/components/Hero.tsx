import { clinic } from "../data/clinic";

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

        <p className="mx-auto mt-10 text-sm leading-relaxed tracking-[0.12em] text-creme/90">
          {clinic.atendimento[0]}
          <br />
          {clinic.atendimento[1]}
        </p>
      </div>
    </section>
  );
}
