const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 anim-reveal">
          Contact Me
        </h2>

<form className="max-w-xl mx-auto anim-reveal">
          <input
            type="text"
            placeholder="Name"
            className="w-full border p-3 rounded mb-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full border p-3 rounded mb-4"
          />

          <textarea
            rows="5"
            placeholder="Message"
            className="w-full border p-3 rounded mb-4"
          ></textarea>

<button className="bg-blue-600 text-white px-6 py-3 rounded w-full sm:w-auto anim-reveal">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;