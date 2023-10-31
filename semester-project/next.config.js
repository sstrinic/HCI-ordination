/** @type {import('next').NextConfig} */
const nextConfig = {};

module.exports = nextConfig;

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "random-d.uk",
        port: "",
        pathname: "/api/**",
      },
    ],
  },
};
