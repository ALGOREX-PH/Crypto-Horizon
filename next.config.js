/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  webpack: (config, { dev, isServer }) => {
    // Disable webpack caching in development to prevent file system errors
    if (dev) {
      config.cache = false;
    }
    return config;
  },
};

module.exports = nextConfig;