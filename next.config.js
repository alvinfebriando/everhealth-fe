/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/vm3',
  output: 'standalone',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'everhealth-asset.irfancen.com',
      },
    ],
  },
};

module.exports = nextConfig;
