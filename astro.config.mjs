import { defineConfig } from 'astro/config';

import awsAmplify from 'astro-aws-amplify';

import pagefind from "astro-pagefind";

// https://astro.build/config
export default defineConfig({
  output: "hybrid",
  outDir: "./.amplify-hosting",
  adapter: awsAmplify(),
  integrations: [pagefind()]
});