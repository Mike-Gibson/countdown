const { PHASE_EXPORT, PHASE_PRODUCTION_BUILD } = require('next/constants')

const withSass = require("@zeit/next-sass");

module.exports = (phase) => {
  return withSass({
    cssModules: true,
    assetPrefix: (phase === PHASE_EXPORT || phase === PHASE_PRODUCTION_BUILD)
      ? '/countdown'
      : '',
  });
}
