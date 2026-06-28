import { importarNoticias } from "../lib/news/importarNoticias";

importarNoticias()
  .catch(console.error)
  .finally(() => process.exit());