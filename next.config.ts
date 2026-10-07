import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/ocean-freight-quotation-form-container-type",
        destination: "/quote",
        permanent: false,
      },
      {
        source: "/ocean-freight-quotation",
        destination: "/quote",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
