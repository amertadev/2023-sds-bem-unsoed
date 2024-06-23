import { TextBox } from "@/components/shared/text-box";
import { ShimmerButtonDemo } from "@/components/shared/shimmer-button";
import CountdownTimer from "@/components/home/countdown";
import { BentoGridDemo } from "@/components/home/bento";
import Course from "@/components/home/course";
import ScrollHandler from "@/components/home/scroll-handler";
import CustomizedTimeline from "@/components/mui/timeline";

export default async function Home() {
  return (
    <>
      <ScrollHandler />
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
          <a href="#course"><ShimmerButtonDemo /></a>
          <CountdownTimer dateTime="2024-09-18T23:59:00" />
        </div>
      </div>
      <div className="z-10 mt-10 w-full">
        <BentoGridDemo />
      </div>
      <div id="course" className="z-10 mt-10 w-full">
        <Course />
      </div>
      <div className="z-10 mt-20 w-full">
        <CustomizedTimeline />
      </div>
    </>
  );
}