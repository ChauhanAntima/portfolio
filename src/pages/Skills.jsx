import { useState } from "react";
import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaCode,
  FaDatabase,
  FaCubes,
  FaCogs,
  FaRobot,
  FaMobileAlt,
  FaPlug,
} from "react-icons/fa";
import {
  SiDart,
  SiJavascript,
  SiTypescript,
  SiPython,
  SiC,
  SiCplusplus,
  SiFlutter,
  SiFirebase,
  SiNextdotjs,
  SiTailwindcss,
  SiExpress,
  SiJsonwebtokens,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiAndroidstudio,
} from "react-icons/si";
import Reveal from "../components/Reveal";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Dart", icon: SiDart },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Python", icon: SiPython },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
    ],
  },
  {
    title: "Mobile",
    skills: [
      { name: "Flutter", icon: SiFlutter },
      { name: "React Native", icon: FaMobileAlt },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS3", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
  },
  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "REST APIs", icon: FaPlug },
      { name: "JWT", icon: SiJsonwebtokens },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    title: "Tools",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: FaCode },
      { name: "Android Studio", icon: SiAndroidstudio },
    ],
  },
  {
    title: "Concepts",
    skills: [
      { name: "OOP", icon: FaCubes },
      { name: "DBMS", icon: FaDatabase },
    ],
  },
  {
    title: "Exploring",
    skills: [
      { name: "Agentic AI", icon: FaRobot },
      { name: "Business Automation", icon: FaCogs },
    ],
  },
];

export default function Skills() {
  const [active, setActive] = useState(0);
  const activeCategory = skillCategories[active];

  return (
    <section id="skills" className="py-16 sm:py-20 bg-[#050f1c] text-white">
      <Reveal
        as="h1"
        className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[#00d2ff] mb-3"
      >
        My Skills
      </Reveal>

      <Reveal
        as="p"
        delay={100}
        className="text-gray-400 text-center max-w-2xl mx-auto mb-8 sm:mb-10 text-sm sm:text-base"
      >
        Technologies and tools I use to design, build and ship real products.
      </Reveal>

      {/* Category Tabs */}
      <Reveal
        delay={150}
        className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 max-w-3xl mx-auto"
      >
        {skillCategories.map((category, i) => (
          <button
            key={category.title}
            onClick={() => setActive(i)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition duration-300 ${
              active === i
                ? "bg-[#00d2ff] text-black border-[#00d2ff]"
                : "border-[#00d2ff]/30 text-gray-300 hover:border-[#00d2ff] hover:text-[#00d2ff]"
            }`}
          >
            {category.title}
          </button>
        ))}
      </Reveal>

      {/* Active Category Skills */}
      <div
        key={activeCategory.title}
        className="flex flex-wrap justify-center gap-3 sm:gap-4 max-w-3xl mx-auto min-h-[60px]"
        style={{ animation: "fadeIn 0.35s ease" }}
      >
        {activeCategory.skills.map(({ name, icon: Icon }) => (
          <div
            key={name}
            className="inline-flex items-center gap-2 bg-[#0c1a2e] border border-[#00d2ff]/30 rounded-full px-4 py-2.5 sm:px-5 sm:py-3
            hover:scale-105 hover:border-[#00d2ff] transition duration-300 shadow-lg"
          >
            <Icon className="text-lg sm:text-xl text-[#00d2ff] flex-shrink-0" />
            <span className="text-sm sm:text-base font-medium whitespace-nowrap">
              {name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
