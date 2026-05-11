import { motion } from 'motion/react';
import { Menu, X, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Ladies Exclusive', href: '#ladies' },
    { name: 'Facilities', href: '#facilities' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-brand-black/80 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0 flex items-center gap-2">
            <div className="bg-brand-neon text-black font-black px-3 py-1 text-2xl tracking-tighter italic">TF</div>
            <span className="font-display text-2xl tracking-widest uppercase">TITAN FITNESS</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-brand-neon transition-colors font-bold text-[10px] tracking-[0.2em] uppercase"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a href="https://instagram.com" target="_blank" rel="noopener" className="p-2 text-gray-500 hover:text-brand-neon">
              <Instagram size={18} />
            </a>
            <button className="border border-brand-neon text-brand-neon px-6 py-2 text-[10px] font-black uppercase tracking-widest hover:bg-brand-neon hover:text-black transition-all">
              JOIN NOW
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-brand-charcoal border-b border-white/10"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-brand-neon block px-3 py-4 text-base font-medium border-b border-white/5 last:border-none"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <button className="w-full bg-brand-neon text-black px-6 py-4 mt-4 font-bold rounded-md">
            JOIN NOW
          </button>
        </div>
      </motion.div>
    </nav>
  );
}
