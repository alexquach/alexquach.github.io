module.exports = {
  siteMetadata: {
    title: "Alex Quach's Personal Website",
    // pathPrefix: "/", // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"
    siteTitle: "Alex Quach Porfolio", // Navigation and Site Title
    siteTitleShort: "Alex Quach Porfolio", // Alternative Site title for SEO
    siteAuthor: "Alex Quach", // Author Details
    siteLogoText: "Quach", // Text for logo
    siteUrl: "http://thequach.com", // Domain of your site. No trailing slash!
    siteLanguage: "en", // Language Tag on <html> element
    siteDescription:
      "Alex Quach Personal Website - About me and my experiences.",
    siteKeywords: "alex quach personal website porfolio mit",
  },
  plugins: [
    "gatsby-plugin-emotion",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "256429066",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-json",
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    // {
    //   resolve: `gatsby-plugin-typography`,
    //   options: {
    //     pathToConfigModule: `src/utils/typography`
    //   }
    // }
  ],
};
