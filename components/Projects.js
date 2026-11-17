"use client";
import { useState } from "react";
import { projects, filters } from "@/data/data";
import SectionHead from "./SectionHead";
import Reveal from "./Reveal";
import Icon from "./Icon";

export default function Projects() {
  const [filter, setFilter] = useState("todos");
  const list = projects.filter((p) => filter === "todos" || p.category === filter);

  return (
    <section id="proyectos" className="py-20">
      <SectionHead icon="layers" eyebrow="Lo más importante" title="Proyectos destacados"
        sub="Una selección de mi trabajo. Cada tarjeta enlaza a la demo en vivo y al código." />

      <div className="mb-7 flex flex-wrap gap-2.5">
        {filters.map((f) => (
          <button key={f.id} onClick={() => setFilter(f.id)} aria-pressed={filter === f.id}
            className={`rounded-full border px-4 py-2 text-xs transition ${filter === f.id ? "grad border-transparent text-white" : "border-line bg-card text-mu hover:text-tx"}`}>
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-6">
        {list.map((p, i) => (
          <Reveal key={p.title} as="article"
            className={`glass group flex flex-col overflow-hidden transition duration-300 hover:-translate-y-1.5 hover:shadow-glow ${i === 0 ? "md:col-span-4" : "md:col-span-2"}`}>
            <div className={`relative grid place-items-center text-white ${i === 0 ? "h-56 md:h-72" : "h-44"}`}
              style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}>
              {p.image
                ? <img src={p.image} alt={p.title} className="absolute inset-0 size-full object-cover" />
                : <Icon name={p.icon} className="size-14 opacity-90 transition group-hover:scale-110" />}
              <span className="absolute top-3.5 left-3.5 rounded-full bg-black/35 px-2.5 py-1 text-[11px]">{p.year}</span>
            </div>
            <div className="flex flex-1 flex-col gap-2 p-5">
              <h3 className="font-serif text-3xl font-semibold leading-none">{p.title}</h3>
              <p className="text-[13px] text-mu">{p.text}</p>
              <div className="mt-auto flex flex-wrap gap-1.5 pt-2">
                {p.tags.map((t) => <span key={t} className="rounded-full border border-pink/25 bg-pink/10 px-2.5 py-0.5 text-[11px] text-pink">{t}</span>)}
              </div>
              <div className="mt-2 flex gap-4 text-xs text-lav">
                {p.demo && (
                  <a href={p.demo} className="flex items-center gap-1.5 hover:text-pink">Ver demo
                    <Icon name="arrow" /></a>
                )}
                {Array.from({ length: 5 }, (_, i) => i + 1).map((n) => {
                  const repo = p[`repo${n}`];
                  const name = p[`namerepo${n}`];

                  return repo && (
                    <a
                      key={n}
                      href={repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 hover:text-pink"
                    >
                      {name || `Repositorio`}
                      <Icon name="github" />
                    </a>
                  );
                })}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
