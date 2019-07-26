const { PHASE_EXPORT } = require('next/constants')
const copy = require('recursive-copy')

function withPublicFolderPlugin(nextConfig = {}, composePlugins = {}) {
  const { nextComposePlugins } = composePlugins

  const nextConfigMethod = (phase, args) => {
    let orginalConfig = nextConfig

    if (typeof nextConfig === 'function') {
      orginalConfig = nextConfig(phase, args)
    }

    const newConfig = {
      ...orginalConfig,
    }

    if (phase === PHASE_EXPORT) {
      Object.assign(newConfig, {
        exportPathMap: async defaultPathMap => {
          await copy('./public', './out')
          return defaultPathMap
        },
      })
    }

    return newConfig
  }

  const { phase } = composePlugins

  return nextComposePlugins ? nextConfigMethod(phase) : nextConfigMethod
}

module.exports = { withPublicFolderPlugin }
