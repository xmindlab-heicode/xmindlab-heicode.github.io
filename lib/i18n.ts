import { defineI18n } from 'fumadocs-core/i18n';

// hideLocale: 'default-locale' only affects generated URL strings (nav links,
// breadcrumbs, relative-link resolution). It does NOT set up request-time
// rewriting — this site has no server (output: 'export'), so there is no
// middleware. Instead, English and Chinese are two separate static route
// trees (app/docs/... vs app/zh/docs/...) that physically match these URLs,
// so no middleware is needed for the unprefixed default locale to work.
export const i18n = defineI18n({
  defaultLanguage: 'en',
  languages: ['en', 'zh'],
  parser: 'dot',
  hideLocale: 'default-locale',
});
