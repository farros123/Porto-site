const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-10" style={{ borderTop: "1px solid var(--border-color)" }}>
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">
              <span className="gradient-text">Farros</span>
              <span style={{ color: "var(--text-faintest)" }}>.dev</span>
            </h2>
            <p className="text-xs mt-1" style={{ color: "var(--text-faintest)" }}>
              © {currentYear} Ghalib Farros Syahreal
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm" style={{ color: "var(--text-faintest)" }}>
            <a href="#beranda" className="hover:text-violet-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-violet-500 transition-colors">About</a>
            <a href="#project" className="hover:text-violet-500 transition-colors">Project</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            {[
              { href: "https://github.com/farros123", icon: "ri-github-fill" },
              { href: "https://www.instagram.com/farrossyahreal/", icon: "ri-instagram-fill" },
              { href: "https://www.linkedin.com/in/farros-syahreal-067b66272/", icon: "ri-linkedin-fill" },
              { href: "https://x.com/FarrosSyahreal", icon: "ri-twitter-x-fill" },
            ].map((social) => (
              <a
                key={social.icon}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg flex items-center justify-center hover:text-white hover:bg-violet-600 transition-all"
                style={{
                  background: "var(--bg-element)",
                  color: "var(--text-faint)",
                }}
              >
                <i className={`${social.icon} ri-lg`} />
              </a>
            ))}

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg flex items-center justify-center hover:text-white hover:bg-violet-600 transition-all cursor-pointer ml-2"
              style={{
                background: "var(--bg-element)",
                color: "var(--text-faint)",
              }}
              aria-label="Scroll to top"
            >
              <i className="ri-arrow-up-line ri-lg" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;