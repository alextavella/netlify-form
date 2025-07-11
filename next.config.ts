import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  env: {
    NETLIFY_API_KEY: process.env.NETLIFY_API_KEY,
  },
};

export default nextConfig;
