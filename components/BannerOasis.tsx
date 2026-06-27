export default function BannerOasis() {
  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-zinc-800 mb-8 animate-fade">
      <img
        src="/banner-oasis.png"
        alt="OASIS"
        className="w-full h-auto object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 via-transparent to-transparent" />
    </div>
  );
}