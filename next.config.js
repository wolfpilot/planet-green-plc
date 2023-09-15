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
