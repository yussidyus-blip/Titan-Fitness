import { motion } from 'motion/react';
import { Diamond, ShieldCheck, Clock, ChevronRight } from 'lucide-react';

export default function LadiesSection() {
  return (
    <section id="ladies" className="py-24 bg-brand-charcoal relative overflow-hidden">
      {/* Decorative text */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none transform translate-x-1/4 -translate-y-1/4">
        <span className="font-display text-[30rem] leading-none uppercase">LADIES</span>
      </div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 text-brand-neon mb-4">
              <Diamond size={20} />
              <span className="uppercase tracking-[0.3em] font-bold text-xs font-display">Elite Experience</span>
            </div>
            <h2 className="font-display text-5xl md:text-7xl tracking-tighter leading-none mb-8">
              LADIES <span className="text-brand-neon italic">EXCLUSIVE</span> STUDIO
            </h2>
            <p className="text-gray-400 text-lg mb-10 leading-relaxed">
              We provide a safe, private, and motivating environment specifically designed for our female members. Train with confidence in our state-of-the-art facility.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-neon/10 rounded-xl text-brand-neon">
                  <Clock size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Exclusive Hours</h4>
                  <p className="text-gray-400">10:00 AM – 05:00 PM (Monday - Saturday)</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="p-3 bg-brand-neon/10 rounded-xl text-brand-neon">
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-xl mb-1">Privacy Guaranteed</h4>
                  <p className="text-gray-400">Restricted access and professional female trainers available.</p>
                </div>
              </div>
            </div>

            <button className="mt-12 bg-white text-black px-10 py-4 rounded-full font-bold text-sm uppercase tracking-tighter hover:bg-brand-neon transition-colors">
              VIEW LADIES PACKAGES
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border border-white/5">
              <img 
                src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?auto=format&fit=crop&q=80&w=1000" 
                alt="Ladies training" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-black/80 to-transparent" />
              
              <div className="absolute bottom-8 left-8 right-8 bg-black/40 backdrop-blur-xl border border-white/10 p-6 rounded-2xl">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-brand-neon font-bold uppercase tracking-widest mb-1">NOW HIRING</p>
                    <p className="font-display text-2xl">LADIES TRAINERS</p>
                  </div>
                  <button className="bg-brand-neon text-black p-2 rounded-full">
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Background elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-neon/20 rounded-full blur-[80px]" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-neon/20 rounded-full blur-[80px]" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
