import { useState, useEffect } from "react";

const PreLoader = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setLoading(false), 500);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 z-[99] bg-zinc-950 flex flex-col items-center justify-center transition-opacity duration-500 ${fadeOut ? "opacity-0" : "opacity-100"
        }`}
    >
      <div className="text-2xl font-bold mb-6">
        <span className="gradient-text">Farros</span>
        <span className="text-zinc-500">.dev</span>
      </div>
      <div className="w-8 h-8 border-2 border-violet-600 border-t-transparent rounded-full animate-spin" />
    </div>
  );
};

export default PreLoader;