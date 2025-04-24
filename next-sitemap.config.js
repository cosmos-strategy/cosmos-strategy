/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "http://localhost:3000",
  generateRobotsTxt: true, // (optional)
  outDir: "./public",
  additionalPaths: async (config) => {
    // Add paths manually if needed
    return [
      { loc: "/" },
      { loc: "/contact-us" },
      { loc: "/our-blogs" },
      { loc: "/our-client-domains" },
      { loc: "/our-offer" },
      { loc: "/our-people" },
      { loc: "/our-profile" },
      { loc: "/our-work" },
      // Add all your website routes here
    ];
  },
  // ...other options
};
