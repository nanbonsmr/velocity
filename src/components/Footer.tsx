import { Instagram, Twitter, Facebook, Youtube, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-dark-surface pt-24 pb-12 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-neon-blue rounded-lg flex items-center justify-center rotate-12">
                <span className="text-black font-black text-xl">V</span>
              </div>
              <span className="text-xl font-display font-bold tracking-tighter">VELOCITY</span>
            </div>
            <p className="text-white/40 mb-8 leading-relaxed">
              Redefining the boundaries of performance and style. Join the movement.
            </p>
            <div className="flex gap-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full glass flex items-center justify-center hover:bg-neon-blue hover:text-black transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-neon-blue">Shop</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Running</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Casual</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-neon-blue">Support</h4>
            <ul className="space-y-4 text-white/60">
              <li><a href="#" className="hover:text-white transition-colors">Shipping Policy</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Returns & Exchanges</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold mb-6 uppercase tracking-widest text-sm text-neon-blue">Newsletter</h4>
            <p className="text-white/40 mb-6 text-sm">Get the latest drops and exclusive offers.</p>
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-white/5 border border-white/10 rounded-full py-4 px-6 focus:outline-none focus:border-neon-blue transition-colors"
              />
              <button className="absolute right-2 top-2 w-10 h-10 bg-neon-blue text-black rounded-full flex items-center justify-center hover:scale-105 transition-transform">
                <Send size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/20 font-bold uppercase tracking-widest">
          <div>© 2026 VELOCITY FOOTWEAR. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
