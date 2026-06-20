import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/seetha-kalyanam",
  assetPrefix: "/seetha-kalyanam/",
};

export default nextConfig;