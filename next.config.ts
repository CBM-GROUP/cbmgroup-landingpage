import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Allow builds to complete even when TypeScript reports type errors
    // (useful for incremental migration or generated type issues).
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
