/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["countryflagsapi.com"],
  },
};

module.exports = nextConfig;
