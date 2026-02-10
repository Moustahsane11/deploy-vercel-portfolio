// next-i18next.config.js
const path = require('path');

module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'fr',
    localeDetection: false,
  },
  localePath: path.resolve('./public/locales'),
  reloadOnPrerender: process.env.NODE_ENV === 'development',
  serializeConfig: false,
};