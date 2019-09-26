const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants')

const withSass = require("@zeit/next-sass");
const withImages = require('next-images')

module.exports = (phase) => {
  return withImages(withSass({
    cssModules: true,
    assetPrefix: (phase === PHASE_EXPORT || phase === PHASE_PRODUCTION_BUILD)
      ? '/countdown'
      : '',
    webpack (config) {
      config.module.rules.push({
        test: /\.ttf$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 100000,
            publicPath: './',
            outputPath: 'static/',
            name: '[name].[ext]'
          }
        }
      });
  
      return config;
    }
  }));
}
