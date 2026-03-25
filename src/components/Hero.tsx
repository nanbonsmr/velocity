import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Zap } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Elements */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-neon-blue/20 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-600/20 rounded-full blur-[120px] animate-pulse delay-1000" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neon-blue text-xs font-bold tracking-widest uppercase mb-6">
            <Zap size={14} fill="currentColor" />
            New Season Arrival
          </div>
          <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
            STEP INTO <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-purple-400">
              THE FUTURE
            </span>
          </h1>
          <p className="text-lg text-white/60 max-w-md mb-10 leading-relaxed">
            Experience the next generation of footwear. Engineered with aerospace-grade materials for unparalleled speed and comfort.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-4 bg-neon-blue text-black font-bold rounded-full hover:scale-105 transition-transform flex items-center gap-2 group">
              SHOP NOW
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 glass text-white font-bold rounded-full hover:bg-white/10 transition-colors">
              VIEW COLLECTION
            </button>
          </div>
          
          <div className="mt-16 flex items-center gap-8">
            <div>
              <div className="text-3xl font-bold">2.4k+</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">Sold this week</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div>
              <div className="text-3xl font-bold">4.9/5</div>
              <div className="text-xs text-white/40 uppercase tracking-widest">User Rating</div>
            </div>
          </div>
        </motion.div>

        {/* 3D Sneaker Simulation */}
        <motion.div
          style={{ y: y1 }}
          className="relative flex justify-center items-center"
        >
          {/* Floating Rings */}
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[120%] aspect-square border border-white/5 rounded-full"
          />
          <motion.div 
            animate={{ rotate: -360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            className="absolute w-[80%] aspect-square border border-white/10 rounded-full"
          />

          {/* Main Shoe Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -20 }}
            animate={{ opacity: 1, scale: 1, rotate: -15 }}
            transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
            whileHover={{ rotate: -5, scale: 1.05 }}
            style={{ rotate }}
            className="relative z-20 cursor-pointer"
          >
            <img
              src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&q=80&w=1000"
              alt="Premium Sneaker"
              className="w-full max-w-lg drop-shadow-[0_35px_35px_rgba(0,242,255,0.3)]"
              referrerPolicy="no-referrer"
            />
            
            {/* Dynamic Shadow */}
            <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-10 bg-black/40 blur-2xl rounded-[100%]" />
          </motion.div>

          {/* Floating Labels */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-0 right-0 glass p-4 rounded-2xl z-30 hidden md:block"
          >
            <div className="text-[10px] text-neon-blue font-bold uppercase tracking-widest mb-1">Tech Spec</div>
            <div className="text-sm font-bold">Carbon Fiber Plate</div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-20 -left-10 glass p-4 rounded-2xl z-30 hidden md:block"
          >
            <div className="text-[10px] text-purple-400 font-bold uppercase tracking-widest mb-1">Cushioning</div>
            <div className="text-sm font-bold">Nitro Foam Max</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
