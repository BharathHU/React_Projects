const Projects = ({ theme }) => {
  const projects = [
    {
      title: "Domain Expert Discovery",
      desc: "A web platform that automates domain expert identification and data aggregation using Python, MongoDB, HTML, CSS, and JavaScript."
    },
    {
      title: "Student Database Management System",
      desc: "A full-stack web application built with Django and SQLite for efficient student record management with secure CRUD operations."
    },
    {
      title: "Portfolio Website",
      desc: "A modern, responsive personal portfolio showcasing my skills, projects, certifications, and internship experience with interactive UI."
    }
  ];

  const isDark = theme === 'dark';

  return (
    <section id="projects" className={`section-shell py-20 sm:py-24 ${isDark ? 'bg-transparent' : 'bg-slate-100/70'}`}>
      <div className="container mx-auto px-6">
        <h2 className="anim-reveal mb-10 text-center text-3xl font-bold sm:text-4xl">
          <span className="section-title">Projects</span>
        </h2>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 sm:gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`card-hover anim-reveal overflow-hidden rounded-3xl border shadow-2xl ${isDark ? 'border-white/10 bg-slate-900/70' : 'border-slate-200 bg-white'}`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="h-40 bg-gradient-to-br from-fuchsia-500/80 via-violet-500/70 to-cyan-500/70" />

              <div className="p-6">
                <h3 className={`text-2xl font-semibold ${isDark ? 'text-white' : 'text-slate-900'}`}>{project.title}</h3>
                <p className={`mt-3 text-sm leading-7 ${isDark ? 'text-slate-400' : 'text-slate-600'}`}>{project.desc}</p>

                <button className={`mt-5 rounded-full px-4 py-2 font-medium transition ${isDark ? 'bg-white/10 text-slate-100 hover:bg-fuchsia-500/20' : 'bg-slate-900 text-white hover:bg-fuchsia-600'}`}>
                  View Project
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;