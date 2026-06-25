import { useState } from "react";
import { listProyek } from "../data";
import ProjectModal from "./ProjectModal";

const ProjectsSection = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentProyek, setCurrentProyek] = useState(null);

  const openModal = (proyek) => {
    setCurrentProyek(proyek);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentProyek(null);
  };

  return (
    <section className="py-20" id="project">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-14" data-aos="fade-up" data-aos-duration="800">
          <h2 className="section-heading">
            <span className="gradient-text">Proyek</span>
          </h2>
          <p className="section-sub">Berikut Proyek Saya</p>
        </div>

        <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {listProyek.map((proyek) => (
            <div
              key={proyek.id}
              className="glass-card overflow-hidden group"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay={proyek.dad}
            >
              {/* Image */}
              <div className="project-img-wrap h-48">
                <img
                  src={proyek.gambar}
                  alt={proyek.nama}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="text-lg font-semibold mb-2">{proyek.nama}</h3>
                <p
                  className="text-sm leading-relaxed mb-4 line-clamp-3"
                  style={{ color: "var(--text-faint)" }}
                >
                  {proyek.desk}
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proyek.tools.map((tool, i) => (
                    <span key={i} className="tech-pill">
                      {tool}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                {typeof proyek.preview === "string" ? (
                  <a
                    href={proyek.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <button className="btn-primary w-full text-sm flex items-center justify-center gap-2">
                      <i className="ri-external-link-line" />
                      Lihat Project
                    </button>
                  </a>
                ) : (
                  <button
                    onClick={() => openModal(proyek)}
                    className="btn-primary w-full text-sm flex items-center justify-center gap-2"
                  >
                    <i className="ri-image-line" />
                    Lihat Project
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalOpen && currentProyek && (
        <ProjectModal proyek={currentProyek} onClose={closeModal} />
      )}
    </section>
  );
};

export default ProjectsSection;