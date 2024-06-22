"use client";
import { TextBox } from "@/components/shared/text-box";
import { ShimmerButtonDemo } from "@/components/shared/shimmer-button";
import CountdownTimer from "@/components/home/countdown";
import { BentoGridDemo } from "@/components/home/bento";
import Course from "@/components/home/course";
import { useEffect } from 'react';

export default async function Home() {
  function smoothScrollTo(elementId: string, offset = 0) {
    const element = document.getElementById(elementId);
    if (element) {
      const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }
  useEffect(() => {
    const handleClick = (e: { preventDefault: () => void; }) => {
      e.preventDefault();
      smoothScrollTo('course', -100); // Adjust -100 to move it slightly higher
    };

    const button = document.querySelector('a[href="#course"]');
    if (button) {
      button.addEventListener('click', handleClick);
    }

    return () => {
      if (button) {
        button.removeEventListener('click', handleClick);
      }
    };
  }, []);
  return (
    <>
      <div className="z-10 w-full max-w-2xl px-5 xl:px-0">
        <a href="https://drive.google.com/"><TextBox /></a>
        <h1
          className="animate-fade-up bg-gradient-to-br from-[#21223a] to-[#21223a86] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
        >
          Tingkatkan Skill Digital Bersama SDS!
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-[#21223a86] opacity-0 [text-wrap:balance] md:text-xl"
          style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
        >
          Investasikan waktumu dalam pembelajaran teknologi berkualitas dan raih peluang karir yang tak terbatas di era digital.
        </p>
        <div
          className="mx-auto mt-6 flex flex-col md:flex-row items-center md:items-start gap-4 animate-fade-up justify-center space-x-5 opacity-0"
          style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
        >
          <a href="#course" onClick={(e) => e.preventDefault()}><ShimmerButtonDemo /></a>
          <CountdownTimer dateTime="2024-09-18T23:59:00" />
        </div>
      </div>
      <div className="z-10 mt-10 w-full">
        <BentoGridDemo />
      </div>
      <div id="course" className="z-10 mt-10 w-full">
        <Course />
      </div>
    </>
  );
}