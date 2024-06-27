// components/AutoTurnstile.tsx
"use client";

import { useEffect, useRef } from 'react';

interface AutoTurnstileProps {
  sitekey: string;
  onVerify: (token: string) => void;
}

const AutoTurnstile: React.FC<AutoTurnstileProps> = ({ sitekey, onVerify }) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const renderTurnstile = () => {
      if (window.turnstile && ref.current) {
        window.turnstile.render(ref.current, {
          sitekey: sitekey,
          callback: onVerify,
          appearance: 'always',
          auto_callback: true,
        });
      }
    };

    if (window.turnstile) {
      renderTurnstile();
    } else {
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderTurnstile();
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [sitekey, onVerify]);

  return <div ref={ref} />;
};

export default AutoTurnstile;