/**
 * Biblioteca de iconos. Para usar los tuyos, reemplaza el contenido de cualquier
 * entrada por tus propios elementos SVG (viewBox 24x24) o agrega nuevas entradas.
 * Uso: <Icon name="github" className="size-5" />
 */
const icons = {
  arrow: <path d="M7 17 17 7M8 7h9v9" />,
  download: <path d="M12 4v11m-4-4 4 4 4-4M5 20h14" />,
  github: <path d="M9 19c-4 1-4-2-6-2m12 4v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />,
  linkedin: <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2zM4 2a2 2 0 1 1 0 4 2 2 0 0 1 0-4z" />,
  mail: <><rect x="3" y="5" width="18" height="14" rx="3" /><path d="m4 7 8 6 8-6" /></>,
  pin: <><path d="M12 21s7-6.2 7-11a7 7 0 0 0-14 0c0 4.8 7 11 7 11z" /><circle cx="12" cy="10" r="2.5" /></>,
  send: <path d="m22 2-11 11M22 2l-7 20-4-9-9-4z" />,
  code: <path d="m8 7-5 5 5 5m8-10 5 5-5 5M14 4l-4 16" />,
  layers: <path d="m12 3 9 5-9 5-9-5zM3 13l9 5 9-5" />,
  db: <><ellipse cx="12" cy="6" rx="8" ry="3" /><path d="M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3" /></>,
  pen: <path d="m4 20 1-5L16 4l4 4L9 19zM14 6l4 4" />,
  spark: <path d="M12 3c.5 5 2 6.5 7 7-5 .5-6.5 2-7 7-.5-5-2-6.5-7-7 5-.5 6.5-2 7-7zM19 17v4M17 19h4" />,
  game: <><rect x="2" y="7" width="20" height="11" rx="5" /><path d="M7 10v5M4.5 12.5h5M16 11.5h.01M18 14h.01" /></>,
  music: <><path d="M9 18V5l11-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>,
  camera: <><path d="M4 8h3l2-3h6l2 3h3v11H4z" /><circle cx="12" cy="13" r="3.5" /></>,
  book: <path d="M4 5a2 2 0 0 1 2-2h14v16H6a2 2 0 0 0-2 2zM4 19V5" />,
  flower: <><circle cx="12" cy="12" r="2.5" /><path d="M12 9.5C10 6 10 3 12 2c2 1 2 4 0 7.5zM14.5 12c3.5-2 6.5-2 7.5 0-1 2-4 2-7.5 0zM12 14.5c2 3.5 2 6.5 0 7.5-2-1-2-4 0-7.5zM9.5 12C6 14 3 14 2 12c1-2 4-2 7.5 0z" /></>,
  menu: <path d="M4 7h16M4 12h16M4 17h16" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
    terminal: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="m7 9 3 3-3 3M13 15h4" /></>,
  layout: <><rect x="3" y="4" width="18" height="16" rx="3" /><path d="M3 9h18M9 9v11" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="m8.500 12 2.500 2.500 4.500-5" /></>,
  server: <><rect x="3" y="4" width="18" height="6" rx="2" /><rect x="3" y="14" width="18" height="6" rx="2" /><path d="M7 7h.01M7 17h.01" /></>,
  cloud: <path d="M7 18a4 4 0 0 1-.5-7.970 6 6 0 0 1 11.400 1.300A3.500 3.500 0 0 1 17.500 18z" />,
  shield: <><path d="M12 3 4 6v6c0 5 3.500 8 8 9 4.500-1 8-4 8-9V6z" /><path d="m9 12 2 2 4-4" /></>,
  chip: <><rect x="6" y="6" width="12" height="12" rx="2" /><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4" /></>,
  workflow: <><circle cx="6" cy="6" r="2.500" /><circle cx="18" cy="18" r="2.500" /><path d="M8.500 6H15a3 3 0 0 1 3 3v6.500M6 8.500V12a3 3 0 0 0 3 3h6.500" /></>,
};

export default function Icon({ name, className = "size-[1.15em]" }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7"
      strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className={`shrink-0 ${className}`}>
      {icons[name]}
    </svg>
  );
}
