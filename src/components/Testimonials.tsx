import { motion } from 'motion/react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">WHAT THEY <span className="text-white/20">SAY</span></h2>
          <p className="text-white/50">Trusted by athletes and creators worldwide.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-10 rounded-[2.5rem] relative group hover:bg-white/5 transition-colors"
            >
              <Quote className="absolute top-8 right-8 text-neon-blue/20 group-hover:text-neon-blue/40 transition-colors" size={40} />
              
              <p className="text-lg text-white/80 leading-relaxed mb-8 italic">
                "{t.content}"
              </p>
              
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border-2 border-neon-blue/30"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-bold">{t.name}</div>
                  <div className="text-xs text-white/40 uppercase tracking-widest font-bold">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
