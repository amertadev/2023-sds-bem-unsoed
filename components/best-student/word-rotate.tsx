import WordRotate from "@/components/magicui/word-rotate";

export async function WordRotateDemo() {
    return (
        <div className="flex items-center">
            <span className="text-3xl md:text-4xl">🎖️</span>
            <WordRotate
            className="bg-gradient-to-br from-[#21223a] to-[#21223a86] bg-clip-text text-center font-display text-3xl md:text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm [text-wrap:balance] md:leading-[5rem]"
            words={["Best Student", "#SDSBestStudentAnnouncement", "Peserta Terbaik", "Keren Bangett", "Wooww"]}
        />
        </div>
    );
}