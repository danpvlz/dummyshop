import { defineConfig } from 'astro/config';

import awsAmplify from 'astro-aws-amplify';

// https://astro.build/config
export default defineConfig({
  site: 'https://amplify.d312qx2bvo4emp.amplifyapp.com',
  output: "server",
  adapter: awsAmplify()
});