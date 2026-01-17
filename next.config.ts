import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  // ✅ MUST be set for subfolder hosting
  basePath: isProd ? "/museum" : "",

  assetPrefix: isProd ? "/museum/" : "",

  images: {
    unoptimized: true,
    remotePatterns: !isProd
      ? [
          {
            protocol: "https",
            hostname: "i.pinimg.com",
          },
          {
            protocol: "https",
            hostname: "cdn.prod.website-files.com",
          },
        ]
      : [],
  },
};

export default nextConfig;
