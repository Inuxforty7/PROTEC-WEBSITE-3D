import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { Shield, Wrench, Battery, Monitor, Keyboard, Phone, MapPin, Cpu, HardDrive, Zap, Users } from 'lucide-react';

export function PageContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"]
  });

  const barHeight = useTransform(scrollYProgress, [0.4, 0.6], ["0%", "100%"]);
  const barOpacity = useTransform(scrollYProgress, [0.4, 0.5], [0, 1]);
  const containerOpacity = useTransform(scrollYProgress, [0.35, 0.45], [0, 1]);
  const containerX = useTransform(scrollYProgress, [0.35, 0.45], [-30, 0]);

  return (
    <div className="w-full pointer-events-none">
      {/* Page 1: Hero */}
      <section ref={heroRef} className="relative min-h-screen flex flex-col justify-end px-4 md:px-20 max-w-7xl mx-auto pointer-events-auto pb-24 md:pb-32">
        
        <motion.div 
          className="max-w-4xl will-change-transform"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20, skewX: -2 }}
            animate={{ opacity: 1, y: 0, skewX: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl md:text-8xl font-black tracking-tighter text-white leading-[0.85] mb-8 font-display uppercase italic text-left drop-shadow-[0_4px_24px_rgba(0,0,0,0.9)]"
          >
            Assistência de <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FF7F] via-[#0055FF] to-[#00FF7F] bg-[length:200%_auto] animate-text-gradient">
              Computadores.
            </span>
          </motion.h1>
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-start mb-12 relative"
          >
            
            <p className="text-xl md:text-4xl font-normal text-white tracking-tight mb-3 drop-shadow-[0_4px_12px_rgba(0,0,0,0.9)]">
              Especialistas em montagem, reparação e venda.
            </p>
            
            <p className="text-base md:text-2xl text-white font-bold tracking-wide drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
              Consertando o presente, <span className="text-[#00FF7F]">garantindo o futuro.</span>
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <motion.a 
              href="#localizacao" 
              whileHover={{ scale: 1.05, y: -4 }}
              whileTap={{ scale: 0.98 }}
              className="group relative flex items-center justify-center gap-4 bg-[#00FF7F] text-gray-900 px-10 py-5 rounded-full font-black text-lg overflow-hidden transition-shadow duration-500 shadow-[0_0_20px_rgba(0,255,127,0.3)] hover:shadow-[0_0_40px_rgba(0,255,127,0.6)] will-change-transform"
            >
              {/* Premium Shimmer Effect */}
              <motion.div 
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent -skew-x-12 pointer-events-none"
              />
              
              {/* Dynamic Glow Layer */}
              <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-tr from-white/20 to-transparent pointer-events-none" />
              
              <span className="relative z-10">REPARAR AGORA</span>
              <motion.div
                animate={{ 
                  y: [0, -2, 0],
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity, 
                  ease: "easeInOut" 
                }}
                className="relative z-10"
              >
                <Zap className="w-6 h-6 group-hover:fill-current transition-colors" />
              </motion.div>
            </motion.a>
          </motion.div>
        </motion.div>
      </section>

      {/* Page 2: Services */}
      <section className="min-h-screen flex flex-col justify-center items-end px-4 md:px-20 max-w-7xl mx-auto pointer-events-auto py-16 md:py-32">
        <motion.div 
          initial={{ opacity: 0, x: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md text-right bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl will-change-transform"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 font-display uppercase italic">O que<br/><span className="text-[#00FF7F]">fazemos.</span></h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
            Diagnóstico preciso e soluções rápidas para hardware e software. Cuidamos da sua máquina com rigor.
          </p>
        </motion.div>
      </section>

      {/* Page 3: Expertise */}
      <section className="min-h-screen flex flex-col justify-center px-4 md:px-20 max-w-7xl mx-auto pointer-events-auto py-16 md:py-32">
        <motion.div 
          initial={{ opacity: 0, x: -30, scale: 0.98 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-md bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl will-change-transform"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 font-display uppercase italic">Performance<br/><span className="text-[#0055FF]">Máxima.</span></h2>
          <p className="text-base md:text-lg text-gray-300 leading-relaxed mb-8 font-medium">
            Upgrade de componentes e montagem personalizada para trabalho ou gaming de elite.
          </p>
          <div className="flex items-center gap-4 bg-black/40 backdrop-blur-xl p-4 rounded-2xl border border-white/10">
            <div className="p-2.5 bg-gradient-to-br from-[#0055FF] to-blue-600 rounded-xl text-white">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-white text-base">Hardware Expert</h3>
              <p className="text-xs text-gray-400 font-medium">Performance garantida</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Page 4: Parts Grid */}
      <section id="servicos" className="min-h-screen flex flex-col justify-center px-4 md:px-20 max-w-7xl mx-auto pointer-events-auto py-16 md:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl will-change-transform"
          >
            <h2 className="text-4xl md:text-6xl font-extrabold tracking-tighter text-white mb-4 font-display uppercase italic">Peças &<br/><span className="text-[#00FF7F]">Acessórios.</span></h2>
            <p className="text-base md:text-lg text-gray-300 leading-relaxed font-medium">
              Stock completo para todas as marcas e modelos.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-3 md:gap-4" id="pecas">
            {[
              { icon: Battery, title: 'BATERIAS' },
              { icon: Phone, title: 'CARREGADORES' },
              { icon: Monitor, title: "LCD'S" },
              { icon: Keyboard, title: 'TECLADOS' },
              { icon: Shield, title: "COVER'S" },
              { icon: Zap, title: 'FONTES' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/60 backdrop-blur-xl p-4 md:p-6 rounded-3xl border border-white/10 shadow-2xl hover:bg-black/80 active:scale-95 hover:-translate-y-1 transition-all duration-300 group will-change-transform"
              >
                <div className="p-2.5 bg-white/5 rounded-xl inline-block mb-3 group-hover:bg-[#0055FF]/20 transition-colors">
                  <item.icon className="w-5 h-5 text-[#00FF7F]" />
                </div>
                <h3 className="font-bold text-white text-sm md:text-base">{item.title}</h3>
              </motion.div>
            ))}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="col-span-2 bg-gradient-to-r from-[#0055FF]/20 to-[#00FF7F]/20 backdrop-blur-xl p-3 rounded-xl border border-white/10 text-center"
            >
              <span className="text-white font-bold text-xs tracking-widest italic">... e muito mais!</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Page 5: Contact */}
      <section id="localizacao" className="min-h-screen flex flex-col justify-center px-4 md:px-20 max-w-7xl mx-auto pointer-events-auto relative py-16 md:py-32">
        <motion.div 
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="bg-black/80 backdrop-blur-2xl rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-20 text-white overflow-hidden relative shadow-2xl border border-white/10 w-full will-change-transform"
        >
          <div className="absolute top-0 right-0 w-[20rem] h-[20rem] bg-[#0055FF] rounded-full mix-blend-screen filter blur-[80px] opacity-20 translate-x-1/3 -translate-y-1/3" />
          
          <div className="relative z-10 max-w-3xl mx-auto text-center">
            <h2 className="text-4xl md:text-7xl font-extrabold tracking-tighter mb-6 font-display uppercase italic">Venda & <span className="text-[#00FF7F]">Reparação.</span></h2>
            <p className="text-lg md:text-xl text-gray-300 mb-10 font-medium">
              Especialistas em Laptops e Computadores.<br className="hidden md:block" />
              Mercado Anexo do Zimpeto (Em frente ao Parque).
            </p>
            
              <div className="flex flex-wrap justify-center gap-4">
                <a 
                  href="https://wa.me/258846254794" 
                  className="flex items-center gap-2 bg-[#00FF7F] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00e673] active:scale-95 transition-all hover:scale-105 shadow-xl shadow-[#00FF7F]/20 will-change-transform"
                >
                  <Phone className="w-5 h-5" />
                  Contacto Direto
                </a>
                <a 
                  href="https://chat.whatsapp.com/your-group-id" 
                  className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 active:scale-95 transition-all hover:scale-105 border border-white/10 backdrop-blur-md will-change-transform"
                >
                  <Users className="w-5 h-5" />
                  Grupo (Catálogo)
                </a>
                <a 
                  href="https://maps.google.com/?q=Mercado+Anexo+do+Zimpeto+Maputo" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center gap-2 bg-white/5 text-gray-300 px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 active:scale-95 transition-all border border-white/5 will-change-transform"
                >
                <MapPin className="w-5 h-5" />
                Ver no Mapa
              </a>
            </div>
          </div>
        </motion.div>
        
        <footer className="absolute bottom-6 left-0 w-full text-center flex flex-col gap-1">
          <span className="text-[#00FF7F] font-bold italic text-xs">"A sua satisfação é o nosso orgulho!"</span>
          <span className="text-[10px] text-gray-500 font-medium">© {new Date().getFullYear()} PROTEC COMPUTER.</span>
        </footer>
      </section>
    </div>
  );
}
