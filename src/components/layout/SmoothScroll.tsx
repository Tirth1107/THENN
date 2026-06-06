import { useEffect, useRef } from 'react';
import Lenis from '@studio-freight/lenis';
import { useLocation } from 'react-router-dom';

interface SmoothScrollProps {
  children: React.ReactNode;
}

export const SmoothScroll = ({ children }: SmoothScrollProps) => {
  const location = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Disable default browser scroll restoration
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }

    // Initialize Lenis once on mount
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Luxurious ease
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 0.8,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;
    (window as any).lenis = lenis;

    // Run raf (requestAnimationFrame) loop
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      (window as any).lenis = null;
      cancelAnimationFrame(rafId);
    };
  }, []);

  // Reset scroll to top immediately on route change
  useEffect(() => {
    window.scrollTo(0, 0);
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    }
    // A small timeout helps ensure layout is complete when route changes
    const timeoutId = setTimeout(() => {
      window.scrollTo(0, 0);
      if (lenisRef.current) {
        lenisRef.current.scrollTo(0, { immediate: true });
      }
    }, 50);

    return () => clearTimeout(timeoutId);
  }, [location.pathname]);

  return <>{children}</>;
};
