/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["www.merkeziyetsizhaber.com"],
  },
}

module.exports = nextConfig
