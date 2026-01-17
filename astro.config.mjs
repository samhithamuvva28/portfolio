
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://samhithamuvva28.github.io",
  base: "/portfolio/",
  integrations: [tailwind()],
});
