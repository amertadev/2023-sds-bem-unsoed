import { TextBox } from "@/components/shared/text-box";
import { ShimmerButtonDemo } from "@/components/shared/shimmer-button";
import ScrollHandler from "@/components/home/scroll-handler";
import MentorDA from "@/components/course/mentor-da";
import { SilabusDA } from "@/components/course/silabus-da";
import TestiDA from "@/components/course/testi-da";
import HelpDA from "@/components/course/help-da";

export default function DataAnalyst() {
    return (
        <>
            <ScrollHandler />
            <div className="z-10 w-full max-w-4xl px-5 xl:px-0">
                <a href="https://bit.ly/GuideBookSDS2023" target="_blank" rel="noreferrer"><TextBox text="📘 Download Guidebook Data Analyst" /></a>
                <h1
                    className="animate-fade-up bg-gradient-to-br from-[#21223a] to-[#21223a86] bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:text-7xl md:leading-[5rem]"
                    style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
                >
                    Data Analyst
                </h1>
                <p
                    className="mt-6 animate-fade-up text-center text-[#21223a86] opacity-0 md:text-xl"
                    style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
                >
                    Data Analyst adalah seorang profesional yang bertugas untuk mengumpulkan, mengolah, menganalisis, dan menginterpretasikan data untuk membantu perusahaan dalam membuat keputusan yang lebih baik. Data Analyst juga bertanggung jawab dalam membuat laporan dan visualisasi data agar mudah dipahami.
                </p>
                <div
                    className="mx-auto mt-6 flex flex-col md:flex-row items-center md:items-start gap-4 animate-fade-up justify-center space-x-5 opacity-0"
                    style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
                >
                    <a href="https://docs.google.com/forms/d/e/1FAIpQLSeNCYSmsWx7WyxlU4nizXI-K5tNtzX018grXkEcrRKFmwgqIA/viewform?usp=sharing"><ShimmerButtonDemo text="Daftar Data Analyst Sekarang" /></a>
                </div>
            </div>
            <div className="z-10 lg:px-6 mt-10 w-full flex flex-col lg:flex-row justify-center items-center lg:items-start gap-10">
                <SilabusDA />
                <MentorDA />
            </div>
            <div className="z-10 mt-10 md:mt-40 w-full">
                <TestiDA />
            </div>
            <div className="z-10 pt-20 w-full">
                <HelpDA />
            </div>
        </>
    );
}