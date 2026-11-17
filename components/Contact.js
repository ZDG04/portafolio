"use client";
import { useState } from "react";
import { profile } from "@/data/data";
import SectionHead from "./SectionHead";
import Icon from "./Icon";

const field = "w-full rounded-2xl border border-line bg-card px-4 py-3 text-[13px] text-tx outline-none placeholder:text-mu focus:ring-2 focus:ring-pink";

export default function Contact() {
  const [status, setStatus] = useState("");

  async function onSubmit(e) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target));
    // Conecta aquí tu servicio: Formspree, EmailJS o una ruta /api/contact de Next.js.
    // await fetch("https://formspree.io/f/TU_ID", { method: "POST", body: JSON.stringify(data), headers: { "Content-Type": "application/json" } });
    console.log(data);
    setStatus("Mensaje listo. Conecta el formulario a un servicio para recibirlo.");
    e.target.reset();
  }

  return (
    <section id="contacto" className="py-20">
      <SectionHead icon="mail" eyebrow="Hablemos" title="Contactame" sub="" />
      <div className="grid gap-5 md:grid-cols-[.9fr_1.1fr]">
        <div className="glass grid content-start gap-4 p-7 text-[13px]">
          <a href={`mailto:${profile.email}`} className="flex items-center gap-3 hover:text-pink"><Icon name="mail" className="size-5 text-pink" />{profile.email}</a>
          <p className="flex items-center gap-3"><Icon name="pin" className="size-5 text-pink" />{profile.location}</p>
          <a href={profile.github} className="flex items-center gap-3 hover:text-pink"><Icon name="github" className="size-5 text-pink" />GitHub</a>
          <a href={profile.linkedin} className="flex items-center gap-3 hover:text-pink"><Icon name="linkedin" className="size-5 text-pink" />LinkedIn</a>
        </div>
        {/*<form onSubmit={onSubmit} className="glass grid gap-3 p-7">
          <input name="nombre" required placeholder="Tu nombre" aria-label="Nombre" className={field} />
          <input name="correo" required type="email" placeholder="Tu correo" aria-label="Correo" className={field} />
          <textarea name="mensaje" required placeholder="Cuéntame sobre tu proyecto" aria-label="Mensaje" className={`${field} min-h-32 resize-y`} />
          <button type="submit" className="btn btn-primary justify-center">Enviar mensaje <Icon name="send" /></button>
          <p role="status" className="min-h-5 text-xs text-lav">{status}</p>
        </form >*/}
      </div>
    </section>
  );
}
