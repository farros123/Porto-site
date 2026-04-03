import { useState } from "react";
import { listSertifikat } from "../data";

const ExperienceSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleItems = showAll ? listSertifikat : listSertifikat.slice(0, 3);

  return (
    <section className="py-20" id="sertif">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading">
            <span className="gradient-text">Experience</span>
          </h2>
          <p className="section-sub">Berikut sertifikat dan pengalaman saya</p>
        </div>

        {/* Timeline */}
        <div className="relative pl-8 timeline-line space-y-10 max-w-4xl mx-auto">
          {visibleItems.map((item) => (
            <div
              key={item.id}
              className="relative"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={item.dad}
            >
              {/* Dot */}
              <div className="timeline-dot" />

              <div className="glass-card p-6 ml-4">
                <div className="grid md:grid-cols-2 gap-6 items-start">
                  {/* Certificate Image */}
                  <a
                    href={item.gambar}
                    target="_blank"
                    rel="noreferrer"
                    className="block project-img-wrap"
                  >
                    <img
                      src={item.gambar}
                      alt={item.judul}
                      loading="lazy"
                      className="w-full h-auto max-h-56 object-contain rounded-lg"
                    />
                  </a>

                  {/* Details */}
                  <div>
                    <h3 className="text-lg font-semibold mb-3">{item.judul}</h3>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-4">
                      {item.deskripsi}
                    </p>
                    <div className="space-y-1.5 text-xs">
                      <div className="flex items-center gap-2 text-zinc-500">
                        <i className="ri-calendar-line text-violet-400" />
                        <span>{item.bulan}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <i className="ri-building-line text-violet-400" />
                        <span>{item.penyelenggara}</span>
                      </div>
                      <div className="flex items-center gap-2 text-zinc-500">
                        <i className="ri-map-pin-line text-violet-400" />
                        <span>{item.tempat}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show more / less */}
        {listSertifikat.length > 3 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="btn-primary"
            >
              {showAll ? "Sembunyikan" : "Selengkapnya"}
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExperienceSection;
