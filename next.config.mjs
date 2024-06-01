/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/code-shot",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["shiki"],
  },
};

export default nextConfig;
