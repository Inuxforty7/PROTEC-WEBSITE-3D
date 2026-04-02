import { PageContent } from './PageContent';

export function Scene() {
  return (
    <>
      {/* Fixed Video Background */}
      <div className="fixed inset-0 w-full h-full z-0">
        <video
          src="https://res.cloudinary.com/dwlfwnbt0/video/upload/q_auto/f_auto/v1775051367/protec_vd_ng9qia.mp4"
          className="w-full h-full object-cover opacity-80"
          autoPlay
          loop
          muted
          playsInline
        />
        {/* Subtle gradient overlay just to ensure navbar readability at the top */}
        <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/50 via-transparent to-black/50 pointer-events-none" />
      </div>

      {/* Scrollable Content */}
      <div className="relative z-10 w-full">
        <PageContent />
      </div>
    </>
  );
}
