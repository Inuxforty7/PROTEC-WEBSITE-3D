import { motion } from 'motion/react';
import { PageContent } from './PageContent';

export function Scene() {
  return (
    <>
      {/* Fixed Video Background */}
      <div className="fixed inset-0 w-full h-full z-0 bg-black">
        <motion.video
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.8 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          src="https://res.cloudinary.com/dwlfwnbt0/video/upload/q_auto/f_auto/v1775051367/protec_vd_ng9qia.mp4"
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
        {/* Improved gradient overlay for better text contrast */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/60 via-transparent to-black/90 pointer-events-none z-10" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <PageContent />
      </div>
    </>
  );
}
