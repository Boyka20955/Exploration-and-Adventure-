// next.config.ts

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "v6ru693wq4.ufs.sh", // ✅ matches your actual hostname
        pathname: "/**",               // ✅ allow everything on that host
      },
    ],
  },
};

export default nextConfig;
