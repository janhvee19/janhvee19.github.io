export default function Hero() {
  const scrollToWork = () =>
    document.getElementById("work")?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16 relative overflow-hidden bg-white">
      
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-100 rounded-full blur-3xl opacity-50 -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-cyan-100 rounded-full blur-3xl opacity-50 -z-10" />

      {/* Badge */}
      <span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold border border-indigo-100">
        Open to opportunities
      </span>

      {/* Headline */}
      <h1 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6 max-w-4xl text-gray-900">
        I design & build{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-cyan-500">
          digital products
        </span>{" "}
        people love.
      </h1>

      {/* Subtext */}
      <p className="text-lg md:text-xl text-gray-500 max-w-2xl mb-10 leading-relaxed">
        UI/UX Designer · Full-Stack Developer · AI SaaS Builder. <br />
        I turn ideas into polished, functional web products — from wireframe to deployed app.
      </p>

      {/* CTAs */}
      <div className="flex flex-wrap gap-4 justify-center mb-16">
        <button
          onClick={scrollToWork}
          className="px-8 py-3.5 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-all shadow-lg"
        >
          View My Work
        </button>
        <a
          href="mailto:your@email.com"
          className="px-8 py-3.5 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-all"
        >
          Get In Touch
        </a>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-6 mb-16">
        <a href="https://github.com/yourusername" target="_blank" rel="noreferrer"
          className="text-gray-400 hover:text-indigo-600 text-sm font-medium transition-colors">
          GitHub
        </a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
          className="text-gray-400 hover:text-indigo-600 text-sm font-medium transition-colors">
          LinkedIn
        </a>
        <a href="mailto:your@email.com"
          className="text-gray-400 hover:text-indigo-600 text-sm font-medium transition-colors">
          Email
        </a>
      </div>

      {/* Scroll hint */}
      <button onClick={scrollToWork} className="text-gray-400 hover:text-indigo-500 transition-colors animate-bounce text-sm">
        ↓ Scroll to explore
      </button>

    </section>
  );
}