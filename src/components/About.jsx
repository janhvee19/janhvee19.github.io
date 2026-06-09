const skills = {
  "Front-End": ["React", "Next.js", "Tailwind CSS", "HTML & CSS", "JavaScript"],
  "Back-End": ["Node.js", "Express.js", "MongoDB", "REST APIs"],
  "Design": ["Figma", "Canva", "UI/UX Design", "Wireframing"],
  "Tools": ["Git & GitHub", "VS Code", "Vercel", "Vite"],
};

export default function About() {
  return (
    <section id="about" className="py-24 px-6 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">
            About Me
          </span>

          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white">
            Who I am
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              Hi! I'm{" "}
              <span className="text-indigo-600 font-semibold">
                Janhvee
              </span>
              , a UI/UX Designer and Full-Stack Developer based in Ghaziabad,
              India.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-6">
              I love building products that are both beautiful and functional —
              from crafting pixel-perfect interfaces in Figma to shipping
              full-stack web apps with React and Node.js.
            </p>

            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-8">
              Currently pursuing my degree at AKTU while actively working on
              real-world projects and open to internship and freelance
              opportunities.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="mailto:your@email.com"
                className="px-6 py-3 bg-indigo-600 text-white font-semibold rounded-full hover:bg-indigo-700 transition-colors"
              >
                Hire Me
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 font-semibold rounded-full hover:border-indigo-500 hover:text-indigo-600 transition-colors"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {Object.entries(skills).map(([category, items]) => (
              <div
                key={category}
                className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-5"
              >
                <h4 className="text-sm font-bold text-indigo-600 uppercase tracking-wider mb-3">
                  {category}
                </h4>

                <ul className="flex flex-col gap-2">
                  {items.map((skill) => (
                    <li
                      key={skill}
                      className="text-gray-600 dark:text-gray-300"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}