import Link from "next/link";
import { DockDemo } from "./dock";

export default function Footer() {
  return (
    <div className="bg-[#3a3c67] text-white/90 font-display absolute w-full px-5 py-10 lg:px-40">
      <div className="flex flex-col md:flex-row justify-between ">
        <div className="flex flex-col justify-center md:justify-start">
          <img src="/assets/logo-dark.svg" alt="Soedirman Digital School - BEM UNSOED" width={300} height={30} />
          <div className="flex flex-col my-8">
            <Link href="/best-student">Best Student</Link>
            <Link href="/after-movie">After Movie</Link>
            <Link href="/staff-sds">Staff SDS</Link>
            <Link href="/partner">Partner</Link>
          </div>
          <small>© 2024 Soedirman Digital School. All rights reserved.</small>
        </div>
        <DockDemo />
      </div>
    </div>
  );
}
