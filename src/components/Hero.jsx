import AnchorLink from "react-anchor-link-smooth-scroll";
import { Typewriter } from "react-simple-typewriter";
import { useState } from "react";
import { IconCopy, IconCheck, IconDownload, IconArrowRight, IconSparkles } from "@tabler/icons-react";

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
    <section id="hero" className="relative pt-32 lg:pt-0 flex min-h-screen w-full items-center justify-center overflow-hidden px-6 lg:px-12">
      
      {/* Luces de fondo dinámicas */}
      <div className="absolute left-[-5%] top-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-purple-600/10 blur-[140px] animate-pulse" />
      <div className="absolute right-[-5%] bottom-[-5%] -z-10 h-[600px] w-[600px] rounded-full bg-blue-600/10 blur-[140px]" />

      <div className="mx-auto grid w-full max-w-screen-xl grid-cols-1 gap-16 lg:grid-cols-2">
        
        {/* Columna Izquierda: Mensaje Central */}
        <div className="flex flex-col justify-center text-center lg:text-left">
          <div className="mb-6 inline-flex items-center justify-center lg:justify-start gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-sm font-bold tracking-widest text-green-400/90 uppercase">Disponible para proyectos</span>
          </div>

          <h1 className="text-6xl font-black tracking-tighter text-white md:text-8xl">
            Hola, soy <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent drop-shadow-[0_0_15px_rgba(168,85,247,0.3)]">
              <Typewriter
                words={["Josue.", "Fullstack.", "Developer."]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={70}
                deleteSpeed={50}
              />
            </span>
          </h1>

          <p className="mt-8 max-w-xl text-lg leading-relaxed text-gray-400 md:text-xl">
            Desarrollador enfocado en construir experiencias digitales de alto impacto con 
            <span className="text-white font-medium"> React</span> y <span className="text-white font-medium">Laravel</span>.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3 lg:justify-start">
            {["JavaScript", "React", "Laravel", "Docker"].map((skill) => (
              <span key={skill} className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-gray-300 backdrop-blur-sm transition-all hover:border-purple-500/50 hover:text-white">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-12">
            <AnchorLink
              href="#contact"
              className="group inline-flex items-center gap-3 rounded-full bg-white px-10 py-4 text-lg font-bold text-black transition-all hover:bg-purple-500 hover:text-white active:scale-95"
            >
              Hablemos
              <IconArrowRight size={22} className="transition-transform group-hover:translate-x-1" />
            </AnchorLink>
          </div>
        </div>

        {/* Columna Derecha: Card con Gradiente Animado de Borde */}
        <div className="flex items-center justify-center lg:justify-end">
          <div className="relative w-full max-w-md p-[2px] overflow-hidden rounded-3xl group">
            {/* Animación de gradiente de borde */}
            <div className="absolute inset-[-1000%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2E8F0_0%,#6366F1_50%,#E2E8F0_100%)] opacity-20 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex flex-col gap-8 rounded-[22px] bg-[#030712]/95 p-8 backdrop-blur-2xl">
              <IconSparkles className="absolute right-4 top-4 text-purple-500/20" size={40} />
              
              <div className="relative">
                <h3 className="text-2xl font-bold text-white">Contacto Directo</h3>
                <p className="text-sm text-gray-400 mt-1">¿Tienes una idea? Vamos a construirla.</p>
              </div>

              <div className="space-y-5">
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Mi Correo</span>
                    {isCopied && <span className="text-[10px] font-bold text-green-400 animate-pulse">¡Copiado!</span>}
                  </div>
                  <button 
                    onClick={handleCopy}
                    className="flex w-full items-center justify-between rounded-2xl border border-white/5 bg-white/5 p-4 transition-all hover:bg-white/10"
                  >
                    <span className="truncate text-sm font-medium text-gray-300">{email}</span>
                    <IconCopy size={20} className="text-purple-500" />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500">Currículum</span>
                  <a
                    href="/cv/cv.pdf"
                    download="cv.pdf"
                    className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 py-4 font-bold text-white shadow-lg transition-all hover:scale-[1.02] hover:shadow-purple-500/20 active:scale-95"
                  >
                    <IconDownload size={22} />
                    DESCARGAR CV
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
                <div className="text-center lg:text-left">
                  <p className="text-2xl font-black text-white">+3 años</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Experiencia</p>
                </div>
                <div className="text-center lg:text-left border-l border-white/10 pl-4">
                  <p className="text-2xl font-black text-white">10+</p>
                  <p className="text-[10px] uppercase tracking-widest text-gray-500">Proyectos</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}