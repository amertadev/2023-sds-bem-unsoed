import SparklesText from "@/components/magicui/sparkles-text";

export default function AfterMovie() {
    return (
        <div className="z-10 px-6 lg:px-[20rem] w-full flex flex-col gap-4">
            <div className="text-center">
                <SparklesText text="After Movie" />
            </div>
            <iframe className="h-[13rem] md:h-[32rem] border rounded-2xl shadow-2xl" src="https://www.youtube.com/embed/eIeXo2GBTMU?si=y6ptPzAM0vXab81m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}