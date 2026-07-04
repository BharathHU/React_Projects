const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-r from-violet-600 to-indigo-700 flex items-center justify-center px-4"
    >
      <div className="text-center text-white">
        <img
          src="https://tse4.mm.bing.net/th/id/OIP.46kBfNqdOveb1FS1c_V9VwHaHa?cb=thfvnextfalcon2&w=980&h=980&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="profile"
          className="w-28 h-28 sm:w-40 sm:h-40 rounded-full mx-auto border-4 border-white anim-floaty"
        />

<h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-6 anim-reveal">
          Hi, I'm Bharath
        </h1>

<p className="text-base sm:text-lg md:text-xl mt-4 anim-reveal">
          Python Full Stack Developer
        </p>

<button className="bg-white text-blue-600 px-5 sm:px-6 py-3 rounded-lg mt-6 font-semibold hover:scale-105 transition anim-reveal">
          Download Resume
        </button>
      </div>
    </section>
  );
};

export default Hero;