const Navbar = () => {
  return (
<nav className="bg-slate-900 text-white sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap justify-between items-center gap-3 py-4 px-6">
        <h1 className="text-2xl font-bold">
          Bharath Portfolio
        </h1>

        <ul className="flex flex-wrap gap-4 sm:gap-6 justify-center">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;