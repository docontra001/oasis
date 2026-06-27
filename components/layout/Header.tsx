"use client";

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

      <div>
        {mobile && (
          <button
            onClick={onMenuClick}
            className="text-3xl hover:text-cyan-400 transition"
          >
            ☰
          </button>
        )}
      </div>

      <div className="hidden md:block w-[420px]">
        <SearchBar />
      </div>

    </header>
  );
}