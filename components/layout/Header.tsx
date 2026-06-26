import Image from "next/image";
import SearchBar from "../ui/SearchBar";

export default function Header() {
  return (
    <header className="h-20 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">

      <Image
        src="/logo3.png"
        alt="OASIS"
        width={250}
        height={70}
        priority
      />

      <SearchBar />

    </header>
  );
}