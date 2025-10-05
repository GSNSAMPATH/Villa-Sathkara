/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.villasathkara.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*"],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
      {
        userAgent: "*",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
    additionalSitemaps: [
      "https://www.villasathkara.com/sitemap.xml",
    ],
  },
};
