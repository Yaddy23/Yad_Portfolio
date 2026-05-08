import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

export default function ProjectDetail({ project, onClose }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-background overflow-y-auto"
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="fixed top-6 right-6 md:right-12 z-50 w-12 h-12 flex items-center justify-center border border-border hover:border-primary hover:text-primary text-foreground transition-colors duration-300"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="w-full h-[60vh] md:h-[80vh] relative overflow-hidden"
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </motion.div>

        {/* Content */}
        <div className="max-w-6xl mx-auto px-6 md:px-12 -mt-32 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <p className="font-mono text-xs tracking-[0.4em] text-primary mb-4">
              {project.year} — {project.role}
            </p>
            <h1 className="font-display text-5xl md:text-8xl text-foreground leading-[0.9] mb-8">
              {project.title}
            </h1>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-16 py-16 md:py-24">
            {/* Left: Brief */}
            <motion.div
              className="md:col-span-2 md:sticky md:top-24 md:self-start"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <h3 className="font-mono text-xs tracking-[0.3em] text-primary uppercase mb-6">
                Project Brief
              </h3>
              <p className="font-body text-lg leading-relaxed text-muted-foreground mb-10">
                {project.description}
              </p>

              <div className="space-y-6">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">Tech Stack</p>
                  <ul className="flex flex-col gap-x-4 gap-y-2 font-body text-foreground">
                    {project.tech?.map((item, index) => (
                      <li key={index} className="flex items-center text-sm md:text-base">
                        <span className="mr-2 text-muted-foreground opacity-50">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-1">Role</p>
                  <p className="font-body text-foreground">{project.role}</p>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-1">Duration</p>
                  <p className="font-body text-foreground">{project.duration}</p>
                </div>
              </div>
            </motion.div>

            {/* Right: Visual stream */}
            <motion.div
              className="md:col-span-3 space-y-8"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img src={project.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden">
                  <img src={project.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 grayscale hover:grayscale-0" />
                </div>
                <div className="aspect-square overflow-hidden">
                  <img src={project.image} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                </div>
              </div>
              <blockquote className="border-l-2 border-primary pl-6 py-4">
                <p className="font-display text-xl md:text-2xl italic text-foreground leading-relaxed">
                  "Every design choice was intentional, every pixel deliberate. This project pushed the boundaries of what was possible."
                </p>
              </blockquote>
            </motion.div>
          </div>
        </div>

        {/* Back button */}
        <div className="text-center pb-24">
          <button
            onClick={onClose}
            className="font-mono text-xs tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors uppercase"
          >
            ← Back to Index
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}