import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroSection({ heroImage, onExplore }) {
  const containerRef = useRef(null);
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouse = (e) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };
    const el = containerRef.current;
    el?.addEventListener('mousemove', handleMouse);
    return () => el?.removeEventListener('mousemove', handleMouse);
  }, []);

  const bgX = 50 + (mousePos.x - 0.5) * 8;
  const bgY = 50 + (mousePos.y - 0.5) * 8;

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center cursor-crosshair"
    >
      <div
        className="absolute inset-0 transition-all duration-700 ease-out"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: '120%',
          backgroundPosition: `${bgX}% ${bgY}%`,
          filter: 'brightness(0.3) contrast(1.2)',
        }}
      />

      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.5'/%3E%3C/svg%3E")`,
        }}
      />

      <div className="relative z-10 text-center px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="font-mono text-xs md:text-sm tracking-[0.4em] text-primary mb-6 md:mb-8 uppercase">
            IT Administrator
          </p>
          <h1 className="font-display text-[14vw] md:text-[12vw] leading-[0.85] tracking-[-0.05em] text-foreground font-bold">
            Gerald
            <br />
            <span className="italic font-normal">Nava</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="mt-12 md:mt-16"
        >
          <button
            onClick={onExplore}
            className="group inline-flex items-center gap-4 font-mono text-xs tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors duration-500 uppercase"
          >
            <span className="block w-12 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-20 transition-all duration-500" />
            Explore Work
            <span className="block w-12 h-px bg-muted-foreground group-hover:bg-primary group-hover:w-20 transition-all duration-500" />
          </button>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-6 md:left-12 right-6 md:right-12 flex justify-between items-end">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground">
          QUEZON CITY, PHILIPPINES
        </p>
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground">
          SCROLL &#8594;
        </p>
      </div>
    </section>
  );
}