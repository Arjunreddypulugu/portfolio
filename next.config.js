/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
  assetPrefix: process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio',
  trailingSlash: true,
  // This function helps prepend the basePath to all asset URLs
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(png|jpe?g|gif|svg|webp)$/i,
      use: [
        {
          loader: 'file-loader',
          options: {
            publicPath: `${process.env.NEXT_PUBLIC_BASE_PATH || '/portfolio'}/_next/static/media/`,
            outputPath: 'static/media/',
            name: '[name].[hash].[ext]',
          },
        },
      ],
    });
    return config;
  },
}

module.exports = nextConfig 