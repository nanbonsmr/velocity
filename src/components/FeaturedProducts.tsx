import { motion } from 'motion/react';
import { SHOES } from '../constants';
import { ArrowUpRight, Heart } from 'lucide-react';

export default function FeaturedProducts() {
  const featured = SHOES.slice(0, 3);

  return (
    <section className="py-24 px-6 bg-dark-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4">FEATURED <span className="text-white/20">DROPS</span></h2>
            <p className="text-white/50 max-w-md">Our most sought-after releases, curated for those who demand excellence in every step.</p>
          </div>
          <button className="text-neon-blue font-bold flex items-center gap-2 hover:gap-4 transition-all uppercase tracking-widest text-sm">
            Explore All <ArrowUpRight size={18} />
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group relative"
            >
              <div className="glass-dark rounded-[2.5rem] p-8 h-full transition-all duration-500 group-hover:bg-white/5 group-hover:border-white/10 group-hover:-translate-y-2 overflow-hidden">
                {/* Badge */}
                <div className="absolute top-6 left-6 z-10">
                  {shoe.isNew && (
                    <span className="bg-neon-blue text-black text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter">New</span>
                  )}
                </div>
                
                {/* Like Button */}
                <button className="absolute top-6 right-6 z-10 w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-white/10 transition-colors">
                  <Heart size={18} />
                </button>

                {/* Image Container */}
                <div className="relative aspect-square mb-8 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20 rounded-full scale-75 blur-3xl group-hover:scale-100 transition-transform duration-700" />
                  <motion.img
                    whileHover={{ rotate: -15, scale: 1.15 }}
                    src={shoe.image}
                    alt={shoe.name}
                    className="w-full relative z-10 drop-shadow-2xl transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Info */}
                <div className="relative z-10">
                  <div className="text-white/40 text-xs font-bold uppercase tracking-widest mb-1">{shoe.category}</div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-neon-blue transition-colors">{shoe.name}</h3>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-display font-bold">${shoe.price}</span>
                    <button className="w-12 h-12 rounded-2xl bg-white text-black flex items-center justify-center hover:bg-neon-blue transition-colors">
                      <ArrowUpRight size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
