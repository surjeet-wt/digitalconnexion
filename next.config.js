/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig
module.exports = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4|webm|pdf)$/,
      use: {
        loader: 'file-loader',
        options: {
          publicPath: '/_next',
          name: 'static/videos/[name].[hash].[ext]',
          
        },
      },
    });

    return config;
  },
};


