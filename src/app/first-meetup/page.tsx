'use client';
// components/MeetupCard.tsx
import Head from 'next/head';
import Image from 'next/image';
import { FiExternalLink, FiLinkedin, FiInstagram } from "react-icons/fi";
import { useMediaQuery } from 'react-responsive'; // Importa el hook
// NOTA: Se ELIMINÓ la importación 'import styles from ...'
// ya que has movido todas las clases a un archivo CSS global.

// Componentes de Iconos (SVG)
// El SVG de Ubicación (Map Pin)
// Las props de React.SVGProps<SVGSVGElement> están bien para TS.
const LocationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 1 1 18 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// El SVG de Calendario (Calendar)
const DateIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

// El SVG de Tiempo (Clock)
const TimeIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

// El SVG de Spotify
const SpotifyIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12 1.5C6.21 1.5 1.5 6.21 1.5 12S6.21 22.5 12 22.5 22.5 17.79 22.5 12 17.79 1.5 12 1.5Zm5.18 15.23a.93.93 0 0 1-1.28.31c-3.51-2.15-7.93-2.64-13.12-1.46a.93.93 0 0 1-.39-1.82c5.6-1.28 10.43-.71 14.3 1.64.45.27.6.86.29 1.33Zm1.75-3.44a1.16 1.16 0 0 1-1.59.39c-4.03-2.46-10.17-3.18-14.94-1.76a1.16 1.16 0 0 1-.66-2.22c5.36-1.6 12.07-.8 16.7 2.03.53.32.7 1 .4 1.56Zm.16-3.64c-4.66-2.77-12.38-3.03-16.83-1.72a1.38 1.38 0 0 1-.79-2.64c5.16-1.55 13.72-1.25 19.09 1.94a1.38 1.38 0 1 1-1.47 2.42Z" />
  </svg>
);

export default function MeetupCard() {

  const isMobile = useMediaQuery({ maxWidth: 499 });

  // Determina la fuente de la imagen
  const logoSrc = isMobile ? "/logo-uniconhub.png" : "/logo-uniconhub-L.png";
  return (
    <>
      <Head>
        <title>UniconHub Devs Meetup – Primera Meetup</title>
        {/* Mantener el link de la fuente si no se usa next/font */}
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&display=swap" rel="stylesheet" />
      </Head>

      {/* Cambiado de styles.wrap a className="wrap" */}
      <div className="wrap">
        <div className="card">
          <header className="hero">
            <div className="logo mb-8 sm:mb-0">

              <Image src={logoSrc} alt="Logo UniconHub" width={160} height={140} />

            </div>
            <a href="https://luma.com/o1xdg7ob" target="_blank" rel="noopener noreferrer">  <span className="badge">UNICONHUB DEVS · MEETUP</span></a>
            <h1> <span style={{ color: 'var(--cyan)' }}>Primera Meetup</span></h1>
            <p className="subtitle">Espacio tech juvenil para compartir sin egos: pasión, comunidad y aprendizaje.</p>

            <div className="meta" aria-label="Detalles del evento">
              <a href="https://share.google/I4NwUulJy4AA0TmK9" target="_blank" rel="noopener noreferrer">
                <div className="meta-item">
                  {/* Asegúrate de que tu CSS global tenga el estilo para .meta svg */}
                  <LocationIcon />
                  Oficinas de Mercado Libre
                </div>
              </a>
              <div className="meta-item">
                <DateIcon />
                Viernes 24 de octubre
              </div>
              <div className="meta-item">
                <TimeIcon />
                4:15 p.m. – 7:00 p.m.
              </div>
            </div>
          </header>

          <div className="grid">
            <section className="speakers" aria-label="Speakers">
              <div className="section-title">Speakers</div>
              <div className="speakers-list">
                <SpeakerCard name="Majo Arias" topic="Más allá de los píxeles" image="/majo-arias.jpg" instagram="https://www.instagram.com/mjota03" linkedin='https://www.linkedin.com/in/ariasmjota' />
                <SpeakerCard name="Alejandro Gómez" topic="JavaScript para el espacio" image="/alejandro-gomez.jpeg" instagram="https://www.instagram.com/alejandro_lpts" linkedin='https://www.linkedin.com/in/agmez'/>
                <SpeakerCard name="Bruno Ramírez" topic="Cómo capitalizar tu hackathon" image="/bruno-ramirez.jpeg" instagram="https://www.instagram.com/brunooosf" linkedin='https://www.linkedin.com/in/sergiobrunoramirez'/>

              </div>
            </section>

            <section className="agenda" aria-label="Agenda">
              <div className="section-title">Agenda</div>
              <div className="slot">
                <div className="time">4:15</div>
                <div>
                  <div className="title">Inauguración y Bienvenida: ¿Qué es UniconHub?</div>
                  <div className="speaker">Roni Hernández · 15 min</div>
                </div>
              </div>
              <div className="slot">
                <div className="time">4:30</div>
                <div>
                  <div className="title">Más allá de los píxeles: cómo los devs influyen en la experiencia del usuario</div>
                  <div className="speaker">Majo Arias · 30 min</div>
                </div>
              </div>
              <div className="slot">
                <div className="time">5:20</div>
                <div>
                  <div className="title">JavaScript para el espacio</div>
                  <div className="speaker">Alejandro Gómez · 30 min</div>
                </div>
              </div>
              <div className="slot">
                <div className="time">6:10</div>
                <div>
                  <div className="title">Cómo capitalizar tu hackathon</div>
                  <div className="speaker">Bruno Ramírez · 30 min</div>
                </div>
              </div>
              <div className="slot">
                <div className="time">6:40</div>
                <div>
                  <div className="title">Cierre e Inauguración: Podcast UNICONHUB</div>
                  <div className="speaker">
                    Presentación del primer capítulo · 20 min <br />
                    <span className="podcast-badge" title="Spotify">
                      <SpotifyIcon /> Spotify
                    </span>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="pb-6">
            {/* Nuevo contenedor para la imagen y el texto del footer */}
            <div className="footer-content flex items-center gap-2 justify-center">
              <Image
                src="/logo-uniconhub.png"
                alt="Logo UniconHub"
                width={45}
                height={45}
                // Los estilos inline para la imagen ahora se pueden simplificar
                // o mover al CSS global si prefieres mantenerlos ahí.
                // Aquí se mantienen algunos para el filtro y la opacidad.
                style={{
                  opacity: '.95',
                  filter: 'drop-shadow(0 0 6px rgba(0,209,255,0.3))',
                }}
              />
              {/* El texto justo al lado de la imagen */}
              <span>UniconHub · <span className="brand">Devs Meetup</span> — Primera Edición</span>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}

function SpeakerCard({ name, topic, image, instagram, linkedin }: { name: string, topic: string, image: string, instagram: string, linkedin: string }) {
  return (
    <article className="rounded-xl overflow-hidden shadow-xl shadow-black/50 border border-slate-500/30 bg-gradient-to-b from-white/10 to-white/5">

      {/* Contenedor de Imagen (Se mantiene igual) */}
      <div className="relative h-80 speaker-card-image">
        <Image src={image} alt={name} fill style={{ objectFit: 'cover' }} />
        {/* Si tenías un botón social sobre la imagen, estaría aquí */}
      </div>

      <div className="info p-4"> {/* Agregamos el padding 'p-4' de Tailwind */}

        {/* Contenedor Flexbox para alinear el Nombre a la Izquierda y el Enlace a la Derecha */}
        <div className="flex items-center justify-between mb-1">

          {/* Nombre del Orador (Se mantiene a la izquierda) */}
          <div className="name text-lg font-extrabold">{name}</div>

          {/* Enlace de Instagram/Flecha (Se empuja a la derecha) */}
          <div>

            <a
              href={linkedin}
              target="_blank"
              rel="noopener noreferrer"
              // Clases de Tailwind para estilo y color
              className="text-white hover:text-[var(--cyan)] transition-colors"
              title={`Perfil de ${name}`}
            >
              <FiLinkedin size={20} />
            </a>
            <div className='pb-2'></div>
            <a
              href={instagram}
              target="_blank"
              rel="noopener noreferrer"
              // Clases de Tailwind para estilo y color
              className="text-white hover:text-[var(--cyan)] transition-colors"
              title={`Perfil de ${name}`}
            >
              <FiInstagram size={20} />
            </a>
          </div>
        </div>

        {/* Tema de la Charla */}
        <div className="topic mt-1 text-sm text-[var(--muted)]">{topic}</div>
      </div>
    </article>
  );
}