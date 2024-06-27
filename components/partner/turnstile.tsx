import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  sitekey: string;
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile: any;
  }
}

export function Turnstile({ sitekey, onVerify }: TurnstileProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current && window.turnstile) {
      window.turnstile.render(ref.current, {
        sitekey: sitekey,
        callback: onVerify,
      });
    }
  }, [sitekey, onVerify]);

  return <div ref={ref}></div>;
}