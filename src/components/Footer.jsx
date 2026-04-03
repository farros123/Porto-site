const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-zinc-800 mt-10">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-lg font-bold">
              <span className="gradient-text">Farros</span>
              <span className="text-zinc-500">.dev</span>
            </h2>
            <p className="text-xs text-zinc-600 mt-1">
              © {currentYear} Ghalib Farros Syahreal
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6 text-sm text-zinc-500">
            <a href="#beranda" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#project" className="hover:text-white transition-colors">Project</a>
          </div>

          {/* Social */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/farros123"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all"
            >
              <i className="ri-github-fill ri-lg" />
            </a>
            <a
              href="https://www.instagram.com/farrossyahreal/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all"
            >
              <i className="ri-instagram-fill ri-lg" />
            </a>
            <a
              href="https://www.linkedin.com/in/farros-syahreal-067b66272/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all"
            >
              <i className="ri-linkedin-fill ri-lg" />
            </a>
            <a
              href="https://x.com/FarrosSyahreal"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all"
            >
              <i className="ri-twitter-x-fill ri-lg" />
            </a>

            {/* Scroll to top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-violet-600 transition-all cursor-pointer ml-2"
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