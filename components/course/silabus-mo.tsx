"use client";

import { cn } from "@/lib/utils";
import { AnimatedList } from "@/components/magicui/animated-list";

interface Item {
    name: string;
    description: string;
    icon: string;
    color: string;
    time: string;
}

let notifications = [
    {
        name: "Camp 1",
        description: "Pengenalan Microsoft Office Suite",
        time: "15m ago",
        icon: "💸",
        color: "#00C9A7",
    },
    {
        name: "Camp 2",
        description: "Microsoft Word Dasar",
        time: "10m ago",
        icon: "👤",
        color: "#FFB800",
    },
    {
        name: "Camp 3",
        description: "Microsoft Word Lanjutan",
        time: "5m ago",
        icon: "💬",
        color: "#FF3D71",
    },
    {
        name: "Camp 4",
        description: "Microsoft Excel Dasar",
        time: "2m ago",
        icon: "🗞️",
        color: "#1E86FF",
    },
    {
        name: "Camp 5",
        description: "Microsoft Excel Lanjutan",
        time: "1m ago",
        icon: "📈",
        color: "#F24E1E",
    },
    {
        name: "Camp 6",
        description: "Midtest",
        time: "30s ago",
        icon: "📝",
        color: "#00C9A7",
    },
    {
        name: "Camp 7",
        description: "Microsoft PowerPoint",
        time: "20s ago",
        icon: "📚",
        color: "#FFB800",
    },
    {
        name: "Camp 8",
        description: "Microsoft Outlook dan OneNote",
        time: "15s ago",
        icon: "💻",
        color: "#FF3D71",
    },
    {
        name: "Camp 9",
        description: "Microsoft Access Dasar",
        time: "10s ago",
        icon: "📁",
        color: "#1E86FF",
    },
    {
        name: "Camp 10",
        description: "Arahan Final Project",
        time: "5s ago",
        icon: "👥",
        color: "#F24E1E",
    },
];

notifications = Array.from({ length: 10 }, () => notifications).flat();

const Notification = ({ name, description, icon, color, time }: Item) => {
    return (
        <figure
            className={cn(
                "relative min-h-fit w-full transform cursor-pointer overflow-hidden rounded-2xl p-4",
                // animation styles
                "transition-all duration-200 ease-in-out hover:scale-[103%]",
                // light styles
                "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
            )}
        >
            <div className="flex flex-row items-center gap-3">
                <div
                    className="flex h-10 w-10 items-center justify-center rounded-2xl"
                    style={{
                        backgroundColor: color,
                    }}
                >
                    <span className="text-lg">{icon}</span>
                </div>
                <div className="flex flex-col overflow-hidden">
                    <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium">
                        <span className="text-sm sm:text-lg">{name}</span>
                        <span className="mx-1">·</span>
                        <span className="text-xs text-gray-500">{time}</span>
                    </figcaption>
                    <p className="text-sm font-normal">
                        {description}
                    </p>
                </div>
            </div>
        </figure>
    );
};

export function SilabusMO() {
    return (
        <div className="w-full lg:w-fit px-6 lg:px-0">
            <div className="p-2 border bg-white rounded-lg inline-block mb-2">
                <span className="font-display opacity-70">Silabus🤗</span>
            </div>
            <div className="relative flex h-[29.2rem] w-full flex-col overflow-hidden rounded-lg border bg-background p-6 shadow-lg">
                <AnimatedList>
                    {notifications.map((item, idx) => (
                        <Notification {...item} key={idx} />
                    ))}
                </AnimatedList>
            </div>
        </div>
    );
}