/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
     remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**",
      },
    ]
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/send0moka/sds-bem-unsoed",
        permanent: false,
      },
    ];
  },
};

module.exports = nextConfig;
