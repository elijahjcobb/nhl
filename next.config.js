/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    fontLoaders: [
      { loader: "@next/font/google", options: { subsets: ["latin"] } },
    ],
  },
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www-league.nhlstatic.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "cms.nhl.bamgrid.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
