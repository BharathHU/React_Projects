const Skills = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind",
    "Django",
    "MySQL",
    "Python"
  ];

  return (
    <section id="skills" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 anim-reveal">
          Skills
        </h2>

<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill) => (
            <div
              key={skill}
              className="bg-white shadow-md rounded-lg p-6 text-center font-semibold hover:shadow-xl"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;