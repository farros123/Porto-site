import DataImage from "./data";
import { listTools, listProyek } from "./data";
import { listSertifikat } from "./data";
import React, { useState } from "react";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProyek, setCurrentProyek] = useState(null);
  const [slideIndex, setSlideIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const openModal = (proyek) => {
    setCurrentProyek(proyek);
    setSlideIndex(0);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentProyek(null);
  };

  const nextSlide = () => {
    if (!currentProyek) return;
    setSlideIndex((prev) => (prev + 1) % currentProyek.preview.length);
  };

  const prevSlide = () => {
    if (!currentProyek) return;
    setSlideIndex((prev) => (prev - 1 + currentProyek.preview.length) % currentProyek.preview.length);
  };
  const openFullscreen = () => setIsFullscreen(true);
const closeFullscreen = () => setIsFullscreen(false);


  return (
    <>
      {/* Profile */}
      <div className="hero grid grid-cols-2 items-center pt-10 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInDown animate__delay-3s">
          <div className="flex items-center gap-3 mb-6 bg-slate-800 w-fit p-4 rounded-2xl">
            <q>Sedang Berproses.✌️</q>
          </div>
          <h1 className="text-5xl/tight font-bold mb-6 bg-gradient-to-r from-violet-800 via-indigo-700 to-blue-600 text-transparent bg-clip-text">
           Hi, Saya Ghalib Farros Syahreal
         </h1>
          <p className="text-base/loose mb-6">
                           Lulusan jurusan Sistem Informasi di Universitas Amikom Yogyakarta saat ini sedang menunggu wisuda.         </p>
          <div className="flex items-center sm:gap-4 gap-2">
                 <a
                href="/Cv_Farros.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gradient-to-b from-slate-900 via-sky-600 to-teal-400 p-4 rounded-2xl hover:from-slate-800 hover:via-sky-500 hover:to-teal-300 flex items-center gap-2"
              >
                Lihat CV <i className="ri-eye-line ri-lg"></i>
              </a>
            <a href="#project" className="bg-slate-700 p-4 rounded-2xl hover:bg-slate-600">
              Project<i className></i>
            </a>
          </div>
        </div>
        <img src={DataImage.Profile1} alt="Hero Image" className="w-[500px] md:ml-auto
        animate__animated animate__fadeInDown animate__delay-4s" />
      </div>

      {/* About */}
      <div className="tentang mt-32 py-10" id="about">
        <div className="w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg"
        data-aos="fade-up" data-aos-duration="1000">
          <img src={DataImage.Profile1} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" />
          <p className="text-base/loose mb-10">
           Saya memiliki ketertarikan kuat di bidang System Analyst, UI/UX Design, dan Web Development. Dengan latar belakang akademis di bidang sistem informasi dan pengalaman dalam merancang solusi digital, saya fokus pada pengembangan sistem yang efisien, desain antarmuka yang user-friendly, serta pembuatan website yang responsif dan fungsional.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.coding} alt="Image" className="w-12 rounded-md sm:block hidden" />
            <div className="flex items-center gap-6">
              <div>
                <h1 className="text-4xl mb-1">
                  13<span className="text-violet-500">+</span>
                </h1>
                <p>Proyek Selesai</p>
              </div>
            </div>
          </div>
        </div>
    {/* Tools */}
        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000">Skills</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w-3/4 w-full text-base/loose opacity-50"data-aos="fade-up" data-aos-duration="300">Berikut ini Skills dan Tools yang saya pelajari</p>
          <div className="tools-box mt-14 grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-2 gap-5">
            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id}
              data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad}>
                <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" />
                <div>
                  <h4 className="font-bold">{tool.nama}</h4>
                  <p className="opacity-50">{tool.ket}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

     {/* Experience */}
{/* Experience / Sertifikat */}
<div className="sertifikat mt-32 py-10" id="sertif">
  <h1
    className="text-center text-4xl font-bold mb-2"
    data-aos="fade-up"
    data-aos-duration="1000"
  >
    Experience
  </h1>
  <p className="text-base/loose text-center opacity-50 mb-10">
    Berikut sertifikat dan pengalaman saya
  </p>

  {/* State untuk show/hide */}
  {(() => {
    const [showAll, setShowAll] = React.useState(false);

    // Tentukan berapa sertifikat yang ditampilkan dulu
    const visibleSertif = showAll ? listSertifikat : listSertifikat.slice(0, 2);

    return (
      <>
        <div className="grid gap-10">
          {visibleSertif.map((item) => (
            <div
              key={item.id}
              className="bg-zinc-800 p-6 rounded-lg shadow-md grid lg:grid-cols-2 sm:grid-cols-1 items-center gap-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={item.dad}
            >
              <a
                href={item.gambar}
                target="_blank"
                rel="noreferrer"
                loading="lazy"
                className="block w-full h-full"
              >
                <img
                  src={item.gambar}
                  alt={item.judul}
                  className="w-full max-h-80 object-contain rounded-lg shadow hover:scale-105 transition-transform duration-300"
                />
              </a>
              <div>
                <h2 className="text-xl font-semibold mb-4">{item.judul}</h2>
                <p className="text-base/relaxed opacity-80 mb-4">
                  {item.deskripsi}
                </p>
                <div className="bg-zinc-700 text-sm text-white p-4 rounded-lg">
                  <p>
                    <strong>Bulan:</strong> {item.bulan}
                  </p>
                  <p>
                    <strong>Penyelenggara:</strong> {item.penyelenggara}
                  </p>
                  <p>
                    <strong>Tempat:</strong> {item.tempat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tombol Show/Hide */}
        {listSertifikat.length > 2 && (
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-violet-700 px-6 py-3 rounded-lg border border-zinc-600 hover:bg-violet-600 transition"
            >
              {showAll ? "Sembunyikan" : "Selengkapnya"}
            </button>
          </div>
        )}
      </>
    );
  })()}
</div>




      {/* Project */}
      <div className="proyek mt-32 py-10"id="project">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000">Proyek</h1>
        <p className="text-base/loose text-center opacity-50">Berikut Proyek Saya</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map((proyek) => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md"
            data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad}>
            <div className="w-full h-48 overflow-hidden rounded-md">
              <img
                src={proyek.gambar}
                alt="Proyek Image"
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
              <div className="p-4 bg-zinc-800 rounded-md">
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>
                      {tool}
                    </p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                 {typeof proyek.preview === "string" ? (
  <a
    href={proyek.preview}
    target="_blank"
    rel="noopener noreferrer"
    className="block"
  >
    <button className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full">
      Lihat Project
    </button>
  </a>
) : (
  <button
    onClick={() => openModal(proyek)}
    className="bg-violet-700 p-3 rounded-lg block border border-zinc-600 hover:bg-violet-600 w-full"
  >
    Lihat Project
  </button>
)}

                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {isModalOpen && currentProyek && (
  <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 px-4">
    <div className="relative bg-zinc-900 p-6 rounded-lg w-full max-w-3xl shadow-lg animate__animated animate__zoomIn">
      {/* Tombol Close */}
      <button
        onClick={closeModal}
        className="absolute top-1 right-2 text-white text-2xl hover:text-red-500"
      >
        &times;
      </button>

      {/* Gambar + Tombol Navigasi */}
      <div className="relative w-full h-[400px]">
        {/* Gambar */}
        <img
  src={currentProyek.preview[slideIndex]}
  alt={`Preview ${slideIndex + 1}`}
  className="w-full h-full object-cover rounded-lg cursor-pointer"
  onClick={() =>
    window.open(currentProyek.preview[slideIndex], "_blank", "noopener,noreferrer")
  }
/>
         {/* Tombol panah kiri  */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-black text-4xl font-bold hover:text-violet-400 z-10"
          aria-label="Sebelumnya">
          &lt;
        </button>
      {/* Tombol panah kanan */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 text-black text-4xl font-bold hover:text-violet-400 z-10"
          aria-label="Selanjutnya">
          &gt;
        </button>
      </div>
    </div>
  </div>
  )}
      {/* Contact */}
      <div className="kontak mt-32 sm:p-0"id="contact"data-aos="fade-up" data-aos-duration="1000">
        <h1 className="text-4xl mb-2 font-bold text-center">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50">Hubungi saya</p>
        <form action="https://formsubmit.co/farrossyahreal7@gmail.com" method="POST"
        className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md"
        autoComplete="off">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border
              border-zinc-500 p-2 rounded-md"required/>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border
              border-zinc-500 p-2 rounded-md" required/>
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="pesan"className="font-semibold">
              </label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border
              border-zinc-500 p-2 rounded-md"></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-violet-700 p-3 rounded-lg w-full cursor-pointer border 
                  border-zinc-600 hover:bg-violet-600">Kirim Pesan</button>

                  
            </div>
          </div>

        </form>
      </div>
      
    </>
  );
}

export default App;
