import { motion } from 'motion/react';

export function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        {/* Animated Ring */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-24 h-24 rounded-full border-2 border-[#00FF7F]/20 border-t-[#00FF7F] translate-z-0 will-change-transform"
        />
        
        {/* Logo in Center */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <img 
            src="https://res.cloudinary.com/dwlfwnbt0/image/upload/q_auto/f_auto/v1775056712/logo_protec_jef7hg.png" 
            alt="PROTEC Logo" 
            className="w-12 h-12 object-contain"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-8 flex flex-col items-center"
      >
        <span className="text-white font-black tracking-[0.2em] uppercase text-xs mb-2 italic">
          <span className="text-[#00FF7F]">PROTEC</span> COMPUTER
        </span>
        <div className="w-32 h-[1px] bg-white/10 relative overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#00FF7F] to-transparent"
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
