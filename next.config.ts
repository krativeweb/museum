import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,

  basePath: "/museum",
  assetPrefix: "/museum/",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
