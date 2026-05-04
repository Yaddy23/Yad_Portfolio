import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';

export default function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sending, setSending] = useState(false);

  const allValid = form.name.trim() && form.email.trim() && form.message.trim();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await new Promise((r) => setTimeout(r, 1500));
    toast.success('Message sent successfully');
    setForm({ name: '', email: '', message: '' });
    setSending(false);
  };

  const handleChange = (field) => (e) => {
    setForm((prev) => ({ ...prev, [field]: e.target.value }));
  };

  return (
    <section className="min-h-screen px-6 md:px-12 py-24 md:py-32 relative overflow-hidden">
      <motion.div
        className="absolute inset-0 bg-primary/5"
        animate={{ opacity: allValid ? 1 : 0 }}
        transition={{ duration: 1 }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
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

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-10 pt-8"
          >
            {[
              { field: 'name', label: 'Name', type: 'text', placeholder: 'Your name' },
              { field: 'email', label: 'Email', type: 'email', placeholder: 'your@email.com' },
            ].map(({ field, label, type, placeholder }) => (
              <div key={field}>
                <label className="block font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                  {label}
                </label>
                <input
                  type={type}
                  value={form[field]}
                  onChange={handleChange(field)}
                  placeholder={placeholder}
                  required
                  className="w-full bg-transparent border-b-2 border-border focus:border-primary pb-3 font-body text-lg text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors duration-500"
                />
              </div>
            ))}

            <div>
              <label className="block font-mono text-[10px] tracking-[0.3em] text-muted-foreground uppercase mb-3">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={handleChange('message')}
                placeholder="Tell me about your project or opportunity..."
                required
                rows={4}
                className="w-full bg-transparent border-b-2 border-border focus:border-primary pb-3 font-body text-lg text-foreground placeholder:text-muted-foreground/40 outline-none transition-colors duration-500 resize-none"
              />
            </div>

            <motion.button
              type="submit"
              disabled={!allValid || sending}
              className="relative w-full py-6 border-2 border-border hover:border-primary disabled:opacity-30 transition-all duration-500 overflow-hidden"
              whileHover={{ scale: allValid ? 1.01 : 1 }}
              whileTap={{ scale: 0.99 }}
            >
              <motion.span
                className="absolute inset-0 bg-primary"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: allValid && !sending ? 1 : 0 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                style={{ transformOrigin: 'left' }}
              />
              <span className={`relative font-mono text-sm tracking-[0.3em] uppercase transition-colors duration-300 ${allValid && !sending ? 'text-primary-foreground' : 'text-foreground'}`}>
                {sending ? 'Sending...' : 'Send Message'}
              </span>
            </motion.button>
          </motion.form>
        </div>
      </div>

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