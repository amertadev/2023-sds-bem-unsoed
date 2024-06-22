'use client';

import { useEffect } from 'react';

function smoothScrollTo(elementId: string, offset = 0) {
  const element = document.getElementById(elementId);
  if (element) {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

export default function ScrollHandler() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      e.preventDefault();
      smoothScrollTo('course', -100);
    };

    const button = document.querySelector('a[href="#course"]') as HTMLAnchorElement;
    if (button) {
      button.addEventListener('click', handleClick as EventListener);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick as EventListener);
      }
    };
  }, []);

  return null;
}