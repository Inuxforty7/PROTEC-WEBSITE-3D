/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scene } from './components/Scene';
import { Phone, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="relative w-full min-h-screen bg-black overflow-x-hidden touch-manipulation">
      {/* Fixed Navbar Outside Canvas */}
      <nav className="fixed top-0 left-0 w-full z-50 p-3 md:p-6 pointer-events-none">
        <motion.div 
          initial={false}
          animate={{
            scale: scrolled ? 0.92 : 1,
            backgroundColor: scrolled ? 'rgba(0, 0, 0, 0.4)' : 'rgba(255, 255, 255, 0.05)',
            backdropFilter: scrolled ? 'blur(12px)' : 'blur(20px)',
            borderColor: scrolled ? 'rgba(255, 255, 255, 0.15)' : 'rgba(255, 255, 255, 0.25)',
            paddingTop: scrolled ? '0.4rem' : '0.8rem',
            paddingBottom: scrolled ? '0.4rem' : '0.8rem',
            y: scrolled ? 4 : 0
          }}
          transition={{
            type: 'spring',
            stiffness: 400,
            damping: 30,
            mass: 0.8
          }}
          className="max-w-7xl mx-auto flex justify-between items-center border rounded-[2rem] px-3 md:px-6 shadow-2xl pointer-events-auto will-change-[transform,background-color,backdrop-filter,border-color,padding-top,padding-bottom]"
        >
          <div className="flex items-center gap-4">
            <motion.div
              animate={{
                backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0)',
                padding: scrolled ? '8px' : '0px',
                borderRadius: '16px',
                border: scrolled ? '1px solid rgba(255, 255, 255, 1)' : '1px solid rgba(255, 255, 255, 0)',
                boxShadow: scrolled ? '0 10px 25px -5px rgba(0, 0, 0, 0.3)' : '0 0px 0px rgba(0, 0, 0, 0)',
              }}
              transition={{ duration: 0.3 }}
              className="flex items-center justify-center will-change-[background-color,padding,border-radius,border,box-shadow]"
            >
              <motion.img 
                animate={{
                  scale: scrolled ? 1.15 : 1,
                }}
                transition={{
                  type: 'spring',
                  stiffness: 300,
                  damping: 20
                }}
                src="https://res.cloudinary.com/dwlfwnbt0/image/upload/q_auto/f_auto/v1775056712/logo_protec_jef7hg.png" 
                alt="PROTEC COMPUTER Logo" 
                className="h-14 md:h-20 w-auto object-contain origin-left will-change-transform"
                referrerPolicy="no-referrer"
              />
            </motion.div>
            <motion.div 
              animate={{
                opacity: scrolled ? 0 : 1,
                x: scrolled ? -20 : 0,
                width: scrolled ? 0 : 'auto',
                marginRight: scrolled ? -16 : 0
              }}
              transition={{
                duration: 0.3,
                ease: "easeInOut"
              }}
              className="flex flex-col overflow-hidden whitespace-nowrap will-change-[opacity,transform,width,margin-right]"
            >
              <span className="text-base md:text-lg font-black tracking-tighter text-white leading-none font-display uppercase italic pr-2">
                <span className="text-[#00FF7F]">PROTEC</span>
                <span className="text-[#0055FF] ml-1">COMPUTER</span>
              </span>
              <span className="text-[7px] md:text-[8px] text-gray-400 font-bold tracking-[0.15em] uppercase mt-1 hidden sm:block">
                Consertando o presente, garantindo o futuro.
              </span>
            </motion.div>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#servicos" className="hover:text-[#00FF7F] transition-colors">Serviços</a>
            <a href="#pecas" className="hover:text-[#00FF7F] transition-colors">Peças</a>
            <a href="#localizacao" className="hover:text-[#00FF7F] transition-colors">Localização</a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://chat.whatsapp.com/your-group-id" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center gap-2 bg-white/10 text-white px-5 py-2.5 rounded-full font-bold hover:bg-white/20 transition-all hover:scale-105 border border-white/10 backdrop-blur-md"
            >
              <Users className="w-4 h-4" />
              <span>Ver Catálogo</span>
            </a>
            <a 
              href="https://wa.me/258846254794" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#00FF7F] text-gray-900 px-5 py-2.5 rounded-full font-bold hover:bg-[#00e673] transition-all hover:scale-105 shadow-lg shadow-[#00FF7F]/20"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp 24h</span>
            </a>
          </div>
        </motion.div>
      </nav>

      <Scene />
    </main>
  );
}

