const internships = [
  {
    title: "Python Full Stack with Gen AI Intern",
    company: "Dhee Coding Lab",
    duration: "Feb 2026 – May 2026",
    status: "Completed",
    desc: "Developed responsive full-stack web applications using Python, Django, React.js, MySQL, and REST APIs. Implemented authentication, CRUD operations, and database integration while collaborating using Git and GitHub."
  },
  {
    title: "MERN Stack Intern",
    company: "Edunet Foundation",
    duration: "2026",
    status: "Completed",
    desc: "Built full-stack web applications using MongoDB, Express.js, React.js, and Node.js. Gained practical experience in frontend development, backend APIs, and database management."
  },
  {
    title: "Infosys Springboard Virtual Internship 7.0",
    company: "Infosys Springboard",
    duration: "2026",
    status: "Selected",
    desc: "Selected for the Infosys Springboard Virtual Internship 7.0 after successfully completing the prerequisite learning modules and assessment. Awaiting internship commencement and batch allocation."
  }
];

const Internships = ({ theme }) => {
  const isDark = theme === "dark";

  return (
    <section
      id="internships"
      className={`section-shell py-20 sm:py-24 ${
        isDark ? "bg-transparent" : "bg-slate-100/70"
      }`}
    >
      <div className="container mx-auto px-6">
        <h2 className="anim-reveal mb-12 text-center text-3xl font-bold sm:text-4xl">
          <span className="section-title">Internships</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {internships.map((item, index) => (
            <div
              key={index}
              className={`glass-card anim-reveal rounded-3xl p-6 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                isDark ? "text-slate-200" : "text-slate-700"
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Duration */}
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-fuchsia-400">
                {item.duration}
              </p>

              {/* Title */}
              <h3
                className={`mt-3 text-2xl font-bold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {item.title}
              </h3>

              {/* Company */}
              <p
                className={`mt-2 text-base font-medium ${
                  isDark ? "text-cyan-300" : "text-cyan-600"
                }`}
              >
                {item.company}
              </p>

              {/* Status Badge */}
              <div className="mt-4">
                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    item.status === "Completed"
                      ? "bg-green-500/20 text-green-400 border border-green-400"
                      : "bg-yellow-500/20 text-yellow-400 border border-yellow-400"
                  }`}
                >
                  {item.status}
                </span>
              </div>

              {/* Description */}
              <p
                className={`mt-5 text-sm leading-7 ${
                  isDark ? "text-slate-400" : "text-slate-600"
                }`}
              >
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Internships;