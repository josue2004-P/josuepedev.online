import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconPhone,
  IconMail,
  IconSend
} from "@tabler/icons-react";

export default function Contact() {
  const contactoInfo = [
    {
      icon: <IconMail size={32} />,
      label: "Email",
      value: "josueperezeulogio03@gmail.com",
      link: "mailto:josueperezeulogio03@gmail.com",
      color: "hover:text-red-400"
    },
    {
      icon: <IconBrandWhatsapp size={32} />,
      label: "WhatsApp",
      value: "284 - 102 - 2581",
      link: "https://wa.me/522841022581",
      color: "hover:text-green-400"
    },
    {
      icon: <IconBrandLinkedin size={32} />,
      label: "LinkedIn",
      value: "Josue Perez",
      link: "https://www.linkedin.com/in/josuepedev",
      color: "hover:text-blue-400"
    },
    {
      icon: <IconBrandGithub size={32} />,
      label: "GitHub",
      value: "josue2004-P",
      link: "https://github.com/josue2004-P",
      color: "hover:text-purple-400"
    }
  ];

  return (
    <section id="contact" className="relative z-10 py-24 px-6 lg:px-12">
      <div className="mx-auto max-w-screen-xl">
        
        {/* Encabezado de Sección */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 mb-4 text-purple-400 font-mono text-sm tracking-widest uppercase">
            <IconSend size={20} />
            <span>¿Listo para empezar?</span>
          </div>
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Ponte en <span className="text-purple-500 text-6xl">Contacto.</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl mx-auto">
            Estoy disponible para nuevos proyectos o colaboraciones. ¡Hablemos sobre tu próxima idea!
          </p>
        </div>

        {/* Grid de Contacto Estilo Glassmorphism */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactoInfo.map((item, index) => (
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              id="card"
              className={`group flex flex-col items-center justify-center p-8 text-center transition-all duration-300 hover:-translate-y-2 ${item.color}`}
            >
              <div className="mb-4 text-gray-400 transition-colors group-hover:text-inherit">
                {item.icon}
              </div>
              <span className="mb-1 text-xs font-bold uppercase tracking-widest text-gray-500">
                {item.label}
              </span>
              <h6 className="text-sm font-medium text-white truncate w-full">
                {item.value}
              </h6>
            </a>
          ))}
        </div>

        {/* Footer de la sección */}
        <div className="mt-20 border-t border-white/5 pt-10 text-center">
          <p className="text-gray-500 text-sm italic">
            "Transformando ideas complejas en soluciones digitales elegantes."
          </p>
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute left-1/2 top-1/2 -z-10 h-64 w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/5 blur-[120px]" />
    </section>
  );
}