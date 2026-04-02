import { motion } from 'motion/react';
import { Shield, Wrench, Battery, Monitor, Keyboard, Phone, MapPin, Cpu, HardDrive } from 'lucide-react';

export function PageContent() {
  return (
    <div className="w-full pointer-events-none">
      {/* Page 1: Hero */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pointer-events-auto py-32">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-2xl bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0055FF]/20 border border-[#0055FF]/30 text-blue-300 text-sm font-semibold mb-8 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
            </span>
            Especialistas em Maputo
          </div>
          <h1 className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.05] mb-8">
            O seu computador <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0055FF] to-[#00FF7F]">
              novo de novo.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-2 max-w-lg leading-relaxed font-medium">
            Montagem, reparação e venda de computadores e peças com precisão cirúrgica. Confiança e rapidez no Mercado Anexo do Zimpeto.
          </p>
        </motion.div>
      </section>

      {/* Page 2: Intro / Opening */}
      <section className="min-h-screen flex flex-col justify-center items-end px-6 md:px-20 max-w-7xl mx-auto pointer-events-auto py-32">
        <motion.div 
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md text-right bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Diagnóstico<br/>Preciso.</h2>
          <p className="text-lg text-gray-300 leading-relaxed font-medium">
            Abrimos o jogo. Sem surpresas. Analisamos cada componente do seu equipamento para garantir a melhor performance e durabilidade.
          </p>
        </motion.div>
      </section>

      {/* Page 3: Explosion / Internals */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pointer-events-auto py-32">
        <motion.div 
          initial={{ opacity: 0, x: -50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-md bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
        >
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Conhecemos<br/>o Core.</h2>
          <p className="text-lg text-gray-300 leading-relaxed mb-10 font-medium">
            Da motherboard ao ecrã, dominamos a anatomia do seu computador. Substituição de peças com garantia de qualidade.
          </p>
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-5 bg-black/40 backdrop-blur-xl p-5 rounded-3xl border border-white/10 shadow-2xl">
              <div className="p-3.5 bg-gradient-to-br from-[#0055FF] to-blue-600 rounded-2xl text-white shadow-lg shadow-blue-500/20">
                <Cpu className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">Reparação Avançada</h3>
                <p className="text-sm text-gray-400 font-medium">Soldadura e microeletrónica</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Page 4: Services Grid */}
      <section id="servicos" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pointer-events-auto py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="bg-black/60 backdrop-blur-xl p-8 md:p-12 rounded-[2.5rem] border border-white/10 shadow-2xl"
          >
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">Tudo o que<br/>precisa.</h2>
            <p className="text-lg text-gray-300 leading-relaxed font-medium">
              Temos um stock completo de peças e acessórios para dar uma nova vida à sua máquina. Qualidade garantida.
            </p>
          </motion.div>
          <div className="grid grid-cols-2 gap-4 md:gap-6" id="pecas">
            {[
              { icon: Battery, title: 'Baterias', desc: 'Longa duração' },
              { icon: Phone, title: 'Carregadores', desc: 'Originais & Compatíveis' },
              { icon: Shield, title: 'Covers', desc: 'Proteção total' },
              { icon: Monitor, title: 'LCDs', desc: 'Alta definição' },
              { icon: Keyboard, title: 'Teclados', desc: 'Layout PT/US' },
              { icon: HardDrive, title: 'Armazenamento', desc: 'SSDs & HDDs' },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="bg-black/60 backdrop-blur-xl p-6 rounded-3xl border border-white/10 shadow-2xl hover:bg-black/80 hover:-translate-y-1 transition-all duration-300 group"
              >
                <div className="p-3 bg-white/5 rounded-2xl inline-block mb-4 group-hover:bg-[#0055FF]/20 transition-colors">
                  <item.icon className="w-6 h-6 text-[#00FF7F]" />
                </div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-gray-400 font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Page 5: Contact & Footer */}
      <section id="localizacao" className="min-h-screen flex flex-col justify-center px-6 md:px-20 max-w-7xl mx-auto pointer-events-auto relative py-32">
        <motion.div 
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="bg-black/80 backdrop-blur-2xl rounded-[3rem] p-10 md:p-20 text-white overflow-hidden relative shadow-2xl border border-white/10"
        >
          <div className="absolute top-0 right-0 w-[30rem] h-[30rem] bg-[#0055FF] rounded-full mix-blend-screen filter blur-[100px] opacity-30 translate-x-1/3 -translate-y-1/3" />
          <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-[#00FF7F] rounded-full mix-blend-screen filter blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3" />
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">Pronto para o<br/>upgrade?</h2>
              <p className="text-xl text-gray-300 mb-10 font-medium max-w-md">
                Fale connosco agora. Orçamentos rápidos, transparentes e sem compromisso.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="https://wa.me/258846254794" className="flex items-center justify-center gap-3 bg-[#00FF7F] text-gray-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-[#00e673] transition-all hover:scale-105 shadow-lg shadow-[#00FF7F]/20">
                  <Phone className="w-5 h-5" />
                  84 625 4794
                </a>
                <a href="https://wa.me/258878254794" className="flex items-center justify-center gap-3 bg-white/10 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md border border-white/10">
                  <Phone className="w-5 h-5" />
                  87 825 4794
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="flex items-start gap-5 mb-8 bg-white/5 p-6 rounded-3xl backdrop-blur-md border border-white/10">
                <div className="p-4 bg-white/10 rounded-2xl">
                  <MapPin className="w-6 h-6 text-[#00FF7F]" />
                </div>
                <div>
                  <h3 className="font-bold text-xl mb-2">Visite-nos</h3>
                  <p className="text-gray-300 text-lg font-medium">Mercado Anexo do Zimpeto<br />Maputo, Moçambique</p>
                  <a href="https://maps.google.com/?q=Mercado+Anexo+do+Zimpeto+Maputo" target="_blank" rel="noopener noreferrer" className="inline-block mt-4 text-[#00FF7F] font-semibold hover:underline">
                    Ver no mapa &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
        
        <footer className="absolute bottom-6 left-0 w-full text-center text-sm text-gray-400 font-medium">
          © {new Date().getFullYear()} ProtecComputer. Todos os direitos reservados.
        </footer>
      </section>
    </div>
  );
}
