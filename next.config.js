/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config');
const { PORTFOLIO_PROFILES } = require('./util/portfolioProfiles');

const profileGuids = Object.values(PORTFOLIO_PROFILES).map((profile) => profile.guid)
const robotHeaders = [{ key: 'X-Robots-Tag', value: 'noindex, nofollow' }]

const nextConfig = {
  i18n,
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  async headers() {
    return profileGuids.flatMap((guid) => ([
      { source: `/${guid}`, headers: robotHeaders },
      { source: `/${guid}/:path*`, headers: robotHeaders },
      { source: `/de/${guid}`, headers: robotHeaders },
      { source: `/de/${guid}/:path*`, headers: robotHeaders },
      { source: `/en/${guid}`, headers: robotHeaders },
      { source: `/en/${guid}/:path*`, headers: robotHeaders },
    ]))
  },
}

module.exports = nextConfig
