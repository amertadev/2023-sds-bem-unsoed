import { Button } from "@/components/shadcnui/button"
import { Input } from "@/components/shadcnui/input"
import { Label } from "@/components/shadcnui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/shadcnui/sheet"
import Link from "next/link"
import { Session } from "next-auth";
import UserDropdown from "../layout/user-dropdown"
import { useSignInModal } from "../layout/sign-in-modal"

export function SheetDemo({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  return (
    <Sheet>
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
            <Link href="/staff-sds" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
              Staff SDS
            </Link>
            <Link href="/partner" className="text-[#292a41]/70 font-display mr-8 hover:text-[#292a41] transform duration-200 hover:underline">
              Partner
            </Link>
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full bg-gradient-to-r from-[#9e64d7] to-[#61b0cf] p-1.5 px-4 text-white font-display transition-all hover:shadow-lg hover:scale-105"
                onClick={() => setShowSignInModal(true)}
              >
                Sign In
              </button>
            )}
      </SheetContent>
    </Sheet>
  )
}