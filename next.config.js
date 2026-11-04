/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    // AVIF is ~20% smaller than WebP; browsers that lack it get WebP.
    formats: ["image/avif", "image/webp"],
    // Optimised images are cached for 31 days instead of 60 seconds.
    minimumCacheTTL: 2678400,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        pathname: "/images/**",
      },
    ],
  },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  async headers() {
    return [
      {
        // Static images and icons in /public. Files are renamed when replaced.
        source: "/:file((?!_next/).*\\.(?:webp|png|jpg|jpeg|svg|ico))",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=604800, stale-while-revalidate=86400",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
