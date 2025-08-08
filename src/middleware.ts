import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // When `true`, a cookie is set to remember the user's choice
  localeDetection: true
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(zh-TW|zh-CN|en)/:path*']
};