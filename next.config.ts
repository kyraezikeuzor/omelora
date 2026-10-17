import type { NextConfig } from "next";

// Project pages (omelora.org/projects/...) are served by the fundraise app.
const FUNDRAISE_ORIGIN = process.env.FUNDRAISE_ORIGIN ?? "https://fundraise.omelora.org";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      { source: "/projects/:path+", destination: `${FUNDRAISE_ORIGIN}/projects/:path+` },
      { source: "/projects-static/:path+", destination: `${FUNDRAISE_ORIGIN}/projects-static/:path+` },
    ];
  },
};

export default nextConfig;
