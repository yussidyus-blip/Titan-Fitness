import { motion } from 'motion/react';
import { Dumbbell, HeartPulse, Bath, UserCheck, Flame, Coffee } from 'lucide-react';

const facilities = [
  {
    title: 'Imported Cardio Line',
    desc: 'High-tech Life Fitness treadmills, ellipticals, and rowers with full LED connectivity.',
    icon: <HeartPulse className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Heavy Weight Section',
    desc: 'Olympic racks, bumper plates, and a massive range of dumbbells up to 100 lbs.',
    icon: <Dumbbell className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Steam & Sauna',
    desc: 'The ultimate recovery zone to detox and relax after a high-intensity session.',
    icon: <Bath className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1512433012647-50c95552342d?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Luxury Locker Rooms',
    desc: 'Secure digital lockers, premium toiletries, and spacious changing areas.',
    icon: <UserCheck className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1520263673531-15967265bc6f?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'CrossFit & MMA Zone',
    desc: 'Dedicated turf area with battle ropes, sleds, and heavy bags for functional grit.',
    icon: <Flame className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1543975200-8e313fb04fc7?auto=format&fit=crop&q=80&w=800',
  },
  {
    title: 'Supplement Bar',
    desc: 'Pre-workout shots, protein shakes, and healthy snacks to fuel your gains.',
    icon: <Coffee className="w-8 h-8" />,
    image: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=800',
  },
];

export default function Facilities() {
  return (
    <section id="facilities" className="py-24 bg-brand-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none mb-6">
            WORLD <span className="text-brand-neon">CLASS</span> EQUIPMENT
          </h2>
          <p className="max-w-2xl mx-auto text-gray-400 text-lg">
            Every square inch of Titan Fitness is engineered for maximum performance. No shortcuts, just pure power.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {facilities.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative bg-white/5 border border-white/10 p-8 flex flex-col gap-4"
            >
              <div className="flex justify-between items-start">
                <span className="text-xl text-brand-neon font-black italic tracking-tighter">0{idx + 1}</span>
                <div className="text-gray-500 group-hover:text-brand-neon transition-colors">
                  {f.icon}
                </div>
              </div>
              <div>
                <h3 className="font-display text-2xl uppercase font-black mb-2 leading-none">{f.title}</h3>
                <p className="text-[10px] text-gray-500 uppercase tracking-widest leading-relaxed">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
