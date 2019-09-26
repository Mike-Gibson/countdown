const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants')

const withSass = require("@zeit/next-sass");
const withImages = require('next-images')

module.exports = (phase) => {
  return withImages(withSass({
    cssModules: true,
    assetPrefix: (phase === PHASE_EXPORT || phase === PHASE_PRODUCTION_BUILD)
      ? '/countdown'
      : '',
  }));
}
