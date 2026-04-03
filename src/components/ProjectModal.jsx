import { useState } from "react";

const ProjectModal = ({ proyek, onClose }) => {
  const [slideIndex, setSlideIndex] = useState(0);
  const images = proyek.preview;

  const nextSlide = () => setSlideIndex((prev) => (prev + 1) % images.length);
  const prevSlide = () =>
    setSlideIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div
      className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-50 px-4"
      onClick={onClose}
    >
      <div
        className="relative bg-zinc-900 border border-zinc-800 rounded-2xl w-full max-w-3xl shadow-2xl animate-fade-up overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-zinc-800">
          <h3 className="font-semibold text-sm truncate pr-4">{proyek.nama}</h3>
          <div className="flex items-center gap-3">
            {proyek.github && (
              <a
                href={proyek.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-white transition-colors"
              >
                <i className="ri-github-line ri-lg" />
              </a>
            )}
            <button
              onClick={onClose}
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="Close"
            >
              <i className="ri-close-line ri-xl" />
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-[400px] bg-zinc-950">
          <img
            src={images[slideIndex]}
            alt={`Preview ${slideIndex + 1}`}
            className="w-full h-full object-contain"
          />

          {/* Nav arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute top-1/2 left-3 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-violet-600 transition-all cursor-pointer"
                aria-label="Previous"
              >
                <i className="ri-arrow-left-s-line ri-lg" />
              </button>
              <button
                onClick={nextSlide}
                className="absolute top-1/2 right-3 -translate-y-1/2 w-10 h-10 rounded-full bg-zinc-900/80 border border-zinc-700 flex items-center justify-center text-white hover:bg-violet-600 transition-all cursor-pointer"
                aria-label="Next"
              >
                <i className="ri-arrow-right-s-line ri-lg" />
              </button>
            </>
          )}
        </div>

        {/* Dots / Indicators */}
        {images.length > 1 && (
          <div className="flex items-center justify-center gap-2 p-3 border-t border-zinc-800">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setSlideIndex(i)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  i === slideIndex
                    ? "bg-violet-500 w-6"
                    : "bg-zinc-600 hover:bg-zinc-500"
                }`}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
