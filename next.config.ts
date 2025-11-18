import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "gravatar.com",        pathname: "/avatar/**" },
      { protocol: "https", hostname: "www.gravatar.com",    pathname: "/avatar/**" },
      { protocol: "https", hostname: "secure.gravatar.com", pathname: "/avatar/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
};

export default nextConfig;
