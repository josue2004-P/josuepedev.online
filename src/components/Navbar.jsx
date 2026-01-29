import AnchorLink from "react-anchor-link-smooth-scroll";
import { IconMenuDeep, IconX, IconRocket } from "@tabler/icons-react"; 
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#hero", label: "Inicio" },
    { href: "#about", label: "¿Quién soy?" },
    { href: "#skills", label: "Habilidades" },
    { href: "#works", label: "Trabajos" },
    { href: "#contact", label: "Contacto" },
  ];

  return (
    <nav className={`fixed top-0 z-[100] w-full px-6 transition-all duration-500 ${scrolled ? "py-4" : "py-8"}`}>
      <div className="mx-auto max-w-screen-xl">
        <div className={`flex items-center justify-between rounded-full border border-white/10 px-4 py-2 transition-all duration-500 backdrop-blur-md ${scrolled ? "bg-black/40 shadow-2xl shadow-purple-900/20" : "bg-transparent"}`}>
          
          {/* Logo / Branding */}
          <div className="flex items-center gap-2 px-4">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 text-white">
              <IconRocket size={18} />
            </div>
            <span className="hidden font-black tracking-tighter text-white sm:block">JOSUE.DEV</span>
          </div>

          {/* Links Escritorio */}
          <div className="hidden md:block">
            <ul className="flex items-center gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <AnchorLink 
                    href={link.href} 
                    className="relative rounded-full px-5 py-2 text-sm font-bold text-gray-300 transition-all hover:bg-white/10 hover:text-white"
                  >
                    {link.label}
                  </AnchorLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Botón CTA Versión Escritorio */}
          <div className="hidden md:block px-4">
             <AnchorLink href="#contact" className="rounded-full bg-white px-5 py-2 text-xs font-black uppercase tracking-widest text-black transition-transform hover:scale-105 active:scale-95">
                Contratar
             </AnchorLink>
          </div>

          {/* Botón Hamburguesa Mobile */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white md:hidden transition-all active:scale-90"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <IconX size={22} /> : <IconMenuDeep size={22} />}
          </button>
        </div>

        {/* Menú Mobile Estilo Overlay */}
        <div 
          className={`absolute left-6 right-6 mt-4 overflow-hidden rounded-3xl border border-white/10 bg-black/90 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] md:hidden ${
            isOpen ? "max-h-[400px] opacity-100 shadow-2xl" : "max-h-0 opacity-0"
          }`}
        >
          <ul className="flex flex-col gap-1 p-4">
            {navLinks.map((link, index) => (
              <li key={link.href} style={{ transitionDelay: `${index * 50}ms` }} className={`transition-all duration-500 ${isOpen ? "translate-x-0 opacity-100" : "-translate-x-4 opacity-0"}`}>
                <AnchorLink
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="flex w-full items-center justify-between rounded-xl px-6 py-4 text-lg font-bold text-gray-300 hover:bg-white/10 hover:text-white"
                >
                  {link.label}
                  <div className="h-1.5 w-1.5 rounded-full bg-purple-500"></div>
                </AnchorLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}