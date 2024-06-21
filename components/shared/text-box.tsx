import { cn } from "@/lib/utils";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export async function TextBox() {
  return (
    <div className="z-10 flex min-h-[2rem] items-center justify-center mb-5">
      <div
        className={cn(
          "group rounded-full border border-black/5 bg-[#3a3c67]/5 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-[#3a3c67]/20",
        )}
      >
        <AnimatedShinyText className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300">
          <span>📘 Download Guidebook</span>
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
    </div>
  );
}
