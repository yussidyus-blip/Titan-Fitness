import { motion } from 'motion/react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background with Overlays */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=2070" 
          alt="Gym background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-brand-black/60 to-transparent" />
        <div className="absolute inset-0 bg-brand-neon/5 mix-blend-overlay" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-left"
        >
          <div className="flex items-center gap-4 mb-4">
            <span className="h-[1px] w-12 bg-brand-neon"></span>
            <span className="text-brand-neon text-sm font-bold uppercase tracking-[0.2em]">
              Karachi's 2026 Flagship Hub
            </span>
          </div>
          
          <h1 className="font-display text-[80px] md:text-[140px] leading-[0.85] font-black uppercase italic tracking-tighter mb-8 max-w-4xl text-glow">
            Stronger<br/>Every Day<br/><span className="text-outline">In Gulshan</span>
          </h1>
          
          <p className="max-w-md text-gray-400 text-xs tracking-widest uppercase leading-loose mb-12">
            Precision training in the heart of Gulshan-e-Iqbal. Experience the urban energy of Elite Fitness with world-class equipment and recovery zones.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-6">
            <button className="bg-brand-neon text-black px-12 py-6 text-xl font-black uppercase italic tracking-widest hover:scale-105 transition-transform active:scale-95 w-full sm:w-auto">
              Claim Free 3-Day Pass
            </button>
            
            <div className="bg-white/5 border-l-4 border-brand-neon p-6 flex flex-col gap-1 backdrop-blur-md">
              <span className="text-brand-neon text-[10px] font-black uppercase">Ladies Exclusive</span>
              <span className="text-white font-bold text-sm uppercase">10:00 AM — 5:00 PM</span>
              <span className="text-gray-500 text-[10px] uppercase tracking-tighter">Secure & Private Environment</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Stats Floating */}
      <div className="absolute bottom-10 left-0 w-full hidden md:block">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-end border-t border-white/10 pt-8 opacity-50">
          <div className="flex gap-12">
            <div>
              <p className="font-display text-4xl leading-none">12,000+</p>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">SQ. FT. AREA</p>
            </div>
            <div>
              <p className="font-display text-4xl leading-none">50+</p>
              <p className="text-[10px] tracking-widest text-gray-400 uppercase">IMPORTED MACHINES</p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-[10px] tracking-widest text-gray-400 uppercase font-bold">EST. 2024</p>
            <p className="font-display text-xl leading-none text-brand-neon">GULSHAN'S ELITE HUB</p>
          </div>
        </div>
      </div>
    </section>
  );
}
