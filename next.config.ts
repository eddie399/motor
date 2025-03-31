import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
      domains: ['cdn.imagin.studio']
    },
    
    typescript: {
      ignoreBuildErrors: true,
    }

  /* config options here */
};

export default nextConfig;
