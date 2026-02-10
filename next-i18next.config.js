// next-i18next.config.js
module.exports = {
  i18n: {
    locales: ['en', 'fr', 'de'],
    defaultLocale: 'fr',
  },
  reloadOnPrerender: process.env.NODE_ENV === 'development', // Helps with hot reload in development
};