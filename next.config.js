const {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = (phase) => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environmental variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging =
    phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1';

  const env = {
    API: (() => {
      if (isDev) return 'https://smartcity-dev.jakarta.go.id/api/v1';
      if (isProd) return 'https://smartcity-dev.jakarta.go.id/api/v1';
      if (isStaging) return 'https://smartcity-dev.jakarta.go.id/api/v1';
      return 'RESTURL_SPEAKERS:not (isDev,isProd && !isStaging,isProd && isStaging)';
    })(),
  }

  const basePath = '';

  // next.config.js object
  return {
    env,
    basePath,
    typescript: {
      ignoreBuildErrors: true,
    },
    i18n: {
      locales: ['id', 'en'],
      defaultLocale: 'id',
    },
  }
}
