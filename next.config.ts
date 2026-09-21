import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        formats: ['image/webp'],
        minimumCacheTTL: 2592000,   // 30 days; optimised variants are re-derived on deploy
    },
};

export default nextConfig;
