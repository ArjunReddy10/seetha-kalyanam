import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  basePath: "/seetha-kalyanam",

  assetPrefix: "/seetha-kalyanam/",

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
};

export default nextConfig;
