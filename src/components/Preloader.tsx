import { useEffect, useState } from "react";

interface PreloaderProps {
  onDone?: () => void;
}

export default function Preloader({ onDone }: PreloaderProps) {
  const [exiting, setExiting] = useState(false);
  const [showTagline, setShowTagline] = useState(false);

  useEffect(() => {
    const handleLoad = () => {
      // Sequence: logo -> show tagline -> brief hold -> exit
      const logoDuration = 900; // matches logo-pop animation
      const taglineDelay = logoDuration + 40; // small gap after logo
      const taglineDuration = 600;
      const holdAfterTagline = 300;

      // show tagline after logo finishes
      setTimeout(() => setShowTagline(true), taglineDelay);

      // calculate when to start exit (logo + tagline + hold)
      const exitDelay = taglineDelay + taglineDuration + holdAfterTagline;
      const doneDelay = exitDelay + 600; // mirror CSS exit transition

      setTimeout(() => setExiting(true), exitDelay);
      setTimeout(() => onDone?.(), doneDelay);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
      // fallback if load never fires for some reason
      const fallback = setTimeout(handleLoad, 2000);
      return () => {
        window.removeEventListener("load", handleLoad);
        clearTimeout(fallback);
      };
    }
  }, [onDone]);

  return (
    <div className={"preloader" + (exiting ? " preloader--exit" : "") } aria-hidden>
      <div className="preloader__inner">
        <svg
          className="preloader__logo"
          width="420"
          height="84"
          viewBox="0 0 420 84"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-labelledby="preloader-logo-title"
        >
          <defs>
            <linearGradient id="preloaderGradient" x1="0" x2="1">
              <stop offset="0%" stopColor="hsl(var(--foreground))" />
              <stop offset="100%" stopColor="hsl(var(--primary))" />
            </linearGradient>
          </defs>
          <title id="preloader-logo-title">Theन्न</title>
          <text
            x="50%"
            y="55%"
            dominantBaseline="middle"
            textAnchor="middle"
            fontFamily="Outfit, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial"
            fontWeight={700}
            fontSize={56}
            fill="url(#preloaderGradient)"
          >
            Theन्न
          </text>
        </svg>
        <div className={"preloader__tagline" + (showTagline ? " visible" : "")}>website for everyone...</div>
        <div className="preloader__shine" />
      </div>
    </div>
  );
}
