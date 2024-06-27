import React, { useEffect, useRef } from 'react';

interface TurnstileProps {
  sitekey: string;
  onVerify: (token: string) => void;
}

declare global {
  interface Window {
    turnstile: {
      ready: (callback: () => void) => void;
      render: (container: string | HTMLElement, options: { sitekey: string; callback: (token: string) => void; appearance?: "always" | "execute" | "invisible" | undefined; auto_callback?: boolean | undefined; }) => void;
    };
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