import { motion } from 'motion/react';
import { Camera, Instagram, Play } from 'lucide-react';

const feed = [
  { img: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=400', type: 'image' },
  { img: 'https://images.unsplash.com/photo-1593079831268-3381b0db4a77?auto=format&fit=crop&q=80&w=400', type: 'video' },
  { img: 'https://images.unsplash.com/photo-1434596922112-19c563067271?auto=format&fit=crop&q=80&w=400', type: 'image' },
  { img: 'https://images.unsplash.com/photo-1526506118085-60ce8714f8c5?auto=format&fit=crop&q=80&w=400', type: 'image' },
  { img: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=400', type: 'video' },
  { img: 'https://images.unsplash.com/photo-1574673139732-1fd3deff9c7b?auto=format&fit=crop&q=80&w=400', type: 'image' },
];

export default function SocialFeed() {
  return (
    <section className="py-24 bg-brand-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mt-auto bg-brand-neon p-6 text-black">
          <span className="font-black uppercase italic text-sm tracking-tighter">@TitanFitness_Gulshan</span>
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-red-600 animate-pulse"></div>
            <span className="text-xs font-black uppercase tracking-widest">Live Energy Grid</span>
            <div className="hidden lg:flex gap-1 ml-4">
              <div className="h-[2px] w-8 bg-black opacity-30"></div>
              <div className="h-[2px] w-8 bg-black"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2">
          {feed.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="relative aspect-square overflow-hidden group border border-white/5"
            >
              <img 
                src={item.img} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                alt="Gym motivation"
              />
              <div className="absolute inset-0 bg-brand-neon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                {item.type === 'video' ? <Play fill="black" size={32} /> : <Camera size={32} color="black" />}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
