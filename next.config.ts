import type { NextConfig } from "next";

// Base path for project sites served from a subpath (e.g. GitHub Pages at
// https://<user>.github.io/esamesa). Empty locally and for root/custom domains.
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || "";

const nextConfig: NextConfig = {
  agentRules: false,
  // Static HTML export for GitHub Pages (only when building for it, so the
  // regular `next start` dev/preview server keeps working).
  ...(process.env.STATIC_EXPORT === "true" ? { output: "export" as const } : {}),
  ...(basePath ? { basePath } : {}),
  trailingSlash: true,
  images: { unoptimized: true },
};

export default nextConfig;
