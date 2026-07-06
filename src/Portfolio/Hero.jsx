const Hero = ({ theme }) => {
  const isDark = theme === 'dark';

  return (
    <section
      id="home"
      className={`section-shell relative flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 ${isDark ? 'bg-slate-950' : 'bg-gradient-to-br from-violet-100 via-white to-cyan-100'}`}
    >
      <div className={`absolute inset-0 ${isDark ? 'bg-[radial-gradient(circle_at_top_left,_rgba(192,132,252,0.35),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(56,189,248,0.25),_transparent_36%)]' : 'bg-[radial-gradient(circle_at_top_left,_rgba(139,92,246,0.16),_transparent_34%),radial-gradient(circle_at_bottom_right,_rgba(6,182,212,0.16),_transparent_36%)]'}`} />
      <div className="absolute left-10 top-16 h-40 w-40 rounded-full bg-fuchsia-500/20 blur-3xl" />
      <div className="absolute bottom-10 right-10 h-48 w-48 rounded-full bg-cyan-500/20 blur-3xl" />

      <div className={`relative z-10 max-w-4xl text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
        <div className={`mb-6 inline-flex items-center rounded-full border px-4 py-2 text-sm font-medium backdrop-blur anim-reveal ${isDark ? 'border-fuchsia-400/30 bg-white/10 text-slate-200' : 'border-slate-300 bg-white/70 text-slate-700'}`}>
          Available for freelance & ambitious product builds
        </div>

        <img
          src="/src/assets/profile.jpeg"
          alt="profile"
          className="mx-auto mb-6 h-28 w-28 rounded-full border-4 border-fuchsia-300/60 object-cover shadow-[0_0_35px_rgba(192,132,252,0.45)] anim-floaty sm:h-40 sm:w-40"
        />

        <h1 className="anim-reveal text-4xl font-black sm:text-5xl md:text-6xl">
          Hi, I&apos;m <span className="section-title">Bharath</span>
        </h1>

        <p className={`anim-reveal mt-4 text-lg sm:text-xl md:text-2xl ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
          Python Full Stack Developer crafting fast, modern web experiences.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 anim-reveal">
          <a
            href="#projects"
            className="rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className={`rounded-full border px-6 py-3 font-semibold backdrop-blur transition hover:-translate-y-1 hover:border-fuchsia-400/40 ${isDark ? 'border-white/20 bg-white/10 text-slate-100' : 'border-slate-300 bg-white/80 text-slate-800'}`}
          >
            Let&apos;s Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;