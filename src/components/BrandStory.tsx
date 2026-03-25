import { motion } from 'motion/react';

export default function BrandStory() {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Cinematic Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&q=80&w=2000"
          alt="Brand Background"
          className="w-full h-full object-cover opacity-30 grayscale"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark-bg via-transparent to-dark-bg" />
        <div className="absolute inset-0 bg-gradient-to-r from-dark-bg via-transparent to-dark-bg" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-none mb-8">
              BEYOND THE <br />
              <span className="text-neon-blue">FINISH LINE</span>
            </h2>
            <p className="text-xl text-white/60 leading-relaxed mb-10">
              Velocity wasn't born in a boardroom. It was born on the asphalt, in the rain, and during those late-night runs where the only thing that matters is the next step. We combine cutting-edge technology with street-ready aesthetics to redefine what's possible.
            </p>
            <div className="grid grid-cols-2 gap-12">
              <div>
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Patented Tech</div>
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-xs text-white/40 uppercase tracking-widest font-bold">Recycled Mesh</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Floating 3D Elements Simulation */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 10, 0]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 right-1/4 w-32 h-32 glass rounded-3xl rotate-12 hidden lg:block opacity-20"
      />
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -10, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        className="absolute bottom-1/4 right-1/3 w-20 h-20 bg-neon-blue/10 rounded-full blur-xl hidden lg:block"
      />
    </section>
  );
}
