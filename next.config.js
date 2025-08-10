/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    apiUrl: process.env.API_URL,
  },
  images: {
    domains: ["127.0.0.1", "console.rpa-russia.ru"],
  },
};

module.exports = nextConfig;
