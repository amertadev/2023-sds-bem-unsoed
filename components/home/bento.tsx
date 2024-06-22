import React from "react";
import {
  IconArrowWaveRightUp,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { BentoGrid, BentoGridItem } from "../aceternityui/bento-grid";

export function BentoGridDemo() {
  return (
    <div className="max-w-[23rem] md:max-w-[46rem] lg:max-w-6xl mx-auto">
      <div className="p-2 border bg-white rounded-lg inline-block mb-2">
        <span className="font-display opacity-70">Benefit🤩</span>
      </div>
        <BentoGrid>
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[10rem] rounded-xl bg-gradient-to-br from-slate-200"></div>
);
const items = [
  {
    title: "2 Bulan Pelatihan",
    description: "Pelatihan dilakukan secara intensif bersama mentor yang keren.",
    header: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655",
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Membangun Portofolio",
    description: "Proyek pada pelatihan ini bisa dijadikan portofolio yang menarik.",
    header: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7",
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "LMS Khusus",
    description: "Pemberian tugas dari mentor kepada peserta melalui platform Moodle.",
    header: "https://tednet.wordpress.com/wp-content/uploads/2014/06/moodle-ladders.jpg",
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Talkshow Karir",
    description:
      "Talkshow akan membahas tentang karir dan pekerjaan yang ditawarkan selama pelatihan.",
    header: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04",
    icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Memperluas Networking",
    description: "Bertemu dengan orang-orang hebat dari berbagai latar belakang dan memperluas jaringan untuk berkolaborasi.",
    header: "https://images.unsplash.com/photo-1543269865-cbf427effbad",
    icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
  },
];