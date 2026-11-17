import { education } from "@/data/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";

export default function Education() {
  return (
    <section id="educacion" className="py-20">
      <SectionHead icon="book" eyebrow="Trayectoria" title="Formación academica" sub="Mi académico." />
      <ol className="grid gap-5 border-l border-dashed border-line pl-6">
        {education.map((e) => (
          <Reveal key={e.title} as="li" className="glass relative p-6">
            <span className="grad absolute top-7 -left-[33px] size-3.5 rounded-full shadow-glow" />
            <h3 className="font-serif text-3xl font-semibold leading-none">{e.title}</h3>
            <p className="mt-1 mb-2 text-xs text-pink">{e.when}</p>
            <p className="text-[13px] text-mu">{e.text}</p>
          </Reveal>
        ))}
      </ol>
    </section>
  );
}
