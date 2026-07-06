import { useState } from 'react';

const Contact = ({ theme }) => {
  const isDark = theme === 'dark';
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:bharathhubharath@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className={`section-shell py-20 sm:py-24 ${isDark ? 'bg-transparent' : 'bg-slate-100/70'}`}>
      <div className="container mx-auto px-6">
        <h2 className="anim-reveal mb-10 text-center text-3xl font-bold sm:text-4xl">
          <span className="section-title">Contact Me</span>
        </h2>

        <form onSubmit={handleSubmit} className="glass-card anim-reveal mx-auto max-w-2xl rounded-3xl p-6 sm:p-8">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            required
            className={`mb-4 w-full rounded-2xl border p-3 outline-none ring-0 ${isDark ? 'border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500' : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400'}`}
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            required
            className={`mb-4 w-full rounded-2xl border p-3 outline-none ring-0 ${isDark ? 'border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500' : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400'}`}
          />

          <textarea
            rows="5"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            required
            className={`mb-6 w-full rounded-2xl border p-3 outline-none ring-0 ${isDark ? 'border-white/10 bg-slate-950/70 text-white placeholder:text-slate-500' : 'border-slate-200 bg-white text-slate-900 placeholder:text-slate-400'}`}
          ></textarea>

          <button type="submit" className="w-full rounded-full bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:-translate-y-1 sm:w-auto">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;