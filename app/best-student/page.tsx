import { Coc } from "@/components/best-student/coc";
import { WordRotateDemo } from "@/components/best-student/word-rotate";

export default function BestStudent() {
    return (
        <div className="px-6 md:px-40 z-10 w-full flex flex-col justify-start items-start">
            <WordRotateDemo />
            <Coc />
        </div>
    );
}