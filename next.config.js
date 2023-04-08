/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    return isServer ? config : { ...config, node: false };
  },
};

module.exports = nextConfig;
