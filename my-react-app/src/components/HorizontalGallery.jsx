import { useRef, useEffect } from 'react';
import ProjectCard from './ProjectCard';

export default function HorizontalGallery({ projects, onProjectClick }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      // Only capture vertical scrolls and convert to horizontal
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollLeft += e.deltaY;
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="relative">
      {/* Section header */}
      <div className="px-6 md:px-12 pt-24 pb-8">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary uppercase mb-4">
          Selected Work
        </p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.9]">
          The Index
        </h2>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-8 md:gap-12 overflow-x-auto px-6 md:px-12 pb-16 snap-x snap-mandatory"
        style={{ scrollbarWidth: 'thin' }}
      >
        {projects.map((project, i) => (
          <div key={project.id} className="snap-start">
            <ProjectCard
              project={project}
              index={i}
              onClick={onProjectClick}
            />
          </div>
        ))}

        {/* End spacer */}
        <div className="flex-shrink-0 w-[20vw] flex items-center justify-center">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground -rotate-90 whitespace-nowrap">
            END OF INDEX
          </p>
        </div>
      </div>
    </section>
  );
}