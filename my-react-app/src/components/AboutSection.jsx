import { motion } from 'framer-motion';

const SKILLS = [
  'C#', 'Kotlin', 'Java', 'C', 'C++', 'VB.net', 'SQL', 'MongoDB',
  'HTML', 'CSS', 'Arduino', 'GitHub', 'Postman', 'Selenium', 'Copilot',
];

const CERTS = [
  'Civil Service Exam Passer — Professional (2023)',
  'DOST–NCR R&D Conference — 3rd Place (2022)',
  'R&D Talk: From Ideation to Commercialization (2022)',
  'Zuitt Free Coding Bootcamp: Basic Web Development (2023)',
];

export default function AboutSection() {
  return (
    <section className="min-h-screen px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-6xl mx-auto">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-primary uppercase mb-8"
        >
          The Manifesto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <ul className="list-disc font-display text-4xl md:text-7xl lg:text-8xl text-foreground leading-[1.15] max-w-6xl mb-16 md:mb-24">
          <li>Detail-oriented.</li>
          <li>Technical.</li>
          <li>Driven by quality from code to delivery.</li>
          </ul>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="font-body text-lg leading-[1.8] text-muted-foreground mb-8">
              Motivated and detail-oriented BSIT graduate from the University of Caloocan City
              with hands-on experience in software development, quality assurance, and IT support.
              Proven ability to solve technical problems, lead backend development, and support
              enterprise-level software systems.
            </p>
            <p className="font-body text-lg leading-[1.8] text-muted-foreground mb-12">
              Seeking to apply and expand skills in programming, system integration, and process
              optimization within a forward-thinking tech organization.
            </p>

            {/* Certs */}
            <div>
              <p className="font-body text-lg leading-[1.8] text-muted-foreground mb-8">Certificates</p>
              <ul className="space-y-0.01">
                {CERTS.map((cert) => (
                  <li key={cert} className="flex items-start">
                    <span className="mt-2 block h-1 rounded-full bg-primary flex-shrink-0" />
                    <span className="font-body text-lg leading-[1.8] text-muted-foreground mb-5">{cert}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-12"
          >
            {/* Stats */}
            <div className="space-y-6">
              {[
                { label: 'Projects Built', value: '4' },
                { label: 'QA Internship', value: '6mo' },
                { label: 'Award Won', value: 'DOST–NCR R&D Conference 3rd Place'},
                { label: 'Tech Skills', value: '15+' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between border-b border-border pb-4">
                  <span className="font-mono text-[10px] md:text-xs tracking-[0.2em] text-muted-foreground uppercase">
                    {stat.label}
                  </span>
                  <span className="font-display text-3xl md:text-4xl text-foreground text-right">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Skills */}
            <div>
              <p className="font-mono text-[10px] tracking-[0.3em] text-primary uppercase mb-4">Technical Skills</p>
              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="font-mono text-[10px] tracking-[0.15em] px-3 py-1.5 border border-border text-muted-foreground hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}