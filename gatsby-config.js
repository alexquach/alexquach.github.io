module.exports = {
  siteMetadata: {
    title: "Alex Quach's Personal Website",
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
  ],
};
