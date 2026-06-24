import type { NextConfig } from "next";

// Served from a GitHub Pages project site at
// https://urperfectdude.github.io/onesherpa-lander/, so everything lives
// under this base path. Keep in sync with src/lib/base-path.ts.
const basePath = process.env.NODE_ENV === "production" ? "/onesherpa-lander" : "";

const nextConfig: NextConfig = {
  output: "export", // static HTML export for GitHub Pages
  basePath,
  trailingSlash: true, // emit folder/index.html so Pages serves clean URLs
  images: {
    unoptimized: true, // no image optimization server on Pages
  },
};

export default nextConfig;
