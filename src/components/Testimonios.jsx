import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IconQuote } from "@tabler/icons-react"; // Usando Tabler Icons para consistencia

// Estilos de Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function Testimonios() {
  const testimoniosData = [
    {
      nombre: "Arnold Morales",
      puesto: "Ing. Ciberseguridad",
      texto: "Excelente trabajo, demostró gran dominio técnico y profesionalismo en el desarrollo del proyecto.",
      avatar: "AM"
    },
    {
      nombre: "Eduardo",
      puesto: "Ing. Ciberseguridad",
      texto: "Muy buen trabajo. La atención al detalle en la interfaz y la funcionalidad fue impecable.",
      avatar: "E"
    }
  ];

  return (
    <section id="testimonios" className="relative z-10 py-24 px-6 overflow-hidden">
      {/* Luz ambiental de fondo */}
      <div className="absolute top-1/2 left-1/2 -z-10 h-[300px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/10 blur-[120px]" />
      
      <div className="mx-auto max-w-screen-xl">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black text-white md:text-5xl">
            Referencias <span className="text-purple-500 text-6xl">.</span>
          </h2>
        </div>

        <div className="mx-auto max-w-screen-md">
          <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper !pb-14"
          >
            {testimoniosData.map((testimonio, index) => (
              <SwiperSlide key={index}>
                <div 
                  id="card" 
                  className="mx-4 mb-8 rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12"
                >
                  <figure className="text-center">
                    <IconQuote 
                      size={48} 
                      className="mx-auto mb-6 text-purple-500 opacity-50" 
                    />
                    <blockquote>
                      <p className="text-xl font-medium leading-relaxed text-gray-200 md:text-2xl">
                        "{testimonio.texto}"
                      </p>
                    </blockquote>
                    <figcaption className="mt-10 flex flex-col items-center justify-center gap-4">
                      {/* Avatar representativo */}
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-purple-600 to-blue-500 font-bold text-white shadow-lg">
                        {testimonio.avatar}
                      </div>
                      <div className="flex flex-col items-center">
                        <cite className="not-italic font-bold text-white text-lg">
                          {testimonio.nombre}
                        </cite>
                        <span className="text-sm font-medium tracking-widest text-purple-400 uppercase">
                          {testimonio.puesto}
                        </span>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}