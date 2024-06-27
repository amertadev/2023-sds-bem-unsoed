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
    if (typeof window.turnstile !== 'undefined' && ref.current) {
      window.turnstile.ready(() => {
        window.turnstile.render(ref.current!, {
          sitekey: sitekey,
          callback: onVerify,
          appearance: 'invisible',
          auto_callback: true
        });
      });
    }
  }, [sitekey, onVerify]);

  return <div ref={ref} />;
};

export default AutoTurnstile;