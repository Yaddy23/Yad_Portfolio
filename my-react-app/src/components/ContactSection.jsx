import { motion } from 'framer-motion';

export default function ContactSection() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24 md:py-32 relative overflow-hidden bg-background">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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
            <h2 className="font-display text-5xl md:text-7xl lg:text-8xl text-foreground leading-[0.9] mb-8">
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
                className="block font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                geraldnava2328@gmail.com
              </a>
              <a
                href="tel:+639395092799"
                className="block font-mono text-xs tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
              >
                +63 939 509 2799
              </a>
              <p className="font-mono text-xs tracking-[0.2em] text-muted-foreground">
                Quezon City, Philippines
              </p>
            </div>
          </motion.div>

          {/* Right Column: This column is now empty. Depending on your layout
             needs, you can either leave it empty to maintain the gap,
             or remove the grid wrapper to center the left content. */}
          <div></div>
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