import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  /* config options here */
  i18n: {
    locales: ['vi', 'en'],
    defaultLocale: 'vi',
    localeDetection: false,
    domains: [
      {
        domain: 'localhost',
        defaultLocale: 'vi',
      },
      {
        domain: 'localhost/en',
        defaultLocale: 'en',
      },
    ]
  },
};

export default nextConfig;
