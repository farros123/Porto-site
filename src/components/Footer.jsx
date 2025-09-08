const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center">
        <h1 className="text-2xl font-bold">My Portofolio</h1>
        <div className="flex gap-7">
        <a href="#beranda">Home</a>
        <a href="#project">Project</a>
        <a href="#about">About</a>
    </div>
    <div className="flex items-center gap-3">
        <a href="https://github.com/farros123">
            <i className="ri-github-fill ri-2x"></i>
        </a>
        <a href="https://www.instagram.com/farrossyahreal/">
            <i className="ri-instagram-fill ri-2x"></i>
        </a>
        <a href="https://www.linkedin.com/in/farros-syahreal-067b66272/">
            <i className="ri-linkedin-fill ri-2x"></i>
        </a>
        <a href="https://x.com/FarrosSyahreal">
            <i className="ri-twitter-fill ri-2x"></i>
        </a>
    </div>
    </div>
  );
};

export default Footer;