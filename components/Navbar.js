"use client";
import { useEffect, useState } from "react";
import { nav } from "@/data/data";
import Icon from "./Icon";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("inicio");

  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    document.querySelectorAll("section[id]").forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 px-5 pt-3 pb-1">
      <div className="glass mx-auto flex max-w-6xl items-center justify-between py-2.5 pr-2.5 pl-6">
        <a href="#inicio" className="text-lg font-bold">&lt;<span className="text-pink">Zarith</span>Gómez/&gt;</a>

        <ul className="hidden items-center gap-6 text-xs text-mu md:flex">
          {nav.map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} className={`transition hover:text-pink ${active === n.id ? "text-pink" : ""}`}>{n.label}</a>
            </li>
          ))}
          <li><a href="#contacto" className="btn btn-primary !py-2.5">Contacto</a></li>
        </ul>

        <button onClick={() => setOpen(!open)} aria-label="Abrir menú" aria-expanded={open}
          className="grid size-10 place-items-center rounded-full border border-line md:hidden">
          <Icon name={open ? "close" : "menu"} className="size-5" />
        </button>
      </div>

      {open && (
        <ul className="glass mx-auto mt-2 flex max-w-6xl flex-col gap-1 p-3 md:hidden">
          {[...nav, { id: "contacto", label: "Contacto" }].map((n) => (
            <li key={n.id}>
              <a href={`#${n.id}`} onClick={() => setOpen(false)} className="block rounded-xl px-4 py-3 text-sm hover:bg-card">{n.label}</a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
