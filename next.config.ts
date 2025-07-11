import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  swcMinify: true,
  reactStrictMode: false,
  env: {
    NETLIFY_API_KEY: process.env.NETLIFY_API_KEY,
  },
};

export default nextConfig;
