/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    "API_URL": "http://localhost:5000"
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
