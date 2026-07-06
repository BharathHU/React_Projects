import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaPython,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import { FaBootstrap } from "react-icons/fa6";

import {
  SiTailwindcss,
  SiDjango,
  SiMysql,
} from "react-icons/si";

import { VscCode } from "react-icons/vsc";
import { TbApi } from "react-icons/tb";

const Skills = ({ theme }) => {
  const isDark = theme === "dark";

  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 className="text-orange-500" />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt className="text-blue-500" />,
    },
    {
      name: "Bootstrap",
      icon: <FaBootstrap className="text-purple-600" />,
    },
    {
      name: "JavaScript",
      icon: <FaJsSquare className="text-yellow-400" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-cyan-400" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-sky-400" />,
    },
    {
      name: "Python",
      icon: <FaPython className="text-yellow-500" />,
    },
    {
      name: "Django",
      icon: <SiDjango className="text-green-600" />,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="text-blue-600" />,
    },
    {
      name: "REST API",
      icon: <TbApi className="text-purple-500" />,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="text-orange-600" />,
    },
    {
      name: "GitHub",
      icon: (
        <FaGithub
          className={isDark ? "text-white" : "text-black"}
        />
      ),
    },
    {
      name: "VS Code",
      icon: <VscCode className="text-blue-500" />,
    },
  ];

  return (
    <section
      id="skills"
      className={`section-shell py-20 sm:py-24 ${
        isDark ? "bg-transparent" : "bg-slate-100/70"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="anim-reveal mb-12 text-center text-3xl font-bold sm:text-4xl">
          <span className="section-title">Skills</span>
        </h2>

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`card-hover anim-reveal rounded-2xl border p-6 text-center shadow-lg transition-all duration-300 hover:-translate-y-2 hover:scale-105 ${
                isDark
                  ? "border-white/10 bg-slate-900/70 text-slate-100"
                  : "border-slate-200 bg-white text-slate-800"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="mb-4 flex justify-center text-6xl">
                {skill.icon}
              </div>

              <h3 className="text-lg font-semibold">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;