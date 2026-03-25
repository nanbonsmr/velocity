import { motion } from 'motion/react';
import { CATEGORIES } from '../constants';
import * as Icons from 'lucide-react';

export default function Categories() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-16 text-center">SHOP BY <span className="text-neon-blue">STYLE</span></h2>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {CATEGORIES.map((cat, index) => {
            // @ts-ignore
            const Icon = Icons[cat.icon];
            
            return (
              <motion.div
                key={cat.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer"
              >
                {/* Background Image */}
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end items-center text-center">
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center mb-4 group-hover:bg-neon-blue group-hover:text-black transition-all duration-300 group-hover:-translate-y-2">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-2xl font-bold tracking-tight mb-2">{cat.name}</h3>
                  <div className="text-xs font-bold uppercase tracking-[0.2em] text-white/40 group-hover:text-neon-blue transition-colors">View All</div>
                </div>
                
                {/* Border Effect */}
                <div className="absolute inset-0 border-2 border-transparent group-hover:border-neon-blue/30 rounded-[2rem] transition-colors pointer-events-none" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
