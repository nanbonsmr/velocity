import { motion } from 'motion/react';
import { SHOES } from '../constants';
import { Heart, ShoppingBag } from 'lucide-react';

export default function NewArrivals() {
  const trending = SHOES.filter(s => s.isTrending || s.isNew);

  return (
    <section className="py-24 px-6 bg-dark-surface">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tight">TRENDING <span className="text-white/20">NOW</span></h2>
          <div className="flex gap-2">
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">←</button>
            <button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-colors">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12">
          {trending.map((shoe, index) => (
            <motion.div
              key={shoe.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-6 bg-white/5">
                <img
                  src={shoe.image}
                  alt={shoe.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                
                {/* Quick Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-3">
                  <button className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-neon-blue transition-colors translate-y-4 group-hover:translate-y-0 duration-300">
                    <ShoppingBag size={20} />
                  </button>
                  <button className="w-12 h-12 rounded-full glass text-white flex items-center justify-center hover:bg-white/20 transition-colors translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    <Heart size={20} />
                  </button>
                </div>

                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {shoe.isNew && <span className="bg-neon-blue text-black text-[10px] font-black px-2 py-1 rounded">NEW</span>}
                  {shoe.isTrending && <span className="bg-purple-500 text-white text-[10px] font-black px-2 py-1 rounded">HOT</span>}
                </div>
              </div>

              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-neon-blue transition-colors">{shoe.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-white/40 text-sm">{shoe.category}</span>
                  <span className="font-display font-bold text-neon-blue">${shoe.price}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
