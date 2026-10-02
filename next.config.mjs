/** Static export: every page is pre-rendered to plain HTML, so Cloudflare serves it with zero server CPU. */
export default { output: 'export', images: { unoptimized: true }, trailingSlash: true, reactStrictMode: true };
