import { clinic } from "../data/clinic";

export default function Trabalho() {
  return (
    <section id="trabalho" className="bg-oliva px-5 py-16 text-creme sm:py-20">
      <div className="mx-auto max-w-2xl">
        <h2 className="mb-8 text-center text-xl font-semibold uppercase tracking-[0.3em] sm:text-2xl">
          Como é o meu trabalho
        </h2>
        <div className="space-y-4 text-lg leading-relaxed">
          {clinic.trabalho.map((p) => (
            <p key={p} className="whitespace-pre-line">{p}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
