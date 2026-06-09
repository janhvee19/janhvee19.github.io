export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-2xl mx-auto text-center">

        <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">
          Contact
        </span>
        <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white mb-4">
          Let's work together
        </h2>
        <p className="text-gray-500 dark:text-gray-400 text-lg mb-12">
          Whether you have a project in mind, want to hire me, or just want to say hi — my inbox is always open.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="mailto:your@email.com"
            className="px-8 py-4 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors text-lg">
            Send me an Email
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
            className="px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-colors text-lg">
            Connect on LinkedIn
          </a>
        </div>

        <div className="flex justify-center gap-8">
          <a href="https://github.com/janhvee19" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-indigo-600 font-medium transition-colors">
            GitHub
          </a>
          <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noreferrer"
            className="text-gray-400 hover:text-indigo-600 font-medium transition-colors">
            LinkedIn
          </a>
          <a href="mailto:your@email.com"
            className="text-gray-400 hover:text-indigo-600 font-medium transition-colors">
            Email
          </a>
        </div>

      </div>
    </section>
  );
}