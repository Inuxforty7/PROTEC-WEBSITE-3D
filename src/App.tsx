/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Scene } from './components/Scene';
import { Laptop, ShieldCheck, Phone } from 'lucide-react';

export default function App() {
  return (
    <main className="relative w-full h-screen overflow-hidden bg-black">
      {/* Fixed Navbar Outside Canvas */}
      <nav className="fixed top-0 left-0 w-full z-50 p-4 md:p-6 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl px-6 py-4 shadow-2xl pointer-events-auto">
          <div className="flex items-center gap-3">
            <div className="relative flex items-center justify-center w-11 h-11 bg-gradient-to-br from-[#0055FF] to-blue-600 rounded-xl text-white shadow-lg shadow-blue-500/20">
              <Laptop className="w-6 h-6 absolute" />
              <ShieldCheck className="w-4 h-4 absolute -bottom-1 -right-1 text-[#00FF7F] bg-black rounded-full" />
            </div>
            <span className="text-xl font-bold tracking-tight text-white">ProtecComputer</span>
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

