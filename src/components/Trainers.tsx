import { motion } from 'motion/react';
import { Award, Zap } from 'lucide-react';

const trainers = [
  {
    name: 'Asad Khan',
    specialty: 'Bodybuilding & Aesthetics',
    cert: 'REPS Level 3 Certified',
    image: 'https://images.unsplash.com/photo-1567013127542-490d757e51fe?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Sarah Ahmed',
    specialty: 'Fat Loss & HIIT (Ladies)',
    cert: 'NASM Specialist',
    image: 'https://images.unsplash.com/photo-1548690312-e3b507d17a4d?auto=format&fit=crop&q=80&w=400',
  },
  {
    name: 'Zaryab Ali',
    specialty: 'CrossFit & MMA Conditioning',
    cert: 'CrossFit L2 Coach',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400',
  },
];

export default function Trainers() {
  return (
    <section className="py-24 bg-brand-charcoal">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-4">
          <div>
            <span className="text-brand-neon font-black tracking-[0.2em] text-xs uppercase">Elite Squad</span>
            <h2 className="font-display text-6xl tracking-tighter leading-none mt-2">
              MEET YOUR <span className="italic">COACHES</span>
            </h2>
          </div>
          <p className="max-w-xs text-gray-400 text-sm">Our trainers are certified professionals dedicated to pushing your limits safely.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trainers.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[3/4] rounded-3xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-black via-transparent to-transparent opacity-60" />
                
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-brand-neon/90 backdrop-blur-md p-4 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center gap-2 mb-1">
                      <Award size={14} className="text-black" />
                      <span className="text-[10px] font-black text-black uppercase tracking-widest">{t.cert}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <h3 className="font-display text-3xl mb-1">{t.name}</h3>
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Zap size={14} className="text-brand-neon" />
                <span>{t.specialty}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
