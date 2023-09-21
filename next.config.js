/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: {
      // Enable display of the component name along with the generated className (needed for debugging).
      displayName: true,
      // Enable SSR support
      ssr: true,
      // Optional
      fileName: false,
    },
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [320, 375, 425, 768, 1024, 1440, 1920, 2560, 3840],
    minimumCacheTTL: 31536000,
  },
  webpack: (config) => {
    /**
     * Adding "canvas" fixes isomorphic-dompurify runtime error
     *
     * @see https://github.com/kkomelin/isomorphic-dompurify/issues/54#issuecomment-1703693234
     */
    config.externals = [...config.externals, "canvas", "jsdom"]

    return config
  },
}

module.exports = nextConfig
