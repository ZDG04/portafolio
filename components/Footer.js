import { profile } from "@/data/data";
import Icon from "./Icon";

export default function Footer() {
  return (
    <footer className="border-t border-line py-7 text-xs text-mu">
      <div className="mx-auto flex max-w-6xl flex-wrap justify-between gap-3 px-5">
        <span>© 2026 {profile.name}. Todos los derechos reservados.</span>
        <span className="flex items-center gap-2">Hecho con <Icon name="flower" className="size-4 text-pink" /></span>
      </div>
    </footer>
  );
}
