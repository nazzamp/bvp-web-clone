/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "admin.benhvienphoiquangninh.vn",
      },
      {
        protocol: "https",
        hostname: "bvp.nammh15.online",
      },
    ],
  },
};

export default nextConfig;