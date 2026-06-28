import { extract } from "@extractus/article-extractor";

async function main() {
  const artigo = await extract(
    "https://www.sciencedaily.com/releases/2026/06/260623083113.htm"
  );

  console.log(artigo);
}

main();