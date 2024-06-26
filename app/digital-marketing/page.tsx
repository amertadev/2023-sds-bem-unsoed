import { TextBox } from "@/components/shared/text-box";
import { ShimmerButtonDemo } from "@/components/shared/shimmer-button";
import ScrollHandler from "@/components/home/scroll-handler";
import HelpDA from "@/components/course/help-da";
import { SilabusDM } from "@/components/course/silabus-dm";
import MentorDM from "@/components/course/mentor-dm";
import TestiDM from "@/components/course/testi-dm";

export default function DigitalMarketing() {
    return (
        <>
            <ScrollHandler />
            <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
                <a href="https://bit.ly/GuideBookSDS2023" target="_blank" rel="noreferrer"><TextBox text="📘 Download Guidebook Digital Marketing" /></a>
                <h1
                    className="animate-fade-up bg-gradient-to-br from-[#21223a] to-[#21223a86] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    Digital Marketing
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-[#21223a86] opacity-0 md:text-xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    Digital Marketing adalah sebuah proses atau sistem yang memungkinkan para penikmat bisnis untuk menggunakan teknologi untuk mempromosikan diri mereka melalui media digital.
                </p>
                <div
                    className="mx-auto mt-6 flex flex-col md:flex-row items-center md:items-start gap-4 animate-fade-up justify-center space-x-5 opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNCYSmsWx7WyxlU4nizXI-K5tNtzX018grXkEcrRKFmwgqIA/viewform?usp=sharing"><ShimmerButtonDemo text="Daftar Digital Marketing Sekarang" /></a>
                </div>
            </div>
            <div className="z-10 lg:px-6 mt-10 w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
                <SilabusDM />
                <MentorDM />
            </div>
            <div className="z-10 mt-10 md:mt-40 w-full">
                <TestiDM />
            </div>
            <div className="z-10 pt-20 w-full">
                <HelpDA />
            </div>
        </>
    );
}