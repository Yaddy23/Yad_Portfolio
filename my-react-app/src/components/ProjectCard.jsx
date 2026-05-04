import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      className="relative flex-shrink-0 h-[80vh] w-[55vw] md:w-[40vw] cursor-pointer group"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={() => onClick(project)}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      {/* Image */}
      <div className="relative w-full h-full overflow-hidden">
        <motion.img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          animate={{ scale: hovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />

        {/* Hover overlay */}
        <motion.div
          className="absolute inset-0 bg-primary/10"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        />
      </div>

      {/* Project info */}
      <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="font-mono text-[10px] md:text-xs tracking-[0.3em] text-primary mb-2">
              {String(index + 1).padStart(2, '0')}
            </p>
            <h3 className="font-display text-2xl md:text-4xl text-foreground leading-tight">
              {project.title}
            </h3>
          </div>
          <motion.div
            animate={{ x: hovered ? 0 : -10, opacity: hovered ? 1 : 0 }}
            transition={{ duration: 0.4 }}
            className="font-mono text-xs text-primary tracking-wider"
          >
            VIEW →
          </motion.div>
        </div>

        {/* Metadata overlay */}
        <motion.div
          animate={{ height: hovered ? 'auto' : 0, opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden mt-4"
        >
          <div className="flex gap-6 font-mono text-[10px] md:text-xs tracking-[0.15em] text-muted-foreground">
            <span>{project.year}</span>
            <span>{project.role}</span>
            <span>{project.tech}</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}