const About = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section id="about" className={`section-shell py-20 sm:py-24 ${isDark ? 'bg-transparent' : 'bg-slate-100/70'}`}>
      <div className="container mx-auto px-6">
        <h2 className="anim-reveal mb-10 text-center text-3xl font-bold sm:text-4xl">
          <span className="section-title">About Me</span>
        </h2>

        <div className={`glass-card anim-reveal mx-auto max-w-4xl rounded-3xl p-8 sm:p-10 ${isDark ? 'text-slate-300' : 'text-slate-700'}`}>
          <p className="text-center text-base leading-8 sm:text-lg">
            I&apos;m Bharath H U, an aspiring Full Stack Developer and Information Science & Engineering student.
            I build modern web applications with Python, Django, React.js, JavaScript, MySQL, and REST APIs,
            and I love turning ideas into polished digital experiences that are both practical and beautiful.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className={`rounded-2xl border p-4 text-center ${isDark ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-white/80'}`}>
              <p className="text-2xl font-bold text-fuchsia-400">3+</p>
              <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Core stacks</p>
            </div>
            <div className={`rounded-2xl border p-4 text-center ${isDark ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-white/80'}`}>
              <p className="text-2xl font-bold text-cyan-400">100%</p>
              <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Curiosity-driven</p>
            </div>
            <div className={`rounded-2xl border p-4 text-center ${isDark ? 'border-white/10 bg-slate-900/60' : 'border-slate-200 bg-white/80'}`}>
              <p className="text-2xl font-bold text-emerald-400">24/7</p>
              <p className={`mt-1 text-sm ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>Learning mode</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;