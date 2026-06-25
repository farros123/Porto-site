import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";

const navLinks = [
  { href: "#beranda", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#sertif", label: "Experience" },
  { href: "#project", label: "Project" },
  { href: "#contact", label: "Contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close mobile menu on link click
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "nav-glass py-3" : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#beranda" className="text-xl font-bold tracking-tight">
          <span className="gradient-text">Farros</span>
          <span style={{ color: "var(--text-faint)" }}>.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-violet-500 after:transition-all after:duration-300 hover:after:w-full"
                  style={{ color: "var(--text-faint)" }}
                  onMouseEnter={(e) => (e.target.style.color = "var(--text-primary)")}
                  onMouseLeave={(e) => (e.target.style.color = "var(--text-faint)")}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            aria-label="Toggle theme"
          >
            <i className={theme === "dark" ? "ri-sun-line" : "ri-moon-line"} />
          </button>
        </div>

        {/* Mobile right area */}
        <div className="md:hidden flex items-center gap-3">
          {/* Theme toggle mobile */}
          <button
            onClick={toggleTheme}
            className="theme-toggle"
            style={{ width: "36px", height: "36px", fontSize: "1rem" }}
            aria-label="Toggle theme"
          >
            <i className={theme === "dark" ? "ri-sun-line" : "ri-moon-line"} />
          </button>

          {/* Hamburger */}
          <button
            className="flex flex-col gap-1.5 cursor-pointer z-50"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
              style={{ background: "var(--hamburger-color)" }}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
              style={{ background: "var(--hamburger-color)" }}
            />
            <span
              className={`w-6 h-0.5 transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
              style={{ background: "var(--hamburger-color)" }}
            />
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden fixed inset-0 backdrop-blur-xl flex flex-col items-center justify-center gap-8 transition-all duration-300 ${
            menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          style={{ background: "var(--bg-overlay)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleLinkClick}
              className="text-2xl font-semibold transition-colors"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
