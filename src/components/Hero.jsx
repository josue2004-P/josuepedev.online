import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { IconCopy, IconCheck, IconDownload, IconArrowRight } from "@tabler/icons-react";

export default function Hero() {
  const [isCopied, setIsCopied] = useState(false);
  const email = "josueperezeulogio03@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error("Error al copiar: ", err);
    }
  };

  return (
    <section className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-6 lg:px-12">
      
      {/* Decoración de fondo sutil: Luces de ambiente */}
      <div className="absolute left-1/4 top-1/4 -z-10 h-64 w-64 rounded-full bg-purple-600/20 blur-[120px] animate-pulse" />
      <div className="absolute right-1/4 bottom-1/4 -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 lg:grid-cols-2">
        
        {/* Izquierda: Branding Personal */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="mb-6 inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest text-green-400 uppercase">Disponible para proyectos</span>
          </div>

          <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl">
            Hola, soy <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-[length:200%_auto] animate-gradient bg-clip-text text-transparent">
              <Typewriter
                words={["Josue.", "Front-end.", "Creative."]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Especializado en construir experiencias digitales de alto impacto con 
            <span className="text-white font-medium"> React</span> y 
            <span className="text-white font-medium"> interfaces modernas</span>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["JavaScript", "React", "Tailwind", "Next.js"].map((skill) => (
              <span key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-gray-300 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:text-white">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-6 sm:flex-row lg:justify-start">
            <AnchorLink
              href="#contact"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-bold text-black transition-all hover:bg-purple-500 hover:text-white"
            >
              Hablemos
              <IconArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
            </AnchorLink>
          </div>
        </div>

        {/* Derecha: Card con Efecto de Elevación */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="group relative w-full max-w-md">
            {/* Brillo detrás de la card */}
            <div className="absolute -inset-0.5 rounded-3xl bg-gradient-to-r from-purple-600 to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40" />
            
            <div className="relative flex flex-col gap-8 rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur-2xl">
              <div>
                <h3 className="text-2xl font-bold text-white">Contacto Directo</h3>
                <p className="text-sm text-gray-400">¿Tienes una idea? Vamos a construirla.</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Mi Correo</span>
                    {isCopied && <span className="text-xs font-bold text-green-400 animate-bounce">¡Copiado!</span>}
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:border-purple-500/30 hover:bg-white/10"
                  >
                    <span className="truncate text-sm font-medium text-gray-300">{email}</span>
                    <IconCopy size={20} className="text-purple-400" />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500">Documentación</span>
                  <a
                    href="/cv/cv.pdf"
                    download="cv.pdf"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-purple-800 py-4 font-bold text-white shadow-lg shadow-purple-900/20 transition-all hover:scale-[1.02] active:scale-95"
                  >
                    <IconDownload size={22} />
                    DESCARGAR CV
                  </a>
                </div>
              </div>

              {/* Stats Rápidos o Footer de Card */}
              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div>
                  <p className="text-2xl font-bold text-white">+2 años</p>
                  <p className="text-xs text-gray-500">Experiencia</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">10+</p>
                  <p className="text-xs text-gray-500">Proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}