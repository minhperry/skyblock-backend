// build.cjs
const esbuild = require('esbuild');

esbuild.build({
  entryPoints: ['./src/v1/index.ts'],  // Your entry TypeScript file
  outfile: './dist/server.backend.js',      // Output file
  bundle: true,                     // Bundle all dependencies
  platform: 'node',                 // Set platform to Node.js
  target: 'node16',                 // Adjust based on your Node version
  sourcemap: true,                  // Optional, for debugging
  external: [],                     // Any modules you want to exclude
}).catch(() => process.exit(1));
