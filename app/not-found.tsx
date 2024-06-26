import SparklesText from "@/components/magicui/sparkles-text";

export default function NotFound() {
    return (
        <div className="px-6 md:px-40 z-10 w-full flex flex-col justify-center items-center">
            <div className="text-center">
                <SparklesText text1="404 Not Found" text2="Nantikan update terbaru, Stay tuned!" />
            </div>
        </div>
    )
}