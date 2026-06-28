import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.public.blob.vercel-storage.com",
      },
      {
        protocol: "https",
        hostname: "www.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "science.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "assets.science.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "images-assets.nasa.gov",
      },
      {
        protocol: "https",
        hostname: "www.sciencedaily.com",
      },
      {
        protocol: "https",
        hostname: "phys.org",
      },
      {
        protocol: "https",
        hostname: "agencia.fapesp.br",
      },
    ],
  },
};

export default nextConfig;