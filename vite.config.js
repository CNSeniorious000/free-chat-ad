import { sveltekit } from "@sveltejs/kit/vite";
import Unocss from "unocss/vite";
import extractorSvelte from "@unocss/extractor-svelte";
import { presetUno, presetIcons, presetWebFonts } from "unocss";

const config = {
  plugins: [
    Unocss({
      extractors: [extractorSvelte()],
      presets: [
        presetUno(),
        presetIcons(),
        presetWebFonts({
          fonts: {
            montserrat: [
              { name: "Montserrat", provider: "bunny", weights: [700, 800] },
              { name: "sans-serif", provider: "none" },
            ],
          },
        }),
      ],
    }),
    sveltekit(),
  ],
};

export default config;
