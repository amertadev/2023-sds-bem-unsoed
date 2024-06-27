"use client";

import Image from "next/image";
import Link from "next/link";
import useScroll from "@/lib/hooks/use-scroll";
import { useSignInModal } from "./sign-in-modal";
import { SheetDemo } from "../shared/sheet";

export default function NavBar() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);
  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full flex justify-center ${scrolled
            ? "border-b border-gray-200 bg-white/50 backdrop-blur-xl"
            : "bg-white/0"
          } z-30 transition-all`}
      >
        <div className="mx-5 lg:mx-40 flex h-16 max-w-screen-xl items-center justify-between w-full">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/assets/logo.svg"
              alt="SDS logo"
              width="300"
              height="30"
              className="mr-2 rounded-sm"
            ></Image>
          </Link>
          <div className="flex lg:hidden">
            <SheetDemo />
          </div>
          <div className="hidden lg:flex justify-center gap-8 items-center">
            <Link href="/best-student" className="text-[#292a41]/70 font-display hover:text-[#292a41] transform duration-200 hover:underline">
              Best Student
            </Link>
            <Link href="/after-movie" className="text-[#292a41]/70 font-display hover:text-[#292a41] transform duration-200 hover:underline">
              After Movie
            </Link>
            <Link href="/organizers" className="text-[#292a41]/70 font-display hover:text-[#292a41] transform duration-200 hover:underline">
              Organizers
            </Link>
            <Link href="/partner" className="text-[#292a41]/70 font-display hover:text-[#292a41] transform duration-200 hover:underline">
              Partner
            </Link>
            <button
              className="rounded-full bg-gradient-to-r from-[#9e64d7] to-[#61b0cf] p-1.5 px-4 text-white font-display transition-all hover:shadow-lg hover:scale-105"
              onClick={() => setShowSignInModal(true)}
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
