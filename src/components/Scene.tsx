import { Canvas, useFrame } from '@react-three/fiber';
import { ScrollControls, Scroll, useScroll } from '@react-three/drei';
import { PageContent } from './PageContent';

function VideoController() {
  const scroll = useScroll();
  
  useFrame(() => {
    if (!scroll) return;
    const video = document.getElementById('scroll-video') as HTMLVideoElement;
    if (video && video.readyState >= 2 && Number.isFinite(video.duration) && video.duration > 0) {
      const targetTime = scroll.offset * video.duration;
      if (Math.abs(video.currentTime - targetTime) > 0.01) {
        video.currentTime = targetTime;
      }
    }
  });
  
  return null;
}

export function Scene() {
  return (
    <div className="w-full h-screen bg-black relative overflow-hidden">
      {/* Fixed Video Background */}
      <video
        id="scroll-video"
        src="https://res.cloudinary.com/dwlfwnbt0/video/upload/q_auto/f_auto/v1775037248/0401_jdqklp.mp4"
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-80"
        muted
        playsInline
        preload="auto"
      />
      
      {/* Dark gradient overlay to make text readable */}
      <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-black/60 via-black/20 to-black/80 z-0 pointer-events-none" />

      <div className="absolute inset-0 w-full h-full z-10">
        <Canvas>
          <ScrollControls pages={5} damping={0.1}>
            <VideoController />
            <Scroll html style={{ width: '100%', height: '100%' }}>
              <PageContent />
            </Scroll>
          </ScrollControls>
        </Canvas>
      </div>
    </div>
  );
}
