import DataImage from "../data";

const AboutSection = () => {
  return (
    <section className="py-20" id="about">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="section-sub">Sedikit tentang saya</p>
        </div>

        <div
          className="glass-card p-8 sm:p-10 max-w-3xl mx-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <div className="flex items-start gap-4 mb-6">
            <img
              src={DataImage.coding}
              alt="Coding"
              className="w-12 h-12 rounded-lg object-cover hidden sm:block"
            />
            <div className="w-full">
              <p className="text-zinc-300 leading-relaxed text-base">
                Saya memiliki ketertarikan kuat di bidang{" "}
                <span className="text-violet-400 font-medium">System Analyst</span>,{" "}
                <span className="text-violet-400 font-medium">UI/UX Design</span>, dan{" "}
                <span className="text-violet-400 font-medium">Web Development</span>.
                Dengan latar belakang akademis di bidang sistem informasi dan pengalaman
                dalam merancang solusi digital, saya fokus pada pengembangan sistem yang
                efisien, desain antarmuka yang user-friendly, serta pembuatan website
                yang responsif dan fungsional.
              </p>
            </div>
          </div>

          <div className="border-t border-zinc-800 pt-6 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <i className="ri-graduation-cap-line text-violet-400 ri-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold">Sistem Informasi</p>
                <p className="text-xs text-zinc-500">Universitas AMIKOM Yogyakarta</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <i className="ri-code-s-slash-line text-violet-400 ri-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold">
                  13<span className="text-violet-400">+</span> Proyek
                </p>
                <p className="text-xs text-zinc-500">Selesai dikerjakan</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center">
                <i className="ri-focus-3-line text-violet-400 ri-lg" />
              </div>
              <div>
                <p className="text-sm font-semibold">Mencari Pekerjaan</p>
                <p className="text-xs text-zinc-500">Open to work</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
