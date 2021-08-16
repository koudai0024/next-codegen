module.exports = {
  reactStrictMode: true,
  typescript: { ignoreDevErrors: true },
  poweredByHeader: false,
  pageExtensions: ["page.tsx", "page.ts"],
  async rewrites() {
    return [
      {
        source: "/",
        destination: "/index",
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/index",
        destination: "/",
        permanent: false,
      },
    ];
  },
};
