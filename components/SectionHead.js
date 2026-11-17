import Icon from "./Icon";

export default function SectionHead({ icon, eyebrow, title, sub }) {
  return (
    <header className="mb-9">
      <p className="mb-3 flex items-center gap-2 text-xs tracking-wide text-pink"><Icon name={icon} />{eyebrow}</p>
      <h2 className="mb-2 font-serif text-4xl font-semibold leading-none sm:text-5xl">{title}</h2>
      {sub && <p className="max-w-xl text-mu">{sub}</p>}
    </header>
  );
}
