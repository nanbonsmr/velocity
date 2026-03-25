import { useState, useEffect } from 'react';
import { ShoppingCart, Menu, X, Search, User } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../lib/utils';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Shop', href: '#' },
    { name: 'Collections', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 py-4',
        isScrolled ? 'py-3' : 'py-6'
      )}
    >
      <div className={cn(
        'max-w-7xl mx-auto flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500',
        isScrolled ? 'glass-dark shadow-2xl' : 'bg-transparent'
      )}>
        {/* Logo */}
        <a href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-neon-blue rounded-lg flex items-center justify-center rotate-12 group-hover:rotate-0 transition-transform duration-300">
            <span className="text-black font-black text-xl">V</span>
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">VELOCITY</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-neon-blue transition-colors relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-neon-blue transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* Icons */}
        <div className="flex items-center gap-4">
          <button className="p-2 hover:text-neon-blue transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button className="p-2 hover:text-neon-blue transition-colors hidden sm:block">
            <User size={20} />
          </button>
          <button className="p-2 relative hover:text-neon-blue transition-colors">
            <ShoppingCart size={20} />
            <span className="absolute top-0 right-0 w-4 h-4 bg-neon-blue text-black text-[10px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>
          <button 
            className="md:hidden p-2 hover:text-neon-blue transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-6 right-6 mt-4 glass-dark rounded-3xl p-8 md:hidden shadow-2xl"
          >
            <div className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium hover:text-neon-blue transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <hr className="border-white/10" />
              <div className="flex justify-around">
                <Search size={24} />
                <User size={24} />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
