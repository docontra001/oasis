import SearchBar from "../ui/SearchBar";

export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-6">

      <h1 className="text-cyan-300 font-bold text-3xl tracking-widest">
        OASIS
      </h1>

      <SearchBar />

    </header>
  );
}