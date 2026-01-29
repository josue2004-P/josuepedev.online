import React from "react";
import {
  IconBrandHtml5, IconBrandCss3, IconBrandJavascript, IconBrandTailwind,
  IconBrandReact, IconBrandNodejs, IconBrandLaravel, IconBrandPhp,
  IconBrandDocker, IconBrandGithub, IconBrandGit, IconBrandMysql,
  IconBrandUbuntu, IconDatabase, IconServer, IconTools, IconCode,
  IconBrandCpp, IconBrandOffice, IconBrandVscode
} from "@tabler/icons-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Desarrollo Web",
      icon: <IconCode className="text-blue-400" />,
      skills: [
        { icon: <IconBrandPhp />, name: "PHP" },
        { icon: <IconBrandLaravel />, name: "Laravel" },
        { icon: <IconBrandJavascript />, name: "JS / React" },
        { icon: <IconBrandTailwind />, name: "Tailwind" },
        { icon: <IconBrandHtml5 />, name: "HTML5" }
      ]
    },
    {
      title: "Backend & DB",
      icon: <IconServer className="text-purple-400" />,
      skills: [
        { icon: <IconBrandNodejs />, name: "Node.js" },
        { icon: <IconBrandMysql />, name: "MySQL" },
        { icon: <IconDatabase />, name: "SQL Server" },
        { icon: <IconBrandCpp />, name: "C++ / Qt" }
      ]
    },
    {
      title: "Infraestructura",
      icon: <IconTools className="text-yellow-400" />,
      skills: [
        { icon: <IconBrandDocker />, name: "Docker" },
        { icon: <IconBrandUbuntu />, name: "VPS / Linux" },
        { icon: <IconBrandGit />, name: "Git" },
        { icon: <IconBrandGithub />, name: "CI/CD" }
      ]
    },
    {
      title: "Software & Otros",
      icon: <IconBrandOffice className="text-green-400" />,
      skills: [
        { icon: <IconBrandVscode />, name: "VS Code" },
        { icon: <IconBrandOffice />, name: "Excel / PDF" }
      ]
    }
  ];

  return (
    <section id="skills" className="relative w-full px-6 py-20 lg:px-12 bg-transparent">
      <div className="mx-auto max-w-screen-xl">
        
        {/* Encabezado dinámico basado en tu experiencia real */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Stack <span className="text-purple-500">Tecnológico</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Con más de <span className="text-white">dos años de trayectoria</span>, me especializo en el ecosistema de 
            <span className="text-white"> PHP y Laravel</span> para soluciones robustas, complementado con 
            interfaces modernas en <span className="text-white">React y Tailwind</span>.
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              id="card" 
              className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2 border border-white/5 bg-white/5 rounded-3xl backdrop-blur-md"
            >
              <div className="mb-6 flex items-center gap-3 border-b border-white/10 pb-4">
                <div className="p-2 rounded-xl bg-purple-500/10 text-purple-400 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white tracking-tight">{category.title}</h3>
              </div>

              <div className="grid grid-cols-2 gap-y-6">
                {category.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="flex items-center gap-3 group/skill"
                    title={skill.name}
                  >
                    <div className="text-gray-400 transition-colors group-hover/skill:text-purple-400">
                      {React.cloneElement(skill.icon, { size: 28 })}
                    </div>
                    <span className="text-xs font-medium text-gray-400 group-hover/skill:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Decoración de fondo */}
      <div className="absolute left-0 top-1/4 -z-10 h-72 w-72 rounded-full bg-blue-600/5 blur-[120px]" />
      <div className="absolute right-0 bottom-1/4 -z-10 h-72 w-72 rounded-full bg-purple-600/5 blur-[120px]" />
    </section>
  );
}