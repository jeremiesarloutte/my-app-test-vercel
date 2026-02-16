module.exports = [
"[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-app-test-vercel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript, async loader)", ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "chunks/e2d37_47f88a98._.js",
  "chunks/[root-of-the-server]__39d6cb82._.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport("[turbopack-node]/transforms/postcss.ts { CONFIG => \"[project]/my-app-test-vercel/postcss.config.mjs [postcss] (ecmascript)\" } [postcss] (ecmascript)");
    });
});
}),
];