/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ubuntu.com',
        port: '',
        pathname: '/wp-content/uploads/**/**',
      },
    ],
  },
  output: 'standalone',
};

module.exports = nextConfig;
