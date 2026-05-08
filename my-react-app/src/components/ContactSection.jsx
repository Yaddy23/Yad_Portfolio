import { motion } from 'framer-motion';
import yadvatar from '../assets/yadvatar2.png';

export default function ContactSection() {
  const profileImage = {
    src: yadvatar, 
    alt: 'Gerald Nava portrait',
    caption: 'GERALD NAVA' 
  };

  return (
    <section className="min-h-screen px-6 md:px-12 py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column: Text and Direct Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary uppercase mb-8">
              Start a Conversation
            </p>
            <h2 className="font-mono text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-8">
              Let's build
              <br />
              <span className="italic">something</span>
              <br />
              great.
            </h2>
            <p className="font-body text-lg text-muted-foreground leading-relaxed max-w-md">
              Open to QA roles, IT support positions, and collaborative software projects.
              Let's connect.
            </p>

            <div className="mt-12 space-y-4">
              <a
                href="mailto:geraldnava2328@gmail.com"
                className="block font-body text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                geraldnava2328@gmail.com
              </a>
              <a
                href="tel:+639395092799"
                className="block font-body text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                +63 939 509 2799
              </a>
              <a
                href="https://www.google.com/maps/place/Quezon+City,+Philippines"
                className="block font-body text-lg text-muted-foreground leading-relaxed max-w-md"
              >
                Quezon City, Philippines
              </a>
            </div>
          </motion.div>

          {/* Right Column: Profile Image */}
          <motion.div
            className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-[60vh] flex flex-col items-center lg:items-end justify-center group"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
          >
            {/* Image Container */}
            <div className="relative overflow-hidden w-full h-full max-w-sm lg:max-w-none lg:w-[80%] border border-border/50">
              {/* Slight reveal effect on hover */}
              <motion.div
                className="absolute inset-0 bg-primary/10 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
              
              <img
                src={profileImage.src}
                alt={profileImage.alt}
                className="w-full h-full object-cover transition-all duration-700 ease-in-out scale-105 group-hover:scale-100"
              />
            </div>

            {/* Optional Stylized Caption */}
            {profileImage.caption && (
            <p className="absolute bottom-2 left-60 z-20 font-mono text-[9px] tracking-[0.5em] text-background bg-foreground px-4 py-2 select-none pointer-events-none mix-blend-difference">
              {profileImage.caption}
            </p>
          )}
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto mt-24 md:mt-32 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          © {new Date().getFullYear()} GERALD NAVA. ALL RIGHTS RESERVED.
        </p>
        <p className="font-mono text-[10px] tracking-[0.2em] text-muted-foreground">
          BSIT — UNIVERSITY OF CALOOCAN CITY
        </p>
      </div>
    </section>
  );
}