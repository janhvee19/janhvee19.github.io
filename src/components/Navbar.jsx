import { useState, useEffect } from "react";

export default function Navbar({ darkMode, setDarkMode }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? "bg-white dark:bg-gray-950 shadow-sm" 
        : "bg-transparent"
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <button onClick={() => scrollTo("home")} className="text-xl font-bold text-indigo-600">
          &lt;Janhvee /&gt;
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {["home", "work", "about", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 capitalize transition-colors"
            >
              {link}
            </button>
          ))}

          {/* Dark mode toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-10 h-10 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors text-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile right side */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="w-9 h-9 rounded-full flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-lg"
          >
            {darkMode ? "☀️" : "🌙"}
          </button>
          <button className="text-gray-700 dark:text-gray-300 text-2xl" onClick={() => setOpen(!open)}>
            {open ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white dark:bg-gray-950 border-t border-gray-100 dark:border-gray-800 px-6 py-4 flex flex-col gap-4">
          {["home", "work", "about", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-700 dark:text-gray-300 font-medium hover:text-indigo-600 capitalize"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}