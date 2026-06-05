import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const location = useLocation();

  useEffect(() => {
    // Initialize Lenis with heavy, slow scroll settings
    const lenis = new Lenis({
      duration: 1.5, // High duration for slower scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious ease
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8, // Slower wheel multiplier
      smoothTouch: false,
      touchMultiplier: 2,
    });

    // Run raf (requestAnimationFrame) loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Reset scroll position on route change
    lenis.scrollTo(0, { immediate: true });

    return () => {
      lenis.destroy();
    };
  }, [location.pathname]);

  return <>{children}</>;
};
