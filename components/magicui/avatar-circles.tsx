"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface AvatarCirclesProps {
  className?: string;
  numPeople?: number;
  avatarUrls: string[];
}

const AvatarCircles = ({ numPeople, className, avatarUrls }: AvatarCirclesProps) => {
  return (
    <div className={cn("z-10 flex -space-x-4 rtl:space-x-reverse", className)}>
      {avatarUrls.map((url, index) => (
        <img
          key={index}
          className="h-10 w-10 rounded-full"
          src={url}
          width={40}
          height={40}
          alt={`Avatar ${index + 1}`}
        />
      ))}
      <div
        className="flex h-10 w-10 items-center justify-center rounded-full bg-[#292a41] text-center text-xs font-display text-white"
      >
        +{numPeople}
      </div>
    </div>
  );
};

export default AvatarCircles;