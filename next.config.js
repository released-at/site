require('dotenv').config()

const withOffline = require('next-offline')
const { join } = require('path')
const Dotenv = require('dotenv-webpack')

const nextConfig = {
  target: 'serverless',
  transformManifest: manifest => ['/'].concat(manifest),
  generateInDevMode: true,
  workboxOpts: {
    swDest: 'static/service-worker.js',
    maximumFileSizeToCacheInBytes: 5000000,
    runtimeCaching: [
      {
        urlPattern: /^https?.*/,
        handler: 'NetworkFirst',
        options: {
          cacheName: 'https-calls',
          networkTimeoutSeconds: 15,
          expiration: {
            maxEntries: 150,
            maxAgeSeconds: 30 * 24 * 60 * 60, // 1 month
          },
          cacheableResponse: {
            statuses: [0, 200],
          },
        },
      },
    ],
  },
  webpack: config => {
    config.plugins = config.plugins || []

    const envVariableFileName = `.env.${process.env.NODE_ENV}`

    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: join(__dirname, envVariableFileName),
        systemvars: true,
      }),
    ]

    return config
  },
}

module.exports = withOffline(nextConfig)
