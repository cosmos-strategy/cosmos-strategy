/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { hostname: "utfs.io" },
      {
        protocol: "https",
        hostname: "zkok4chdpn.ufs.sh",
        pathname: "/f/**", // Matches everything under /f/
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  async redirects() {
    return [
      {
        source: "/(.*)",
        has: [
          {
            type: "host",
            value: "m.cosmostrategy.com",
          },
        ],
        destination: "https://www.cosmostrategy.com/:1",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
