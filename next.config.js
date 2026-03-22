/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  // Build optimizasyonunu azalt
  swcMinify: false,
  // TypeScript hatalarını build sırasında görmezden gel
  typescript: {
    ignoreBuildErrors: true,
  },
  // ESLint hatalarını görmezden gel
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig
