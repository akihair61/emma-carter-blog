import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/emma-carter-blog",
  assetPrefix: "/emma-carter-blog",
  images: { unoptimized: true },
};

export default nextConfig;
