import { useRef } from 'react';
import Button from './Button';
import Section from './Section';
import { BackgroundCircles, BottomLine } from './design/Hero';
import CompanyLogos from './CompanyLogos';
import videoUrl from "@/assets/moresoul121.mp4?url"; // Import video as URL

const Hero = () => {
  const videoRef = useRef(null);

  const handleVideoEnd = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = videoRef.current.duration; // Stay on the last frame
      videoRef.current.pause(); // Pause at the last frame
    }
  };

  return (
    <Section
      className="relative pt-[12rem] -mt-[5.25rem]"
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="hero"
    >
      <div className="relative z-10 max-w-[62rem] mx-auto text-center mb-20 lg:mb-[6rem]">
        <h1 className="h1 mb-6 flex-col">
          Bringing Your Vision to {' '}
          <span className="inline-block mb-20 relative">
          Life
          </span>
        </h1>
        <Button className="mt-10 mb-10 " href="/pricing" gray>
          Start Today
        </Button>
      </div>

      {/* Fullscreen Video Background */}
      <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
        <video
          ref={videoRef}
          src={videoUrl} // Use imported video URL
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          muted
          onEnded={handleVideoEnd} // Handle video end to pause at last frame
        />
      </div>

      {/* Additional Design Elements */}
      <BackgroundCircles />

      <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
      <BottomLine />
    </Section>
  );
};

export default Hero;
