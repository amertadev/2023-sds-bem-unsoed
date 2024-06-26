import SparklesText from "@/components/magicui/sparkles-text";

export default function AfterMovie() {
    return (
        <div className=" z-10 px-[18rem] w-full flex flex-col gap-4">
            {/* <div className="text-center bg-slate-300">
                <SparklesText text1="After Movie" text2="" />
            </div> */}
            <iframe className="h-96 md:h-[35rem] border rounded-2xl shadow-2xl" src="https://www.youtube.com/embed/eIeXo2GBTMU?si=y6ptPzAM0vXab81m" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
    );
}