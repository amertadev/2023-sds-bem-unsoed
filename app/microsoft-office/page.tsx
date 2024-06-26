import { TextBox } from "@/components/shared/text-box";
import { ShimmerButtonDemo } from "@/components/shared/shimmer-button";
import ScrollHandler from "@/components/home/scroll-handler";
import HelpMO from "@/components/course/help-mo";
import TestiMO from "@/components/course/testi-mo";
import MentorMO from "@/components/course/mentor-mo";
import { SilabusMO } from "@/components/course/silabus-mo";

export default function MicrosoftOffice() {
    return (
        <>
            <ScrollHandler />
            <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
                <a href="https://bit.ly/GuideBookSDS2023" target="_blank" rel="noreferrer"><TextBox text="📘 Download Guidebook Microsoft Office" /></a>
                <h1
                    className="animate-fade-up bg-gradient-to-br from-[#21223a] to-[#21223a86] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    Microsoft Office
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-[#21223a86] opacity-0 md:text-xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    Microsoft Office adalah software yang dikembangkan oleh Microsoft, terdiri dari aplikasi seperti Word, Excel, PowerPoint, dan Outlook, yang digunakan secara luas untuk tugas-tugas kantor, pendidikan, dan personal di seluruh dunia.
                </p>
                <div
                    className="mx-auto mt-6 flex flex-col md:flex-row items-center md:items-start gap-4 animate-fade-up justify-center space-x-5 opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNCYSmsWx7WyxlU4nizXI-K5tNtzX018grXkEcrRKFmwgqIA/viewform?usp=sharing"><ShimmerButtonDemo text="Daftar Microsoft Office Sekarang" /></a>
                </div>
            </div>
            <div className="z-10 lg:px-6 mt-10 w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
                <SilabusMO />
                <MentorMO />
            </div>
            <div className="z-10 mt-10 md:mt-40 w-full">
                <TestiMO />
            </div>
            <div className="z-10 pt-20 w-full">
                <HelpMO />
            </div>
        </>
    );
}