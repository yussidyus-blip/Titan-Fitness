import { MapPin, Phone, Mail, Instagram, Facebook, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="bg-brand-black pt-24 pb-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8">
            <div>
              <span className="font-display text-4xl tracking-tighter text-brand-neon">TITAN</span>
              <span className="font-display text-4xl tracking-tighter ml-1">FITNESS</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Elevating the standard of fitness in Gulshan-e-Iqbal. Join the elite community that breathes power and performance.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-neon hover:text-black transition-all">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-3 bg-white/5 rounded-xl hover:bg-brand-neon hover:text-black transition-all">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-display text-xl mb-8 tracking-widest uppercase text-brand-neon">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Ladies Exclusive', 'Facilities', 'Pricing', 'Trainer Login'].map((item) => (
                <li key={item}>
                  <a href="#" className="text-gray-400 hover:text-white flex items-center group">
                    <span className="group-hover:translate-x-2 transition-transform">{item}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-8 tracking-widest uppercase text-brand-neon">Location</h4>
            <ul className="space-y-6">
              <li className="flex gap-4">
                <MapPin className="text-brand-neon flex-shrink-0" size={20} />
                <span className="text-gray-400">Main Gulshan-e-Iqbal, Block 13-C, Near National Stadium Road, Karachi.</span>
              </li>
              <li className="flex gap-4">
                <Phone className="text-brand-neon flex-shrink-0" size={20} />
                <span className="text-gray-400">+92 321 0000000</span>
              </li>
              <li className="flex gap-4">
                <Mail className="text-brand-neon flex-shrink-0" size={20} />
                <span className="text-gray-400">info@titanfitness.pk</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display text-xl mb-8 tracking-widest uppercase text-brand-neon">Members App</h4>
            <div className="p-6 bg-brand-charcoal rounded-3xl border border-white/5 space-y-4">
              <p className="text-xs text-gray-400 font-bold uppercase tracking-widest">Digital Waivers & Payments</p>
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Digital Sign-up</span>
                <ArrowUpRight size={18} className="text-brand-neon" />
              </div>
              <div className="h-px bg-white/10" />
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Book a Trainer</span>
                <ArrowUpRight size={18} className="text-brand-neon" />
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center pt-12 border-t border-white/5">
          <p className="text-xs text-gray-500 uppercase tracking-widest font-bold">
            © 2026 TITAN FITNESS HUB KARACHI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex md:justify-end gap-8 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Developed in Karachi</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
