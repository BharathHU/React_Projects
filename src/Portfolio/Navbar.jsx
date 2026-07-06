const Navbar = ({ theme, toggleTheme }) => {
  const links = ["Home", "About", "Skills", "Projects", "Contact"];
  const isDark = theme === 'dark';

  return (
    <nav className={`sticky top-0 z-50 border-b backdrop-blur-xl ${isDark ? 'border-white/10 bg-slate-950/80' : 'border-slate-200 bg-white/80'}`}>
      <div className="container mx-auto flex flex-wrap items-center justify-between gap-3 px-6 py-4">
        <a href="#home" className={`text-xl font-semibold tracking-wide transition hover:text-fuchsia-400 ${isDark ? 'text-white' : 'text-slate-900'}`}>
          Bharath<span className="text-fuchsia-400"></span>
        </a>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
          <ul className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {links.map((link) => (
              <li key={link}>
                <a
                  href={`#${link.toLowerCase()}`}
                  className={`text-sm font-medium transition hover:underline hover:text-fuchsia-400 hover:decoration-fuchsia-400 hover:decoration-2 hover:underline-offset-4 ${isDark ? 'text-slate-300 hover:text-white' : 'text-slate-600 hover:text-slate-900'}`}
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={toggleTheme}
            className={`rounded-full border px-3 py-2 text-sm font-medium transition ${isDark ? 'border-white/15 bg-white/10 text-slate-100 hover:border-fuchsia-400/40' : 'border-slate-300 bg-white text-slate-700 hover:border-fuchsia-400/40'}`}
          >
            {isDark ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;