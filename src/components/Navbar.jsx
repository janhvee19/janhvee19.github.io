import { useState, useEffect } from "react";

export default function Navbar() {
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
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}>
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
              className="text-sm font-medium text-gray-600 hover:text-indigo-600 capitalize transition-colors"
            >
              {link}
            </button>
          ))}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 rounded-full bg-indigo-600 text-white text-sm font-semibold hover:bg-indigo-700 transition-colors"
          >
            Resume
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-700 text-2xl" onClick={() => setOpen(!open)}>
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {["home", "work", "about", "contact"].map((link) => (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className="text-left text-gray-700 font-medium hover:text-indigo-600 capitalize"
            >
              {link}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
}