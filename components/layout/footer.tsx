import Link from "next/link";
import { DockDemo } from "./dock";

export default function Footer() {
  return (
    <div className="bg-[#3a3c67] text-white/90 font-display absolute w-full px-5 py-10 lg:px-40 lg:py-14 lg:">
      <div className="flex flex-col lg:flex-row justify-between gap-4 mb-4">
        <div className="flex flex-col gap-4 lg:max-w-md">
          <img src="/assets/logo-dark.svg" alt="Soedirman Digital School - BEM UNSOED" width={300} height={30} />
          <p className="font-default text-sm opacity-70">Situs ini dibawah naungan dari Kementerian Koordinanator Bidang Riset dan Media - Badan Eksekutif Mahasiswa Universitas Jenderal Soedirman Tahun 2024 - Kabinet Bahtera Karsa.</p>
        </div>
        <div className="flex flex-col">
          <p className="mb-2">Links</p>
          <div className="font-default text-sm opacity-70 flex flex-col gap-1">
            <Link className="hover:underline" href="/best-student">Best Student</Link>
            <Link className="hover:underline" href="/after-movie">After Movie</Link>
            <Link className="hover:underline" href="/organizers">Organizers</Link>
            <Link className="hover:underline" href="/partner">Partner</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <p className="mb-2">Courses</p>
          <div className="font-default text-sm opacity-70 flex flex-col gap-1">
            <Link className="hover:underline" href="/microsoft-office">Microsoft Office</Link>
            <Link className="hover:underline" href="/data-analyst">Data Analyst</Link>
            <Link className="hover:underline" href="/digital-marketing">Digital Marketing</Link>
          </div>
        </div>
        <div>
          <DockDemo />
        </div>
      </div>
      <small>© 2024 Soedirman Digital School. All rights reserved.</small>
    </div>
  );
}
