/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.nps.gov",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
