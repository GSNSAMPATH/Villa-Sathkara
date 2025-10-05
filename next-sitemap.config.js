/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.villasathkara.com",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ["/api/*", "/admin/*", "/thank-you"], // optional exclusion
  generateIndexSitemap: false, // avoid self-referencing sitemap loops
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
      additionalSitemaps: ["https://www.villasathkara.com/sitemap.xml"],
  },
};
