import { listTools } from "../data";

const SkillsSection = () => {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-12" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading">
            Skills & <span className="gradient-text">Tools</span>
          </h2>
          <p className="section-sub">Berikut ini Skills dan Tools yang saya pelajari</p>
        </div>

        <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-4">
          {listTools.map((tool) => (
            <div
              key={tool.id}
              className="glass-card p-4 flex items-center gap-3 group cursor-default"
              data-aos="fade-up"
              data-aos-duration="600"
              data-aos-delay={tool.dad}
            >
              <div className="w-12 h-12 rounded-xl bg-zinc-800 p-2 flex items-center justify-center shrink-0 group-hover:bg-zinc-700 transition-colors">
                <img
                  src={tool.gambar}
                  alt={tool.nama}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="min-w-0">
                <h4 className="font-semibold text-sm truncate">{tool.nama}</h4>
                <p className="text-xs text-zinc-500 truncate">{tool.ket}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
