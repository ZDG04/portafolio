"use client";
import { useEffect, useState } from "react";
import { profile } from "@/data/data";
import Icon from "./Icon";

function useTyped(words) {
  const [text, setText] = useState("");
  useEffect(() => {
    let w = 0, c = 0, del = false, t;
    const tick = () => {
      const word = words[w];
      setText(word.slice(0, c));
      if (!del && c === word.length) { del = true; t = setTimeout(tick, 1500); return; }
      if (del && c === 0) { del = false; w = (w + 1) % words.length; }
      c += del ? -1 : 1;
      t = setTimeout(tick, del ? 40 : 80);
    };
    tick();
    return () => clearTimeout(t);
  }, [words]);
  return text;
}

export default function Hero() {
  const typed = useTyped(profile.roles);
  return (
    <section id="inicio" className="py-20 sm:py-28">
      <p className="mb-4 flex items-center gap-2 text-xs text-pink"><Icon name="spark" />Disponible para proyectos</p>
      <h1 className="font-serif text-6xl font-semibold leading-[0.95] sm:text-8xl">
        Hola, soy <span className="grad-text">{profile.name}</span>
      </h1>
      <p className="mt-5 min-h-8 text-lg font-bold text-pink">
        {typed}<span className="animate-pulse">|</span>
      </p>
      <p className="mt-4 mb-8 max-w-lg text-mu">{profile.intro}</p>
      <div className="flex flex-wrap items-center gap-3">
        <a href="#proyectos" className="btn btn-primary">Ver proyectos <Icon name="arrow" /></a>
        <a href={profile.cv} className="btn">Descargar CV <Icon name="download" /></a>
        <a href={profile.github} aria-label="GitHub" className="grid size-11 place-items-center rounded-full border border-line bg-card transition hover:text-pink hover:shadow-glow"><Icon name="github" /></a>
        <a href={profile.linkedin} aria-label="LinkedIn" className="grid size-11 place-items-center rounded-full border border-line bg-card transition hover:text-pink hover:shadow-glow"><Icon name="linkedin" /></a>
      </div>
    </section>
  );
}
