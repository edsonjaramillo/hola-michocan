/** @type {import('next-sitemap').IConfig} */

module.exports = {
  siteUrl: 'https://holamichoacanicecream.com',
  generateRobotsTxt: true,
  changefreq: 'daily',
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
