import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/057d0fa6-d097-4747-a968-6a79e82f174a/files/ee58c110-8472-454a-a78e-0319ecae36d1.jpg"
          alt="Живопись заслуженного художника России"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-xs md:text-sm uppercase tracking-[0.3em] mb-4 opacity-80">Заслуженный художник России</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-none">
          ЖИВОПИСЬ
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-8">
          Оригинальные работы для коллекционеров и ценителей прекрасного
        </p>
        <a
          href="#gallery"
          className="inline-block border border-white text-white px-8 py-3 text-sm uppercase tracking-wide hover:bg-white hover:text-black transition-all duration-300"
        >
          Смотреть галерею
        </a>
      </div>
    </div>
  );
}