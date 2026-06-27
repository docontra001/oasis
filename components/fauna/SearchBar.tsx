"use client";

type SearchBarProps = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBar({
  value,
  onChange,
}: SearchBarProps) {
  return (
    <div className="mb-8">
      <input
        type="text"
        placeholder="🔍 Pesquisar por nome popular ou científico..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="
          w-full
          rounded-xl
          border
          border-zinc-700
          bg-zinc-900
          px-5
          py-4
          text-lg
          text-white
          placeholder:text-zinc-500
          focus:border-cyan-500
          focus:outline-none
        "
      />
    </div>
  );
}