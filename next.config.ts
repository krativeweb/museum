import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.pinimg.com",
      },
      {
        protocol: "https",
        hostname: "cdn.prod.website-files.com",
      },
       {
        protocol: "https",
        hostname: "thekreativeweb.com",
      },
    ],
  },
};

export default nextConfig;
