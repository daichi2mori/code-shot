/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: process.env.NODE_ENV === "production" ? "/code-shot" : "",
  images: {
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["shiki"],
  },
  transpilePackages: ["shiki"],
};

export default nextConfig;
