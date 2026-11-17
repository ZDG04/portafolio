import { philosophy, stack } from "@/data/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function About() {
  return (
    <section id="sobre-mi" className="py-20">
      <SectionHead icon="pen" eyebrow="Conóceme" title="Sobre mí" sub="Quién soy, qué me mueve y cómo trabajo." />
      <div className="grid gap-5 md:grid-cols-2">
        {philosophy.map((c) => (
          <Reveal key={c.title} className="glass p-7">
            <h3 className="mb-2 font-serif text-3xl font-semibold text-lav">{c.title}</h3>
            <p className="text-sm text-mu">{c.text}</p>
          </Reveal>
        ))}
      </div>
      {stack.map((g) => (
        <div key={g.group} className="mt-6">
          <h4 className="mb-3 text-xs text-mu">{g.group}</h4>
          <div className="flex flex-wrap gap-2.5">
            {g.items.map((s) => (
              <span key={s} className="flex items-center gap-2 rounded-2xl border border-line bg-card px-3.5 py-2 text-xs">
                <Icon name={g.icon} className="size-4 text-pink" />{s}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
