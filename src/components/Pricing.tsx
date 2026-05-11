import { motion } from 'motion/react';
import { Check, Shield } from 'lucide-react';
import { cn } from '../lib/utils';

const plans = [
  {
    name: 'Student Special',
    target: 'Under 22 with valid ID',
    price: '8,000',
    frequency: 'Registration Inc.',
    features: ['All Gym Access', 'Standard Timing', 'Locker Facility', 'Free WiFi'],
    cta: 'JOIN AS STUDENT',
    popular: false,
  },
  {
    name: 'Monthly Basic',
    target: 'Flexibility & All Access',
    price: '6,000',
    frequency: '+ Registration',
    features: ['Unlimited Access', 'Free Consultation', 'Sauna Access', 'Sauna Access', 'Ladies Studio Access'],
    cta: 'START MONTHLY',
    popular: true,
  },
  {
    name: 'VIP Quarterly',
    target: 'Committed Junkies',
    price: '22,000',
    frequency: 'Zero Registration',
    features: ['Zero Sign-up Fee', '1 Personal Training', 'Guest Pass (1/mo)', 'Priority Support' , 'Nutrition Plan'],
    cta: 'GET VIP ACCESS',
    popular: false,
  },
  {
    name: 'Ladies Power',
    target: '10 AM – 5 PM Access',
    price: '5,500',
    frequency: 'per month',
    features: ['Safe Private Area', 'Female Trainers', 'Shower & Steam', 'Yoga Classes' , 'Group Sessions'],
    cta: 'LADIES ACCESS',
    popular: false,
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-24 bg-brand-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 relative">
        <div className="text-center mb-20">
          <h2 className="font-display text-5xl md:text-8xl tracking-tighter leading-none mb-6">
            CHOOSE YOUR <span className="text-brand-neon">WAR</span> PLAN
          </h2>
          <p className="text-gray-400 text-lg uppercase tracking-widest font-bold">
            Transparent Pricing. No Hidden Contracts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {plans.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={cn(
                "relative p-8 border border-white/10 flex flex-col gap-6",
                p.popular ? "bg-brand-neon text-black border-brand-neon" : "bg-white/5"
              )}
            >
              <div className="flex flex-col gap-1">
                <h3 className="font-black uppercase tracking-tighter text-xl italic">{p.name}</h3>
                <span className={cn("text-[9px] font-bold uppercase tracking-widest", p.popular ? "text-black/60" : "text-gray-500")}>
                  {p.target}
                </span>
              </div>

              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-black leading-none italic">{p.price}</span>
                <span className="text-xs font-bold uppercase tracking-tighter opacity-70">PKR</span>
              </div>

              <div className="space-y-3 flex-grow">
                {p.features.map((f, fidx) => (
                  <div key={fidx} className="flex items-center gap-3 border-b border-black/5 last:border-none pb-1">
                    <span className={cn("text-[10px] font-bold uppercase tracking-tighter", p.popular ? "text-black" : "text-gray-400")}>
                      {f}
                    </span>
                  </div>
                ))}
              </div>

              <button className={cn(
                "w-full py-5 text-[11px] font-black uppercase tracking-widest italic transition-all",
                p.popular ? "bg-black text-white" : "bg-brand-neon text-black"
              )}>
                {p.cta}
              </button>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/5 rounded-full border border-white/10 text-gray-400 text-sm">
            <Shield size={18} className="text-brand-neon" />
            <span>Secure payment via EasyPaisa, JazzCash, or Cards</span>
          </div>
        </div>
      </div>
    </section>
  );
}
