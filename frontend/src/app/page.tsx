'use client';

import { useState } from 'react';
import Image from 'next/image';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Reveal from '../../components/Reveal';

const WHATSAPP_NUMBER = "50686094225";
const WHATSAPP_MESSAGE = "Hola Stephanie, me interesa agendar una clase contigo. ¿Cuándo tienes disponibilidad?";
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

/* ---------- Decorative SVGs ---------- */

function SunIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="18" fill="currentColor" />
      <g stroke="currentColor" strokeWidth="3" strokeLinecap="round">
        <line x1="50" y1="10" x2="50" y2="22" />
        <line x1="50" y1="78" x2="50" y2="90" />
        <line x1="10" y1="50" x2="22" y2="50" />
        <line x1="78" y1="50" x2="90" y2="50" />
        <line x1="22" y1="22" x2="30" y2="30" />
        <line x1="70" y1="70" x2="78" y2="78" />
        <line x1="22" y1="78" x2="30" y2="70" />
        <line x1="70" y1="30" x2="78" y2="22" />
      </g>
    </svg>
  );
}

function MountainIcon({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 70" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M5 60 L28 25 L42 45 L58 15 L78 40 L95 60 Z" fill="currentColor" />
      <path d="M24 32 L28 25 L32 32 L28 28 Z" fill="white" opacity="0.6" />
      <path d="M54 22 L58 15 L62 22 L58 18 Z" fill="white" opacity="0.6" />
    </svg>
  );
}

function MountainRange({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 1440 300" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      {/* Back mountains - lightest */}
      <path
        d="M0,300 L0,180 L120,100 L220,150 L340,80 L460,140 L580,70 L720,130 L860,60 L1000,120 L1140,90 L1280,130 L1440,80 L1440,300 Z"
        fill="currentColor"
        opacity="0.25"
      />
      {/* Mid mountains */}
      <path
        d="M0,300 L0,220 L100,170 L200,210 L320,140 L440,190 L560,130 L700,180 L840,120 L980,170 L1120,150 L1260,190 L1440,150 L1440,300 Z"
        fill="currentColor"
        opacity="0.5"
      />
      {/* Front mountains - darkest */}
      <path
        d="M0,300 L0,260 L90,220 L200,250 L340,200 L460,240 L580,210 L720,240 L860,200 L1000,230 L1140,210 L1280,240 L1440,220 L1440,300 Z"
        fill="currentColor"
        opacity="0.85"
      />
    </svg>
  );
}

function SunRays({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 400"
      preserveAspectRatio="xMidYMax meet"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="sunRaysGrad" cx="50%" cy="100%" r="80%">
          <stop offset="0%" stopColor="#F4C06B" stopOpacity="0.55" />
          <stop offset="40%" stopColor="#F5A65B" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#FFF8F0" stopOpacity="0" />
        </radialGradient>
      </defs>
      {/* Soft radial glow base */}
      <rect x="0" y="0" width="800" height="400" fill="url(#sunRaysGrad)" />
      {/* Narrow rays */}
      <g stroke="#F5A65B" strokeWidth="1.5" strokeLinecap="round" opacity="0.35">
        <line x1="400" y1="400" x2="80" y2="20" />
        <line x1="400" y1="400" x2="180" y2="0" />
        <line x1="400" y1="400" x2="280" y2="-20" />
        <line x1="400" y1="400" x2="400" y2="-40" />
        <line x1="400" y1="400" x2="520" y2="-20" />
        <line x1="400" y1="400" x2="620" y2="0" />
        <line x1="400" y1="400" x2="720" y2="20" />
      </g>
      <g stroke="#F4C06B" strokeWidth="2.5" strokeLinecap="round" opacity="0.55">
        <line x1="400" y1="400" x2="200" y2="40" />
        <line x1="400" y1="400" x2="340" y2="-10" />
        <line x1="400" y1="400" x2="460" y2="-10" />
        <line x1="400" y1="400" x2="600" y2="40" />
      </g>
    </svg>
  );
}

/* ---------- Components ---------- */

function WhatsAppButton({ label = "Reserva tu primera clase", variant = "primary" }: { label?: string; variant?: "primary" | "outline" }) {
  const base = "px-7 py-3.5 rounded-full text-base font-semibold transition-all shadow-lg flex items-center justify-center space-x-3 w-fit";
  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-orange-500 via-amber-500 to-amber-400 hover:from-orange-600 hover:to-amber-500 text-white hover:shadow-xl hover:scale-[1.02]"
      : "border-2 border-[#3D2F26] text-[#3D2F26] hover:bg-[#3D2F26] hover:text-[#FFF8F0]";
  return (
    <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className={`${base} ${styles}`}>
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z"/>
      </svg>
      <span>{label}</span>
    </a>
  );
}

function SectionBadge({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-300/60 shadow-sm">
      <span className="w-2 h-2 bg-gradient-to-br from-orange-500 to-amber-400 rounded-full"></span>
      <span className="text-xs font-semibold text-[#6B5545] tracking-widest uppercase">{children}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string | React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-sm border border-amber-200/70 hover:border-orange-300 transition-all overflow-hidden">
      <button
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 focus:ring-offset-transparent"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-base md:text-lg font-semibold text-[#3D2F26] pr-4">{question}</h3>
        <svg
          className={`w-5 h-5 text-orange-600 transition-transform duration-300 flex-shrink-0 ${isOpen ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>
      {isOpen && (
        <div className="px-6 pb-5 text-[#6B5545] leading-relaxed">
          {typeof answer === "string" ? <p>{answer}</p> : <div>{answer}</div>}
        </div>
      )}
    </div>
  );
}

/* ---------- Page ---------- */

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF8F0]">
      <Header />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-dawn-gradient pt-20 md:pt-24 pb-72 lg:pb-80 min-h-[92vh] flex flex-col justify-center">
        {/* Dawn clouds — fade in late so they don't steal attention from the sun */}
        <div className="absolute top-16 left-[8%] w-40 h-6 rounded-full bg-white/40 blur-xl pointer-events-none animate-text-fade-in animation-delay-2800"></div>
        <div className="absolute top-28 right-[10%] w-52 h-6 rounded-full bg-white/30 blur-xl pointer-events-none animate-text-fade-in animation-delay-3000"></div>
        <div className="absolute top-44 left-[20%] w-24 h-4 rounded-full bg-white/50 blur-lg pointer-events-none animate-text-fade-in animation-delay-3200"></div>

        {/* === Amanecer scene at horizon (sun first, then text) === */}

        {/* Wide halo glow */}
        <div className="absolute bottom-28 left-1/2 -translate-x-1/2 w-[680px] h-[680px] rounded-full bg-gradient-to-t from-orange-400/50 via-amber-300/35 to-amber-100/0 blur-3xl pointer-events-none z-0 animate-halo-reveal animation-delay-700"></div>

        {/* === Content: centered editorial layout === */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 w-full">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="animate-text-fade-in animation-delay-1500 flex flex-col items-center space-y-4">
              <div className="w-14 h-14 rounded-full overflow-hidden shadow-lg ring-2 ring-amber-300/60">
                <Image src="/logo4.jpeg" alt="Vitamina Movimiento" width={56} height={56} className="w-full h-full object-cover" />
              </div>
              <SectionBadge>Coach Certificada · Cartago, CR</SectionBadge>
            </div>

            <h1 className="font-display font-medium leading-[0.98] text-[#3D2F26] tracking-tight text-5xl md:text-7xl lg:text-[6.5rem]">
              <span className="block animate-word-reveal animation-delay-1800">El movimiento</span>
              <span className="block animate-word-reveal animation-delay-2000">es tu</span>
              <span className="block italic font-semibold text-sunrise-gradient animate-word-reveal animation-delay-2200">vitamina diaria.</span>
            </h1>

            <p className="text-lg md:text-xl text-[#6B5545] leading-relaxed max-w-2xl animate-text-fade-in animation-delay-2500">
              Aprende a conocer y mapear tu cuerpo para seguir haciendo lo que amas: caminar la montaña,
              levantar peso, correr o bailar por mucho más tiempo,{" "}
              <span className="font-semibold text-orange-700">sin lesiones.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-text-fade-in animation-delay-2600">
              <WhatsAppButton label="Reserva tu primera sesión" />
              <a
                href="#filosofia"
                className="px-7 py-3.5 rounded-full text-base font-semibold text-[#3D2F26] border-2 border-[#3D2F26]/25 hover:border-[#3D2F26] hover:bg-white/50 transition-all flex items-center justify-center space-x-2"
              >
                <span>Conoce el método</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </a>
            </div>

            {/* Quick proof points */}
            <div className="grid grid-cols-3 gap-10 md:gap-16 pt-10 border-t border-amber-400/40 w-full max-w-lg animate-text-fade-in animation-delay-2800">
              <div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-[#3D2F26]">+5</div>
                <div className="text-xs text-[#6B5545] mt-1 tracking-wide">años guiando</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-[#3D2F26]">50+</div>
                <div className="text-xs text-[#6B5545] mt-1 tracking-wide">personas sin dolor</div>
              </div>
              <div>
                <div className="font-display text-3xl md:text-4xl font-semibold text-[#3D2F26]">1:1</div>
                <div className="text-xs text-[#6B5545] mt-1 tracking-wide">enfoque personal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Mountain silhouette — rises from bottom, hides lower half of sun for authentic horizon */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none z-10 animate-mountains-rise">
          <MountainRange className="w-full h-56 md:h-64 text-[#5C3A2A] mountain-silhouette" />
        </div>
      </section>

      {/* ================= FILOSOFÍA ================= */}
      <section id="filosofia" className="relative py-24 bg-[#FFF8F0] overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionBadge>La Filosofía</SectionBadge>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#3D2F26] leading-tight">
                La consciencia postural se traduce en{" "}<br className="hidden md:block" />
                <span className="text-sunrise-gradient">longevidad.</span>
              </h2>
              <p className="mt-6 text-lg text-[#6B5545] leading-relaxed">
                La autoobservación, a través del yoga y el movimiento, nos permite reconocer patrones posturales y comprender mejor nuestro cuerpo. No solo practicamos: transformamos el cuerpo y la mente.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Pillar 1 */}
            <Reveal variant="up" delay={100}>
              <div className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-amber-200/70 hover:border-orange-300 transition-all">
                <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-amber-300 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform overflow-hidden">
                  <Image src="/logo4.jpeg" alt="VM" width={56} height={56} className="w-full h-full object-cover" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#3D2F26] mb-3">Hábito y vitalidad</h3>
                  <p className="text-[#6B5545] leading-relaxed">
                    El movimiento consciente es el suplemento que tu cuerpo necesita. Una dosis diaria de movilidad prolonga tu independencia y tu alegría, mientras desarrolla control y estabilidad.
                    La ligereza en el movimiento no es casualidad: nace de entender tu propio cuerpo, y eso se construye despacio.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Pillar 2 */}
            <Reveal variant="up" delay={200}>
              <div className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-amber-200/70 hover:border-orange-300 transition-all">
                <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-orange-400 to-red-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <MountainIcon className="w-8 h-7 text-white" />
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#3D2F26] mb-3">Mapéate para prevenir</h3>
                  <p className="text-[#6B5545] leading-relaxed">
                    Conocer tus asimetrías y patrones posturales te ayuda a evitar lesiones antes de que aparezcan.
                    Mapear tu cuerpo te da herramientas para la vida: reconocer tensiones, liberarlas y moverte con más criterio.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Pillar 3 */}
            <Reveal variant="up" delay={300}>
              <div className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-xl border border-amber-200/70 hover:border-orange-300 transition-all">
                <div className="absolute -top-6 left-8 w-14 h-14 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div className="pt-6">
                  <h3 className="text-xl font-bold text-[#3D2F26] mb-3">Escuchar al cuerpo</h3>
                  <p className="text-[#6B5545] leading-relaxed">
                    Tu cuerpo ya te da señales. Aprender a leerlas cambia todo.
                    Construimos hábitos posturales que se vuelven parte de tu naturaleza.
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= SOBRE STEPHANIE ================= */}
      <section className="relative py-24 bg-gradient-to-b from-[#FFF8F0] to-[#FDE8D0]/40 overflow-hidden">
        <div className="absolute top-32 left-0 w-80 h-80 bg-gradient-to-tr from-orange-200/40 to-amber-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <Reveal variant="left" as="div" className="order-2 lg:order-1">
              <div className="relative">
                <div className="relative rounded-[2rem] overflow-hidden shadow-2xl">
                  <Image
                    src="/steph-principal.jpeg"
                    alt="Stephanie Madriz - Instructora de Vitamina Movimiento"
                    width={600}
                    height={720}
                    className="object-cover w-full h-[600px]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3D2F26]/50 via-transparent to-transparent"></div>
                </div>

                {/* Floating quote card */}
                <div className="absolute -bottom-8 -right-4 md:right-8 max-w-xs bg-white rounded-2xl p-5 shadow-2xl border-t-4 border-orange-400">
                  <svg className="w-6 h-6 text-orange-400 mb-2" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                  </svg>
                  <p className="text-sm text-[#3D2F26] italic leading-relaxed">
                    Quiero que llegues a los 80 haciendo lo que te hace feliz, con el mismo cuerpo que te trajo hasta acá.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" as="div" className="space-y-8 order-1 lg:order-2" delay={200}>
              <SectionBadge>Conoce a tu coach</SectionBadge>

              <h2 className="text-4xl md:text-5xl font-bold text-[#3D2F26] leading-tight">
                Stephanie <span className="text-sunrise-gradient">Madriz</span>
              </h2>

              <p className="text-lg text-[#6B5545] leading-relaxed">
                Profesora de yoga apasionada por el movimiento humano y por usar el cuerpo como vehículo para explorar.
                Me encanta estar en la naturaleza: caminar la montaña, nadar en ríos y descubrir nuevos caminos. Pero a la montaña no siempre se llega en carro; a veces hay que preparar el cuerpo antes, durante y después.
                Combino el yoga con la movilidad articular para crear libertad de movimiento y acompañarte a moverte mejor, por más tiempo.
              </p>

              <div className="grid grid-cols-1 gap-4">
                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-amber-200/60">
                  <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-400 to-orange-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3D2F26] mb-1">Misión</h4>
                    <p className="text-sm text-[#6B5545] leading-relaxed">
                      Ayudarte a recuperar y sostener tu libertad de movimiento a través de hábitos posturales conscientes y duraderos.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-amber-200/60">
                  <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3D2F26] mb-1">Enfoque</h4>
                    <p className="text-sm text-[#6B5545] leading-relaxed">
                      La consciencia corporal como herramienta de transformación: aprender a observar, entender y entrenar tu cuerpo para moverte con control, estabilidad y confianza.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4 bg-white/60 backdrop-blur-sm rounded-2xl p-5 border border-amber-200/60">
                  <div className="flex-shrink-0 w-11 h-11 bg-gradient-to-br from-amber-300 to-yellow-500 rounded-xl flex items-center justify-center shadow-md">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold text-[#3D2F26] mb-1">Visión</h4>
                    <p className="text-sm text-[#6B5545] leading-relaxed">
                      Crear una comunidad que integre yoga, movimiento y naturaleza, donde el cuerpo se entrena para la vida real y lo natural siempre es el punto de partida.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <WhatsAppButton label="Agenda tu evaluación" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= MÉTODO ================= */}
      <section id="metodo" className="relative py-24 bg-[#3D2F26] text-[#FFF8F0] overflow-hidden">
        {/* Sun over mountain */}
        <div className="absolute top-10 right-10 w-40 h-40 bg-gradient-to-br from-amber-300 via-orange-400 to-red-500 rounded-full blur-3xl opacity-60 pointer-events-none"></div>
        <div className="absolute top-20 right-20 w-20 h-20 bg-gradient-to-br from-amber-200 to-orange-400 rounded-full opacity-80 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center space-x-2 bg-amber-400/10 backdrop-blur-sm px-4 py-2 rounded-full border border-amber-300/30">
                <span className="w-2 h-2 bg-amber-400 rounded-full"></span>
                <span className="text-xs font-semibold text-amber-200 tracking-widest uppercase">El Método</span>
              </div>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold leading-tight">
                Cuatro pasos para <br />
                <span className="text-sunrise-gradient">volver a tu cuerpo.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                num: "01",
                title: "Escucho",
                desc: "Tu historia importa: lo que duele, lo que disfrutas y hacia dónde quieres llegar.",
                color: "from-amber-300 to-orange-400",
              },
              {
                num: "02",
                title: "Mapeo",
                desc: "Evaluamos tu postura, rangos de movilidad, estabilidad y fuerza. Nada queda al azar: entendemos tu punto de partida.",
                color: "from-orange-400 to-red-500",
              },
              {
                num: "03",
                title: "Muevo",
                desc: "Diseñamos un plan personalizado de yoga y movilidad para mejorar tus hábitos posturales. Prácticas que puedes integrar en tu rutina y hacer desde casa.",
                color: "from-amber-400 to-yellow-500",
              },
              {
                num: "04",
                title: "Sostengo",
                desc: "Acompañamiento, ajustes y recordatorios. La movilidad no es un sprint: es una práctica de por vida.",
                color: "from-red-500 to-orange-500",
              },
            ].map((step, i) => (
              <Reveal key={i} variant="up" delay={((i + 1) * 100) as 100 | 200 | 300 | 400}>
                <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-7 border border-amber-200/20 hover:border-amber-300/50 hover:bg-white/10 transition-all group h-full">
                  <div className={`text-5xl font-bold bg-gradient-to-br ${step.color} bg-clip-text text-transparent mb-4`}>
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-amber-50">{step.title}</h3>
                  <p className="text-amber-100/70 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Mountain silhouette at bottom of method section */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <MountainRange className="w-full h-32 text-black" />
        </div>
      </section>

      {/* ================= SERVICIOS ================= */}
      <section id="servicios" className="relative py-24 bg-gradient-to-b from-[#FDE8D0]/60 to-[#FFF8F0] overflow-hidden">
        <div className="absolute top-10 left-1/4 w-80 h-80 bg-gradient-to-br from-amber-300/30 to-orange-300/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-72 h-72 bg-gradient-to-tr from-orange-200/30 to-amber-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="up">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <SectionBadge>Servicios</SectionBadge>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#3D2F26] leading-tight">
                Elige tu <span className="text-sunrise-gradient">formato</span>
              </h2>
              <p className="mt-6 text-lg text-[#6B5545] leading-relaxed">
                Desde donde estés. Presencial en Cartago o conectados desde cualquier parte del mundo.
              </p>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Clases Virtuales",
                desc: "Sesiones en vivo por Zoom con seguimiento personalizado. Para quienes viajan, trabajan desde casa o viven lejos.",
                gradient: "from-amber-400 to-orange-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                tag: "Online",
              },
              {
                title: "Clases Presenciales",
                desc: "Atención uno a uno en Cartago, Costa Rica. Evaluación palpable, ajustes en tiempo real, progreso medible.",
                gradient: "from-orange-500 to-red-500",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                ),
                tag: "Cartago, CR",
                featured: true,
              },
              {
                title: "Talleres de Movilidad",
                desc: "Sesiones grupales temáticas: cadera, columna, hombros. Ideal para equipos, grupos o comunidades.",
                gradient: "from-amber-500 to-yellow-400",
                icon: (
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                ),
                tag: "Grupal",
              },
            ].map((s, i) => (
              <Reveal key={i} variant="up" delay={((i + 1) * 100) as 100 | 200 | 300}>
                <div
                  className={`relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl border transition-all flex flex-col h-full ${
                    s.featured ? "border-orange-300 ring-2 ring-orange-200/50 md:scale-[1.03]" : "border-amber-200/60 hover:border-orange-300"
                  }`}
                >
                  {s.featured && (
                    <div className="absolute -top-3 left-8 bg-gradient-to-r from-orange-500 to-amber-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md">
                      Más popular
                    </div>
                  )}
                  <div className={`w-12 h-12 bg-gradient-to-br ${s.gradient} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}>
                    {s.icon}
                  </div>
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-wider text-orange-700">{s.tag}</span>
                  </div>
                  <h3 className="text-xl font-bold text-[#3D2F26] mb-3">{s.title}</h3>
                  <p className="text-[#6B5545] mb-6 flex-grow leading-relaxed">{s.desc}</p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-md hover:shadow-lg flex items-center justify-center space-x-2 w-full mt-auto"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                    </svg>
                    <span>Consultar</span>
                  </a>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CASOS DE ÉXITO ================= */}
      <section className="relative py-24 bg-[#FFF8F0] overflow-hidden">
        <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-amber-200/30 to-orange-200/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="up">
            <div className="text-center mb-12">
              <SectionBadge>Historias reales</SectionBadge>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#3D2F26]">
                Movimiento que <span className="text-sunrise-gradient">transforma</span>
              </h2>
            </div>
          </Reveal>

          <div className="max-w-2xl mx-auto">
            <Reveal variant="scale" delay={100}>
              <div className="relative bg-gradient-to-br from-amber-200 via-orange-200 to-amber-100 rounded-3xl p-3 shadow-2xl">
                <video className="w-full rounded-2xl max-h-[500px] object-cover" controls>
                  <source src="/WhatsApp Video 2026-03-05 at 10.43.00 PM.mp4" type="video/mp4" />
                  Tu navegador no soporta el elemento de video.
                </video>
              </div>
            </Reveal>

            <Reveal variant="up" delay={300}>
              <div className="mt-10 bg-white rounded-2xl p-8 shadow-md border border-amber-200/60">
                <svg className="w-8 h-8 text-orange-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z"/>
                </svg>
                <p className="text-lg text-[#3D2F26] italic leading-relaxed mb-4">
                  &ldquo;Aprendí a entender mi cuerpo y corregir mi postura. Ahora vivo sin dolor y volví a hacer las
                  caminatas largas que había dejado por miedo a lesionarme.&rdquo;
                </p>
                <p className="text-sm text-orange-700 font-semibold">— Cliente de Vitamina Movimiento</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ================= FAQ ================= */}
      <section id="faq" className="relative py-24 bg-gradient-to-b from-[#FFF8F0] to-[#FDE8D0]/60 overflow-hidden">
        <div className="absolute top-10 right-10 w-72 h-72 bg-gradient-to-br from-amber-200/40 to-orange-200/30 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <Reveal variant="up">
            <div className="text-center mb-14">
              <SectionBadge>Preguntas frecuentes</SectionBadge>
              <h2 className="mt-6 text-4xl md:text-5xl font-bold text-[#3D2F26]">
                Resolvemos tus <span className="text-sunrise-gradient">dudas</span>
              </h2>
            </div>
          </Reveal>

          <Reveal variant="up" delay={200}>
          <div className="space-y-3">
            <FAQItem
              question="¿Cómo agendo mi primera sesión?"
              answer={
                <>
                  <p className="mb-4">
                    Súper sencillo: escribime por WhatsApp al <span className="font-semibold">+506 8609 4225</span> y
                    coordinamos el horario que mejor te sirva. Respondo rápido.
                  </p>
                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-5 py-2.5 rounded-full font-semibold text-sm shadow-md inline-flex items-center space-x-2"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
                    </svg>
                    <span>Escribir por WhatsApp</span>
                  </a>
                </>
              }
            />
            <FAQItem
              question="¿Tengo que tener experiencia previa o cierta edad?"
              answer="No. Trabajo con personas desde los 25 hasta los 80+ años, con cualquier nivel de experiencia. El punto es encontrar el movimiento correcto para tu cuerpo hoy, no compararte con nadie."
            />
            <FAQItem
              question="¿Qué pasa en una sesión típica?"
              answer="Empezamos con una evaluación (postura, rangos, compensaciones), trabajamos movilidad específica, y terminamos con 2 o 3 hábitos simples para que apliques en tu rutina. Todo se queda grabado si la sesión es virtual."
            />
            <FAQItem
              question="¿Cuáles son los horarios disponibles?"
              answer="Lunes a viernes de 6:00 AM a 8:00 PM y sábados de 7:00 AM a 5:00 PM. Los horarios son flexibles y se adaptan a tu disponibilidad."
            />
            <FAQItem
              question="¿Dónde se realizan las clases presenciales?"
              answer="En Cartago, Costa Rica. Las virtuales son por Zoom desde donde estés. Los talleres grupales los coordinamos en distintas locaciones según el grupo."
            />
            <FAQItem
              question="¿Esto reemplaza a un fisioterapeuta o médico?"
              answer="No. El trabajo de movilidad y hábitos posturales complementa —no sustituye— el seguimiento médico o fisioterapéutico. Si tenés una lesión activa, siempre trabajo en diálogo con tu especialista."
            />
          </div>
          </Reveal>
        </div>
      </section>

      {/* ================= CTA FINAL ================= */}
      <section className="relative py-24 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 overflow-hidden">
        {/* Sun glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <Reveal variant="scale">
            <div className="w-20 h-20 rounded-full overflow-hidden mx-auto mb-6 shadow-lg ring-4 ring-white/30">
              <Image src="/logo4.jpeg" alt="Vitamina Movimiento" width={80} height={80} className="w-full h-full object-cover" />
            </div>
          </Reveal>
          <Reveal variant="up" delay={100}>
            <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
              Hoy es un buen día <br />
              <span className="text-[#3D2F26]">para moverte.</span>
            </h2>
          </Reveal>
          <Reveal variant="up" delay={200}>
            <p className="text-lg md:text-xl text-white/90 mb-10 max-w-2xl mx-auto leading-relaxed">
              Reserva tu primera sesión y empieza a construir el cuerpo que te va a acompañar
              los próximos 50 años.
            </p>
          </Reveal>
          <Reveal variant="up" delay={300}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#3D2F26] text-white px-8 py-4 rounded-full text-base font-bold hover:bg-[#2A1F18] transition-all shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.087z" />
              </svg>
              <span>Reserva por WhatsApp</span>
            </a>
            <a
              href="tel:+50686094225"
              className="bg-white/20 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-full text-base font-bold hover:bg-white hover:text-[#3D2F26] transition-all shadow-xl flex items-center justify-center space-x-3"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span>+506 8609 4225</span>
            </a>
          </div>
          </Reveal>
        </div>

        {/* Mountain silhouette bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
          <MountainRange className="w-full h-24 text-[#3D2F26]" />
        </div>
      </section>

      <Footer />
    </div>
  );
}
