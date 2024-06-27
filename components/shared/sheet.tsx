import { Button } from "@/components/shadcnui/button"
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcnui/sheet"
import Link from "next/link"
import { useSignInModal } from "../layout/sign-in-modal"
import { useState } from "react"

export function SheetDemo() {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const [open, setOpen] = useState(false);
  const handleSignInClick = () => {
    setOpen(false);
    setShowSignInModal(true);
  };
  return (
    <>
      <SignInModal />
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </SheetTrigger>
        <SheetContent className="flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-2xl font-display">Menu</SheetTitle>
          </SheetHeader>
          <Link href="/best-student" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
            Best Student
          </Link>
          <Link href="/after-movie" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
            After Movie
          </Link>
          <Link href="/organizers" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
            Organizers
          </Link>
          <Link href="/partner" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
            Partner
          </Link>
          <button
            className="rounded-full bg-gradient-to-r from-[#9e64d7] to-[#61b0cf] p-1.5 px-4 text-white font-display transition-all hover:shadow-lg hover:scale-105"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
        </SheetContent>
      </Sheet>
    </>
  )
}