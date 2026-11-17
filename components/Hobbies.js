import { hobbies } from "@/data/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Hobbies() {
  return (
    <section id="hobbies" className="py-20">
      <SectionHead icon="flower" eyebrow="Fuera del código" title="Hobbies" sub="La parte humana: lo que me inspira cuando apago el computador." />
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {hobbies.map((h) => (
          <Reveal key={h.title} className="glass p-6 text-center transition duration-300 hover:-translate-y-1 hover:-rotate-1 hover:shadow-glow">
            <Icon name={h.icon} className="mx-auto mb-3 size-10 text-pink" />
            <b className="block font-serif text-2xl font-semibold">{h.title}</b>
            <span className="text-xs text-mu">{h.text}</span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
