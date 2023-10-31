/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["127.0.0.1", "77.222.63.143"],
  },
  // async rewrites() {
  //   return [
  //     {
  //       source: "/api/upload",
  //       destination: `${process.env.API_URL}/api/todos`,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
