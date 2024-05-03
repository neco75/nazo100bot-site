// next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'nazo100.onrender.com',
          port: '',
          pathname: '/static/**',
        },
      ],
    },
  }
  
  module.exports = nextConfig