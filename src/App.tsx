/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scene } from './components/Scene';
import { Phone } from 'lucide-react';

export default function App() {
  return (
    <main className="relative w-full min-h-screen bg-black">
      {/* Fixed Navbar Outside Canvas */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-3">
            <img 
              src="https://res.cloudinary.com/dwlfwnbt0/image/upload/q_auto/f_auto/v1775056712/logo_protec_jef7hg.png" 
              alt="ProtecComputer Logo" 
              className="h-10 w-auto object-contain"
              referrerPolicy="no-referrer"
            />
            <span className="text-xl font-bold tracking-tight text-white hidden sm:block">ProtecComputer</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-300">
            <a href="#servicos" className="hover:text-[#00FF7F] transition-colors">Serviços</a>
            <a href="#pecas" className="hover:text-[#00FF7F] transition-colors">Peças</a>
            <a href="#localizacao" className="hover:text-[#00FF7F] transition-colors">Localização</a>
          </div>
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
      </nav>

      <Scene />
    </main>
  );
}

