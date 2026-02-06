import { IconBrandReact, IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconCode } from "@tabler/icons-react";

export default function About() {
  const titulo = "Sobre mí";

  return (
    <section
      id="about"
      className="relative flex min-h-screen w-full items-center justify-center overflow-hidden bg-[#0a0a0a] px-6 py-24 lg:px-12"
    >
      {/* Luces de fondo para dar profundidad */}
      <div className="absolute right-0 top-1/2 -z-10 h-96 w-96 rounded-full bg-purple-600/10 blur-[150px]" />
      
      <div className="mx-auto grid w-full max-w-screen-xl lg:grid-cols-2 gap-16">
        
        {/* Columna Izquierda: Contenido */}
        <div className="flex flex-col justify-center order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 mb-6 text-purple-400 font-mono text-sm tracking-widest uppercase">
            <IconCode size={20} />
            <span>Formación y Experiencia</span>
          </div>

          <h2 className="text-4xl font-black text-white md:text-6xl mb-8">
            {titulo}<span className="text-purple-500">.</span>
          </h2>

          <div className="space-y-6 text-lg text-gray-400 leading-relaxed">
            <p>
              Soy <span className="text-white font-bold">Josue Perez Eulogio</span>, 
              <span className="text-purple-300"> Desarrollador Fullstack</span> apasionado por construir soluciones robustas y escalables, 
              desde la arquitectura del backend hasta interfaces de usuario de alto impacto. 
              Actualmente curso la Licenciatura en Sistemas Computacionales.
            </p>

            <div className="relative border-l-2 border-purple-500/30 pl-6 py-2">
              <p>
                Cuento con más de 
                <span className="text-white font-bold mx-1 text-xl">tres años de experiencia</span> 
                dominando el ecosistema de JavaScript, integración de bases de datos y despliegue en entornos de producción.
              </p>
            </div>

            <p>
              Mi enfoque está en el <span className="text-purple-300">aprendizaje continuo</span>. 
              Me considero un eterno estudiante de la tecnología, capaz de conectar las necesidades del negocio con infraestructuras digitales eficientes e innovadoras.
            </p>
          </div>

          {/* Mini Stats o Badges */}
          <div className="mt-10 flex flex-wrap gap-4">
             <div className="flex flex-col">
                <span className="text-2xl font-black text-white">3+</span>
                <span className="text-xs uppercase text-gray-500 tracking-tighter">Años exp.</span>
             </div>
             <div className="h-10 w-[1px] bg-white/10 mx-2"></div>
             <div className="flex flex-col">
                <span className="text-2xl font-black text-white">Sistemas</span>
                <span className="text-xs uppercase text-gray-500 tracking-tighter">Carrera</span>
             </div>
          </div>
        </div>

        {/* Columna Derecha: Composición Visual */}
        <div className="relative flex items-center justify-center order-1 lg:order-2">
          <div className="group relative">
            {/* El Blob/Imagen principal con marco moderno */}
            <div className="relative z-10 h-[350px] w-[300px] md:h-[450px] md:w-[400px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-2 backdrop-blur-sm">
              <img
                src="../png.png"
                alt="Josue Perez"
                className="h-full w-full rounded-2xl object-cover grayscale transition duration-500 group-hover:grayscale-0"
              />
            </div>

            {/* Iconos Flotantes con animación */}
            <div className="absolute -right-6 top-10 z-20 animate-bounce [animation-duration:3s]">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-blue-400 backdrop-blur-xl shadow-xl">
                <IconBrandReact size={32} />
              </div>
            </div>

            <div className="absolute -left-8 bottom-20 z-20 animate-bounce [animation-duration:4s]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-yellow-400 backdrop-blur-xl shadow-xl">
                <IconBrandJavascript size={28} />
              </div>
            </div>

            <div className="absolute right-10 -bottom-6 z-20 animate-bounce [animation-duration:5s]">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-black/50 text-orange-500 backdrop-blur-xl shadow-xl">
                <IconBrandHtml5 size={28} />
              </div>
            </div>

            {/* Elemento Decorativo: Círculos */}
            <div className="absolute -inset-4 -z-10 rounded-[40px] border border-purple-500/20 opacity-50 group-hover:scale-105 transition-transform duration-500"></div>
          </div>
        </div>

      </div>
    </section>
  );
}