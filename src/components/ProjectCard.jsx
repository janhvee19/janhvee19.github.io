export default function ProjectCard({ project }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 overflow-hidden flex flex-col">
      <div className={`h-2 w-full bg-gradient-to-r ${project.gradient}`} />

      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-center justify-between mb-4">
          <span className="text-4xl">{project.emoji}</span>

          <span
            className={`text-xs font-semibold px-3 py-1 rounded-full ${project.categoryColor}`}
          >
            {project.category}
          </span>
        </div>

        <h3 className="text-xl font-bold text-gray-900 mb-1">
          {project.name}
        </h3>

        <p className="text-indigo-500 text-sm font-medium mb-3">
          {project.tagline}
        </p>

        <p className="text-gray-500 text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <ul className="flex flex-col gap-1 mb-6">
          {project.highlights.map((h) => (
            <li key={h} className="flex items-center gap-2 text-sm text-gray-600">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 inline-block" />
              {h}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.stack.map((s) => (
            <span
              key={s}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="flex gap-3 mt-auto">
          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Live Demo
          </a>

          <a
            href={project.repo}
            target="_blank"
            rel="noreferrer"
            className="flex-1 text-center py-2 rounded-full border-2 border-gray-200 text-gray-600 text-sm font-semibold hover:border-indigo-400 hover:text-indigo-600 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}