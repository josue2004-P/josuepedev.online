import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules';
import { IconBrandGithub, IconExternalLink, IconCode, IconBriefcase } from "@tabler/icons-react";

// Estilos de Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

export default function Works() {
  const proyectos = [
    {
      title: "Sistema de Laboratorio",
      description: "CRUD completo para la gestión de análisis clínicos en 'La Piedad'. Incluye reportes automáticos en PDF y manejo de usuarios.",
      tags: ["Laravel", "Livewire", "PHP"],
      link: "https://labpiedad.altamardev.com/",
      repo: "#",
      image: "/work1.png" 
    },
    {
      title: "Altamar Comunicación",
      description: "Landing page corporativa para servicios de desarrollo y comunicación marítima. Diseño responsivo y estética profesional.",
      tags: ["Laravel", "Livewire", "PHP"],
      link: "https://altamardev.com/",
      repo: "#",
      image: "/work2.png"
    },
    {
      title: "Autotransportes Careco",
      description: "Plataforma corporativa para gestión de logística y transporte. Incluye secciones de servicios, contacto y optimización de carga de recursos.",
      tags: ["Laravel", "Livewire", "Tailwind CSS"],
      link: "https://transportescareco.com/", // URL basada en el nombre de la empresa
      repo: "#",
      image: "/work4.png"
    },
    {
      title: "Colossus",
      description: "Sistema de administración interna y documentación técnica para servicios industriales. Enfoque en robustez y eficiencia de datos.",
      tags: ["Laravel", "Livewire", "Tailwind CSS"],
      link: "https://collosuscrane.com/",
      repo: "#",
      image: "/work3.png"
    }
  ];

  return (
    <section id="works" className="relative py-24 px-6 lg:px-12 bg-transparent overflow-hidden">
      {/* Luces de ambiente detrás del Swiper */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/10 blur-[150px]" />

      <div className="mx-auto max-w-screen-xl">
        
        {/* Encabezado */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 mb-4 text-purple-400 font-mono text-sm tracking-widest uppercase">
            <IconBriefcase size={20} />
            <span>Portafolio Seleccionado</span>
          </div>
          <h2 className="text-4xl font-black text-white md:text-6xl">
            Proyectos <span className="text-purple-500">Recientes</span>
          </h2>
          <p className="mt-6 text-gray-400 max-w-xl text-lg">
            Explora mis trabajos más destacados en desarrollo de software, desde sistemas de gestión clínica hasta landing pages interactivas.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            320: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 40 },
          }}
          className="!pb-16"
        >
          {proyectos.map((proyect, index) => (
            <SwiperSlide key={index} className="max-w-[400px]">
              <div id="card" className="group flex h-full flex-col overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl transition-all duration-500 hover:border-purple-500/50">
                
                {/* Contenedor Imagen con Zoom */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={proyect.image} 
                    alt={proyect.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-2"
                  />
                  <div className="absolute inset-0 flex items-center justify-center gap-4 bg-black/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <a href={proyect.repo} className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-purple-600 transition-all hover:scale-110">
                      <IconBrandGithub size={24} />
                    </a>
                    <a href={proyect.link} className="rounded-full bg-white/10 p-3 text-white backdrop-blur-md hover:bg-purple-600 transition-all hover:scale-110">
                      <IconExternalLink size={24} />
                    </a>
                  </div>
                </div>

                {/* Contenido de la Card */}
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex flex-wrap gap-2">
                    {proyect.tags.map(tag => (
                      <span key={tag} className="rounded-md bg-purple-500/10 px-2 py-1 text-[10px] font-bold uppercase tracking-widest text-purple-400 border border-purple-500/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-white group-hover:text-purple-400 transition-colors">
                    {proyect.title}
                  </h3>
                  <p className="mb-6 flex-1 text-sm leading-relaxed text-gray-400">
                    {proyect.description}
                  </p>
                  <div className="flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-bold tracking-widest text-white/50 group-hover:text-white transition-colors">
                    <IconCode size={16} className="text-purple-500" />
                    DETALLES DEL PROYECTO
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}