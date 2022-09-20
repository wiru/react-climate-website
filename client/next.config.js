/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ["log"],
    },
  },
  basePath: "/src",
};

module.exports = nextConfig;
