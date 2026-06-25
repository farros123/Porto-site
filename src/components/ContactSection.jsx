const ContactSection = () => {
  return (
    <section className="py-20" id="contact">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading">
            <span className="gradient-text">Kontak</span>
          </h2>
          <p className="section-sub">Hubungi saya</p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
          {/* Left - Info */}
          <div className="space-y-6" data-aos="fade-up" data-aos-duration="800">
            <h3 className="text-xl font-semibold">Mari terhubung!</h3>
            <p
              className="leading-relaxed text-sm"
              style={{ color: "var(--text-faint)" }}
            >
              Saya terbuka untuk peluang kerja, proyek freelance, atau sekadar 
              berdiskusi tentang teknologi. Jangan ragu untuk menghubungi saya.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:farrossyahreal7@gmail.com"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "var(--text-faint)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-violet-500/10"
                  style={{ background: "var(--bg-element)" }}
                >
                  <i className="ri-mail-line text-violet-400" />
                </div>
                <span className="text-sm">farrossyahreal7@gmail.com</span>
              </a>

              <a
                href="https://www.linkedin.com/in/farros-syahreal-067b66272/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "var(--text-faint)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-violet-500/10"
                  style={{ background: "var(--bg-element)" }}
                >
                  <i className="ri-linkedin-fill text-violet-400" />
                </div>
                <span className="text-sm">LinkedIn</span>
              </a>

              <a
                href="https://github.com/farros123"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition-colors group"
                style={{ color: "var(--text-faint)" }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center transition-colors group-hover:bg-violet-500/10"
                  style={{ background: "var(--bg-element)" }}
                >
                  <i className="ri-github-fill text-violet-400" />
                </div>
                <span className="text-sm">GitHub</span>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <form
            action="https://formsubmit.co/farrossyahreal7@gmail.com"
            method="POST"
            className="glass-card p-6 space-y-5"
            autoComplete="off"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="space-y-1.5">
              <label
                htmlFor="nama"
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Nama Lengkap
              </label>
              <input
                type="text"
                name="nama"
                id="nama"
                placeholder="Masukkan Nama"
                required
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="email"
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Masukkan Email"
                required
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <div className="space-y-1.5">
              <label
                htmlFor="pesan"
                className="text-sm font-medium"
                style={{ color: "var(--text-secondary)" }}
              >
                Pesan
              </label>
              <textarea
                name="pesan"
                id="pesan"
                rows="5"
                placeholder="Tulis pesan Anda..."
                className="w-full rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-violet-500 focus:ring-1 focus:ring-violet-500/30 transition-all resize-none"
                style={{
                  background: "var(--input-bg)",
                  border: "1px solid var(--input-border)",
                  color: "var(--text-primary)",
                }}
              />
            </div>

            <button type="submit" className="btn-primary w-full flex items-center justify-center gap-2">
              <i className="ri-send-plane-line" />
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
