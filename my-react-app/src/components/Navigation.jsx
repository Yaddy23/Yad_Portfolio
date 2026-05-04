import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_ITEMS = [
  { label: 'Work', id: 'work' },
  { label: 'About', id: 'about' },
  { label: 'Contact', id: 'contact' },
];

export default function Navigation({ onNavigate, currentSection }) {
  const [time, setTime] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false }));
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference pointer-events-none">
      <div className="flex items-center justify-between px-6 md:px-12 py-6">
        <button
          onClick={() => onNavigate('hero')}
          className="pointer-events-auto font-mono text-xs tracking-[0.3em] text-foreground uppercase hover:text-primary transition-colors duration-500"
        >
          Portfolio
        </button>

        <div className="hidden md:flex items-center gap-12 pointer-events-auto">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-500 ${
                currentSection === item.id ? 'text-primary' : 'text-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="hidden md:block font-mono text-xs tracking-[0.2em] text-muted-foreground">
          {time}
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden pointer-events-auto flex flex-col gap-1.5"
        >
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-foreground transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-[3.5px]' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden fixed inset-0 bg-background/95 backdrop-blur-xl flex flex-col items-center justify-center gap-12 pointer-events-auto"
          >
            {NAV_ITEMS.map((item) => (
              <button
                key={item.id}
                onClick={() => { onNavigate(item.id); setMenuOpen(false); }}
                className="font-display text-4xl text-foreground hover:text-primary transition-colors"
              >
                {item.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}