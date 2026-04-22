import DataImage from "../data";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center pt-20 pb-10" id="beranda">
      <div className="max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-12 items-center">
          {/* Left - Text */}
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-800/60 border border-zinc-700/50 mb-8">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-sm text-zinc-400">Open to work</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Hi, Saya{" "}
              <span className="gradient-text">Ghalib Farros</span>
              <br />
              <span className="text-zinc-300">Syahreal</span>
            </h1>

            <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-lg">
              Lulusan jurusan Sistem Informasi di Universitas Amikom Yogyakarta.
            </p>

            <div className="flex items-center gap-4 mb-10">
              <a
                href="/Cv_webfarros.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex items-center gap-2"
              >
                Lihat CV <i className="ri-eye-line ri-lg" />
              </a>
              <a href="#project" className="btn-outline">
                Project
              </a>
            </div>

            {/* Stats */}
            <div className="flex gap-8">
              <div>
                <h3 className="text-3xl font-bold">
                  13<span className="text-violet-500">+</span>
                </h3>
                <p className="text-sm text-zinc-500">Proyek Selesai</p>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <h3 className="text-3xl font-bold">
                  9<span className="text-violet-500">+</span>
                </h3>
                <p className="text-sm text-zinc-500">Sertifikat</p>
              </div>
              <div className="w-px bg-zinc-800" />
              <div>
                <h3 className="text-3xl font-bold">
                  3<span className="text-violet-500">+</span>
                </h3>
                <p className="text-sm text-zinc-500">Tahun Belajar</p>
              </div>
            </div>
          </div>

          {/* Right - Photo */}
          <div className="flex justify-center lg:justify-end animate-fade-up" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-2xl bg-violet-600/20 blur-3xl scale-90" />
              <div className="relative gradient-border">
                <img
                  src={DataImage.Profile1}
                  alt="Ghalib Farros Syahreal"
                  className="w-[340px] sm:w-[400px] rounded-2xl object-cover relative z-10"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 glass-card px-4 py-3 animate-float z-20">
                <div className="flex items-center gap-2">
                  <img src={DataImage.coding} alt="" className="w-8 h-8 rounded-md" />
                  <div>
                    <p className="text-xs font-semibold">System Analyst</p>
                    <p className="text-[10px] text-zinc-500">Web Developer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
