/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
  trailingSlash: true,
}

module.exports = nextConfig 