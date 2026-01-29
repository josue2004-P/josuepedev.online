import React from "react";
import {
  IconBrandFirebase, IconBrandGithub, IconBrandHtml5, IconBrandMysql, 
  IconBrandPhp, IconBrandUbuntu, IconBrandWindows, IconBrandCss3, 
  IconBrandJavascript, IconBrandTailwind, IconBrandReact, IconBrandNodejs, 
  IconBrandLaravel, IconTerminal2, IconBrandGit, IconBrandMongodb,
  IconServer, IconDatabase, IconTools, IconCode
} from "@tabler/icons-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <IconBrandReact className="text-blue-400" />,
      skills: [
        { icon: <IconBrandHtml5 />, name: "HTML5" },
        { icon: <IconBrandCss3 />, name: "CSS3" },
        { icon: <IconBrandJavascript />, name: "JS" },
        { icon: <IconBrandTailwind />, name: "Tailwind" },
        { icon: <IconBrandReact />, name: "React" },
      ]
    },
    {
      title: "Backend",
      icon: <IconServer className="text-purple-400" />,
      skills: [
        { icon: <IconBrandNodejs />, name: "Node.js" },
        { icon: <IconBrandLaravel />, name: "Laravel" },
        { icon: <IconBrandPhp />, name: "PHP" },
      ]
    },
    {
      title: "Bases de Datos",
      icon: <IconDatabase className="text-green-400" />,
      skills: [
        { icon: <IconBrandMysql />, name: "MySQL" },
        { icon: <IconBrandFirebase />, name: "Firebase" },
        { icon: <IconBrandMongodb />, name: "MongoDB" },
      ]
    },
    {
      title: "Herramientas & OS",
      icon: <IconTools className="text-yellow-400" />,
      skills: [
        { icon: <IconBrandGit />, name: "Git" },
        { icon: <IconBrandGithub />, name: "GitHub" },
        { icon: <IconTerminal2 />, name: "Terminal" },
        { icon: <IconBrandUbuntu />, name: "Ubuntu" },
        { icon: <IconBrandWindows />, name: "Windows" },
      ]
    }
  ];

  return (
    <section id="skills" className="relative w-full px-6  lg:px-12 bg-transparent">
      <div className="mx-auto max-w-screen-xl">
        
        {/* Encabezado */}
        <div className="mb-20 text-center">
          <h2 className="text-4xl font-black tracking-tight text-white md:text-6xl">
            Mi Stack <span className="text-purple-500">Técnico</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
            Con más de <span className="text-white">dos años de experiencia</span>, diseño interfaces modernas y eficientes. 
            Dominando tecnologías desde el diseño Frontend hasta la lógica Backend con Laravel y bases de datos.
          </p>
        </div>

        {/* Grid de Habilidades */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              id="card" 
              className="group flex flex-col p-8 transition-all duration-300 hover:-translate-y-2"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="p-2 rounded-lg bg-white/5 border border-white/10 group-hover:border-purple-500/50 transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="grid grid-cols-3 gap-y-8 gap-x-4">
                {category.skills.map((skill, sIndex) => (
                  <div 
                    key={sIndex} 
                    className="flex flex-col items-center gap-2 group/skill"
                    title={skill.name}
                  >
                    <div className="text-gray-400 transition-all duration-300 group-hover/skill:text-white group-hover/skill:scale-110">
                      {React.cloneElement(skill.icon, { size: 38 })}
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-tighter text-gray-500 opacity-0 transition-opacity group-hover/skill:opacity-100">
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
      <div className="absolute left-[-10%] top-[20%] -z-10 h-64 w-64 rounded-full bg-blue-600/10 blur-[120px]" />
      <div className="absolute right-[-10%] bottom-[20%] -z-10 h-64 w-64 rounded-full bg-purple-600/10 blur-[120px]" />
    </section>
  );
}