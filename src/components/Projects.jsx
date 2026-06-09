import { useState } from "react";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

const categories = ["All", "Product / UX", "Web App", "AI & SaaS"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-indigo-500 font-semibold text-sm uppercase tracking-widest">
            Featured Work
          </span>
          <h2 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">
            Projects I'm proud of
          </h2>
          <p className="mt-4 text-gray-500 max-w-xl mx-auto">
            Real apps. Real users. Built end-to-end — from design to deployment.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all ${
                active === c
                  ? "bg-indigo-600 text-white shadow-md"
                  : "bg-white text-gray-600 border border-gray-200 hover:border-indigo-400 hover:text-indigo-600"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

      </div>
    </section>
  );
}