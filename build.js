require('esbuild').build({
    entryPoints: ["./src/app.tsx"],
    outfile: "./dist/app.js",
    minify: true,
    bundle: true
}).catch(() => process.exit(1))