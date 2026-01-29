import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconArrowUp,
  IconRocket
} from "@tabler/icons-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="relative z-10 w-full pt-12 pb-8 px-6 lg:px-12">
      <div className="mx-auto max-w-screen-xl">
        {/* Línea decorativa con gradiente */}
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/10 to-transparent mb-12" />

        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          
          {/* Branding y Copyright */}
          <div className="flex flex-col items-center gap-4 md:items-start">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/10 text-purple-500">
                <IconRocket size={18} />
              </div>
              <span className="text-xl font-black tracking-tighter text-white">JOSUE.DEV</span>
            </div>
            <span className="text-sm font-medium text-gray-500">
              © 2026 Josue Perez. Casi todos los derechos reservados.
            </span>
          </div>

          {/* Redes Sociales Rápidas */}
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/josue2004-P" 
              target="_blank" 
              className="text-gray-400 transition-colors hover:text-white"
              title="GitHub"
            >
              <IconBrandGithub size={22} />
            </a>
            <a 
              href="https://www.linkedin.com/in/josuepedev" 
              target="_blank" 
              className="text-gray-400 transition-colors hover:text-white"
              title="LinkedIn"
            >
              <IconBrandLinkedin size={22} />
            </a>
            <a 
              href="https://wa.me/522841022581" 
              target="_blank" 
              className="text-gray-400 transition-colors hover:text-white"
              title="WhatsApp"
            >
              <IconBrandWhatsapp size={22} />
            </a>
          </div>

          {/* Botón Volver Arriba */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold uppercase tracking-widest text-gray-400 transition-all hover:bg-white/10 hover:text-white"
          >
            <span>Volver arriba</span>
            <IconArrowUp size={16} className="transition-transform group-hover:-translate-y-1" />
          </button>
        </div>
        
        {/* Tagline Final */}
        <div className="mt-12 text-center">
          <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-700">
            Hecho con React, Tailwind y mucha cafeína
          </p>
        </div>
      </div>
    </footer>
  );
}