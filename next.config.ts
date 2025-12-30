import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ['image/webp'],
        minimumCacheTTL: 60,
        unoptimized: true,
    },
};

export default nextConfig;
