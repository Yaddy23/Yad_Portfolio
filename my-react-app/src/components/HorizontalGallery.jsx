import { useRef, useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';

export default function HorizontalGallery({ projects, onProjectClick }) {
  const scrollRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - scrollRef.current.offsetLeft);
    setScrollLeft(scrollRef.current.scrollLeft);
  };

  const stopDragging = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX) * 1.5; 
    scrollRef.current.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        e.preventDefault();
        el.scrollTo({
          left: el.scrollLeft + e.deltaY * 1.5,
          behavior: 'auto'
        });
      }
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, []);

  return (
    <section className="relative overflow-hidden select-none">
      <div className="px-6 md:px-12 pt-24 pb-8">
        <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary uppercase mb-4">Selected Work</p>
        <h2 className="font-display text-5xl md:text-7xl text-foreground leading-[0.9]">The Index</h2>
      </div>

      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseUp={stopDragging}
        onMouseLeave={stopDragging}
        onMouseMove={handleMouseMove}
        className={`
          flex gap-8 md:gap-12 overflow-x-auto px-6 md:px-12 pb-16 
          scrollbar-hide touch-pan-x transition-colors duration-300
          ${isDragging ? 'snap-none cursor-grabbing' : 'snap-x snap-mandatory cursor-grab'}
        `}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style dangerouslySetInnerHTML={{ __html: `div::-webkit-scrollbar { display: none; }` }} />

        {projects.map((project, i) => (
          <div 
            key={project.id} 
            className="snap-center shrink-0"
            onClickCapture={(e) => isDragging && e.stopPropagation()}
          >
            <ProjectCard project={project} index={i} onClick={onProjectClick} />
          </div>
        ))}

        <div className="flex-shrink-0 w-[40vw] md:w-[20vw] flex items-center justify-center snap-center">
          <p className="font-mono text-xs tracking-[0.3em] text-muted-foreground uppercase -rotate-90 opacity-30">End of Index</p>
        </div>
      </div>
    </section>
  );
}