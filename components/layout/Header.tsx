"use client";

import Image from "next/image";
import SearchBar from "../ui/SearchBar";

type HeaderProps = {
  mobile: boolean;
  onMenuClick: () => void;
};

export default function Header({
  mobile,
  onMenuClick,
}: HeaderProps) {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-4 sm:px-6">

      <div className="flex items-center gap-4">

        {mobile && (
          <button
            onClick={onMenuClick}
            className="text-3xl hover:text-cyan-400 transition"
          >
            ☰
          </button>
        )}

        <Image
          src="/logo3.png"
          alt="OASIS"
          width={250}
          height={70}
          priority
          className="w-40 sm:w-52 lg:w-60 h-auto"
        />

      </div>

      <div className="hidden md:block w-[420px]">
        <SearchBar />
      </div>

    </header>
  );
}