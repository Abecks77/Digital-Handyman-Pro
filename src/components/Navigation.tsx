import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Features', path: '/features' },
    { name: 'Service Areas', path: '/service-areas' },
    { name: 'About Ascension', path: '/about' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-5xl">
      <div className="bg-zinc-950/40 backdrop-blur-md border border-zinc-800/50 rounded-full px-4 py-2.5 flex items-center justify-between shadow-2xl shadow-purple-500/10 group transition-all duration-500 hover:border-zinc-700/50 hover:bg-zinc-950/60">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-3 pl-2">
            <Link 
              to="/"
              onClick={() => { window.scrollTo({ top: 0, behavior: 'smooth' }); setIsMobileMenuOpen(false); }}
              className="hover:opacity-80 transition-opacity cursor-pointer"
            >
              <img 
                src="https://lh3.googleusercontent.com/d/1fiqEiIUyp52Zo22koroPSYFZEne_tCjm" 
                alt="Ascension Agents Logo" 
                className="h-8 w-auto object-contain rounded-md"
                referrerPolicy="no-referrer"
              />
            </Link>
            <div className="h-4 w-[1px] bg-zinc-800 hidden sm:block"></div>
            <div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-full bg-zinc-900/50 border border-zinc-800/50">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-[10px] font-bold text-zinc-400 uppercase tracking-widest">GHOST: ACTIVE</span>
            </div>
          </div>
        </div>

        <div className="hidden md:flex items-center gap-1 bg-zinc-900/30 rounded-full p-1 border border-zinc-800/30">
          {links.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} 
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all ${
                isActive(link.path)
                  ? 'bg-zinc-800/50 text-white'
                  : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a 
            href="https://api.ascensionagents.io/payment-link/69c4b6c5fb727d9c905d2836"
            target="_blank"
            rel="noopener noreferrer"
            className="relative group/btn overflow-hidden rounded-full p-[1px] hidden md:block"
          >
            <span className="absolute inset-0 bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)] rounded-full opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
            <div className="relative bg-zinc-950 px-5 py-2 rounded-full flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:bg-transparent">
              <span className="font-bold text-white text-xs tracking-wide">Get Started</span>
              <ArrowRight className="w-3 h-3 text-white group-hover/btn:translate-x-1 transition-transform" />
            </div>
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-full bg-zinc-900/50 border border-zinc-800 text-zinc-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-purple-500/50"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
           <motion.div
              initial={{ opacity: 0, y: -10, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 right-0 mt-4 p-4 rounded-2xl bg-zinc-950/95 backdrop-blur-xl border border-zinc-800 shadow-2xl md:hidden flex flex-col gap-2 origin-top"
           >
              {links.map((link) => (
                 <Link
                    key={link.name}
                    to={link.path}
                    onClick={() => {
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      setIsMobileMenuOpen(false);
                    }}
                    className={`px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                      isActive(link.path) 
                        ? 'bg-zinc-800/80 text-white' 
                        : 'text-zinc-400 hover:text-white hover:bg-zinc-800/50'
                    }`}
                 >
                   {link.name}
                 </Link>
              ))}

              <div className="h-px w-full bg-zinc-800/60 my-2"></div>

              <a 
                href="https://api.ascensionagents.io/payment-link/69c4b6c5fb727d9c905d2836"
                target="_blank"
                rel="noopener noreferrer"
                className="relative group/btn overflow-hidden rounded-xl p-[1px] block w-full mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span className="absolute inset-0 bg-[linear-gradient(to_right,#eab308,#ff6b00,#a855f7,#0055ff)] rounded-xl opacity-70 group-hover/btn:opacity-100 transition-opacity duration-300"></span>
                <div className="relative bg-zinc-950 px-5 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 group-hover/btn:bg-transparent">
                  <span className="font-bold text-white text-sm tracking-wide">Get Started Now</span>
                  <ArrowRight className="w-4 h-4 text-white group-hover/btn:translate-x-1 transition-transform" />
                </div>
              </a>
           </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
